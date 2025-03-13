component MyAvatarModel
{
    // fetch中かどうか
    bool m_Fetching;

    MyAvatarViewModel m_ViewModel;

    MyAvatarData m_CurrentMyAvatar;
    list<MyAvatarData> m_AvatarList;

    bool m_UseRefleshToken;
    int m_TokenRefleshedTime;

    list<bool> m_TextureCompressSupporetedList;

    int m_PagerIndex;
    int m_MaxPege;

    bool m_IsTempDummyAvatar;

    list<string> m_PosChPlayerIDList;

    public MyAvatarModel()
    {
        m_Fetching = false;

        m_ViewModel = system.Layer_GetComponentByName<MyAvatarViewModel>("mainmenu_mypage_avatar_base");

        m_CurrentMyAvatar = new MyAvatarData();
        m_AvatarList = new list<MyAvatarData>();
        m_UseRefleshToken = false;
        m_TokenRefleshedTime = 0;

        m_TextureCompressSupporetedList = new list<bool>();
        m_TextureCompressSupporetedList.Add(hel_isSupported_ETC2());
        m_TextureCompressSupporetedList.Add(hel_isSupported_ASTC());
        m_TextureCompressSupporetedList.Add(true);

        m_PagerIndex = 0;
        m_MaxPege = 0;

        m_IsTempDummyAvatar = false;

        m_PosChPlayerIDList = new list<string>();

        _SetDataFromCookie();

        hel_onloaded_add(_OnloadedCallback);
    }

    public int GetPagerIndex()
    {
        return m_PagerIndex;
    }

    public int GetMaxPageElemCount()
    {
        return ((hsCanvasIsPortrait())? 12 : 10);
    }

    public int GetMyAvatarCount()
    {
        return m_AvatarList.Count;
    }

    public MyAvatarData GetCurrentMyAvatar()
    {
        return m_CurrentMyAvatar;
    }

    public void Update()
    {
        if(m_UseRefleshToken)
        {
            int deltaTime = hsSystemGetTime() - m_TokenRefleshedTime;
            if(deltaTime >= g_MyAvatarToken_Reflesh_Time)
            {
                api.avatars.fetchMyAvatarToken(_FetchTokenCallbackWithoutURL, m_CurrentMyAvatar.GetUUID(), m_CurrentMyAvatar.GetVCUID());

                m_TokenRefleshedTime = hsSystemGetTime();
            }
        }
    }

    public void Release()
    {
        m_Fetching = false;
        m_AvatarList.Clear();
    }

    void _OnloadedCallback()
    {
        // シーンファイルでMyAvatarのuseフラグがオフになっている場合はその旨をGUIで表示する
        hsCanvasResetToggleDefault("Toggle_Use_MyAvatar");
        if(!hsPlayerUseMyAvatar())
        {
            hsCanvasToggleChange("Toggle_Use_MyAvatar");
        }

        // 初回ログインチェック
        api.auths.isLoggedIn(_OnloadedLoginCallback);
    }

    void _OnloadedLoginCallback(bool loginValid)
    {
        if(hsPlayerUseMyAvatar() && loginValid && hel_skyway_get_avatar() == -1 && !m_CurrentMyAvatar.GetUUID().IsEmpty())
        {
            api.avatars.fetchMyAvatarToken(_FetchTokenCallback, m_CurrentMyAvatar.GetUUID(), m_CurrentMyAvatar.GetVCUID());
            api.avatars.fetchMyAvatarList(_OnloadedFetchMyAvatarListCallback);
        }
        else
        {
            if(hel_skyway_get_avatar() == -1)
            {
                hel_setText(ETextParamType_ReplaceMyAvatar, "0");
            }
        }
    }

    public void FetchMyAvatarDataList(int PagerIndex)
    {
        // fetch中なら何もしない
        // MyAvatar APIはレスポンスが遅く、連打されると複数個リクエストが返ってきたりして表示がおかしくなってしまうのでその対策
        if(m_Fetching) return;

        m_PagerIndex = PagerIndex;

        if(!hsPlayerUseMyAvatar()) 
        {
            return;
        }

        api.auths.isLoggedIn(_LoginCallback);
    }

    void _LoginCallback(bool loginValid)
    {
        if(!loginValid)
        {
            m_ViewModel.ShowLoginButtonOnMyAvatar();
        }
        else
        {
            m_Fetching = true;

            int MaxPageElemCount = GetMaxPageElemCount();
            int Offset = m_PagerIndex * MaxPageElemCount;
            api.avatars.fetchMyAvatarPageList(_FetchMyAvatarListCallback, MaxPageElemCount, Offset);
        }
    }

    void _FetchMyAvatarListCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json Avatars = hsLoadJson(param);
        if(Avatars === null) return;

        Json AvatarsArray = Avatars.Find(EJSONDataType_Array, "assets");
        if(AvatarsArray === null) return;

        list<Json> ArrayList = AvatarsArray.GetArrayList();

        // アバターリストを作り直す
        Release();

        for(int i = 0; i < ArrayList.Count; i++)
        {
            Json avatar = ArrayList[i];
            if(avatar === null) return;

            Json latest_version = avatar.Find(EJSONDataType_Block , "latest_version");
            if(latest_version === null) return;

            Json thumbnail = latest_version.Find(EJSONDataType_Block, "thumbnail");
            if(thumbnail === null) return;

            string Name = "";
            avatar.FindValueString("name", Name);

            string UUID = "";
            latest_version.FindValueString("uuid", UUID);

            string ThumbnailURI = "";
            thumbnail.FindValueString("url", ThumbnailURI);

            MyAvatarData Data = new MyAvatarData();
            Data.SetVal(UUID, ThumbnailURI, Name);
            m_AvatarList.Add(Data);
        }

        int asset_count;
        Avatars.FindValueInt("asset_count", asset_count);
        int MaxPageElemCount = GetMaxPageElemCount();

        m_MaxPege = (asset_count + MaxPageElemCount - 1) / MaxPageElemCount;

        m_ViewModel.UpdateViewDataByAvatars(m_AvatarList, m_PagerIndex);
    }

    void _OnloadedFetchMyAvatarListCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json Avatars = hsLoadJson(param);
        if(Avatars === null) return;

        Json AvatarsArray = Avatars.Find(EJSONDataType_Array, "assets");
        if(AvatarsArray === null) return;

        list<Json> ArrayList = AvatarsArray.GetArrayList();

        list<MyAvatarData> AvatarList = new list<MyAvatarData>();

        for(int i = 0; i < ArrayList.Count; i++)
        {
            Json avatar = ArrayList[i];
            if(avatar === null) return;

            Json latest_version = avatar.Find(EJSONDataType_Block , "latest_version");
            if(latest_version === null) return;

            Json thumbnail = latest_version.Find(EJSONDataType_Block, "thumbnail");
            if(thumbnail === null) return;

            string Name = "";
            avatar.FindValueString("name", Name);

            string UUID = "";
            latest_version.FindValueString("uuid", UUID);

            string ThumbnailURI = "";
            thumbnail.FindValueString("url", ThumbnailURI);

            MyAvatarData Data = new MyAvatarData();
            Data.SetVal(UUID, ThumbnailURI, Name);
            AvatarList.Add(Data);
        }

        int PrevSelectedIndex = -1;

        for(int i = 0; i < AvatarList.Count; i++)
        {
            MyAvatarData data = AvatarList[i];
            if(data.GetUUID() == m_CurrentMyAvatar.GetUUID())
            {
                PrevSelectedIndex = i;
                break;
            }
        }

        AvatarList.Clear();

        m_ViewModel.SetCurrentAvatarItemIndexOnLoaded(PrevSelectedIndex);
    }

    public void SelectPresetAvatar(int ID)
    {
        if(ID != -1)
        {
            //_ApplySelfAvatarPreset(ID);
            //_SendPresetPlayerData(ID);
        }
        
        m_UseRefleshToken = false;

        m_CurrentMyAvatar.SetUUID("");
        m_CurrentMyAvatar.SetDownloadToken("");

        hsNetSetCustomState("MyAvatarToken", m_CurrentMyAvatar.GetUUID() + ":" + m_CurrentMyAvatar.GetDownloadToken()  + ":" +  m_CurrentMyAvatar.GetVCUID());
        hsNetSetCustomState("AvatarID", "%d" % ID);
    }

    public void SelectMyAvatar(int SelectedAvatarItemIndex)
    {
        if(!hsPlayerUseMyAvatar()) return;

        if(SelectedAvatarItemIndex >= 0 && SelectedAvatarItemIndex < m_AvatarList.Count())
        {
            string UUID = m_AvatarList[SelectedAvatarItemIndex].GetUUID();
            m_CurrentMyAvatar.SetUUID(UUID);
            api.avatars.fetchMyAvatarToken(_FetchTokenCallback, UUID, m_CurrentMyAvatar.GetVCUID());
        }

        hsNetSetCustomState("AvatarID", "%d" % (-1));
    }
    
    public void SelectMyAvatarFromUUID(string UUID)
    {
        if(!hsPlayerUseMyAvatar()) return;

        m_CurrentMyAvatar.SetUUID(UUID);
        api.avatars.fetchMyAvatarToken(_FetchTokenCallback, UUID, m_CurrentMyAvatar.GetVCUID());
    }

    void _FetchTokenCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json TokenJson = hsLoadJson(param);
        if(TokenJson === null) return;

        Json token = TokenJson.Find(EJSONDataType_Block, "token");
        if(token === null) return;

        string DownloadToken = "";
        token.FindValueString("token", DownloadToken);

        m_CurrentMyAvatar.SetDownloadToken(DownloadToken);
        api.avatars.fetchOthersAvatarUrl(_FetchURLCallback, DownloadToken, m_CurrentMyAvatar.GetVCUID(), "");
    }

    void _FetchTokenCallbackWithoutURL(string param)
    {
        if(param.IsEmpty()) return;

        Json TokenJson = hsLoadJson(param);
        if(TokenJson === null) return;

        Json token = TokenJson.Find(EJSONDataType_Block, "token");
        if(token === null) return;

        string DownloadToken = "";
        token.FindValueString("token", DownloadToken);

        m_CurrentMyAvatar.SetDownloadToken(DownloadToken);

        // ユーザーステートを更新
        _SendMyPlayerData();
    }

    void _FetchURLCallback(list<string> param)
    {
        if(param.Count < 2 || param[0].IsEmpty()) return;

        Json avatar = hsLoadJson(param[0]);
        if(avatar === null) return;
        
        Json version = avatar.Find(EJSONDataType_Block, "version");
        if(version === null) return;

        Json download_url = version.Find(EJSONDataType_Block, "download_url");
        if(download_url === null) return;

        Json asset_avatar_detail = version.Find(EJSONDataType_Block, "asset_avatar_detail");
        if(asset_avatar_detail === null) return;

        Json secure_download_urls = version.Find(EJSONDataType_Block, "secure_download_urls");
        if(secure_download_urls === null) return;

        string uuid = "";
        version.FindValueString("uuid", uuid);

        string target_age = "";
        asset_avatar_detail.FindValueString("target_age", target_age);

        int polygon_count = -1;
        asset_avatar_detail.FindValueInt("polygon_count", polygon_count);

        if(hel_setText(ETextParamType_CheckRestriction, (target_age + "," + string(polygon_count))) == 1)
        {
            string url = _GetCompressURL(secure_download_urls);
            if(url.IsEmpty())
            {
                return;
            }

            string MotionMap = "";
            string EmotionList = "";
            string ObjectList = "";

            hel_setText(ETextParamType_ClearMyAvatarCustomMotion, "");
            if(!MotionMap.IsEmpty() && !EmotionList.IsEmpty() && !ObjectList.IsEmpty())
            {
                hel_setText(ETextParamType_CreateMyAvatarCustomMotion, MotionMap);
                hel_setText(ETextParamType_CreateMyAvatarCustomEmotion, EmotionList);
                hel_setText(ETextParamType_CreateMyAvatarCustomObject, ObjectList);
            }

            _ApplyMyAvatar(url);
            _SendMyPlayerData();
        }
        else
        {
            _ApplyDummyAvatar(m_CurrentMyAvatar.GetUUID(), true);
            _SendDummyAvatarData(m_CurrentMyAvatar.GetUUID(), m_CurrentMyAvatar.GetDownloadToken());
        }

        // マイアバター用のネームプレートアイコンを描画
        m_ViewModel.DrawProfileNameplateIcon();
    }

    void _FetchOtherPlayerURLCallback(list<string> param)
    {
        if(param.Count < 2 || param[0].IsEmpty() || param[1].IsEmpty()) return;
        
        Json avatar = hsLoadJson(param[0]);
        if(avatar === null) return;

        Json version = avatar.Find(EJSONDataType_Block, "version");
        if(version === null) return;

        Json download_url = version.Find(EJSONDataType_Block, "download_url");
        if(download_url === null) return;

        Json asset_avatar_detail = version.Find(EJSONDataType_Block, "asset_avatar_detail");
        if(asset_avatar_detail === null) return;

        Json secure_download_urls = version.Find(EJSONDataType_Block, "secure_download_urls");
        if(secure_download_urls === null) return;

        string uuid = "";
        version.FindValueString("uuid", uuid);

        string target_age = "";
        asset_avatar_detail.FindValueString("target_age", target_age);

        int polygon_count = -1;
        asset_avatar_detail.FindValueInt("polygon_count", polygon_count);

        string peerid = param[1];

        if(hel_setText(ETextParamType_CheckRestriction, (target_age + "," + string(polygon_count))) == 1)
        {
            string url = _GetCompressURL(secure_download_urls);
            if(url.IsEmpty())
            {
                return;
            }

            string MotionMap = "";
            string EmotionList = "";
            string ObjectList = "";

            hel_skyway_receive_data("data", peerid, "clearmotion" + ":" + "");
            if(!MotionMap.IsEmpty() && !EmotionList.IsEmpty() && !ObjectList.IsEmpty())
            {
                hel_skyway_receive_data("data", peerid, "createmotion" + ":" + MotionMap);
                hel_skyway_receive_data("data", peerid, "createemotion" + ":" + EmotionList);
                hel_skyway_receive_data("data", peerid, "createobjectlist" + ":" + ObjectList);
            }

            hel_skyway_receive_data("data", peerid, "myavatar" + ":" + uuid + ":" + url);
        }
        else
        {
            _ReceiveDummyAvatar(peerid, uuid);
        }
    }

    string _GetCompressURL(Json secure_download_urls)
    {
        string hrm_etc2;
        secure_download_urls.FindValueString("hrm_etc2", hrm_etc2);

        string hrm_astc;
        secure_download_urls.FindValueString("hrm_astc", hrm_astc);

        string hrm_png;
        secure_download_urls.FindValueString("hrm_png", hrm_png);

        string result = "";
        list<string> URLList = new list<string>();
        URLList.Add(hrm_etc2);
        URLList.Add(hrm_astc);
        URLList.Add(hrm_png);

        for(int i = 0; i < URLList.Count; i++)
        {
            if(!m_TextureCompressSupporetedList[i])
            {
                continue;
            }

            string URL = URLList[i];
            if(!URL.IsEmpty())
            {
                result = URL;
                break;
            }
        }

        return result;
    }

    void _ApplyMyAvatar(string url)
    {
        hel_setText(ETextParamType_ReplaceMyAvatarCustom, m_CurrentMyAvatar.GetUUID() + "," + url + "," + "1");

        m_UseRefleshToken = true;
        m_TokenRefleshedTime = hsSystemGetTime();
    }

    void _SendMyPlayerData()
    {
        hsNetSetCustomState("MyAvatarToken", m_CurrentMyAvatar.GetUUID() + ":" + m_CurrentMyAvatar.GetDownloadToken() + ":" +  m_CurrentMyAvatar.GetVCUID());
    }

    // タブを非アクティブにした時に一時的にダミーアバターに変更する
    public void ApplyTempDummyAvatar()
    {
        // UUIDはランダムな数値、DownloadTokenは空文字とする
        string uuid = "dummyavatar_" + "%d" % hsMathRandom(999999);
        string token;

        // ダミーアバターを反映し通知する
        
        // 自身のマイアバターは距離カットによるロード・アンロードの対象外なので置き換え処理を行わない
        // _ApplyDummyAvatar(uuid, false);

        // 他のユーザーにダミーアバターを使用する旨を通知する
        _SendDummyAvatarData(uuid, token);

        m_IsTempDummyAvatar = true;
    }

    // 一時的なダミーアバターから元のマイアバターに戻す
    public void RemoveTempDummyAvatar()
    {
        if(m_IsTempDummyAvatar)
        {
            SelectMyAvatarFromUUID(m_CurrentMyAvatar.GetUUID());
        }

        m_IsTempDummyAvatar = false;
    }

    // 自身のアバターをダミーアバターにする
    void _ApplyDummyAvatar(string uuid, bool SetCookie)
    {
        hel_setText(ETextParamType_ReplaceFilteredAvatar, uuid + "," + ((SetCookie)? "1" : "0") );
        m_UseRefleshToken = false;
    }

    void _SendDummyAvatarData(string uuid, string token)
    {
        hel_skyway_send_data("filteredavatar:" + uuid);
        
        // ダミーアバターでもステートの更新は必要
        hsNetSetCustomState("MyAvatarToken", uuid + ":" + token + ":" +  m_CurrentMyAvatar.GetVCUID());
    }

    // 他のユーザーのアバターをダミーアバターにする
    void _ReceiveDummyAvatar(string peerid, string uuid)
    {
        hel_skyway_receive_data("data", peerid, "filteredavatar" + ":" + uuid);
    }

    void _ApplySelfAvatarPreset(int avatarId)
    {
        hel_setText(ETextParamType_ReplaceMyAvatar, string(avatarId));

        m_CurrentMyAvatar.SetUUID("");
        m_CurrentMyAvatar.SetDownloadToken("");
    }

    // 自分以外のプレイヤーのマイアバターをローカルで全てダミーアバターに変更する
    // トークン更新のタイミングでマイアバターに復帰する想定
    public void ApplyTempDummyAvatarToAllMyAvatar()
    {
        for(int i = 0; i < m_PosChPlayerIDList.Count; i++)
        {
            string PlayerID = m_PosChPlayerIDList[i];

            Player player = hsPlayerGetByID(PlayerID);
            if(player !== null)
            {
                int AvatarID = player.GetCustomState("AvatarID").ToInt();
                
                // マイアバターなのでローカル上でダミーアバターに差し替える
                if(AvatarID == -1)
                {
                    // ダミーアバター用のUUID
                    string uuid = "dummyavatar_" + "%d" % hsMathRandom(999999);   

                    _ReceiveDummyAvatar(PlayerID, uuid);
                }
            }
        }
    }

    void _SendPresetPlayerData(int avatarId)
    {
    }
    
    void _SetDataFromCookie()
    {
        string VCUID = hel_get_vcuid();
        m_CurrentMyAvatar.SetVCUID(VCUID);

        string UUID = hel_get_cookie_onEmptyStr("MyAvatarUUID");

        if(!UUID.IsEmpty() && hel_skyway_get_avatar() == -1) 
        {
            m_CurrentMyAvatar.SetUUID(UUID);
        }

        int ID = hel_skyway_get_avatar();
        hsNetSetCustomState("AvatarID", "%d" % ID);
    }

    public void UpdatePager(int val)
    {
        int PagerIndex = m_PagerIndex;

        PagerIndex += val;

        if(PagerIndex < 0) 
        {
            PagerIndex = 0;
            
            return;
        }
        else if(PagerIndex >= m_MaxPege)
        {
            PagerIndex = (m_MaxPege - 1);

            return;
        }

        FetchMyAvatarDataList(PagerIndex);
    }

    // ネットワーク同期周り ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public void AddPlayerID(string ID)
    {
        // 既に追加されているのかチェックする
        for(int i = 0; i < m_PosChPlayerIDList.Count; i++)
        {
            if(m_PosChPlayerIDList[i] == ID)
            {
                return;
            }
        }

        m_PosChPlayerIDList.Add(ID);
    }

    public void RemovePlayerID(string ID)
    {
        for(int i = 0; i < m_PosChPlayerIDList.Count; i++)
        {
            if(m_PosChPlayerIDList[i] == ID)
            {
                m_PosChPlayerIDList.RemoveAt(i);

                break;
            }
        }
    }

    public void OnReceiveCustomState(string id, string type, string data)
    {
        if(type == "MyAvatarToken")
        {
            list<string> DataList = new list<string>();
            string TextData = data;

            while(true)
            {
                int SeparatePos = TextData.IndexOf(":");
                if(SeparatePos == -1)
                {
                    DataList.Add(TextData);
                    break;
                }

                string OutText = TextData.SubString(0, SeparatePos);
                DataList.Add(OutText);
                TextData = TextData.SubString(SeparatePos + 1, TextData.Length() - OutText.Length());
            }        

            if(DataList.Count() == 3)
            {
                string myavatar_uuid = DataList[0];
                string downloadToken = DataList[1];
                string vcuid = DataList[2];

                if(!myavatar_uuid.IsEmpty() && !downloadToken.IsEmpty())
                {
                    _ReceiveMyavatarToken(id, myavatar_uuid, downloadToken, vcuid);
                }
            }
        }
    }

    void _ReceiveMyavatarToken(string peerid, string myavatar_uuid, string downloadToken, string vcuid)
    {
        if(downloadToken.IsEmpty())
        {
            // Tokenが空の時は強制的にダミーアバターにする
            _ReceiveDummyAvatar(peerid, myavatar_uuid);
        }
        else
        {
            api.avatars.fetchOthersAvatarUrl(_FetchOtherPlayerURLCallback, downloadToken, vcuid, peerid);
        }
    }
}