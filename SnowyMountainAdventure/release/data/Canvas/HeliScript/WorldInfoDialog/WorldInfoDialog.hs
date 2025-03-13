//WorldInfoDialog g_WorldInfoDialog;
component WorldInfoDialog
{
    const string CURRENT_PLATFORM_CODE="myvket";
    list<string> names_;
    string m_currentWorldId;//現在のワールドID
    string m_worldSetId;//ワールドセットID
    string m_worldName;//ワールド名
    string m_createDatetime;//ワールド生成日
    string m_updateDatetime;//ワールド更新日
    string m_creatorName;//クリータ名
    string m_creatorNameEN;//クリエータ名英語
    string m_creatorVketID;//クリエータのVketID
    string m_description;//ワールド説明
    string m_worldThumbnainURL;//ワールドサムネイルURL
    int m_numOfLike;//いいね！数
    int m_numOfVisit;//来場者数
    bool m_isLikedSelf;//自分自身が「いいね！」ボタンを押している状態かどうか
    bool m_isLoggedIn;//自分はログイン済みか？
    string m_currentCreatorVketId;//現在選択中のクリエータVKetID
    bool m_IsOfficial; // 公式ワールドかどうか
    //コンストラクタ
    public WorldInfoDialog()
    {
        //g_WorldInfoDialog=this;
        //クリエータは最大4名なので、枠は用意しておく
       names_ = new list<string>(4);
       int i=0;
       for(i=0;i<4;++i){
        names_[i]="クリエータナンバー%d" % i;
       }
    }

    //ワールド詳細クラスのシングルトンインスタンスを返す。
    public WorldInfoDialog GetUniqueWorldInfoDialog(){
        LayerBundle layer=hsLayerGet("worldinfo_descript_text_dialog");
        if(layer===null){
            return null;
        }
        WorldInfoDialog worldInfoDialog = system.Layer_GetComponentByName<WorldInfoDialog>("worldinfo_descript_text_dialog");
        return worldInfoDialog;
    }

    public bool IsCRP(){
        return false;
    }
    //ワールドダイアログに表示するワールド名
    public string GetWorldName(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return dialog.m_worldName;
    }
    //ワールドダイアログに表示する「いいね」数
    public string GetGoodCount(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return "%d" % dialog.m_numOfLike;
    }

    private string GetWorldCreateDate(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        if(dialog.m_createDatetime==""){
            return "";//情報がない場合はそもそも表示しない
        }
        return dialog.m_createDatetime;
    }
    private string GetWorldUpdateDate(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        if(dialog.m_updateDatetime==""){
            return "";//情報がない場合はそもそも表示しない
        }
        return dialog.m_updateDatetime;
    }

    //ワールドクリエータ名
    public string GetWorldCreatorName(int index){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        if(index!=0){//今の所インデックス0以外はいない
            return "";
        }
        if(system.IsLangEN()){
            return dialog.m_creatorNameEN;
        }
        return dialog.m_creatorName;
    }

    private string GetWorldCreatorVketID(int index){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return dialog.m_creatorVketID;
    }

    //ワールドビュー数
    public string GetWorldViewCount(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return "%d" % dialog.m_numOfVisit;
    }
    //ワールド説明テキスト
    public string GetWorldDetailDescription(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return dialog.m_description;
        //return "ここにワールドの説明が入りますよ。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。ここにワールドの説明が入ります。";
    }

    public bool IsOfficial()
    {
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return false;
        }
        return dialog.m_IsOfficial;
    }

    public void OnLoaded()
    {
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        dialog.m_currentWorldId=hsGetCurrentWorldId();
        //ログイン済みかどうか、また、ワールド情報は非同期に問い合わせている
        api.auths.isLoggedIn(_LoggedInCheckCallback);
        api.worlds.getWorldDetailByWorldId(_FetchWorldDetailCallback, g_SpatiumCode,dialog.m_currentWorldId);
    }

    //自分自身の「いいね」を更新する
    private void UpdateLikedSelfIcon(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return ;
        }
        if(dialog.m_isLoggedIn){
            if(dialog.m_isLikedSelf){
                hsCanvasSetGUIImage("world_info_dialog","world_btn_good","gui2023/menu/world/world_btn_good_on.png");//いいね状態
            }else{
                hsCanvasSetGUIImage("world_info_dialog","world_btn_good","gui2023/menu/world/world_btn_good.png");//デフォルト
            }
        }else{
            hsCanvasSetGUIImage("world_info_dialog","world_btn_good","gui2023/menu/world/world_btn_good_disabled.png");//無効
        }
    }

    private string GetWorldThumbnailURL(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return "";
        }
        return dialog.m_worldThumbnainURL;
    }

    //ワールド情報をGUIに反映
    private void UpdateWorldInfoText(bool IsOpen){
        // hudのワールド名を更新
        hsCanvasSetGUIText("HUD", "current_space_name_text", GetWorldName());

        // ワールド詳細ダイアログの更新
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_title_text", GetWorldName());
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_good_count", GetGoodCount());
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_date_info_text", GetWorldCreateDate());
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_date_update_text", GetWorldUpdateDate());
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_view_count", GetWorldViewCount());
        hsCanvasSetGUIImage("world_info_dialog","world_thumbnail",GetWorldThumbnailURL());
        
        // 現在はクリエイター情報は一人分しか返ってこないのでひとまず一人分だけ表示
        for(int i = 0; i < 4; i++)
        {
            hsCanvasResetToggleDefault("Toggle_WorldInfo_Creater_%d" % (i + 1));

            string Name = GetWorldCreatorName(i);

            if(!Name.IsEmpty())
            {
                hsCanvasToggleChange("Toggle_WorldInfo_Creater_%d" % (i + 1));
                hsCanvasSetGUIText("world_info_dialog", "world_creator_name" + "%d" % (i + 1), Name);
            }
        }

        if(IsOpen)
        {
            string LayerName = "worldinfo_descript_text_dialog";
            hsCanvasSetLayerShow(LayerName, true);
            hsCanvasSetGUIText(LayerName, "world_descript_text", GetWorldDetailDescription());
        }
        
        // ライクの更新
        UpdateLikedSelfIcon();

        // 公式ワールドもしくはCountが-1の場合は訪問数を表示しない
        hsCanvasResetToggleDefault("Toggle_World_Detail_Is_Official");
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        if(!dialog.m_IsOfficial && dialog.m_numOfVisit != -1)
        {
            hsCanvasToggleChange("Toggle_World_Detail_Is_Official");
        }
    }

    //ワールド情報レイヤーの表示
    private void ShowWorldInfoDialog(){
        hsCanvasSetGUIShow("world_info_dialog", "world_btn_transition", false);
        hsCanvasResetToggleDefault("world_btn_transition_toggle");
        if(!IsCRP()){
            hsCanvasToggleChange("world_btn_transition_toggle");
        }
        UpdateWorldInfoText(true);
        hsCanvasSetLayerShow("world_info_dialog", true);
    }

    //いいね押された
    private void OnLikeWorld(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        api.worlds.likeWorld(_LikeWorldCallback,dialog.m_worldSetId,CURRENT_PLATFORM_CODE);
    }
    private void OpenSocialLink(string socialName){
        string lang="ja";
        if(system.IsLangEN()){
            lang="en";
        }
        socialLink.openSocialLinkForFriends( 
                                        socialName,//feature どのソーシャルリンクか(twitter facebook LINE)
                                        lang,
                                        hsGetCurrentWorldId(),//
                                        api.routers.getCurrentUrl()//URL
                                        );

    }
    //いいねを取り消された
    private void OnUnlinkeWorld(){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        api.worlds.unlikeWorld(_UnlikeWorldCallback,dialog.m_worldSetId,CURRENT_PLATFORM_CODE);
    }

    void _LoggedInCallbackForFindUserData(bool loginValid){
        LayerBundle profileLayer=hsLayerGet("other_profile");
        if(profileLayer===null){
            return;
        }else{
            ProfileModel profileModel = system.Layer_GetComponentByName<ProfileModel>("other_profile");
            WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
            if(dialog===null){
                return;
            }
            profileModel.FindUserDataAndShowProfileFromUserID(dialog.m_currentCreatorVketId,"login",loginValid);
        }
    }
    public void OnClickedButton(string layerName, string btnName){
       if(layerName=="HUD" && btnName=="current_space_info"){
            ShowWorldInfoDialog();           
        }
        if(layerName=="world_info_dialog"){
            WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
            if(dialog===null){
                return;
            }
            if(dialog.m_isLoggedIn){
                if(btnName=="world_btn_good"){
                    if(dialog.m_isLikedSelf){
                        OnUnlinkeWorld();
                        return;
                    }else{
                        OnLikeWorld();
                        return;
                    }
                }
            }
            for(int i=0;i<4;++i){
                string creator_btn_name="world_creator_frame%d" % (i+1);
                if(btnName==creator_btn_name && dialog.GetWorldCreatorName(i)!=""){
                    
                    string vketid=dialog.GetWorldCreatorVketID(i);
                    dialog.m_currentCreatorVketId=vketid;
                    api.auths.isLoggedIn(_LoggedInCallbackForFindUserData);
                    return;
                }
            }
            //ソーシャルリンクボタンクリック
            if(btnName=="common_btn_facebook"){
                OpenSocialLink("facebook");
            }else if(btnName=="common_btn_line"){
                OpenSocialLink("LINE");
            }else if(btnName=="common_btn_twitter"){
                OpenSocialLink("twitter");
            }

            if(btnName == "common_btn_close")
            {
                hsCanvasSetLayerShow("worldinfo_descript_text_dialog", false);
            }
        }
    }

    //ワールド情報取得コールバック
    void _FetchWorldDetailCallback(string param){
        Json DetailJSON = hsLoadJson(param);
        if(DetailJSON === null) return;

        Json world = DetailJSON.Find(EJSONDataType_Block, "world_portal");
        if(world === null) return;
        
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        world.FindValueString("name", dialog.m_worldName);
        world.FindValueString("created_date", dialog.m_createDatetime);
        world.FindValueString("updated_date", dialog.m_updateDatetime);
        world.FindValueString("creator_name", dialog.m_creatorName);
        world.FindValueString("creator_name_en", dialog.m_creatorNameEN);
        world.FindValueString("creator_vket_id", dialog.m_creatorVketID);
        world.FindValueString("description", dialog.m_description);
        world.FindValueInt("number_of_likes", dialog.m_numOfLike);
        world.FindValueInt("visit_count",dialog.m_numOfVisit);
        int wset_id;
        world.FindValueInt("world_set_id",wset_id);
        dialog.m_worldSetId = "%d" % wset_id;
        
        // 公式ワールドかどうか
        dialog.m_IsOfficial = false; 
        Json is_official = world.GetData("is_official");
        if(is_official !== null)
        {
            string val = is_official.GetValue();

            dialog.m_IsOfficial = (val == "true");
        }

        if(dialog.m_isLoggedIn){
            int liked=0;
            Json jsLiked=world.GetData("liked");
            string strLiked = jsLiked.GetValue();
            // hsSystemOutput("liked=%s\n" % strLiked);
            dialog.m_isLikedSelf=(strLiked=="true" ? true : false);
            // world.FindValueInt("liked",liked);
            // hsSystemOutput("liked=%d\n" % liked);
            // g_WorldInfoDialog.m_isLikedSelf = liked==0 ? false : true;
        }

        Json thumbnail = world.Find(EJSONDataType_Block, "thumbnail");
        if(thumbnail !== null)
        {
            string url;
            thumbnail.FindValueString("url", url);
            WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
            if(dialog===null){
                return;
            }
            if(url.IsEmpty())
            {
                dialog.m_worldThumbnainURL = "gui2023/menu/world/world_thumbnail.png";
            }else{
                dialog.m_worldThumbnainURL=url;
            }
        }

        UpdateWorldInfoText(false);
    }
    //ログインコールバック
    void _LoggedInCheckCallback(bool isLoggedIn){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        dialog.m_isLoggedIn=isLoggedIn;
    }
    void _LikeWorldCallback(string param){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
         dialog.m_isLikedSelf=true;
         dialog.m_numOfLike+=1;
         hsCanvasSetGUIText("world_info_dialog", "world_dialog_good_count", GetGoodCount());
         UpdateLikedSelfIcon();
    }
    void _UnlikeWorldCallback(string param){
        WorldInfoDialog dialog= GetUniqueWorldInfoDialog();
        if(dialog===null){
            return;
        }
        dialog.m_isLikedSelf=false;
        dialog.m_numOfLike-=1;
        hsCanvasSetGUIText("world_info_dialog", "world_dialog_good_count", GetGoodCount());
        UpdateLikedSelfIcon();
    }
    
    
}