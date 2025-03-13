component VCCModel
{
    bool m_AllowMultiVoiceChannel;
    VCCJoinUserTable m_JoinUserTable;
    VCCUserData m_SelfUserData;
    bool m_IsFirst;

    VCCModelSingle m_SubSingleModel;
    VCCModelMultiple m_SubMultipleModel;

    public VCCModel()
    {
        m_SubSingleModel = system.Layer_GetComponentByName<VCCModelSingle>("vcc_icon_only_base");
        m_SubMultipleModel = system.Layer_GetComponentByName<VCCModelMultiple>("vcc_icon_only_base");

        m_AllowMultiVoiceChannel = false;
        m_JoinUserTable = new VCCJoinUserTable();

        m_SelfUserData = new VCCUserData();

        m_IsFirst = true;

        // ChS-APIの初期化
        api.channelSessionApi.initChannelSession(_initChannelSessionCallback);

        // 初回入室処理
        hel_net_add_EnterDialog_func(_EnterDialogCallback);
    }

    public VCCUserData GetSelfUserData()
    {
        return m_SelfUserData;
    }

    public bool IsChannelCreator()
    {
        bool IsCreator = false;

        if(m_AllowMultiVoiceChannel)
        {
            string CreateUserCode = m_SubMultipleModel.GetCurrentChannel().CreateUserCode;
            IsCreator = (!CreateUserCode.IsEmpty() && CreateUserCode == m_SelfUserData.UserCode);
        }
        else
        {
            string CreateUserCode = m_SubSingleModel.GetCurrentChannel().CreateUserCode;
            IsCreator = (!CreateUserCode.IsEmpty() && CreateUserCode == m_SelfUserData.UserCode);
        }

        return IsCreator;
    }

    void _EnterDialogCallback()
    {
        string RoomID = hel_skyway_get_roomid();
        ConnectFromRoomID(RoomID);
    }

    void _initChannelSessionCallback(string param)
    {
        string WorldId = hel_get_worldid();
        api.channelSessionApi.fetchWolrdDetail(_fetchWolrdDetailCallback, g_SpatiumCode, WorldId);
    }

    void _fetchWolrdDetailCallback(string param)
    {
        //
        if(param.IsEmpty()) return;
        Json WorldDetail = hsLoadJson(param);
        if(WorldDetail === null) return;

        Json data = WorldDetail.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json world = data.Find(EJSONDataType_Block, "world");
        if(world === null) return;

        int allow_multi_voice_channel_int;
        world.FindValueInt("allow_multi_voice_channel", allow_multi_voice_channel_int);

        // カーネリアンのような複数音声チャンネルを許可するか
        bool allow_multi_voice_channel = false;
        Json allow_multi_Json = world.GetData("allow_multi_voice_channel");
        if(allow_multi_Json !== null)
        {
            string str_allow_multi = allow_multi_Json.GetValue();
            allow_multi_voice_channel = (str_allow_multi == "true");
        }

        m_AllowMultiVoiceChannel = allow_multi_voice_channel;

        // セッション情報を取得
        api.channelSessionApi.fetchChannelSession(_fetchChannelSessionCallback);
    }

    void _fetchChannelSessionCallback(string param)
    {
        if(param.IsEmpty()) return;

        // 自身のユーザーデータを更新
        Json ChannelSession = hsLoadJson(param);
        if(ChannelSession === null) return;

        Json data = ChannelSession.Find(EJSONDataType_Block, "data");
        if(data === null) return; 

        Json decode_jwt = data.Find(EJSONDataType_Block, "decode_jwt");
        if(decode_jwt === null) return;

        string channel_session_code;
        decode_jwt.FindValueString("channel_session_code", channel_session_code);

        m_SelfUserData.ChannelSessionCode = channel_session_code;
        
        // MultipleModelの初期化
        if(m_AllowMultiVoiceChannel)
        {
            // 複数ボイスチャンネルようのGUIをオンにする
            hsCanvasResetToggleDefault("Toggle_VCC_VCh_Single_Multiple");
            hsCanvasToggleChange("Toggle_VCC_VCh_Single_Multiple");

            // Position Channel IDを取得する
        }
    }

    public void UpdateSelfUserData(string UserName, string IconURL, string UserCode, string UserType)
    {
        m_SelfUserData.UserName = UserName;
        m_SelfUserData.IconURL = IconURL;
        m_SelfUserData.UserCode = UserCode;
        m_SelfUserData.UserType = UserType;

        m_JoinUserTable.UpdateSelfUserData(m_SelfUserData);

        // 送信するデータを設定
        string SendData =
            "{" +
                "\"" + "channel_session_code" + "\"" + ":" + "\"" + m_SelfUserData.ChannelSessionCode           + "\"" + "," + 
                "\"" + "user_code"            + "\"" + ":" + "\"" + m_SelfUserData.UserCode                 + "\"" + "," + 
                "\"" + "user_type"            + "\"" + ":" + "\"" + m_SelfUserData.UserType                     + "\"" + "," + 
                "\"" + "user_name"            + "\"" + ":" + "\"" + m_SelfUserData.UserName                     + "\"" + "," + 
                "\"" + "icon_url"             + "\"" + ":" + "\"" + m_SelfUserData.IconURL                      + "\"" + 
            "}"
        ;

        // <メモ> //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 〇データ送信について
        // hsNetSetCustomState・hsNetSendCustomDataは座標チャンネル単位で送られるデータである
        // 今はまだ仕方がないが、ここの実装は今後RTCの抽象化が進んだ場合、音声チャンネル単位で発火するようなhsNetSetCustomStateに置き換える必要がある
        // でないと、例えばカーネリアンで左上のユーザーリストに座標チャンネルの全ユーザーが表示されるようになってしまう
        // 
        // 〇 VCCUserDataについて
        // VCCUserDataは今後、VCC外では使わせないような形にしたい
        // VCCUserDataはもともとは音声チャンネルのための機能で座標チャンネルでのデータ管理は全てhsNetSetCustomStateに移譲したい(エンジンの座標チャンネルのユーザーテーブルのようなもの)
        // => なのでProfile取得はVCCUserDataではなく、CustomStateに登録されているVketIDを取得してそれを元に行うようにする
        // => CustomStateは今後Playerクラスから取得できるようになる
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        hsNetSetCustomState("VCC_UserData", SendData);

        if(!m_IsFirst)
        {
            hsNetSendCustomData("VCC_UserData", SendData);
        }

        // 更新データの送信を可能にする
        if(m_IsFirst)
        {
            m_IsFirst = false;
        }

        // チャンネル作成者か確認する
        hsCanvasResetToggleDefault("Toggle_VCC_Is_Channel_Creator");
        VCCChannelData CurrentChannel = null;
        if(m_AllowMultiVoiceChannel)
        {
            CurrentChannel = m_SubMultipleModel.GetCurrentChannel();
        }
        else
        {
            CurrentChannel = m_SubSingleModel.GetCurrentChannel();
        }

        if(CurrentChannel !== null && m_SelfUserData.UserCode == CurrentChannel.CreateUserCode)
        {
            hsCanvasToggleChange("Toggle_VCC_Is_Channel_Creator");
        }
    }

    // ゲッター・セッター ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public list<VCCUserData> GetCurrentUserTable()
    {
        return m_JoinUserTable.Data;
    }
    
    public void SetCreateUserCode(string CreateUserCode)
    {
        m_JoinUserTable.CreateUserCode = CreateUserCode;
    }

    public void ClearUserTable()
    {
        m_JoinUserTable.Clear();
    }

    public void AddSelfToUserTable()
    {
        // 自身をユーザーテーブルに追加する
        Player SelfPlayer = hsPlayerGet();
        string peerid = SelfPlayer.GetID();

        m_SelfUserData.PlayerID = peerid;
        m_JoinUserTable.Add(m_SelfUserData);
    }

    public VCCChannelData GetCurrentChannel()
    {
        VCCChannelData data;
        if(m_AllowMultiVoiceChannel)
        {
            data = m_SubMultipleModel.GetCurrentChannel();
        }
        else
        {
            data = m_SubSingleModel.GetCurrentChannel();
        }

        return data;
    }

    public list<VCCChannelData> GetChannelList()
    {
        list<VCCChannelData> data;
        if(m_AllowMultiVoiceChannel)
        {
            data = m_SubMultipleModel.GetChannelList();
        }
        else
        {
            data = m_SubSingleModel.GetChannelList();
        }

        return data;
    }

    public bool IsConnected()
    {
        return (m_AllowMultiVoiceChannel)? m_SubMultipleModel.IsConnected() : m_SubSingleModel.IsConnected();
    }

    public string GetRoomId()
    {
        return (m_AllowMultiVoiceChannel)? m_SubMultipleModel.GetRoomId() : m_SubSingleModel.GetRoomId();
    }

    public string GetVCNumber()
    {
        return (m_AllowMultiVoiceChannel)? m_SubMultipleModel.GetVCNumber() : m_SubSingleModel.GetVCNumber();
    }

    // チャンネルリストのFetch周り ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void FetchChannelList()
    {
        // skywayは座標チャンネルリスト, カーネリアンは音声チャンネルリストを表示する
        // どちらを使うかは、おそらく今後実装されるワールド詳細APIがカーネリアンの座標チャンネルIDを持っているかで判断できるはず
        // ひとまず今はskywayだけに対応する
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.FetchChannelList();
        }
        else
        {
            m_SubSingleModel.FetchChannelList();
        }
    }
    
    // Connect /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void Connect(int SelectedChannelIndex)
    {
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.Connect(SelectedChannelIndex, m_JoinUserTable.Count);
        }
        else
        {
            m_SubSingleModel.Connect(SelectedChannelIndex);
        }
    }

    public void ConnectFromRoomID(string RoomID)
    {
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.ConnectFromRoomID(RoomID);
        }
        else
        {
            m_SubSingleModel.ConnectFromRoomID(RoomID);
        }
    }

    public void ConnectFromChannelNumber(string ChannelNumber)
    {
        // ボイスチャンネル番号を指定して入室するのはカーネリアン限定の機能
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.ConnectFromChannelNumber(ChannelNumber);
        }
    }

    public void Disconnect()
    {
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.Disconnect();
        }
        else
        {
            m_SubSingleModel.Disconnect();
        }       
    }

    // チャンネルの作成 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void CreateNewChannel(string ChannelName, string SelectedChannelType)
    {
        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.CreateNewChannel(ChannelName, SelectedChannelType);
        }
        else
        {
            m_SubSingleModel.CreateNewChannel(ChannelName, SelectedChannelType);
        }
    }

    public void UpdateChannel(string ChannelName, string SelectedChannelType)
    {
        if(ChannelName.IsEmpty() || SelectedChannelType.IsEmpty()) return;

        if(m_AllowMultiVoiceChannel)
        {
            m_SubMultipleModel.UpdateChannel(ChannelName, SelectedChannelType);
        }
        else
        {
            m_SubSingleModel.UpdateChannel(ChannelName, SelectedChannelType);
        }
    }

    // ネットワーク同期周り/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void JoinRoom(string ID, string Data)
    {
    }

    public void LeaveRoom(string ID, string Data)
    {
        // ユーザーテーブルから該当プレイヤーを削除する
        for(int i = 0; i < m_JoinUserTable.Count; i++)
        {
            if(!ID.IsEmpty() && ID == m_JoinUserTable.Data[i].PlayerID)
            {
                m_JoinUserTable.RemoveAt(i);
                m_JoinUserTable.DropUserDataStash(ID);

                break;
            }
        }
    }

    public void OnReceiveCustomState(string id, string type, string data)
    {
        if(type == "VCC_UserData")
        {
            // ユーザーリストに含まれていなければ追加する
            for(int i = 0; i < m_JoinUserTable.Count; i++)
            {
                if(m_JoinUserTable.Data[i].PlayerID == id)
                {
                    return;
                }
            }

            // Stashユーザーリストにも含まれていないかチェックする
            // Stashユーザーリストは一時非表示中のユーザーリスト
            // 新規ユーザーが入ってくると既存のユーザーにもユーザー情報が一斉送信されるのでここでチェックする必要がある
            for(int i = 0; i < m_JoinUserTable.StashData.Count; i++)
            {
                if(m_JoinUserTable.StashData[i].PlayerID == id)
                {
                    return;
                }
            }

            // dataを解析してユーザーを作成
            Json UserJson = hsLoadJson(data);
            if(UserJson === null) return;

            string channel_session_code;
            UserJson.FindValueString("channel_session_code", channel_session_code);

            string user_code;
            UserJson.FindValueString("user_code", user_code);

            string user_type;
            UserJson.FindValueString("user_type", user_type);

            string user_name;
            UserJson.FindValueString("user_name", user_name);

            string icon_url;
            UserJson.FindValueString("icon_url", icon_url);

            VCCUserData User = new VCCUserData();
            User.PlayerID = id;
            User.ChannelSessionCode = channel_session_code;
            User.UserCode = user_code;
            User.UserType = user_type;
            User.UserName = user_name;
            User.IconURL = icon_url;

            m_JoinUserTable.Add(User);
        }
    }

    public void OnReceiveCustomData(string id, string type, string data)
    {
        if(type == "VCC_UserData")
        {
            // ユーザーリストに含まれていればテーブル上のそのユーザーデータを更新する
            int UserIndex = -1;
            for(int i = 0; i < m_JoinUserTable.Count; i++)
            {
                if(m_JoinUserTable.Data[i].PlayerID == id)
                {
                    UserIndex = i;

                    break;
                }
            }

            // dataを解析してユーザーデータを更新
            Json UserJson = hsLoadJson(data);
            if(UserJson === null) return;

            string channel_session_code;
            UserJson.FindValueString("channel_session_code", channel_session_code);

            string user_code;
            UserJson.FindValueString("user_code", user_code);

            string user_type;
            UserJson.FindValueString("user_type", user_type);

            string user_name;
            UserJson.FindValueString("user_name", user_name);

            string icon_url;
            UserJson.FindValueString("icon_url", icon_url);

            m_JoinUserTable.UpdateUserData(UserIndex, channel_session_code, user_code, user_type, user_name, icon_url);
        }
        else if(type == "VCC_Update_Channel")
        {
            string ChannelName = data;

            if(ChannelName.IsEmpty()) return;

            if(m_AllowMultiVoiceChannel)
            {
                m_SubMultipleModel.OnReceiveUpdateChannel(ChannelName);
            }
            else
            {
                m_SubSingleModel.OnReceiveUpdateChannel(ChannelName);
            }
        }
        else if(type == "VCC_RemovePlayer")
        {
            // キック対象のUserCodeが自身のものと一致していれば強制的に退出処理を実行する
            if(!data.IsEmpty() && m_SelfUserData.UserCode == data)
            {
                LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("VCCViewModel", "ExitChanel", "");
                }
            }
        }
        else if(type == "VCC_Push_UserData_Stash")
        {
            // 指定のUserCodeのユーザーをボイスチャンネルユーザーリストから除外しStashDataに入れる
            if(!data.IsEmpty() && m_SelfUserData.UserCode == data)
            {
                m_JoinUserTable.PushUserDataStash(id);
            }
        }
        else if(type == "VCC_Apply_UserData_Stash")
        {
            // 指定のUserCodeのユーザーをStashDataからボイスチャンネルユーザーリストに戻す
            if(!data.IsEmpty() && m_SelfUserData.UserCode == data)
            {
                m_JoinUserTable.ApplyUserDataStash(id);
            }
        }
    }

    // プレイヤーのMicStateの更新を受信
    public void OnUpdatedPlayerMicState(string ID, int MicState)
    {
        Player SelfPlayer = hsPlayerGet();
        string SelfPeerid = SelfPlayer.GetID();

        for(int i = 0; i < m_JoinUserTable.Count; i++)
        {
            if(m_JoinUserTable.Data[i].PlayerID == ID)
            {
                m_JoinUserTable.Data[i].SetMicState(MicState);

                return;
            }

            if(ID == SelfPeerid)
            {
                m_JoinUserTable.Data[i].SetMicState(MicState);

                return;
            }
        }
    }

    // 指定されたユーザーをキックしインゲーム(RTC)から強制退出させる
    public void RemovePlayer(string UserCode)
    {
        hsNetSendCustomData("VCC_RemovePlayer", UserCode);
    }

    // 指定されたユーザーをブロックする. ボイスチャンネルユーザーリストから除外しStashDataに入れる
    public void Block(string UserCode)
    {
        for(int i = 0; i < m_JoinUserTable.Count; i++)
        {
            if(m_JoinUserTable.Data[i].UserCode == UserCode)
            {
                m_JoinUserTable.PushUserDataStash(m_JoinUserTable.Data[i].PlayerID);

                hsNetSendCustomData("VCC_Push_UserData_Stash", UserCode);

                break;
            }
        }
    }

    // 指定されたユーザーをアンブロックする. StashDataからボイスチャンネルユーザーリストに復帰する
    public void UnBlock(string UserCode)
    {
        for(int i = 0; i < m_JoinUserTable.StashData.Count; i++)
        {
            if(m_JoinUserTable.StashData[i].UserCode == UserCode)
            {
                m_JoinUserTable.ApplyUserDataStash(m_JoinUserTable.StashData[i].PlayerID);

                hsNetSendCustomData("VCC_Apply_UserData_Stash", UserCode);

                break;
            }
        }
    }

    // 指定されたユーザーを一時的にブロックする(名前とアイコン表示をグレーアウトする)
    public void BlockTempolary(string UserCode)
    {
        for(int i = 0; i < m_JoinUserTable.Count; i++)
        {
            if(m_JoinUserTable.Data[i].UserCode == UserCode)
            {
                m_JoinUserTable.Data[i].ShowTempBlockUI(true);

                hsNetSendCustomData("VCC_Push_UserData_Stash", UserCode);

                break;
            }
        }
    }

    // 一時ブロックの解除
    public void UnBlockTempolary(string UserCode)
    {
        for(int i = 0; i < m_JoinUserTable.Count; i++)
        {
            if(m_JoinUserTable.Data[i].UserCode == UserCode)
            {
                m_JoinUserTable.Data[i].ShowTempBlockUI(false);

                hsNetSendCustomData("VCC_Apply_UserData_Stash", UserCode);

                break;
            }
        }
    }
}