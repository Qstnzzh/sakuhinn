class VCCUserData
{
    public string PlayerID;
    public string ChannelSessionCode;
    public string UserCode; // uid, vket_id といった名称でJSONに書かれている英数字
    public string UserType; // login or guest

    public string UserName;
    public string IconURL;

    public int    TableOrder; // ユーザーテーブル上での順番
    public bool   IsChannelCreator; // 現在のチャンネル作成者かどうか

    public VCCViewIconOnlyUser IconOnlyView;
    public VCCViewNameUser     NameView;

    public VCCUserData()
    {
        IsChannelCreator = false;

        IconOnlyView = new VCCViewIconOnlyUser();
        NameView     = new VCCViewNameUser();
    }

    public bool Load(list<VCCUserData> UserList)
    {
        if(!IconOnlyView.Load(this, TableOrder, IsChannelCreator, UserList)) return false;
        if(!NameView.Load(this, TableOrder, IsChannelCreator, UserList)) return false;

        return true;
    }

    public void SetMicState(int MicState)
    {
        IconOnlyView.SetMicState(MicState);
        NameView.SetMicState(MicState);
    }

    public void UpdateGUIPos(int Order, list<VCCUserData> UserList)
    {
        TableOrder = Order;

        IconOnlyView.UpdateGUIPos(Order, UserList);
        NameView.UpdateGUIPos(Order, UserList);
    }

    public void UpdateGUIResource()
    {
        IconOnlyView.UpdateGUIResource(this);
        NameView.UpdateGUIResource(this);
    }

    public void Release()
    {
        IconOnlyView.Release();
        NameView.Release();
    }

    public void ShowTempBlockUI(bool IsBlocked)
    {
        IconOnlyView.ShowTempBlockUI(IsBlocked);
        NameView.ShowTempBlockUI(IsBlocked);
    }
}

class VCCViewIconOnlyUser
{
    string PlayerID;

    public string hud_voicechat_user_icon_n;
    string hud_voicechat_mute;
    string hud_voicechat_user_talking;
    string hud_voicechat_leader_icon;

    string temp_block_icon_image;

    string Toggle_VCC_User_Leader_Icon;
    string Toggle_VCC_User_Is_Blocked;

    public bool Load(VCCUserData UserData, int TableOrder, bool IsChannelCreator, list<VCCUserData> UserList)
    {
        PlayerID = UserData.PlayerID;
        Toggle_VCC_User_Leader_Icon = "Toggle_VCC_User_Leader_Icon_%s" % PlayerID;
        Toggle_VCC_User_Is_Blocked = "Toggle_VCC_User_Is_Blocked_%s" % PlayerID;

        _Load(UserData, TableOrder, false, 60, IsChannelCreator, UserList);
        _Load(UserData, TableOrder, true, 150, IsChannelCreator, UserList);

        _Show(IsChannelCreator);

        return true;
    }

