component MainMenuController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "mainmenu_side_home" || LayerName == "mainmenu_home")
        {
            if(ButtonName == "menu_tab_avatar_off" || ButtonName == "menu_tab_event_off" || ButtonName == "menu_tab_world_off" || ButtonName == "menu_tab_community_off" || ButtonName == "menu_tab_setting_off"
                || ButtonName == "menu_btn_mypage" || ButtonName == "common_btn_close" || ButtonName == "popup_background" || ButtonName == "menu_btn_myroom")
            {
                // ProfileMenu
                if(ButtonName == "menu_btn_mypage")
                {
                    LayerBundle layer = hsLayerGet("config_profile");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ProfileMenuViewModel", "OpenProfile", "");
                    }
                }
                else if(ButtonName == "menu_btn_myroom")
                {
                    LayerBundle layer = hsLayerGet("config_profile");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ProfileMenuViewModel", "OpenMyHome", "");
                    }

                    return;
                }
                else
                {
                    LayerBundle layer = hsLayerGet("config_profile");
                    if(layer !== null) 
                    {
                        layer.CallComponentMethod("ProfileMenuViewModel", "CloseProfile", "");
                    }
                }

                // Avatar
                if(ButtonName == "menu_tab_avatar_off")
                {
                    LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("MyAvatarViewModel", "ClickMyAvatarTab", "");
                    }
                }
                else
                {
                    LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("MyAvatarViewModel", "Close", "");
                    }
                }

                // WorldMenu
                if(ButtonName == "menu_tab_world_off")
                {
                    LayerBundle layer = hsLayerGet("mainmenu_world_tab");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOpenOfficialTab", "");
                    }
                }
                else
                {
                    LayerBundle layer = hsLayerGet("mainmenu_world_tab");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseDescriptDialog", "");
                        layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseWorldMenu", "");
                    }
                }

                // Community
                if(ButtonName == "menu_tab_community_off")
                {
                    LayerBundle layer = hsLayerGet("mainmenu_community_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("CommunityMenuViewModel", "OpenCommunity", "");
                    }
                }
                else
                {
                    LayerBundle layer = hsLayerGet("mainmenu_community_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("CommunityMenuViewModel", "CloseCommunity", "");
                    }
                }

                // VCC
                {
                    LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("VCCViewModel", "ClearAllVCCLayer", "");
                    }
                }

                // Generic Window
                if(ButtonName == "common_btn_close")
                {
                    LayerBundle layer = hsLayerGet("genericwindow_common_middle");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("GenericWindowViewModel", "OpenCurrentWindow", "");
                    }
                }
            }
        }
        else if(LayerName == "mainmenu_mypage_base")
        {
            if(ButtonName == "mypage_tab_profile_off" || ButtonName == "mypage_tab_avatar_off" || ButtonName == "mypage_tab_myroom_off")
            {
                // Profile
                if(ButtonName == "mypage_tab_profile_off")
                {
                    LayerBundle layer = hsLayerGet("config_profile");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ProfileMenuViewModel", "OpenProfile", "");
                    }
                }
                else
                {
                    LayerBundle layer = hsLayerGet("config_profile");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ProfileMenuViewModel", "CloseProfile", "");
                    }
                }

                // MyAvatar
                if(ButtonName == "mypage_tab_avatar_off")
                {
                    LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("MyAvatarViewModel", "ClickMyAvatarTab", "");
                    }
                }
                else
                {
                    LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("MyAvatarViewModel", "Close", "");
                    }
                }

                // MyPage
            }
        }
        else if(LayerName == "mainmenu_start_dialog")
        {
            if(ButtonName == "start_btn_return")
            {
                LayerBundle layer = hsLayerGet("genericwindow_common_middle");
                if(layer === null) return;

                layer.CallComponentMethod("GenericWindowViewModel", "OpenCurrentWindow", "");
            }

            {
                LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("MyAvatarViewModel", "Close", "");
                }
            }
        }
    }
}