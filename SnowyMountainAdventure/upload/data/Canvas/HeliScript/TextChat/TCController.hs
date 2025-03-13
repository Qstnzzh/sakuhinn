component TCController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "textchat_common" || LayerName == "textchat_common_long")
        {
            LayerBundle layer = hsLayerGet("textchat_common");
            if(layer === null) return;

            if(ButtonName == "common_btn_close")
            {
                layer.CallComponentMethod("TCViewModel", "CloseTextChat", "");
            }
            else if(ButtonName == "chat_tab_txt_chat_off")
            {
                layer.CallComponentMethod("TCViewModel", "SwitchTextChatTab", TAB_TYPE_TEXT_CHAT);
            }
            else if(ButtonName == "chat_tab_system_off")
            {
                layer.CallComponentMethod("TCViewModel", "SwitchTextChatTab", TAB_TYPE_SYSTEM_MESSAGE);
            }
            else if(ButtonName == "chat_btn_open")
            {
                layer.CallComponentMethod("TCViewModel", "SwitchShortLong", "true");
            }
            else if(ButtonName == "chat_btn_close")
            {
                layer.CallComponentMethod("TCViewModel", "SwitchShortLong", "false");
            }
            else if(ButtonName == "chat_btn_send")
            {
                layer.CallComponentMethod("TCViewModel", "ClickSendButton", "");
            }
        }
        else if(LayerName == "Dynamic_" + "textchat_message_chat" || LayerName == "Dynamic_" + "textchat_message_chat_long")
        {
            LayerBundle layer = hsLayerGet("textchat_common");
            if(layer === null) return;

            string Index = ButtonName.SubString(ButtonName.Length() - 2, 1);

            if(ButtonName.IndexOf("chat_avatar_icon") != -1)
            {
                layer.CallComponentMethod("TCViewModel", "ClickUserIcon",Index);
            }
        }
    }
}