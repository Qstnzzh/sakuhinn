component CommunityMenuModel
{
    CommunityMenuViewModel m_ViewModel;

    string m_CurrentUserType;
    string m_CurrentFollowType;
    int m_PagerIndex;
    int m_MaxPege;
    int m_MaxElemCount;
    string m_CurrentKeyword;

    list<CommunityMenuData> m_UserList;

    bool m_IsFetchNow;

    public CommunityMenuModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<CommunityMenuViewModel>("mainmenu_community_base");

        m_PagerIndex = 0;
        m_MaxPege = 0;
        m_MaxElemCount = 0;

        m_UserList = new list<CommunityMenuData>();

        m_IsFetchNow = false;
    }

    public bool IsFetchNow()
    {
        return m_IsFetchNow;
    }

    public void Close()
    {
        _Relase();

        m_CurrentUserType = COMMUNITY_FETCH_USER_TYPE_FOLLOWING;
        m_CurrentFollowType = COMMUNITY_FOLLOW_TYPE_ALL;
        m_PagerIndex = 0;
        m_CurrentKeyword = "";

        m_IsFetchNow = false;
    }

    void _Relase()
    {
        m_UserList.Clear();
    }

    public void FetchUserList(string UserType, string FollowType, int PagerIndex, string keyword)
    {
        _Relase();

        Player SelfPlayer = hsPlayerGet();
        string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
        string SelfUserType = SelfPlayer.GetCustomState("UserType");

        m_MaxElemCount = (hsCanvasIsPortrait())? 10 : 12;

        m_CurrentUserType = UserType;
        m_CurrentFollowType = FollowType;
        m_PagerIndex = PagerIndex;
        int Offset = m_MaxElemCount * PagerIndex;
        m_CurrentKeyword = keyword;

        // FollowType
        if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_ALL)
        {
            // FetchUserType
            if(m_CurrentUserType == COMMUNITY_FETCH_USER_TYPE_FOLLOWING)
            {
                m_IsFetchNow = true;
                api.relationships.followings(_FetchUserListCallback, SelfUserCode, "%d" % m_MaxElemCount, "%d" % Offset, m_CurrentKeyword);
            }
            else
            if(m_CurrentUserType == COMMUNITY_FETCH_USER_TYPE_FOLLOWERS)
            {
                m_IsFetchNow = true;
                api.relationships.followers(_FetchUserListCallback, SelfUserCode, "%d" % m_MaxElemCount, "%d" % Offset, m_CurrentKeyword);
            }
        }
        else if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_MUTUAL)
        {
            m_IsFetchNow = true;
            api.relationships.mutualFollowings(_FetchMutualUserListCallback, "%d" % m_MaxElemCount, "%d" % Offset, m_CurrentKeyword);
        }
    }

    void _FetchUserListCallback(JsVal val)
    {
        _AnalyseUserList(val, false);
    }
    
    void _FetchMutualUserListCallback(JsVal val)
    {
        _AnalyseUserList(val, true);
    }

    void _AnalyseUserList(JsVal val, bool IsFetchMutual)
    {
        m_IsFetchNow = false;

        if(val === null) return;

        Json result = hsLoadJson(val.GetStr());
        if(result === null) return;

        int user_count;
        result.FindValueInt("user_count", user_count);

        Json users = result.Find(EJSONDataType_Array, "users");
        list<Json> users_array = users.GetArrayList();

        for(int i = 0; i < users_array.Count; i++)
        {
            Json user = users_array[i];

            string vket_id;
            user.FindValueString("vket_id", vket_id);

            string name;
            user.FindValueString("name", name);

            string circle_url;

            Json icon = user.Find(EJSONDataType_Block, "icon");
            if(icon !== null)
            {
                Json circle = icon.Find(EJSONDataType_Block, "circle");
                if(circle !== null)
                {
                    circle.FindValueString("url", circle_url);
                }
            }

            bool follow_status;
            user.FindValueBool("follow_status", follow_status);

            bool follower_status;
            user.FindValueBool("follower_status", follower_status);

            CommunityMenuData Data = new CommunityMenuData();
            Data.UserCode = vket_id;
            Data.UserName = name;
            Data.IconURL = circle_url;
            Data.IsMutual = ((follow_status && follower_status) || IsFetchMutual); // 相互フォローかどうか

            m_UserList.Add(Data);
        }

        m_MaxPege = (user_count + m_MaxElemCount - 1) / m_MaxElemCount;

        m_ViewModel.DrawUserList(m_UserList, m_MaxElemCount);
    }

    public void UpdatePager(int val)
    {
        m_PagerIndex += val;

        if(m_PagerIndex < 0) 
        {
            m_PagerIndex = 0;
            
            return;
        }
        else if(m_PagerIndex >= m_MaxPege)
        {
            m_PagerIndex = (m_MaxPege - 1);

            return;
        }

        if(m_CurrentUserType == COMMUNITY_FETCH_USER_TYPE_FOLLOWING)
        {
            if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_ALL)
            {
                FetchUserList(COMMUNITY_FETCH_USER_TYPE_FOLLOWING, COMMUNITY_FOLLOW_TYPE_ALL, m_PagerIndex, m_CurrentKeyword);
            }
            else if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_MUTUAL)
            {
                FetchUserList(COMMUNITY_FETCH_USER_TYPE_FOLLOWING, COMMUNITY_FOLLOW_TYPE_MUTUAL, m_PagerIndex, m_CurrentKeyword);
            }
        }
        else if(m_CurrentUserType == COMMUNITY_FETCH_USER_TYPE_FOLLOWERS)
        {
            if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_ALL)
            {
                FetchUserList(COMMUNITY_FETCH_USER_TYPE_FOLLOWERS, COMMUNITY_FOLLOW_TYPE_ALL, m_PagerIndex, m_CurrentKeyword);
            }
            else if(m_CurrentFollowType == COMMUNITY_FOLLOW_TYPE_MUTUAL)
            {
                FetchUserList(COMMUNITY_FETCH_USER_TYPE_FOLLOWERS, COMMUNITY_FOLLOW_TYPE_MUTUAL, m_PagerIndex, m_CurrentKeyword);
            }
        }
    }

    public int GetPagerIndex()
    {
        return m_PagerIndex;
    }

    public void FetchUserProfile(int Index)
    {
        if(Index < 0 || Index >= m_UserList.Count) return;

        Player SelfPlayer = hsPlayerGet();
        string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
        string SelfUserType = SelfPlayer.GetCustomState("UserType");

        CommunityMenuData user = m_UserList[Index];
        string UserCode = user.UserCode;
        string UserType = "login"; // コミュニティ機能のユーザーリストは絶対にログインユーザーである

        LayerBundle layerProfile = hsLayerGet("other_profile");
        if(layerProfile !== null)
        {
            ProfileModel profileModel = system.Layer_GetComponentByName<ProfileModel>("other_profile");
            profileModel.FindUserDataAndShowProfileFromUserID(UserCode, UserType, (SelfUserType == "login" && SelfUserCode != UserCode));
        }
    }
}