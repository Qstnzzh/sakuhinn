

const string other_profile_layer="other_profile";

component ProfController
{
    Vector2 currentPos_;
    Vector3 currentPlayerPos_;
    string currentPlayerID_;
    bool isLoggedIn_;
    bool isHideTarget_;
    const float target_offset_y=0.9;//90cmくらいをターゲット位置に

    const float target_offset_yrate=0.67;//身長の2/3くらいをターゲット位置に
    int count_;

    ProfileModel profileModel_;

    Player currentLockingPlayer_;

    public ProfController()
    {
        isLoggedIn_=false;
        currentPos_=new Vector2();
        currentPlayerPos_=new Vector3();
        //isShownTarget_=false;
        isHideTarget_=false;
        count_=0;
        currentLockingPlayer_=null;
        profileModel_=null;
    }
    public void OnLoaded()
    {
        DeactivateTarget();
    }

    public void DrawTargetGUI(float x, float y,bool changeFlg){
        if(changeFlg){
            hsCanvasToggleChange("avatar_target_image_1_toggle");
            hsCanvasToggleChange("avatar_target_image_2_toggle");
        }
        hsCanvasSetGUIPos("avatar_target",hsCanvasIsPortrait(),"avatar_target_image_1",x,y);
        hsCanvasSetGUIPos("avatar_target",hsCanvasIsPortrait(),"avatar_target_image_2",x,y);
        hsCanvasSetGUIPos("avatar_target",hsCanvasIsPortrait(),"profile_btn",x,y);
    }

    private void HideTargetCircle(){
        hsCanvasResetToggleDefault("avatar_target_image_1_toggle");
        hsCanvasResetToggleDefault("avatar_target_image_2_toggle");
        hsCanvasResetToggleDefault("avatar_profile_toggle");
        isHideTarget_=true;
    }

    //ターゲッティングを無効にする
    private void DeactivateTarget(){
        g_AvatarTargetInfo.isShownTarget=false;
        HideTargetCircle();
        currentPlayerID_="";
    }
    //ターゲッティングを有効にする
    private void ActivateTarget(){
        hsCanvasToggleChange("avatar_target_image_1_toggle");
        hsCanvasToggleChange("avatar_profile_toggle");
        g_AvatarTargetInfo.isShownTarget=true;
        isHideTarget_=false;
    }
    private bool IsSelectableAvatar(Player player){
        if(player===null){
            return false;
        }
        Player myPlayer=hsPlayerGet();
        //20m以内ならtrue
        Vector3 playerPos = player.GetPos();
        Vector3 myPlayerPos = myPlayer.GetPos();
        return playerPos.Distance(myPlayerPos)<=20.0f;
    }
    //他のノードオブジェクトがクリックされた→(選択解除)
    public void OnClickNode(int nodeIndex){
        DeactivateTarget();
    }
    //何もクリックされなかった→選択解除
    public void OnClickEmpty(){
        DeactivateTarget();
    }
    //他のGUIボタンが押された→選択解除
    public void OnClickedButton(string layerName,string btnName){
        if(layerName=="other_profile"){//プロフィール表示中はアバター選択を解除しない

        }else{
            if(layerName=="avatar_target"){
                if(btnName=="avatar_target_base_btn"){
                    //なにもしない
                }else if(btnName == "profile_btn"){
                    api.auths.isLoggedIn(_LoggedInCallbackForFindUserData);            
                }
            }else{
                //選択解除
                DeactivateTarget();
            }
        }
    }
    void _LoggedInCallbackForFindUserData(bool loginValid){
        isLoggedIn_=loginValid;
        LayerBundle layer=hsLayerGet(other_profile_layer);
        if(layer===null){
            profileModel_=null;
        }else{
            profileModel_=system.Layer_GetComponentByName<ProfileModel>(other_profile_layer);
            profileModel_.FindUserDataAndShowProfile(currentPlayerID_,loginValid);
        }
    }

    private void UpdateCurrentPlayerPos(){
        Vector3 playerPos=currentLockingPlayer_.GetPos();
        currentPlayerPos_=playerPos;
        

        float height=currentLockingPlayer_.GetHeadHeight();
        if(height==0.0){
            currentPlayerPos_.y+=target_offset_y;//デフォだと足元なので補正(headボーンがない場合に規定値に)
        }else{
            currentPlayerPos_.y+=currentLockingPlayer_.GetHeadHeight()*target_offset_yrate;//デフォだと足元なので補正(目線の2/3に)
        }
    }

    //アバタークリック
    public void OnClickedAvatar(string playerID)
    {
        Player player=hsPlayerGetByID(playerID);
        if(player!==null){
            if(IsSelectableAvatar(player)){

                currentLockingPlayer_=player;
                UpdateCurrentPlayerPos();

                hsCanvasSetLayerShow("avatar_target", true);
                

                float px,py;
                hsCanvasWorldToScreenPos(currentPlayerPos_,px,py);
                currentPos_.x=px;
                currentPos_.y=py;
                
                //一旦デフォルトに戻す
                DeactivateTarget();
                currentPlayerID_=playerID;//DeactivateでCurrentPlayerID_がリセットされるためここに記述
                ActivateTarget();
                
                DrawTargetGUI(px,py,true);
            }
        }else{
            currentPlayerID_="";
            DeactivateLockedPlayer();
        }
        
    }
    //現在選択中のプレイヤー情報を返す
    public Player GetCurrentLockingPlayer(){
        return currentLockingPlayer_;
    }
    public void DeactivateLockedPlayer(){
        currentLockingPlayer_=null;
        currentPlayerID_="";
        DeactivateTarget();
    }
    void Update(){
        if(!g_AvatarTargetInfo.isShownTarget){
            return;
        }
        count_ = (count_+1)%60;
        if(count_%5==0){
            if(IsSelectableAvatar(currentLockingPlayer_)){
                UpdateCurrentPlayerPos();
                float px,py;
                hsCanvasWorldToScreenPos(currentPlayerPos_,px,py);
                 //変換した結果px=0.0,py=0.0ならば無効と言う事で、一時的にターゲットを非表示とする
                if(px==0.0 && py==0.0){
                    HideTargetCircle();    
                } else{
                    //もし一度隠されて再表示一回目ならActivateしなおす
                    if(isHideTarget_){
                        ActivateTarget();
                    }
                    currentPos_.x=px;
                    currentPos_.y=py;
                    DrawTargetGUI(currentPos_.x,currentPos_.y,count_==0);
                }
            }else{
                DeactivateTarget();
            }
            
        }
    }
}