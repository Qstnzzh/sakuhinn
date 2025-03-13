// COMMUNITY_FETCH_USER_TYPE
const string COMMUNITY_FETCH_USER_TYPE_FOLLOWING = "COMMUNITY_FETCH_USER_TYPE_FOLLOWING";
const string COMMUNITY_FETCH_USER_TYPE_FOLLOWERS = "COMMUNITY_FETCH_USER_TYPE_FOLLOWERS";

// COMMUNITY_FOLLOW_TYPE
const string COMMUNITY_FOLLOW_TYPE_ALL = "COMMUNITY_FOLLOW_TYPE_ALL";
const string COMMUNITY_FOLLOW_TYPE_MUTUAL = "COMMUNITY_FOLLOW_TYPE_MUTUAL";

component CommunityMenuViewModel
{
    CommunityMenuModel m_Model;
    CommunityMenuView m_View;

    string m_UserType;
    string m_FollowType;

    bool m_IsOpened;

    public CommunityMenuViewModel()
    {
        m_Model = system.Layer_GetComponentByName<CommunityMenuModel>("mainmenu_community_base");
        m_View = new CommunityMenuView();

        m_UserType = COMMUNITY_FETCH_USER_TYPE_FOLLOWING;
        m_FollowType = COMMUNITY_FOLLOW_TYPE_ALL;

        m_IsOpened = false;
    }

    public void FetchUserList(string keyword)
    {
        // ウィンドウを閉じている場合は処理を実行しない
        if(!m_IsOpened) return;

        Player SelfPlayer = hsPlayerGet();
        string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
        string SelfUserType = SelfPlayer.GetCustomState("UserType");

        m_View.CloseLoginWindow();

        // ゲストユーザーはコミュニティ機能を使用できない
        if(SelfUserCode.IsEmpty() || SelfUserType != "login") 
        {
            m_View.OpenLoginWindow();
            m_View.ShowUserSearchInputField(false);

            return;
        }
        else
        {
            m_View.ShowUserSearchInputField(true);
        }

        m_Model.FetchUserList(m_UserType, m_FollowType, 0, keyword);
    }

    public void OpenCommunity()
    {
        if(m_Model.IsFetchNow()) return;

        m_UserType = COMMUNITY_FETCH_USER_TYPE_FOLLOWING;
        m_FollowType = COMMUNITY_FOLLOW_TYPE_ALL;
        m_IsOpened = true;

        m_View.ChangeUserType(m_UserType);
        m_View.ChangeFollowType(m_FollowType);
        m_View.UpdateCommunityPageText(0);
        m_View.ShowUserSearchInputField(true);
        
        FetchUserList("");
    }

    public void CloseCommunity()
    {
        m_UserType = COMMUNITY_FETCH_USER_TYPE_FOLLOWING;
        m_FollowType = COMMUNITY_FOLLOW_TYPE_ALL;
        m_IsOpened = false;

        m_View.Close();
        m_View.CloseLoginWindow();
        m_View.ChangeUserType(m_UserType);
        m_View.ChangeFollowType(m_FollowType);
        m_View.UpdateCommunityPageText(0);
        m_View.ShowUserSearchInputField(false);

        m_Model.Close();
    }

    public void OnClickedFollowingFollowerTab(string param)
    {
        if(m_Model.IsFetchNow()) return;

        bool IsFollowing = (param != "false");

        m_UserType = (IsFollowing)? COMMUNITY_FETCH_USER_TYPE_FOLLOWING : COMMUNITY_FETCH_USER_TYPE_FOLLOWERS;
        m_FollowType = COMMUNITY_FOLLOW_TYPE_ALL; // 初期化

        m_View.ChangeUserType(m_UserType);
        m_View.ChangeFollowType(m_FollowType);
        m_View.UpdateCommunityPageText(0);
        m_View.ShowUserSearchInputField(true);

        FetchUserList("");
    }

    public void OnClickedAllMutualTab(string param)
    {
        if(m_Model.IsFetchNow()) return;

        bool IsAll = (param != "false");

        m_FollowType = (IsAll)? COMMUNITY_FOLLOW_TYPE_ALL : COMMUNITY_FOLLOW_TYPE_MUTUAL;

        m_View.ChangeFollowType(m_FollowType);
        m_View.UpdateCommunityPageText(0);
        m_View.ShowUserSearchInputField(true);
        
        FetchUserList("");
    }

    public void OnClickedUserSearchButton()
    {
        if(m_Model.IsFetchNow()) return;

        string keyword = m_View.GetUserSortKeyword();
        FetchUserList(keyword);

        m_View.UpdateCommunityPageText(0);
        m_View.ShowUserSearchInputField(true);
    }

    public void OnClickedPagerBack()
    {
        m_Model.UpdatePager(-1);
        m_View.UpdateCommunityPageText(m_Model.GetPagerIndex());
    }

    public void OnClickedPagerNext()
    {
        m_Model.UpdatePager(1);
        m_View.UpdateCommunityPageText(m_Model.GetPagerIndex());
    }

    public void DrawUserList(list<CommunityMenuData> UserList, int MaxElemCount)
    {
        // ウィンドウを閉じている場合は処理を実行しない
        if(!m_IsOpened) return;

        m_View.DrawUserList(UserList, MaxElemCount);
    }

    public void OnClickedUserPlate(string param)
    {
        int Index = param.ToInt();

        m_Model.FetchUserProfile(Index);
        m_View.ShowUserSearchInputField(false);
    }

    public void OnClickedCloseUserPlate()
    {
        m_View.ShowUserSearchInputField(true);
    }

    public void ClickSignup(string param)
    {
        api.profiles.openMyVketUrl("/mypage/profile");
    }

    public void ClickLogin(string param)
    {
        api.auths.login();
    }
}