//対象ユーザーをキックしたりBANしたりブロックしたりするコンポーネント
component ProfRejector
{
    const string type_block="BlockUserFromProfileID";
    const string type_unblock="UnblockUserFromProfileID";
    const string type_userdata="VCC_UserData";
    list<string> blockedUserCodes_;//自分がブロックしたユーザー
    list<string> temporaryBlockedUserCodes_;//自分が一時ブロックしたユーザー
    list<string> blockerUserCodes_;//自分をブロックしてきたユーザー
    bool hasAuthority_;//BANやキックの権限を持っているのか
    //現在選択中のプロフィール情報は
    //profileModel_が持っている
    public ProfRejector()
    {
        blockedUserCodes_=new list<string>(0);
        temporaryBlockedUserCodes_=new list<string>(0);
        blockerUserCodes_=new list<string>(0);
    }
    public void OnLoaded()
    {

    }

    ///権限チェックを行う
    public void CheckAutority(){
        
        string worldId=hsGetCurrentWorldId();
        string roomId=hel_skyway_get_roomid();
        api.conferenceManagerApi.checkPositionChannelAuthority(_OnCheckAutorityCallback, g_SpatiumCode ,worldId, roomId);
    }

    
    void _OnCheckAutorityCallback(bool hasAuthority){
        //ここのコメントアウトはキック・BANの仕様が決定され次第復活させる
        // hasAuthority_=hasAuthority;
        // hsCanvasResetToggleDefault("prof_room_admin_toggle");
        // if(hasAuthority){
        //     hsCanvasToggleChange("prof_room_admin_toggle");
        // }
    }
    
    //対象のユーザーを通報する
    private void ReportTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;
        string name = profileModel.GetUserName();
        hsWebOpen("https://vket.com/contact");
    }

    //対象のユーザーを強制退室させる
    public void KickTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;
        ProfController profCtrl = GetCurrentProfControllerComponent();
        string userCode = profileModel.GetUserCode();

        string worldId=hsGetCurrentWorldId();
        string roomId=hel_skyway_get_roomid();
        
        Player otherPlayer= hsPlayerGetByID(GetSelectedPlayerID());
        api.channelSessionApi.kickUserFromPositionChannel(_OnKickCallback,g_SpatiumCode,worldId,roomId,userCode);
    }

    //対象のユーザーを入室禁止にする
    public void BanTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;
        string userCode = profileModel.GetUserCode();

        string worldId=hsGetCurrentWorldId();
        string roomId=hel_skyway_get_roomid();

        api.channelSessionApi.banUserFromPositionChannel(_OnBanCallback, g_SpatiumCode,worldId,roomId,userCode);
    }


    private void SetGUIBlocking(){
        hsCanvasResetToggleDefault("temporary_block_toggle");
        hsCanvasResetToggleDefault("temporary_unblock_toggle");
        hsCanvasToggleChange("temporary_block_toggle");
        hsCanvasToggleChange("temporary_unblock_toggle");
    }
    private void SetGUIUnblocking(){
        hsCanvasResetToggleDefault("temporary_block_toggle");
        hsCanvasResetToggleDefault("temporary_unblock_toggle");
    }

    //ブロックコールバック
    void _OnBlockedCallback(string result){

    }
    //ブロック解除コールバック
    void _OnUnblockedCallback(string result){
        
    }



    //キックコールバック
    void _OnKickCallback(string result){

    }
    //入室禁止コールバック
    void _OnBanCallback(string result){
        
    }

    ///ユーザーコードからプレイヤーIDを取得
    string GetPlayerIDFromUserCode(string usercode){
        VCCViewModel vccVM=GetVCCViewModelComponent();
        if(vccVM===null){
            return "";   
        }
        list<VCCUserData> userTable=vccVM.GetCurrentUserTable();
        for(int j=0;j<userTable.Count();++j){
            if(userTable[j].UserCode==usercode){
                return userTable[j].PlayerID;
            }
        }
        return "";
    }
    //ブロックユーザチェックコールバック(ブロックしてるユーザをブロック)
    //一次ブロックではない方
    void _OnCheckedBlockedUsersCallback(string result){
        Json blockJSON = hsLoadJson(result);
        if(blockJSON === null) return;
        Json blockIDs=blockJSON.Find(EJSONDataType_Array,"block_vket_ids");
        if(blockIDs===null){
            hsSystemOutput("block_vket_ids is not array");
            return;
        }
        list<Json> blockList=blockIDs.GetArrayList();
        for(int i=0;i<blockList.Count();++i){
            string id=blockList[i].GetValue();
            AddBlockedUsersList(id);
        }


        VCCViewModel vccVM=GetVCCViewModelComponent();
        if(vccVM===null){
            return;   
        }
        list<VCCUserData> userTable=vccVM.GetCurrentUserTable();
        for(int i=0;i<blockedUserCodes_.Count();++i)
        {

            string uid=blockedUserCodes_[i];
            string playerID=GetPlayerIDFromUserCode(uid);
            if(playerID==""){
                continue;
            }
            //Heliodor側で実際にブロック
            system.Player_SetTemporaryBlock(playerID, true);
            //相手にブロック通知を送信
            hsNetSendCustomData(type_block, playerID);
            //チャットからも見えなくする
            LayerBundle layer = hsLayerGet("vcc_icon_only_base");
            if(layer !== null) 
            {
                layer.CallComponentMethod("VCCViewModel", "Block", uid);
            }
        }
    }

    //対象のユーザーを一時的にブロックする
    public void TemporaryBlockTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;

        // string name = profileModel.GetUserName();
        // hsSystemOutput("%sを一次ブロック\n" % name );
        
        string blockPlayerID= GetSelectedPlayerID();
        if(blockPlayerID==""){
            hsSystemOutput("Selected Player ID is null\n");
            return;
        }
        //Heliodor側で実際にブロック
        system.Player_SetTemporaryBlock(blockPlayerID, true);
        //相手にブロック通知を送信
        hsNetSendCustomData(type_block, blockPlayerID);
        
        string userCode = profileModel.GetUserCode();
        AddTemporaryBlockedUsersList(userCode);

        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
        if(layer !== null) 
        {
            layer.CallComponentMethod("VCCViewModel", "BlockTempolary", userCode);
        }

        SetGUIBlocking();

        DeactivateSelectedPlayer();
    }

    //「ブロックしてきた」ユーザーリストへ追加
    private void AddBlockerUsersList(string userCode){
        if(!IsBlockerUserCode(userCode)){
            blockerUserCodes_.Add(userCode);
        }
    }
    private void RemoveBlockerUsersList(string userCode){
        for( int i=0;i<blockerUserCodes_.Count();++i){
            if(blockerUserCodes_[i]==userCode){
                blockerUserCodes_.RemoveAt(i);
                return;
            }
        }
    }

    //「ブロック」ユーザーリストへ追加
    private void AddBlockedUsersList(string userCode){
        if(!IsBlockedUserCode(userCode)){
            blockedUserCodes_.Add(userCode);
        }
    }
    //「ブロック」ユーザーリストから削除
    //(仕様上使わないかも)
    // private void RemoveBlockedUsersList(string userCode){
    //     for( int i=0;i<blockedUserCodes_.Count();++i){
    //         if(blockedUserCodes_[i]==userCode){
    //             blockedUserCodes_.RemoveAt(i);
    //             return;
    //         }
    //     }
    // }

    //「一時ブロック」ユーザーリストへ追加
    private void AddTemporaryBlockedUsersList(string userCode){
        if(!IsTemporaryBlockedUserCode(userCode)){
            temporaryBlockedUserCodes_.Add(userCode);
        }
    }

    //「一時ブロック」ユーザーリストから削除
    private void RemoveTemporaryBlockedUsersList(string userCode){
        for( int i=0;i<temporaryBlockedUserCodes_.Count();++i){
            if(temporaryBlockedUserCodes_[i]==userCode){
                temporaryBlockedUserCodes_.RemoveAt(i);
                return;
            }
        }
    }
    public void TemporaryUnblockTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;

        // string name = profileModel.GetUserName();
        // hsSystemOutput("%s is profile\n" % name);
        string blockPlayerID= GetSelectedPlayerID();
        if(blockPlayerID==""){
            return;
        }

        string userCode = profileModel.GetUserCode();
        RemoveTemporaryBlockedUsersList(userCode);


        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
        if(layer !== null) 
        {
            layer.CallComponentMethod("VCCViewModel", "UnBlockTempolary", userCode);
        }

        //Heliodor側で実際にブロック
        system.Player_SetTemporaryBlock(blockPlayerID, false);
        //相手にブロック通知を送信
        hsNetSendCustomData(type_unblock, blockPlayerID);
        SetGUIUnblocking();
    }

    private void DeactivateSelectedPlayer(){
        //対象アバターを見えなくし、アバターターゲッティングも解除する
        LayerBundle avatarLayer=hsLayerGet("avatar_target");
        if(avatarLayer!==null){
            ProfController controller= system.Layer_GetComponentByName<ProfController>("avatar_target");
            if(controller!==null){
                controller.DeactivateLockedPlayer();
            }
        }
    }
    private string GetSelectedPlayerID(){
        //対象アバターを見えなくし、アバターターゲッティングも解除する
        LayerBundle otherprofileLayer=hsLayerGet("other_profile");
        if(otherprofileLayer!==null){
            
            ProfileModel model= system.Layer_GetComponentByName<ProfileModel>("other_profile");
            if(model!==null){
                return model.GetCurrentPlayerID();
            }
        }
        return "";
    }

    //ブロック済みユーザーコード(VKetID)一覧を取得する
    public list<string> GetBlockedUsers(){
        return blockedUserCodes_;
    }
    //対象のユーザーを完全にブロックする
    public void BlockTargetUser(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;

        string name = profileModel.GetUserName();
        string blockPlayerID= GetSelectedPlayerID();
        if(blockPlayerID!=""){
                
            //Heliodor側で実際にブロック
            system.Player_SetTemporaryBlock(blockPlayerID, true);
            //相手にブロック通知を送信
            hsNetSendCustomData(type_block, blockPlayerID);
        }

        

        string vketid = profileModel.GetUserCode();
        api.blocks.blockUser(_OnBlockedCallback,vketid);
        AddBlockedUsersList(vketid);
        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
        if(layer !== null) 
        {
            layer.CallComponentMethod("VCCViewModel", "Block", vketid);
        }

        //SetGUIBlocking();

        DeactivateSelectedPlayer();
        
    }

    private void SetUserNameToGUIProfileText(){
        ProfileModel profileModel=GetCurrentProfileModelComponent();
        if(profileModel===null)return;
        string name = profileModel.GetUserName();
        system.Canvas_SetGUIText("prof_option_forced_exit_dialog","prof_name_text",  name);
        system.Canvas_SetGUIText("prof_option_no_entry_dialog","prof_name_text",  name);
        system.Canvas_SetGUIText("prof_option_temporary_block_dialog","prof_name_text",  name);
        system.Canvas_SetGUIText("prof_option_block_dialog","prof_name_text",  name);

    }

    //入室イベントが発生するたびにブロックチェックをコール
    private void OnEnterThisRoom(string usercode){
        string ids=GetOtherUserCodesString();
        api.blocks.checkBlockUsers(_OnCheckedBlockedUsersCallback,ids);

        //もし一次ブロック対象もしくはブロック対象だったら...相手がリロードしたって事
        if(IsTemporaryBlockedUserCode(usercode) || IsBlockedUserCode(usercode)){
            string playerID=GetPlayerIDFromUserCode(usercode);
            if(playerID==""){
                return;
            }
            //自分は除外
            Player player=hsPlayerGet();
            if(playerID==player.GetID()){
                return;
            }

            // //Heliodor側で実際にブロック
            system.Player_SetTemporaryBlock(playerID, true);
            // //相手にブロック通知を送信
            hsNetSendCustomData(type_block, playerID);
            //グレーアウト
            LayerBundle layer = hsLayerGet("vcc_icon_only_base");
            if(layer !== null) 
            {
                layer.CallComponentMethod("VCCViewModel", "BlockTempolary", usercode);
            }
        }
    }

    public bool IsBlockerUserCode(string usercode){
        for( int i=0;i<blockerUserCodes_.Count();++i){
            if(blockerUserCodes_[i]==usercode){
                return true;
            }
        }
        return false;
    }

    //特定のユーザーコードが「ブロック」されているか
    //ブロックされていたらtrue,されてなければfalseを返す
    public bool IsBlockedUserCode(string usercode){
        for( int i=0;i<blockedUserCodes_.Count();++i){
            if(blockedUserCodes_[i]==usercode){
                return true;
            }
        }
        return false;
    }

    //特定のユーザーコードが「一時ブロック」されているか
    //ブロックされていたらtrue,されてなければfalseを返す
    public bool IsTemporaryBlockedUserCode(string usercode){
        for( int i=0;i<temporaryBlockedUserCodes_.Count();++i){
            if(temporaryBlockedUserCodes_[i]==usercode){
                return true;
            }
        }
        return false;
    }


    public void OnReceiveCustomState(string id, string type, string data)
    {
        if(type == type_userdata)
        {
            // dataを解析してVketID(user_code)を取得する
            Json UserJson = hsLoadJson(data);
            if(UserJson === null) return;
            

            string user_code;
            UserJson.FindValueString("user_code", user_code);

            Player thisPlayer = hsGetPlayer();
            if(user_code=="" || user_code==thisPlayer.GetID()){
                return;
            }
            OnEnterThisRoom(user_code);
        }
    }
    //ネットワークカスタムデータ受信イベント
    //id : 送信相手ID(Heliodorはこいつを一次ブロック状態にする)
    //type : "BlockUserFromProfileUI"
    //data : typeが"BlockUserFromProfileUI"の時、ブロックされたIDが入っている予定。
    public void OnReceiveCustomData(string id, string type, string data){
        if(type==type_block){
            //自分プレイヤー取得
            Player player=hsPlayerGet();
            //自分が対象だったら(つまり相手にブロックされた)
            if(data==player.GetID()){
                //ブロックしてきた相手をHeliodor側でブロック
                system.Player_SetTemporaryBlock(id, true);
                VCCViewModel vcc=GetVCCViewModelComponent();
                if(vcc !== null) 
                {
                    list<VCCUserData> userTable=vcc.GetCurrentUserTable();
                    string usercode="";
                    for(int i=0;i<userTable.Count();++i){
                        if(userTable[i].PlayerID==id){
                            usercode=userTable[i].UserCode;
                            break;
                        }

                    }
                    if(usercode!=""){
                        AddBlockerUsersList(usercode);
                    }
                }
            }
        }else if(type==type_unblock){
            //自分プレイヤー取得
            Player player=hsPlayerGet();
            //自分が対象だったら(つまり相手にブロック解除された)
            if(data==player.GetID()){
                //ブロックしてきた相手をHeliodor側でブロック解除
                system.Player_SetTemporaryBlock(id, false);
                VCCViewModel vcc=GetVCCViewModelComponent();
                if(vcc !== null) 
                {
                    list<VCCUserData> userTable=vcc.GetCurrentUserTable();
                    string usercode="";
                    for(int i=0;i<userTable.Count();++i){
                        if(userTable[i].PlayerID==id){
                            usercode=userTable[i].UserCode;
                            break;
                        }

                    }
                    if(usercode!=""){
                        RemoveBlockerUsersList(usercode);
                    }
                }
            }
        }
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
    private ProfController GetCurrentProfControllerComponent(){
        LayerBundle layerProfile=hsLayerGet("other_profile");
        if(layerProfile===null){
            hsSystemOutput("other_profileレイヤーがNULL\n");
            return null;
        }else{
            ProfController profileCtrl=system.Layer_GetComponentByName<ProfController>("other_profile");
            if(profileCtrl===null){
                hsSystemOutput("other_profileのProfControllerコンポーネントがNULL\n");
                return null;
            }else{
                return profileCtrl;
            }
        }
        return null;
    }
    private ProfileModel GetCurrentProfileModelComponent(){
        LayerBundle layerProfile=hsLayerGet("other_profile");
        if(layerProfile===null){
            hsSystemOutput("other_profileレイヤーがNULL\n");
            return null;
        }else{
            ProfileModel profileModel=system.Layer_GetComponentByName<ProfileModel>("other_profile");
            if(profileModel===null){
                hsSystemOutput("other_profileのProfileModelコンポーネントがNULL\n");
                return null;
            }else{
                return profileModel;
            }
        }
        return null;
    }
        //自分以外のVketIDを取得する
    private list<VCCUserData> GetOtherUserVketIDs(){
        VCCViewModel vccvm= GetVCCViewModelComponent();
        list<VCCUserData> userlist= vccvm.GetCurrentUserTable();
        return userlist;
    }
    //自分以外のVketIDを取得する
    private string GetOtherUserCodesString(){
        VCCViewModel vccvm= GetVCCViewModelComponent();
        list<VCCUserData> userlist= vccvm.GetCurrentUserTable();
        string strRet="";
        for(int i=0;i<userlist.Count();++i){
            Player player=hsPlayerGet();
            if(userlist[i].PlayerID=="" || userlist[i].PlayerID==player.GetID()){
                continue;
            }
            //if(userlist[i].UserType=="login"){
                strRet += userlist[i].UserCode;
                if(i<userlist.Count()-1){
                    strRet += ",";
                }
            //}
        }
        return strRet;
    }
    public void CheckBlocked(){
        string playerID=GetSelectedPlayerID();
        VCCViewModel vccVM=GetVCCViewModelComponent();
        list<VCCUserData> userTable=vccVM.GetCurrentUserTable();
        for(int j=0;j<userTable.Count();++j){
            if(userTable[j].PlayerID==playerID){
                if(IsTemporaryBlockedUserCode(userTable[j].UserCode)){
                    SetGUIBlocking();
                }else{
                    SetGUIUnblocking();
                }
                //ブロックの時も見えなくする(ブロック解除は、なし)
                if(IsBlockedUserCode(userTable[j].UserCode)){
                    SetGUIBlocking();
                }
                break;
            }
        }
    }
    //他のGUIボタンが押された→選択解除
    public void OnClickedButton(string layerName,string btnName){
        if(layerName=="prof_option_layer"){
            string strIds = GetOtherUserCodesString();
            if(btnName=="prof_option_btn_report"){
                ReportTargetUser();
                return;
            }else if(btnName=="prof_option_btn_temporary_unblock"){
                TemporaryUnblockTargetUser();
            }
            SetUserNameToGUIProfileText();
        }
        else if(layerName=="prof_option_forced_exit_dialog"){//強制退室ダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            KickTargetUser();
        }else if(layerName=="prof_option_no_entry_dialog"){//入室禁止ダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            BanTargetUser();
        }else if(layerName=="prof_option_temporary_block_dialog"){//一次ブロックダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            TemporaryBlockTargetUser();
        }else if(layerName=="prof_option_block_dialog"){//完全ブロックダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            BlockTargetUser();
        }
    }


}