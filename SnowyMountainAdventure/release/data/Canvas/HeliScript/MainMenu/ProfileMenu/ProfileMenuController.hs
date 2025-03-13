component ProfileMenuController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "config_profile")
        {
            LayerBundle layer = hsLayerGet("config_profile");
            if(layer === null) return;

            if(ButtonName == "config_button_icon_edit")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickIconChangeButton", "");
            }
            else if(ButtonName == "config_button_nickname_edit")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickNicknameChangeButton", "");
            }
            else if(ButtonName == "config_button_intro_edit")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickIntroductionChangeButton", "");
            }
            else if(ButtonName == "mypage_btn_myvket")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickMyVketBtn", "");
            }
            if(ButtonName == "mypage_vketaccount_login_button")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickLogin", "");
            }
            else if(ButtonName == "mypage_vketaccount_signup_button")
            {
                LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("MyAvatarViewModel", "ClickSignup", "");
                }
            }
        }
        else if(LayerName == "profile_nickname_edit_dialog")
        {
            LayerBundle layer = hsLayerGet("config_profile");
            if(layer === null) return;

            if(ButtonName == "common_btn_close" || ButtonName == "common_btn_cancel")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickCloseNicknameEditDialog", "");
            }
            else if(ButtonName == "mypage_btn_confirm")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickNicknameUpdateButton", "");
            }
        }
        else if(LayerName == "profile_intro_edit_dialog")
        {
            LayerBundle layer = hsLayerGet("config_profile");
            if(layer === null) return;
            
            if(ButtonName == "common_btn_close" || ButtonName == "common_btn_cancel")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickCloseIntroEditDialog", "");
            }
            else if(ButtonName == "mypage_btn_confirm")
            {
                layer.CallComponentMethod("ProfileMenuViewModel", "ClickIntroductionUpdateButton", "");
            }
        }
    }
}