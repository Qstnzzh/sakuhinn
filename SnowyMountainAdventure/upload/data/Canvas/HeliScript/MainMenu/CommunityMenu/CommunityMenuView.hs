class CommunityMenuView
{
    string m_communitykeyword_HTMLElementID;
    string m_communitykeyword_text_HTMLElementID;

    public CommunityMenuView()
    {
        m_communitykeyword_HTMLElementID = "communitykeyword";
        m_communitykeyword_text_HTMLElementID = "communitykeyword-text";
        hel_set_HTMLElement_value(m_communitykeyword_text_HTMLElementID, "");

        // 数が多いので動的にToggleを付ける
        _InitGUI();
    }

    void _InitGUI()
    {
        for(int i = 0; i < 12; i++)
        {
            system.Canvas_AddGUIToggle("mainmenu_community_user_list", "community_list_base_%d" % i,   "Toggle_Community_User_%d" % i, false);
            system.Canvas_AddGUIToggle("mainmenu_community_user_list", "community_icon_%d" % i,        "Toggle_Community_User_%d" % i, false);
            system.Canvas_AddGUIToggle("mainmenu_community_user_list", "community_name_text_%d" % i,   "Toggle_Community_User_%d" % i, false);
            system.Canvas_AddGUIToggle("mainmenu_community_user_list", "community_id_text_%d" % i,     "Toggle_Community_User_%d" % i, false);
            system.Canvas_AddGUIToggle("mainmenu_community_user_list", "community_icon_mutual_%d" % i, "Toggle_Community_Mutual_%d" % i, false);   
        }
    }

    public void Close()
    {
        hsCanvasSetLayerShow("mainmenu_community_user_list", false);
    }

    public void ChangeUserType(string UserType)
    {
        hsCanvasResetToggleDefault("Toggle_Community_Following_Folower");

        if(UserType == COMMUNITY_FETCH_USER_TYPE_FOLLOWERS)
        {
            hsCanvasToggleChange("Toggle_Community_Following_Folower");
        }
    }
    
    public void ChangeFollowType(string FollowType)
    {
        hsCanvasResetToggleDefault("Toggle_Community_All_Mutual");

        if(FollowType == COMMUNITY_FOLLOW_TYPE_MUTUAL)
        {
            hsCanvasToggleChange("Toggle_Community_All_Mutual");
        }
    }

    public void UpdateCommunityPageText(int PageIndex)
    {
        int PageNumber = PageIndex + 1; // インデックスからナンバーに直す
        hsCanvasSetGUIText("mainmenu_community_base", "community_page_text", "%d" %(PageNumber));
    }

    public void DrawUserList(list<CommunityMenuData> UserList, int MaxElemCount)
    {
        // トグルをリセット
        for(int i = 0; i < 12; i++){ 
            hsCanvasResetToggleDefault("Toggle_Community_User_%d" % i); 
            hsCanvasResetToggleDefault("Toggle_Community_Mutual_%d" % i); 
        }

        //
        hsCanvasSetLayerShow("mainmenu_community_user_list", true);

        for(int i = 0; i < MaxElemCount; i++)
        {
            if(i < UserList.Count)
            {
                hsCanvasToggleChange("Toggle_Community_User_%d" % i);

                CommunityMenuData user = UserList[i];

                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_list_base_%d" % i, true);

                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_icon_%d" % i, true);
                hsCanvasSetGUIImage("mainmenu_community_user_list", "community_icon_%d" % i, ((!user.IconURL.IsEmpty())? user.IconURL : "gui2023/chat/chat_avatar_icon.png") );

                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_name_text_%d" % i, true);
                hsCanvasSetGUIText("mainmenu_community_user_list", "community_name_text_%d" % i, user.UserName);

                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_id_text_%d" % i, true);
                hsCanvasSetGUIText("mainmenu_community_user_list", "community_id_text_%d" % i, user.UserCode);

                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_icon_mutual_%d" % i, user.IsMutual);
                if(user.IsMutual)
                {
                    hsCanvasToggleChange("Toggle_Community_Mutual_%d" % i);
                }
            }
            else
            {
                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_list_base_%d" % i, false);
                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_icon_%d" % i, false);
                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_name_text_%d" % i, false);
                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_id_text_%d" % i, false);
                hsCanvasSetGUIShow("mainmenu_community_user_list", "community_icon_mutual_%d" % i, false);
            }
        }
    }

    public string GetUserSortKeyword()
    {
        string keyword = hel_get_HTMLElement_value(m_communitykeyword_text_HTMLElementID);

        return keyword;
    }

    public void ShowUserSearchInputField(bool show)
    {
        hel_set_HTMLElement_value(m_communitykeyword_text_HTMLElementID, "");

        hel_set_HTMLElement_visibility(m_communitykeyword_HTMLElementID, show);
        hel_set_HTMLElement_visibility(m_communitykeyword_text_HTMLElementID, show);
        
        if(show)
        {
            ResizeCallback();
        }
    }

    public void ResizeCallback()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "mainmenu_community_base" + "," + "community_search_text" + ","
                + m_communitykeyword_HTMLElementID + "," + m_communitykeyword_text_HTMLElementID);
    }

    public void OpenLoginWindow()
    {
        hsCanvasResetToggleDefault("Toggle_Community_LoginButton");
        hsCanvasToggleChange("Toggle_Community_LoginButton");

        hsCanvasSetLayerShow("mainmenu_community_account", true);
    }

    public void CloseLoginWindow()
    {
        hsCanvasResetToggleDefault("Toggle_Community_LoginButton");
        
        hsCanvasSetLayerShow("mainmenu_community_account", false);
    }
}