const string PRESET_AVATAR_TAB = "PRESET_AVATAR_TAB";
const string MY_AVATAR_TAB = "MY_AVATAR_TAB";

component MyAvatarViewModel
{
    MyAvatarModel m_Model;
    MyAvatarView m_View;
    
    bool m_IsOpenedMyAvatar;
    string m_CurrentTabIndex;
    int m_SelectedMyAvatarItemIndex;
    int m_PresetAvatarID;

    public MyAvatarViewModel()
    {
        m_Model = system.Layer_GetComponentByName<MyAvatarModel>("mainmenu_mypage_avatar_base");
        m_View = new MyAvatarView();
        m_IsOpenedMyAvatar = false;
        m_CurrentTabIndex = "";
        m_SelectedMyAvatarItemIndex = -1;
        m_PresetAvatarID = hel_skyway_get_avatar();
    }

    public void OnWindowActivate(bool IsActivate)
    {
        if(IsActivate)
        {
            if(m_IsOpenedMyAvatar)
            {
                // マイアバタータブを再描画する
                ClickMyAvatarTab("");
            }

            // タブが非アクティブ状態から復帰したときの処理
            api.auths.isLoggedIn(_WindowActivateCallback);
        }
        else
        {
            // タブが非アクティブになったのでマイアバターを使用していればダミーアバターに変更してそれを全体に通知する
            // 非アクティブ中はトークンの更新関数が動かないため、トークンの期限が切れてしまい、距離カットでリロードするとビルドエラーになってしまう
            MyAvatarData Avatar = m_Model.GetCurrentMyAvatar();
            if(Avatar !== null && !Avatar.GetUUID().IsEmpty())
            {
                m_Model.ApplyTempDummyAvatar();
            }

            // タブが非表示になった時に他の人のマイアバターを全て一時的にダミーアバターにする
            // タブに戻ってきたときにトークンの更新を受け取っていなかった場合、自身がビルドエラーになってしまうため
            m_Model.ApplyTempDummyAvatarToAllMyAvatar();
        }
    }

    void _WindowActivateCallback(bool loginValid)
    {
        MyAvatarData Avatar = m_Model.GetCurrentMyAvatar();

        if(loginValid)
        {
            if(Avatar !== null && !Avatar.GetUUID().IsEmpty())
            {
                // 一時的なダミーアバターから元のマイアバターに戻す
                m_Model.RemoveTempDummyAvatar();
            }
        }
        else
        {
            // ログイン から ゲストに変わった時にマイアバターを使用していたらプリセットアバターの0番目に変更する
            if(Avatar !== null && !Avatar.GetUUID().IsEmpty())
            {
                m_SelectedMyAvatarItemIndex = -1;

                int ID = 0;
                m_PresetAvatarID = ID;

                m_Model.SelectPresetAvatar(ID);

                hel_setText(ETextParamType_ReplaceMyAvatar, "0");
            }
        }
    }

    public void UpdateViewDataByAvatars(list<MyAvatarData> AvatarList, int PagerIndex)
    {
        if(!m_IsOpenedMyAvatar)
        {
            return;
        }

        if(!AvatarList.IsEmpty())
        {
            m_View.drawConfigAvatarTileList(AvatarList, PagerIndex);

            int Index = -1;
            MyAvatarData Avatar = m_Model.GetCurrentMyAvatar();
            if(Avatar !== null)
            {
                for(int i = 0; i < AvatarList.Count; i++)
                {
                    if(AvatarList[i].GetUUID() == Avatar.GetUUID())
                    {
                        Index = i;

                        break;
                    }
                }
            }
            
            m_View.showMyAvatarSelectmark(Index);
        }
        else
        {
            m_View.drawMyAvatarUploadButton();
        }
    }

    public void SetCurrentAvatarItemIndexOnLoaded(int Index)
    {
        if(Index != -1)
        {
            m_PresetAvatarID = -1;
        }
    }

    public void ClickMyAvatarTab(string param)
    {
        m_IsOpenedMyAvatar = true;
        
        m_View.showPresetAvatarSelectmark(-1);

        m_View.closeConfigPresetAvatar();
        m_Model.FetchMyAvatarDataList(0);

        m_CurrentTabIndex = MY_AVATAR_TAB;
    }

    public void ClickPresetAvatarTab(string param)
    {
        m_IsOpenedMyAvatar = false;
        
        m_View.showPresetAvatarSelectmark(m_PresetAvatarID);

        m_View.closeConfigMyAvatar();
        m_View.drawPresetAvatarTileList();

        m_Model.Release();

        m_CurrentTabIndex = PRESET_AVATAR_TAB;
    }

    public void ClickPageBack()
    {
        m_Model.UpdatePager(-1);
    }
    
    public void ClickPageNext()
    {
        m_Model.UpdatePager(1);
    }
    
    public void Close(string param)
    {
        m_View.closeAvatarBase();
        m_View.closeConfigMyAvatar();
        m_View.closeConfigPresetAvatar();
        m_View.showPresetAvatarSelectmark(-1);

        m_CurrentTabIndex = MY_AVATAR_TAB;
        m_Model.Release();
        m_IsOpenedMyAvatar = false;
    }

    public void ShowLoginButtonOnMyAvatar()
    {
        m_View.drawLoginButtonOnMyAvatar();
    }

    public void ClickLogin(string param)
    {
        api.auths.login();
    }
    
    public void ClickSignup(string param)
    {
        api.profiles.openMyVketUrl("/mypage/profile");
    }
    
    public void ClickAvatarUpload(string param)
    {
        api.profiles.openMyVketUrl("/mypage/assets/avatar");
    }
    
    public void ConfirmAvatarSelect(string param)
    {
        int ID = hel_skyway_get_avatar();
        
        if(m_CurrentTabIndex == PRESET_AVATAR_TAB)
        {
            m_SelectedMyAvatarItemIndex = -1;

            m_PresetAvatarID = ID;

            m_Model.SelectPresetAvatar(ID);

            // プリセットアバター用のネームプレートアイコンを表示する
            m_View.DrawPresetNameplateIcon(ID);
        }
        else if(m_CurrentTabIndex == MY_AVATAR_TAB)
        {
            if(m_SelectedMyAvatarItemIndex >= 0 && m_SelectedMyAvatarItemIndex < m_Model.GetMyAvatarCount())
            {
                m_PresetAvatarID = ID;

                m_Model.SelectMyAvatar(m_SelectedMyAvatarItemIndex);
            }
        }

        Close("");
    }

    public void DrawProfileNameplateIcon()
    {
        // マイアバター用のネームプレートアイコンを表示する
        LayerBundle layer = hsLayerGet("config_profile");
        if(layer !== null)
        {
            layer.CallComponentMethod("ProfileMenuViewModel", "DrawProfileNameplateIcon", "");
        }
    }

    public void SelectMyAvatarFromUUID(string UUID)
    {
        m_Model.SelectMyAvatarFromUUID(UUID);
    }
    
    void _ClickGridListItem(int Index)
    {
        m_SelectedMyAvatarItemIndex = Index;

        m_View.showMyAvatarSelectmark(m_SelectedMyAvatarItemIndex);
    }

    public void ClickGridListRow(string param)
    {
        int Index = param.ToInt();

        _ClickGridListItem(Index);
    }

    public void ClearUserTable()
    {
    }

    public void OnVCPlayerJoin(string ID, string Data)
    {
        m_Model.AddPlayerID(ID);
    }

    public void OnVCPlayerLeave(string ID, string Data)
    {
        m_Model.RemovePlayerID(ID);
    }
}