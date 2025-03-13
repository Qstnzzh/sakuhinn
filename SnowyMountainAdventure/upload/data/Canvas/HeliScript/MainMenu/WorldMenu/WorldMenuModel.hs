const string WORLD_TYPE_NONE = "WORLD_TYPE_NONE";
const string WORLD_TYPE_OFFICIAL = "WORLD_TYPE_OFFICIAL";
const string WORLD_TYPE_GENERAL = "WORLD_TYPE_GENERAL";
const string WORLD_TYPE_ROOM = "WORLD_TYPE_ROOM";

const string WORLD_SORT_TYPE_POPULAR = "WORLD_SORT_TYPE_POPULAR";
const string WORLD_SORT_TYPE_NEW = "WORLD_SORT_TYPE_NEW";
const string WORLD_SORT_TYPE_OLD = "WORLD_SORT_TYPE_OLD";
const string WORLD_SORT_TYPE_VISIT = "WORLD_SORT_TYPE_VISIT";
const string WORLD_SORT_TYPE_NONE = "WORLD_SORT_TYPE_NONE";

class WorldMenuModel
{
    WorldMenuViewModel m_ViewModel;

    string m_CurrentWorldType;
    list<WorldMenuWorldData> m_WorldList;
    int m_PagerIndex;
    int m_MaxPege;
    int m_SelectedWorldItemIndex;
    string m_CurrentWorldSortType;
    string m_CurrentKeyword;

    WorldMenuWorldDetailData m_CurrentDetailData;

    public WorldMenuModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<WorldMenuViewModel>("mainmenu_world_tab");

        m_CurrentWorldType = WORLD_TYPE_NONE;
        m_WorldList = new list<WorldMenuWorldData>();
        m_PagerIndex = 0;
        m_MaxPege = 0;
        m_SelectedWorldItemIndex = -1;
        m_CurrentWorldSortType = WORLD_SORT_TYPE_POPULAR;

