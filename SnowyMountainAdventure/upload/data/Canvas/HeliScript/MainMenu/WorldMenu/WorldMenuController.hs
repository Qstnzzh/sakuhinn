component WorldMenuController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "mainmenu_world_tab")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_tab_official_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOpenOfficialTab", "");
            }
            else if(ButtonName == "world_tab_user_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOpenGeneralTab", "");
            }
            else if(ButtonName == "world_tab_room_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOpenRoomTab", "");
            }
        }
        else if(LayerName == "mainmenu_world_list_official")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_thumbnail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "0");
            }
            else if(ButtonName == "world_thumbnail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "1");
            }
            else if(ButtonName == "world_thumbnail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "2");
            }
            else if(ButtonName == "world_thumbnail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "3");
            }
            else if(ButtonName == "world_thumbnail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "4");
            }
            else if(ButtonName == "world_thumbnail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "5");
            }
            else if(ButtonName == "world_btn_detail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "0");
            }
            else if(ButtonName == "world_btn_detail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "1");
            }
            else if(ButtonName == "world_btn_detail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "2");
            }
            else if(ButtonName == "world_btn_detail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "3");
            }
            else if(ButtonName == "world_btn_detail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "4");
            }
            else if(ButtonName == "world_btn_detail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "5");
            }
        }
        else if(LayerName == "mainmenu_world_list_general")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_thumbnail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "0");
            }
            else if(ButtonName == "world_thumbnail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "1");
            }
            else if(ButtonName == "world_thumbnail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "2");
            }
            else if(ButtonName == "world_thumbnail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "3");
            }
            else if(ButtonName == "world_thumbnail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "4");
            }
            else if(ButtonName == "world_thumbnail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedOfficialMoveDialog", "5");
            }
            else if(ButtonName == "world_btn_detail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "0");
            }
            else if(ButtonName == "world_btn_detail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "1");
            }
            else if(ButtonName == "world_btn_detail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "2");
            }
            else if(ButtonName == "world_btn_detail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "3");
            }
            else if(ButtonName == "world_btn_detail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "4");
            }
            else if(ButtonName == "world_btn_detail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "5");
            }
        }
        else if(LayerName == "mainmenu_world_list_room")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_thumbnail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "0");
            }
            else if(ButtonName == "world_thumbnail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "1");
            }
            else if(ButtonName == "world_thumbnail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "2");
            }
            else if(ButtonName == "world_thumbnail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "3");
            }
            else if(ButtonName == "world_thumbnail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "4");
            }
            else if(ButtonName == "world_thumbnail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedRoomMoveDialog", "5");
            }
            else if(ButtonName == "world_btn_detail_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "0");
            }
            else if(ButtonName == "world_btn_detail_1")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "1");
            }
            else if(ButtonName == "world_btn_detail_2")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "2");
            }
            else if(ButtonName == "world_btn_detail_3")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "3");
            }
            else if(ButtonName == "world_btn_detail_4")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "4");
            }
            else if(ButtonName == "world_btn_detail_5")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedDetailDialog", "5");
            }
        }
        else if(LayerName == "mainmenu_world_move_dialog_official_general")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "common_btn_cancel")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseMoveDialog", "mainmenu_world_move_dialog_official_general");
            }
            else if(ButtonName == "common_btn_migrate")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedMigrateButton", "mainmenu_world_move_dialog_official_general");
            }
            else if(ButtonName == "common_btn_close" || ButtonName == "popup_background")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseMoveDialog", "mainmenu_world_move_dialog_official_general");
            }
        }
        else if(LayerName == "mainmenu_world_move_dialog_room")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "common_btn_cancel")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseMoveDialog", "mainmenu_world_move_dialog_room");
            }
            else if(ButtonName == "common_btn_migrate")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedMigrateButton", "mainmenu_world_move_dialog_room");
            }
            else if(ButtonName == "common_btn_close" || ButtonName == "popup_background")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseMoveDialog", "mainmenu_world_move_dialog_room");
            }
        }
        else if(LayerName == "mainmenu_world_descript_dialog")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "common_btn_close" || ButtonName == "popup_background")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseDescriptDialog", "");
            }
            else if(ButtonName == "world_btn_like_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedLikeButton", "");
            }
            else if(ButtonName == "world_btn_like_on")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedUnLikeButton", "");
            }
            else if(ButtonName == "common_btn_migrate")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedCloseDescriptDialog", "");
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedMigrateButton", "mainmenu_world_descript_dialog");
            }
            else if(ButtonName == "world_frame_creator_0")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldFrameCreator", "0");
            }
            else if(ButtonName == "world_frame_creator_1")
            {
                // layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldFrameCreator", "1");
            }
            else if(ButtonName == "world_frame_creator_2")
            {
                // layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldFrameCreator", "2");
            }
            else if(ButtonName == "world_frame_creator_3")
            {
                // layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldFrameCreator", "3");
            }
        }
        else if(LayerName == "mainmenu_world_pager")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_page_back")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedPagerBack", "");
            }
            else if(ButtonName == "world_page_next")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedPagerNext", "");
            }
        }
        else if(LayerName == "mainmenu_world_sort")
        {
            LayerBundle layer = hsLayerGet("mainmenu_world_tab");
            if(layer === null) return;

            if(ButtonName == "world_btn_sort_popular_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldSortPopular", "");
            }
            else if(ButtonName == "world_btn_sort_new_off")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldSortNew", "");
            }
            else if(ButtonName == "world_search_btn")
            {
                layer.CallComponentMethod("WorldMenuViewModel", "OnClickedWorldSearchButton", "");
            }
        }
    }
}