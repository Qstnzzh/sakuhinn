// 座標チャンネルと音声チャンネルが1対Nの時のModel

component VCCModelMultiple
{
    VCCModel m_SuperClass; // hsにはまだ継承機能がないので疑似的に再現

    string m_CurrentPositionChannelId;
    string m_CurrentVoiceChannelId;
    int m_CurrentVoiceChannelIndex;

    list<VCCChannelData> m_ChannelList;
    VCCChannelData m_CurrentChannel;

    bool m_IsConnected;

    string m_WorldId;

    public VCCModelMultiple()
    {
        m_CurrentVoiceChannelIndex = -1;

        m_ChannelList = new list<VCCChannelData>();

        m_IsConnected = false;

        m_WorldId = hel_get_worldid();
    }

    public void SetPositionChannelID(string ChannelID)
    {
        // 開始時に何かしらの共通のPositionIDが渡される想定
        m_CurrentPositionChannelId = ChannelID;
    }

    public VCCChannelData GetCurrentChannel()
    {
        return m_CurrentChannel;
    }

    public list<VCCChannelData> GetChannelList()
    {
        return m_ChannelList;
    }

    public bool IsConnected()
    {
        return m_IsConnected;
    }

    public string GetRoomId()
    {
        string EnterChanelID = m_CurrentPositionChannelId + "__" + m_CurrentVoiceChannelId;
        return EnterChanelID;
    }

    public string GetVCNumber()
    {
        return m_CurrentVoiceChannelId;
    }

    public void OnReceiveUpdateChannel(string ChannelName)
    {
        m_CurrentChannel.ChannelName = ChannelName;
        
        VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
        if(viewModel !== null)
        {
            viewModel.UpdateConnectStatus(m_CurrentChannel, 0, true, false);
        }
    }

    // チャンネルリストのFetch周り ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void FetchChannelList()
    {
        m_ChannelList.Clear();

        // 音声チャンネルリストを表示
        api.channelSessionApi.fetchPositionChannelVoiceChannelList(_fetchPositionChannelVoiceChannelListCallback, m_CurrentPositionChannelId);
    }

    void _fetchPositionChannelVoiceChannelListCallback(string param)
    {
        Json VoiceChannelListJson = hsLoadJson(param);
        if(VoiceChannelListJson === null) return;

        Json data = VoiceChannelListJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json voice_channels = data.Find(EJSONDataType_Array, "voice_channels");
        if(voice_channels === null) return;
        list<Json> voice_channels_array = voice_channels.GetArrayList();

        for(int i = 0; i < voice_channels_array.Count; i++)
        {
            //
            Json VoiceChannel = voice_channels_array[i];
            if(VoiceChannel === null) continue;

            string channel_id;
            VoiceChannel.FindValueString("channel_id", channel_id);

            string spatium_code;
            VoiceChannel.FindValueString("spatium_code", spatium_code);

            string world_code;
            VoiceChannel.FindValueString("world_code", world_code);

            string channel_type;
            VoiceChannel.FindValueString("channel_type", channel_type);

            string name;
            VoiceChannel.FindValueString("name", name);

            string description;
            VoiceChannel.FindValueString("description", description);

            string channel_password;
            VoiceChannel.FindValueString("channel_password", channel_password);

            int max_player_count = 0;
            VoiceChannel.FindValueInt("max_player_count", max_player_count);

            int max_voice_player_count = 0;
            VoiceChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

            Json users = VoiceChannel.Find(EJSONDataType_Array, "users");
            if(users === null) return;

            list<Json> users_array = users.GetArrayList();
            list<VCCUserData> JoinUsersData = new list<VCCUserData>();

            for(int UserIndex = 0; UserIndex < users_array.Count; UserIndex++)
            {
                // 最大ボイスチャンネル入室数以上のユーザー情報は無意味なのでそこで処理を抜ける
                if(UserIndex >= max_voice_player_count) break;

                //
                Json user = users_array[UserIndex];
                if(user === null) continue;

                string name;
                user.FindValueString("name", name);

                string icon;
                user.FindValueString("icon", icon);

                string uid;
                user.FindValueString("uid", uid);

                VCCUserData UserData = new VCCUserData();
                UserData.UserName = name;
                UserData.IconURL = icon;
                UserData.UserCode= uid;

                JoinUsersData.Add(UserData);
            }

            VCCChannelData Channel = new VCCChannelData();
            Channel.ChannelId = (channel_id);
            Channel.SpatiumCode = (spatium_code);
            Channel.WorldCode = (world_code);
            Channel.ChannelType = (channel_type);
            Channel.ChannelName = (name);
            Channel.Description = (description);   
            Channel.MaxPlayerCount = (max_player_count);
            Channel.MaxVoicePlayerCount = (max_voice_player_count);   
            Channel.JoinUsersData = (JoinUsersData);

            m_ChannelList.Add(Channel);
        }

        VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
        if(viewModel !== null)
        {
            viewModel.ShowChannelList(m_ChannelList);
        }
    }

    // チャンネルの作成 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void CreateNewChannel(string ChannelName, string SelectedChannelType)
    {
        api.channelSessionApi.createVoiceChannel(_createVoiceChannelCallback, m_CurrentPositionChannelId, SelectedChannelType, ChannelName, "");
    }

    public void UpdateChannel(string ChannelName, string SelectedChannelType)
    {
        api.channelSessionApi.updateVoiceChannel(_updateVoiceChannelCallback, m_CurrentVoiceChannelId, SelectedChannelType, ChannelName, "");
    }

    void _createVoiceChannelCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json ChannelJson = hsLoadJson(param);
        if(ChannelJson === null) return;

        Json data = ChannelJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json voice_channel = data.Find(EJSONDataType_Block, "voice_channel");
        if(voice_channel === null) return;

        string channel_id;
        voice_channel.FindValueString("channel_id", channel_id);

        // 新しく作成したルームに入室する
        m_CurrentVoiceChannelId = channel_id;
        _CallConnectProcess();
    }

    void _updateVoiceChannelCallback(string param)
    {
        // チャンネル名を取得
        // 今はカーネリアンの動作確認のしようが無いので値の取得は後回し
        VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
        if(viewModel !== null)
        {
            viewModel.UpdateConnectStatus(m_CurrentChannel, m_CurrentVoiceChannelIndex, true, true);
        }

        // チャンネル情報が更新されたことを通知する
        // hsNetSendCustomData("VCC_Update_Channel", m_CurrentChannel.ChannelName);
    }

    // 入室 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void Connect(int SelectedChannelIndex, int CurrentUserCount)
    {
        if(SelectedChannelIndex >= 0 && SelectedChannelIndex < m_ChannelList.Count)
        {
            VCCChannelData CurrentChannel = m_ChannelList[SelectedChannelIndex];

            // 自身が入室しても現在の入室人数が最大人数以下なら入室する
            if(CurrentUserCount + 1 <= CurrentChannel.MaxVoicePlayerCount)
            {
                string ChannelId = CurrentChannel.ChannelId;
                ChannelId = ChannelId.SubString(ChannelId.Length() - 6, 6);

                if(ChannelId.IsEmpty()) return;

                m_CurrentChannel = CurrentChannel;
                m_CurrentVoiceChannelId = ChannelId;

                // ボイスチャンネルに入室
                _CallConnectProcess();
            }
            else
            {
                string message;
                if(system.IsLangJA())
                {
                    message = "選択された部屋は満席のため入室できません。";
                }
                else
                {
                    message = "Selected Room is full, so you cannot enter.";
                }

                LayerBundle layer = hsLayerGet("toast");
                if(layer !== null)
                {
                    layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
                    layer.CallComponentMethod("ToastViewModel", "NotifyMessage", message);
                }
            }
        }
    }

    public void ConnectFromRoomID(string RoomID)
    {
        string PositionID;
        string VoiceID;

        // VoiceIDとPositionID取得
        {   
            string currentStr = RoomID;

            VoiceID = currentStr.SubString(currentStr.Length() - 6, 6);

            currentStr = currentStr.SubString(0, currentStr.Length() - 6 - 2);

            PositionID = currentStr;
        }

        if(!PositionID.IsEmpty() && !VoiceID.IsEmpty())
        {
            m_CurrentPositionChannelId = PositionID;
            m_CurrentVoiceChannelId = VoiceID;

            // ルームIDが存在する場合はそのルームに入る
            api.channelSessionApi.enterPositionChannel(_enterPositionChannelCallback, m_CurrentPositionChannelId);
        }
        else
        {
            // ルームIDが存在しない場合はランダムなFreeTalkに入室する
            m_CurrentVoiceChannelId = "";
            api.channelSessionApi.enterPositionChannel(_enterPositionChannelCallbackOnFreeTalk, m_CurrentPositionChannelId);
        }
    }

    public void ConnectFromChannelNumber(string ChannelNumber)
    {
        if(ChannelNumber.IsEmpty()) return;

        m_CurrentVoiceChannelId = ChannelNumber;

        _enterVoiceChannelCallback("");
    }

    void _enterPositionChannelCallback(string param)
    {
        // RTC接続
        hel_net_connect();

        // 指定ルームの入室人数をチェック
        api.channelSessionApi.fetcthVoiceChannelDetail(_fetcthVoiceChannelDetailCallback, m_CurrentVoiceChannelId);
        
    }

    void _fetcthVoiceChannelDetailCallback(string param)
    {
        if(_CheckRoomAvailable(param))
        {
            // 空いているので入室する
            _CallConnectProcess();
        }
        else
        {
            // 指定のルームが満室なのでランダムなfreechatに入室する
            m_CurrentVoiceChannelId = "";
            api.channelSessionApi.enterPositionChannel(_enterPositionChannelCallbackOnFreeTalk, m_CurrentPositionChannelId);
        }
    }

    bool _CheckRoomAvailable(string param)
    {
        // Json PositionChannelJson = hsLoadJson(param);
        // if(PositionChannelJson === null) return false;

        // Json data = PositionChannelJson.Find(EJSONDataType_Block, "data");
        // if(data === null) return false;
        
        Json VoiceChannel = hsLoadJson(param);
        if(VoiceChannel === null) return false;

        string channel_id;
        VoiceChannel.FindValueString("channel_id", channel_id);

        int max_voice_player_count = 0;
        VoiceChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

        Json users = VoiceChannel.Find(EJSONDataType_Array, "users");
        if(users === null) return false;

        list<Json> users_array = users.GetArrayList();

        // 満員かどうか
        if(users_array.Count + 1 > max_voice_player_count) return false;

        // ルームが空いている
        return true;
    }

    void _enterPositionChannelCallbackOnFreeTalk(string param)
    {
        // RTC接続
        hel_net_connect();

        // ランダムなFreeTalkのボイスチャンネルに入室
        api.channelSessionApi.fetchPositionChannelVoiceChannelList(_fetchRandomFreeChatCallback, m_CurrentPositionChannelId);
    }

    void _CallConnectProcess()
    {
        api.channelSessionApi.leaveVoiceChannel(_leaveVoiceChannelCallbackOnConnectProcess); 
    }

    void _leaveVoiceChannelCallbackOnConnectProcess(string param)
    {
        // UserTableをリセットする
        m_SuperClass.ClearUserTable();

        hel_net_disconnect_room();
        hel_net_disconnect();
        hel_skyway_set_roomid("");

        // 入室
        api.channelSessionApi.enterVoiceChannel(_enterVoiceChannelCallback, m_CurrentVoiceChannelId);

        // api.channelSessionApi.leavePositionChannel(_leavePositionChannelCallbackOnConnectProcess);
    }

    void _leavePositionChannelCallbackOnConnectProcess(string param)
    {
    }

    void _enterVoiceChannelCallback(string param)
    {
        if(!m_CurrentPositionChannelId.IsEmpty() && !m_CurrentVoiceChannelId.IsEmpty())
        {
            // チャンネル情報編集UIの表示切替
            hsCanvasResetToggleDefault("Toggle_VCC_Is_Channel_Creator");
            if(!m_CurrentChannel.CreateUserCode.IsEmpty() && m_SuperClass.GetSelfUserData().UserCode == m_CurrentChannel.CreateUserCode)
            {
                hsCanvasToggleChange("Toggle_VCC_Is_Channel_Creator");
            }

            // チャンネル作成者のUserCodeを設定
            m_SuperClass.SetCreateUserCode(m_CurrentChannel.CreateUserCode);

            // 新しい音声チャンネルに入室する
            string RoomID = m_CurrentPositionChannelId + "__" + m_CurrentVoiceChannelId;            
            // hel_skyway_set_roomid(RoomID);
            hel_net_connect_room(RoomID);

            // エンジン側のRoomIDとURLを更新
            hel_net_replace_room_url_with_roomid(RoomID);

            // テキチャの通知設定
            api.textChat.watchTextChatNotification(g_SpatiumCode, m_WorldId, RoomID);

            // UserTaleを更新する
            m_SuperClass.AddSelfToUserTable();

            // VCCViewのステータスを更新する
            VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
            if(viewModel !== null)
            {
                viewModel.UpdateConnectStatus(m_CurrentChannel, m_CurrentVoiceChannelIndex, true, true);
            }

            string message;
            if(system.IsLangJA())
            {
                message = "『" + m_CurrentChannel.ChannelName + "』" + "に参加しました";
            }
            else
            {
                message = "Join" + "\"" + m_CurrentChannel.ChannelName + "\"";
            }

            LayerBundle layer = hsLayerGet("toast");
            if(layer !== null)
            {
                layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
                layer.CallComponentMethod("ToastViewModel", "NotifyMessage", message);
            }

            m_IsConnected = true;
        }
    }

    // ランダムフリーチャットへの入室
    void _fetchRandomFreeChatCallback(string param)
    {
        Json VoiceChannelListJson = hsLoadJson(param);
        if(VoiceChannelListJson === null) return;

        Json data = VoiceChannelListJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json voice_channels = data.Find(EJSONDataType_Array, "voice_channels");
        if(voice_channels === null) return;
        list<Json> voice_channels_array = voice_channels.GetArrayList();

        for(int i = 0; i < voice_channels_array.Count; i++)
        {
            Json VoiceChannel = voice_channels_array[i];
            if(VoiceChannel === null) continue;

            string channel_id;
            VoiceChannel.FindValueString("channel_id", channel_id);

            string name;
            VoiceChannel.FindValueString("name", name);

            int max_voice_player_count = 0;
            VoiceChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

            Json users = VoiceChannel.Find(EJSONDataType_Array, "users");
            if(users === null) return;

            list<Json> users_array = users.GetArrayList();

            // APIでランダム入室が実装されるまではひとまずチャンネルを全探索して名前が`FreeTalk_〇〇`に合致するものに入室する
            // 文字列が合致するかどうか
            if(name.Length() < 8 || name.SubString(0, 8) != "FreeTalk") continue;

            // 満員かどうか
            if(users_array.Count + 1 > max_voice_player_count) continue;

            // FreeTalkが見つかったので入室する
            m_CurrentVoiceChannelId = channel_id;
            _CallConnectProcess();

            return;
        }

        // `FreeTalk_〇〇`が存在しないか満室なので新しくルームを作成する
        string NewRoomName = "FreeTalk_" + hel_get_vcuid().SubString(0, 6);
        CreateNewChannel(NewRoomName, CHANNEL_TYPE_OPEN);
    }

    // 切断 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void Disconnect()
    {
        api.channelSessionApi.leaveVoiceChannel(_leaveVoiceChannelCallback); 
    }

     void _leaveVoiceChannelCallback(string param)
    {
        hel_net_disconnect_room();
        hel_net_disconnect();
        hel_skyway_set_roomid("");

        string message;
        if(system.IsLangJA())
        {
            message = "ボイスチャットグループから退出しました";
        }
        else
        {
            message = "Left the voice chat group";
        }

        LayerBundle layer = hsLayerGet("toast");
        if(layer !== null)
        {
            layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
            layer.CallComponentMethod("ToastViewModel", "NotifyMessage", message);
        }

        m_IsConnected = false;
        m_CurrentVoiceChannelIndex = -1;
        m_CurrentVoiceChannelId = "";

        // UserTableをリセットする
        m_SuperClass.ClearUserTable();
    }
}