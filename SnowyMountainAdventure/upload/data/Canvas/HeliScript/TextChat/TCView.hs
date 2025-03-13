class TCView
{
    string m_textchat_HTMLElementID;
    string m_textchat_Text_HTMLElementID;
    
    string m_textchat_long_HTMLElementID;
    string m_textchat_long_Text_HTMLElementID;

    public TCView()
    {
        m_textchat_HTMLElementID = "textchat";
        m_textchat_Text_HTMLElementID = "textchat-text";
        
        m_textchat_long_HTMLElementID = "textchat_long";
        m_textchat_long_Text_HTMLElementID = "textchat_long-text";

        ShowInputField(false);
        ShowInputFieldLong(false);
    }

    public void ShowClickableTextChatHUD()
    {
        hsCanvasResetToggleDefault("Toggle_OpenClose_TextChat");
    }

    public void ResizeCallback()
    {
        _ResizeInputField();
        _ResizeInputFieldLong();
    }

    void _ResizeInputField()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "textchat_common" + "," 
            + "chat_text_inputfield" + "," + m_textchat_HTMLElementID + "," + m_textchat_Text_HTMLElementID);
    }

    void _ResizeInputFieldLong()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "textchat_common_long" + "," 
            + "chat_text_inputfield_long" + "," + m_textchat_long_HTMLElementID + "," + m_textchat_long_Text_HTMLElementID);
    }

    public void ShowTextChat(bool show, string TabType)
    {
        hsCanvasSetLayerShow("textchat_common", show);
        ShowInputField(show && (TabType == TAB_TYPE_TEXT_CHAT));
    }

    public void ShowLongTextChat(bool show, string TabType)
    {
        hsCanvasSetLayerShow("textchat_common_long", show);
        ShowInputFieldLong(show && (TabType == TAB_TYPE_TEXT_CHAT));
    }

    public void ShowInputField(bool show)
    {
        ClearInputFieldText(false);

        hel_set_HTMLElement_visibility(m_textchat_HTMLElementID, show);
        hel_set_HTMLElement_visibility(m_textchat_Text_HTMLElementID, show);
        
        if(show)
        {
            _ResizeInputField();
        }
    }
    
    public void ShowInputFieldLong(bool show)
    {
        ClearInputFieldText(true);

        hel_set_HTMLElement_visibility(m_textchat_long_HTMLElementID, show);
        hel_set_HTMLElement_visibility(m_textchat_long_Text_HTMLElementID, show);
        
        if(show)
        {
            _ResizeInputFieldLong();
        }
    }

    public string GetInputFieldText(bool IsLong)
    {
        string result = "";

        if(IsLong)
        {
            result = hel_get_HTMLElement_value(m_textchat_long_Text_HTMLElementID);
        }
        else
        {
            result = hel_get_HTMLElement_value(m_textchat_Text_HTMLElementID);
        }

        return result;
    }

    public void ClearInputFieldText(bool IsLong)
    {
        if(IsLong)
        {
            hel_set_HTMLElement_value(m_textchat_long_Text_HTMLElementID, "");
        }
        else
        {
            hel_set_HTMLElement_value(m_textchat_Text_HTMLElementID, "");
        }
    }

    public void SwitchTextChatTab(string TabType)
    {
        if(TabType == TAB_TYPE_TEXT_CHAT)
        {
            hsCanvasResetToggleDefault("Toggle_TextChat_Tab");
        }
        else if(TabType == TAB_TYPE_SYSTEM_MESSAGE)
        {
            hsCanvasResetToggleDefault("Toggle_TextChat_Tab");
            hsCanvasToggleChange("Toggle_TextChat_Tab");
        }
    }

    public void DrawMessageList(list<TCMessageData> MessageList, string TabType, bool IsLong)
    {
        CloseMessageList();

        _DrawMessageList_la(MessageList, TabType, IsLong, -90, false);
        _DrawMessageList_po(MessageList, TabType, IsLong, -220, true);
    }

    void _DrawMessageList_la(list<TCMessageData> MessageList, string TabType, bool IsLong, int Offset, bool IsPortrait)
    {
        bool IsTextChatTab = (TabType == TAB_TYPE_TEXT_CHAT);
        string layerName = "Dynamic_" + ((IsTextChatTab)? "textchat_message_chat" : "textchat_message_system") + ((IsLong)? "_long" : "");

        hsCanvasSetLayerShow(layerName, true);

        // 初期化
        system.Canvas_ReleaseLayer(layerName, IsPortrait);

        // Layerの生成
        system.Canvas_AddLayer(layerName, IsPortrait, true, 9);

        if(IsTextChatTab)
        {
            system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", -260,-25, 275,360, 0.5, 0.5, "RM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 50);
        }
        else
        {
            system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", -260,15, 275,440, 0.5, 0.5, "RM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 50);
        }

        system.Canvas_SetLayerComponentNameList(layerName, IsPortrait, "TCController");

        // GUIの生成
        int CreateCount = MessageList.Count;

        for(int i = 0; i < CreateCount; i++)
        {
            TCMessageData messageData = MessageList[(CreateCount - 1 - i)];

            string SharedName = "[" + string(i) + "]";

            // if(messageData.IsMine)
            // {
                
            // }
            // else
            {
                string chat_avatar_icon = "chat_avatar_icon" + SharedName;
                string chat_balloon = "chat_balloon" + SharedName;
                string chat_name_text = "chat_name_text" + SharedName;
                string chat_time_text = "chat_time_text" + SharedName;
                string chat_message_text = "chat_message_text" + SharedName;

                if(IsTextChatTab)
                {
                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_avatar_icon, "", "", "", true, 2, -370, 95 + i * Offset, 50, 50, 0.5, 0.5, "RM", true, 0.0,
                        messageData.IconURL, "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_balloon, "", "", "", true, 2, -245, 125 + i * Offset, 220, 110, 0.5, 0.5, "RM", true, 0.0,
                        "gui2023/chat/chat_balloon.png", "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_name_text, true, 2, -260, 87 + i * Offset, 140, 16, 0.5, 0.5, "RM", true, 0.0,
                        messageData.Name, "", 10, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_time_text, true, 2, -170, 87 + i * Offset, 38, 18, 0.5, 0.5, "RM", true, 0.0,
                        _ClampTimestamp(messageData.Timestamp), "", 10, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );
                    
                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_message_text, true, 5, -242, 125 + i * Offset, 175, 50, 0.5, 0.5, "RM", true, 0.0,
                        messageData.Message, "", 10, 0.0, 0.0, 0.0, 1.0, "LT", 0, 0, true, true, 0.14, 0.38, 0.82, 1.0
                    );
                }
                else
                {
                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_balloon, "", "", "", true, 2, -270, 200 + i * Offset, 480, 100, 0.5, 0.5, "RM", true, 0.0,
                        "gui2023/chat/chat_system_base.png", "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_time_text, true, 2, -375, 165 + i * Offset, 38, 18, 0.5, 0.5, "RM", true, 0.0,
                        _ClampTimestamp(messageData.Timestamp), "", 10, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_message_text, true, 5, -270, 205 + i * Offset, 240, 50, 0.5, 0.5, "RM", true, 0.0,
                        messageData.Message, "", 10, 0.0, 0.0, 0.0, 1.0, "LT", 0, 0, true, true, 0.14, 0.38, 0.82, 1.0
                    );
                }
            }
        }
    }
    
    void _DrawMessageList_po(list<TCMessageData> MessageList, string TabType, bool IsLong, int Offset, bool IsPortrait)
    {
        bool IsTextChatTab = (TabType == TAB_TYPE_TEXT_CHAT);
        string layerName = "Dynamic_" + ((IsTextChatTab)? "textchat_message_chat" : "textchat_message_system") + ((IsLong)? "_long" : "");

        hsCanvasSetLayerShow(layerName, true);

        // 初期化
        system.Canvas_ReleaseLayer(layerName, IsPortrait);

        // Layerの生成
        system.Canvas_AddLayer(layerName, IsPortrait, true, 18);

        if(IsTextChatTab)
        {
            if(IsLong)
            {
                system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", 0,-120, 1250,1420, 0.5, 0.5, "CM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
            }
            else
            {
                system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", 0,-565, 1250,535, 0.5, 0.5, "CM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
            }
        }
        else
        {
            if(IsLong)
            {
                system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", 0,-60, 1250,1500, 0.5, 0.5, "CM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
            }
            else
            {
                system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/NoButton.png", 0,-500, 1250,650, 0.5, 0.5, "CM", 0, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
            }
        }

        system.Canvas_SetLayerComponentNameList(layerName, IsPortrait, "TCController");

        // GUIの生成
        int CreateCount = MessageList.Count;

        for(int i = 0; i < CreateCount; i++)
        {
            TCMessageData messageData = MessageList[(CreateCount - 1 - i)];

            string SharedName = "[" + string(i) + "]";

            // if(messageData.IsMine)
            // {
                
            // }
            // else
            {
                string chat_avatar_icon = "chat_avatar_icon" + SharedName;
                string chat_balloon = "chat_balloon" + SharedName;
                string chat_name_text = "chat_name_text" + SharedName;
                string chat_time_text = "chat_time_text" + SharedName;
                string chat_message_text = "chat_message_text" + SharedName;

                if(IsTextChatTab)
                {
                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_avatar_icon, "", "", "", true, 1, -555, ((IsLong)? 450 : -450) + i * Offset, 120, 120, 0.5, 0.5, "CM", true, 0.0,
                        messageData.IconURL, "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_balloon, "", "", "", true, 1, 30, ((IsLong)? 500 : -400) + i * Offset, 1200, 250, 0.5, 0.5, "CM", true, 0.0,
                        "gui2023/chat/chat_balloon.png", "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_name_text, true, 1, -160, ((IsLong)? 400 : -500) + i * Offset, 560, 64, 0.5, 0.5, "CM", true, 0.0,
                        messageData.Name, "", 35, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_time_text, true, 1, 480, ((IsLong)? 400 : -500) + i * Offset, 150, 72, 0.5, 0.5, "CM", true, 0.0,
                        _ClampTimestamp(messageData.Timestamp), "", 40, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );
                    
                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_message_text, true, 2, 55, ((IsLong)? 500 : -400) + i * Offset, 975, 85, 0.5, 0.5, "CM", true, 0.0,
                        messageData.Message, "", 30, 0.0, 0.0, 0.0, 1.0, "LT", 0, 0, true, true, 0.14, 0.38, 0.82, 1.0
                    );
                }
                else
                {
                    hsAddGUIButton(
                        layerName, IsPortrait, 
                        chat_balloon, "", "", "", true, 1, -20, ((IsLong)? 600 : -300) + i * Offset, 2200, 275, 0.5, 0.5, "CM", true, 0.0,
                        "gui2023/chat/chat_system_base.png", "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_time_text, true, 1, -540, ((IsLong)? 500 : -400) + i * Offset, 150, 72, 0.5, 0.5, "CM", true, 0.0,
                        _ClampTimestamp(messageData.Timestamp), "", 40, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                    );

                    hsAddGUIText(
                        layerName, IsPortrait, 
                        chat_message_text, true, 2, -20, ((IsLong)? 610 : -290) + i * Offset, 1100, 120, 0.5, 0.5, "CM", true, 0.0,
                        messageData.Message, "", 30, 0.0, 0.0, 0.0, 1.0, "LT", 0, 0, true, false, 0.14, 0.38, 0.82, 1.0
                    );
                }
            }
        }
    }

    public void CloseMessageList()
    {
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_chat", false);
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_chat", true);
        hsCanvasSetLayerShow("Dynamic_" + "textchat_message_chat", false);

        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_system", false);
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_system", true);
        hsCanvasSetLayerShow("Dynamic_" + "textchat_message_chat", false);
        
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_chat_long", false);
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_chat_long", true);
        hsCanvasSetLayerShow("Dynamic_" + "textchat_message_chat", false);
        
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_system_long", false);
        system.Canvas_ReleaseLayer("Dynamic_" + "textchat_message_system_long", true);
        hsCanvasSetLayerShow("Dynamic_" + "textchat_message_chat", false);
    }

    string _ClampTimestamp(string src)
    {
        if(src.IsEmpty()) return src;

        // 年
        string year = src.SubString(0, 4);

        // 月
        string month = src.SubString(5, 2);

        // 日
        string day = src.SubString(8, 2);

        // 時
        string hour = src.SubString(11, 2);

        // 取得データとの時差が9時間あるようなのでそちらを考慮する
        int hour_integer = hour.ToInt();
        hour_integer += 9;
        hour = "%d" % hour_integer;

        // 分
        string minutes = src.SubString(14, 2);

        // 日時テキストを作成
        // string dst = year + "/" + month + "/" + day + " " + hour + ":" + minutes;
        // レイアウトやデザインが変わるのでひとまず時間だけ表示しておく
        string dst = hour + ":" + minutes;

        return dst;
    }
}
