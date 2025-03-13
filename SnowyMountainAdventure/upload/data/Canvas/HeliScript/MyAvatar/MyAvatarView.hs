string ToggleConfigMyAvatarUploadButton = "Toggle_MyAvatarUploadButton";
string ToggleConfigMyAvatarLoginButton = "Toggle_MyAvatarLoginButton";
string ToggleConstantMyAvatarUploadButton = "Toggle_Constant_MyAvatarUploadButton";

class MyAvatarView
{
    public MyAvatarView()
    {
    }

    public void DrawPresetNameplateIcon(int id)
    {
        if(id >= 0) 
        {
            hel_setText(ETextParamType_ReplaceMyAvatarIcon, "%d" % id);
        }
    }

    public void setHighlightAvatarMy(bool highlightFlg)
    {
        string lang=(hel_isLangJa())? "" : "_en";

        if(highlightFlg)
        {
            hsCanvasSetGUIImage("config_myavatar", "config_my_avatar_button", "gui/config/myavatar/config_avatar_my_on"+lang+".png");
        }
        else
        {
            hsCanvasSetGUIImage("config_myavatar","config_my_avatar_button","gui/config/myavatar/config_avatar_my_off"+lang+".png");
        }
    }
    
    public void setHighlightAvatarPreset(bool highlightFlg)
    {
        string lang=(hel_isLangJa())? "" : "_en";

        if (highlightFlg)
        {
            hsCanvasSetGUIImage("config_myavatar","config_preset_avatar_button","gui/config/myavatar/config_avatar_preset_on"+lang+".png");
        } 
        else 
        {
            hsCanvasSetGUIImage("config_myavatar","config_preset_avatar_button","gui/config/myavatar/config_avatar_preset_off"+lang+".png");
        }
    }

    public void showPresetAvatarSelectmark(int AvatarID)
    {
        int PresetAvatarCount = hsPlayerGetPresetAvatarCount();

        for(int i = 0; i < PresetAvatarCount; i++)
        {
            hsCanvasResetToggleDefault("Toggle_PresetAvatarSelectmark%d" % i);
        }

        if(AvatarID != -1)
        {
            hsCanvasToggleChange("Toggle_PresetAvatarSelectmark%d" % AvatarID);
        }
    }

    public void showMyAvatarSelectmark(int selectedIndex)
    {
        if(selectedIndex == -1)
        {
            hsCanvasResetToggleDefault("Toggle_Show_MyAvatarSelectmark");
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_Show_MyAvatarSelectmark");
            hsCanvasToggleChange("Toggle_Show_MyAvatarSelectmark");

            _SetMyAvatarSelectmarkPos(selectedIndex, false, 5, 2, 130, 140, -110, -125);
            _SetMyAvatarSelectmarkPos(selectedIndex, true, 4, 3, 300, 320, -330, -320);
        }
    }

    void _SetMyAvatarSelectmarkPos(int selectedIndex, bool IsPortrait, int MaxRowCount, int MaxColCount, int XOffset, int YOffset, int PosX, int PosY)
    {
        int Col = selectedIndex / MaxRowCount;
        int Row = selectedIndex - Col * MaxRowCount;

        hsCanvasSetGUIPos("mainmenu_mypage_avatar_base", IsPortrait, "MyAvatarSelectmark", PosX + Row * XOffset, PosY + Col * YOffset);
    }

    public void drawLoginButtonOnMyAvatar()
    {
        hsCanvasSetLayerShow("config_myavatar_List", false);
        hsCanvasResetToggleDefault("Toggle_Show_MyAvatarSelectmark");
        hsCanvasSetLayerShow("config_myavatar_account", true);

        hsCanvasResetToggleDefault(ToggleConfigMyAvatarUploadButton);
        hsCanvasResetToggleDefault(ToggleConfigMyAvatarLoginButton);
        hsCanvasToggleChange(ToggleConfigMyAvatarLoginButton);
        hsCanvasResetToggleDefault(ToggleConstantMyAvatarUploadButton);
        hsCanvasToggleChange(ToggleConstantMyAvatarUploadButton);
    }