        m_CurrentDetailData = null;
    }

    public void Release()
    {
        m_WorldList.Clear();
        m_CurrentKeyword = "";
    }

    public void CloseDescriptDialog()
    {
        m_CurrentDetailData = null;
    }

    public string GetCurrentWorldType()
    {
        return m_CurrentWorldType;
    }

    public list<WorldMenuWorldData> GetWorldList()
    {
        return m_WorldList;
    }

    public int GetPagerIndex()
    {
        return m_PagerIndex;
    }

    public void SetWorldSortType(string SortType)
    {
        m_CurrentWorldSortType = SortType;
    }

    public void FetchWorldList(string WorldType, int PagerIndex, string keyword)
    {
        Release();

        m_CurrentWorldType = WorldType;
        m_PagerIndex = PagerIndex;
        int Offset = 6 * PagerIndex;
        m_CurrentKeyword = keyword;

        string SortParam;
        if(m_CurrentWorldSortType == WORLD_SORT_TYPE_POPULAR)
        {
            SortParam = "popular";
        }
        else if(m_CurrentWorldSortType == WORLD_SORT_TYPE_NEW)
        {
            SortParam = "newer";
        }
        else if(m_CurrentWorldSortType == WORLD_SORT_TYPE_OLD)
        {
            SortParam = "older";
        }
        else if(m_CurrentWorldSortType == WORLD_SORT_TYPE_VISIT)
        {
            SortParam = (m_CurrentWorldType == WORLD_TYPE_ROOM)? "favorite" : "visit_count";
        }
        else
        {
            SortParam = "";
        }

        string filter;
        if(m_CurrentWorldType == WORLD_TYPE_OFFICIAL)
        {
            filter = "official";
        }
        else if(m_CurrentWorldType == WORLD_TYPE_GENERAL)
        {
            filter = "user";
        }

        if(m_CurrentWorldType == WORLD_TYPE_ROOM)
        {
            api.worlds.getHousingWorldList(_FetchHousingWorldListCallback, 6, Offset, g_Platform_Code, SortParam, m_CurrentKeyword);
        }
        else
        {
            api.worlds.getWorldList(_FetchWorldListCallback, 6, Offset, g_Platform_Code, SortParam, filter, m_CurrentKeyword);
        }
    }

    void _FetchWorldListCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json worldListJSON = hsLoadJson(param);
        if(worldListJSON === null) return;

        Json world_portals = worldListJSON.Find(EJSONDataType_Array, "world_portals");
        if(world_portals === null) return;

        list<Json> worldListArray = world_portals.GetArrayList();

        for(int i = 0; i < worldListArray.Count; i++)
        {
            Json world = worldListArray[i];
            if(world === null) continue;

            WorldMenuWorldData Data = new WorldMenuWorldData();

            int id;
            world.FindValueInt("id", id);
            Data.WorldID = ("%d" % id);

            string name;
            world.FindValueString("name", name);
            Data.Title = (name);

            int visit_count = 0;
            world.FindValueInt("visit_count", visit_count);
            Data.VisitCount = (visit_count);

            Data.IsOfficial = false; 
            Json is_official = world.GetData("is_official");
            if(is_official !== null)
            {
                string val = is_official.GetValue();

                Data.IsOfficial = (val == "true");
            }

            string ingame_url;
            world.FindValueString("ingame_url", ingame_url);
            Data.IngameUrl = (ingame_url);

            Json thumbnail = world.Find(EJSONDataType_Block, "thumbnail");
            if(thumbnail !== null)
            {
                string url;
                thumbnail.FindValueString("url", url);

                if(url.IsEmpty())
                {
                    url = "gui2023/menu/world/world_thumbnail_world_list.png";
                }

                Data.ThumbnailURL = (url);
            }

            m_WorldList.Add(Data);
        }

        int world_portal_count;
        worldListJSON.FindValueInt("world_portal_count", world_portal_count);
        m_MaxPege = (world_portal_count + 6 - 1) / 6;

        m_ViewModel.DrawWorldList(m_CurrentWorldType, m_WorldList);
    }

    void _FetchHousingWorldListCallback(string param)
    {
        if(param.IsEmpty()) return;

        Json worldListJSON = hsLoadJson(param);
        if(worldListJSON === null) return;

        Json housing_worlds = worldListJSON.Find(EJSONDataType_Array, "housing_worlds");
        if(housing_worlds === null) return;

        list<Json> housingWorldsArray = housing_worlds.GetArrayList();

        for(int i = 0; i < housingWorldsArray.Count; i++)
        {
            Json world = housingWorldsArray[i];
            if(world === null) continue;

            WorldMenuWorldData Data = new WorldMenuWorldData();

            string world_id;
            world.FindValueString("world_id", world_id);
            Data.WorldID = (world_id);

            string name;
            world.FindValueString("name", name);
            Data.Title = (name);

            int visit_count = 0;
            // Data.VisitCount = (visit_count); // HousingWorldにはvisit_countのフィールドはない(仕様にもない)

            string ingame_url;
            // world.FindValueString("ingame_url", ingame_url); // ハウジングの場合はgetHousingWorldDetailからURLを取得する必要がある
            Data.IngameUrl = (ingame_url);

            Json thumbnail = world.Find(EJSONDataType_Block, "thumbnail");
            if(thumbnail !== null)
            {
                string url;
                thumbnail.FindValueString("url", url);

                if(url.IsEmpty())
                {
                    url = "gui2023/menu/world/world_thumbnail_world_list.png";
                }

                Data.ThumbnailURL = (url);
            }

            m_WorldList.Add(Data);
        }

        int housing_world_count;
        worldListJSON.FindValueInt("housing_world_count", housing_world_count);
        m_MaxPege = (housing_world_count + 6 - 1) / 6;

        m_ViewModel.DrawWorldList(m_CurrentWorldType, m_WorldList);
    }

    public void UpdatePager(int val)
    {
        m_PagerIndex += val;

        if(m_PagerIndex < 0) 
        {
            m_PagerIndex = 0;
            
            return;
        }
        else if(m_PagerIndex >= m_MaxPege)
        {
            m_PagerIndex = (m_MaxPege - 1);

            return;
        }

        if(m_CurrentWorldType == WORLD_TYPE_OFFICIAL)
        {
            FetchWorldList(WORLD_TYPE_OFFICIAL, m_PagerIndex, "");
        }
        else if(m_CurrentWorldType == WORLD_TYPE_GENERAL)
        {
            FetchWorldList(WORLD_TYPE_GENERAL, m_PagerIndex, m_CurrentKeyword);
        }
        else if(m_CurrentWorldType == WORLD_TYPE_ROOM)
        {
            FetchWorldList(WORLD_TYPE_ROOM, m_PagerIndex, m_CurrentKeyword);
        }
    }

    public void SortWorldList(string SortType)
    {
        m_CurrentWorldSortType = SortType;
        m_PagerIndex = 0;

        if(m_CurrentWorldType == WORLD_TYPE_GENERAL)
        {
            FetchWorldList(WORLD_TYPE_GENERAL, 0, "");
        }
        else if(m_CurrentWorldType == WORLD_TYPE_ROOM)
        {
            FetchWorldList(WORLD_TYPE_ROOM, 0, "");
        }
    }

    public void SearchWorld(string keyword)
    {
        m_CurrentWorldSortType = WORLD_SORT_TYPE_NONE;

        if(m_CurrentWorldType == WORLD_TYPE_GENERAL)
        {
            FetchWorldList(WORLD_TYPE_GENERAL, 0, keyword);
        }
        else if(m_CurrentWorldType == WORLD_TYPE_ROOM)
        {
            FetchWorldList(WORLD_TYPE_ROOM, 0, keyword);
        }
    }

    public void SelectWorldItem(int ItemIndex)
    {
        m_SelectedWorldItemIndex = ItemIndex;
    }

    public void FetchWorldListDetail()
    {
        if(m_SelectedWorldItemIndex >= 0 && m_SelectedWorldItemIndex < m_WorldList.Count)
        {
            WorldMenuWorldData Data = m_WorldList[m_SelectedWorldItemIndex];
            string ID = Data.WorldID;

            if(m_CurrentWorldType == WORLD_TYPE_ROOM)
            {
                // api.worlds.getHousingWorldDetail(_FetchWorldListDetailCallback, ID, g_Platform_Code);
            }
            else
            {
                api.worlds.getWorldDetail(_FetchWorldListDetailCallback, ID, g_Platform_Code);
            }
        }
    }

    void _FetchWorldListDetailCallback(string param)
    {
        WorldMenuWorldData WorldData = m_WorldList[m_SelectedWorldItemIndex];
        WorldMenuWorldDetailData DetailData = new WorldMenuWorldDetailData();

        Json DetailJSON = hsLoadJson(param);
        if(DetailJSON === null) return;

        Json world = DetailJSON.Find(EJSONDataType_Block, "world_portal");
        if(world === null) return;

        string created_at;
        world.FindValueString("created_at", created_at);
        DetailData.CreatedDate = created_at;

        string updated_at;
        world.FindValueString("updated_at", updated_at);
        DetailData.UpdatedDate = updated_at;

        string creator_name;
        world.FindValueString("creator_name", creator_name);
        DetailData.CreatorName = creator_name;

        string creator_name_en;
        world.FindValueString("creator_name_en", creator_name_en);
        DetailData.CreatorName_EN = creator_name_en;

        string creator_vket_id;
        world.FindValueString("creator_vket_id", creator_vket_id);
        DetailData.UserCode = creator_vket_id;

        string description;
        world.FindValueString("description", description);
        DetailData.Description = description;

        int number_of_likes;
        world.FindValueInt("number_of_likes", number_of_likes);
        DetailData.NumOfLikes = number_of_likes;

        int world_set_id;
        world.FindValueInt("world_set_id", world_set_id);
        DetailData.WorldSetID = "%d" % world_set_id;

        Player SelfPlayer = hsPlayerGet();
        string SelfUserType = SelfPlayer.GetCustomState("UserType");

        if(SelfUserType == "login")
        {
            Json jsLiked=world.GetData("liked");
            if(jsLiked !== null)
            {
                string strLiked = jsLiked.GetValue();
                DetailData.Liked = (strLiked == "true");
            }
        }

        m_CurrentDetailData = DetailData;

        m_ViewModel.OnUpdatedWorldDetailPage(WorldData, DetailData);
    }

    public void FetchCreatorProfile(int UserIndex)
    {
        if(m_SelectedWorldItemIndex >= 0 && m_SelectedWorldItemIndex < m_WorldList.Count)
        {
            if(m_CurrentDetailData !== null)
            {
                string UserCode = m_CurrentDetailData.UserCode;
                if(!UserCode.IsEmpty())
                {
                    Player SelfPlayer = hsPlayerGet();
                    string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
                    string SelfUserType = SelfPlayer.GetCustomState("UserType");
                    LayerBundle layerProfile=hsLayerGet("other_profile");
                    if(layerProfile!==null){
                        ProfileModel profileModel=system.Layer_GetComponentByName<ProfileModel>("other_profile");
                        profileModel.FindUserDataAndShowProfileFromUserID(UserCode, "login", (SelfUserType == "login" && SelfUserCode != UserCode));
                    }
                }
            }
        }
    }

    public void MoveWorld()
    {
        if(m_SelectedWorldItemIndex >= 0 && m_SelectedWorldItemIndex < m_WorldList.Count)
        {
            WorldMenuWorldData Data = m_WorldList[m_SelectedWorldItemIndex];

            if(m_CurrentWorldType == WORLD_TYPE_ROOM)
            {
                // ハウジングの場合はさらに詳細を問い合わせる必要がある
                string worldid = Data.WorldID;

                if(!worldid.IsEmpty())
                {
                    api.profiles.openMyVketUrl("/myroom/maker/?worldid=%s" % worldid);
                }
            }
            else
            {
                // ワールドリストが持っているURLで遷移する
                string URL = Data.IngameUrl;

                if(!URL.IsEmpty())
                {
                    hsWebOpen(URL);
                }
            }
        }
    }

    public void PostLikeWorld()
    {
        api.auths.isLoggedIn(_LoginCallbackLikeWorld);
    }

    void _LoginCallbackLikeWorld(bool loginValid)
    {
        if(loginValid)
        {
            string WorldSetID = m_CurrentDetailData.WorldSetID;
            if(WorldSetID.IsEmpty()) return;

            api.worlds.likeWorld(_LikeWorldCallback, WorldSetID, g_Platform_Code);
        }
    }

    void _LikeWorldCallback(string param)
    {
        FetchWorldListDetail();
    }

    public void PostUnlikeWorld()
    {
        api.auths.isLoggedIn(_LoginCallbackUnlikeWorld);
    }

    void _LoginCallbackUnlikeWorld(bool loginValid)
    {
        if(loginValid)
        {
            string WorldSetID = m_CurrentDetailData.WorldSetID;
            if(WorldSetID.IsEmpty()) return;

            api.worlds.unlikeWorld(_UnlikeWorldCallback, WorldSetID, g_Platform_Code);
        }
    }

    void _UnlikeWorldCallback(string param)
    {
        FetchWorldListDetail();
    }
}