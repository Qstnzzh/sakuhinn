component MyAvatarController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "mainmenu_mypage_avatar_base")
        {
            LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
            if(layer === null) return;

            if(ButtonName == "mypage_btn_prestavatar_off")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickPresetAvatarTab", "");
            }
            else if(ButtonName == "mypage_btn_myavatar_off")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickMyAvatarTab", "");
            }
            else if(ButtonName == "mypage_btn_add_avatar")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickAvatarUpload", "");
            }
            else if(ButtonName == "config_myavatar_select" || ButtonName == "config_presetavatar_select")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ConfirmAvatarSelect", "");
            }
            else if(ButtonName == "page_back")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickPageBack", "");
            }
            else if(ButtonName == "page_next")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickPageNext", "");
            }
        }
        else if(LayerName == "config_myavatar_account")
        {
            LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
            if(layer === null) return;

            if(ButtonName == "config_vketaccount_login_button")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickLogin", "");
            }
            else if(ButtonName == "config_vketaccount_signup_button")
            {
                layer.CallComponentMethod("MyAvatarViewModel", "ClickSignup", "");
            }
        }
        else if(LayerName == "config_myavatar_List")
        {
            LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
            if(layer === null) return;

            if(ButtonName.IndexOf("MyAvatarButton") != -1)
            {
                string Index = ButtonName.SubString(("MyAvatarButton").Length(), 2);

                layer.CallComponentMethod("MyAvatarViewModel", "ClickGridListRow", Index);
            }
        }
    }
}