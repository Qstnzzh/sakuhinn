class WorldMenuView
{
    string m_worldkeyword_HTMLElementID;
    string m_worldkeyword_text_HTMLElementID;

    public WorldMenuView()
    {
        m_worldkeyword_HTMLElementID = "worldkeyword";
        m_worldkeyword_text_HTMLElementID = "worldkeyword-text";
        hel_set_HTMLElement_value(m_worldkeyword_text_HTMLElementID, "");
    }

    public void ResizeCallback()
    {
        hel_setText(ETextParamType_OperateCanvas, "ResizeInputFieldGeneric" + "," + "mainmenu_world_sort" + "," + "world_search_text" + ","
                + m_worldkeyword_HTMLElementID + "," + m_worldkeyword_text_HTMLElementID);
    }

    public void ShowOfficialTab(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_World_Tab_Official");
        if(show)
        {
            hsCanvasToggleChange("Toggle_World_Tab_Official");
        }   
    }

    public void ShowGeneralTab(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_World_Tab_General");
        if(show)
        {
            hsCanvasToggleChange("Toggle_World_Tab_General");
        }
    }

    public void ShowRoomTab(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_World_Tab_Room");
        if(show)
        {
            hsCanvasToggleChange("Toggle_World_Tab_Room");
        }   
    }

    public void ShowPager(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_Show_Pager");
        if(show)
        {
            hsCanvasToggleChange("Toggle_Show_Pager");
        }   

        hsCanvasSetLayerShow("mainmenu_world_pager", show);
    }

    public void ShowWorldSort(bool show)
    {
        hsCanvasSetLayerShow("mainmenu_world_sort", show);
        ShowWorldSearchInputField(show);
    }

    public void SwitchToggle_Popular_New(bool IsNew)
    {
        hsCanvasResetToggleDefault("Toggle_WorldMenu_Popular_New");
        if(IsNew)
        {
            hsCanvasToggleChange("Toggle_WorldMenu_Popular_New");
        }
    }

    public void ShowWorldSearchInputField(bool show)
    {
        hel_set_HTMLElement_value(m_worldkeyword_text_HTMLElementID, "");

        hel_set_HTMLElement_visibility(m_worldkeyword_HTMLElementID, show);
        hel_set_HTMLElement_visibility(m_worldkeyword_text_HTMLElementID, show);
        
        if(show)
        {
            ResizeCallback();
        }
    }

    public string GetWorldSortKeyword()
    {
        string keyword = hel_get_HTMLElement_value(m_worldkeyword_text_HTMLElementID);

        return keyword;
    }

    public void DrawWorldListGrid(string WorldType, list<WorldMenuWorldData> WorldList)
    {
        if(WorldType == WORLD_TYPE_OFFICIAL)
        {
            _DrawGrid("mainmenu_world_list_official", WorldList);
        }
        else if(WorldType == WORLD_TYPE_GENERAL)
        {
            _DrawGrid("mainmenu_world_list_general", WorldList);
        }
        else if(WorldType == WORLD_TYPE_ROOM)
        {
            _DrawGrid("mainmenu_world_list_room", WorldList);
        }
    }

    void _DrawGrid(string LayerName, list<WorldMenuWorldData> WorldList)
    {
        hsCanvasSetLayerShow(LayerName, true);

        for(int i = 0; i < 6; i++)
        {
            if(i < WorldList.Count)
            {
                WorldMenuWorldData World = WorldList[i];

                hsCanvasResetToggleDefault("Toggle_World_List_%d" %i);
                hsCanvasToggleChange("Toggle_World_List_%d" %i);

                hsCanvasSetGUIImage(LayerName, "world_thumbnail_%d" %i, World.ThumbnailURL);
                hsCanvasSetGUIText(LayerName, "world_title_text_%d" %i, World.Title);
                hsCanvasSetGUIText(LayerName, "world_visit_count_text_%d" %i, "%d" %World.VisitCount);

                // 公式ワールドもしくはCountが-1の場合は訪問数を表示しない
                hsCanvasResetToggleDefault("Toggle_World_Is_Official_%d" %i);
                if(!World.IsOfficial && World.VisitCount != -1)
                {
                    hsCanvasToggleChange("Toggle_World_Is_Official_%d" %i);
                }
            }
            else
            {
                hsCanvasResetToggleDefault("Toggle_World_List_%d" %i);

                hsCanvasSetGUIImage(LayerName, "world_thumbnail_%d" %i, "");
                hsCanvasSetGUIText(LayerName, "world_title_text_%d" %i, "");
                hsCanvasSetGUIText(LayerName, "world_visit_count_text_%d" %i, "");

                hsCanvasResetToggleDefault("Toggle_World_Is_Official_%d" %i);
            }
        }
    }

    public void CleanWorldListGrid(string WorldType)
    {
        if(WorldType == WORLD_TYPE_OFFICIAL)
        {
            _CleanGrid("mainmenu_world_list_official");
        }
        else if(WorldType == WORLD_TYPE_GENERAL)
        {
            _CleanGrid("mainmenu_world_list_general");
        }
        else if(WorldType == WORLD_TYPE_ROOM)
        {
            _CleanGrid("mainmenu_world_list_room");
        }
    }

    void _CleanGrid(string LayoutName)
    {
        hsCanvasSetLayerShow(LayoutName, false);
    }

    public void ShowDialog(string LayoutName, bool show)
    {
        hsCanvasSetLayerShow(LayoutName, show);
    }
    
    public void DrawDetailDialog(WorldMenuWorldData World, WorldMenuWorldDetailData DetailData)
    {
        {
            string LayerName = "mainmenu_world_descript_dialog";

            hsCanvasSetLayerShow(LayerName, true);
            hsCanvasSetGUIText(LayerName, "world_title_text",   World.Title);
            hsCanvasSetGUIImage(LayerName, "world_thumbnail", World.ThumbnailURL);
            hsCanvasSetGUIText(LayerName, "world_text_good_count", "%d" % DetailData.NumOfLikes);

            string CreatedDate = DetailData.CreatedDate.SubString(0, 10);
            CreatedDate[4] = '/';
            CreatedDate[7] = '/';

            string UpdatedDate = DetailData.UpdatedDate.SubString(0, 10);
            UpdatedDate[4] = '/';
            UpdatedDate[7] = '/';

            hsCanvasSetGUIText(LayerName, "world_dialog_date_info_text", CreatedDate);
            hsCanvasSetGUIText(LayerName, "world_dialog_date_update_text", UpdatedDate);
            
            hsCanvasSetGUIText(LayerName, "world_detail_view_text", "%d" % World.VisitCount);

            // 公式ワールドもしくはCountが-1の場合は訪問数を表示しない
            hsCanvasResetToggleDefault("Toggle_World_Detail_Is_Official");
            if(!World.IsOfficial && World.VisitCount != -1)
            {
                hsCanvasToggleChange("Toggle_World_Detail_Is_Official");
            }
            
            // 現在はクリエイター情報は一人分しか返ってこないのでひとまず一人分だけ表示
            hsCanvasResetToggleDefault("Toggle_World_Create_Name_0");
            hsCanvasToggleChange("Toggle_World_Create_Name_0");
            hsCanvasSetGUIText(LayerName, "world_creator_name_0", DetailData.CreatorName);

            hsCanvasResetToggleDefault("Toggle_World_Create_Name_1");
            hsCanvasResetToggleDefault("Toggle_World_Create_Name_2");
            hsCanvasResetToggleDefault("Toggle_World_Create_Name_3");

            // 既にいいねしているかどうかで表示を切り替える
            SetToggleLikeUnlike(DetailData.Liked);
        }

        {
            string LayerName = "mainmenu_world_descript_text_dialog";
            hsCanvasSetLayerShow(LayerName, true);
            hsCanvasSetGUIText(LayerName, "world_descript_text", DetailData.Description);
        }
    }

    public void CloseDetailDialog()
    {
        ShowDialog("mainmenu_world_descript_dialog", false);
        ShowDialog("mainmenu_world_descript_text_dialog", false);
        ShowDialog("other_profile", false);
    }

    public void UpdateWorldPageText(int PageIndex)
    {
        int PageNumber = PageIndex + 1; // インデックスからナンバーに直す
        hsCanvasSetGUIText("mainmenu_world_pager", "world_page_text", "%d" %(PageNumber));
    }

    public void SetToggleLikeUnlike(bool showUnLike)
    {
        hsCanvasResetToggleDefault("Toggle_World_Like_Unlike");
        if(showUnLike)
        {
            hsCanvasToggleChange("Toggle_World_Like_Unlike");
        }
    }
}