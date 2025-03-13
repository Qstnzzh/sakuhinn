component WorldMenuViewModel
{
    WorldMenuModel m_Model;
    WorldMenuView m_View;

    public WorldMenuViewModel()
    {
        m_Model = system.Layer_GetComponentByName<WorldMenuModel>("mainmenu_world_tab");
        m_View = new WorldMenuView();
    }

    public void OnResize()
    {
        m_View.ResizeCallback();
    }

    public void OnClickedOpenOfficialTab()
    {
        _CleanWorldListGrid();

        m_View.ShowOfficialTab(true);
        m_View.ShowGeneralTab(false);
        m_View.ShowRoomTab(false);

        m_View.ShowPager(true);
        m_View.ShowWorldSort(false);
        m_View.SwitchToggle_Popular_New(false);
        m_Model.SetWorldSortType(WORLD_SORT_TYPE_NONE);

        m_Model.FetchWorldList(WORLD_TYPE_OFFICIAL, 0, "");
        m_View.UpdateWorldPageText(0);
    }

    public void OnClickedOpenGeneralTab()
    {
        _CleanWorldListGrid();

        m_View.ShowOfficialTab(false);
        m_View.ShowGeneralTab(true);
        m_View.ShowRoomTab(false);

        m_View.ShowPager(true);
        m_View.ShowWorldSort(true);
        m_View.SwitchToggle_Popular_New(false);
        m_Model.SetWorldSortType(WORLD_SORT_TYPE_POPULAR);

        m_Model.FetchWorldList(WORLD_TYPE_GENERAL, 0, "");
        m_View.UpdateWorldPageText(0);
    }
    
    public void OnClickedOpenRoomTab()
    {
        _CleanWorldListGrid();

        m_View.ShowOfficialTab(false);
        m_View.ShowGeneralTab(false);
        m_View.ShowRoomTab(true);

        m_View.ShowPager(true);
        m_View.ShowWorldSort(true);
        m_View.SwitchToggle_Popular_New(false);
        m_Model.SetWorldSortType(WORLD_SORT_TYPE_POPULAR);

        m_Model.FetchWorldList(WORLD_TYPE_ROOM, 0, "");
        m_View.UpdateWorldPageText(0);
    }

    public void OnClickedCloseWorldMenu()
    {
        _CleanWorldListGrid();

        m_View.ShowOfficialTab(false);
        m_View.ShowGeneralTab(false);
        m_View.ShowRoomTab(false);

        m_View.ShowPager(false);
        m_View.SwitchToggle_Popular_New(false);
        m_View.SetToggleLikeUnlike(false);
        m_View.ShowWorldSort(false);
        
        m_Model.SetWorldSortType(WORLD_SORT_TYPE_POPULAR);
        m_Model.Release();
        m_Model.SelectWorldItem(-1);
    }

    void _CleanWorldListGrid()
    {
        m_View.CleanWorldListGrid(m_Model.GetCurrentWorldType());
    }

    public void DrawWorldList(string WorldType, list<WorldMenuWorldData> WorldList)
    {
        m_View.DrawWorldListGrid(WorldType, WorldList);
    }

    public void OnClickedOfficialMoveDialog(string param)
    {
        int ItemIndex = param.ToInt();

        m_Model.SelectWorldItem(ItemIndex);
        m_View.ShowDialog("mainmenu_world_move_dialog_official_general", true);
    }
    
    public void OnClickedRoomMoveDialog(string param)
    {
        int ItemIndex = param.ToInt();

        m_Model.SelectWorldItem(ItemIndex);
        m_View.ShowDialog("mainmenu_world_move_dialog_room", true);
    }
    
    public void OnClickedDetailDialog(string param)
    {
        int ItemIndex = param.ToInt();

        string WorldType = m_Model.GetCurrentWorldType();
        if(WorldType == WORLD_TYPE_GENERAL || WorldType == WORLD_TYPE_ROOM)
        {
            m_View.ShowWorldSearchInputField(false);
        }
        
        m_Model.SelectWorldItem(ItemIndex);
        m_Model.FetchWorldListDetail();
    }

    public void OnClickedWorldFrameCreator(string param)
    {
        int UserIndex = param.ToInt();

        m_Model.FetchCreatorProfile(UserIndex);
    }

    public void OnUpdatedWorldDetailPage(WorldMenuWorldData World, WorldMenuWorldDetailData DetailData)
    {
        m_View.DrawDetailDialog(World, DetailData);
    }

    public void OnClickedCloseMoveDialog(string LayerName)
    {
        m_View.ShowDialog(LayerName, false);
    }

    public void OnClickedCloseDescriptDialog()
    {
        m_View.CloseDetailDialog();
        m_View.SetToggleLikeUnlike(false);

        string WorldType = m_Model.GetCurrentWorldType();
        if(WorldType == WORLD_TYPE_GENERAL || WorldType == WORLD_TYPE_ROOM)
        {
            m_View.ShowWorldSearchInputField(true);
        }

        m_Model.CloseDescriptDialog();
    }

    public void OnClickedPagerBack()
    {
        m_Model.UpdatePager(-1);
        m_View.UpdateWorldPageText(m_Model.GetPagerIndex());
    }

    public void OnClickedPagerNext()
    {
        m_Model.UpdatePager(1);
        m_View.UpdateWorldPageText(m_Model.GetPagerIndex());
    }

    public void OnClickedMigrateButton(string LayerName)
    {
        OnClickedCloseMoveDialog(LayerName);

        string WorldType = m_Model.GetCurrentWorldType();
        if(WorldType == WORLD_TYPE_GENERAL || WorldType == WORLD_TYPE_ROOM)
        {
            m_View.ShowWorldSearchInputField(true);
        }

        m_Model.CloseDescriptDialog();
        m_Model.MoveWorld();
    }

    public void OnClickedWorldSortPopular()
    {
        m_View.SwitchToggle_Popular_New(false);
        m_View.UpdateWorldPageText(0);
        m_Model.SortWorldList(WORLD_SORT_TYPE_POPULAR);
    }

    public void OnClickedWorldSortNew()
    {
        m_View.SwitchToggle_Popular_New(true);
        m_View.UpdateWorldPageText(0);
        m_Model.SortWorldList(WORLD_SORT_TYPE_NEW);
    }

    public void OnClickedWorldSearchButton()
    {
        string keyword = m_View.GetWorldSortKeyword();
        m_Model.SearchWorld(keyword);

        m_View.UpdateWorldPageText(0);
        m_View.ShowWorldSearchInputField(true);
    }

    public void OnClickedLikeButton()
    {
        m_View.SetToggleLikeUnlike(true);
        m_Model.PostLikeWorld();
    }
    
    public void OnClickedUnLikeButton()
    {
        m_View.SetToggleLikeUnlike(false);
        m_Model.PostUnlikeWorld();
    }
}