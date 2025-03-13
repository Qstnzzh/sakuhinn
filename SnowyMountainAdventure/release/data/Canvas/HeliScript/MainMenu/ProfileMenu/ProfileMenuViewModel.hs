component ProfileMenuViewModel
{
    ProfileMenuView m_ProfileView;
    ProfileMenuModel m_Model;

    bool m_IsOpenedProfile;

    public ProfileMenuViewModel()
    {
        m_ProfileView = new ProfileMenuView();
        m_Model = system.Layer_GetComponentByName<ProfileMenuModel>("config_profile");

        m_IsOpenedProfile = false;
    }

    public void OnResize()
    {
        m_ProfileView.ResizeCallback();
    }

    public void OnWindowActivate(bool IsActivate)
    {
        if(IsActivate)
        {
           m_Model.FetchProfile(true, true);
        }
    }

    public void DrawProfileNameplateIcon()
    {
        m_ProfileView.DrawProfileNameplateIcon(m_Model.GetNamePlateIconURL());
    }

    public void UpdateViewDataByProfile(string UserName, string introduction, string IconURL, string UserCode, string UserType)
    {
        m_ProfileView.UpdateNameInputField(UserName);
        m_ProfileView.UpdateIntroInputField(introduction);
        m_ProfileView.UpdateMainMenuUserView(UserName, IconURL, UserType);

        if(!m_IsOpenedProfile) 
        {
            return;
        }

        m_ProfileView.DrawProfile(UserName, introduction, IconURL);
    }

    public void UpdateSelfUserData(string UserName, string introduction, string IconURL, string UserCode, string UserType)
    {
        // 自身のユーザーテーブル上のデータとメインメニューのログインステータスを更新する
        {
            LayerBundle layer = hsLayerGet("vcc_icon_only_base");
            if(layer !== null)
            {
                layer.CallComponentMethod("VCCViewModel", "UpdateSelfUserData", 
                    "{" + 
                        "\"" + "UserName" + "\"" + ":" + "\"" + UserName + "\"" + "," + 
                        "\"" + "IconURL"  + "\"" + ":" + "\"" + IconURL  + "\"" + "," + 
                        "\"" + "UserCode" + "\"" + ":" + "\"" + UserCode + "\"" + "," + 
                        "\"" + "UserType" + "\"" + ":" + "\"" + UserType + "\"" + "," + 
                    "}"
                );
            }
        }

        // コミュニティ機能の画面
        {
            LayerBundle layer = hsLayerGet("mainmenu_community_base");
            if(layer !== null)
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "FetchUserList", "");
            }
        }
    }
    
    public void OpenProfile(string param)
    {
        m_IsOpenedProfile = true;
        m_Model.FetchProfile(false, false);
    }

    public void OpenMyHome()
    {
        Player SelfPlayer = hsPlayerGet();
        string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
        string SelfUserType = SelfPlayer.GetCustomState("UserType");

        if(SelfUserType == "login" && !SelfUserCode.IsEmpty())
        {
            api.profiles.openMyVketUrl("/myroom/maker/?worldid=MyRoom-%s" % SelfUserCode);
        }
    }
    
    public void CloseProfile(string param)
    {
        m_IsOpenedProfile = false;
        m_ProfileView.Close();
    }
    
    public void ClickIconChangeButton(string param)
    {
        m_Model.UpdateIcon();
    }
    
    public void ClickNicknameChangeButton(string param)
    {
        m_ProfileView.CloseIntroEditDialog();
        m_ProfileView.OpenNicknameEditDialog();
    }
    
    public void ClickNicknameUpdateButton(string param)
    {
        m_Model.UpdateNickname();
        m_ProfileView.CloseNickNameEditDialog();
    }

    public void ClickCloseNicknameEditDialog()
    {
        m_ProfileView.CloseNickNameEditDialog();
    }
    
    public void ClickIntroductionChangeButton(string param)
    {
        m_ProfileView.CloseNickNameEditDialog();
        m_ProfileView.OpenIntroEditDialog();
    }
    
    public void ClickIntroductionUpdateButton(string param)
    {
        string inputIntroText = hel_get_HTMLElement_value(m_ProfileView.GetLocalInputTextIntro());
        if(inputIntroText.Length() > 200)
        {
            inputIntroText = inputIntroText.SubString(0, 200);
        }

        m_ProfileView.ClickIntroductionUpdateButton(inputIntroText);
        m_Model.UpdateIntroduction(inputIntroText);

        m_ProfileView.CloseIntroEditDialog();
    }

    public void ClickCloseIntroEditDialog()
    {
        m_ProfileView.CloseIntroEditDialog();
    }

    public void ClickMyVketBtn()
    {
        api.profiles.openMyVketUrl("/");
    }

    public void ClickLogin(string param)
    {
        api.auths.login();
    }
    
    public void ClickSignup(string param)
    {
        api.profiles.openMyVketUrl("/mypage/profile");
    }
}