    public void drawMyAvatarUploadButton()
    {
        hsCanvasSetLayerShow("config_myavatar_List", false);
        hsCanvasResetToggleDefault("Toggle_Show_MyAvatarSelectmark");
        hsCanvasSetLayerShow("config_myavatar_account",true);

        hsCanvasResetToggleDefault(ToggleConfigMyAvatarUploadButton);
        hsCanvasResetToggleDefault(ToggleConfigMyAvatarLoginButton);
        hsCanvasToggleChange(ToggleConfigMyAvatarUploadButton);
        hsCanvasResetToggleDefault(ToggleConstantMyAvatarUploadButton);
        hsCanvasToggleChange(ToggleConstantMyAvatarUploadButton);
    }

    public void closeAvatarBase()
    {
        hsCanvasSetLayerShow("mainmenu_mypage_avatar_base",false);
    }

    public void closeConfigMyAvatar()
    {
        hsCanvasSetLayerShow("config_myavatar_List", false);
        hsCanvasResetToggleDefault("Toggle_Show_MyAvatarSelectmark");
        
        hsCanvasSetGUIText("mainmenu_mypage_avatar_base", "page_text", "%d" % 1);

        hsCanvasSetLayerShow("config_myavatar_account",false);
        hsCanvasSetLayerShow("config_myavatar_user",false);
    }

    public void closeConfigPresetAvatar()
    {
        hsCanvasSetLayerShow("config_avatar_List",false);
    }

    public void drawConfigAvatarTileList(list<MyAvatarData> MyAvatarList, int PagerIndex)
    {
        hsCanvasSetGUIShow("config_avatar", "config_avatar_selectmark", false);
        hsCanvasSetGUIShow("config_myavatar", "config_vketaccount_login_button", false);
        hsCanvasSetGUIShow("config_myavatar", "config_my_avatar_upload_button", false);

        hsCanvasSetGUIText("mainmenu_mypage_avatar_base", "page_text", "%d" % (PagerIndex + 1));

        hsCanvasResetToggleDefault(ToggleConfigMyAvatarUploadButton);
        hsCanvasResetToggleDefault(ToggleConfigMyAvatarLoginButton);
        hsCanvasResetToggleDefault(ToggleConstantMyAvatarUploadButton);
        hsCanvasToggleChange(ToggleConstantMyAvatarUploadButton);

        _ShowMyAvatarList(MyAvatarList);
    }

    void _ShowMyAvatarList(list<MyAvatarData> MyAvatarList)
    {
        hsCanvasSetLayerShow("config_myavatar_List", true);

        int MaxPageElemCount = (hsCanvasIsPortrait())? 12 : 10;

        string layerName = "config_myavatar_List";

        for(int i = 0; i < MaxPageElemCount; i++)
        {
            int avatarListIndex = i;
            string SharedName = "%d" % avatarListIndex;
            string MyAvatarButton = "MyAvatarButton" + SharedName;
            string MyAvatarName = "MyAvatarName" + SharedName;
            
            if(avatarListIndex < MyAvatarList.Count)
            {
                hsCanvasResetToggleDefault("Toggle_Show_MyAvatarButton_%d" %i);

                string thumbnailURL_Obj = MyAvatarList[avatarListIndex].GetThumbnailURI();
                if(!thumbnailURL_Obj.IsEmpty())
                {
                    if (thumbnailURL_Obj.IndexOf("http") != -1) {
                        string thumbnailURL = thumbnailURL_Obj.SubString(0, thumbnailURL_Obj.IndexOf("?"));
                        hsCanvasSetGUIImage(layerName, MyAvatarButton, thumbnailURL);
                    } 
                    else
                    {
                        hsCanvasSetGUIImage(layerName, MyAvatarButton, thumbnailURL_Obj);
                    }
                }
                else
                {
                    hsCanvasSetGUIImage(layerName, MyAvatarButton, "gui2023/noimage.png");
                }

                string avavar_name = MyAvatarList[avatarListIndex].GetName();
                if(!avavar_name.IsEmpty())
                {
                    hsCanvasSetGUIText(layerName, MyAvatarName, avavar_name);
                }
            }
            else
            {
                hsCanvasResetToggleDefault("Toggle_Show_MyAvatarButton_%d" %i);
                hsCanvasToggleChange("Toggle_Show_MyAvatarButton_%d" %i);
            }
        }
    }

    public void drawPresetAvatarTileList()
    {
        hsCanvasSetLayerShow("config_avatar_List",true);
    }
}