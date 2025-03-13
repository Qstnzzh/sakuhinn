int ETextParamType_RoomID = 1;
int ETextParamType_OperateCanvas = 9;
int ETextParamType_ReplaceMyAvatar = 10;
int ETextParamType_OperateFunctionFlag = 19;
int ETextParamType_ReplaceMyAvatarCustom = 29;
int ETextParamType_ReplaceMyAvatarIcon = 35;
int ETextParamType_StopVideo = 44;
int ETextParamType_ReplaceMyAvatarIconCustom = 46;
int ETextParamType_CheckRestriction = 52;
int ETextParamType_ReplaceFilteredAvatar = 53;
int ETextParamType_ClearMyAvatarCustomMotion = 54;
int ETextParamType_CreateMyAvatarCustomMotion = 55;
int ETextParamType_CreateMyAvatarCustomEmotion = 56;
int ETextParamType_CreateMyAvatarCustomObject = 57;
int ETextParamType_SetVideoRecording = 65;
int ETextParamType_SetGenericWindowState = 71;
delegate void OnLoadedCallback();
delegate void OnResizeGenericCallback();
delegate void ConvertWebmToMp4Callback(string);
delegate void AddEnterDialogFuncCallback();
delegate void NetConnectCallback();

extern
{
    // Setter
    int hel_setText(int, string);
    void hel_set_cookie(string, string);

    // Getter
    string hel_get_cookie_onEmptyStr(string);
    string hel_get_randomUUID();
    
    string hel_get_vcuid();
    string hel_get_worldid();

    bool hel_isLangJa();

    bool hel_isSupported_PVRTC();
    bool hel_isSupported_ETC2();
    bool hel_isSupported_ASTC();
    bool hel_isSupported_DXT();

    // Canvas
    string hel_get_HTMLElement_value(string);

    void hel_update_TextField_UserName();
    void hel_post_TextField_UserName(bool);
    void hel_set_TextField_UserName(string);
    void hel_set_HTMLElement_value(string, string);
    void hel_set_HTMLElement_visibility(string, bool);

    void hel_onloaded_add(OnLoadedCallback);
    
    // VideoRecorder
    void hel_release_RecordedVideo();
    void hel_start_VideoRecording();
    void hel_stop_VideoRecording();
    void hel_open_recorded_video_preview();
    void hel_convert_webm_to_mp4(async ConvertWebmToMp4Callback);
    void hel_save_recorded_video(string);  

    // Network
    int hel_skyway_get_avatar();
    string hel_get_skyway_username();

    void hel_skyway_receive_data(string, string, string);
    void hel_skyway_send_data(string);

    void hel_net_connect();
    void hel_net_disconnect();

    void hel_net_connect_room(string);
    void hel_net_disconnect_room();

    void hel_skyway_set_roomid(string);
    string hel_skyway_get_roomid();
    void hel_net_add_EnterDialog_func(AddEnterDialogFuncCallback);
    void hel_net_replace_room_url_with_roomid(string);
}