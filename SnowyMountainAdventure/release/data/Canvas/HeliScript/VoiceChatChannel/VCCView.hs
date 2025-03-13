const string g_vcc_icon_only_cloneIcon = "Dynamic_" + "vcc_icon_only_cloneIcon";
const string g_vcc_user_list_cloneList = "Dynamic_" + "vcc_user_list_cloneList";

class VCCView
{
    string m_ChannelName_HTMLElementID;
    string m_LocalInputText_ChannelName_HTMLElementID;
    bool   m_IsOpenChannelSettings;

    string m_vcc_channel_list_channelclone;

    public VCCView()
    {
        m_ChannelName_HTMLElementID = "channelname";
        m_LocalInputText_ChannelName_HTMLElementID = "channelname-text";
        hel_set_HTMLElement_value(m_LocalInputText_ChannelName_HTMLElementID, "");

        m_IsOpenChannelSettings = false;

        m_vcc_channel_list_channelclone = "Dynamic_" + "vcc_channel_list_channelclone";

        _LoadIconOnlyUserListLayer(false);
        _LoadIconOnlyUserListLayer(true);
        _LoadNameUserList(false);
        _LoadNameUserList(true);
    }

    void _LoadIconOnlyUserListLayer(bool IsPortrait)
    {
        // Layerの生成
        system.Canvas_AddLayer(g_vcc_icon_only_cloneIcon, IsPortrait, true, 12);

        if(IsPortrait)
        {
            system.Canvas_SetLayerMask(g_vcc_icon_only_cloneIcon, IsPortrait, "gui/clear.png", 367, 453, 480, 309, 0.5, 0.5, "LT", 1, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
        }
        else
        {   
            system.Canvas_SetLayerMask(g_vcc_icon_only_cloneIcon, IsPortrait, "gui/clear.png", 119, 154, 173, 120, 0.5, 0.5, "LT", 1, 0.0, 0.0, 0.0, 0.0, false, true, false, 50);
        }

        system.Canvas_SetLayerComponentNameList(g_vcc_icon_only_cloneIcon, IsPortrait, "VCCController");

        hsCanvasSetLayerShow(g_vcc_icon_only_cloneIcon, false);
    }

    void _LoadNameUserList(bool IsPortrait)
    {
        // Layerの生成
        system.Canvas_AddLayer(g_vcc_user_list_cloneList, IsPortrait, true, 12);

        if(IsPortrait)
        {
            system.Canvas_SetLayerMask(g_vcc_user_list_cloneList, IsPortrait, "gui/clear.png", 357, 641, 608, 685, 0.5, 0.5, "LT", 1, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
        }
        else
        {   
            system.Canvas_SetLayerMask(g_vcc_user_list_cloneList, IsPortrait, "gui/clear.png", 119, 252, 197, 306, 0.5, 0.5, "LT", 1, 0.0, 0.0, 0.0, 0.0, false, true, false,50);
        }

        system.Canvas_SetLayerComponentNameList(g_vcc_user_list_cloneList, IsPortrait, "VCCController");

        hsCanvasSetLayerShow(g_vcc_user_list_cloneList, false);
    }

    public string GetLocalInputText_ChannelName()
    {
        return m_LocalInputText_ChannelName_HTMLElementID;
    }

    public void ResizeCallback()
    {
        if(m_IsOpenChannelSettings)
        {
            hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "vcc_setting_channel_window" + "," + "vcc_channel_name_inputtext" + ","
                + m_ChannelName_HTMLElementID + "," + m_LocalInputText_ChannelName_HTMLElementID);
        }
    }

    public void ShowUserListArrowUp(bool show)
    {
        if(show)
        {
            hsCanvasResetToggleDefault("Toggle_voicechat_arrow_down");
        
            hsCanvasResetToggleDefault("Toggle_voicechat_arrow_up");
            hsCanvasToggleChange("Toggle_voicechat_arrow_up");

            hsCanvasResetToggleDefault("Toggle_voicechat_bg_s");
            hsCanvasToggleChange("Toggle_voicechat_bg_s");
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_voicechat_arrow_down");
            hsCanvasToggleChange("Toggle_voicechat_arrow_down");
            
            hsCanvasResetToggleDefault("Toggle_voicechat_arrow_up");

            hsCanvasResetToggleDefault("Toggle_voicechat_bg_s");
        }
    }

    public void OpenIconOnlyUserList(VCCChannelData Channel, list<VCCUserData> JoinUsersData)
    {
        hsCanvasSetLayerShow("vcc_icon_only_base", true);
        hsCanvasSetLayerShow(g_vcc_icon_only_cloneIcon, true);
    }

    public void CloseIconOnlyUserList()
    {
        hsCanvasSetLayerShow("vcc_icon_only_base", false);
        hsCanvasSetLayerShow("vcc_user_list_base", false);
        hsCanvasSetLayerShow(g_vcc_icon_only_cloneIcon, false);
    }

    public void ShowChannelList(list<VCCChannelData> ChannelList)
    {
        hsCanvasSetLayerShow("vcc_channel_list", true);

        _DrawChannelList(ChannelList, false, 80);
        _DrawChannelList(ChannelList, true, 280);
    }

    void _DrawChannelList(list<VCCChannelData> ChannelList, bool IsPortrait, int YOffset)
    {
        string layerName = m_vcc_channel_list_channelclone;

        hsCanvasSetLayerShow(layerName, true);

        // 初期化
        system.Canvas_ReleaseLayer(layerName, IsPortrait);

        // Layerの生成
        system.Canvas_AddLayer(layerName, IsPortrait, true, 12);

        if(IsPortrait)
        {
            system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/clear.png", 0, 60, 1160, 1280, 0.5, 0.5, "CM", 1, 0.0, 0.0, 0.0, 0.0, false, true, false, 80);
        }
        else
        {   
            system.Canvas_SetLayerMask(layerName, IsPortrait, "gui/clear.png", 170, 390, 330, 400, 0.5, 0.5, "LT", 1, 0.0, 0.0, 0.0, 0.0, false, true, false, 50);
        }

        system.Canvas_SetLayerComponentNameList(layerName, IsPortrait, "VCCController");

        // GUIの生成
        for(int i = 0; i < ChannelList.Count; i++)
        {
            VCCChannelData Channel = ChannelList[i];
            list<VCCUserData> JoinUsersData = Channel.JoinUsersData;

            string SharedName = "[" + string(i) + "]";
            string vcc_channel_title_text = "vcc_channel_title_text" + SharedName;
            string voicechat_ch_join_btn = "voicechat_ch_join_btn" + SharedName;
            string voicechat_ch_list_item_bg = "voicechat_ch_list_item_bg" + SharedName;

            string ChannelName = Channel.ChannelName;
            bool po = IsPortrait;

            //
            hsAddGUIButton(
                layerName, IsPortrait, 
                voicechat_ch_join_btn, "", "", "", true, 2, (po? 0 : 172), (po? -470 : 227) + i * YOffset, (po? 2048 : 500), (po? 256 : 66), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                "gui/clear.png", "", "", "", 0, 0, 300, 32, 0, 0, 0, 0
            );

            hsAddGUIImage(
                layerName, IsPortrait, 
                voicechat_ch_list_item_bg, "", "", "", true, 2, (po? 0 : 172), (po? -470 : 227) + i * YOffset, (po? 2048 : 341), (po? 256 : 85), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                (po? "gui2023/voicechat/voicechat_ch_list_item_bg_po.png" : "gui2023/voicechat/voicechat_ch_list_item_bg.png"), 0, 0, 0, 0
            );

            hsAddGUIText(
                layerName, IsPortrait, 
                vcc_channel_title_text, true, 1, (po? -2 : 174), (po? -518 : 212) + i * YOffset, (po? 1073 : 270), (po? 90 : 17), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                ((ChannelName.IsEmpty())? "Name not defined" : ChannelName), "BIZUDPGothic", (po? 45 : 15), 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
            );

            // 最大5人まで現在入室しているユーザーのアイコンを表示する
            for(int UserIndex = 0; UserIndex < 5; UserIndex++)
            {
                string vcc_user_icon_n = "vcc_user_icon_%d" % UserIndex + SharedName;

                if(UserIndex < JoinUsersData.Count)
                {
                    VCCUserData UserData = JoinUsersData[UserIndex];
                    string iconURL = (UserData.IconURL.IsEmpty())? "gui2023/voicechat/hud_voicechat_user_icon.png" : UserData.IconURL; 

                    int XOffset = (po? 69 : 20);

                    hsAddGUIImage(
                        layerName, IsPortrait, 
                        vcc_user_icon_n, "", "", "", true, 4, (po? -493 : 53) + XOffset * UserIndex, (po? -427 : 236) + i * YOffset, (po? 90 : 30), (po? 90 : 30), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                        iconURL, 0, 0, 0, 0
                    );
                }
            }

            // 5人目以降は数字で表示する
            string vcc_user_remaindernum_text = "vcc_user_remaindernum_text" + SharedName;
            int remaindernum = JoinUsersData.Count - 5;
            string dst_remaindernum_text = (JoinUsersData.Count > 5)? ("+%d" % remaindernum) : "";
            hsAddGUIText(
                layerName, IsPortrait, 
                vcc_user_remaindernum_text, true, 1, (po? -59 : 182), (po? -427 : 236) + i * YOffset, (po? 180 : 60), (po? 53 : 17), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                dst_remaindernum_text, "BIZUDPGothic", (po? 45 : 15), 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
            );

            // 現在の入室人数と最大入室人数
            string vcc_numof_user_text = "vcc_numof_user_text" + SharedName;
            int CurrentPlayerCount = JoinUsersData.Count;
            int MaxPlayerCount = Channel.MaxVoicePlayerCount;

            if(CurrentPlayerCount >= MaxPlayerCount)
            {
                hsAddGUIText(
                    layerName, IsPortrait, 
                    vcc_numof_user_text, true, 1, (po? 460 : 277), (po? -427 : 240) + i * YOffset, (po? 180 : 60), (po? 45 : 17), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                    ("%d/%d" % CurrentPlayerCount % MaxPlayerCount), "BIZUDPGothic", (po? 45 : 15), 1.0, 0.0, 0.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                );
            }
            else
            {
                hsAddGUIText(
                    layerName, IsPortrait, 
                    vcc_numof_user_text, true, 1, (po? 460 : 277), (po? -427 : 240) + i * YOffset, (po? 180 : 60), (po? 45 : 17), 0.5, 0.5, (po? "CM" :"LT"), true, 0.0,
                    ("%d/%d" % CurrentPlayerCount % MaxPlayerCount), "BIZUDPGothic", (po? 45 : 15), 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
                );
            }
        }
    }

    public void CloseChannelList()
    {
        hsCanvasSetLayerShow("vcc_channel_list", false);

        system.Canvas_ReleaseLayer(m_vcc_channel_list_channelclone, false);
        system.Canvas_ReleaseLayer(m_vcc_channel_list_channelclone, true);
        hsCanvasSetLayerShow(m_vcc_channel_list_channelclone, false);
    }

    public void OpenUserList(VCCChannelData Channel, string VCNumber, list<VCCUserData> JoinUsersData)
    {
        int CurrentPlayerCount = JoinUsersData.Count;
        int MaxPlayerCount = Channel.MaxVoicePlayerCount;

        hsCanvasSetLayerShow("vcc_icon_only_base", false);
        hsCanvasSetLayerShow("vcc_user_list_base", true);
        hsCanvasSetGUIText("vcc_user_list_base", "hud_text_user_count", ("%d/%d" % CurrentPlayerCount % MaxPlayerCount));
        hsCanvasSetGUIText("vcc_user_list_base", "hud_text_channel_number", VCNumber);

        hsCanvasSetLayerShow(g_vcc_user_list_cloneList, true);
    }

    public void CloseUserList()
    {
        hsCanvasSetLayerShow("vcc_user_list_base", false);
        hsCanvasSetLayerShow(g_vcc_user_list_cloneList, false);
    }
    
    public void OpenConnectDialog(list<VCCChannelData> ChannelList, int ChannelIndex)
    {
        if(ChannelIndex < 0 || ChannelIndex >= ChannelList.Count) return;

        VCCChannelData Data = ChannelList[ChannelIndex];

        hsCanvasSetLayerShow("vcc_join_dialog", true);
        hsCanvasSetGUIText("vcc_join_dialog", "vcc_channel_name_text", Data.ChannelName);
    }

    public void CloseConnectDialog()
    {
        hsCanvasSetLayerShow("vcc_join_dialog", false);
    }

    public void UpdateConnectStatus(string ChannelName, int VoiceChannelIndex, bool IsConnected, bool IsUpdateArrow)
    {
        hsCanvasResetToggleDefault("Toggle_ConnectingRoom");
        if(IsConnected)
        {
            hsCanvasToggleChange("Toggle_ConnectingRoom");
        }

        string LayerName = "HUD";

        hsCanvasSetGUIShow(LayerName, "hud_voicechat_joining", IsConnected);

        hsCanvasSetGUIShow(LayerName, "hud_voicechat_channelname", IsConnected);
        hsCanvasSetGUIText(LayerName, "hud_voicechat_channelname", ((ChannelName.IsEmpty())? "Name not defined" : ChannelName));
        
        hsCanvasSetGUIShow(LayerName, "hud_voicechat_groupname", IsConnected);
        string VoiceChannelName = (VoiceChannelIndex >= 0)? ("VoiceGroup %d" % VoiceChannelIndex) : "";
        hsCanvasSetGUIText(LayerName, "hud_voicechat_groupname", VoiceChannelName);

        hsCanvasSetGUIText(LayerName, "hud_voicechat_notjonining", ((system.IsLangJA())? "ボイスチャットチャンネルに参加していません" : "Not joining voice chat channel"));

        if(IsUpdateArrow)
        {
            if(IsConnected)
            {
                hsCanvasResetToggleDefault("Toggle_voicechat_arrow_right");
                hsCanvasToggleChange("Toggle_voicechat_arrow_right");

                hsCanvasResetToggleDefault("Toggle_voicechat_arrow_down");
                hsCanvasToggleChange("Toggle_voicechat_arrow_down");
            }
            else
            {
                hsCanvasResetToggleDefault("Toggle_voicechat_arrow_right");
                
                hsCanvasResetToggleDefault("Toggle_voicechat_arrow_down");
            }

            hsCanvasResetToggleDefault("Toggle_voicechat_bg_s");
        }
    }

    public void UpdateCurrentPlayerCount(VCCChannelData Channel, list<VCCUserData> JoinUsersData)
    {
        hsCanvasSetGUIText("vcc_user_list_base", "hud_text_user_count", ("%d/%d" % JoinUsersData.Count % Channel.MaxVoicePlayerCount));
    }

    public void OpenChannelSettings(bool IsChange)
    {
        hsCanvasResetToggleDefault("Toggle_VCC_Create_Update");
        if(IsChange)
        {
            hsCanvasToggleChange("Toggle_VCC_Create_Update");
        }

        hsCanvasSetLayerShow("vcc_setting_channel_window", true);
        _SetShowChannelNameInput(true);

        m_IsOpenChannelSettings = true;
        hel_set_HTMLElement_value(m_LocalInputText_ChannelName_HTMLElementID, "");
    }
    
    public void CloseChannelSettings()
    {
        hsCanvasResetToggleDefault("Toggle_VCC_Create_Update");

        hsCanvasSetLayerShow("vcc_setting_channel_window", false);
        _SetShowChannelNameInput(false);

        m_IsOpenChannelSettings = false;
        hel_set_HTMLElement_value(m_LocalInputText_ChannelName_HTMLElementID, "");
    }

    public void OpenChannelNumInput()
    {
        hsCanvasSetLayerShow("vcc_input_channel_number", true);
    }

    public void CloseChannelNumInput()
    {
        hsCanvasSetLayerShow("vcc_input_channel_number", false);
    }

    void _SetShowChannelNameInput(bool show)
    {
        hel_set_HTMLElement_visibility(m_ChannelName_HTMLElementID, show);
        hel_set_HTMLElement_visibility(m_LocalInputText_ChannelName_HTMLElementID, show);
        
        if(show)
        {
            hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "vcc_setting_channel_window" + "," + "vcc_channel_name_inputtext" + ","
                + m_ChannelName_HTMLElementID + "," + m_LocalInputText_ChannelName_HTMLElementID);
        }
    }

    public void UpdateSelectedNewChannelType(bool IsOpen)
    {
        if(IsOpen)
        {
            hsCanvasResetToggleDefault("Toggle_VCC_Open_Private");
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_VCC_Open_Private");
            hsCanvasToggleChange("Toggle_VCC_Open_Private");
        }
    }
}