class ProfileMenuView
{
    
    public ProfileMenuView()
    {
    }

    public string GetLocalInputTextIntro()
    {
        return "intro-input-text";
    }

    public void ResizeCallback()
    {
        _SetNickNameSize();
        _SetIntroSize();
    }

    public void DrawProfileNameplateIcon(string url)
    {
        if(!url.IsEmpty()) 
        {
            hel_setText(ETextParamType_ReplaceMyAvatarIconCustom, url);
        }
    }

    public void UpdateNameInputField(string name)
    {
        hel_set_TextField_UserName(name);
        hel_update_TextField_UserName();
        hel_post_TextField_UserName(false);
    }

    public void UpdateIntroInputField(string introduction)
    {
        _SetIntroInputText(introduction);
    }

    void _SetIntroInputText(string introduction)
    {
        hel_set_HTMLElement_value("intro-input-text", introduction);
    }

    public void DrawProfile(string name, string introduction, string url)
    {
        hsCanvasSetLayerShow("config_profile", true);

        hsCanvasSetGUIText("config_profile" , "UserName" , (!name.IsEmpty())? name : "Me");
        hsCanvasSetGUIText("config_profile" , "Intro_text" , introduction);
        hsCanvasSetGUIImage("config_profile" , "config_profile_icon_image" , (!url.IsEmpty())? url : "gui2023/menu/mypage/mypage_icon_none.png");
    }

    public void UpdateMainMenuUserView(string name, string url, string UserType)
    {
        if(UserType == "login") // ログイン中
        {
            hsCanvasResetToggleDefault("Toggle_MainMenu_Login_Logout");
            hsCanvasToggleChange("Toggle_MainMenu_Login_Logout");

            hsCanvasSetGUIImage("mainmenu_home", "menu_avatar_icon", url);
            hsCanvasSetGUIText("mainmenu_home", "menu_user_name_text", ((!name.IsEmpty())? name : "Me"));
            
            hsCanvasSetGUIImage("mainmenu_side_home", "menu_avatar_icon", url);
            hsCanvasSetGUIText("mainmenu_side_home", "menu_user_name_text", ((!name.IsEmpty())? name : "Me"));
        }
        else // ログアウト中
        {
            hsCanvasResetToggleDefault("Toggle_MainMenu_Login_Logout");

            hsCanvasSetGUIImage("mainmenu_home", "menu_avatar_icon", "gui2023/menu/mypage/mypage_icon_none.png");
            hsCanvasSetGUIText("mainmenu_home", "menu_user_name_text", ((!name.IsEmpty())? name : "guest"));
            
            hsCanvasSetGUIImage("mainmenu_side_home", "menu_avatar_icon", "gui2023/menu/mypage/mypage_icon_none.png");
            hsCanvasSetGUIText("mainmenu_side_home", "menu_user_name_text", ((!name.IsEmpty())? name : "guest"));
        }
    }

    public void Close()
    {
        hsCanvasSetLayerShow("config_profile", false);
        _SetShowNickName(false);
        _SetShowIntro(false);
    }

    public void OpenNicknameEditDialog()
    {
        hsCanvasSetLayerShow("profile_nickname_edit_dialog", true);
        _SetNickNameSize();
        _SetShowNickName(true);
    }
    
    public void CloseNickNameEditDialog()
    {
        hsCanvasSetLayerShow("profile_nickname_edit_dialog", false);
        _SetShowNickName(false);
    }

    void _SetNickNameSize()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "profile_nickname_edit_dialog" + "," + "MyPage_UserName_Text" + ","
                + "username" + "," + "username-text");
    }

    void _SetShowNickName(bool show)
    {
        hel_set_HTMLElement_visibility("username", show);
        hel_set_HTMLElement_visibility("username-text", show);
    }

    public void OpenIntroEditDialog()
    {
        hsCanvasSetLayerShow("profile_intro_edit_dialog", true);
        _SetIntroSize();
        _SetShowIntro(true);
    }
    
    public void CloseIntroEditDialog()
    {
        hsCanvasSetLayerShow("profile_intro_edit_dialog", false);
        _SetShowIntro(false);
    }

    public void ClickIntroductionUpdateButton(string introduction)
    {
        hsCanvasSetGUIText("config_profile" , "Introduction" , introduction);
        _SetShowIntro(false);
    }

    void _SetIntroSize()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "profile_intro_edit_dialog" + "," + "MyPage_Intro_text" + ","
                + "intro" + "," + "intro-input-text");
    }

    void _SetShowIntro(bool show)
    {
        hel_set_HTMLElement_visibility("intro", show);
        hel_set_HTMLElement_visibility("intro-input-text", show);
    }
}