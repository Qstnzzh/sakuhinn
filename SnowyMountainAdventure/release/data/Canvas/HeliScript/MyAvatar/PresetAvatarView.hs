component PresetAvatarView
{
    public PresetAvatarView()
    {
        int PresetAvatarCount = hsPlayerGetPresetAvatarCount();

        _CreatePresetAvatarList(false, PresetAvatarCount, 5, 130, 130);
        _CreatePresetAvatarList(true, PresetAvatarCount, 4, 300, 300);
    }

    void _CreatePresetAvatarList(bool IsPortrait, int PresetAvatarCount, int MaxColCount, int XOffset, int YOffset)
    {
        string layerName = "config_avatar_List";

        for(int AvatarID = 0; AvatarID < PresetAvatarCount; AvatarID++)
        {
            int col = AvatarID / MaxColCount;
            int row = AvatarID - col * MaxColCount;

            string AvatarList = "AvatarList%d" %AvatarID;
            string PresetAvatarSelectmark = "PresetAvatarSelectmark%d" %AvatarID;

            string ThumbnailURI = hsPlayerGetPresetAvatarThumbnailURL(AvatarID);
            if(ThumbnailURI.IsEmpty()) ThumbnailURI = "gui2023/noimage.png";

            if(IsPortrait)
            {
                hsAddGUIButton(
                    layerName, IsPortrait,
                    AvatarList, "", "", "", true, 3, -450 + row * XOffset, -200 + col * YOffset, 280, 280, 0.5, 0.5, "CM", true, 0.0,
                    ThumbnailURI, "", "", "", 280, 280
                );

                hsAddGUIImage(
                    layerName, IsPortrait,
                    PresetAvatarSelectmark, "", "", "", true, 8, -330 + row * XOffset, -320 + col * YOffset, 100, 100, 0.5, 0.5, "CM", true, 0.0,
                    "gui2023/menu/mypage/mypage_select_icon.png"
                );
            }
            else
            {
                hsAddGUIButton(
                    layerName, IsPortrait,
                    AvatarList, "", "", "", true, 3, -160 + row * XOffset, -75 + col * YOffset, 120, 120, 0.5, 0.5, "CM", true, 0.0,
                    ThumbnailURI, "", "", "", 120, 120
                );

                hsAddGUIImage(
                    layerName, IsPortrait,
                    PresetAvatarSelectmark, "", "", "", true, 8, -110 + row * XOffset, -125 + col * YOffset, 32, 32, 0.5, 0.5, "CM", true, 0.0,
                    "gui2023/menu/mypage/mypage_select_icon.png"
                );
            }

            // GUIActionを追加
            system.Canvas_AddGUIAction(layerName, AvatarList, "false,Index,Index,SelectAvatarTypeIndex,%d," % AvatarID);

            for(int n = 0; n < PresetAvatarCount; n++)
            {
                system.Canvas_AddGUIAction(layerName, AvatarList, "false,String,String,ToggleDefault,Toggle_PresetAvatarSelectmark%d," % n);

                if(n == AvatarID)
                {
                    system.Canvas_AddGUIAction(layerName, AvatarList, "false,String,String,ToggleChange,Toggle_PresetAvatarSelectmark%d," % AvatarID);
                }
            }

            // Toggleを追加
            system.Canvas_AddGUIToggle(layerName, PresetAvatarSelectmark, "Toggle_PresetAvatarSelectmark%d" % AvatarID, false);
        }
    }
}