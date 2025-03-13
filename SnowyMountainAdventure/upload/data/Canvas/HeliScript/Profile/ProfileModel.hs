///プロフィール情報
class ProfileInfo{
    public string vketID;
    public string name;
    public string introduction;
    public string iconURL;
    public int followCount;
    public int followerCount;
    public string userType;//login or guest
    public bool isFollowUser;
}

//ProfileModel g_ProfileModel;

component ProfileModel
{
    bool isLoggedIn_;
    ProfileInfo currentProfileInfo_;
    public ProfileModel()
    {
        //g_ProfileModel=this;
        isLoggedIn_=false;
        currentProfileInfo_ = new ProfileInfo();
    }

    //他コンポーネント側から利用する場合はこの関数を呼び出してください
    //プレイヤーID(アバタークリックなどで取得できるプレイヤーID(ピアID))を取得し
    //最終的にそれに応じたプロフィールウィンドウを表示する
    //@param playerID プレイヤーID
    //@param isLoggedInSelf 自分自身がログインしているか
    public void FindUserDataAndShowProfile(string playerID,bool isLoggedInSelf ){
        Player otherPlayer = hsPlayerGetByID(playerID);
        string userCode = otherPlayer.GetCustomState("UserCode");
        string userType = otherPlayer.GetCustomState("UserType");
        FindUserDataAndShowProfileFromUserID(userCode,userType,isLoggedInSelf);
    }

    //ユーザIDからそれに応じたプロフィールウィンドウを表示する
    public void FindUserDataAndShowProfileFromUserID(string userCode,string userType,bool isLoggedInSelf){
        isLoggedIn_=isLoggedInSelf;
        FetchUserProfile(userCode,userType);
    }

    //プレイヤーIDからユーザーIDを取得する
    //@param playerID アプリ中のプレイヤーID
    //@return Vketで使用されるユーザーID
    public string GetUserIDFromPlayerID(string playerID){
        Player otherPlayer = hsPlayerGetByID(playerID);
        return otherPlayer.GetCustomState("UserCode");
    }


    private string GetProfileMessage(){
        return currentProfileInfo_.introduction;
    }
    private int GetFollowNum(){
        return currentProfileInfo_.followCount;
    }
    private int GetFollowerNum(){
        return currentProfileInfo_.followerCount;
    }
    private string GetIconURL(){
        return currentProfileInfo_.iconURL;
    }
    public string GetUserCode(){
        return currentProfileInfo_.vketID;
    }
    public string GetUserName(){
        return currentProfileInfo_.name;
    }
    private VCCViewModel GetVCCViewModelComponent(){
        LayerBundle layerVCC=hsLayerGet("vcc_icon_only_base");
        if(layerVCC===null){
            hsSystemOutput("VCCレイヤーがNULL\n");
            return null;
        }else{
            VCCViewModel vccVM=system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
            if(vccVM===null){
                hsSystemOutput("VCCViewModelコンポーネントがNULL\n");
                return null;
            }else{
                return vccVM;
            }
        }
        return null;
    }
    public string GetCurrentPlayerID(){
        VCCViewModel vccVM=GetVCCViewModelComponent();
        if(vccVM===null){
            return "";   
        }
        list<VCCUserData> userTable=vccVM.GetCurrentUserTable();
        for(int j=0;j<userTable.Count();++j){
            if(userTable[j].UserCode==currentProfileInfo_.vketID){
                return userTable[j].PlayerID;
            }
        }
        return "";
    }
    //最終的なプロフィールウィンドウを表示する
    private void ShowCurrentPlayerProfile(){
        system.Canvas_SetGUIText("other_profile", "prof_id", GetUserCode());
        system.Canvas_SetGUIText("other_profile","prof_name", GetUserName());
        if(system.IsLangEN()){
            system.Canvas_SetGUIText("other_profile","prof_follow_num", "%dFollowing" % GetFollowNum());
            system.Canvas_SetGUIText("other_profile","prof_follower_num", "%dFollowers" % GetFollowerNum());
        }else{
            system.Canvas_SetGUIText("other_profile","prof_follow_num", "%dフォロー中" % GetFollowNum());
            system.Canvas_SetGUIText("other_profile","prof_follower_num", "%dフォロワー" % GetFollowerNum());
        }
        system.Canvas_SetGUIText("other_profile","prof_text",  GetProfileMessage());
        system.Canvas_SetGUIImage("other_profile","prof_avatar_icon",GetIconURL());

        bool isLoggedInOther=currentProfileInfo_.userType=="login";
        hsCanvasResetToggleDefault("logged_in_toggle");
        hsCanvasResetToggleDefault("profile_followuser_toggle");
        hsCanvasResetToggleDefault("other_logged_in_toggle");

        //相手がログインしてないならゲスト表示(名前とIDのみ)
        if(isLoggedInOther){
            hsCanvasToggleChange("other_logged_in_toggle");
            //自分も相手もログインしてるならフル表示
            if(isLoggedIn_){
                //このとき、相手をフォローしているかを取得しておく
                if(currentProfileInfo_.isFollowUser){
                    hsCanvasToggleChange("profile_followuser_toggle");
                }
                //自分==プロフィールならログインしてないのと同じことにする
                //(自分をフォローしたりできないようにする)
                Player thisPlayer=hsPlayerGet();
                string thisVketID=thisPlayer.GetCustomState("UserCode");
                if(thisVketID==GetUserCode()){
                    //hsSystemOutput("選択してるユーザは自分自身\n");
                }else{
                    hsCanvasToggleChange("logged_in_toggle");
                }
            }
        }
        hsCanvasSetLayerShow("other_profile",true);
    }


    //ユーザーのプロフィールをHeliportから取得。対象ユーザーがログイン済みの場合と非ログインの場合で持ってくるものが違う
    //※自分のログイン情報で鳴く、相手のログイン情報なので注意
    private void FetchUserProfile(string userCode,string userType){
        currentProfileInfo_.userType=userType;
        if(userType=="login"){
            api.profiles.fetchUserProfile(_FetchUserProfileCallback,userCode);
        }else{
            api.profiles.fetchUserGuestProfile(_FetchGuestUserProfileCallback,userCode);
        }
    }

    //ゲストプロフィール取得コールバック
    //相手からは「名前」しか取ってこれない
    //取ってきた後は表示まで行う
    void _FetchGuestUserProfileCallback(string param){
        Json user = hsLoadJson(param);
        if(user === null) return;
        string uuid;
        user.FindValueString("uuid", uuid);
        string name;//名前のみとってくる
        user.FindValueString("name", name);
        currentProfileInfo_.name = name;
        currentProfileInfo_.vketID = uuid;
        currentProfileInfo_.iconURL= "gui2023/profile/prof_avatar_icon.png";//デフォルトアイコン
        currentProfileInfo_.introduction="";
        currentProfileInfo_.followCount=0;
        currentProfileInfo_.followerCount=0;
        ShowCurrentPlayerProfile();
        
    }

    //ログイン済みプレイヤー情報取得コールバック
    //相手から、ユーザーID、名前、アイコンURL、自己紹介文、フォロー数、フォロワー数を取ってこれる
    //取ってきた後は表示まで行う
    void _FetchUserProfileCallback(string param){
        Json user = hsLoadJson(param);
        if(user === null) return;

        string vketID;
        user.FindValueString("vket_id", vketID);

        string name;
        user.FindValueString("name", name);

        Json icon;
        icon = user.Find(EJSONDataType_Block, "icon");
        string iconURL="";
        if(icon !== null)
        {
            Json circle = icon.Find(EJSONDataType_Block, "circle");
            if(circle !== null){
                circle.FindValueString("url", iconURL);
            }else{
                iconURL= "gui2023/profile/prof_avatar_icon.png";//デフォルトアイコン
            }
        }else{
            iconURL= "gui2023/profile/prof_avatar_icon.png";//デフォルトアイコン
        }

        string introduction;
        user.FindValueString("introduction", introduction);

        int follow;
        int follower;
        user.FindValueInt("follow_count", follow);
        user.FindValueInt("follower_count", follower);

        // 相手のユーザーデータを更新
        currentProfileInfo_.vketID = vketID;
        currentProfileInfo_.name = name;
        currentProfileInfo_.iconURL= iconURL;
        currentProfileInfo_.introduction=introduction;
        currentProfileInfo_.followCount=follow;
        currentProfileInfo_.followerCount=follower;
        if(isLoggedIn_){
            //FindValueBooleanなんてものはないので…
            Json jsFollow = user.GetData("follow_status");
            string strFollow = jsFollow.GetValue();
            currentProfileInfo_.isFollowUser=(strFollow=="true" ? true : false);
        }else{
            currentProfileInfo_.isFollowUser=false;
        }

        ShowCurrentPlayerProfile();
    }
    void _FetchUserFollowCallback(bool followValid){
        if(followValid){
            hsCanvasToggleChange("profile_followuser_toggle");
        }else{
            hsSystemOutput("フォローできません\n");
        }
    }
    void _FetchUserUnfollowCallback(bool unfollowValid){
        if(unfollowValid){
            hsCanvasToggleChange("profile_followuser_toggle");
        }else{
            hsSystemOutput("フォロー解除できません\n");
        }
    }


    private ProfRejector GetProfileRejector(){
        //対象アバターを見えなくし、アバターターゲッティングも解除する
        LayerBundle optionLayer=hsLayerGet("prof_option_layer");
        if(optionLayer===null){
            return null;
        }
    
        ProfRejector rejector= system.Layer_GetComponentByName<ProfRejector>("prof_option_layer");
        return rejector;
    }

    public void OnClickedButton(string layerName, string btnName){
        if(layerName=="other_profile"){
            if(btnName=="prof_open_myvket"){
                api.profiles.openMyVketProfile(currentProfileInfo_.vketID);
            }else if(btnName=="prof_room"){
                api.profiles.openMyVketMyRoom(currentProfileInfo_.vketID);
            }else if(btnName=="prof_message"){
                api.profiles.openMyVketMessage();
            }else if(btnName=="prof_follow"){
                api.profiles.followUser(_FetchUserFollowCallback,currentProfileInfo_.vketID);
            }else if(btnName=="prof_unfollow"){
                api.profiles.unfollowUser(_FetchUserUnfollowCallback,currentProfileInfo_.vketID);
            }
            else if(btnName == "prof_close")
            {
                // Community
                {
                    LayerBundle layer = hsLayerGet("mainmenu_community_base");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("CommunityMenuViewModel", "OnClickedCloseUserPlate", "");
                    }
                }
            }
            if(btnName=="prof_btn_option"){
                ProfRejector rejector=GetProfileRejector();
                if(rejector===null){
                    hsSystemOutput("rejector is null\n");
                    return;
                }
                rejector.CheckAutority();
                rejector.CheckBlocked();

                hsCanvasResetToggleDefault("block_loginuser_toggle");
                if(currentProfileInfo_.userType=="login"){
                    hsCanvasToggleChange("block_loginuser_toggle");
                }

                hsCanvasSetLayerShow("prof_option_layer",true);
                
            }
        }
    }
}