const string TAB_TYPE_TEXT_CHAT = "TAB_TYPE_TEXT_CHAT";
const string TAB_TYPE_SYSTEM_MESSAGE = "TAB_TYPE_SYSTEM_MESSAGE";

component TCViewModel
{
    TCView m_View;
    TCModel m_Model;

    bool m_CurrentLong;
    string m_CurrentTabType;

    public TCViewModel()
    {
        m_View = new TCView();
        m_Model = system.Layer_GetComponentByName<TCModel>("textchat_common");

        m_CurrentLong = false;
        m_CurrentTabType = TAB_TYPE_TEXT_CHAT;
    }

    public void OnResize()
    {
        m_View.ResizeCallback();
    }

    public void OpenTextChat()
    {
        m_CurrentTabType = TAB_TYPE_TEXT_CHAT;

        m_View.ShowTextChat(true, m_CurrentTabType);
        m_View.ShowLongTextChat(false, m_CurrentTabType);
        m_View.SwitchTextChatTab(m_CurrentTabType);

        string spatiumCode = g_SpatiumCode;
        string worldId = hel_get_worldid();
        string roomId = hel_skyway_get_roomid();
        m_Model.FetchMessage(m_CurrentTabType, spatiumCode, worldId, roomId, false);
    }
    
    public void SwitchShortLong(string param)
    {
        bool IsLong = (param != "false");

        m_CurrentLong = IsLong;
        m_View.ShowTextChat(!IsLong, m_CurrentTabType);
        m_View.ShowLongTextChat(IsLong, m_CurrentTabType);
        
        string spatiumCode = g_SpatiumCode;
        string worldId = hel_get_worldid();
        string roomId = hel_skyway_get_roomid();
        m_Model.FetchMessage(m_CurrentTabType, spatiumCode, worldId, roomId, IsLong);
    }

    public void ClickSendButton()
    {
        // 送信ボタン押下時の処理
        _SendTextChat();
    }

    public void OnSendTextChat()
    {
        // Enter押下時の処理
        _SendTextChat();
    }

    void _SendTextChat()
    {
        if(m_CurrentTabType == TAB_TYPE_TEXT_CHAT)
        {
            string message = m_View.GetInputFieldText(m_CurrentLong);
            
            // まだバルーンサイズが不変なのでひとまず200文字で切る
            message = message.SubString(0, 200);

            string spatiumCode = g_SpatiumCode;
            string worldId = hel_get_worldid();
            string roomId = hel_skyway_get_roomid();

            m_Model.SendTextChat(message, spatiumCode, worldId, roomId);
        }

        m_View.ClearInputFieldText(m_CurrentLong);
    }

    public void ExitTextChat()
    {
        CloseTextChat();

        m_Model.Exit();
    }

    public void CloseTextChat()
    {
        m_CurrentTabType = TAB_TYPE_TEXT_CHAT;

        m_View.ShowTextChat(false, m_CurrentTabType);
        m_View.ShowLongTextChat(false, m_CurrentTabType);
        m_View.SwitchTextChatTab(m_CurrentTabType);
        m_View.CloseMessageList();
        m_View.ShowClickableTextChatHUD();

        m_Model.Close();

        m_CurrentLong = false;
    }

    public void SwitchTextChatTab(string TabType)
    {
        m_CurrentTabType = TabType;

        m_View.ShowTextChat(!m_CurrentLong, m_CurrentTabType);
        m_View.ShowLongTextChat(m_CurrentLong, m_CurrentTabType);
        m_View.SwitchTextChatTab(m_CurrentTabType);
        
        string spatiumCode = g_SpatiumCode;
        string worldId = hel_get_worldid();
        string roomId = hel_skyway_get_roomid();
        m_Model.FetchMessage(m_CurrentTabType, spatiumCode, worldId, roomId, false);
    }

    public void UpdateMessageList(list<TCMessageData> MessageList)
    {
        m_View.DrawMessageList(MessageList, m_CurrentTabType, m_CurrentLong);
    }

    public void NotifyChatMessageFromJS(string param)
    {
        m_Model.NotifyChatMessageFromJS(param);
    }
    
    public void NotifySystemMessageFromJS(string param)
    {
        m_Model.NotifySystemMessageFromJS(param);
    }

    public void NotifyChatGPTMessageFromJS(string param)
    {
        m_Model.NotifyChatGPTMessageFromJS(param);
    }

    public void ClickUserIcon(string param)
    {
        m_Model.FetchProfileFromMessage(param.ToInt());
    }
}