    public void SetMicState(int MicState)
    {
        // ミュートバッチの更新
        if(MicState == 0)
        {
            hsCanvasResetToggleDefault("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
            hsCanvasToggleChange("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
        }

        // 発声中の強調表示を更新
    }

    public void UpdateGUIPos(int Order, list<VCCUserData> UserList)
    {
        _UpdatePos(Order, false, 60, UserList);
        _UpdatePos(Order, true, 150, UserList);
    }

    public void UpdateGUIResource(VCCUserData UserData)
    {
        string iconURL = (UserData.IconURL.IsEmpty())? "gui2023/voicechat/hud_voicechat_user_icon.png" : UserData.IconURL; 
        hsCanvasSetGUIImage(g_vcc_icon_only_cloneIcon, hud_voicechat_user_icon_n, iconURL);

        _Show(UserData.IsChannelCreator);
    }

    public void Release()
    {
        _Release(false);
        _Release(true);
    }

    public void ShowTempBlockUI(bool IsBlocked)
    {
        hsCanvasResetToggleDefault(Toggle_VCC_User_Is_Blocked);

        if(IsBlocked)
        {
            hsCanvasToggleChange(Toggle_VCC_User_Is_Blocked);
        }
    }

    void _Load(VCCUserData UserData, int UserIndex, bool IsPortrait, int YOffset, bool IsChannelCreator, list<VCCUserData> UserList)
    {
        int MaxColCount = 3;

        int col = UserIndex / MaxColCount;
        int row = UserIndex - col * MaxColCount;

        hud_voicechat_user_icon_n = "hud_voicechat_user_icon_%s" % UserData.PlayerID;
        hud_voicechat_mute = "hud_voicechat_mute_%s" % UserData.PlayerID;
        hud_voicechat_user_talking = "hud_voicechat_user_talking_%s" % UserData.PlayerID;
        hud_voicechat_leader_icon = "hud_voicechat_leader_icon_%s" % UserData.PlayerID;

        temp_block_icon_image = "temp_block_icon_image_%s" % UserData.PlayerID;

        string iconURL = (UserData.IconURL.IsEmpty())? "gui2023/voicechat/hud_voicechat_user_icon.png" : UserData.IconURL; 

        // 自身よりもひとつ前のアイコンのGUIの位置を参照して自身のY座標を計算する(スクロールでずれてしまうため)
        // アイコン以外のGUIについてはアイコンからの相対座標をAddGUIの時に考慮する必要がある
        float IconPosY = (IsPortrait)? 380 : 126;
        if(UserIndex != 0)
        {
            int PrevIndex = UserIndex - 1;
            VCCUserData PrevUser = UserList[PrevIndex];
            float PrevX;
            float PrevY;

            if(hsCanvasGetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, PrevUser.IconOnlyView.hud_voicechat_user_icon_n, PrevX, PrevY))
            {
                // 一つ前のGUIが同じ行かどうか
                bool IsSameLine = ((PrevIndex + 1) % 3 != 0);
                if(IsSameLine)
                {
                    // 一つ前のGUIと同じ行なのでY座標もそろえる
                    IconPosY = PrevY;
                }
                else
                {
                    // 一つ前のGUIの一行下なので一つ分Y座標を下げる
                    IconPosY = PrevY + YOffset;
                }
            }
        }

        // GUIを生成する
        if(IsPortrait)
        {
            int XOffset = 160;

            hsAddGUIButton(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_user_icon_n, "", "", "", true, 2, 204 + row * XOffset, IconPosY, 140, 140, 0.5, 0.5, "LT", true, 0.0,
                iconURL, "", "", "", 140, 140, 300, 32, 0, 0, 0, 0
            );

            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_mute, "", "", "", true, 3, 254 + row * XOffset, 50 + IconPosY, 65, 65, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/hud/hud_voicechat_mute.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_mute, "Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID, true);

            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_user_talking, "", "", "", true, 1, 204 + row * XOffset, IconPosY, 291, 291, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_user_talking.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_user_talking, "Toggle_VCC_Talking_ON_OFF_%s" % PlayerID, false);

            // チャンネル作成者の王冠マークを生成
            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_leader_icon, "", "", "", true, 3, 204 + row * XOffset, -60 + IconPosY, 100, 50, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_leader_icon.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_leader_icon, Toggle_VCC_User_Leader_Icon, false);

            // 一時ブロック
            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                temp_block_icon_image, "", "", "", true, 6, 204 + row * XOffset, IconPosY, 140, 140, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_icon_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, temp_block_icon_image, Toggle_VCC_User_Is_Blocked, false);
        }
        else
        {
            int XOffset = 57;

            hsAddGUIButton(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_user_icon_n, "", "", "", true, 2, 61 + row * XOffset, IconPosY, 51, 51, 0.5, 0.5, "LT", true, 0.0,
                iconURL, "", "", "", 51, 51, 300, 32, 0, 0, 0, 0
            );

            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_mute, "", "", "", true, 3, 77 + row * XOffset, 17 + IconPosY, 25, 25, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/hud/hud_voicechat_mute.png", 0, 0, 0, 0
            );
            
            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_mute, "Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID, true);

            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_user_talking, "", "", "", true, 1, 61 + row * XOffset, IconPosY, 105, 105, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_user_talking.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_user_talking, "Toggle_VCC_Talking_ON_OFF_%s" % PlayerID, false);

            // チャンネル作成者の王冠マークを生成
            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                hud_voicechat_leader_icon, "", "", "", true, 3, 61 + row * XOffset, -21 + IconPosY, 40, 20, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_leader_icon.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, hud_voicechat_leader_icon, Toggle_VCC_User_Leader_Icon, false);

            // 一時ブロック
            hsAddGUIImage(
                g_vcc_icon_only_cloneIcon, IsPortrait, 
                temp_block_icon_image, "", "", "", true, 6, 61 + row * XOffset, IconPosY, 51, 51, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_icon_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_icon_only_cloneIcon, temp_block_icon_image, Toggle_VCC_User_Is_Blocked, false);
        }
    }

    void _UpdatePos(int UserIndex, bool IsPortrait, int YOffset, list<VCCUserData> UserList)
    {
        int MaxColCount = 3;

        int col = UserIndex / MaxColCount;
        int row = UserIndex - col * MaxColCount;

        // 自身よりもひとつ前のアイコンのGUIの位置を参照して自身のY座標を計算する(スクロールでずれてしまうため)
        // アイコン以外のGUIについてはアイコンからの相対座標をAddGUIの時に考慮する必要がある
        float IconPosY = (IsPortrait)? 380 : 126;
        if(UserIndex != 0)
        {
            int PrevIndex = UserIndex - 1;
            VCCUserData PrevUser = UserList[PrevIndex];
            float PrevX;
            float PrevY;

            if(hsCanvasGetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, PrevUser.IconOnlyView.hud_voicechat_user_icon_n, PrevX, PrevY))
            {
                // 一つ前のGUIが同じ行かどうか
                bool IsSameLine = ((PrevIndex + 1) % 3 != 0);
                if(IsSameLine)
                {
                    // 一つ前のGUIと同じ行なのでY座標もそろえる
                    IconPosY = PrevY;
                }
                else
                {
                    // 一つ前のGUIの一行下なので一つ分Y座標を下げる
                    IconPosY = PrevY + YOffset;
                }
            }
        }

        // GUIの位置を更新する
        if(IsPortrait)
        {
            int XOffset = 160;

            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_icon_n, 204 + row * XOffset, IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_mute, 254 + row * XOffset, 50 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_talking, 204 + row * XOffset, IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_leader_icon, 204 + row * XOffset, -60 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, temp_block_icon_image, 204 + row * XOffset, IconPosY);
        }
        else
        {
            int XOffset = 57;

            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_icon_n, 61 + row * XOffset, IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_mute, 77 + row * XOffset, 17 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_talking, 61 + row * XOffset, IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_leader_icon, 61 + row * XOffset, -21 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_icon_only_cloneIcon, IsPortrait, temp_block_icon_image, 61 + row * XOffset, IconPosY);
        }
    }

    void _Release(bool IsPortrait)
    {
        system.Canvas_ReleaseGUI(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_icon_n);
        system.Canvas_ReleaseGUI(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_mute);
        system.Canvas_ReleaseGUI(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_user_talking);
        system.Canvas_ReleaseGUI(g_vcc_icon_only_cloneIcon, IsPortrait, hud_voicechat_leader_icon);
        system.Canvas_ReleaseGUI(g_vcc_icon_only_cloneIcon, IsPortrait, temp_block_icon_image);
    }

    void _Show(bool Show)
    {
        hsCanvasResetToggleDefault(Toggle_VCC_User_Leader_Icon);

        if(Show)
        {
            hsCanvasToggleChange(Toggle_VCC_User_Leader_Icon);
        }
    }
}

