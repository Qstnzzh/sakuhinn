const string SELF_USER_STATE_LOGIN = "SELF_USER_STATE_LOGIN";
const string SELF_USER_STATE_GUEST = "SELF_USER_STATE_GUEST";
const string SELF_USER_STATE_NONE = "SELF_USER_STATE_NONE";

component ProfileMenuModel
{
    ProfileMenuViewModel m_ViewModel;

    string m_VketUserCode;
    string m_GuestUserCode;

    string m_Name;
    string m_Introduction;
    string m_CircleIconURL;
    string m_NamePlateIconURL;

    bool m_IsFirstUpdate;
    bool m_IsUpdateVCCData;
    bool m_CheckState;
    bool m_UpdatedIcon;

    string m_CurrentSelfUserState;
    string m_PrevSelfUserState;

    public ProfileMenuModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<ProfileMenuViewModel>("config_profile");

        m_IsFirstUpdate = true;
        m_IsUpdateVCCData = false;
        m_CheckState = false;
        m_UpdatedIcon = false;

        m_CurrentSelfUserState = SELF_USER_STATE_NONE;
        m_PrevSelfUserState = SELF_USER_STATE_NONE;

        // Profile APIの初期化
        hel_onloaded_add(_OnloadedCallback);
    }

    public string GetNamePlateIconURL()
    {
        return m_NamePlateIconURL;
    }

    void _OnloadedCallback()
    {
        FetchProfile(true, false);
    }

    public void FetchProfile(bool IsUpdateVCCData, bool CheckState)
    {
        m_IsUpdateVCCData = IsUpdateVCCData;
        m_CheckState = CheckState;

        api.auths.isLoggedIn(_LoginCallback);
    }

    void _LoginCallback(bool loginValid)
    {
        if(!loginValid)
        {
            // いくつかのプロフィール変更ボタンを非アクティブ状態にする
            hsCanvasResetToggleDefault("Toggle_MyPage_Is_LoginedIn");

            // ログインステータスを更新
            m_PrevSelfUserState = m_CurrentSelfUserState;
            m_CurrentSelfUserState = SELF_USER_STATE_GUEST;

            if(m_GuestUserCode.IsEmpty())
            {
                // ログインステータスが変わっているのでユーザー情報を初期化する
                if(m_CurrentSelfUserState != m_PrevSelfUserState)
                {
                    api.channelSessionApi.initChannelSession(_initGuestUserCallback);
                }
                else
                {
                    // ChS-APIからGuestUserCodeを取得する
                    // ChS-APIが初期化されていないのであればこの関数は呼べない
                    api.channelSessionApi.fetchMyProfile(_fetchGuestUserCodeCallback);
                }
            }
            else
            {
                // ゲストプロフィールを取得
                api.profiles.fetchMyGuestProfile(_fetchMyGuestProfileCallback, m_GuestUserCode);
            }
        }
        else
        {
            // プロフィール変更ボタンを全てアクティブ状態にする
            hsCanvasResetToggleDefault("Toggle_MyPage_Is_LoginedIn");
            hsCanvasToggleChange("Toggle_MyPage_Is_LoginedIn");

            // ログインステータスを更新
            m_PrevSelfUserState = m_CurrentSelfUserState;
            m_CurrentSelfUserState = SELF_USER_STATE_LOGIN;

            // プロフィールを取得
            api.profiles.fetchMyProfile(_fetchMyProfileCallback);
        }
    }

    void _initGuestUserCallback(string param)
    {
        // ChS-APIからGuestUserCodeを取得する
        // ChS-APIが初期化されていないのであればこの関数は呼べない
        api.channelSessionApi.fetchMyProfile(_fetchGuestUserCodeCallback);
    }

    void _fetchGuestUserCodeCallback(string param)
    {
        Json ProfileJson = hsLoadJson(param);
        if(ProfileJson === null) return;

        Json data = ProfileJson.Find(EJSONDataType_Block, "data");
        if(data === null) return;

        Json user = data.Find(EJSONDataType_Block, "user");
        if(user === null) return;

        string user_code;
        user.FindValueString("uid", user_code);

        string user_type;
        user.FindValueString("user_type", user_type);
        
        // ゲストプロフィールを取得
        if(!user_code.IsEmpty() && user_type == "guest")
        {
            m_GuestUserCode = user_code;
            api.profiles.fetchMyGuestProfile(_fetchMyGuestProfileCallback, m_GuestUserCode);
        }
    }

    void _fetchMyProfileCallback(string param)
    {
        Json profileJSON = hsLoadJson(param);
        if(profileJSON === null) return;

        Json profile = profileJSON.Find(EJSONDataType_Block, "profile");
        if(profile === null) return;

        _AnalyseProfileJSON(profile, true);
    }
    
    void _fetchMyGuestProfileCallback(string param)
    {
        Json profile = hsLoadJson(param);
        if(profile === null) return;

        _AnalyseProfileJSON(profile, false);
    }

    void _AnalyseProfileJSON(Json profile, bool Islogin)
    {
        string vket_id;
        profile.FindValueString("vket_id", vket_id);

        string uuid;
        profile.FindValueString("uuid", uuid);

        string name;
        profile.FindValueString("name", name);

        string introduction;
        profile.FindValueString("introduction", introduction);
        
        string url; // ネームプレート横に表示用
        string circle_url;
        // Circle Icon URLの取得はログインユーザーのみ
        // ゲストユーザーの場合、まずアイコンアップロードは許されておらず、丸型アイコンが生成されることはないため
        if(m_CurrentSelfUserState == SELF_USER_STATE_LOGIN)
        {
            Json icon = profile.Find(EJSONDataType_Block, "icon");
            if(icon !== null)
            {
                Json circle = icon.Find(EJSONDataType_Block, "circle");
                if(circle !== null)
                {
                    circle.FindValueString("url", circle_url);
                }

                //
                icon.FindValueString("url", url);
            }
        }

        if(!vket_id.IsEmpty())
        {
            m_VketUserCode = vket_id;
        }
        else
        {
            m_VketUserCode = uuid;
        }

        // Profile APIから名前を取得する
        m_Name = name;
        
        m_Introduction = introduction; 
        m_CircleIconURL = circle_url;
        m_NamePlateIconURL = url;

        // 初回入室処理を終わる
        if(m_IsFirstUpdate)
        {
            m_IsFirstUpdate = false;

            // ゲストユーザーの場合、初回入室時にChS-APIの初期化が済んでおらず、初回名前の変更ができないので、入室ダイアログ押下時に改めて更新処理を行う
            if(!Islogin)
            {
                UpdateNickname();
                return;
            }
        }

        // 座標チャンネルのCustomState上のUserType(VketID)を更新する
        // 座標チャンネルが変わっても自動的に引き継がれる値
        hsNetSetCustomState("UserCode", m_VketUserCode);
        hsNetSetCustomState("UserType", ((Islogin)? "login" : "guest"));

        // VCCのデータを更新するか
        if(m_IsUpdateVCCData)
        {
            if(m_CheckState)
            {
                // ログインステータスが変わっている時のみデータを更新する(何回も更新してるとスマホが重くなりそうなため)
                if(m_CurrentSelfUserState != m_PrevSelfUserState)
                {
                    m_ViewModel.UpdateSelfUserData(m_Name, m_Introduction, m_CircleIconURL, m_VketUserCode, ((Islogin)? "login" : "guest"));
                }
            }
            else
            {
                m_ViewModel.UpdateSelfUserData(m_Name, m_Introduction, m_CircleIconURL, m_VketUserCode, ((Islogin)? "login" : "guest"));
            }
        }

        // Profile画面の更新
        m_ViewModel.UpdateViewDataByProfile(m_Name, m_Introduction, m_CircleIconURL, m_VketUserCode, ((Islogin)? "login" : "guest"));
        
        // ChS-APIのアイコン変更関数を呼んで、アイコンデータを即時反映させる
        if(m_UpdatedIcon)
        {
            // api.channelSessionApi.updateMyProfile(_updateMyProfileCallback, m_Name, m_CircleIconURL, "");

            m_UpdatedIcon = false;
        }

        // ログイン状態に変わったらアチーブメントの通知関数を設定する
        if(m_CurrentSelfUserState != m_PrevSelfUserState && m_CurrentSelfUserState == SELF_USER_STATE_LOGIN)
        {
            api.achievement.watchAchievementNotification();
        }

        // ChS-API内部のUserCodeを更新するにはinitChannelSessionを呼ぶ必要がある
        api.channelSessionApi.initChannelSession(_UpdateUserCodeCallback);
    }

    void _UpdateUserCodeCallback(string param)
    {
    }

    public void UpdateNickname()
    {
        if(m_IsFirstUpdate)
        {
            _OnloadedCallback();
            return;
        }

        string name = hel_get_skyway_username();

        // 文字数が20文字より多いとAPIでエラーが出て後続の処理が実行されなくなるのでひとまずクライアント側で区切っておく
        name = name.SubString(0, 20);

        _UpdateProfile(name, m_Introduction);
    }

    public void UpdateIntroduction(string Introduction)
    {
        // 文字数が(おそらく)200文字より多いとAPIでエラーが出て後続の処理が実行されなくなるのでひとまずクライアント側で区切っておく
        Introduction = Introduction.SubString(0, 200);

        _UpdateProfile(m_Name, Introduction);
    }

    public void UpdateIcon()
    {
        api.profiles.changeProfileIcon(_changeProfileIconCallback, m_VketUserCode, (m_CurrentSelfUserState == SELF_USER_STATE_GUEST));
    }
    
    void _UpdateProfile(string Name, string Introduction)
    {
        if((m_CurrentSelfUserState == SELF_USER_STATE_GUEST))
        {
            api.profiles.updateGuestProfile(_UpdateProfileCallback, m_VketUserCode, Name, Introduction);
        }
        else
        {
            api.profiles.updateProfile(_UpdateProfileCallback, Name, Introduction);
        }
    }

    void _UpdateProfileCallback(JsVal val)
    {
        FetchProfile(true, false);
    }

    void _changeProfileIconCallback()
    {
        m_UpdatedIcon = true;

        FetchProfile(true, false);
    }

    void _updateMyProfileCallback(string param)
    {
    }
}