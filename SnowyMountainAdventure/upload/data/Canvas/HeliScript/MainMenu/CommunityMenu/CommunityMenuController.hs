component CommunityMenuController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "mainmenu_community_base")
        {
            LayerBundle layer = hsLayerGet("mainmenu_community_base");
            if(layer === null) return;

            if(ButtonName == "community_btn_following_off")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedFollowingFollowerTab", "true");
            }
            else if(ButtonName == "community_btn_followers_off")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedFollowingFollowerTab", "false");
            }
            else if(ButtonName == "community_btn_sort_all_off")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedAllMutualTab", "true");
            }
            else if(ButtonName == "community_btn_sort_mutual_off")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedAllMutualTab", "false");
            }
            else if(ButtonName == "community_search_btn")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedUserSearchButton", "");
            }
            else if(ButtonName == "community_page_back")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedPagerBack", "");
            }
            else if(ButtonName == "community_page_next")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedPagerNext", "");
            }
        }
        else if(LayerName == "mainmenu_community_user_list")
        {
            LayerBundle layer = hsLayerGet("mainmenu_community_base");
            if(layer === null) return;

            string Index;
            
            if(ButtonName.IndexOf("community_list_base") != -1)
            {
                if(ButtonName[ButtonName.Length() - 2] == '_')
                {
                    Index = ButtonName.SubString(ButtonName.Length() - 1, 1);
                }
                else
                {
                    Index = ButtonName.SubString(ButtonName.Length() - 2, 2);
                }

                layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedUserPlate", Index);
            }
        }
        else if(LayerName == "mainmenu_community_account")
        {
            LayerBundle layer = hsLayerGet("mainmenu_community_base");
            if(layer === null) return;

            if(ButtonName == "config_vketaccount_signup_button")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "ClickSignup", "");
            }
            else if(ButtonName == "config_vketaccount_login_button")
            {
                layer.CallComponentMethod("CommunityMenuViewModel", "ClickLogin", "");
            }
        }
    }
}