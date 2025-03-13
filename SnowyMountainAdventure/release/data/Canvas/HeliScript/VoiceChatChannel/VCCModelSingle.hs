// 座標チャンネルと音声チャンネルが1対1の時のModel

component VCCModelSingle
{
    VCCModel m_SuperClass; // hsにはまだ継承機能がないので疑似的に再現

    string m_CurrentPositionChannelId;

    list<VCCChannelData> m_ChannelList;
    VCCChannelData m_CurrentChannel;

    bool m_IsConnected;

    string m_WorldId;

    public VCCModelSingle()
    {
        m_SuperClass = system.Layer_GetComponentByName<VCCModel>("vcc_icon_only_base");

        m_ChannelList = new list<VCCChannelData>();

        m_IsConnected = false;

        m_WorldId = hel_get_worldid();
    }

    string _Convert2CorrectCode(string UserCode)
    {
        string InvalidStr = ("vketaccount__");
        int Index = UserCode.IndexOf(InvalidStr);

        return (Index != -1)? UserCode.SubString(InvalidStr.Length(), UserCode.Length() - InvalidStr.Length()) : UserCode;
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
        return m_CurrentPositionChannelId;
    }

    public string GetVCNumber()
    {
        return "";
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

        // 座標チャンネルリストを表示
        api.channelSessionApi.fetchWolrdPositionChannelList(_fetchWolrdPositionChannelList, g_SpatiumCode, m_WorldId);
    }

    void _fetchWolrdPositionChannelList(string param)
    {
        if(param.IsEmpty()) return;

        Json PositionChannelListJson = hsLoadJson(param);
        if(PositionChannelListJson === null) return;

        Json data = PositionChannelListJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json position_channels = data.Find(EJSONDataType_Array, "position_channels");
        if(position_channels === null) return;

        list<Json> position_channels_array = position_channels.GetArrayList();
        for(int i = 0; i < position_channels_array.Count; i++)
        {
            Json PositionChannel = position_channels_array[i];
            if(PositionChannel === null) continue;

            string channel_id;
            PositionChannel.FindValueString("channel_id", channel_id);

            string spatium_code;
            PositionChannel.FindValueString("spatium_code", spatium_code);

            string world_code;
            PositionChannel.FindValueString("world_code", world_code);

            string channel_type;
            PositionChannel.FindValueString("channel_type", channel_type);

            string create_user_code;
            PositionChannel.FindValueString("create_user_code", create_user_code);

            string name;
            PositionChannel.FindValueString("name", name);

            string description;
            PositionChannel.FindValueString("description", description);

            string channel_password;
            PositionChannel.FindValueString("channel_password", channel_password);

            int max_player_count = 0;
            PositionChannel.FindValueInt("max_player_count", max_player_count);

            int max_voice_player_count = 0;
            PositionChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

            Json users = PositionChannel.Find(EJSONDataType_Array, "users");
            if(users === null) return;

            list<Json> users_array = users.GetArrayList();
            list<VCCUserData> JoinUsersData = new list<VCCUserData>();

            for(int UserIndex = 0; UserIndex < users_array.Count; UserIndex++)
            {
                // 最大ボイスチャンネル入室数以上のユーザー情報は無意味なのでそこで処理を抜ける
                if(UserIndex >= max_voice_player_count) break;

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
            Channel.CreateUserCode = _Convert2CorrectCode(create_user_code);
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
        api.channelSessionApi.createPositionChannel(_createPositionChannelCallback, g_SpatiumCode, m_WorldId, SelectedChannelType, ChannelName, "");
    }

    public void UpdateChannel(string ChannelName, string SelectedChannelType)
    {
        api.channelSessionApi.updatePositionChannel(_updatePositionChannelCallback, m_CurrentPositionChannelId, SelectedChannelType, ChannelName, "");
    }

    void _createPositionChannelCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json PositionChannelJson = hsLoadJson(param);
        if(PositionChannelJson === null) return;

        Json data = PositionChannelJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;
        
        Json position_channel = data.Find(EJSONDataType_Block, "position_channel");
        if(position_channel === null) return;

        string channel_id;
        position_channel.FindValueString("channel_id", channel_id);

        if(!channel_id.IsEmpty())
        {
            // 新しく作成したルームに入室する
            _CallConnectProcess(channel_id);
        }
    }

    void _updatePositionChannelCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json PositionChannelJson = hsLoadJson(param);
        if(PositionChannelJson === null) return;

        Json data = PositionChannelJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;
        
        Json PositionChannel = data.Find(EJSONDataType_Block, "position_channel");
        if(PositionChannel === null) return;

        string channel_id;
        PositionChannel.FindValueString("channel_id", channel_id);
        if(channel_id.IsEmpty()) return;

        string spatium_code;
        PositionChannel.FindValueString("spatium_code", spatium_code);

        string world_code;
        PositionChannel.FindValueString("world_code", world_code);

        string channel_type;
        PositionChannel.FindValueString("channel_type", channel_type);

        string create_user_code;
        PositionChannel.FindValueString("create_user_code", create_user_code);

        string name;
        PositionChannel.FindValueString("name", name);

        string description;
        PositionChannel.FindValueString("description", description);

        string channel_password;
        PositionChannel.FindValueString("channel_password", channel_password);

        int max_player_count = 0;
        PositionChannel.FindValueInt("max_player_count", max_player_count);

        int max_voice_player_count = 0;
        PositionChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

        VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
        if(viewModel !== null)
        {
            VCCChannelData Channel = new VCCChannelData();
            Channel.ChannelId = (channel_id);
            Channel.SpatiumCode = (spatium_code);
            Channel.WorldCode = (world_code);
            Channel.ChannelType = (channel_type);
            Channel.CreateUserCode = _Convert2CorrectCode(create_user_code);
            Channel.ChannelName = (name);
            Channel.Description = (description);   
            Channel.MaxPlayerCount = (max_player_count);
            Channel.MaxVoicePlayerCount = (max_voice_player_count);   

            m_CurrentChannel = Channel;

            viewModel.UpdateConnectStatus(m_CurrentChannel, 0, true, true);
        }

        // チャンネル情報が更新されたことを通知する
        hsNetSendCustomData("VCC_Update_Channel", m_CurrentChannel.ChannelName);
    }

    // 入室 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void Connect(int SelectedChannelIndex)
    {
        if(SelectedChannelIndex >= 0 && SelectedChannelIndex < m_ChannelList.Count)
        {
            VCCChannelData Channel = m_ChannelList[SelectedChannelIndex];
            string ChannelId = Channel.ChannelId;

            if(ChannelId.IsEmpty()) return;

            if(Channel.JoinUsersData.Count() + 1 > Channel.MaxVoicePlayerCount)
            {
                // 選択したルームが満室なため入室できない旨を伝える
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

                return;
            }

            _CallConnectProcess(ChannelId);
        }
    }

    public void ConnectFromRoomID(string RoomID)
    {
        if(!RoomID.IsEmpty())
        {
            // 指定ルームの入室人数をチェック
            api.channelSessionApi.fetcthPositionChannelDetail(_fetcthPositionChannelDetailCallback, RoomID);
        }
        else
        {
            // ルームIDが存在しない場合はランダムなfreechatに入室する
            api.channelSessionApi.fetchWolrdPositionChannelList(_fetchRandomFreeChatCallback, g_SpatiumCode, m_WorldId);
        }
    }

    void _fetcthPositionChannelDetailCallback(string param)
    {
        string RoomID;

        if(_CheckRoomAvailable(param, RoomID))
        {
            // 空いているので入室する
            _CallConnectProcess(RoomID);
        }
        else
        {
            // 指定のルームが満室なのでランダムなfreechatに入室する
            api.channelSessionApi.fetchWolrdPositionChannelList(_fetchRandomFreeChatCallback, g_SpatiumCode, m_WorldId);
        }
    }

    bool _CheckRoomAvailable(string param, ref string RoomID)
    {
        Json PositionChannelJson = hsLoadJson(param);
        if(PositionChannelJson === null) return false;

        Json data = PositionChannelJson.Find(EJSONDataType_Block, "data");
        if(data === null) return false;
        
        Json PositionChannel = data.Find(EJSONDataType_Block, "position_channel");
        if(PositionChannel === null) return false;

        string channel_id;
        PositionChannel.FindValueString("channel_id", channel_id);
        RoomID = channel_id;

        int max_voice_player_count = 0;
        PositionChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

        Json users = PositionChannel.Find(EJSONDataType_Array, "users");
        if(users === null) return false;

        list<Json> users_array = users.GetArrayList();

        // 満員かどうか
        if(users_array.Count + 1 > max_voice_player_count) return false;

        // ルームが空いている
        return true;
    }

    void _CallConnectProcess(string PositionChannelId)
    {
        m_CurrentPositionChannelId = PositionChannelId;
        
        api.channelSessionApi.leavePositionChannel(_leavePositionChannelCallbackOnConnectProcess);
    }

    void _leavePositionChannelCallbackOnConnectProcess(string param)
    {
        hel_net_disconnect();
        hel_skyway_set_roomid("");

        // UserTableをリセットする
        m_SuperClass.ClearUserTable();

        // 入室
        api.channelSessionApi.enterPositionChannel(_enterPositionChannelCallback, m_CurrentPositionChannelId);
    }
    
    void _enterPositionChannelCallback(string param)
    {
        if(param.IsEmpty()) return;

        // 入室するチャンネルの詳細情報を取得する
        Json PositionChannelJson = hsLoadJson(param);
        if(PositionChannelJson === null) return;

        Json data = PositionChannelJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;
        
        Json PositionChannel = data.Find(EJSONDataType_Block, "position_channel");
        if(PositionChannel === null) return;

        string channel_id;
        PositionChannel.FindValueString("channel_id", channel_id);
        if(channel_id.IsEmpty()) return;

        string spatium_code;
        PositionChannel.FindValueString("spatium_code", spatium_code);

        string world_code;
        PositionChannel.FindValueString("world_code", world_code);

        string channel_type;
        PositionChannel.FindValueString("channel_type", channel_type);

        string create_user_code;
        PositionChannel.FindValueString("create_user_code", create_user_code);

        string name;
        PositionChannel.FindValueString("name", name);

        string description;
        PositionChannel.FindValueString("description", description);

        string channel_password;
        PositionChannel.FindValueString("channel_password", channel_password);

        int max_player_count = 0;
        PositionChannel.FindValueInt("max_player_count", max_player_count);

        int max_voice_player_count = 0;
        PositionChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

        VCCChannelData Channel = new VCCChannelData();
        Channel.ChannelId = (channel_id);
        Channel.SpatiumCode = (spatium_code);
        Channel.WorldCode = (world_code);
        Channel.ChannelType = (channel_type);
        Channel.CreateUserCode = _Convert2CorrectCode(create_user_code);
        Channel.ChannelName = (name);
        Channel.Description = (description);   
        Channel.MaxPlayerCount = (max_player_count);
        Channel.MaxVoicePlayerCount = (max_voice_player_count);   

        m_CurrentChannel = Channel;

        // 入室処理
        if(!m_CurrentPositionChannelId.IsEmpty())
        {
            // チャンネル情報編集UIの表示切替
            hsCanvasResetToggleDefault("Toggle_VCC_Is_Channel_Creator");
            if(!m_CurrentChannel.CreateUserCode.IsEmpty() && m_SuperClass.GetSelfUserData().UserCode == m_CurrentChannel.CreateUserCode)
            {
                hsCanvasToggleChange("Toggle_VCC_Is_Channel_Creator");
            }

            // チャンネル作成者のUserCodeを設定
            m_SuperClass.SetCreateUserCode(m_CurrentChannel.CreateUserCode);

            // エンジンの入室処理
            string RoomID = m_CurrentPositionChannelId;
            hel_skyway_set_roomid(RoomID);
            
            // この後hel_net_connect_roomで音声チャンネルに繋ぐのはカーネリアンだけでskywayではhel_skyway_set_roomidとhel_net_connectだけでいい
            // skyway => hel_net_connect: RTCと音声チャンネルに接続
            // カーネリアン => hel_net_connect: RTCに接続, hel_skyway_set_roomid: 音声チャンネルに接続
            hel_net_connect();
            
            // UserTaleに自身を追加する
            m_SuperClass.AddSelfToUserTable();

            // VCCViewのステータスを更新する
            VCCViewModel viewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
            if(viewModel !== null)
            {
                viewModel.UpdateConnectStatus(m_CurrentChannel, 0, true, true);
            }

            // 入室した旨を伝える
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

            // 接続中
            m_IsConnected = true;

            // エンジン側のRoomIDとURLを更新
            hel_net_replace_room_url_with_roomid(RoomID);

            // テキチャの通知設定
            api.textChat.watchTextChatNotification(g_SpatiumCode, m_WorldId, RoomID);
        }
    }

    // ランダムフリーチャットへの入室
    void _fetchRandomFreeChatCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json PositionChannelListJson = hsLoadJson(param);
        if(PositionChannelListJson === null) return;

        Json data = PositionChannelListJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json position_channels = data.Find(EJSONDataType_Array, "position_channels");
        if(position_channels === null) return;

        list<Json> position_channels_array = position_channels.GetArrayList();
        for(int i = 0; i < position_channels_array.Count; i++)
        {
            Json PositionChannel = position_channels_array[i];
            if(PositionChannel === null) continue;

            string channel_id;
            PositionChannel.FindValueString("channel_id", channel_id);

            string name;
            PositionChannel.FindValueString("name", name);

            int max_voice_player_count = 0;
            PositionChannel.FindValueInt("max_voice_player_count", max_voice_player_count);

            Json users = PositionChannel.Find(EJSONDataType_Array, "users");
            if(users === null) return;

            list<Json> users_array = users.GetArrayList();

            // APIでランダム入室が実装されるまではひとまずチャンネルを全探索して名前が`FreeTalk_〇〇`に合致するものに入室する
            // 文字列が合致するかどうか
            if(name.Length() < 8 || name.SubString(0, 8) != "FreeTalk") continue;

            // 満員かどうか
            if(users_array.Count + 1 > max_voice_player_count) continue;

            // FreeTalkが見つかったので入室する
            _CallConnectProcess(channel_id);

            return;
        }

        // `FreeTalk_〇〇`が存在しないか満室なので新しくルームを作成する
        string NewRoomName = "FreeTalk_" + hel_get_vcuid().SubString(0, 6);
        CreateNewChannel(NewRoomName, CHANNEL_TYPE_OPEN);
    }

    // 切断 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void Disconnect()
    {
        api.channelSessionApi.leavePositionChannel(_leavePositionChannelCallback);
    }

    void _leavePositionChannelCallback(string param)
    {
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
        m_CurrentPositionChannelId = "";

        // UserTableをリセットする
        m_SuperClass.ClearUserTable();
    }
}