class VCCViewNameUser
{
    string PlayerID;

    public string hud_voicechat_user_icon;
    string hud_voicechat_mute;
    string hud_voicechat_user_talking;
    string hud_voicechat_leader_icon;
    string hud_voicechat_name;

    string temp_block_icon_image;
    string temp_block_text_image;

    string Toggle_VCC_User_Leader_Icon;
    string Toggle_VCC_User_Is_Blocked;

    public bool Load(VCCUserData UserData, int TableOrder, bool IsChannelCreator, list<VCCUserData> UserList)
    {
        PlayerID = UserData.PlayerID;
        Toggle_VCC_User_Leader_Icon = "Toggle_VCC_User_Leader_Icon_%s" % PlayerID;
        Toggle_VCC_User_Is_Blocked = "Toggle_VCC_User_Is_Blocked_%s" % PlayerID;

        _Load(UserData, TableOrder, false, 40, IsChannelCreator, UserList);
        _Load(UserData, TableOrder, true, 105, IsChannelCreator, UserList);

        _Show(IsChannelCreator);

        return true;
    }

    public void SetMicState(int MicState)
    {
        // ミュートバッチの更新
        if(MicState == 0)
        {
            hsCanvasResetToggleDefault("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
            hsCanvasToggleChange("Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID);
        }

        // 発声中の強調表示を更新
        if(MicState == 2)
        {
            hsCanvasResetToggleDefault("Toggle_VCC_Talking_ON_OFF_%s" % PlayerID);
            hsCanvasToggleChange("Toggle_VCC_Talking_ON_OFF_%s" % PlayerID);
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_VCC_Talking_ON_OFF_%s" % PlayerID);
        }
    }

    public void UpdateGUIPos(int Order, list<VCCUserData> UserList)
    {
        _UpdatePos(Order, false, 40, UserList);
        _UpdatePos(Order, true, 105, UserList);
    }

    public void UpdateGUIResource(VCCUserData UserData)
    {
        string iconURL = (UserData.IconURL.IsEmpty())? "gui2023/voicechat/hud_voicechat_user_icon.png" : UserData.IconURL;
        hsCanvasSetGUIImage(g_vcc_user_list_cloneList, hud_voicechat_user_icon, iconURL);
        
        hsCanvasSetGUIText(g_vcc_user_list_cloneList, hud_voicechat_name, UserData.UserName);

        _Show(UserData.IsChannelCreator);
    }

    public void Release()
    {
        _Release(false);
        _Release(true);
    }

    public void ShowTempBlockUI(bool IsBlocked)
    {
        hsCanvasResetToggleDefault(Toggle_VCC_User_Is_Blocked);

        if(IsBlocked)
        {
            hsCanvasToggleChange(Toggle_VCC_User_Is_Blocked);
        }
    }

    void _Load(VCCUserData UserData, int UserIndex, bool IsPortrait, int YOffset, bool IsChannelCreator, list<VCCUserData> UserList)
    {
        hud_voicechat_user_icon = "hud_voicechat_user_icon_%s" % UserData.PlayerID;
        hud_voicechat_mute      = "hud_voicechat_mute_%s"      % UserData.PlayerID;
        hud_voicechat_user_talking = "hud_voicechat_user_talking_%s" % UserData.PlayerID;
        hud_voicechat_leader_icon      = "hud_voicechat_leader_icon_%s" % UserData.PlayerID;
        hud_voicechat_name = "hud_voicechat_name_%s" % UserData.PlayerID;
        temp_block_icon_image = "temp_block_icon_image_%s" % UserData.PlayerID;
        temp_block_text_image = "temp_block_text_image_%s" % UserData.PlayerID;

        string iconURL = (UserData.IconURL.IsEmpty())? "gui2023/voicechat/hud_voicechat_user_icon.png" : UserData.IconURL;
        string UserName = UserData.UserName;

        // 自身よりもひとつ前のアイコンのGUIの位置を参照して自身のY座標を計算する(スクロールでずれてしまうため)
        // アイコン以外のGUIについてはアイコンからの相対座標をAddGUIの時に考慮する必要がある
        float IconPosY = (IsPortrait)? 352 : 120;
        if(UserIndex != 0)
        {
            int PrevIndex = UserIndex - 1;
            VCCUserData PrevUser = UserList[PrevIndex];
            float PrevX;
            float PrevY;

            if(hsCanvasGetGUIPos(g_vcc_user_list_cloneList, IsPortrait, PrevUser.NameView.hud_voicechat_user_icon, PrevX, PrevY))
            {
                // 一つ前のGUIの一行下なので一つ分Y座標を下げる
                IconPosY = PrevY + YOffset;
            }
        }

        // GUIを生成する
        if(IsPortrait)
        {
            hsAddGUIButton(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_user_icon, "", "", "", true, 4, 103, IconPosY, 90, 90, 0.5, 0.5, "LT", true, 0.0,
                iconURL, "", "", "", 90, 90, 300, 32, 0, 0, 0, 0
            );

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_mute, "", "", "", true, 5, 146, 23 + IconPosY, 65, 65, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/hud/hud_voicechat_mute.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_mute, "Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID, true);

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_user_talking, "", "", "", true, 3, 103, IconPosY, 189, 189, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_user_talking.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_user_talking, "Toggle_VCC_Talking_ON_OFF_%s" % PlayerID, false);

            hsAddGUIText(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_name, true, 1, 416, IconPosY, 475, 90, 0.5, 0.5, "LT", true, 0.0,
                UserName, "BIZUDPGothic", 35, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
            );

            // チャンネル作成者の王冠マークを生成
            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_leader_icon, "", "", "", true, 5, 103, -42 + IconPosY, 74, 37, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_leader_icon.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_leader_icon, Toggle_VCC_User_Leader_Icon, false);

            // 一時ブロック
            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                temp_block_icon_image, "", "", "", true, 6, 103, IconPosY, 90, 90, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_icon_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, temp_block_icon_image, Toggle_VCC_User_Is_Blocked, false);

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                temp_block_text_image, "", "", "", true, 6, 416, IconPosY, 475, 90, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_name_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, temp_block_text_image, Toggle_VCC_User_Is_Blocked, false);
        }
        else
        {
            hsAddGUIButton(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_user_icon, "", "", "", true, 4, 39, IconPosY, 32, 32, 0.5, 0.5, "LT", true, 0.0,
                iconURL, "", "", "", 32, 32, 300, 32, 0, 0, 0, 0
            );

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_mute, "", "", "", true, 5, 56, 8 + IconPosY, 25, 25, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/hud/hud_voicechat_mute.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_mute, "Toggle_VCC_MuteBatch_ON_OFF_%s" % PlayerID, true);

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_user_talking, "", "", "", true, 3, 39, IconPosY, 67, 67, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_user_talking.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_user_talking, "Toggle_VCC_Talking_ON_OFF_%s" % PlayerID, false);

            hsAddGUIText(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_name, true, 1, 142, IconPosY, 152, 16, 0.5, 0.5, "LT", true, 0.0,
                UserName, "BIZUDPGothic", 12, 1.0, 1.0, 1.0, 1.0, "LM", 0, 0, false, false, 1.0, 1.0, 1.0, 1.0
            );

            // チャンネル作成者の王冠マークを生成
            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                hud_voicechat_leader_icon, "", "", "", true, 5, 39, -12 + IconPosY, 30, 15, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/hud_voicechat_leader_icon.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, hud_voicechat_leader_icon, Toggle_VCC_User_Leader_Icon, false);

            // 一時ブロック
            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                temp_block_icon_image, "", "", "", true, 6, 39, IconPosY, 32, 32, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_icon_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, temp_block_icon_image, Toggle_VCC_User_Is_Blocked, false);

            hsAddGUIImage(
                g_vcc_user_list_cloneList, IsPortrait, 
                temp_block_text_image, "", "", "", true, 6, 142, IconPosY, 152, 16, 0.5, 0.5, "LT", true, 0.0,
                "gui2023/voicechat/voicechat_name_block.png", 0, 0, 0, 0
            );

            system.Canvas_AddGUIToggle(g_vcc_user_list_cloneList, temp_block_text_image, Toggle_VCC_User_Is_Blocked, false);
        }
    }

    void _UpdatePos(int UserIndex, bool IsPortrait, int YOffset, list<VCCUserData> UserList)
    {
        // 自身よりもひとつ前のアイコンのGUIの位置を参照して自身のY座標を計算する(スクロールでずれてしまうため)
        // アイコン以外のGUIについてはアイコンからの相対座標をAddGUIの時に考慮する必要がある
        float IconPosY = (IsPortrait)? 352 : 120;
        if(UserIndex != 0)
        {
            int PrevIndex = UserIndex - 1;
            VCCUserData PrevUser = UserList[PrevIndex];
            float PrevX;
            float PrevY;

            if(hsCanvasGetGUIPos(g_vcc_user_list_cloneList, IsPortrait, PrevUser.NameView.hud_voicechat_user_icon, PrevX, PrevY))
            {
                // 一つ前のGUIの一行下なので一つ分Y座標を下げる
                IconPosY = PrevY + YOffset;
            }
        }

        // GUIの位置を更新する
        if(IsPortrait)
        {
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_icon, 103, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_mute, 146, 23 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_talking, 103, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_name, 416, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_leader_icon, 103, -42 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, temp_block_icon_image, 103, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, temp_block_text_image, 416, IconPosY);
        }
        else
        {
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_icon, 39, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_mute, 56, 8 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_talking, 39, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_name, 142, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_leader_icon, 39, -12 + IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, temp_block_icon_image, 39, IconPosY);
            hsCanvasSetGUIPos(g_vcc_user_list_cloneList, IsPortrait, temp_block_text_image, 142, IconPosY);
        }
    }

    void _Release(bool IsPortrait)
    {
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_icon);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_mute);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_user_talking);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_leader_icon);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, hud_voicechat_name);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, temp_block_icon_image);
        system.Canvas_ReleaseGUI(g_vcc_user_list_cloneList, IsPortrait, temp_block_text_image);
    }

    void _Show(bool Show)
    {
        hsCanvasResetToggleDefault(Toggle_VCC_User_Leader_Icon);

        if(Show)
        {
            hsCanvasToggleChange(Toggle_VCC_User_Leader_Icon);
        }
    }
}