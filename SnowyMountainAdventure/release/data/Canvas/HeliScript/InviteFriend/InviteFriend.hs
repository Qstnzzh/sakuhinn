
component InviteFriend
{
    public InviteFriend()
    {
    }
    public void OnLoaded()
    {
        ShowQRCode();
    }

    //招待リンクを返す
    // public string GetInviteURL(){
    //     //ひとまずダミーの招待リンク
    //     return "https://vket.com/";
    // }

    //QRコードの表示
    public void ShowQRCode(){
        //ひとまずダミーのWikipediaQRコードリンクを貼っておく
        //ひとまず、現バージョンではQRコードはなし
        //hsCanvasSetGUIImage("invite_friend","invite_qr_code","gui2023/invite/invite_qr_code.png");
    }
    // private string GetWorldName(){
    //     return "MyRoom-curo_cop";
    // }
    // private string GetWorldID(){
    //     return "MyRoom-curo_cop";
    // }
    // private string GetRoomID(){
    //     return "pub_9Q68Jhifk3PupE4p35";
    // }
    // private string GetVKetBaseURL(){
    //     return "https://vket.com/?";
    // }
    // private string GetTwitterURL(){
    //     string baseUrl="https://twitter.com/intent/tweet?";
        
    //     string inviteUrl = "url=";
    //     inviteUrl=inviteUrl+GetVKetBaseURL();
    //     inviteUrl=inviteUrl+GetWorldID();
    //     inviteUrl=inviteUrl+"%26multi=1%26roomid=";
    //     inviteUrl=inviteUrl+GetRoomID();
    //     inviteUrl=inviteUrl+"";

    //     string text = "&text=今";
    //     text=text+GetWorldName();
    //     text=text+"にいます。メタバースで一緒に遊びましょう";
        
    //     string hashtags = "%0a%23VketCloud";

    //     string ret=baseUrl;
    //     ret=ret+inviteUrl;
    //     ret=ret+text;
    //     ret=ret+hashtags;
    //     return ret;
    // }
    // private string GetFacebookURL(){
    //     string baseUrl="https://www.facebook.com/sharer/sharer.php?";
        
    //     string inviteUrl = "u=";
    //     inviteUrl=inviteUrl+GetVKetBaseURL();
    //     inviteUrl=inviteUrl+GetWorldID();
    //     inviteUrl=inviteUrl+"%26multi=1%26roomid=";
    //     inviteUrl=inviteUrl+GetRoomID();
    //     inviteUrl=inviteUrl+"";

    //     string text = "&text=今";
    //     text=text+GetWorldName();
    //     text=text+"にいます。メタバースで一緒に遊びましょう";
        
    //     string hashtags = "%0a%23VketCloud";

    //     string ret=baseUrl;
    //     ret=ret+inviteUrl;
    //     return ret;
    // }
    // private string GetLineURL(){
    //     string baseUrl="https://timeline.line.me/social-plugin/share?";
        
    //     string inviteUrl = "url=";
    //     inviteUrl=inviteUrl+GetVKetBaseURL();
    //     inviteUrl=inviteUrl+GetWorldID();
    //     inviteUrl=inviteUrl+"%26multi=1%26roomid=";
    //     inviteUrl=inviteUrl+GetRoomID();
    //     inviteUrl=inviteUrl+"";

    //     string text = "&text=今";
    //     text=text+GetWorldName();
    //     text=text+"にいます。メタバースで一緒に遊びましょう";
        
    //     string hashtags = "%0a%23VketCloud";

    //     string ret=baseUrl;
    //     ret=ret+inviteUrl;
    //     ret=ret+text;
    //     return ret;
    // }
    private void OpenSocialLink(string socialName){
    
        socialLink.openSocialLinkForFriends( 
                                        socialName,//feature どのソーシャルリンクか(twitter facebook LINE)
                                        "ja",//lang jpかenか(現在は現在は判別方法がないためjaを入れている)
                                        hsGetCurrentWorldId(),//
                                        api.routers.getCurrentUrl()//URL
                                        );

    }
    //GUIボタンが押された
    public void OnClickedButton(string layerName,string btnName){
        //招待ボタン
        if(layerName=="invite_friend"){
            if(btnName=="copy_invite_link_btn"){
                hsClipBoardWriteText(api.routers.getCurrentUrl());
                hsCanvasSetLayerShow("invite_friend_copied",true);
            }else if(btnName=="invite_btn_facebook"){
                //hsWebOpen(GetFacebookURL());
                OpenSocialLink("facebook");
            }else if(btnName=="invite_btn_line"){
                //hsWebOpen(GetLineURL());
                OpenSocialLink("LINE");
            }else if(btnName=="invite_btn_twitter"){
                //hsWebOpen(GetTwitterURL());
                OpenSocialLink("twitter");
            }
        }
    }
}