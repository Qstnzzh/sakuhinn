delegate void fVoidCallback();
delegate void fBoolCallback(bool);
delegate void fStringCallback(string);
delegate void fStringListCallback(list<string>);
delegate void fJsValCallback(JsVal);

extern api.auths{
    void isLoggedIn(async fBoolCallback);
    void login();
}

extern api.avatars{
    void fetchMyAvatarList(async fStringCallback);
    void fetchMyAvatarPageList(async fStringCallback, int, int);
    void fetchMyAvatarToken(async fStringCallback, string, string);
    void fetchOthersAvatarUrl(async fStringListCallback, string, string, string);
}
//ブロック関連
extern api.blocks{
    //引数のユーザがブロックしているユーザかどうかを返す。
    //複数ユーザの場合は","区切りで渡す。
    //その中からブロックされているユーザのカンマ区切りリストがコールバック関数でわかる
    void checkBlockUsers(async fStringCallback,string);

    //対象ユーザをブロックする
    void blockUser(async fStringCallback,string);

    //対象ユーザのブロック解除
    void unblockUser(async fStringCallback,string);
}
//キック等の権限チェック
extern api.conferenceManagerApi{
    //api.conferenceManagerApi.checkPositionChannelAuthority(spatiumCode, worldId, roomId);
    void checkPositionChannelAuthority(async fBoolCallback,string, string, string);
}

//キックやBANの関数
extern api.channelSessionApi{
    //キック
    //kickUserFromPositionChannel(spatiumCode, worldId, roomId, userCode);
    void kickUserFromPositionChannel(async fStringCallback , string, string, string, string);
    //BAN
    //banUserFromPositionChannel(spatiumCode, worldId, roomId, userCode);
    void banUserFromPositionChannel(async fStringCallback , string, string, string, string);
}

//プロフィール関連
extern api.profiles{
    void fetchMyProfile(async fStringCallback);
    void fetchMyGuestProfile(async fStringCallback, string);
    void updateProfile(async fJsValCallback, string, string);
    void updateGuestProfile(async fJsValCallback, string, string, string);
    void fetchUserProfile(async fStringCallback, string);
    void fetchUserGuestProfile(async fStringCallback, string);
    void changeProfileIcon(fVoidCallback, string, bool);//プロフィールアイコンの変更
    void openMyVketUrl(string);//VKetIDで相手のVKetに飛ぶ
    void followUser(async fBoolCallback,string);//指定のVKetIDユーザをフォローする
    void unfollowUser(async fBoolCallback,string);//指定のVKetIDユーザフォローを解除する
    void openMyVketProfile(string);//指定のMyVKetProfileページを開く
    void openMyVketMyRoom(string);//指定VKetIDのマイルームを開く
    void openMyVketMessage();//指定VKetIDのメッセージページを開く
}

extern api.worlds{
    void getWorldList(async fStringCallback, int, int, string, string, string, string);
    void getWorldDetail(async fStringCallback, string, string);
    void getWorldDetailByWorldId(async fStringCallback, string, string);
    void getHousingWorldList(async fStringCallback, int, int, string, string, string);
    void getHousingWorldDetail(async fStringCallback, string, string);
    void likeWorld(async fStringCallback, string, string);
    void unlikeWorld(async fStringCallback, string, string);
}

extern api.routers{
    string getCurrentUrl();//現在のURLを取得する
}

extern socialLink{
    void openSocialLinkForFriends(string,//feature どのソーシャルリンクか(twitter facebook LINE)
                                    string,//lang jpかenか
                                    string,//ワールド名
                                    string//URL
                                    );
}

extern api.textChat{
    void getTextChatList(async fStringCallback, string, string, string, int);
    void getSystemTextList (async fStringCallback, int);
    void sendTextChat(string, string, string, string, string);
    void watchTextChatNotification(string, string, string);
}

extern api.channelSessionApi{
    // （まず最初にこれをする）
    // ChS-API接続（VketSSO認証していない場合はゲスト接続）
    void initChannelSession(async fStringCallback);

    // 自身のプロフィールを取得
    void fetchMyProfile(async fStringCallback);

    // 自身のプロフィールを更新
    void updateMyProfile(async fStringCallback, string, string, string);

    // 指定ワールドの情報取得
    void fetchWolrdDetail(async fStringCallback, string, string);

    // チャンネルセッション情報を取得
    void fetchChannelSession(async fStringCallback);

    // ワールド内座標チャンネル一覧取得
    void fetchWolrdPositionChannelList(async fStringCallback, string, string);

    // 座標チャンネル内音声チャンネル一覧取得
    void fetchPositionChannelVoiceChannelList(async fStringCallback, string);

    // 座標チャンネル入室
    void enterPositionChannel(async fStringCallback, string);

    // 座標チャンネル退室
    void leavePositionChannel(async fStringCallback);

    // 座標チャンネル詳細
    void fetcthPositionChannelDetail(async fStringCallback, string);

    // 音声チャンネル入室
    void enterVoiceChannel(async fStringCallback, string);

    // 音声チャンネル退室
    void leaveVoiceChannel(async fStringCallback);

    // 音声チャンネル詳細
    void fetcthVoiceChannelDetail(async fStringCallback, string);

    // 座標チャンネル新規作成
    void createPositionChannel(async fStringCallback, string, string, string, string, string);

    // 音声チャンネル新規作成
    void createVoiceChannel(async fStringCallback, string, string, string, string);

    // 座標チャンネル情報更新
    void updatePositionChannel(async fStringCallback, string, string , string, string);

    // 音声チャンネル情報更新
    void updateVoiceChannel(async fStringCallback, string, string, string, string);

    // ユーザーIDで座標チャンネル一覧取得
    void fetchSearchUserExistsPositionChannelList(async fStringCallback, string, string, list<string>);
}

extern api.achievement{
    void notifyAction(int, int);
    void watchAchievementNotification();
}

// EC連携
extern api.intermediateEcApi
{
    void initialize();
    void getCart(async fJsValCallback, int, string);
    void getProduct(async fJsValCallback, int);
    void getProducts(async fJsValCallback, int);
    void getProductByLabel(async fJsValCallback, int, string);
    void getProductVariantByLabel(async fJsValCallback, int, string);
    void cartItems(async fJsValCallback, int, string, int, string, bool);
    void addToCart(async fJsValCallback, int, string, string, int);
    void completeCheckout(async fJsValCallback, string);
    void createCart(async fJsValCallback, int);
    void executeCheckout(async fJsValCallback, int, string, string);
    void removeAllCartProducts(async fJsValCallback, int, string);
    void updateCart(async fJsValCallback, int, string, string, string, int);
}

//
extern api.license
{
    void getEcs(async fJsValCallback, string);
}

// コミュニティ機能
extern api.relationships
{
    void followings(async fJsValCallback, string, string, string, string);
    void followers(async fJsValCallback, string, string, string, string);
    void mutualFollowings(async fJsValCallback, string, string, string);
}