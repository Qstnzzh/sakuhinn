component TCModel
{
    TCViewModel m_ViewModel;

    list<TCMessageData> m_ChatMessageList;
    list<TCMessageData> m_SystemMessageList;
    int m_MaxMessgaeCount;
    bool m_TextChatOpened;
    string m_CurrentTextChatRoomID;

    public TCModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<TCViewModel>("textchat_common");
        
        m_ChatMessageList = new list<TCMessageData>();
        m_SystemMessageList = new list<TCMessageData>();
        m_MaxMessgaeCount = 20;

        m_TextChatOpened = false;
    }

    public void Exit()
    {
        m_CurrentTextChatRoomID = "";

        m_ChatMessageList.Clear();
        m_SystemMessageList.Clear();
    }

    public void Close()
    {
        m_SystemMessageList.Clear();

        m_TextChatOpened = false;
    }

    public void FetchMessage(string TabType, string spatiumCode, string worldId, string roomId, bool IsLong) 
    {
        m_TextChatOpened = true;

        if(TabType == TAB_TYPE_TEXT_CHAT)
        {
            _FetchChatMessage(TabType, spatiumCode, worldId, roomId, IsLong);
        }
        else if(TabType == TAB_TYPE_SYSTEM_MESSAGE)
        {
            _FetchSystemMessage(TabType, spatiumCode, worldId, roomId, IsLong);
        }
    }

    void _FetchChatMessage(string TabType, string spatiumCode, string worldId, string roomId, bool IsLong)
    {
        // 入室前のテキチャが表示されないようにする #9364
        // // RoomIDが変わった時のみ新規で取得する
        // if(!roomId.IsEmpty() && m_CurrentTextChatRoomID != roomId && !IsLong)
        // {
        //     m_CurrentTextChatRoomID = roomId;

        //     m_ChatMessageList.Clear();

        //     api.textChat.getTextChatList(_FetchTextChatMessageCallback, spatiumCode, worldId, roomId, m_MaxMessgaeCount);
        // }
        // else
        {
            // メッセージリストを更新
            m_ViewModel.UpdateMessageList(m_ChatMessageList);
        }
    }
    
    void _FetchSystemMessage(string TabType, string spatiumCode, string worldId, string roomId, bool IsLong)
    {
        if(!IsLong)
        {
            m_SystemMessageList.Clear();

            api.textChat.getSystemTextList(_FetchSystemMessageCallback, m_MaxMessgaeCount);
        }
        else
        {
            // メッセージリストを更新
            m_ViewModel.UpdateMessageList(m_SystemMessageList);
        }
    }

    void _FetchTextChatMessageCallback(string param)
    {
        Json MessageListJson = hsLoadJson(param);
        if(MessageListJson === null) return;

        int chat_text_count = 0;
        MessageListJson.FindValueInt("chat_text_count", chat_text_count);

        Json chat_texts = MessageListJson.Find(EJSONDataType_Array, "chat_texts");
        if(chat_texts === null) return;
        list<Json> chat_texts_array = chat_texts.GetArrayList();

        for(int i = 0; i <chat_texts_array.Count; i++)
        {
            Json messageJson = chat_texts_array[i];
            if(messageJson === null) continue;

            string message;
            messageJson.FindValueString("message", message);
            message = Comma2Original(message);

            string created_at;
            messageJson.FindValueString("created_at", created_at);

            string channel_session_code;
            messageJson.FindValueString("channel_session_code", channel_session_code);

            // ユーザーの情報取得
            string UserType;
            string vket_id;
            string name_ja;
            string icon;

            Json vket_account_user = messageJson.Find(EJSONDataType_Block, "vket_account_user");
            Json guest_user        = messageJson.Find(EJSONDataType_Block, "guest_user");

            if(vket_account_user !== null)
            {
                UserType = "login";

                vket_account_user.FindValueString("vket_id", vket_id);
                vket_account_user.FindValueString("name_ja", name_ja);
                vket_account_user.FindValueString("icon", icon);
            }
            else if(guest_user !== null)
            {
                UserType = "guest";

                guest_user.FindValueString("user_id", vket_id);
                guest_user.FindValueString("name_ja", name_ja);
                icon = "gui2023/chat/chat_avatar_icon.png";
            }

            // 
            Player SelfPlayer = hsPlayerGet();
            string SelfUserCode = SelfPlayer.GetCustomState("UserCode");

            // データを整理
            TCMessageData Data = new TCMessageData();
            
            Data.Name = name_ja;
            Data.IconURL = icon;
            Data.Message = message;
            Data.Timestamp = created_at;
            Data.IsMine = (!vket_id.IsEmpty() && vket_id == SelfUserCode);
            Data.ChannelSessionCode = channel_session_code;
            Data.UserCode = vket_id;
            Data.UserType = UserType;

            m_ChatMessageList.Add(Data);
        }

        // 新しい順で入っているので逆にして古い順にする
        m_ChatMessageList.Reverse();

        // メッセージリストを更新
        m_ViewModel.UpdateMessageList(m_ChatMessageList);
    }
    
    void _FetchSystemMessageCallback(string param)
    {
        Json MessageListJson = hsLoadJson(param);
        if(MessageListJson === null) return;

        int chat_system_text_count = 0;
        MessageListJson.FindValueInt("chat_system_text_count", chat_system_text_count);

        Json chat_system_texts = MessageListJson.Find(EJSONDataType_Array, "chat_system_texts");
        if(chat_system_texts === null) return;
        list<Json> chat_system_texts_array = chat_system_texts.GetArrayList();

        for(int i = 0; i <chat_system_texts_array.Count; i++)
        {
            Json messageJson = chat_system_texts_array[i];
            if(messageJson === null) continue;

            string user_name_ja;
            string user_icon;

            string message_ja;
            messageJson.FindValueString("message_ja", message_ja);
            message_ja = Comma2Original(message_ja);

            string created_at;
            messageJson.FindValueString("created_at", created_at);

            TCMessageData Data = new TCMessageData();

            Data.Name = user_name_ja;
            Data.IconURL = user_icon;
            Data.Message = message_ja;
            Data.Timestamp = created_at;
            Data.IsMine = false;

            m_SystemMessageList.Add(Data);
        }

        // 新しい順で入っているので逆にして古い順にする
        m_SystemMessageList.Reverse();

        m_ViewModel.UpdateMessageList(m_SystemMessageList);
    }

    public void SendTextChat(string message, string spatiumCode, string worldId, string roomId)
    {
        if(_IsEmptyWithTrim(message)) return;

        Player SelfPlayer = hsPlayerGet();
        string name = SelfPlayer.GetName();

        // APIにメッセージを送信
        api.textChat.sendTextChat(spatiumCode, worldId, roomId, Comma2Special(message), name);
    }

    // スペースを取り除く
    bool _IsEmptyWithTrim(string src)
    {
        if(src.IsEmpty()) return true;

        for(int i = 0; i < src.Length(); i++)
        {
            string val = src.SubString(i, 1);
            if(val != "\n" && val != " ")
            {
                return false; // 空白も改行もない完全なEmptyである
            }
        }

        return true;
    }

    public void OnReceiveCustomData(string id, string type, string data)
    {
        if(type == "SendChatBallon")
        {
            // チャットバルーンを表示する
            string peerid = id;
            Player player = hsPlayerGetByID(peerid);
            string user_code = player.GetCustomState("UserCode");

            // 受信したメッセージがブロックユーザーによるものならメッセージリストにもバルーンにも表示しない
            ProfRejector rejector = system.Layer_GetComponentByName<ProfRejector>("prof_option_layer");
            if(rejector.IsBlockedUserCode(user_code) || rejector.IsBlockerUserCode(user_code) || rejector.IsTemporaryBlockedUserCode(user_code) ) {
                return;
            }

            player.ShowChatBalloon(data);
        }
        else if(type == "NotifyChatGPTMessage")
        {
            _ReceiveChatGPTMessage(data);
        }
    }

    public void NotifyChatMessageFromJS(string param)
    {
        Json messageJson = hsLoadJson(param);
        if(messageJson === null) return;

        Json chat_text = messageJson.Find(EJSONDataType_Block, "chat_text");
        if(chat_text === null) return;

        string message;
        chat_text.FindValueString("message", message);
        message = Comma2Original(message);

        string created_at;
        chat_text.FindValueString("created_at", created_at);

        string channel_session_code;
        chat_text.FindValueString("channel_session_code", channel_session_code);

        // ユーザーの情報取得
        string UserType;
        string vket_id;
        string name_ja;
        string icon;

        Json vket_account_user = chat_text.Find(EJSONDataType_Block, "vket_account_user");
        Json guest_user        = chat_text.Find(EJSONDataType_Block, "guest_user");

        if(vket_account_user !== null)
        {
            UserType = "login";

            vket_account_user.FindValueString("vket_id", vket_id);
            vket_account_user.FindValueString("name_ja", name_ja);
            vket_account_user.FindValueString("icon", icon);
        }
        else if(guest_user !== null)
        {
            UserType = "guest";

            guest_user.FindValueString("user_id", vket_id);
            guest_user.FindValueString("name_ja", name_ja);
            icon = "gui2023/chat/chat_avatar_icon.png";
        }

        Player SelfPlayer = hsPlayerGet();
        string SelfUserCode = SelfPlayer.GetCustomState("UserCode");

        // vket_idかSelfUserCodeが空の場合は不正なデータなので追加処理を行わない
        if(vket_id.IsEmpty() || SelfUserCode.IsEmpty()) return;

        // 自身のメッセージ通知を処理
        if(vket_id == SelfUserCode) 
        {
            // チャットバルーンを表示
            SelfPlayer.ShowChatBalloon(message);

            // チャットバルーンを表示するためにTextChat APIで伏字処理されたメッセージを送る
            hsNetSendCustomData("SendChatBallon", message);

            // テキストチャットのエンジン機能を呼ぶためにmsgコマンドを発行
            hel_skyway_receive_data("data", SelfPlayer.GetID(), "msg:" + Colon2Special(message) + ":" + "false");
            hel_skyway_send_data("msg:" + Colon2Special(message) + ":" + "false");
        }

        // 受信したメッセージがブロックユーザーによるものならメッセージリストにもバルーンにも表示しない
        ProfRejector rejector = system.Layer_GetComponentByName<ProfRejector>("prof_option_layer");
        if(rejector.IsBlockedUserCode(vket_id) || rejector.IsBlockerUserCode(vket_id) || rejector.IsTemporaryBlockedUserCode(vket_id)) {
            return;
        }

        // データを整理
        TCMessageData Data = new TCMessageData();

        Data.Name = name_ja;
        Data.IconURL = icon;
        Data.Message = message;
        Data.Timestamp = created_at;
        Data.IsMine = (!vket_id.IsEmpty() && vket_id == SelfUserCode);
        Data.ChannelSessionCode = channel_session_code;
        Data.UserCode = vket_id;
        Data.UserType = UserType;

        // メッセージリストに追加する
        _PushChatMessage(Data);
    }

    public void NotifySystemMessageFromJS(string param)
    {
        Json messageJson = hsLoadJson(param);
        if(messageJson === null) return;

        Json chat_system_text = messageJson.Find(EJSONDataType_Block, "chat_system_text");
        if(chat_system_text === null) return;

        string user_name_ja;
        string user_icon;

        string message_ja;
        chat_system_text.FindValueString("message_ja", message_ja);
        message_ja = Comma2Original(message_ja);

        string created_at;
        chat_system_text.FindValueString("created_at", created_at);

        string channel_session_code;
        chat_system_text.FindValueString("channel_session_code", channel_session_code);
        
        string vket_id;
        string UserType;

        // トーストで通知する
        LayerBundle layer = hsLayerGet("toast");
        if(layer !== null)
        {
            layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
            layer.CallComponentMethod("ToastViewModel", "NotifyMessage", "System" + ": " + message_ja);
        }

        // テキストチャットを既に閉じているのなら表示処理は行わない
        if(m_TextChatOpened)
        {
            TCMessageData Data = new TCMessageData();

            Data.Name = user_name_ja;
            Data.IconURL = user_icon;
            Data.Message = message_ja;
            Data.Timestamp = created_at;
            Data.IsMine = false;
            Data.ChannelSessionCode = channel_session_code;
            Data.UserCode = vket_id;
            Data.UserType = UserType;

            _PushSystemMessage(Data);
        }
    }

    public void NotifyChatGPTMessageFromJS(string param)
    {
        if(param.IsEmpty()) return;

        _ReceiveChatGPTMessage(param);

        // 他のプレイヤーに通知
        hsNetSendCustomData("NotifyChatGPTMessage", param);
    }

    void _ReceiveChatGPTMessage(string param)
    {
        if(param.IsEmpty()) return;

        Json messageJson = hsLoadJson(param);
        if(messageJson === null) return;

        string content;
        messageJson.FindValueString("content", content);

        string created_at;
        messageJson.FindValueString("created_at", created_at);

        string charaname;
        messageJson.FindValueString("charaname", charaname);

        TCMessageData Data = new TCMessageData();

        Data.Name = charaname;
        Data.Message = content;
        Data.Timestamp = created_at;
        Data.IsMine = false;

        // メッセージリストに追加する
        _PushChatMessage(Data);
    }

    void _PushChatMessage(TCMessageData Data)
    {
        if(m_ChatMessageList.Count + 1 > m_MaxMessgaeCount)
        {
            // 古いのから順に新しいもので上書きする
            for(int i = 1; i < m_ChatMessageList.Count; i++)
            {
                m_ChatMessageList[i - 1] = m_ChatMessageList[i];
            }

            m_ChatMessageList[m_ChatMessageList.Count - 1] = Data;
        }
        else
        {
            m_ChatMessageList.Add(Data);
        }
        
        if(m_TextChatOpened)
        {
            m_ViewModel.UpdateMessageList(m_ChatMessageList);
        }
    }
    
    void _PushSystemMessage(TCMessageData Data)
    {
        if(m_SystemMessageList.Count + 1 > m_MaxMessgaeCount)
        {
            // 古いのから順に新しいもので上書きする
            for(int i = 1; i < m_SystemMessageList.Count; i++)
            {
                m_SystemMessageList[i - 1] = m_SystemMessageList[i];
            }

            m_SystemMessageList[m_SystemMessageList.Count - 1] = Data;
        }
        else
        {
            m_SystemMessageList.Add(Data);
        }
        
        m_ViewModel.UpdateMessageList(m_SystemMessageList);
    }

    public void FetchProfileFromMessage(int InvIndex)
    {
        //  MessageListをリバースしているので配列からとる順もリバースする
        int SelectedMessageIndex = m_ChatMessageList.Count - InvIndex - 1;

        if(SelectedMessageIndex >= 0 && SelectedMessageIndex < m_ChatMessageList.Count)
        {
            TCMessageData message = m_ChatMessageList[SelectedMessageIndex];
            string ChannelSessionCode = message.ChannelSessionCode;
            string UserCode = message.UserCode;
            string UserType = message.UserType;

            if(!UserCode.IsEmpty() && !UserType.IsEmpty())
            {
                Player SelfPlayer = hsPlayerGet();
                string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
                string SelfUserType = SelfPlayer.GetCustomState("UserType");

                LayerBundle layerProfile=hsLayerGet("other_profile");
                if(layerProfile!==null){
                    ProfileModel profileModel=system.Layer_GetComponentByName<ProfileModel>("other_profile");
                    profileModel.FindUserDataAndShowProfileFromUserID(UserCode, UserType, (SelfUserType == "login" && SelfUserCode != UserCode));
                }
            }
        }
    }

    // Helper Function ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // "," => "<&comma&>"
    string Comma2Special(string src)
    {
        string dst = src;

        while(dst.IndexOf(",") != -1)
        {
            int Index = dst.IndexOf(",");
            dst = dst.SubString(0, Index) + "<&comma&>" + dst.SubString(Index + 1, dst.Length() - Index);
        }

        return dst;
    }

    // "<&comma&>" => ","
    string Comma2Original(string src)
    {
        string dst = src;

        while(dst.IndexOf("<&comma&>") != -1)
        {
            int Index = dst.IndexOf("<&comma&>");
            dst = dst.SubString(0, Index) + "," + dst.SubString(Index + 9, dst.Length() - Index);
        }

        return dst;
    }

    // ":" => "&colon;"
    string Colon2Special(string src)
    {
        string dst = src;

        while(dst.IndexOf(":") != -1)
        {
            int Index = dst.IndexOf(":");
            dst = dst.SubString(0, Index) + "&colon;" + dst.SubString(Index + 1, dst.Length() - Index);
        }

        return dst;
    }

    // "&colon;" => ":"
    string Colon2Original(string src)
    {
        string dst = src;

        while(dst.IndexOf("&colon;") != -1)
        {
            int Index = dst.IndexOf("&colon;");
            dst = dst.SubString(0, Index) + ":" + dst.SubString(Index + 7, dst.Length() - Index);
        }

        return dst;
    }
}