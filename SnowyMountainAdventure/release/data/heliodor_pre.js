(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // EmscriptenBuild/src/const.ts
  var HeliodorSDKVersion, worldViewerWindow, HEL_AUDIO_TYPE_WORLD, HEL_AUDIO_TYPE_VOICE, HEL_AUDIO_TYPE_SE, HEL_AUDIO_TYPE_SYSTEMSE, HEL_AUDIO_TYPE_VIDEO, HEL_VIDEO_PLAYER_DEFAULT, HEL_VIDEO_PLAYER_IVS, HEL_VIDEO_PLAYER_HLS, ETextParamType_WorldID, ETextParamType_RoomID, ETextParamType_SpotName, ETextParamType_LocationHref, ETextParamType_ShowWorldSelect, ETextParamType_Logined, ETextParamType_CanvasFileName, ETextParamType_CurrentUserName, ETextParamType_SceneItem, ETextParamType_OperateCanvas, ETextParamType_ReplaceMyAvatar, ETextParamType_PlayVideo, ETextParamType_NamePlateTextureFileName0, ETextParamType_NamePlateTextureFileName1, ETextParamType_NamePlateTextureFileName2, ETextParamType_NamePlateMicMuteTextureFileName, ETextParamType_NamePlateMicOnTextureFileName, ETextParamType_NamePlateMicTalkingTextureFileName, ETextParamType_SetMicState, ETextParamType_OperateFunctionFlag, ETextParamType_CopyVideoFrameToSystem, ETextParamType_CancelToCopyVideoFrameToSystem, ETextParamType_SetMicTalkingState, ETextParamType_WarpPlayer, ETextParamType_PlayerMoveEnable, ETextParamType_PlayItem, ETextParamType_StopItem, ETextParamType_ShowItem, ETextParamType_HideItem, ETextParamType_ReplaceMyAvatarCustom, ETextParamType_SceneJson, ETextParamType_ScriptCallComponentMethod, ETextParamType_AvatarFileName, ETextParamType_GUIDebugInput, ETextParamType_HeliodorSDKVersion, ETextParamType_ReplaceMyAvatarIcon, ETextParamType_SetItemFileName, ETextParamType_SetFollowCameraDistance, ETextParamType_SetFollowCameraRotate, ETextParamType_SetFollowCameraHeight, ETextParamType_AddFurniture, ETextParamType_SetPlayerRotate, ETextParamType_PlayEmote, ETextParamType_GetAvatarHeight, ETextParamType_StopVideo, ETextParamType_IsPlayVideo, ETextParamType_ReplaceMyAvatarIconCustom, ETextParamType_IsLoading, ETextParamType_SubSceneItem, ETextParamType_SceneOwner, ETextParamType_VideoEnded, ETextParamType_GlobalFileName, ETextParamType_CheckRestriction, ETextParamType_ReplaceFilteredAvatar, ETextParamType_ClearMyAvatarCustomMotion, ETextParamType_CreateMyAvatarCustomMotion, ETextParamType_CreateMyAvatarCustomEmotion, ETextParamType_CreateMyAvatarCustomObject, ETextParamType_SetDateNow, ETextParamType_SetCRPMode, ETextParamType_SetPlayerPriority, ETextParamType_OnStartScreenShare, ETextParamType_OnStopScreenShare, ETextParamType_OnReceivedStartScreenShare, ETextParamType_OnReceivedStopScreenShare, ETextParamType_SetVideoRecording, ETextParamType_SetRoomURL, ETextParamType_IsUseGamePad, ETextParamType_ScriptCallCanvasComponentMethod, ETextParamType_HomeJson, ETextParamType_HomeJsonWithTemplate, ETextParamType_SetGenericWindowState, ETextParamType_OnChangedMicPermissionState, ETextParamType_IsUseMyAvatar, ETextParamType_OnPlayScreenShare, ETextParamType_CompImageListFileName, ETextParamType_OnSendTextChat, ETextParamType_SetItemProperty, EBinaryParamType_FullBodyTrackingData, EBinaryParamType_Unlink, EBinaryParamType_SetGUIImage, MOBILE_USER_AGENT_REGS, IPHONE_USER_AGENT_REGS, INITIAL_MIXER_SETTING, INITIAL_MIXER_REAL_SETTING, INITIAL_MIXER_FADER_SETTING, INITIAL_MIXER_DISTANCE_SETTING, INITIAL_MIXER_MUTE_SETTING, SKYWAY_API_HOST;
  var init_const = __esm({
    "EmscriptenBuild/src/const.ts"() {
      "use strict";
      HeliodorSDKVersion = "9.11";
      worldViewerWindow = window;
      HEL_AUDIO_TYPE_WORLD = 0;
      HEL_AUDIO_TYPE_VOICE = 1;
      HEL_AUDIO_TYPE_SE = 2;
      HEL_AUDIO_TYPE_SYSTEMSE = 3;
      HEL_AUDIO_TYPE_VIDEO = 4;
      worldViewerWindow.HEL_AUDIO_TYPE_WORLD = HEL_AUDIO_TYPE_WORLD;
      worldViewerWindow.HEL_AUDIO_TYPE_VOICE = HEL_AUDIO_TYPE_VOICE;
      worldViewerWindow.HEL_AUDIO_TYPE_SE = HEL_AUDIO_TYPE_SE;
      worldViewerWindow.HEL_AUDIO_TYPE_SYSTEMSE = HEL_AUDIO_TYPE_SYSTEMSE;
      worldViewerWindow.HEL_AUDIO_TYPE_VIDEO = HEL_AUDIO_TYPE_VIDEO;
      HEL_VIDEO_PLAYER_DEFAULT = 0;
      HEL_VIDEO_PLAYER_IVS = 1;
      HEL_VIDEO_PLAYER_HLS = 2;
      worldViewerWindow.HEL_VIDEO_PLAYER_DEFAULT = HEL_VIDEO_PLAYER_DEFAULT;
      worldViewerWindow.HEL_VIDEO_PLAYER_IVS = HEL_VIDEO_PLAYER_IVS;
      worldViewerWindow.HEL_VIDEO_PLAYER_HLS = HEL_VIDEO_PLAYER_HLS;
      ETextParamType_WorldID = 0;
      ETextParamType_RoomID = 1;
      ETextParamType_SpotName = 2;
      ETextParamType_LocationHref = 3;
      ETextParamType_ShowWorldSelect = 4;
      ETextParamType_Logined = 5;
      ETextParamType_CanvasFileName = 6;
      ETextParamType_CurrentUserName = 7;
      ETextParamType_SceneItem = 8;
      ETextParamType_OperateCanvas = 9;
      ETextParamType_ReplaceMyAvatar = 10;
      ETextParamType_PlayVideo = 11;
      ETextParamType_NamePlateTextureFileName0 = 12;
      ETextParamType_NamePlateTextureFileName1 = 13;
      ETextParamType_NamePlateTextureFileName2 = 14;
      ETextParamType_NamePlateMicMuteTextureFileName = 15;
      ETextParamType_NamePlateMicOnTextureFileName = 16;
      ETextParamType_NamePlateMicTalkingTextureFileName = 17;
      ETextParamType_SetMicState = 18;
      ETextParamType_OperateFunctionFlag = 19;
      ETextParamType_CopyVideoFrameToSystem = 20;
      ETextParamType_CancelToCopyVideoFrameToSystem = 21;
      ETextParamType_SetMicTalkingState = 22;
      ETextParamType_WarpPlayer = 23;
      ETextParamType_PlayerMoveEnable = 24;
      ETextParamType_PlayItem = 25;
      ETextParamType_StopItem = 26;
      ETextParamType_ShowItem = 27;
      ETextParamType_HideItem = 28;
      ETextParamType_ReplaceMyAvatarCustom = 29;
      ETextParamType_SceneJson = 30;
      ETextParamType_ScriptCallComponentMethod = 31;
      ETextParamType_AvatarFileName = 32;
      ETextParamType_GUIDebugInput = 33;
      ETextParamType_HeliodorSDKVersion = 34;
      ETextParamType_ReplaceMyAvatarIcon = 35;
      ETextParamType_SetItemFileName = 36;
      ETextParamType_SetFollowCameraDistance = 37;
      ETextParamType_SetFollowCameraRotate = 38;
      ETextParamType_SetFollowCameraHeight = 39;
      ETextParamType_AddFurniture = 40;
      ETextParamType_SetPlayerRotate = 41;
      ETextParamType_PlayEmote = 42;
      ETextParamType_GetAvatarHeight = 43;
      ETextParamType_StopVideo = 44;
      ETextParamType_IsPlayVideo = 45;
      ETextParamType_ReplaceMyAvatarIconCustom = 46;
      ETextParamType_IsLoading = 47;
      ETextParamType_SubSceneItem = 48;
      ETextParamType_SceneOwner = 49;
      ETextParamType_VideoEnded = 50;
      ETextParamType_GlobalFileName = 51;
      ETextParamType_CheckRestriction = 52;
      ETextParamType_ReplaceFilteredAvatar = 53;
      ETextParamType_ClearMyAvatarCustomMotion = 54;
      ETextParamType_CreateMyAvatarCustomMotion = 55;
      ETextParamType_CreateMyAvatarCustomEmotion = 56;
      ETextParamType_CreateMyAvatarCustomObject = 57;
      ETextParamType_SetDateNow = 58;
      ETextParamType_SetCRPMode = 59;
      ETextParamType_SetPlayerPriority = 60;
      ETextParamType_OnStartScreenShare = 61;
      ETextParamType_OnStopScreenShare = 62;
      ETextParamType_OnReceivedStartScreenShare = 63;
      ETextParamType_OnReceivedStopScreenShare = 64;
      ETextParamType_SetVideoRecording = 65;
      ETextParamType_SetRoomURL = 66;
      ETextParamType_IsUseGamePad = 67;
      ETextParamType_ScriptCallCanvasComponentMethod = 68;
      ETextParamType_HomeJson = 69;
      ETextParamType_HomeJsonWithTemplate = 70;
      ETextParamType_SetGenericWindowState = 71;
      ETextParamType_OnChangedMicPermissionState = 72;
      ETextParamType_IsUseMyAvatar = 73;
      ETextParamType_OnPlayScreenShare = 74;
      ETextParamType_CompImageListFileName = 75;
      ETextParamType_OnSendTextChat = 76;
      ETextParamType_SetItemProperty = 77;
      worldViewerWindow.ETextParamType_WorldID = ETextParamType_WorldID;
      worldViewerWindow.ETextParamType_RoomID = ETextParamType_RoomID;
      worldViewerWindow.ETextParamType_SpotName = ETextParamType_SpotName;
      worldViewerWindow.ETextParamType_LocationHref = ETextParamType_LocationHref;
      worldViewerWindow.ETextParamType_ShowWorldSelect = ETextParamType_ShowWorldSelect;
      worldViewerWindow.ETextParamType_Logined = ETextParamType_Logined;
      worldViewerWindow.ETextParamType_CanvasFileName = ETextParamType_CanvasFileName;
      worldViewerWindow.ETextParamType_CurrentUserName = ETextParamType_CurrentUserName;
      worldViewerWindow.ETextParamType_SceneItem = ETextParamType_SceneItem;
      worldViewerWindow.ETextParamType_OperateCanvas = ETextParamType_OperateCanvas;
      worldViewerWindow.ETextParamType_ReplaceMyAvatar = ETextParamType_ReplaceMyAvatar;
      worldViewerWindow.ETextParamType_PlayVideo = ETextParamType_PlayVideo;
      worldViewerWindow.ETextParamType_NamePlateTextureFileName0 = ETextParamType_NamePlateTextureFileName0;
      worldViewerWindow.ETextParamType_NamePlateTextureFileName1 = ETextParamType_NamePlateTextureFileName1;
      worldViewerWindow.ETextParamType_NamePlateTextureFileName2 = ETextParamType_NamePlateTextureFileName2;
      worldViewerWindow.ETextParamType_NamePlateMicMuteTextureFileName = ETextParamType_NamePlateMicMuteTextureFileName;
      worldViewerWindow.ETextParamType_NamePlateMicOnTextureFileName = ETextParamType_NamePlateMicOnTextureFileName;
      worldViewerWindow.ETextParamType_NamePlateMicTalkingTextureFileName = ETextParamType_NamePlateMicTalkingTextureFileName;
      worldViewerWindow.ETextParamType_SetMicState = ETextParamType_SetMicState;
      worldViewerWindow.ETextParamType_OperateFunctionFlag = ETextParamType_OperateFunctionFlag;
      worldViewerWindow.ETextParamType_CopyVideoFrameToSystem = ETextParamType_CopyVideoFrameToSystem;
      worldViewerWindow.ETextParamType_CancelToCopyVideoFrameToSystem = ETextParamType_CancelToCopyVideoFrameToSystem;
      worldViewerWindow.ETextParamType_SetMicTalkingState = ETextParamType_SetMicTalkingState;
      worldViewerWindow.ETextParamType_WarpPlayer = ETextParamType_WarpPlayer;
      worldViewerWindow.ETextParamType_PlayerMoveEnable = ETextParamType_PlayerMoveEnable;
      worldViewerWindow.ETextParamType_PlayItem = ETextParamType_PlayItem;
      worldViewerWindow.ETextParamType_StopItem = ETextParamType_StopItem;
      worldViewerWindow.ETextParamType_ShowItem = ETextParamType_ShowItem;
      worldViewerWindow.ETextParamType_HideItem = ETextParamType_HideItem;
      worldViewerWindow.ETextParamType_ReplaceMyAvatarCustom = ETextParamType_ReplaceMyAvatarCustom;
      worldViewerWindow.ETextParamType_SceneJson = ETextParamType_SceneJson;
      worldViewerWindow.ETextParamType_ScriptCallComponentMethod = ETextParamType_ScriptCallComponentMethod;
      worldViewerWindow.ETextParamType_AvatarFileName = ETextParamType_AvatarFileName;
      worldViewerWindow.ETextParamType_GUIDebugInput = ETextParamType_GUIDebugInput;
      worldViewerWindow.ETextParamType_HeliodorSDKVersion = ETextParamType_HeliodorSDKVersion;
      worldViewerWindow.ETextParamType_ReplaceMyAvatarIcon = ETextParamType_ReplaceMyAvatarIcon;
      worldViewerWindow.ETextParamType_SetItemFileName = ETextParamType_SetItemFileName;
      worldViewerWindow.ETextParamType_SetFollowCameraDistance = ETextParamType_SetFollowCameraDistance;
      worldViewerWindow.ETextParamType_SetFollowCameraRotate = ETextParamType_SetFollowCameraRotate;
      worldViewerWindow.ETextParamType_SetFollowCameraHeight = ETextParamType_SetFollowCameraHeight;
      worldViewerWindow.ETextParamType_AddFurniture = ETextParamType_AddFurniture;
      worldViewerWindow.ETextParamType_SetPlayerRotate = ETextParamType_SetPlayerRotate;
      worldViewerWindow.ETextParamType_PlayEmote = ETextParamType_PlayEmote;
      worldViewerWindow.ETextParamType_GetAvatarHeight = ETextParamType_GetAvatarHeight;
      worldViewerWindow.ETextParamType_StopVideo = ETextParamType_StopVideo;
      worldViewerWindow.ETextParamType_IsPlayVideo = ETextParamType_IsPlayVideo;
      worldViewerWindow.ETextParamType_ReplaceMyAvatarIconCustom = ETextParamType_ReplaceMyAvatarIconCustom;
      worldViewerWindow.ETextParamType_IsLoading = ETextParamType_IsLoading;
      worldViewerWindow.ETextParamType_SubSceneItem = ETextParamType_SubSceneItem;
      worldViewerWindow.ETextParamType_SceneOwner = ETextParamType_SceneOwner;
      worldViewerWindow.ETextParamType_VideoEnded = ETextParamType_VideoEnded;
      worldViewerWindow.ETextParamType_GlobalFileName = ETextParamType_GlobalFileName;
      worldViewerWindow.ETextParamType_CheckRestriction = ETextParamType_CheckRestriction;
      worldViewerWindow.ETextParamType_ReplaceFilteredAvatar = ETextParamType_ReplaceFilteredAvatar;
      worldViewerWindow.ETextParamType_ClearMyAvatarCustomMotion = ETextParamType_ClearMyAvatarCustomMotion;
      worldViewerWindow.ETextParamType_CreateMyAvatarCustomMotion = ETextParamType_CreateMyAvatarCustomMotion;
      worldViewerWindow.ETextParamType_CreateMyAvatarCustomEmotion = ETextParamType_CreateMyAvatarCustomEmotion;
      worldViewerWindow.ETextParamType_CreateMyAvatarCustomObject = ETextParamType_CreateMyAvatarCustomObject;
      worldViewerWindow.ETextParamType_SetDateNow = ETextParamType_SetDateNow;
      worldViewerWindow.ETextParamType_SetCRPMode = ETextParamType_SetCRPMode;
      worldViewerWindow.ETextParamType_SetPlayerPriority = ETextParamType_SetPlayerPriority;
      worldViewerWindow.ETextParamType_OnStartScreenShare = ETextParamType_OnStartScreenShare;
      worldViewerWindow.ETextParamType_OnStopScreenShare = ETextParamType_OnStopScreenShare;
      worldViewerWindow.ETextParamType_OnReceivedStartScreenShare = ETextParamType_OnReceivedStartScreenShare;
      worldViewerWindow.ETextParamType_OnReceivedStopScreenShare = ETextParamType_OnReceivedStopScreenShare;
      worldViewerWindow.ETextParamType_SetVideoRecording = ETextParamType_SetVideoRecording;
      worldViewerWindow.ETextParamType_SetRoomURL = ETextParamType_SetRoomURL;
      worldViewerWindow.ETextParamType_IsUseGamePad = ETextParamType_IsUseGamePad;
      worldViewerWindow.ETextParamType_ScriptCallCanvasComponentMethod = ETextParamType_ScriptCallCanvasComponentMethod;
      worldViewerWindow.ETextParamType_HomeJson = ETextParamType_HomeJson;
      worldViewerWindow.ETextParamType_HomeJsonWithTemplate = ETextParamType_HomeJsonWithTemplate;
      worldViewerWindow.ETextParamType_SetGenericWindowState = ETextParamType_SetGenericWindowState;
      worldViewerWindow.ETextParamType_OnChangedMicPermissionState = ETextParamType_OnChangedMicPermissionState;
      worldViewerWindow.ETextParamType_IsUseMyAvatar = ETextParamType_IsUseMyAvatar;
      worldViewerWindow.ETextParamType_OnPlayScreenShare = ETextParamType_OnPlayScreenShare;
      worldViewerWindow.ETextParamType_CompImageListFileName = ETextParamType_CompImageListFileName;
      worldViewerWindow.ETextParamType_OnSendTextChat = ETextParamType_OnSendTextChat;
      worldViewerWindow.ETextParamType_SetItemProperty = ETextParamType_SetItemProperty;
      EBinaryParamType_FullBodyTrackingData = 0;
      EBinaryParamType_Unlink = 1;
      EBinaryParamType_SetGUIImage = 2;
      worldViewerWindow.EBinaryParamType_FullBodyTrackingData = EBinaryParamType_FullBodyTrackingData;
      worldViewerWindow.EBinaryParamType_Unlink = EBinaryParamType_Unlink;
      worldViewerWindow.EBinaryParamType_SetGUIImage = EBinaryParamType_SetGUIImage;
      MOBILE_USER_AGENT_REGS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      IPHONE_USER_AGENT_REGS = /iPhone|iPod/i;
      INITIAL_MIXER_SETTING = [
        0.2,
        1,
        0.2,
        0.2,
        0.2
      ];
      INITIAL_MIXER_REAL_SETTING = [
        0.2,
        1,
        0.2,
        0.2,
        0.2
      ];
      INITIAL_MIXER_FADER_SETTING = [
        1,
        1,
        1,
        1,
        1
      ];
      INITIAL_MIXER_DISTANCE_SETTING = [
        1,
        1,
        1,
        1,
        1
      ];
      INITIAL_MIXER_MUTE_SETTING = [
        0,
        0,
        0,
        0,
        0
      ];
      SKYWAY_API_HOST = "https://v1.api.vketcloud.com/";
    }
  });

  // EmscriptenBuild/src/logics/dataOps.ts
  var getWorldId, getSkyRoomId, setSkyRoomId, getSpotId, getWorldSelectedToggle, getLoggedInStatusToggle, getCanvasFileName, setCanvasFileName, getCompImageListFileName, setCompImageListFileName, getCurrentUserName, setCurrentUserName, getWebGL10Toggle, setWebGL10Toggle, getTextureExtOnPvrtc, setTextureExtOnPvrtc, getTexturePvrtcToggle, setTexturePvrtcToggle, getTextureExtOnETC2, setTextureExtOnETC2, getTextureETC2Toggle, setTextureETC2Toggle, getTextureExtOnAstc, setTextureExtOnAstc, getTextureAstcToggle, setTextureAstcToggle, getTextureExtOnDxt, setTextureExtOnDxt, getTextureDxtToggle, setTextureDxtToggle, getExtShaderTextureLod, setExtShaderTextureLod, getOesStandardDerivatives, setOesStandardDerivatives, setExtShaderTextureLodToggle, setOesStandardDerivativesToggle, getExtColorBufferFloat, setExtColorBufferFloat, getExtColorBufferHalfFloat, setExtColorBufferHalfFloat, setExtColorBufferToggle, getWebglDepthTexture, getOesTextureFloat, getOesTextureHalfFloat, getOesTextureFloatLinear, getOesTextureHalfFloatLinear, setWebglDepthTexture, setOesTextureFloat, setOesTextureHalfFloat, setOesTextureFloatLinear, setOesTextureHalfFloatLinear, getExtTextureFilterAnisotropic, setExtTextureFilterAnisotropic, getAngleInstancedArrays, setAngleInstancedArrays, setOesTextureFloatToggle, setWebglDepthTextureToggle, setExtTextureFilterAnisotropicToggle, setAngleInstancedArraysToggle, setOesTextureHalfFloatToggle, setOesTextureFloatLinearToggle, setOesTextureHalfFloatLinearToggle, getMixerTab, setMixerTab, getMixerSettingAt, setMixerSettingAt, getMixerRealSettingAt, setMixerRealSettingAt, getMixerFaderSettingAt, setMixerFaderSettingAt, getMixerDistanceAt, setMixerDistanceAt, getMixerMuteAt, setMixerMuteAt, getMixerMasterVolume, setMixerMasterVolume, getMixerMasterMute, setMixerMasterMute, getUseLegacyAudioToggle, getAudioList, setAudioList, pushNullToAudioList, setVideoCanPlayToggle, getVideoEndedToggle, setVideoEndedToggle, getVideoAudioContext, setVideoAudioContext, getVideoSource, setVideoSource, getVideoGainNode, setVideoGainNode, getVideoHlsConfig, setVideoHlsConfig, getTextureCanvasList, setTextureCanvasList, pushNullToTextureCanvasList, getGyroActiveToggle, setGyroActiveToggle, setUploadedFileBuffer, getVCUID, setVCUID, getSkywayName, setSkywayName, getLocalStream, setLocalStream, closeLocalStream, getSkywayKey, setSkywayAvatarNumber, getSkywayAvatarNumberForSend, setSkywayAvatarNumberForSend, getSkywayUseCustomAvatarIcon, setSkywayUseCustomAvatarIcon, getSkywayCustomAvatarIconURL, setSkywayCustomAvatarIconURL, getSkywayStartToggle, getSkywayMicStateTimer, setSkywayMicStateTimer, getXrwDataFolderName, setDataFolderName, getUseSkywayAudioGainToggle, setUseSkywayAudioGainToggle, setSceneJson, getSceneJsonPath, setSceneJsonPath, setVideoInfo, setVideoSourceUrl, getSkywayOnTellScreenShareStart, getSkywayOnTellWaitScreenShare, getHeliodorSdkVersion, getActionProcedureList, setActionProcedureList, getOnclickedAvatarProcedureList, setOnclickedAvatarProcedureList, getOnloadedProcedureList, setOnloadedProcedureList, getOnfirsttouchProcedureList, setOnfirsttouchProcedureList, getOnresizeProcedureList, setOnresizeProcedureList, getSkywayCommandProcedureList, setSkywayCommandProcedureList, getSkywayMyinfoProcedureList, setSkywayMyinfoProcedureList, setAnimationFrameRequest, getAnimationFrameRequest, setXRSession, getXRSession, setCanvasLayerShow, getCanvasLayerShow, getVideoRecorder, setVideoRecorder, getRecordedVideoBlobObj, setRecordedVideoBlobObj, getRecordedVideoBlobURL, setRecordedVideoBlobURL, setVideoRecorderExtension, getVideoRecordCanvas, setVideoRecordCanvas, getVideoRecordContext, setVideoRecordContext, setCanvasIsPortrait, getCanvasIsPortrait;
  var init_dataOps = __esm({
    "EmscriptenBuild/src/logics/dataOps.ts"() {
      "use strict";
      init_const();
      getWorldId = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_WorldID === void 0 || worldViewerWindow.g_WorldID === null) {
          return void 0;
        }
        return worldViewerWindow.g_WorldID;
      };
      getSkyRoomId = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_RoomID === void 0 || worldViewerWindow.g_Skyway_RoomID === null) {
          return "0";
        }
        return worldViewerWindow.g_Skyway_RoomID;
      };
      setSkyRoomId = (skyRoomId) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Skyway_RoomID = skyRoomId;
      };
      getSpotId = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Spot === void 0 || worldViewerWindow.g_Spot === null) {
          return void 0;
        }
        return worldViewerWindow.g_Spot;
      };
      getWorldSelectedToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_ShowWorldSelect === void 0 || worldViewerWindow.g_ShowWorldSelect === null) {
          return false;
        }
        return worldViewerWindow.g_ShowWorldSelect;
      };
      getLoggedInStatusToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Logined === void 0 || worldViewerWindow.g_Logined === null) {
          return false;
        }
        return worldViewerWindow.g_Logined;
      };
      getCanvasFileName = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_CanvasFileName === void 0 || worldViewerWindow.g_CanvasFileName === null) {
          return "";
        }
        return worldViewerWindow.g_CanvasFileName;
      };
      setCanvasFileName = (updatedCanvasName) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof updatedCanvasName !== "string") {
          return;
        }
        worldViewerWindow.g_CanvasFileName = updatedCanvasName;
      };
      getCompImageListFileName = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_CompImageListFileName === void 0 || worldViewerWindow.g_CompImageListFileName === null) {
          return "";
        }
        return worldViewerWindow.g_CompImageListFileName;
      };
      setCompImageListFileName = (updatedCompImageListFileName) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof updatedCompImageListFileName !== "string") {
          return;
        }
        worldViewerWindow.g_CompImageListFileName = updatedCompImageListFileName;
      };
      getCurrentUserName = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_CurrentUserName === void 0 || worldViewerWindow.g_CurrentUserName === null) {
          return "";
        }
        return worldViewerWindow.g_CurrentUserName;
      };
      setCurrentUserName = (updatedUserName) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_CurrentUserName = updatedUserName;
      };
      getWebGL10Toggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_UseWebGL10 === void 0 || worldViewerWindow.g_UseWebGL10 === null) {
          return false;
        }
        return worldViewerWindow.g_UseWebGL10;
      };
      setWebGL10Toggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_UseWebGL10 = toggle;
      };
      getTextureExtOnPvrtc = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_extPVRTC === void 0 || worldViewerWindow.g_extPVRTC === null) {
          return void 0;
        }
        return worldViewerWindow.g_extPVRTC;
      };
      setTextureExtOnPvrtc = (compressedTexturePvrtc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || compressedTexturePvrtc === void 0 || compressedTexturePvrtc === null) {
          return;
        }
        worldViewerWindow.g_extPVRTC = compressedTexturePvrtc;
      };
      getTexturePvrtcToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextureCompression_PVRTC === void 0 || worldViewerWindow.g_TextureCompression_PVRTC === null) {
          return false;
        }
        return worldViewerWindow.g_TextureCompression_PVRTC;
      };
      setTexturePvrtcToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_TextureCompression_PVRTC = toggle;
      };
      getTextureExtOnETC2 = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_extETC2 === void 0 || worldViewerWindow.g_extETC2 === null) {
          return void 0;
        }
        return worldViewerWindow.g_extETC2;
      };
      setTextureExtOnETC2 = (compressedTextureEtc2) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || compressedTextureEtc2 === void 0 || compressedTextureEtc2 === null) {
          return;
        }
        worldViewerWindow.g_extETC2 = compressedTextureEtc2;
      };
      getTextureETC2Toggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextureCompression_ETC2 === void 0 || worldViewerWindow.g_TextureCompression_ETC2 === null) {
          return false;
        }
        return worldViewerWindow.g_TextureCompression_ETC2;
      };
      setTextureETC2Toggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_TextureCompression_ETC2 = toggle;
      };
      getTextureExtOnAstc = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_extASTC === void 0 || worldViewerWindow.g_extASTC === null) {
          return void 0;
        }
        return worldViewerWindow.g_extASTC;
      };
      setTextureExtOnAstc = (compressedTextureAstc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || compressedTextureAstc === void 0 || compressedTextureAstc === null) {
          return;
        }
        worldViewerWindow.g_extASTC = compressedTextureAstc;
      };
      getTextureAstcToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextureCompression_ASTC === void 0 || worldViewerWindow.g_TextureCompression_ASTC === null) {
          return false;
        }
        return worldViewerWindow.g_TextureCompression_ASTC;
      };
      setTextureAstcToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_TextureCompression_ASTC = toggle;
      };
      getTextureExtOnDxt = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_extDXT === void 0 || worldViewerWindow.g_extDXT === null) {
          return void 0;
        }
        return worldViewerWindow.g_extDXT;
      };
      setTextureExtOnDxt = (compressedTextureDxt) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || compressedTextureDxt === void 0 || compressedTextureDxt === null) {
          return;
        }
        worldViewerWindow.g_extDXT = compressedTextureDxt;
      };
      getTextureDxtToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextureCompression_DXT === void 0 || worldViewerWindow.g_TextureCompression_DXT === null) {
          return false;
        }
        return worldViewerWindow.g_TextureCompression_DXT;
      };
      setTextureDxtToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_TextureCompression_DXT = toggle;
      };
      getExtShaderTextureLod = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_EXT_shader_texture_lod === void 0 || worldViewerWindow.g_EXT_shader_texture_lod === null) {
          return void 0;
        }
        return worldViewerWindow.g_EXT_shader_texture_lod;
      };
      setExtShaderTextureLod = (extShaderTextureLod) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || extShaderTextureLod === void 0 || extShaderTextureLod === null) {
          return;
        }
        worldViewerWindow.g_EXT_shader_texture_lod = extShaderTextureLod;
      };
      getOesStandardDerivatives = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OES_standard_derivatives === void 0 || worldViewerWindow.g_OES_standard_derivatives === null) {
          return void 0;
        }
        return worldViewerWindow.g_OES_standard_derivatives;
      };
      setOesStandardDerivatives = (oesStandardDerivatives) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || oesStandardDerivatives === void 0 || oesStandardDerivatives === null) {
          return;
        }
        worldViewerWindow.g_OES_standard_derivatives = oesStandardDerivatives;
      };
      setExtShaderTextureLodToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_EXT_shader_texture_lod = toggle;
      };
      setOesStandardDerivativesToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_OES_standard_derivatives = toggle;
      };
      getExtColorBufferFloat = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_EXT_color_buffer_float === void 0 || worldViewerWindow.g_EXT_color_buffer_float === null) {
          return void 0;
        }
        return worldViewerWindow.g_EXT_color_buffer_float;
      };
      setExtColorBufferFloat = (ExtColorBufferFloat) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || ExtColorBufferFloat === void 0 || ExtColorBufferFloat === null) {
          return;
        }
        worldViewerWindow.g_EXT_color_buffer_float = ExtColorBufferFloat;
      };
      getExtColorBufferHalfFloat = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_EXT_color_buffer_half_float === void 0 || worldViewerWindow.g_EXT_color_buffer_half_float === null) {
          return void 0;
        }
        return worldViewerWindow.g_EXT_color_buffer_half_float;
      };
      setExtColorBufferHalfFloat = (extColorBufferHalfFloat) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || extColorBufferHalfFloat === void 0 || extColorBufferHalfFloat === null) {
          return;
        }
        worldViewerWindow.g_EXT_color_buffer_half_float = extColorBufferHalfFloat;
      };
      setExtColorBufferToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_EXT_color_buffer = toggle;
      };
      getWebglDepthTexture = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_WEBGL_depth_texture === void 0 || worldViewerWindow.g_WEBGL_depth_texture === null) {
          return void 0;
        }
        return worldViewerWindow.g_WEBGL_depth_texture;
      };
      getOesTextureFloat = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OES_texture_float === void 0 || worldViewerWindow.g_OES_texture_float === null) {
          return void 0;
        }
        return worldViewerWindow.g_OES_texture_float;
      };
      getOesTextureHalfFloat = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OES_texture_half_float === void 0 || worldViewerWindow.g_OES_texture_half_float === null) {
          return void 0;
        }
        return worldViewerWindow.g_OES_texture_half_float;
      };
      getOesTextureFloatLinear = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OES_texture_float_linear === void 0 || worldViewerWindow.g_OES_texture_float_linear === null) {
          return void 0;
        }
        return worldViewerWindow.g_OES_texture_float_linear;
      };
      getOesTextureHalfFloatLinear = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OES_texture_half_float_linear === void 0 || worldViewerWindow.g_OES_texture_half_float_linear === null) {
          return void 0;
        }
        return worldViewerWindow.g_OES_texture_half_float_linear;
      };
      setWebglDepthTexture = (webglDepthTexture) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || webglDepthTexture === void 0 || webglDepthTexture === null) {
          return;
        }
        worldViewerWindow.g_WEBGL_depth_texture = webglDepthTexture;
      };
      setOesTextureFloat = (oesTextureFloat) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || oesTextureFloat === void 0 || oesTextureFloat === null) {
          return;
        }
        worldViewerWindow.g_OES_texture_float = oesTextureFloat;
      };
      setOesTextureHalfFloat = (oesTextureHalfFloat) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || oesTextureHalfFloat === void 0 || oesTextureHalfFloat === null) {
          return;
        }
        worldViewerWindow.g_OES_texture_half_float = oesTextureHalfFloat;
      };
      setOesTextureFloatLinear = (oesTextureFloatLinear) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || oesTextureFloatLinear === void 0 || oesTextureFloatLinear === null) {
          return;
        }
        worldViewerWindow.g_OES_texture_float_linear = oesTextureFloatLinear;
      };
      setOesTextureHalfFloatLinear = (oesTextureHalfFloatLinear) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || oesTextureHalfFloatLinear === void 0 || oesTextureHalfFloatLinear === null) {
          return;
        }
        worldViewerWindow.g_OES_texture_half_float_linear = oesTextureHalfFloatLinear;
      };
      getExtTextureFilterAnisotropic = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_EXT_texture_filter_anisotropic === void 0 || worldViewerWindow.g_EXT_texture_filter_anisotropic === null) {
          return void 0;
        }
        return worldViewerWindow.g_EXT_texture_filter_anisotropic;
      };
      setExtTextureFilterAnisotropic = (extTextureFilterAnisotropic) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || extTextureFilterAnisotropic === void 0 || extTextureFilterAnisotropic === null) {
          return;
        }
        worldViewerWindow.g_EXT_texture_filter_anisotropic = extTextureFilterAnisotropic;
      };
      getAngleInstancedArrays = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_ANGLE_instanced_arrays === void 0 || worldViewerWindow.g_ANGLE_instanced_arrays === null) {
          return void 0;
        }
        return worldViewerWindow.g_ANGLE_instanced_arrays;
      };
      setAngleInstancedArrays = (angleInstancedArray) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || angleInstancedArray === void 0 || angleInstancedArray === null) {
          return;
        }
        worldViewerWindow.g_ANGLE_instanced_arrays = angleInstancedArray;
      };
      setOesTextureFloatToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_OES_texture_float = toggle;
      };
      setWebglDepthTextureToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_WEBGL_depth_texture = toggle;
      };
      setExtTextureFilterAnisotropicToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_Ext_texture_filter_anisotropic = toggle;
      };
      setAngleInstancedArraysToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_ANGLE_instanced_arrays = toggle;
      };
      setOesTextureHalfFloatToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_OES_texture_half_float = toggle;
      };
      setOesTextureFloatLinearToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_OES_texture_float_linear = toggle;
      };
      setOesTextureHalfFloatLinearToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_Use_OES_texture_half_float_linear = toggle;
      };
      getMixerTab = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerTabActive === void 0 || worldViewerWindow.g_hel_MixerTabActive === null) {
          return 1;
        }
        return worldViewerWindow.g_hel_MixerTabActive;
      };
      setMixerTab = (updatedMixerTabValue) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof updatedMixerTabValue !== "number") {
          return;
        }
        worldViewerWindow.g_hel_MixerTabActive = updatedMixerTabValue;
      };
      getMixerSettingAt = (index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_Mixer === void 0 || worldViewerWindow.g_hel_Mixer === null) {
          return INITIAL_MIXER_SETTING[index];
        }
        return worldViewerWindow.g_hel_Mixer[index];
      };
      setMixerSettingAt = (volume, typeIndex) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_Mixer[typeIndex] = volume;
      };
      getMixerRealSettingAt = (index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerReal === void 0 || worldViewerWindow.g_hel_MixerReal === null) {
          return INITIAL_MIXER_REAL_SETTING[index];
        }
        return worldViewerWindow.g_hel_RealMixer[index];
      };
      setMixerRealSettingAt = (volume, typeIndex) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_RealMixer[typeIndex] = volume;
      };
      getMixerFaderSettingAt = (index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerFade === void 0 || worldViewerWindow.g_hel_MixerFade === null) {
          return INITIAL_MIXER_FADER_SETTING[index];
        }
        return worldViewerWindow.g_hel_MixerFade[index];
      };
      setMixerFaderSettingAt = (volume, typeIndex) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_MixerFade[typeIndex] = volume;
      };
      getMixerDistanceAt = (index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerDistance === void 0 || worldViewerWindow.g_hel_MixerDistance === null) {
          return INITIAL_MIXER_DISTANCE_SETTING[index];
        }
        return worldViewerWindow.g_hel_MixerDistance[index];
      };
      setMixerDistanceAt = (volume, typeIndex) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_MixerDistance[typeIndex] = volume;
      };
      getMixerMuteAt = (index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerMute === void 0 || worldViewerWindow.g_hel_MixerMute === null) {
          return INITIAL_MIXER_MUTE_SETTING[index];
        }
        return worldViewerWindow.g_hel_MixerMute[index];
      };
      setMixerMuteAt = (volume, typeIndex) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_MixerMute[typeIndex] = volume;
      };
      getMixerMasterVolume = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerMasterVolume === void 0 || worldViewerWindow.g_hel_MixerMasterVolume === null) {
          return 1;
        }
        return worldViewerWindow.g_hel_MixerMasterVolume;
      };
      setMixerMasterVolume = (volume) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_MixerMasterVolume = volume;
      };
      getMixerMasterMute = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_MixerMasterMute === void 0 || worldViewerWindow.g_hel_MixerMasterMute === null) {
          return 0;
        }
        return worldViewerWindow.g_hel_MixerMasterMute;
      };
      setMixerMasterMute = (mute) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_MixerMasterMute = mute;
      };
      getUseLegacyAudioToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_UseLegacyAudio === void 0 || worldViewerWindow.g_hel_UseLegacyAudio === null) {
          return false;
        }
        return worldViewerWindow.g_hel_UseLegacyAudio;
      };
      getAudioList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_audioList === void 0 || worldViewerWindow.g_audioList === null) {
          return [];
        }
        return worldViewerWindow.g_audioList;
      };
      setAudioList = (audio, index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_audioList === void 0 || worldViewerWindow.g_audioList === null) {
          return;
        }
        worldViewerWindow.g_audioList[index] = audio;
      };
      pushNullToAudioList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_audioList === void 0 || worldViewerWindow.g_audioList === null) {
          return;
        }
        worldViewerWindow.g_audioList.push(null);
      };
      setVideoCanPlayToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_videocanplay = toggle;
      };
      getVideoEndedToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_videoended === void 0 || worldViewerWindow.g_videoended === null) {
          return false;
        }
        return worldViewerWindow.g_videoended;
      };
      setVideoEndedToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_videoended = toggle;
      };
      getVideoAudioContext = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_VideoAudioContext === void 0 || worldViewerWindow.g_VideoAudioContext === null) {
          return void 0;
        }
        return worldViewerWindow.g_VideoAudioContext;
      };
      setVideoAudioContext = (videoAudioContext) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || videoAudioContext === void 0 || videoAudioContext === null) {
          return;
        }
        worldViewerWindow.g_VideoAudioContext = videoAudioContext;
      };
      getVideoSource = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_VideoSource === void 0 || worldViewerWindow.g_VideoSource === null) {
          return void 0;
        }
        return worldViewerWindow.g_VideoSource;
      };
      setVideoSource = (videoSource) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || videoSource === void 0 || videoSource === null) {
          return;
        }
        worldViewerWindow.g_VideoSource = videoSource;
      };
      getVideoGainNode = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_VideoGainNode === void 0 || worldViewerWindow.g_VideoGainNode === null) {
          return void 0;
        }
        return worldViewerWindow.g_VideoGainNode;
      };
      setVideoGainNode = (gainNode) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || gainNode === void 0 || gainNode === null) {
          return;
        }
        worldViewerWindow.g_VideoGainNode = gainNode;
      };
      getVideoHlsConfig = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_VideoHlsConfig === void 0 || worldViewerWindow.g_VideoHlsConfig === null) {
          return void 0;
        }
        return worldViewerWindow.g_VideoHlsConfig;
      };
      setVideoHlsConfig = (updatedConfig) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || updatedConfig === void 0 || updatedConfig === null) {
          return;
        }
        worldViewerWindow.g_VideoHlsConfig = updatedConfig;
      };
      getTextureCanvasList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextCanvasList === void 0 || worldViewerWindow.g_TextCanvasList === null) {
          return [];
        }
        return worldViewerWindow.g_TextCanvasList;
      };
      setTextureCanvasList = (textureCanvas, index) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextCanvasList === void 0 || worldViewerWindow.g_TextCanvasList === null) {
          return;
        }
        worldViewerWindow.g_TextCanvasList[index] = textureCanvas;
      };
      pushNullToTextureCanvasList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_TextCanvasList === void 0 || worldViewerWindow.g_TextCanvasList === null) {
          return;
        }
        worldViewerWindow.g_TextCanvasList.push(null);
      };
      getGyroActiveToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_GyroActive === void 0 || worldViewerWindow.g_GyroActive === null) {
          return false;
        }
        return worldViewerWindow.g_GyroActive;
      };
      setGyroActiveToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_GyroActive = toggle;
      };
      setUploadedFileBuffer = (buffer) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_hel_UploadFileImage = buffer;
      };
      getVCUID = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_VCUID === void 0 || worldViewerWindow.g_VCUID === null || worldViewerWindow.g_VCUID.length === 0) {
          return void 0;
        }
        return worldViewerWindow.g_VCUID;
      };
      setVCUID = (vcuid) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof vcuid !== "string") {
          return;
        }
        worldViewerWindow.g_VCUID = vcuid;
      };
      getSkywayName = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_MyName === void 0 || worldViewerWindow.g_Skyway_MyName === null || worldViewerWindow.g_Skyway_MyName.length === 0) {
          return "Guest";
        }
        return worldViewerWindow.g_Skyway_MyName;
      };
      setSkywayName = (name) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof name !== "string") {
          return;
        }
        worldViewerWindow.g_Skyway_MyName = name;
      };
      getLocalStream = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_localStream === void 0 || worldViewerWindow.g_localStream === null) {
          return void 0;
        }
        return worldViewerWindow.g_localStream;
      };
      setLocalStream = (mediaStream) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || mediaStream === void 0 || mediaStream === null) {
          return;
        }
        worldViewerWindow.g_localStream = mediaStream;
      };
      closeLocalStream = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_localStream === void 0 || worldViewerWindow.g_localStream === null) {
          return;
        }
        worldViewerWindow.g_localStream.getTracks().forEach((track) => track.stop());
        worldViewerWindow.g_localStream = null;
      };
      getSkywayKey = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_SKYWAY_KEY === void 0 || worldViewerWindow.g_SKYWAY_KEY === null || worldViewerWindow.g_SKYWAY_KEY.length === 0) {
          return "37825849-7771-49bd-890e-61971fb4f431";
        }
        return worldViewerWindow.g_SKYWAY_KEY;
      };
      setSkywayAvatarNumber = (avatarNum) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Skyway_MyAvatar = avatarNum;
      };
      getSkywayAvatarNumberForSend = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_MyAvatar_ForSend === void 0 || worldViewerWindow.g_Skyway_MyAvatar_ForSend === null) {
          return 0;
        }
        return worldViewerWindow.g_Skyway_MyAvatar_ForSend;
      };
      setSkywayAvatarNumberForSend = (avatarNum) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Skyway_MyAvatar_ForSend = avatarNum;
      };
      getSkywayUseCustomAvatarIcon = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_Use_CustomAvatarIcon === void 0 || worldViewerWindow.g_Skyway_Use_CustomAvatarIcon === null) {
          return false;
        }
        return worldViewerWindow.g_Skyway_Use_CustomAvatarIcon;
      };
      setSkywayUseCustomAvatarIcon = (UseAvatarIcon) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Skyway_Use_CustomAvatarIcon = UseAvatarIcon;
      };
      getSkywayCustomAvatarIconURL = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_CustomAvatarIcon_URL === void 0 || worldViewerWindow.g_Skyway_CustomAvatarIcon_URL === null) {
          return "";
        }
        return worldViewerWindow.g_Skyway_CustomAvatarIcon_URL;
      };
      setSkywayCustomAvatarIconURL = (AvatarIconURL) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Skyway_CustomAvatarIcon_URL = AvatarIconURL;
      };
      getSkywayStartToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Skyway_Start === void 0 || worldViewerWindow.g_Skyway_Start === null) {
          return false;
        }
        return worldViewerWindow.g_Skyway_Start;
      };
      getSkywayMicStateTimer = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_skyway_set_mic_state_timer === void 0 || worldViewerWindow.g_skyway_set_mic_state_timer === null) {
          return void 0;
        }
        return worldViewerWindow.g_skyway_set_mic_state_timer;
      };
      setSkywayMicStateTimer = (timer) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || timer === void 0 || timer === null) {
          return;
        }
        worldViewerWindow.g_skyway_set_mic_state_timer = timer;
      };
      getXrwDataFolderName = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_DataFolderName === void 0 || worldViewerWindow.g_DataFolderName === null || worldViewerWindow.g_DataFolderName.length === 0) {
          return "";
        }
        return worldViewerWindow.g_DataFolderName;
      };
      setDataFolderName = (DataFolderName) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_DataFolderName = DataFolderName;
      };
      getUseSkywayAudioGainToggle = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_UseSkywayAudioGain === void 0 || worldViewerWindow.g_hel_UseSkywayAudioGain === null) {
          return false;
        }
        return worldViewerWindow.g_hel_UseSkywayAudioGain;
      };
      setUseSkywayAudioGainToggle = (toggle) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof toggle !== "boolean") {
          return;
        }
        worldViewerWindow.g_hel_UseSkywayAudioGain = toggle;
      };
      setSceneJson = (json) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof json !== "string") {
          return;
        }
        worldViewerWindow.g_SceneJson = json;
      };
      getSceneJsonPath = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_SceneJsonPath === void 0 || worldViewerWindow.g_SceneJsonPath === null) {
          return;
        }
        return worldViewerWindow.g_SceneJsonPath;
      };
      setSceneJsonPath = (path) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof path !== "string") {
          return;
        }
        worldViewerWindow.g_SceneJsonPath = path;
      };
      setVideoInfo = (json) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_VideoInfo = json;
      };
      setVideoSourceUrl = (url) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof url !== "string") {
          return;
        }
        worldViewerWindow.g_VideoSourceUrl = url;
      };
      getSkywayOnTellScreenShareStart = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_OnTellScreenStartFunction === void 0 || worldViewerWindow.g_hel_OnTellScreenStartFunction === null) {
          return;
        }
        return worldViewerWindow.g_hel_OnTellScreenStartFunction;
      };
      getSkywayOnTellWaitScreenShare = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_hel_OnTellWaitScreenShareFunction === void 0 || worldViewerWindow.g_hel_OnTellWaitScreenShareFunction === null) {
          return;
        }
        return worldViewerWindow.g_hel_OnTellWaitScreenShareFunction;
      };
      getHeliodorSdkVersion = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_HeliodorSDKVersion === void 0 || worldViewerWindow.g_HeliodorSDKVersion === null) {
          return HeliodorSDKVersion;
        }
        return worldViewerWindow.g_HeliodorSDKVersion;
      };
      getActionProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_ActionProcedureList === void 0 || worldViewerWindow.g_ActionProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_ActionProcedureList;
      };
      setActionProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_ActionProcedureList.push(callFunc);
      };
      getOnclickedAvatarProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OnclickedAvatarProcedureList === void 0 || worldViewerWindow.g_OnclickedAvatarProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_OnclickedAvatarProcedureList;
      };
      setOnclickedAvatarProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_OnclickedAvatarProcedureList.push(callFunc);
      };
      getOnloadedProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OnloadedProcedureList === void 0 || worldViewerWindow.g_OnloadedProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_OnloadedProcedureList;
      };
      setOnloadedProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_OnloadedProcedureList.push(callFunc);
      };
      getOnfirsttouchProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OnfirsttouchProcedureList === void 0 || worldViewerWindow.g_OnfirsttouchProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_OnfirsttouchProcedureList;
      };
      setOnfirsttouchProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_OnfirsttouchProcedureList.push(callFunc);
      };
      getOnresizeProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_OnresizeProcedureList === void 0 || worldViewerWindow.g_OnresizeProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_OnresizeProcedureList;
      };
      setOnresizeProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_OnresizeProcedureList.push(callFunc);
      };
      getSkywayCommandProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_SkywayCommandProcedureList === void 0 || worldViewerWindow.g_SkywayCommandProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_SkywayCommandProcedureList;
      };
      setSkywayCommandProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_SkywayCommandProcedureList.push(callFunc);
      };
      getSkywayMyinfoProcedureList = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_SkywayMyinfoProcedureList === void 0 || worldViewerWindow.g_SkywayMyinfoProcedureList === null) {
          return [];
        }
        return worldViewerWindow.g_SkywayMyinfoProcedureList;
      };
      setSkywayMyinfoProcedureList = (callFunc) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || typeof callFunc !== "function") {
          return;
        }
        worldViewerWindow.g_SkywayMyinfoProcedureList.push(callFunc);
      };
      setAnimationFrameRequest = (id) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_AnimationFrameRequest = id;
      };
      getAnimationFrameRequest = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_AnimationFrameRequest === void 0 || worldViewerWindow.g_AnimationFrameRequest === null) {
          return -1;
        }
        return worldViewerWindow.g_AnimationFrameRequest;
      };
      setXRSession = (xrsession) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_XRSession = xrsession;
      };
      getXRSession = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_XRSession === void 0 || worldViewerWindow.g_XRSession === null) {
          return -1;
        }
        return worldViewerWindow.g_XRSession;
      };
      worldViewerWindow.g_CanvasLayerShow = {};
      setCanvasLayerShow = (LayerName, show) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_CanvasLayerShow[LayerName] = show;
      };
      getCanvasLayerShow = (LayerName) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return false;
        }
        return worldViewerWindow.g_CanvasLayerShow[LayerName];
      };
      getVideoRecorder = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return null;
        }
        return worldViewerWindow.g_VideoRecorder;
      };
      setVideoRecorder = (Recorder) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_VideoRecorder = Recorder;
      };
      getRecordedVideoBlobObj = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return null;
        }
        return worldViewerWindow.g_RecordedVideoBlobObj;
      };
      setRecordedVideoBlobObj = (BlobObj) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_RecordedVideoBlobObj = BlobObj;
      };
      getRecordedVideoBlobURL = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return null;
        }
        return worldViewerWindow.g_RecordedVideoBlobURL;
      };
      setRecordedVideoBlobURL = (BlobURL) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_RecordedVideoBlobURL = BlobURL;
      };
      setVideoRecorderExtension = (Extension) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_VideoRecorderExtension = Extension;
      };
      getVideoRecordCanvas = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return null;
        }
        return worldViewerWindow.g_VideoRecordCanvas;
      };
      setVideoRecordCanvas = (Canvas) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_VideoRecordCanvas = Canvas;
      };
      getVideoRecordContext = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return null;
        }
        return worldViewerWindow.g_VideoRecordContext;
      };
      setVideoRecordContext = (Context) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_VideoRecordContext = Context;
      };
      setCanvasIsPortrait = (IsPortrait) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_CanvasIsPortrait = IsPortrait;
      };
      getCanvasIsPortrait = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return false;
        }
        return worldViewerWindow.g_CanvasIsPortrait;
      };
    }
  });

  // EmscriptenBuild/src/logics/domOps.ts
  var getMainCanvasDOMElement, setMainCanvasDOMElement, getWebGLRenderingContext, setWebGLRenderingContext, getMainCanvas4XrDOMElement, getVideo, setVideo, getInputFileDOMElement, getConfigUrlDOMElement, getLocalTextConfigUrlDOMElement, getUserNameDOMElement, getLocalTextUserNameDOMElement, getSkywayMsgDOMElement, getSkywayLocalTextDOMElement, getStatusDOMElement, getLogDOMElement, defineNextTextCanvasIndex;
  var init_domOps = __esm({
    "EmscriptenBuild/src/logics/domOps.ts"() {
      "use strict";
      init_const();
      init_dataOps();
      getMainCanvasDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_MainCanvas === void 0 || worldViewerWindow.g_MainCanvas === null) {
          return void 0;
        }
        return worldViewerWindow.g_MainCanvas;
      };
      setMainCanvasDOMElement = (targetMainCanvas) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || targetMainCanvas === void 0 || targetMainCanvas === null) {
          return;
        }
        worldViewerWindow.g_MainCanvas = targetMainCanvas;
      };
      getWebGLRenderingContext = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_WebglContext === void 0 || worldViewerWindow.g_WebglContext === null) {
          return void 0;
        }
        return worldViewerWindow.g_WebglContext;
      };
      setWebGLRenderingContext = (webglContext) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || webglContext === void 0 || webglContext === null) {
          return;
        }
        worldViewerWindow.g_WebglContext = webglContext;
      };
      getMainCanvas4XrDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_MainCanvas === void 0 || worldViewerWindow.g_MainCanvas === null) {
          return void 0;
        }
        return worldViewerWindow.g_MainCanvas;
      };
      getVideo = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Video === void 0 || worldViewerWindow.g_Video === null) {
          return void 0;
        }
        return worldViewerWindow.g_Video;
      };
      setVideo = (video) => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null) {
          return;
        }
        worldViewerWindow.g_Video = video;
      };
      getInputFileDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_InputFile === void 0 || worldViewerWindow.g_InputFile === null) {
          return void 0;
        }
        return worldViewerWindow.g_InputFile;
      };
      getConfigUrlDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_configurl === void 0 || worldViewerWindow.g_configurl === null) {
          return void 0;
        }
        return worldViewerWindow.g_configurl;
      };
      getLocalTextConfigUrlDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_localText_configurl === void 0 || worldViewerWindow.g_localText_configurl === null) {
          return void 0;
        }
        return worldViewerWindow.g_localText_configurl;
      };
      getUserNameDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_username === void 0 || worldViewerWindow.g_username === null) {
          return void 0;
        }
        return worldViewerWindow.g_username;
      };
      getLocalTextUserNameDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_localText_username === void 0 || worldViewerWindow.g_localText_username === null) {
          return void 0;
        }
        return worldViewerWindow.g_localText_username;
      };
      getSkywayMsgDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_skyway_msg === void 0 || worldViewerWindow.g_skyway_msg === null) {
          return void 0;
        }
        return worldViewerWindow.g_skyway_msg;
      };
      getSkywayLocalTextDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_skyway_localText === void 0 || worldViewerWindow.g_skyway_localText === null) {
          return void 0;
        }
        return worldViewerWindow.g_skyway_localText;
      };
      getStatusDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Status === void 0 || worldViewerWindow.g_Status === null) {
          return void 0;
        }
        return worldViewerWindow.g_Status;
      };
      getLogDOMElement = () => {
        if (worldViewerWindow === void 0 || worldViewerWindow === null || worldViewerWindow.g_Log === void 0 || worldViewerWindow.g_Log === null) {
          return void 0;
        }
        return worldViewerWindow.g_Log;
      };
      defineNextTextCanvasIndex = () => {
        const canvasList = getTextureCanvasList();
        for (let index = 0; index < canvasList.length; index++) {
          if (canvasList[index] === null) {
            return index;
          }
        }
        pushNullToTextureCanvasList();
        return canvasList.length - 1;
      };
    }
  });

  // EmscriptenBuild/src/debugLog.ts
  var formatDate, getNowDate, debugLog;
  var init_debugLog = __esm({
    "EmscriptenBuild/src/debugLog.ts"() {
      "use strict";
      formatDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}`;
      };
      getNowDate = () => {
        const date = new Date();
        return formatDate(date);
      };
      debugLog = (text, ...optionalParams) => {
        console.log(`[ ${getNowDate()} ] ${text} `, ...optionalParams);
      };
    }
  });

  // EmscriptenBuild/src/logics/platform.ts
  var hel_isChrome, hel_getChromeVersion, hel_isAndroid, hel_isMobile, hel_isiPad, hel_isFirefox, hel_getiOSVersion, hel_getMacOSVersion, hel_isLangJa, defineYourRenderTypes;
  var init_platform = __esm({
    "EmscriptenBuild/src/logics/platform.ts"() {
      "use strict";
      init_const();
      init_dataOps();
      hel_isChrome = () => {
        return worldViewerWindow.navigator.userAgent.toLowerCase().indexOf("chrome") !== -1;
      };
      hel_getChromeVersion = () => {
        if (!hel_isChrome())
          return 0;
        const v = window.navigator.userAgent.match(/Chrome\/([0-9.]+)/);
        if (v === null || v === void 0)
          return 0;
        if (v.length > 1) {
          return parseInt(v[1], 10);
        }
        return 0;
      };
      hel_isAndroid = () => {
        return worldViewerWindow.navigator.userAgent.toLowerCase().indexOf("android") !== -1;
      };
      hel_isMobile = () => {
        if (hel_isiPad()) {
          return true;
        }
        return worldViewerWindow.navigator.userAgent.search(MOBILE_USER_AGENT_REGS) !== -1;
      };
      worldViewerWindow.hel_isiPhone = () => {
        if (hel_isiPad()) {
          return true;
        }
        return worldViewerWindow.navigator.userAgent.search(IPHONE_USER_AGENT_REGS) !== -1;
      };
      hel_isiPad = () => {
        const agent = worldViewerWindow.navigator.userAgent.toLowerCase();
        return agent.indexOf("ipad") > -1 || agent.indexOf("macintosh") > -1 && "ontouchend" in document;
      };
      worldViewerWindow.hel_isMac = () => {
        const agent = worldViewerWindow.navigator.userAgent.toLowerCase();
        return agent.indexOf("macintosh") > -1;
      };
      hel_isFirefox = () => {
        return window.navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
      };
      worldViewerWindow.hel_isFirefox = hel_isFirefox;
      hel_getiOSVersion = () => {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          const v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return parseInt(v[1], 10) * 100 + parseInt(v[2], 10);
        }
        return 0;
      };
      hel_getMacOSVersion = () => {
        if (!worldViewerWindow.hel_isMac() && !hel_isiPad())
          return 0;
        const v = window.navigator.userAgent.match(/Version\/(\d+).(\d+)/);
        if (v === null || v === void 0)
          return 0;
        if (v.length >= 3) {
          return parseInt(v[1], 10) * 100 + parseInt(v[2], 10);
        }
        return 0;
      };
      hel_isLangJa = () => {
        const browserLang = worldViewerWindow.navigator.languages && worldViewerWindow.navigator.languages[0] || worldViewerWindow.navigator.language || worldViewerWindow.navigator.userLanguage || worldViewerWindow.navigator.browserLanguage;
        return browserLang === "ja" || browserLang === "ja-JP";
      };
      defineYourRenderTypes = () => {
        return [
          "webgl",
          "experimental-webgl"
        ];
      };
    }
  });

  // EmscriptenBuild/src/logics/moduleCaller.ts
  var requestBootStrapGameEngine, requestToDrawFrame, requestProcedureCallFor, requestProcedurePostFor, requestProcedureCallBinaryFor, requestSendingReceivedPacketsFromSkyway, requestOnVCPlayerJoin, requestOnVCPlayerLeave, requestToSetVrCameraPointer, requestSetVrPointer, requestSetVrPosePointer, requestToBindFrameBufferOf, requestToReleaseBoundFrameBuffer, requestIfCameraFpsValueAvailable, requestToGetValueOf, requestVRControllerValue, switchToVR, switchToNoneVR, requestResizeWindow, requestToToggleActivateGyro, requestOnDropFilesBegin, requestOnDropFilesProgress, requestOnDropFiles, requestOnWindowActivate, requestOnBeforeUnload, requestOnUnload, requestMemoryAllocate, requestSetDataToHeap, requestReleaseMemoryFor, sendGamepadData;
  var init_moduleCaller = __esm({
    "EmscriptenBuild/src/logics/moduleCaller.ts"() {
      "use strict";
      init_const();
      init_debugLog();
      init_dataOps();
      init_domOps();
      init_platform();
      requestBootStrapGameEngine = (type, characterType, args1, strArgs0, canTouch, isMultiPlay, isXr) => {
        if (Module.ccall === void 0) {
          return;
        }
        const mainCanvas2 = getMainCanvasDOMElement();
        const mainCanvas4Xr = getMainCanvas4XrDOMElement();
        const width = isXr && mainCanvas4Xr !== void 0 ? mainCanvas4Xr.width : mainCanvas2 !== void 0 ? mainCanvas2.width : -1;
        const height = isXr && mainCanvas4Xr !== void 0 ? mainCanvas4Xr.height : mainCanvas2 !== void 0 ? mainCanvas2.height : -1;
        if (width < 0 || height < 0) {
          debugLog(`[ requestBootStrapGameEngine ] canvas is not found for target env`);
          return;
        }
        Module.ccall("Start", "", [
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "string",
          "string",
          "boolean"
        ], [
          type,
          width,
          height,
          hel_isMobile() ? 1 : 0,
          hel_getiOSVersion(),
          worldViewerWindow.hel_isMac() ? 1 : 0,
          canTouch ? 1 : 0,
          hel_isLangJa() ? 1 : 0,
          characterType,
          args1,
          isMultiPlay ? 1 : 0,
          strArgs0,
          getXrwDataFolderName(),
          isXr
        ], {
          async: true
        });
      };
      requestToDrawFrame = () => {
        if (Module.ccall !== void 0) {
          worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_SetDateNow, Date.now().toString());
          Module.ccall("DrawFrame", "", [], []);
        }
      };
      requestProcedureCallFor = (procedureId, order) => {
        if (Module.ccall !== void 0) {
          return Module.ccall("SetText", "int", [
            "int",
            "string"
          ], [
            procedureId,
            order
          ]);
        } else {
          return 0;
        }
      };
      requestProcedurePostFor = (procedureId, order) => {
        if (Module.ccall !== void 0) {
          Module.ccall("PostMessage", "void", [
            "int",
            "string"
          ], [
            procedureId,
            order
          ]);
        }
      };
      requestProcedureCallBinaryFor = (procedureId, ary_u8) => {
        if (Module.ccall !== void 0) {
          return Module.ccall("SetBinary", "int", [
            "int",
            "array",
            "int"
          ], [
            procedureId,
            ary_u8,
            ary_u8.length
          ]);
        }
        return 0;
      };
      requestSendingReceivedPacketsFromSkyway = (data) => {
        if (Module.ccall !== void 0) {
          Module.ccall("ReceiveSkywayData", "", [
            "string"
          ], [
            data
          ]);
        }
      };
      requestOnVCPlayerJoin = (ID, Data) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnVCPlayerJoin", "", [
            "string",
            "string"
          ], [
            ID,
            Data
          ]);
        }
      };
      requestOnVCPlayerLeave = (ID, Data) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnVCPlayerLeave", "", [
            "string",
            "string"
          ], [
            ID,
            Data
          ]);
        }
      };
      requestToSetVrCameraPointer = (vrcameradata) => {
        if (Module.ccall !== void 0) {
          Module.ccall("SetVRCameraValue", "", [
            "float"
          ], [
            vrcameradata
          ]);
        }
      };
      requestSetVrPointer = (data) => {
        if (Module.ccall !== void 0) {
          Module.ccall("SetVRValue", "", [
            "float"
          ], [
            data
          ]);
        }
      };
      requestSetVrPosePointer = (pose) => {
        if (Module.ccall !== void 0) {
          Module.ccall("SetVRPoseValue", "", [
            "float"
          ], [
            pose
          ]);
        }
      };
      requestToBindFrameBufferOf = (glLayer) => {
        if (Module.ctx !== void 0 && Module.ctx !== null && glLayer !== void 0) {
          Module.ctx.bindFramebuffer(Module.ctx.FRAMEBUFFER, glLayer.framebuffer);
        }
      };
      requestToReleaseBoundFrameBuffer = () => {
        if (Module.ctx !== void 0 && Module.ctx !== null) {
          Module.ctx.bindFramebuffer(Module.ctx.FRAMEBUFFER, null);
        }
      };
      requestIfCameraFpsValueAvailable = (cameradata) => {
        if (Module.ccall !== void 0) {
          return Module.ccall("GetFPSCameraValue", "boolean", [
            "float"
          ], [
            cameradata
          ]);
        }
        return false;
      };
      requestToGetValueOf = (target) => {
        if (Module.ccall !== void 0) {
          return Module.getValue(target, "float");
        }
        return 0;
      };
      requestVRControllerValue = (controllerNum, activeData, controllerData, gamePadData) => {
        if (Module.ccall !== void 0) {
          return Module.ccall("SetVRControllerValues", "", [
            "number",
            "number",
            "float",
            "float"
          ], [
            controllerNum,
            activeData,
            controllerData,
            gamePadData
          ]);
        }
        return false;
      };
      switchToVR = (width, height) => {
        if (Module.ccall !== void 0) {
          return Module.ccall("SwitchToVR", "", [
            "int",
            "int"
          ], [
            width,
            height
          ]);
        }
        return false;
      };
      switchToNoneVR = () => {
        if (Module.ccall !== void 0) {
          return Module.ccall("SwitchToNoneVR", "", [], []);
        }
        return false;
      };
      requestResizeWindow = (mainCanvas2) => {
        if (Module.ccall !== void 0 && mainCanvas2 !== void 0) {
          Module.ccall("ResizeWindow", "", [
            "int",
            "int",
            "int",
            "int"
          ], [
            mainCanvas2.width,
            mainCanvas2.height,
            mainCanvas2.clientWidth,
            mainCanvas2.clientHeight
          ]);
        }
      };
      requestToToggleActivateGyro = () => {
        if (Module.ccall !== void 0) {
          Module.ccall("ActiveGyro", "", [
            "int"
          ], [
            getGyroActiveToggle() ? 1 : 0
          ]);
        }
      };
      requestOnDropFilesBegin = (file) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnDropFilesBeginFromJS", "", [
            "string"
          ], [
            file.name
          ]);
        }
      };
      requestOnDropFilesProgress = (evt) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnDropFilesProgressFromJS", "", [
            "float"
          ], [
            evt.loaded / evt.total
          ]);
        }
      };
      requestOnDropFiles = (file, ary_u8, data) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnDropFilesFromJS", "", [
            "string",
            "number",
            "int"
          ], [
            file.name,
            data,
            ary_u8.length
          ]);
        }
      };
      requestOnWindowActivate = (isActivate) => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnWindowActivate", ``, [
            "int"
          ], [
            isActivate
          ]);
        }
      };
      requestOnBeforeUnload = () => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnBeforeUnload");
        }
      };
      requestOnUnload = () => {
        if (Module.ccall !== void 0) {
          Module.ccall("OnUnload");
        }
      };
      requestMemoryAllocate = (targetLength) => {
        return Module._malloc(targetLength);
      };
      requestSetDataToHeap = (ary_u8, data) => {
        Module.HEAPU8.set(ary_u8, data);
      };
      requestReleaseMemoryFor = (data) => {
        Module._free(data);
      };
      sendGamepadData = (button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16, axis1, axis2, axis3, axis4) => {
        if (Module.ccall !== void 0) {
          Module.ccall("ReceiveGamepadData", "", [
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float"
          ], [
            button1,
            button2,
            button3,
            button4,
            button5,
            button6,
            button7,
            button8,
            button9,
            button10,
            button11,
            button12,
            button13,
            button14,
            button15,
            button16,
            axis1,
            axis2,
            axis3,
            axis4
          ]);
        }
      };
    }
  });

  // EmscriptenBuild/src/logics/device.ts
  var hel_video_SetVolume, toggleGyroActive, scanGamepads, updateGamepadsInfo, addGamepad, removeGamepad, initializeGamePad;
  var init_device = __esm({
    "EmscriptenBuild/src/logics/device.ts"() {
      "use strict";
      init_const();
      init_dataOps();
      init_domOps();
      init_moduleCaller();
      hel_video_SetVolume = (volume) => {
        const video = getVideo();
        if (video === void 0) {
          return;
        }
        const gainNode = getVideoGainNode();
        if (gainNode === void 0) {
          video.volume = volume;
          return;
        }
        gainNode.gain.value = volume;
      };
      toggleGyroActive = () => {
        setGyroActiveToggle(!getGyroActiveToggle());
        requestToToggleActivateGyro();
        return getGyroActiveToggle();
      };
      worldViewerWindow.toggleGyroActiveRequest = () => {
        if (getGyroActiveToggle()) {
          toggleGyroActive();
          return;
        }
        if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === "function") {
          DeviceOrientationEvent.requestPermission().then((permissionState) => {
            if (permissionState === "granted") {
              toggleGyroActive();
            }
          }).catch(console.error);
        } else {
          toggleGyroActive();
        }
      };
      worldViewerWindow.g_gamepadController = {};
      worldViewerWindow.getGamepadControllers = () => {
        if (worldViewerWindow.g_gamepadController == null) {
          return [];
        }
        return worldViewerWindow.g_gamepadController;
      };
      worldViewerWindow.g_gamepadController = [];
      worldViewerWindow.getGamepadControllers = () => {
        return worldViewerWindow.g_gamepadController;
      };
      worldViewerWindow.g_gamepadInfoArray = [];
      worldViewerWindow.getGamepadInfoArray = () => {
        return worldViewerWindow.g_gamepadInfoArray;
      };
      scanGamepads = () => {
        const controllers = worldViewerWindow.getGamepadControllers();
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];
        for (let i = 0; i < gamepads.length; i++) {
          if (gamepads[i] && gamepads[i].index in controllers) {
            controllers[gamepads[i].index] = gamepads[i];
          }
        }
      };
      updateGamepadsInfo = () => {
        if (worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_IsUseGamePad, "") != 1) {
          return;
        }
        scanGamepads();
        const controllers = worldViewerWindow.getGamepadControllers();
        const gamepadInfoArray = worldViewerWindow.getGamepadInfoArray();
        for (let j in controllers) {
          const controller = controllers[j];
          for (let i2 = 0; i2 < controller.buttons.length; i2++) {
            const val = controller.buttons[i2];
            if (typeof val == "object") {
              var _gamepadInfoArray_j;
              gamepadInfoArray[j] = (_gamepadInfoArray_j = gamepadInfoArray[j]) !== null && _gamepadInfoArray_j !== void 0 ? _gamepadInfoArray_j : [];
              var _gamepadInfoArray_j_buttons;
              gamepadInfoArray[j].buttons = (_gamepadInfoArray_j_buttons = gamepadInfoArray[j].buttons) !== null && _gamepadInfoArray_j_buttons !== void 0 ? _gamepadInfoArray_j_buttons : [];
              var _gamepadInfoArray_j_buttons_i;
              gamepadInfoArray[j].buttons[i2] = (_gamepadInfoArray_j_buttons_i = gamepadInfoArray[j].buttons[i2]) !== null && _gamepadInfoArray_j_buttons_i !== void 0 ? _gamepadInfoArray_j_buttons_i : {};
              gamepadInfoArray[j].buttons[i2].pressed = val.pressed;
              if ("touched" in val) {
                gamepadInfoArray[j].buttons[i2].touched = val.touched;
              }
              gamepadInfoArray[j].buttons[i2].value = val.value;
            }
          }
          for (var i = 0; i < controller.axes.length; i++) {
            var _gamepadInfoArray_j1;
            gamepadInfoArray[j] = (_gamepadInfoArray_j1 = gamepadInfoArray[j]) !== null && _gamepadInfoArray_j1 !== void 0 ? _gamepadInfoArray_j1 : [];
            var _gamepadInfoArray_j_axis;
            gamepadInfoArray[j].axis = (_gamepadInfoArray_j_axis = gamepadInfoArray[j].axis) !== null && _gamepadInfoArray_j_axis !== void 0 ? _gamepadInfoArray_j_axis : [];
            gamepadInfoArray[j].axis[i] = controller.axes[i];
          }
        }
        if (gamepadInfoArray[0] != null) {
          const gamepadInfo = gamepadInfoArray[0];
          var _gamepadInfo_buttons__value, _gamepadInfo_buttons__value1, _gamepadInfo_buttons__value2, _gamepadInfo_buttons__value3, _gamepadInfo_buttons__value4, _gamepadInfo_buttons__value5, _gamepadInfo_buttons__value6, _gamepadInfo_buttons__value7, _gamepadInfo_buttons__value8, _gamepadInfo_buttons__value9, _gamepadInfo_buttons__value10, _gamepadInfo_buttons__value11, _gamepadInfo_buttons__value12, _gamepadInfo_buttons__value13, _gamepadInfo_buttons__value14, _gamepadInfo_buttons__value15, _gamepadInfo_axis_, _gamepadInfo_axis_1, _gamepadInfo_axis_2, _gamepadInfo_axis_3;
          sendGamepadData(gamepadInfo.buttons.length >= 1 ? (_gamepadInfo_buttons__value = gamepadInfo.buttons[0].value) !== null && _gamepadInfo_buttons__value !== void 0 ? _gamepadInfo_buttons__value : 0 : 0, gamepadInfo.buttons.length >= 2 ? (_gamepadInfo_buttons__value1 = gamepadInfo.buttons[1].value) !== null && _gamepadInfo_buttons__value1 !== void 0 ? _gamepadInfo_buttons__value1 : 0 : 0, gamepadInfo.buttons.length >= 3 ? (_gamepadInfo_buttons__value2 = gamepadInfo.buttons[2].value) !== null && _gamepadInfo_buttons__value2 !== void 0 ? _gamepadInfo_buttons__value2 : 0 : 0, gamepadInfo.buttons.length >= 4 ? (_gamepadInfo_buttons__value3 = gamepadInfo.buttons[3].value) !== null && _gamepadInfo_buttons__value3 !== void 0 ? _gamepadInfo_buttons__value3 : 0 : 0, gamepadInfo.buttons.length >= 5 ? (_gamepadInfo_buttons__value4 = gamepadInfo.buttons[4].value) !== null && _gamepadInfo_buttons__value4 !== void 0 ? _gamepadInfo_buttons__value4 : 0 : 0, gamepadInfo.buttons.length >= 6 ? (_gamepadInfo_buttons__value5 = gamepadInfo.buttons[5].value) !== null && _gamepadInfo_buttons__value5 !== void 0 ? _gamepadInfo_buttons__value5 : 0 : 0, gamepadInfo.buttons.length >= 7 ? (_gamepadInfo_buttons__value6 = gamepadInfo.buttons[6].value) !== null && _gamepadInfo_buttons__value6 !== void 0 ? _gamepadInfo_buttons__value6 : 0 : 0, gamepadInfo.buttons.length >= 8 ? (_gamepadInfo_buttons__value7 = gamepadInfo.buttons[7].value) !== null && _gamepadInfo_buttons__value7 !== void 0 ? _gamepadInfo_buttons__value7 : 0 : 0, gamepadInfo.buttons.length >= 9 ? (_gamepadInfo_buttons__value8 = gamepadInfo.buttons[8].value) !== null && _gamepadInfo_buttons__value8 !== void 0 ? _gamepadInfo_buttons__value8 : 0 : 0, gamepadInfo.buttons.length >= 10 ? (_gamepadInfo_buttons__value9 = gamepadInfo.buttons[9].value) !== null && _gamepadInfo_buttons__value9 !== void 0 ? _gamepadInfo_buttons__value9 : 0 : 0, gamepadInfo.buttons.length >= 11 ? (_gamepadInfo_buttons__value10 = gamepadInfo.buttons[10].value) !== null && _gamepadInfo_buttons__value10 !== void 0 ? _gamepadInfo_buttons__value10 : 0 : 0, gamepadInfo.buttons.length >= 12 ? (_gamepadInfo_buttons__value11 = gamepadInfo.buttons[11].value) !== null && _gamepadInfo_buttons__value11 !== void 0 ? _gamepadInfo_buttons__value11 : 0 : 0, gamepadInfo.buttons.length >= 13 ? (_gamepadInfo_buttons__value12 = gamepadInfo.buttons[12].value) !== null && _gamepadInfo_buttons__value12 !== void 0 ? _gamepadInfo_buttons__value12 : 0 : 0, gamepadInfo.buttons.length >= 14 ? (_gamepadInfo_buttons__value13 = gamepadInfo.buttons[13].value) !== null && _gamepadInfo_buttons__value13 !== void 0 ? _gamepadInfo_buttons__value13 : 0 : 0, gamepadInfo.buttons.length >= 15 ? (_gamepadInfo_buttons__value14 = gamepadInfo.buttons[14].value) !== null && _gamepadInfo_buttons__value14 !== void 0 ? _gamepadInfo_buttons__value14 : 0 : 0, gamepadInfo.buttons.length >= 16 ? (_gamepadInfo_buttons__value15 = gamepadInfo.buttons[15].value) !== null && _gamepadInfo_buttons__value15 !== void 0 ? _gamepadInfo_buttons__value15 : 0 : 0, gamepadInfo.axis.length >= 1 ? (_gamepadInfo_axis_ = gamepadInfo.axis[0]) !== null && _gamepadInfo_axis_ !== void 0 ? _gamepadInfo_axis_ : 0 : 0, gamepadInfo.axis.length >= 2 ? (_gamepadInfo_axis_1 = gamepadInfo.axis[1]) !== null && _gamepadInfo_axis_1 !== void 0 ? _gamepadInfo_axis_1 : 0 : 0, gamepadInfo.axis.length >= 3 ? (_gamepadInfo_axis_2 = gamepadInfo.axis[2]) !== null && _gamepadInfo_axis_2 !== void 0 ? _gamepadInfo_axis_2 : 0 : 0, gamepadInfo.axis.length >= 4 ? (_gamepadInfo_axis_3 = gamepadInfo.axis[3]) !== null && _gamepadInfo_axis_3 !== void 0 ? _gamepadInfo_axis_3 : 0 : 0);
        }
      };
      addGamepad = (e) => {
        const controllers = worldViewerWindow.getGamepadControllers();
        controllers[e.gamepad.index] = e.gamepad;
      };
      removeGamepad = (e) => {
        const controllers = worldViewerWindow.getGamepadControllers();
        const gamepadInfoArray = worldViewerWindow.getGamepadInfoArray();
        delete controllers[e.gamepad.index];
        delete gamepadInfoArray[e.gamepad.index];
      };
      initializeGamePad = () => {
        if ("GamepadEvent" in window) {
          window.addEventListener("gamepadconnected", addGamepad);
          window.addEventListener("gamepaddisconnected", removeGamepad);
        } else if ("WebKitGamepadEvent" in window) {
          window.addEventListener("webkitgamepadconnected", addGamepad);
          window.addEventListener("webkitgamepaddisconnected", removeGamepad);
        }
      };
    }
  });

  // EmscriptenBuild/src/heliodor_core_shared.ts
  var require_heliodor_core_shared = __commonJS({
    "EmscriptenBuild/src/heliodor_core_shared.ts"(exports) {
      "use strict";
      init_const();
      init_dataOps();
      init_device();
      init_domOps();
      init_moduleCaller();
      init_platform();
      worldViewerWindow.hel_set_cookie = (name, value) => {
        const expires = ";Expires=Thu, 1-Jan-2030 00:00:00 GMT";
        document.cookie = name + "=" + encodeURIComponent(value) + expires;
      };
      worldViewerWindow.hel_get_cookie = (name) => {
        const matches = document.cookie.match(
          new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
        );
        return matches ? decodeURIComponent(matches[1]) : void 0;
      };
      worldViewerWindow.hel_get_cookie_onEmptyStr = (name) => {
        const matches = document.cookie.match(
          new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
        );
        return matches ? decodeURIComponent(matches[1]) : "";
      };
      worldViewerWindow.hel_setText = (Type, Text) => {
        return requestProcedureCallFor(Type, Text);
      };
      worldViewerWindow.hel_postMessage = (Type, Text) => {
        requestProcedurePostFor(Type, Text);
      };
      worldViewerWindow.hel_setBinary = (Type, ary_u8) => {
        return requestProcedureCallBinaryFor(Type, ary_u8);
      };
      worldViewerWindow.hel_script_CallComponentMethod = (itemName, componentName, methodName, param) => {
        worldViewerWindow.hel_setText(ETextParamType_ScriptCallComponentMethod, itemName + "," + componentName + "," + methodName + "," + param);
      };
      worldViewerWindow.hel_script_CallCanvasComponentMethod = (layerName, componentName, methodName, param) => {
        worldViewerWindow.hel_setText(ETextParamType_ScriptCallCanvasComponentMethod, layerName + "," + componentName + "," + methodName + "," + param);
      };
      worldViewerWindow.getPlayTimeAudio = (index) => {
        var _audioList_index;
        const audioList = getAudioList();
        if (audioList[index] === null) {
          return 0;
        }
        return ((_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.getPlayTimeAudio()) || 0;
      };
      worldViewerWindow.hel_mixer_SetVolume = (type, volume, mastervolume, fadeVolume, distanceVolume, mute) => {
        const realVolume = getMixerTab() * volume * mastervolume * fadeVolume * distanceVolume * (mute !== 0 ? 0 : 1);
        switch (type) {
          case worldViewerWindow.HEL_AUDIO_TYPE_WORLD:
            worldViewerWindow.hel_set_cookie("mixervolume_world", volume);
            worldViewerWindow.hel_set_cookie("mixermute_world", mute);
            break;
          case worldViewerWindow.HEL_AUDIO_TYPE_VOICE:
            if (typeof worldViewerWindow.hel_skyway_SetMixerVolume === "function") {
              worldViewerWindow.hel_skyway_SetMixerVolume(realVolume);
            }
            worldViewerWindow.hel_set_cookie("mixervolume_voice", volume);
            worldViewerWindow.hel_set_cookie("mixermute_voice", mute);
            break;
          case worldViewerWindow.HEL_AUDIO_TYPE_SE:
            worldViewerWindow.hel_set_cookie("mixervolume_se", volume);
            worldViewerWindow.hel_set_cookie("mixermute_se", mute);
            break;
          case worldViewerWindow.HEL_AUDIO_TYPE_SYSTEMSE:
            worldViewerWindow.hel_set_cookie("mixervolume_systemse", volume);
            worldViewerWindow.hel_set_cookie("mixermute_systemse", mute);
            break;
          case worldViewerWindow.HEL_AUDIO_TYPE_VIDEO:
            hel_video_SetVolume(realVolume);
            worldViewerWindow.hel_set_cookie("mixervolume_video", volume);
            worldViewerWindow.hel_set_cookie("mixermute_video", mute);
            break;
          default:
            return;
        }
        setMixerSettingAt(volume, type);
        setMixerRealSettingAt(realVolume, type);
        setMixerFaderSettingAt(fadeVolume, type);
        setMixerDistanceAt(distanceVolume, type);
        setMixerMuteAt(mute, type);
      };
      worldViewerWindow.hel_mixer_SetMasterVolume = (volume) => {
        worldViewerWindow.hel_set_cookie("mixervolume_master", volume);
      };
      worldViewerWindow.hel_mixer_SetMuteMaster = (mute) => {
        worldViewerWindow.hel_set_cookie("mixermute_master", mute);
      };
      worldViewerWindow.hel_texture_IsPower2Size = (size) => {
        return (size & size - 1) === 0;
      };
      worldViewerWindow.createTextCanvas = (width, height) => {
        const index = defineNextTextCanvasIndex();
        const textCanvas = document.createElement("canvas");
        setTextureCanvasList(textCanvas, index);
        textCanvas.style.visibility = "hidden";
        textCanvas.width = width;
        textCanvas.height = height;
        return index;
      };
      worldViewerWindow.getTextCanvas = (index) => {
        const canvasList = getTextureCanvasList();
        if (index < 0 || index >= canvasList.length) {
          return null;
        }
        return getTextureCanvasList()[index];
      };
      worldViewerWindow.getTextCanvasContext = (index) => {
        const textCanvas = worldViewerWindow.getTextCanvas(index);
        if (textCanvas === null)
          return null;
        return textCanvas.getContext("2d");
      };
      worldViewerWindow.clearTextCanvas = (index) => {
        const textCanvas = worldViewerWindow.getTextCanvas(index);
        if (textCanvas === null)
          return;
        const context = textCanvas.getContext("2d");
        if (context === null)
          return;
        context.clearRect(0, 0, textCanvas.width, textCanvas.height);
      };
      worldViewerWindow.releaseTextCanvasIndex = (index) => {
        const canvasList = getTextureCanvasList();
        if (index < 0 || index >= canvasList.length || canvasList[index] === null) {
          return;
        }
        setTextureCanvasList(null, index);
      };
      worldViewerWindow.hel_gtag = (name, params) => {
        if (typeof worldViewerWindow.hel_analytics === "function") {
          worldViewerWindow.hel_analytics("event", name, params);
        } else if (typeof worldViewerWindow.gtag === "function") {
          worldViewerWindow.gtag("event", name, params);
        }
      };
      var setFileReaderEvents = (files) => {
        if (files.length <= 0) {
          return;
        }
        const file = files[0];
        requestOnDropFilesBegin(file);
        const reader = new FileReader();
        reader.onprogress = (evt) => {
          if (!evt.lengthComputable || evt.total <= 0) {
            return;
          }
          requestOnDropFilesProgress(evt);
        };
        reader.onload = () => {
          setUploadedFileBuffer(reader.result);
          const ary_u8 = new Uint8Array(reader.result);
          const data = requestMemoryAllocate(ary_u8.length);
          requestSetDataToHeap(ary_u8, data);
          requestOnDropFiles(file, ary_u8, data);
          requestReleaseMemoryFor(data);
        };
        reader.readAsArrayBuffer(file);
      };
      worldViewerWindow.hel_get_MainWebGLRenderingContext = () => {
        return getWebGLRenderingContext();
      };
      worldViewerWindow.hel_beginDropFiles = () => {
        const mainCanvas2 = getMainCanvasDOMElement();
        if (mainCanvas2 === void 0) {
          return;
        }
        mainCanvas2.addEventListener("dragover", (e) => {
          e.stopPropagation();
          e.preventDefault();
        }, false);
        mainCanvas2.addEventListener("dragleave", (e) => {
          e.stopPropagation();
          e.preventDefault();
        }, false);
        mainCanvas2.addEventListener("drop", (e) => {
          e.stopPropagation();
          e.preventDefault();
          setFileReaderEvents(e.dataTransfer.files || []);
        }, false);
        const inputFile = getInputFileDOMElement();
        if (inputFile !== void 0) {
          inputFile.addEventListener("change", (e) => {
            e.stopPropagation();
            e.preventDefault();
            const files = exports.files;
            setFileReaderEvents(files || []);
          }, false);
        }
      };
      worldViewerWindow.hel_resize_InputField = (x, y, width, height, fontSize, DivElementName, InputElementName) => {
        const DivElement = document.getElementById(DivElementName);
        if (DivElement !== void 0 && DivElement !== null) {
          DivElement.style.left = x + "px";
          DivElement.style.top = y + "px";
        }
        const InputElement = document.getElementById(InputElementName);
        if (InputElement !== void 0 && InputElement !== null) {
          InputElement.style.width = width + "px";
          InputElement.style.height = height + "px";
          InputElement.style.fontSize = fontSize + "px";
        }
      };
      worldViewerWindow.hel_set_HTMLElement_visibility = (elementName, show) => {
        var element = document.getElementById(elementName);
        if (element !== void 0 && element !== null) {
          element.style.visibility = show ? "visible" : "hidden";
        }
      };
      worldViewerWindow.hel_set_show_TextField_configurl = (show) => {
        const localTextConfigUrl = getLocalTextConfigUrlDOMElement();
        if (localTextConfigUrl !== void 0) {
          localTextConfigUrl.style.visibility = show ? "visible" : "hidden";
        }
        const configUrl = getConfigUrlDOMElement();
        if (configUrl !== void 0) {
          configUrl.style.visibility = show ? "visible" : "hidden";
        }
      };
      worldViewerWindow.hel_resize_configurl = (x, y, width, height) => {
        const configUrl = getConfigUrlDOMElement();
        if (configUrl !== void 0) {
          configUrl.style.left = x + "px";
          configUrl.style.top = y + "px";
        }
        const localTextConfigUrl = getLocalTextConfigUrlDOMElement();
        if (localTextConfigUrl !== void 0) {
          localTextConfigUrl.style.width = width + "px";
          localTextConfigUrl.style.height = height + "px";
        }
      };
      worldViewerWindow.hel_set_TextField_configurl = (text) => {
        const localTextConfigUrl = getLocalTextConfigUrlDOMElement();
        if (localTextConfigUrl !== void 0) {
          localTextConfigUrl.value = text;
        }
      };
      worldViewerWindow.hel_set_TextField_configurl_fontSize = (text) => {
        const localTextConfigUrl = getLocalTextConfigUrlDOMElement();
        if (localTextConfigUrl !== void 0) {
          localTextConfigUrl.style.fontSize = text + "px";
        }
      };
      worldViewerWindow.hel_set_show_TextField_UserName = (show) => {
        const localTextUserName = getLocalTextUserNameDOMElement();
        if (localTextUserName !== void 0) {
          localTextUserName.style.visibility = show ? "visible" : "hidden";
        }
        const userName = getUserNameDOMElement();
        if (userName !== void 0) {
          userName.style.visibility = show ? "visible" : "hidden";
        }
      };
      worldViewerWindow.hel_set_TextField_UserName = (name) => {
        const localTextUserName = getLocalTextUserNameDOMElement();
        if (localTextUserName === void 0 || name === void 0) {
          return;
        }
        localTextUserName.value = name;
      };
      worldViewerWindow.hel_post_TextField_UserName = (byCookie) => {
        let result_uname;
        if (byCookie) {
          const uname = worldViewerWindow.hel_get_cookie("playername");
          if (uname !== void 0) {
            if (uname.length > 0) {
              result_uname = uname;
            }
          }
        } else {
          const localTextUserName = getLocalTextUserNameDOMElement();
          if (localTextUserName !== void 0) {
            result_uname = localTextUserName.value;
          }
        }
        if (result_uname === void 0) {
          return;
        }
        let char_num = 0;
        for (let i = 0; i < result_uname.length; i++) {
          const c = result_uname[i];
          let incNum = 1;
          if (c.match(/[ -~]/)) {
            incNum = 1;
          } else {
            incNum = 2;
          }
          if (char_num + incNum > 20) {
            result_uname = result_uname.substring(0, i);
            break;
          }
          char_num += incNum;
        }
        setCurrentUserName(result_uname);
        worldViewerWindow.hel_setText(ETextParamType_CurrentUserName, result_uname);
      };
      worldViewerWindow.hel_set_TextField_UserName_fontSize = (text) => {
        const localTextUserName = getLocalTextUserNameDOMElement();
        if (localTextUserName !== void 0) {
          localTextUserName.style.fontSize = text + "px";
        }
      };
      worldViewerWindow.hel_update_TextField_UserName = () => {
        const localTextUserName = getLocalTextUserNameDOMElement();
        if (localTextUserName === void 0)
          return;
        const skywayName = getSkywayName();
        worldViewerWindow.hel_remove_emoji(localTextUserName);
        const value = localTextUserName.value;
        if (skywayName !== value) {
          setSkywayName(value);
          worldViewerWindow.hel_set_cookie("playername", value);
        }
        worldViewerWindow.hel_skyway_send_myinfo();
      };
      worldViewerWindow.hel_resize_UserName = (x, y, width, height) => {
        const userName = getUserNameDOMElement();
        if (userName !== void 0) {
          userName.style.left = x + "px";
          userName.style.top = y + "px";
        }
        const localTextUserName = getLocalTextUserNameDOMElement();
        if (localTextUserName !== void 0) {
          localTextUserName.style.width = width + "px";
          localTextUserName.style.height = height + "px";
        }
      };
      worldViewerWindow.hel_get_current_username = () => {
        return getCurrentUserName();
      };
      worldViewerWindow.hel_get_skyway_username = () => {
        return getSkywayName();
      };
      worldViewerWindow.hel_skyway_set_show_chatbox = (show) => {
        const msg = getSkywayMsgDOMElement();
        if (msg !== void 0) {
          msg.style.visibility = show ? "visible" : "hidden";
        }
        const localText = getSkywayLocalTextDOMElement();
        if (localText === void 0) {
          return;
        }
        localText.style.visibility = show ? "visible" : "hidden";
      };
      worldViewerWindow.hel_skyway_set_TextField_localText_fontSize = (text) => {
        const skywayLocalText = getSkywayLocalTextDOMElement();
        if (skywayLocalText === void 0) {
          return;
        }
        skywayLocalText.style.fontSize = text + "px";
      };
      worldViewerWindow.hel_skyway_resize_chatbox = (x, y, width, height) => {
        const msg = getSkywayMsgDOMElement();
        if (msg === void 0) {
          return;
        }
        msg.style.left = x + "px";
        msg.style.top = y + "px";
        const skywayLocalText = getSkywayLocalTextDOMElement();
        if (skywayLocalText === void 0) {
          return;
        }
        skywayLocalText.style.width = width + "px";
        skywayLocalText.style.height = height + "px";
      };
      worldViewerWindow.getNumOfPlayers = (room) => {
        if (room._options.mode.toLowerCase() === "mesh") {
          return 1 + Object.values(room.getPeerConnections()).length;
        }
        if (room._options.mode.toLowerCase() === "sfu") {
          return 1 + room.members.length.length;
        }
      };
      worldViewerWindow.hel_skyway_send_JSCustomData = (param) => {
        worldViewerWindow.hel_skyway_send_data("jsdata:" + param);
      };
      worldViewerWindow.hel_skyway_set_avatar_forsend = (avatar) => {
        setSkywayAvatarNumberForSend(avatar);
      };
      worldViewerWindow.hel_skyway_set_avatar = (avatar) => setSkywayAvatarNumber(avatar);
      worldViewerWindow.hel_skyway_change_avatar = (avatar, uuid, setcookie) => {
        setSkywayAvatarNumber(avatar);
        setSkywayAvatarNumberForSend(avatar);
        worldViewerWindow.hel_gtag("AvatarChange", {
          param0: getWorldId(),
          param1: avatar
        });
        if (setcookie) {
          worldViewerWindow.hel_set_cookie("Avatar", avatar);
          worldViewerWindow.hel_set_cookie("MyAvatarUUID", uuid);
        }
      };
      worldViewerWindow.hel_skyway_get_avatar = () => {
        return getSkywayAvatarNumberForSend();
      };
      worldViewerWindow.hel_set_custom_avataricon = (url) => {
        setSkywayUseCustomAvatarIcon(url !== null && url !== "");
        setSkywayCustomAvatarIconURL(url);
      };
      worldViewerWindow.hel_get_use_custom_avataricon = () => {
        return getSkywayUseCustomAvatarIcon() ? 1 : 0;
      };
      var hel_skyway_detect_voice = (input, analyzer, timeDomainArray, frequencyArray) => {
        analyzer.getFloatTimeDomainData(timeDomainArray);
        analyzer.getFloatFrequencyData(frequencyArray);
        const maxDomain = Math.max(...timeDomainArray);
        const voice_threshold = 0.05;
        if (maxDomain > voice_threshold) {
          const VolumeRate = (maxDomain * 100).toFixed();
          worldViewerWindow.hel_canvas_SetLayoutShow("HUD_Voice", true);
          worldViewerWindow.hel_setText(ETextParamType_SetMicTalkingState, VolumeRate);
          worldViewerWindow.hel_canvas_SetGUIShow("hud_voicechat_on", false);
        } else {
          worldViewerWindow.hel_canvas_SetLayoutShow("HUD_Voice", false);
          worldViewerWindow.hel_setText(ETextParamType_SetMicTalkingState, "0");
          worldViewerWindow.hel_canvas_SetGUIShow("hud_voicechat_on", true);
        }
      };
      worldViewerWindow.hel_skyway_set_mic_state = (state) => {
        const localStream = getLocalStream();
        if (localStream === void 0) {
          return;
        }
        const tracks = localStream.getAudioTracks();
        if (tracks.length <= 0) {
          return;
        }
        tracks[0].enabled = state;
        if (state) {
          const audioCtx = new AudioContext();
          const input = audioCtx.createMediaStreamSource(localStream);
          const analyzer = audioCtx.createAnalyser();
          input.connect(analyzer);
          const timeDomainArray = new Float32Array(analyzer.fftSize);
          const frequencyArray = new Float32Array(analyzer.frequencyBinCount);
          const timer = setInterval(hel_skyway_detect_voice.bind(null, input, analyzer, timeDomainArray, frequencyArray), 200);
          setSkywayMicStateTimer(timer);
        } else {
          worldViewerWindow.hel_canvas_SetLayoutShow("HUD_Voice", false);
          worldViewerWindow.hel_setText(ETextParamType_SetMicTalkingState, "0");
          const timer = getSkywayMicStateTimer();
          if (timer !== void 0) {
            clearInterval(timer);
          }
        }
      };
      worldViewerWindow.hel_onclickedavatar_call = (playerID) => {
        const procedures = getOnclickedAvatarProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i](playerID);
          }
        }
        if (typeof worldViewerWindow.hel_onclickedavatar === "function") {
          worldViewerWindow.hel_onclickedavatar(playerID);
        }
      };
      worldViewerWindow.hel_onclickedavatar_add = (callFunc) => {
        setOnclickedAvatarProcedureList(callFunc);
      };
      worldViewerWindow.hel_onloaded_call = () => {
        const procedures = getOnloadedProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i]();
          }
        }
        if (typeof worldViewerWindow.hel_onloaded === "function") {
          worldViewerWindow.hel_onloaded();
        }
      };
      worldViewerWindow.hel_onbeginloading_call = () => {
        if (typeof worldViewerWindow.hel_onbeginloading === "function") {
          worldViewerWindow.hel_onbeginloading();
        }
      };
      worldViewerWindow.hel_onloaded_add = (callFunc) => {
        setOnloadedProcedureList(callFunc);
      };
      worldViewerWindow.hel_onfirsttouch_call = () => {
        const procedures = getOnfirsttouchProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i]();
          }
        }
      };
      worldViewerWindow.hel_onfirsttouch_add = (callFunc) => {
        setOnfirsttouchProcedureList(callFunc);
      };
      worldViewerWindow.hel_onresize_generic_call = () => {
        const procedures = getOnresizeProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i]();
          }
        }
      };
      worldViewerWindow.hel_onresize_generic_add = (callFunc) => {
        setOnresizeProcedureList(callFunc);
      };
      worldViewerWindow.hel_action_bridge_add = (actionProcedureCall) => setActionProcedureList(actionProcedureCall);
      worldViewerWindow.hel_action_bridge_call = (name, text) => {
        const procedures = getActionProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function" && procedures[i](name, text)) {
            return;
          }
        }
        if (typeof worldViewerWindow.hel_action_bridge === "function") {
          worldViewerWindow.hel_action_bridge(name, text);
        }
      };
      worldViewerWindow.hel_skyway_command_bridge_add = (callFunc) => {
        setSkywayCommandProcedureList(callFunc);
      };
      worldViewerWindow.hel_skyway_command_bridge_call = (ID, Type, Data) => {
        const procedures = getSkywayCommandProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i](ID, Type, Data);
          }
        }
      };
      worldViewerWindow.hel_skyway_myinfo_bridge_add = (callFunc) => {
        setSkywayMyinfoProcedureList(callFunc);
      };
      worldViewerWindow.hel_skyway_myinfo_bridge_call = () => {
        const procedures = getSkywayMyinfoProcedureList();
        for (let i = 0; i < procedures.length; i += 1) {
          if (typeof procedures[i] === "function") {
            procedures[i]();
          }
        }
      };
      worldViewerWindow.hel_isLangJa = hel_isLangJa;
      worldViewerWindow.hel_regex_is_halfWidth = (c) => {
        const cStr = String.fromCharCode(c);
        if (cStr.match(/[ -~]/)) {
          return true;
        } else {
          return false;
        }
      };
      worldViewerWindow.hel_get_vcuid = () => {
        var vcuid = getVCUID();
        if (vcuid === void 0 || vcuid === null) {
          return "";
        }
        return vcuid;
      };
      worldViewerWindow.hel_toast_notify_message = (message, beginDeltaTime, stayTime, endDeltaTime) => {
        var JSONData = {
          "message": message,
          "beginDeltaTime": beginDeltaTime,
          "stayTime": stayTime,
          "endDeltaTime": endDeltaTime
        };
        worldViewerWindow.hel_script_CallCanvasComponentMethod("toast", "ToastViewModel", "NotifyMessageFromJS", JSON.stringify(JSONData));
      };
      worldViewerWindow.hel_textchat_notify_message = (param, isSystem) => {
        if (isSystem) {
          worldViewerWindow.hel_script_CallCanvasComponentMethod("textchat_common", "TCViewModel", "NotifySystemMessageFromJS", param);
        } else {
          worldViewerWindow.hel_script_CallCanvasComponentMethod("textchat_common", "TCViewModel", "NotifyChatMessageFromJS", param);
        }
      };
      worldViewerWindow.hel_textchat_send_message = () => {
        worldViewerWindow.hel_setText(ETextParamType_OnSendTextChat, "");
      };
      worldViewerWindow.hel_get_worldid = () => {
        return getWorldId();
      };
    }
  });

  // node_modules/skyway-js/dist/skyway.js
  var require_skyway = __commonJS({
    "node_modules/skyway-js/dist/skyway.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["Peer"] = factory();
        else
          root["Peer"] = factory();
      })(globalThis, function() {
        return function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module1 = installedModules[moduleId] = {
              i: moduleId,
              l: false,
              exports: {}
            };
            modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            module1.l = true;
            return module1.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports1, name, getter) {
            if (!__webpack_require__.o(exports1, name)) {
              Object.defineProperty(exports1, name, {
                enumerable: true,
                get: getter
              });
            }
          };
          __webpack_require__.r = function(exports1) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports1, Symbol.toStringTag, {
                value: "Module"
              });
            }
            Object.defineProperty(exports1, "__esModule", {
              value: true
            });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1)
              value = __webpack_require__(value);
            if (mode & 8)
              return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
              return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
              enumerable: true,
              value
            });
            if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(ns, key, function(key2) {
                  return value[key2];
                }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module1) {
            var getter = module1 && module1.__esModule ? function getDefault() {
              return module1["default"];
            } : function getModuleExports() {
              return module1;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./src/peer.js");
        }({
          "./node_modules/@jitsi/sdp-interop/lib/array-equals.js": function(module1, exports1) {
            module1.exports = function arrayEquals(array) {
              if (!array)
                return false;
              if (this.length != array.length)
                return false;
              for (var i = 0, l = this.length; i < l; i++) {
                if (this[i] instanceof Array && array[i] instanceof Array) {
                  if (!arrayEquals.apply(this[i], [
                    array[i]
                  ]))
                    return false;
                } else if (this[i] != array[i]) {
                  return false;
                }
              }
              return true;
            };
          },
          "./node_modules/@jitsi/sdp-interop/lib/index.js": function(module1, exports1, __webpack_require__) {
            exports1.Interop = __webpack_require__("./node_modules/@jitsi/sdp-interop/lib/interop.js");
          },
          "./node_modules/@jitsi/sdp-interop/lib/interop.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            var transform = __webpack_require__("./node_modules/@jitsi/sdp-interop/lib/transform.js");
            var arrayEquals = __webpack_require__("./node_modules/@jitsi/sdp-interop/lib/array-equals.js");
            function midToString(line) {
              if (typeof line.mid === "number") {
                line.mid = line.mid.toString();
              }
            }
            function Interop() {
              this.cache = {
                mlB2UMap: {},
                mlU2BMap: {}
              };
            }
            module1.exports = Interop;
            Interop.prototype.candidateToUnifiedPlan = function(candidate) {
              var cand = new RTCIceCandidate(candidate);
              cand.sdpMLineIndex = this.cache.mlB2UMap[cand.sdpMLineIndex];
              return cand;
            };
            Interop.prototype.candidateToPlanB = function(candidate) {
              var cand = new RTCIceCandidate(candidate);
              if (cand.sdpMid.indexOf("audio") === 0) {
                cand.sdpMid = "audio";
              } else if (cand.sdpMid.indexOf("video") === 0) {
                cand.sdpMid = "video";
              } else {
                throw new Error("candidate with " + cand.sdpMid + " not allowed");
              }
              cand.sdpMLineIndex = this.cache.mlU2BMap[cand.sdpMLineIndex];
              return cand;
            };
            Interop.prototype.getFirstSendingIndexFromAnswer = function(type) {
              if (!this.cache.answer) {
                return null;
              }
              var session = transform.parse(this.cache.answer);
              if (session && session.media && Array.isArray(session.media)) {
                for (var i = 0; i < session.media.length; i++) {
                  if (session.media[i].type == type && (!session.media[i].direction || session.media[i].direction === "sendrecv" || session.media[i].direction === "sendonly")) {
                    return i;
                  }
                }
              }
              return null;
            };
            Interop.prototype.toPlanB = function(desc) {
              var self1 = this;
              if (typeof desc !== "object" || desc === null || typeof desc.sdp !== "string") {
                console.warn("An empty description was passed as an argument.");
                return desc;
              }
              var session = transform.parse(desc.sdp);
              if (typeof session.media === "undefined" || !Array.isArray(session.media) || session.media.length === 0) {
                console.warn("The description has no media.");
                return desc;
              }
              if (session.media.length <= 3 && session.media.every(function(m) {
                return [
                  "video",
                  "audio",
                  "data"
                ].indexOf(m.mid) !== -1;
              })) {
                console.warn("This description does not look like Unified Plan.");
                return desc;
              }
              var sdp = desc.sdp;
              var rewrite = false;
              for (var i = 0; i < session.media.length; i++) {
                var uLine = session.media[i];
                uLine.rtp.forEach(function(rtp) {
                  if (rtp.codec === "NULL") {
                    rewrite = true;
                    var offer = transform.parse(self1.cache.offer);
                    rtp.codec = offer.media[i].rtp[0].codec;
                  }
                });
              }
              if (rewrite) {
                sdp = transform.write(session);
              }
              this.cache[desc.type] = sdp;
              var media = session.media;
              session.media = [];
              var type2bl = {};
              var types = [];
              var directionResult = {};
              media.forEach(function(uLine2) {
                midToString(uLine2);
                if ((typeof uLine2.rtcpMux !== "string" || uLine2.rtcpMux !== "rtcp-mux") && uLine2.direction !== "inactive" && uLine2.type !== "application") {
                  throw new Error("Cannot convert to Plan B because m-lines without the rtcp-mux attribute were found.");
                }
                if (typeof type2bl[uLine2.type] === "undefined" || type2bl[uLine2.type].direction === "inactive") {
                  type2bl[uLine2.type] = uLine2;
                }
              });
              media.forEach(function(uLine2) {
                var type = uLine2.type;
                if (type === "application") {
                  uLine2.mid = "data";
                  session.media.push(uLine2);
                  types.push(uLine2.mid);
                  return;
                }
                if (typeof uLine2.sources === "object") {
                  Object.keys(uLine2.sources).forEach(function(ssrc) {
                    if (typeof type2bl[type].sources !== "object")
                      type2bl[type].sources = {};
                    type2bl[type].sources[ssrc] = uLine2.sources[ssrc];
                    if (typeof uLine2.msid !== "undefined") {
                      type2bl[type].sources[ssrc].msid = uLine2.msid;
                    }
                  });
                }
                if (typeof uLine2.ssrcGroups !== "undefined" && Array.isArray(uLine2.ssrcGroups)) {
                  if (typeof type2bl[type].ssrcGroups === "undefined" || !Array.isArray(type2bl[type].ssrcGroups)) {
                    type2bl[type].ssrcGroups = [];
                  }
                  if (!arrayEquals.apply(type2bl[type].ssrcGroups, [
                    uLine2.ssrcGroups
                  ])) {
                    type2bl[type].ssrcGroups = type2bl[type].ssrcGroups.concat(uLine2.ssrcGroups);
                  }
                }
                var direction = uLine2.direction;
                directionResult[type] = (directionResult[type] || 0) | directionMasks[direction || "inactive"];
                if (type2bl[type] === uLine2) {
                  uLine2.mid = type;
                  delete uLine2.bundleOnly;
                  delete uLine2.msid;
                  if (direction !== "inactive") {
                    types.push(type);
                  }
                  session.media.push(uLine2);
                }
              });
              session.groups.some(function(group) {
                if (group.type === "BUNDLE") {
                  group.mids = types.join(" ");
                  return true;
                }
              });
              session.msidSemantic = {
                semantic: "WMS",
                token: "*"
              };
              var resStr = transform.write(session);
              return new RTCSessionDescription({
                type: desc.type,
                sdp: resStr
              });
            };
            Interop.prototype.toUnifiedPlan = function(desc) {
              var self1 = this;
              if (typeof desc !== "object" || desc === null || typeof desc.sdp !== "string") {
                console.warn("An empty description was passed as an argument.");
                return desc;
              }
              var session = transform.parse(desc.sdp);
              if (typeof session.media === "undefined" || !Array.isArray(session.media) || session.media.length === 0) {
                console.warn("The description has no media.");
                return desc;
              }
              if (session.media.length > 3 || !session.media.every(function(m) {
                return [
                  "video",
                  "audio",
                  "data"
                ].indexOf(m.mid) !== -1;
              })) {
                console.warn("This description does not look like Plan B.");
                return desc;
              }
              var mids = [];
              session.media.forEach(function(m) {
                mids.push(m.mid);
              });
              var hasBundle = false;
              if (typeof session.groups !== "undefined" && Array.isArray(session.groups)) {
                hasBundle = session.groups.every(function(g) {
                  return g.type !== "BUNDLE" || arrayEquals.apply(g.mids.sort(), [
                    mids.sort()
                  ]);
                });
              }
              if (!hasBundle) {
                throw new Error("Cannot convert to Unified Plan because m-lines that are not bundled were found.");
              }
              var cached;
              if (typeof this.cache[desc.type] !== "undefined") {
                cached = transform.parse(this.cache[desc.type]);
              }
              var recvonlySsrcs = {
                audio: {},
                video: {}
              };
              var mid2ul = {};
              var bIdx = 0;
              var uIdx = 0;
              session.media.forEach(function(bLine) {
                if ((typeof bLine.rtcpMux !== "string" || bLine.rtcpMux !== "rtcp-mux") && bLine.direction !== "inactive" && bLine.type !== "application") {
                  throw new Error("Cannot convert to Unified Plan because m-lines without the rtcp-mux attribute were found.");
                }
                if (bLine.type === "application") {
                  var uLineData = null;
                  if (cached && cached.media) {
                    uLineData = cached.media.find(function(uLine2) {
                      return uLine2.type === "application";
                    });
                  }
                  if (uLineData) {
                    mid2ul[uLineData.mid] = uLineData;
                  } else {
                    mid2ul[bLine.mid] = bLine;
                  }
                  return;
                }
                var sources = bLine.sources;
                var ssrcGroups = bLine.ssrcGroups;
                var candidates = bLine.candidates;
                var iceUfrag = bLine.iceUfrag;
                var icePwd = bLine.icePwd;
                var fingerprint = bLine.fingerprint;
                var port = bLine.port;
                delete bLine.sources;
                delete bLine.ssrcGroups;
                delete bLine.candidates;
                delete bLine.iceUfrag;
                delete bLine.icePwd;
                delete bLine.fingerprint;
                delete bLine.port;
                delete bLine.mid;
                var ssrc2group = {};
                if (typeof ssrcGroups !== "undefined" && Array.isArray(ssrcGroups)) {
                  ssrcGroups.forEach(function(ssrcGroup) {
                    if (ssrcGroup.semantics === "SIM") {
                      return;
                    }
                    if (typeof ssrcGroup.ssrcs !== "undefined" && Array.isArray(ssrcGroup.ssrcs)) {
                      ssrcGroup.ssrcs.forEach(function(ssrc) {
                        if (typeof ssrc2group[ssrc] === "undefined") {
                          ssrc2group[ssrc] = [];
                        }
                        ssrc2group[ssrc].push(ssrcGroup);
                      });
                    }
                  });
                }
                var ssrc2ml = {};
                if (typeof sources === "object") {
                  Object.keys(sources).forEach(function(ssrc) {
                    var uLine2;
                    if (desc.type === "offer") {
                      if (!sources[ssrc].msid) {
                        recvonlySsrcs[bLine.type][ssrc] = sources[ssrc];
                        return;
                      }
                    }
                    if (typeof ssrc2group[ssrc] !== "undefined" && Array.isArray(ssrc2group[ssrc])) {
                      ssrc2group[ssrc].some(function(ssrcGroup) {
                        return ssrcGroup.ssrcs.some(function(related) {
                          if (typeof ssrc2ml[related] === "object") {
                            uLine2 = ssrc2ml[related];
                            return true;
                          }
                        });
                      });
                    }
                    if (typeof uLine2 === "object") {
                      uLine2.sources[ssrc] = sources[ssrc];
                      delete sources[ssrc].msid;
                    } else {
                      uLine2 = Object.create(bLine);
                      ssrc2ml[ssrc] = uLine2;
                      if (typeof sources[ssrc].msid !== "undefined") {
                        uLine2.msid = sources[ssrc].msid;
                        delete sources[ssrc].msid;
                      }
                      uLine2.sources = {};
                      uLine2.sources[ssrc] = sources[ssrc];
                      uLine2.ssrcGroups = ssrc2group[ssrc];
                      if (typeof cached !== "undefined" && typeof cached.media !== "undefined" && Array.isArray(cached.media)) {
                        cached.media.forEach(function(m) {
                          if (typeof m.sources === "object") {
                            Object.keys(m.sources).forEach(function(s) {
                              if (s === ssrc) {
                                uLine2.mid = m.mid;
                              }
                            });
                          }
                        });
                      }
                      midToString(uLine2);
                      if (typeof uLine2.mid === "undefined") {
                        if (desc.type === "answer") {
                          throw new Error("An unmapped SSRC was found.");
                        }
                        uLine2.mid = [
                          bLine.type,
                          "-",
                          ssrc
                        ].join("");
                      }
                      uLine2.candidates = candidates;
                      uLine2.iceUfrag = iceUfrag;
                      uLine2.icePwd = icePwd;
                      uLine2.fingerprint = fingerprint;
                      uLine2.port = port;
                      mid2ul[uLine2.mid] = uLine2;
                      self1.cache.mlU2BMap[uIdx] = bIdx;
                      if (typeof self1.cache.mlB2UMap[bIdx] === "undefined") {
                        self1.cache.mlB2UMap[bIdx] = uIdx;
                      }
                      uIdx++;
                    }
                  });
                }
                bIdx++;
              });
              session.media = [];
              mids = [];
              if (desc.type === "answer") {
                for (var i = 0; i < cached.media.length; i++) {
                  var uLine = cached.media[i];
                  midToString(uLine);
                  if (typeof mid2ul[uLine.mid] === "undefined") {
                    delete uLine.msid;
                    delete uLine.sources;
                    delete uLine.ssrcGroups;
                    if (!uLine.direction || uLine.direction === "sendrecv")
                      uLine.direction = "recvonly";
                    else if (uLine.direction === "sendonly")
                      uLine.direction = "inactive";
                  } else {
                  }
                  session.media.push(uLine);
                  if (typeof uLine.mid === "string") {
                    mids.push(uLine.mid);
                  }
                }
              } else {
                if (typeof cached !== "undefined" && typeof cached.media !== "undefined" && Array.isArray(cached.media)) {
                  cached.media.forEach(function(uLine2) {
                    midToString(uLine2);
                    mids.push(uLine2.mid);
                    if (typeof mid2ul[uLine2.mid] !== "undefined") {
                      session.media.push(mid2ul[uLine2.mid]);
                    } else {
                      delete uLine2.msid;
                      delete uLine2.sources;
                      delete uLine2.ssrcGroups;
                      if (!uLine2.direction || uLine2.direction === "sendrecv")
                        uLine2.direction = "recvonly";
                      if (!uLine2.direction || uLine2.direction === "sendonly")
                        uLine2.direction = "inactive";
                      session.media.push(uLine2);
                    }
                  });
                }
                Object.keys(mid2ul).forEach(function(mid) {
                  if (mids.indexOf(mid) === -1) {
                    mids.push(mid);
                    if (mid2ul[mid].direction === "recvonly") {
                      session.media.some(function(uLine2) {
                        if ((uLine2.direction === "sendrecv" || uLine2.direction === "sendonly") && uLine2.type === mid2ul[mid].type) {
                          Object.keys(mid2ul[mid].sources).forEach(function(ssrc) {
                            uLine2.sources[ssrc] = mid2ul[mid].sources[ssrc];
                          });
                          return true;
                        }
                      });
                    } else {
                      session.media.push(mid2ul[mid]);
                    }
                  }
                });
              }
              [
                "audio",
                "video"
              ].forEach(function(type) {
                if (!session || !session.media || !Array.isArray(session.media))
                  return;
                var idx = null;
                if (Object.keys(recvonlySsrcs[type]).length > 0) {
                  idx = self1.getFirstSendingIndexFromAnswer(type);
                  if (idx === null) {
                    for (var i2 = 0; i2 < session.media.length; i2++) {
                      if (session.media[i2].type === type) {
                        idx = i2;
                        break;
                      }
                    }
                  }
                }
                if (idx && session.media.length > idx) {
                  var mLine = session.media[idx];
                  Object.keys(recvonlySsrcs[type]).forEach(function(ssrc) {
                    if (mLine.sources && mLine.sources[ssrc]) {
                      console.warn("Replacing an existing SSRC.");
                    }
                    if (!mLine.sources) {
                      mLine.sources = {};
                    }
                    mLine.sources[ssrc] = recvonlySsrcs[type][ssrc];
                  });
                }
              });
              session.groups.some(function(group) {
                if (group.type === "BUNDLE") {
                  group.mids = mids.join(" ");
                  return true;
                }
              });
              session.msidSemantic = {
                semantic: "WMS",
                token: "*"
              };
              var resStr = transform.write(session);
              this.cache[desc.type] = resStr;
              return new RTCSessionDescription({
                type: desc.type,
                sdp: resStr
              });
            };
            var directionMasks = {
              "inactive": 0,
              "recvonly": 1,
              "sendonly": 2,
              "sendrecv": 3
            };
            function parseDirection(direction) {
              var directionMask = direction & 3;
              switch (directionMask) {
                case 0:
                  return "inactive";
                case 1:
                  return "recvonly";
                case 2:
                  return "sendonly";
                case 3:
                  return "sendrecv";
              }
            }
          },
          "./node_modules/@jitsi/sdp-interop/lib/transform.js": function(module1, exports1, __webpack_require__) {
            var transform = __webpack_require__("./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/index.js");
            exports1.write = function(session, opts) {
              if (typeof session !== "undefined" && typeof session.media !== "undefined" && Array.isArray(session.media)) {
                session.media.forEach(function(mLine) {
                  if (typeof mLine.sources !== "undefined" && Object.keys(mLine.sources).length !== 0) {
                    mLine.ssrcs = [];
                    Object.keys(mLine.sources).forEach(function(ssrc) {
                      var source = mLine.sources[ssrc];
                      Object.keys(source).forEach(function(attribute) {
                        mLine.ssrcs.push({
                          id: ssrc,
                          attribute,
                          value: source[attribute]
                        });
                      });
                    });
                    delete mLine.sources;
                  }
                  if (typeof mLine.ssrcGroups !== "undefined" && Array.isArray(mLine.ssrcGroups)) {
                    mLine.ssrcGroups.forEach(function(ssrcGroup) {
                      if (typeof ssrcGroup.ssrcs !== "undefined" && Array.isArray(ssrcGroup.ssrcs)) {
                        ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(" ");
                      }
                    });
                  }
                });
              }
              if (typeof session !== "undefined" && typeof session.groups !== "undefined" && Array.isArray(session.groups)) {
                session.groups.forEach(function(g) {
                  if (typeof g.mids !== "undefined" && Array.isArray(g.mids)) {
                    g.mids = g.mids.join(" ");
                  }
                });
              }
              return transform.write(session, opts);
            };
            exports1.parse = function(sdp) {
              var session = transform.parse(sdp);
              if (typeof session !== "undefined" && typeof session.media !== "undefined" && Array.isArray(session.media)) {
                session.media.forEach(function(mLine) {
                  if (typeof mLine.ssrcs !== "undefined" && Array.isArray(mLine.ssrcs)) {
                    mLine.sources = {};
                    mLine.ssrcs.forEach(function(ssrc) {
                      if (!mLine.sources[ssrc.id])
                        mLine.sources[ssrc.id] = {};
                      mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
                    });
                    delete mLine.ssrcs;
                  }
                  if (typeof mLine.ssrcGroups !== "undefined" && Array.isArray(mLine.ssrcGroups)) {
                    mLine.ssrcGroups.forEach(function(ssrcGroup) {
                      if (typeof ssrcGroup.ssrcs === "string") {
                        ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(" ");
                      }
                    });
                  }
                });
              }
              if (typeof session !== "undefined" && typeof session.groups !== "undefined" && Array.isArray(session.groups)) {
                session.groups.forEach(function(g) {
                  if (typeof g.mids === "string") {
                    g.mids = g.mids.split(" ");
                  }
                });
              }
              return session;
            };
          },
          "./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/grammar.js": function(module1, exports1) {
            var grammar = module1.exports = {
              v: [
                {
                  name: "version",
                  reg: /^(\d*)$/
                }
              ],
              o: [
                {
                  name: "origin",
                  reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                  names: [
                    "username",
                    "sessionId",
                    "sessionVersion",
                    "netType",
                    "ipVer",
                    "address"
                  ],
                  format: "%s %s %d %s IP%d %s"
                }
              ],
              s: [
                {
                  name: "name"
                }
              ],
              i: [
                {
                  name: "description"
                }
              ],
              u: [
                {
                  name: "uri"
                }
              ],
              e: [
                {
                  name: "email"
                }
              ],
              p: [
                {
                  name: "phone"
                }
              ],
              z: [
                {
                  name: "timezones"
                }
              ],
              r: [
                {
                  name: "repeats"
                }
              ],
              t: [
                {
                  name: "timing",
                  reg: /^(\d*) (\d*)/,
                  names: [
                    "start",
                    "stop"
                  ],
                  format: "%d %d"
                }
              ],
              c: [
                {
                  name: "connection",
                  reg: /^IN IP(\d) (\S*)/,
                  names: [
                    "version",
                    "ip"
                  ],
                  format: "IN IP%d %s"
                }
              ],
              b: [
                {
                  push: "bandwidth",
                  reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                  names: [
                    "type",
                    "limit"
                  ],
                  format: "%s:%s"
                }
              ],
              m: [
                {
                  reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
                  names: [
                    "type",
                    "port",
                    "protocol",
                    "payloads"
                  ],
                  format: "%s %d %s %s"
                }
              ],
              a: [
                {
                  push: "rtp",
                  reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                  names: [
                    "payload",
                    "codec",
                    "rate",
                    "encoding"
                  ],
                  format: function(o) {
                    return o.encoding ? "rtpmap:%d %s/%s/%s" : o.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
                  }
                },
                {
                  push: "fmtp",
                  reg: /^fmtp:(\d*) ([\S| ]*)/,
                  names: [
                    "payload",
                    "config"
                  ],
                  format: "fmtp:%d %s"
                },
                {
                  name: "control",
                  reg: /^control:(.*)/,
                  format: "control:%s"
                },
                {
                  name: "rtcp",
                  reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                  names: [
                    "port",
                    "netType",
                    "ipVer",
                    "address"
                  ],
                  format: function(o) {
                    return o.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
                  }
                },
                {
                  push: "rtcpFbTrrInt",
                  reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                  names: [
                    "payload",
                    "value"
                  ],
                  format: "rtcp-fb:%d trr-int %d"
                },
                {
                  push: "rtcpFb",
                  reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                  names: [
                    "payload",
                    "type",
                    "subtype"
                  ],
                  format: function(o) {
                    return o.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
                  }
                },
                {
                  push: "ext",
                  reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
                  names: [
                    "value",
                    "direction",
                    "uri",
                    "config"
                  ],
                  format: function(o) {
                    return "extmap:%d" + (o.direction ? "/%s" : "%v") + " %s" + (o.config ? " %s" : "");
                  }
                },
                {
                  push: "crypto",
                  reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                  names: [
                    "id",
                    "suite",
                    "config",
                    "sessionConfig"
                  ],
                  format: function(o) {
                    return o.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
                  }
                },
                {
                  name: "setup",
                  reg: /^setup:(\w*)/,
                  format: "setup:%s"
                },
                {
                  name: "mid",
                  reg: /^mid:([^\s]*)/,
                  format: "mid:%s"
                },
                {
                  name: "msid",
                  reg: /^msid:(.*)/,
                  format: "msid:%s"
                },
                {
                  name: "ptime",
                  reg: /^ptime:(\d*)/,
                  format: "ptime:%d"
                },
                {
                  name: "maxptime",
                  reg: /^maxptime:(\d*)/,
                  format: "maxptime:%d"
                },
                {
                  name: "direction",
                  reg: /^(sendrecv|recvonly|sendonly|inactive)/
                },
                {
                  name: "icelite",
                  reg: /^(ice-lite)/
                },
                {
                  name: "iceUfrag",
                  reg: /^ice-ufrag:(\S*)/,
                  format: "ice-ufrag:%s"
                },
                {
                  name: "icePwd",
                  reg: /^ice-pwd:(\S*)/,
                  format: "ice-pwd:%s"
                },
                {
                  name: "fingerprint",
                  reg: /^fingerprint:(\S*) (\S*)/,
                  names: [
                    "type",
                    "hash"
                  ],
                  format: "fingerprint:%s %s"
                },
                {
                  push: "candidates",
                  reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                  names: [
                    "foundation",
                    "component",
                    "transport",
                    "priority",
                    "ip",
                    "port",
                    "type",
                    "raddr",
                    "rport",
                    "tcptype",
                    "generation",
                    "network-id",
                    "network-cost"
                  ],
                  format: function(o) {
                    var str = "candidate:%s %d %s %d %s %d typ %s";
                    str += o.raddr != null ? " raddr %s rport %d" : "%v%v";
                    str += o.tcptype != null ? " tcptype %s" : "%v";
                    if (o.generation != null) {
                      str += " generation %d";
                    }
                    str += o["network-id"] != null ? " network-id %d" : "%v";
                    str += o["network-cost"] != null ? " network-cost %d" : "%v";
                    return str;
                  }
                },
                {
                  name: "endOfCandidates",
                  reg: /^(end-of-candidates)/
                },
                {
                  name: "remoteCandidates",
                  reg: /^remote-candidates:(.*)/,
                  format: "remote-candidates:%s"
                },
                {
                  name: "iceOptions",
                  reg: /^ice-options:(\S*)/,
                  format: "ice-options:%s"
                },
                {
                  push: "ssrcs",
                  reg: /^ssrc:(\d*) ([\w_]*)(?::(.*))?/,
                  names: [
                    "id",
                    "attribute",
                    "value"
                  ],
                  format: function(o) {
                    var str = "ssrc:%d";
                    if (o.attribute != null) {
                      str += " %s";
                      if (o.value != null) {
                        str += ":%s";
                      }
                    }
                    return str;
                  }
                },
                {
                  push: "ssrcGroups",
                  reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                  names: [
                    "semantics",
                    "ssrcs"
                  ],
                  format: "ssrc-group:%s %s"
                },
                {
                  name: "msidSemantic",
                  reg: /^msid-semantic:\s?(\w*) (\S*)/,
                  names: [
                    "semantic",
                    "token"
                  ],
                  format: "msid-semantic: %s %s"
                },
                {
                  push: "groups",
                  reg: /^group:(\w*) (.*)/,
                  names: [
                    "type",
                    "mids"
                  ],
                  format: "group:%s %s"
                },
                {
                  name: "rtcpMux",
                  reg: /^(rtcp-mux)/
                },
                {
                  name: "rtcpRsize",
                  reg: /^(rtcp-rsize)/
                },
                {
                  name: "sctpmap",
                  reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
                  names: [
                    "sctpmapNumber",
                    "app",
                    "maxMessageSize"
                  ],
                  format: function(o) {
                    return o.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
                  }
                },
                {
                  name: "xGoogleFlag",
                  reg: /^x-google-flag:([^\s]*)/,
                  format: "x-google-flag:%s"
                },
                {
                  push: "rids",
                  reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                  names: [
                    "id",
                    "direction",
                    "params"
                  ],
                  format: function(o) {
                    return o.params ? "rid:%s %s %s" : "rid:%s %s";
                  }
                },
                {
                  push: "imageattrs",
                  reg: new RegExp(
                    "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"
                  ),
                  names: [
                    "pt",
                    "dir1",
                    "attrs1",
                    "dir2",
                    "attrs2"
                  ],
                  format: function(o) {
                    return "imageattr:%s %s %s" + (o.dir2 ? " %s %s" : "");
                  }
                },
                {
                  name: "simulcast",
                  reg: new RegExp(
                    "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"
                  ),
                  names: [
                    "dir1",
                    "list1",
                    "dir2",
                    "list2"
                  ],
                  format: function(o) {
                    return "simulcast:%s %s" + (o.dir2 ? " %s %s" : "");
                  }
                },
                {
                  name: "simulcast_03",
                  reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                  names: [
                    "value"
                  ],
                  format: "simulcast: %s"
                },
                {
                  name: "framerate",
                  reg: /^framerate:(\d+(?:$|\.\d+))/,
                  format: "framerate:%s"
                },
                {
                  push: "invalid",
                  names: [
                    "value"
                  ]
                }
              ]
            };
            Object.keys(grammar).forEach(function(key) {
              var objs = grammar[key];
              objs.forEach(function(obj) {
                if (!obj.reg) {
                  obj.reg = /(.*)/;
                }
                if (!obj.format) {
                  obj.format = "%s";
                }
              });
            });
          },
          "./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/index.js": function(module1, exports1, __webpack_require__) {
            var parser = __webpack_require__("./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/parser.js");
            var writer = __webpack_require__("./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/writer.js");
            exports1.write = writer;
            exports1.parse = parser.parse;
            exports1.parseFmtpConfig = parser.parseFmtpConfig;
            exports1.parseParams = parser.parseParams;
            exports1.parsePayloads = parser.parsePayloads;
            exports1.parseRemoteCandidates = parser.parseRemoteCandidates;
            exports1.parseImageAttributes = parser.parseImageAttributes;
            exports1.parseSimulcastStreamList = parser.parseSimulcastStreamList;
          },
          "./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/parser.js": function(module1, exports1, __webpack_require__) {
            var toIntIfInt = function(v) {
              return String(Number(v)) === v ? Number(v) : v;
            };
            var attachProperties = function(match, location1, names, rawName) {
              if (rawName && !names) {
                location1[rawName] = toIntIfInt(match[1]);
              } else {
                for (var i = 0; i < names.length; i += 1) {
                  if (match[i + 1] != null) {
                    location1[names[i]] = toIntIfInt(match[i + 1]);
                  }
                }
              }
            };
            var parseReg = function(obj, location1, content) {
              var needsBlank = obj.name && obj.names;
              if (obj.push && !location1[obj.push]) {
                location1[obj.push] = [];
              } else if (needsBlank && !location1[obj.name]) {
                location1[obj.name] = {};
              }
              var keyLocation = obj.push ? {} : needsBlank ? location1[obj.name] : location1;
              attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
              if (obj.push) {
                location1[obj.push].push(keyLocation);
              }
            };
            var grammar = __webpack_require__("./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/grammar.js");
            var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            exports1.parse = function(sdp) {
              var session = {}, media = [], location1 = session;
              sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
                var type = l[0];
                var content = l.slice(2);
                if (type === "m") {
                  media.push({
                    rtp: [],
                    fmtp: []
                  });
                  location1 = media[media.length - 1];
                }
                for (var j = 0; j < (grammar[type] || []).length; j += 1) {
                  var obj = grammar[type][j];
                  if (obj.reg.test(content)) {
                    return parseReg(obj, location1, content);
                  }
                }
              });
              session.media = media;
              return session;
            };
            var paramReducer = function(acc, expr) {
              var s = expr.split(/=(.+)/, 2);
              if (s.length === 2) {
                acc[s[0]] = toIntIfInt(s[1]);
              }
              return acc;
            };
            exports1.parseParams = function(str) {
              return str.split(/\;\s?/).reduce(paramReducer, {});
            };
            exports1.parseFmtpConfig = exports1.parseParams;
            exports1.parsePayloads = function(str) {
              return str.split(" ").map(Number);
            };
            exports1.parseRemoteCandidates = function(str) {
              var candidates = [];
              var parts = str.split(" ").map(toIntIfInt);
              for (var i = 0; i < parts.length; i += 3) {
                candidates.push({
                  component: parts[i],
                  ip: parts[i + 1],
                  port: parts[i + 2]
                });
              }
              return candidates;
            };
            exports1.parseImageAttributes = function(str) {
              return str.split(" ").map(function(item) {
                return item.substring(1, item.length - 1).split(",").reduce(paramReducer, {});
              });
            };
            exports1.parseSimulcastStreamList = function(str) {
              return str.split(";").map(function(stream) {
                return stream.split(",").map(function(format) {
                  var scid, paused = false;
                  if (format[0] !== "~") {
                    scid = toIntIfInt(format);
                  } else {
                    scid = toIntIfInt(format.substring(1, format.length));
                    paused = true;
                  }
                  return {
                    scid,
                    paused
                  };
                });
              });
            };
          },
          "./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/writer.js": function(module1, exports1, __webpack_require__) {
            var grammar = __webpack_require__("./node_modules/@jitsi/sdp-interop/node_modules/sdp-transform/lib/grammar.js");
            var formatRegExp = /%[sdv%]/g;
            var format = function(formatStr) {
              var i = 1;
              var args = arguments;
              var len = args.length;
              return formatStr.replace(formatRegExp, function(x) {
                if (i >= len) {
                  return x;
                }
                var arg = args[i];
                i += 1;
                switch (x) {
                  case "%%":
                    return "%";
                  case "%s":
                    return String(arg);
                  case "%d":
                    return Number(arg);
                  case "%v":
                    return "";
                }
              });
            };
            var makeLine = function(type, obj, location1) {
              var str = obj.format instanceof Function ? obj.format(obj.push ? location1 : location1[obj.name]) : obj.format;
              var args = [
                type + "=" + str
              ];
              if (obj.names) {
                for (var i = 0; i < obj.names.length; i += 1) {
                  var n = obj.names[i];
                  if (obj.name) {
                    args.push(location1[obj.name][n]);
                  } else {
                    args.push(location1[obj.names[i]]);
                  }
                }
              } else {
                args.push(location1[obj.name]);
              }
              return format.apply(null, args);
            };
            var defaultOuterOrder = [
              "v",
              "o",
              "s",
              "i",
              "u",
              "e",
              "p",
              "c",
              "b",
              "t",
              "r",
              "z",
              "a"
            ];
            var defaultInnerOrder = [
              "i",
              "c",
              "b",
              "a"
            ];
            module1.exports = function(session, opts) {
              opts = opts || {};
              if (session.version == null) {
                session.version = 0;
              }
              if (session.name == null) {
                session.name = " ";
              }
              session.media.forEach(function(mLine) {
                if (mLine.payloads == null) {
                  mLine.payloads = "";
                }
              });
              var outerOrder = opts.outerOrder || defaultOuterOrder;
              var innerOrder = opts.innerOrder || defaultInnerOrder;
              var sdp = [];
              outerOrder.forEach(function(type) {
                grammar[type].forEach(function(obj) {
                  if (obj.name in session && session[obj.name] != null) {
                    sdp.push(makeLine(type, obj, session));
                  } else if (obj.push in session && session[obj.push] != null) {
                    session[obj.push].forEach(function(el) {
                      sdp.push(makeLine(type, obj, el));
                    });
                  }
                });
              });
              session.media.forEach(function(mLine) {
                sdp.push(makeLine("m", grammar.m[0], mLine));
                innerOrder.forEach(function(type) {
                  grammar[type].forEach(function(obj) {
                    if (obj.name in mLine && mLine[obj.name] != null) {
                      sdp.push(makeLine(type, obj, mLine));
                    } else if (obj.push in mLine && mLine[obj.push] != null) {
                      mLine[obj.push].forEach(function(el) {
                        sdp.push(makeLine(type, obj, el));
                      });
                    }
                  });
                });
              });
              return sdp.join("\r\n") + "\r\n";
            };
          },
          "./node_modules/after/index.js": function(module1, exports1) {
            module1.exports = after;
            function after(count, callback, err_cb) {
              var bail = false;
              err_cb = err_cb || noop;
              proxy.count = count;
              return count === 0 ? callback() : proxy;
              function proxy(err, result) {
                if (proxy.count <= 0) {
                  throw new Error("after called too many times");
                }
                --proxy.count;
                if (err) {
                  bail = true;
                  callback(err);
                  callback = err_cb;
                } else if (proxy.count === 0 && !bail) {
                  callback(null, result);
                }
              }
            }
            function noop() {
            }
          },
          "./node_modules/arraybuffer.slice/index.js": function(module1, exports1) {
            module1.exports = function(arraybuffer, start, end) {
              var bytes = arraybuffer.byteLength;
              start = start || 0;
              end = end || bytes;
              if (arraybuffer.slice) {
                return arraybuffer.slice(start, end);
              }
              if (start < 0) {
                start += bytes;
              }
              if (end < 0) {
                end += bytes;
              }
              if (end > bytes) {
                end = bytes;
              }
              if (start >= bytes || start >= end || bytes === 0) {
                return new ArrayBuffer(0);
              }
              var abv = new Uint8Array(arraybuffer);
              var result = new Uint8Array(end - start);
              for (var i = start, ii = 0; i < end; i++, ii++) {
                result[ii] = abv[i];
              }
              return result.buffer;
            };
          },
          "./node_modules/backo2/index.js": function(module1, exports1) {
            module1.exports = Backoff;
            function Backoff(opts) {
              opts = opts || {};
              this.ms = opts.min || 100;
              this.max = opts.max || 1e4;
              this.factor = opts.factor || 2;
              this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
              this.attempts = 0;
            }
            Backoff.prototype.duration = function() {
              var ms = this.ms * Math.pow(this.factor, this.attempts++);
              if (this.jitter) {
                var rand = Math.random();
                var deviation = Math.floor(rand * this.jitter * ms);
                ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
              }
              return Math.min(ms, this.max) | 0;
            };
            Backoff.prototype.reset = function() {
              this.attempts = 0;
            };
            Backoff.prototype.setMin = function(min) {
              this.ms = min;
            };
            Backoff.prototype.setMax = function(max) {
              this.max = max;
            };
            Backoff.prototype.setJitter = function(jitter) {
              this.jitter = jitter;
            };
          },
          "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js": function(module1, exports1) {
            (function(chars) {
              "use strict";
              exports1.encode = function(arraybuffer) {
                var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
                for (i = 0; i < len; i += 3) {
                  base64 += chars[bytes[i] >> 2];
                  base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
                  base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
                  base64 += chars[bytes[i + 2] & 63];
                }
                if (len % 3 === 2) {
                  base64 = base64.substring(0, base64.length - 1) + "=";
                } else if (len % 3 === 1) {
                  base64 = base64.substring(0, base64.length - 2) + "==";
                }
                return base64;
              };
              exports1.decode = function(base64) {
                var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
                if (base64[base64.length - 1] === "=") {
                  bufferLength--;
                  if (base64[base64.length - 2] === "=") {
                    bufferLength--;
                  }
                }
                var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
                for (i = 0; i < len; i += 4) {
                  encoded1 = chars.indexOf(base64[i]);
                  encoded2 = chars.indexOf(base64[i + 1]);
                  encoded3 = chars.indexOf(base64[i + 2]);
                  encoded4 = chars.indexOf(base64[i + 3]);
                  bytes[p++] = encoded1 << 2 | encoded2 >> 4;
                  bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
                  bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
                }
                return arraybuffer;
              };
            })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
          },
          "./node_modules/base64-js/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            exports1.byteLength = byteLength;
            exports1.toByteArray = toByteArray;
            exports1.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var i = 0, len = code.length; i < len; ++i) {
              lookup[i] = code[i];
              revLookup[code.charCodeAt(i)] = i;
            }
            revLookup["-".charCodeAt(0)] = 62;
            revLookup["_".charCodeAt(0)] = 63;
            function getLens(b64) {
              var len2 = b64.length;
              if (len2 % 4 > 0) {
                throw new Error("Invalid string. Length must be a multiple of 4");
              }
              var validLen = b64.indexOf("=");
              if (validLen === -1)
                validLen = len2;
              var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
              return [
                validLen,
                placeHoldersLen
              ];
            }
            function byteLength(b64) {
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
              return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function toByteArray(b64) {
              var tmp;
              var lens = getLens(b64);
              var validLen = lens[0];
              var placeHoldersLen = lens[1];
              var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
              var curByte = 0;
              var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
              var i2;
              for (i2 = 0; i2 < len2; i2 += 4) {
                tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
                arr[curByte++] = tmp >> 16 & 255;
                arr[curByte++] = tmp >> 8 & 255;
                arr[curByte++] = tmp & 255;
              }
              if (placeHoldersLen === 2) {
                tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
                arr[curByte++] = tmp & 255;
              }
              if (placeHoldersLen === 1) {
                tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
                arr[curByte++] = tmp >> 8 & 255;
                arr[curByte++] = tmp & 255;
              }
              return arr;
            }
            function tripletToBase64(num) {
              return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }
            function encodeChunk(uint8, start, end) {
              var tmp;
              var output = [];
              for (var i2 = start; i2 < end; i2 += 3) {
                tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
                output.push(tripletToBase64(tmp));
              }
              return output.join("");
            }
            function fromByteArray(uint8) {
              var tmp;
              var len2 = uint8.length;
              var extraBytes = len2 % 3;
              var parts = [];
              var maxChunkLength = 16383;
              for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
                parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
              }
              if (extraBytes === 1) {
                tmp = uint8[len2 - 1];
                parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
              } else if (extraBytes === 2) {
                tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
                parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
              }
              return parts.join("");
            }
          },
          "./node_modules/blob/index.js": function(module1, exports1) {
            var BlobBuilder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof WebKitBlobBuilder !== "undefined" ? WebKitBlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : false;
            var blobSupported = function() {
              try {
                var a = new Blob([
                  "hi"
                ]);
                return a.size === 2;
              } catch (e) {
                return false;
              }
            }();
            var blobSupportsArrayBufferView = blobSupported && function() {
              try {
                var b = new Blob([
                  new Uint8Array([
                    1,
                    2
                  ])
                ]);
                return b.size === 2;
              } catch (e) {
                return false;
              }
            }();
            var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
            function mapArrayBufferViews(ary) {
              return ary.map(function(chunk) {
                if (chunk.buffer instanceof ArrayBuffer) {
                  var buf = chunk.buffer;
                  if (chunk.byteLength !== buf.byteLength) {
                    var copy = new Uint8Array(chunk.byteLength);
                    copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                    buf = copy.buffer;
                  }
                  return buf;
                }
                return chunk;
              });
            }
            function BlobBuilderConstructor(ary, options) {
              options = options || {};
              var bb = new BlobBuilder();
              mapArrayBufferViews(ary).forEach(function(part) {
                bb.append(part);
              });
              return options.type ? bb.getBlob(options.type) : bb.getBlob();
            }
            ;
            function BlobConstructor(ary, options) {
              return new Blob(mapArrayBufferViews(ary), options || {});
            }
            ;
            if (typeof Blob !== "undefined") {
              BlobBuilderConstructor.prototype = Blob.prototype;
              BlobConstructor.prototype = Blob.prototype;
            }
            module1.exports = function() {
              if (blobSupported) {
                return blobSupportsArrayBufferView ? Blob : BlobConstructor;
              } else if (blobBuilderSupported) {
                return BlobBuilderConstructor;
              } else {
                return void 0;
              }
            }();
          },
          "./node_modules/component-bind/index.js": function(module1, exports1) {
            var slice = [].slice;
            module1.exports = function(obj, fn) {
              if ("string" == typeof fn)
                fn = obj[fn];
              if ("function" != typeof fn)
                throw new Error("bind() requires a function");
              var args = slice.call(arguments, 2);
              return function() {
                return fn.apply(obj, args.concat(slice.call(arguments)));
              };
            };
          },
          "./node_modules/component-emitter/index.js": function(module1, exports1, __webpack_require__) {
            if (true) {
              module1.exports = Emitter;
            }
            function Emitter(obj) {
              if (obj)
                return mixin(obj);
            }
            ;
            function mixin(obj) {
              for (var key in Emitter.prototype) {
                obj[key] = Emitter.prototype[key];
              }
              return obj;
            }
            Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
              this._callbacks = this._callbacks || {};
              (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
              return this;
            };
            Emitter.prototype.once = function(event, fn) {
              function on() {
                this.off(event, on);
                fn.apply(this, arguments);
              }
              on.fn = fn;
              this.on(event, on);
              return this;
            };
            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
              this._callbacks = this._callbacks || {};
              if (0 == arguments.length) {
                this._callbacks = {};
                return this;
              }
              var callbacks = this._callbacks["$" + event];
              if (!callbacks)
                return this;
              if (1 == arguments.length) {
                delete this._callbacks["$" + event];
                return this;
              }
              var cb;
              for (var i = 0; i < callbacks.length; i++) {
                cb = callbacks[i];
                if (cb === fn || cb.fn === fn) {
                  callbacks.splice(i, 1);
                  break;
                }
              }
              if (callbacks.length === 0) {
                delete this._callbacks["$" + event];
              }
              return this;
            };
            Emitter.prototype.emit = function(event) {
              this._callbacks = this._callbacks || {};
              var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
              if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0, len = callbacks.length; i < len; ++i) {
                  callbacks[i].apply(this, args);
                }
              }
              return this;
            };
            Emitter.prototype.listeners = function(event) {
              this._callbacks = this._callbacks || {};
              return this._callbacks["$" + event] || [];
            };
            Emitter.prototype.hasListeners = function(event) {
              return !!this.listeners(event).length;
            };
          },
          "./node_modules/component-inherit/index.js": function(module1, exports1) {
            module1.exports = function(a, b) {
              var fn = function() {
              };
              fn.prototype = b.prototype;
              a.prototype = new fn();
              a.prototype.constructor = a;
            };
          },
          "./node_modules/debug/src/browser.js": function(module1, exports1, __webpack_require__) {
            (function(process) {
              exports1 = module1.exports = __webpack_require__("./node_modules/debug/src/debug.js");
              exports1.log = log;
              exports1.formatArgs = formatArgs;
              exports1.save = save;
              exports1.load = load;
              exports1.useColors = useColors;
              exports1.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
              exports1.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33"
              ];
              function useColors() {
                if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
                  return true;
                }
                if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
                  return false;
                }
                return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
              }
              exports1.formatters.j = function(v) {
                try {
                  return JSON.stringify(v);
                } catch (err) {
                  return "[UnexpectedJSONParseError]: " + err.message;
                }
              };
              function formatArgs(args) {
                var useColors2 = this.useColors;
                args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports1.humanize(this.diff);
                if (!useColors2)
                  return;
                var c = "color: " + this.color;
                args.splice(1, 0, c, "color: inherit");
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-zA-Z%]/g, function(match) {
                  if ("%%" === match)
                    return;
                  index++;
                  if ("%c" === match) {
                    lastC = index;
                  }
                });
                args.splice(lastC, 0, c);
              }
              function log() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
              }
              function save(namespaces) {
                try {
                  if (null == namespaces) {
                    exports1.storage.removeItem("debug");
                  } else {
                    exports1.storage.debug = namespaces;
                  }
                } catch (e) {
                }
              }
              function load() {
                var r;
                try {
                  r = exports1.storage.debug;
                } catch (e) {
                }
                if (!r && typeof process !== "undefined" && "env" in process) {
                  r = process.env.DEBUG;
                }
                return r;
              }
              exports1.enable(load());
              function localstorage() {
                try {
                  return window.localStorage;
                } catch (e) {
                }
              }
            }).call(this, __webpack_require__("./node_modules/process/browser.js"));
          },
          "./node_modules/debug/src/debug.js": function(module1, exports1, __webpack_require__) {
            exports1 = module1.exports = createDebug.debug = createDebug["default"] = createDebug;
            exports1.coerce = coerce;
            exports1.disable = disable;
            exports1.enable = enable;
            exports1.enabled = enabled;
            exports1.humanize = __webpack_require__("./node_modules/ms/index.js");
            exports1.instances = [];
            exports1.names = [];
            exports1.skips = [];
            exports1.formatters = {};
            function selectColor(namespace) {
              var hash = 0, i;
              for (i in namespace) {
                hash = (hash << 5) - hash + namespace.charCodeAt(i);
                hash |= 0;
              }
              return exports1.colors[Math.abs(hash) % exports1.colors.length];
            }
            function createDebug(namespace) {
              var prevTime;
              function debug() {
                if (!debug.enabled)
                  return;
                var self1 = debug;
                var curr = +new Date();
                var ms = curr - (prevTime || curr);
                self1.diff = ms;
                self1.prev = prevTime;
                self1.curr = curr;
                prevTime = curr;
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                  args[i] = arguments[i];
                }
                args[0] = exports1.coerce(args[0]);
                if ("string" !== typeof args[0]) {
                  args.unshift("%O");
                }
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                  if (match === "%%")
                    return match;
                  index++;
                  var formatter = exports1.formatters[format];
                  if ("function" === typeof formatter) {
                    var val = args[index];
                    match = formatter.call(self1, val);
                    args.splice(index, 1);
                    index--;
                  }
                  return match;
                });
                exports1.formatArgs.call(self1, args);
                var logFn = debug.log || exports1.log || console.log.bind(console);
                logFn.apply(self1, args);
              }
              debug.namespace = namespace;
              debug.enabled = exports1.enabled(namespace);
              debug.useColors = exports1.useColors();
              debug.color = selectColor(namespace);
              debug.destroy = destroy;
              if ("function" === typeof exports1.init) {
                exports1.init(debug);
              }
              exports1.instances.push(debug);
              return debug;
            }
            function destroy() {
              var index = exports1.instances.indexOf(this);
              if (index !== -1) {
                exports1.instances.splice(index, 1);
                return true;
              } else {
                return false;
              }
            }
            function enable(namespaces) {
              exports1.save(namespaces);
              exports1.names = [];
              exports1.skips = [];
              var i;
              var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
              var len = split.length;
              for (i = 0; i < len; i++) {
                if (!split[i])
                  continue;
                namespaces = split[i].replace(/\*/g, ".*?");
                if (namespaces[0] === "-") {
                  exports1.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
                } else {
                  exports1.names.push(new RegExp("^" + namespaces + "$"));
                }
              }
              for (i = 0; i < exports1.instances.length; i++) {
                var instance = exports1.instances[i];
                instance.enabled = exports1.enabled(instance.namespace);
              }
            }
            function disable() {
              exports1.enable("");
            }
            function enabled(name) {
              if (name[name.length - 1] === "*") {
                return true;
              }
              var i, len;
              for (i = 0, len = exports1.skips.length; i < len; i++) {
                if (exports1.skips[i].test(name)) {
                  return false;
                }
              }
              for (i = 0, len = exports1.names.length; i < len; i++) {
                if (exports1.names[i].test(name)) {
                  return true;
                }
              }
              return false;
            }
            function coerce(val) {
              if (val instanceof Error)
                return val.stack || val.message;
              return val;
            }
          },
          "./node_modules/decode-uri-component/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            var token = "%[a-f0-9]{2}";
            var singleMatcher = new RegExp(token, "gi");
            var multiMatcher = new RegExp("(" + token + ")+", "gi");
            function decodeComponents(components, split) {
              try {
                return decodeURIComponent(components.join(""));
              } catch (err) {
              }
              if (components.length === 1) {
                return components;
              }
              split = split || 1;
              var left = components.slice(0, split);
              var right = components.slice(split);
              return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
            }
            function decode(input) {
              try {
                return decodeURIComponent(input);
              } catch (err) {
                var tokens = input.match(singleMatcher);
                for (var i = 1; i < tokens.length; i++) {
                  input = decodeComponents(tokens, i).join("");
                  tokens = input.match(singleMatcher);
                }
                return input;
              }
            }
            function customDecodeURIComponent(input) {
              var replaceMap = {
                "%FE%FF": "\uFFFD\uFFFD",
                "%FF%FE": "\uFFFD\uFFFD"
              };
              var match = multiMatcher.exec(input);
              while (match) {
                try {
                  replaceMap[match[0]] = decodeURIComponent(match[0]);
                } catch (err) {
                  var result = decode(match[0]);
                  if (result !== match[0]) {
                    replaceMap[match[0]] = result;
                  }
                }
                match = multiMatcher.exec(input);
              }
              replaceMap["%C2"] = "\uFFFD";
              var entries = Object.keys(replaceMap);
              for (var i = 0; i < entries.length; i++) {
                var key = entries[i];
                input = input.replace(new RegExp(key, "g"), replaceMap[key]);
              }
              return input;
            }
            module1.exports = function(encodedURI) {
              if (typeof encodedURI !== "string") {
                throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
              }
              try {
                encodedURI = encodedURI.replace(/\+/g, " ");
                return decodeURIComponent(encodedURI);
              } catch (err) {
                return customDecodeURIComponent(encodedURI);
              }
            };
          },
          "./node_modules/detect-browser/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            (function(process) {
              var __spreadArrays = this && this.__spreadArrays || function() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                  s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                  for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
                return r;
              };
              Object.defineProperty(exports1, "__esModule", {
                value: true
              });
              var BrowserInfo = function() {
                function BrowserInfo2(name, version, os) {
                  this.name = name;
                  this.version = version;
                  this.os = os;
                }
                return BrowserInfo2;
              }();
              exports1.BrowserInfo = BrowserInfo;
              var NodeInfo = function() {
                function NodeInfo2(version) {
                  this.version = version;
                  this.name = "node";
                  this.os = process.platform;
                }
                return NodeInfo2;
              }();
              exports1.NodeInfo = NodeInfo;
              var BotInfo = function() {
                function BotInfo2() {
                  this.bot = true;
                  this.name = "bot";
                  this.version = null;
                  this.os = null;
                }
                return BotInfo2;
              }();
              exports1.BotInfo = BotInfo;
              var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
              var SEARCHBOT_OS_REGEX = /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/;
              var REQUIRED_VERSION_PARTS = 3;
              var userAgentRules = [
                [
                  "aol",
                  /AOLShield\/([0-9\._]+)/
                ],
                [
                  "edge",
                  /Edge\/([0-9\._]+)/
                ],
                [
                  "edge-ios",
                  /EdgiOS\/([0-9\._]+)/
                ],
                [
                  "yandexbrowser",
                  /YaBrowser\/([0-9\._]+)/
                ],
                [
                  "vivaldi",
                  /Vivaldi\/([0-9\.]+)/
                ],
                [
                  "kakaotalk",
                  /KAKAOTALK\s([0-9\.]+)/
                ],
                [
                  "samsung",
                  /SamsungBrowser\/([0-9\.]+)/
                ],
                [
                  "silk",
                  /\bSilk\/([0-9._-]+)\b/
                ],
                [
                  "miui",
                  /MiuiBrowser\/([0-9\.]+)$/
                ],
                [
                  "beaker",
                  /BeakerBrowser\/([0-9\.]+)/
                ],
                [
                  "edge-chromium",
                  /Edg\/([0-9\.]+)/
                ],
                [
                  "chromium-webview",
                  /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
                ],
                [
                  "chrome",
                  /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
                ],
                [
                  "phantomjs",
                  /PhantomJS\/([0-9\.]+)(:?\s|$)/
                ],
                [
                  "crios",
                  /CriOS\/([0-9\.]+)(:?\s|$)/
                ],
                [
                  "firefox",
                  /Firefox\/([0-9\.]+)(?:\s|$)/
                ],
                [
                  "fxios",
                  /FxiOS\/([0-9\.]+)/
                ],
                [
                  "opera-mini",
                  /Opera Mini.*Version\/([0-9\.]+)/
                ],
                [
                  "opera",
                  /Opera\/([0-9\.]+)(?:\s|$)/
                ],
                [
                  "opera",
                  /OPR\/([0-9\.]+)(:?\s|$)/
                ],
                [
                  "ie",
                  /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
                ],
                [
                  "ie",
                  /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
                ],
                [
                  "ie",
                  /MSIE\s(7\.0)/
                ],
                [
                  "bb10",
                  /BB10;\sTouch.*Version\/([0-9\.]+)/
                ],
                [
                  "android",
                  /Android\s([0-9\.]+)/
                ],
                [
                  "ios",
                  /Version\/([0-9\._]+).*Mobile.*Safari.*/
                ],
                [
                  "safari",
                  /Version\/([0-9\._]+).*Safari/
                ],
                [
                  "facebook",
                  /FBAV\/([0-9\.]+)/
                ],
                [
                  "instagram",
                  /Instagram\s([0-9\.]+)/
                ],
                [
                  "ios-webview",
                  /AppleWebKit\/([0-9\.]+).*Mobile/
                ],
                [
                  "ios-webview",
                  /AppleWebKit\/([0-9\.]+).*Gecko\)$/
                ],
                [
                  "searchbot",
                  SEARCHBOX_UA_REGEX
                ]
              ];
              var operatingSystemRules = [
                [
                  "iOS",
                  /iP(hone|od|ad)/
                ],
                [
                  "Android OS",
                  /Android/
                ],
                [
                  "BlackBerry OS",
                  /BlackBerry|BB10/
                ],
                [
                  "Windows Mobile",
                  /IEMobile/
                ],
                [
                  "Amazon OS",
                  /Kindle/
                ],
                [
                  "Windows 3.11",
                  /Win16/
                ],
                [
                  "Windows 95",
                  /(Windows 95)|(Win95)|(Windows_95)/
                ],
                [
                  "Windows 98",
                  /(Windows 98)|(Win98)/
                ],
                [
                  "Windows 2000",
                  /(Windows NT 5.0)|(Windows 2000)/
                ],
                [
                  "Windows XP",
                  /(Windows NT 5.1)|(Windows XP)/
                ],
                [
                  "Windows Server 2003",
                  /(Windows NT 5.2)/
                ],
                [
                  "Windows Vista",
                  /(Windows NT 6.0)/
                ],
                [
                  "Windows 7",
                  /(Windows NT 6.1)/
                ],
                [
                  "Windows 8",
                  /(Windows NT 6.2)/
                ],
                [
                  "Windows 8.1",
                  /(Windows NT 6.3)/
                ],
                [
                  "Windows 10",
                  /(Windows NT 10.0)/
                ],
                [
                  "Windows ME",
                  /Windows ME/
                ],
                [
                  "Open BSD",
                  /OpenBSD/
                ],
                [
                  "Sun OS",
                  /SunOS/
                ],
                [
                  "Chrome OS",
                  /CrOS/
                ],
                [
                  "Linux",
                  /(Linux)|(X11)/
                ],
                [
                  "Mac OS",
                  /(Mac_PowerPC)|(Macintosh)/
                ],
                [
                  "QNX",
                  /QNX/
                ],
                [
                  "BeOS",
                  /BeOS/
                ],
                [
                  "OS/2",
                  /OS\/2/
                ],
                [
                  "Search Bot",
                  SEARCHBOT_OS_REGEX
                ]
              ];
              function detect(userAgent) {
                if (!!userAgent) {
                  return parseUserAgent(userAgent);
                }
                if (typeof navigator !== "undefined") {
                  return parseUserAgent(navigator.userAgent);
                }
                return getNodeVersion();
              }
              exports1.detect = detect;
              function parseUserAgent(ua) {
                var matchedRule = ua !== "" && userAgentRules.reduce(function(matched, _a) {
                  var browser = _a[0], regex = _a[1];
                  if (matched) {
                    return matched;
                  }
                  var uaMatch = regex.exec(ua);
                  return !!uaMatch && [
                    browser,
                    uaMatch
                  ];
                }, false);
                if (!matchedRule) {
                  return null;
                }
                var name = matchedRule[0], match = matchedRule[1];
                if (name === "searchbot") {
                  return new BotInfo();
                }
                var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);
                if (versionParts) {
                  if (versionParts.length < REQUIRED_VERSION_PARTS) {
                    versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
                  }
                } else {
                  versionParts = [];
                }
                return new BrowserInfo(name, versionParts.join("."), detectOS(ua));
              }
              exports1.parseUserAgent = parseUserAgent;
              function detectOS(ua) {
                for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
                  var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
                  var match = regex.test(ua);
                  if (match) {
                    return os;
                  }
                }
                return null;
              }
              exports1.detectOS = detectOS;
              function getNodeVersion() {
                var isNode = typeof process !== "undefined" && process.version;
                return isNode ? new NodeInfo(process.version.slice(1)) : null;
              }
              exports1.getNodeVersion = getNodeVersion;
              function createVersionParts(count) {
                var output = [];
                for (var ii = 0; ii < count; ii++) {
                  output.push("0");
                }
                return output;
              }
            }).call(this, __webpack_require__("./node_modules/process/browser.js"));
          },
          "./node_modules/engine.io-client/lib/globalThis.browser.js": function(module1, exports1) {
            module1.exports = function() {
              if (typeof self !== "undefined") {
                return self;
              } else if (typeof window !== "undefined") {
                return window;
              } else {
                return Function("return this")();
              }
            }();
          },
          "./node_modules/engine.io-client/lib/index.js": function(module1, exports1, __webpack_require__) {
            module1.exports = __webpack_require__("./node_modules/engine.io-client/lib/socket.js");
            module1.exports.parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
          },
          "./node_modules/engine.io-client/lib/socket.js": function(module1, exports1, __webpack_require__) {
            var transports = __webpack_require__("./node_modules/engine.io-client/lib/transports/index.js");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("engine.io-client:socket");
            var index = __webpack_require__("./node_modules/indexof/index.js");
            var parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
            var parseuri = __webpack_require__("./node_modules/parseuri/index.js");
            var parseqs = __webpack_require__("./node_modules/parseqs/index.js");
            module1.exports = Socket;
            function Socket(uri, opts) {
              if (!(this instanceof Socket))
                return new Socket(uri, opts);
              opts = opts || {};
              if (uri && "object" === typeof uri) {
                opts = uri;
                uri = null;
              }
              if (uri) {
                uri = parseuri(uri);
                opts.hostname = uri.host;
                opts.secure = uri.protocol === "https" || uri.protocol === "wss";
                opts.port = uri.port;
                if (uri.query)
                  opts.query = uri.query;
              } else if (opts.host) {
                opts.hostname = parseuri(opts.host).host;
              }
              this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
              if (opts.hostname && !opts.port) {
                opts.port = this.secure ? "443" : "80";
              }
              this.agent = opts.agent || false;
              this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
              this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? 443 : 80);
              this.query = opts.query || {};
              if ("string" === typeof this.query)
                this.query = parseqs.decode(this.query);
              this.upgrade = false !== opts.upgrade;
              this.path = (opts.path || "/engine.io").replace(/\/$/, "") + "/";
              this.forceJSONP = !!opts.forceJSONP;
              this.jsonp = false !== opts.jsonp;
              this.forceBase64 = !!opts.forceBase64;
              this.enablesXDR = !!opts.enablesXDR;
              this.withCredentials = false !== opts.withCredentials;
              this.timestampParam = opts.timestampParam || "t";
              this.timestampRequests = opts.timestampRequests;
              this.transports = opts.transports || [
                "polling",
                "websocket"
              ];
              this.transportOptions = opts.transportOptions || {};
              this.readyState = "";
              this.writeBuffer = [];
              this.prevBufferLen = 0;
              this.policyPort = opts.policyPort || 843;
              this.rememberUpgrade = opts.rememberUpgrade || false;
              this.binaryType = null;
              this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
              this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
              if (true === this.perMessageDeflate)
                this.perMessageDeflate = {};
              if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
                this.perMessageDeflate.threshold = 1024;
              }
              this.pfx = opts.pfx || void 0;
              this.key = opts.key || void 0;
              this.passphrase = opts.passphrase || void 0;
              this.cert = opts.cert || void 0;
              this.ca = opts.ca || void 0;
              this.ciphers = opts.ciphers || void 0;
              this.rejectUnauthorized = opts.rejectUnauthorized === void 0 ? true : opts.rejectUnauthorized;
              this.forceNode = !!opts.forceNode;
              this.isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
              if (typeof self === "undefined" || this.isReactNative) {
                if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
                  this.extraHeaders = opts.extraHeaders;
                }
                if (opts.localAddress) {
                  this.localAddress = opts.localAddress;
                }
              }
              this.id = null;
              this.upgrades = null;
              this.pingInterval = null;
              this.pingTimeout = null;
              this.pingIntervalTimer = null;
              this.pingTimeoutTimer = null;
              this.open();
            }
            Socket.priorWebsocketSuccess = false;
            Emitter(Socket.prototype);
            Socket.protocol = parser.protocol;
            Socket.Socket = Socket;
            Socket.Transport = __webpack_require__("./node_modules/engine.io-client/lib/transport.js");
            Socket.transports = __webpack_require__("./node_modules/engine.io-client/lib/transports/index.js");
            Socket.parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
            Socket.prototype.createTransport = function(name) {
              debug('creating transport "%s"', name);
              var query = clone(this.query);
              query.EIO = parser.protocol;
              query.transport = name;
              var options = this.transportOptions[name] || {};
              if (this.id)
                query.sid = this.id;
              var transport = new transports[name]({
                query,
                socket: this,
                agent: options.agent || this.agent,
                hostname: options.hostname || this.hostname,
                port: options.port || this.port,
                secure: options.secure || this.secure,
                path: options.path || this.path,
                forceJSONP: options.forceJSONP || this.forceJSONP,
                jsonp: options.jsonp || this.jsonp,
                forceBase64: options.forceBase64 || this.forceBase64,
                enablesXDR: options.enablesXDR || this.enablesXDR,
                withCredentials: options.withCredentials || this.withCredentials,
                timestampRequests: options.timestampRequests || this.timestampRequests,
                timestampParam: options.timestampParam || this.timestampParam,
                policyPort: options.policyPort || this.policyPort,
                pfx: options.pfx || this.pfx,
                key: options.key || this.key,
                passphrase: options.passphrase || this.passphrase,
                cert: options.cert || this.cert,
                ca: options.ca || this.ca,
                ciphers: options.ciphers || this.ciphers,
                rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
                perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
                extraHeaders: options.extraHeaders || this.extraHeaders,
                forceNode: options.forceNode || this.forceNode,
                localAddress: options.localAddress || this.localAddress,
                requestTimeout: options.requestTimeout || this.requestTimeout,
                protocols: options.protocols || void 0,
                isReactNative: this.isReactNative
              });
              return transport;
            };
            function clone(obj) {
              var o = {};
              for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                  o[i] = obj[i];
                }
              }
              return o;
            }
            Socket.prototype.open = function() {
              var transport;
              if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
                transport = "websocket";
              } else if (0 === this.transports.length) {
                var self1 = this;
                setTimeout(function() {
                  self1.emit("error", "No transports available");
                }, 0);
                return;
              } else {
                transport = this.transports[0];
              }
              this.readyState = "opening";
              try {
                transport = this.createTransport(transport);
              } catch (e) {
                this.transports.shift();
                this.open();
                return;
              }
              transport.open();
              this.setTransport(transport);
            };
            Socket.prototype.setTransport = function(transport) {
              debug("setting transport %s", transport.name);
              var self1 = this;
              if (this.transport) {
                debug("clearing existing transport %s", this.transport.name);
                this.transport.removeAllListeners();
              }
              this.transport = transport;
              transport.on("drain", function() {
                self1.onDrain();
              }).on("packet", function(packet) {
                self1.onPacket(packet);
              }).on("error", function(e) {
                self1.onError(e);
              }).on("close", function() {
                self1.onClose("transport close");
              });
            };
            Socket.prototype.probe = function(name) {
              debug('probing transport "%s"', name);
              var transport = this.createTransport(name, {
                probe: 1
              });
              var failed = false;
              var self1 = this;
              Socket.priorWebsocketSuccess = false;
              function onTransportOpen() {
                if (self1.onlyBinaryUpgrades) {
                  var upgradeLosesBinary = !this.supportsBinary && self1.transport.supportsBinary;
                  failed = failed || upgradeLosesBinary;
                }
                if (failed)
                  return;
                debug('probe transport "%s" opened', name);
                transport.send([
                  {
                    type: "ping",
                    data: "probe"
                  }
                ]);
                transport.once("packet", function(msg) {
                  if (failed)
                    return;
                  if ("pong" === msg.type && "probe" === msg.data) {
                    debug('probe transport "%s" pong', name);
                    self1.upgrading = true;
                    self1.emit("upgrading", transport);
                    if (!transport)
                      return;
                    Socket.priorWebsocketSuccess = "websocket" === transport.name;
                    debug('pausing current transport "%s"', self1.transport.name);
                    self1.transport.pause(function() {
                      if (failed)
                        return;
                      if ("closed" === self1.readyState)
                        return;
                      debug("changing transport and sending upgrade packet");
                      cleanup();
                      self1.setTransport(transport);
                      transport.send([
                        {
                          type: "upgrade"
                        }
                      ]);
                      self1.emit("upgrade", transport);
                      transport = null;
                      self1.upgrading = false;
                      self1.flush();
                    });
                  } else {
                    debug('probe transport "%s" failed', name);
                    var err = new Error("probe error");
                    err.transport = transport.name;
                    self1.emit("upgradeError", err);
                  }
                });
              }
              function freezeTransport() {
                if (failed)
                  return;
                failed = true;
                cleanup();
                transport.close();
                transport = null;
              }
              function onerror(err) {
                var error = new Error("probe error: " + err);
                error.transport = transport.name;
                freezeTransport();
                debug('probe transport "%s" failed because of error: %s', name, err);
                self1.emit("upgradeError", error);
              }
              function onTransportClose() {
                onerror("transport closed");
              }
              function onclose() {
                onerror("socket closed");
              }
              function onupgrade(to) {
                if (transport && to.name !== transport.name) {
                  debug('"%s" works - aborting "%s"', to.name, transport.name);
                  freezeTransport();
                }
              }
              function cleanup() {
                transport.removeListener("open", onTransportOpen);
                transport.removeListener("error", onerror);
                transport.removeListener("close", onTransportClose);
                self1.removeListener("close", onclose);
                self1.removeListener("upgrading", onupgrade);
              }
              transport.once("open", onTransportOpen);
              transport.once("error", onerror);
              transport.once("close", onTransportClose);
              this.once("close", onclose);
              this.once("upgrading", onupgrade);
              transport.open();
            };
            Socket.prototype.onOpen = function() {
              debug("socket open");
              this.readyState = "open";
              Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
              this.emit("open");
              this.flush();
              if ("open" === this.readyState && this.upgrade && this.transport.pause) {
                debug("starting upgrade probes");
                for (var i = 0, l = this.upgrades.length; i < l; i++) {
                  this.probe(this.upgrades[i]);
                }
              }
            };
            Socket.prototype.onPacket = function(packet) {
              if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
                this.emit("packet", packet);
                this.emit("heartbeat");
                switch (packet.type) {
                  case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                  case "pong":
                    this.setPing();
                    this.emit("pong");
                    break;
                  case "error":
                    var err = new Error("server error");
                    err.code = packet.data;
                    this.onError(err);
                    break;
                  case "message":
                    this.emit("data", packet.data);
                    this.emit("message", packet.data);
                    break;
                }
              } else {
                debug('packet received with socket readyState "%s"', this.readyState);
              }
            };
            Socket.prototype.onHandshake = function(data) {
              this.emit("handshake", data);
              this.id = data.sid;
              this.transport.query.sid = data.sid;
              this.upgrades = this.filterUpgrades(data.upgrades);
              this.pingInterval = data.pingInterval;
              this.pingTimeout = data.pingTimeout;
              this.onOpen();
              if ("closed" === this.readyState)
                return;
              this.setPing();
              this.removeListener("heartbeat", this.onHeartbeat);
              this.on("heartbeat", this.onHeartbeat);
            };
            Socket.prototype.onHeartbeat = function(timeout) {
              clearTimeout(this.pingTimeoutTimer);
              var self1 = this;
              self1.pingTimeoutTimer = setTimeout(function() {
                if ("closed" === self1.readyState)
                  return;
                self1.onClose("ping timeout");
              }, timeout || self1.pingInterval + self1.pingTimeout);
            };
            Socket.prototype.setPing = function() {
              var self1 = this;
              clearTimeout(self1.pingIntervalTimer);
              self1.pingIntervalTimer = setTimeout(function() {
                debug("writing ping packet - expecting pong within %sms", self1.pingTimeout);
                self1.ping();
                self1.onHeartbeat(self1.pingTimeout);
              }, self1.pingInterval);
            };
            Socket.prototype.ping = function() {
              var self1 = this;
              this.sendPacket("ping", function() {
                self1.emit("ping");
              });
            };
            Socket.prototype.onDrain = function() {
              this.writeBuffer.splice(0, this.prevBufferLen);
              this.prevBufferLen = 0;
              if (0 === this.writeBuffer.length) {
                this.emit("drain");
              } else {
                this.flush();
              }
            };
            Socket.prototype.flush = function() {
              if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                debug("flushing %d packets in socket", this.writeBuffer.length);
                this.transport.send(this.writeBuffer);
                this.prevBufferLen = this.writeBuffer.length;
                this.emit("flush");
              }
            };
            Socket.prototype.write = Socket.prototype.send = function(msg, options, fn) {
              this.sendPacket("message", msg, options, fn);
              return this;
            };
            Socket.prototype.sendPacket = function(type, data, options, fn) {
              if ("function" === typeof data) {
                fn = data;
                data = void 0;
              }
              if ("function" === typeof options) {
                fn = options;
                options = null;
              }
              if ("closing" === this.readyState || "closed" === this.readyState) {
                return;
              }
              options = options || {};
              options.compress = false !== options.compress;
              var packet = {
                type,
                data,
                options
              };
              this.emit("packetCreate", packet);
              this.writeBuffer.push(packet);
              if (fn)
                this.once("flush", fn);
              this.flush();
            };
            Socket.prototype.close = function() {
              if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing";
                var self1 = this;
                if (this.writeBuffer.length) {
                  this.once("drain", function() {
                    if (this.upgrading) {
                      waitForUpgrade();
                    } else {
                      close();
                    }
                  });
                } else if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              }
              function close() {
                self1.onClose("forced close");
                debug("socket closing - telling transport to close");
                self1.transport.close();
              }
              function cleanupAndClose() {
                self1.removeListener("upgrade", cleanupAndClose);
                self1.removeListener("upgradeError", cleanupAndClose);
                close();
              }
              function waitForUpgrade() {
                self1.once("upgrade", cleanupAndClose);
                self1.once("upgradeError", cleanupAndClose);
              }
              return this;
            };
            Socket.prototype.onError = function(err) {
              debug("socket error %j", err);
              Socket.priorWebsocketSuccess = false;
              this.emit("error", err);
              this.onClose("transport error", err);
            };
            Socket.prototype.onClose = function(reason, desc) {
              if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                debug('socket close with reason: "%s"', reason);
                var self1 = this;
                clearTimeout(this.pingIntervalTimer);
                clearTimeout(this.pingTimeoutTimer);
                this.transport.removeAllListeners("close");
                this.transport.close();
                this.transport.removeAllListeners();
                this.readyState = "closed";
                this.id = null;
                this.emit("close", reason, desc);
                self1.writeBuffer = [];
                self1.prevBufferLen = 0;
              }
            };
            Socket.prototype.filterUpgrades = function(upgrades) {
              var filteredUpgrades = [];
              for (var i = 0, j = upgrades.length; i < j; i++) {
                if (~index(this.transports, upgrades[i]))
                  filteredUpgrades.push(upgrades[i]);
              }
              return filteredUpgrades;
            };
          },
          "./node_modules/engine.io-client/lib/transport.js": function(module1, exports1, __webpack_require__) {
            var parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            module1.exports = Transport;
            function Transport(opts) {
              this.path = opts.path;
              this.hostname = opts.hostname;
              this.port = opts.port;
              this.secure = opts.secure;
              this.query = opts.query;
              this.timestampParam = opts.timestampParam;
              this.timestampRequests = opts.timestampRequests;
              this.readyState = "";
              this.agent = opts.agent || false;
              this.socket = opts.socket;
              this.enablesXDR = opts.enablesXDR;
              this.withCredentials = opts.withCredentials;
              this.pfx = opts.pfx;
              this.key = opts.key;
              this.passphrase = opts.passphrase;
              this.cert = opts.cert;
              this.ca = opts.ca;
              this.ciphers = opts.ciphers;
              this.rejectUnauthorized = opts.rejectUnauthorized;
              this.forceNode = opts.forceNode;
              this.isReactNative = opts.isReactNative;
              this.extraHeaders = opts.extraHeaders;
              this.localAddress = opts.localAddress;
            }
            Emitter(Transport.prototype);
            Transport.prototype.onError = function(msg, desc) {
              var err = new Error(msg);
              err.type = "TransportError";
              err.description = desc;
              this.emit("error", err);
              return this;
            };
            Transport.prototype.open = function() {
              if ("closed" === this.readyState || "" === this.readyState) {
                this.readyState = "opening";
                this.doOpen();
              }
              return this;
            };
            Transport.prototype.close = function() {
              if ("opening" === this.readyState || "open" === this.readyState) {
                this.doClose();
                this.onClose();
              }
              return this;
            };
            Transport.prototype.send = function(packets) {
              if ("open" === this.readyState) {
                this.write(packets);
              } else {
                throw new Error("Transport not open");
              }
            };
            Transport.prototype.onOpen = function() {
              this.readyState = "open";
              this.writable = true;
              this.emit("open");
            };
            Transport.prototype.onData = function(data) {
              var packet = parser.decodePacket(data, this.socket.binaryType);
              this.onPacket(packet);
            };
            Transport.prototype.onPacket = function(packet) {
              this.emit("packet", packet);
            };
            Transport.prototype.onClose = function() {
              this.readyState = "closed";
              this.emit("close");
            };
          },
          "./node_modules/engine.io-client/lib/transports/index.js": function(module1, exports1, __webpack_require__) {
            var XMLHttpRequest1 = __webpack_require__("./node_modules/engine.io-client/lib/xmlhttprequest.js");
            var XHR = __webpack_require__("./node_modules/engine.io-client/lib/transports/polling-xhr.js");
            var JSONP = __webpack_require__("./node_modules/engine.io-client/lib/transports/polling-jsonp.js");
            var websocket = __webpack_require__("./node_modules/engine.io-client/lib/transports/websocket.js");
            exports1.polling = polling;
            exports1.websocket = websocket;
            function polling(opts) {
              var xhr;
              var xd = false;
              var xs = false;
              var jsonp = false !== opts.jsonp;
              if (typeof location !== "undefined") {
                var isSSL = "https:" === location.protocol;
                var port = location.port;
                if (!port) {
                  port = isSSL ? 443 : 80;
                }
                xd = opts.hostname !== location.hostname || port !== opts.port;
                xs = opts.secure !== isSSL;
              }
              opts.xdomain = xd;
              opts.xscheme = xs;
              xhr = new XMLHttpRequest1(opts);
              if ("open" in xhr && !opts.forceJSONP) {
                return new XHR(opts);
              } else {
                if (!jsonp)
                  throw new Error("JSONP disabled");
                return new JSONP(opts);
              }
            }
          },
          "./node_modules/engine.io-client/lib/transports/polling-jsonp.js": function(module1, exports1, __webpack_require__) {
            var Polling = __webpack_require__("./node_modules/engine.io-client/lib/transports/polling.js");
            var inherit = __webpack_require__("./node_modules/component-inherit/index.js");
            var globalThis1 = __webpack_require__("./node_modules/engine.io-client/lib/globalThis.browser.js");
            module1.exports = JSONPPolling;
            var rNewline = /\n/g;
            var rEscapedNewline = /\\n/g;
            var callbacks;
            function empty() {
            }
            function JSONPPolling(opts) {
              Polling.call(this, opts);
              this.query = this.query || {};
              if (!callbacks) {
                callbacks = globalThis1.___eio = globalThis1.___eio || [];
              }
              this.index = callbacks.length;
              var self1 = this;
              callbacks.push(function(msg) {
                self1.onData(msg);
              });
              this.query.j = this.index;
              if (typeof addEventListener === "function") {
                addEventListener("beforeunload", function() {
                  if (self1.script)
                    self1.script.onerror = empty;
                }, false);
              }
            }
            inherit(JSONPPolling, Polling);
            JSONPPolling.prototype.supportsBinary = false;
            JSONPPolling.prototype.doClose = function() {
              if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null;
              }
              if (this.form) {
                this.form.parentNode.removeChild(this.form);
                this.form = null;
                this.iframe = null;
              }
              Polling.prototype.doClose.call(this);
            };
            JSONPPolling.prototype.doPoll = function() {
              var self1 = this;
              var script = document.createElement("script");
              if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null;
              }
              script.async = true;
              script.src = this.uri();
              script.onerror = function(e) {
                self1.onError("jsonp poll error", e);
              };
              var insertAt = document.getElementsByTagName("script")[0];
              if (insertAt) {
                insertAt.parentNode.insertBefore(script, insertAt);
              } else {
                (document.head || document.body).appendChild(script);
              }
              this.script = script;
              var isUAgecko = "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent);
              if (isUAgecko) {
                setTimeout(function() {
                  var iframe = document.createElement("iframe");
                  document.body.appendChild(iframe);
                  document.body.removeChild(iframe);
                }, 100);
              }
            };
            JSONPPolling.prototype.doWrite = function(data, fn) {
              var self1 = this;
              if (!this.form) {
                var form = document.createElement("form");
                var area = document.createElement("textarea");
                var id = this.iframeId = "eio_iframe_" + this.index;
                var iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "-1000px";
                form.style.left = "-1000px";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area;
              }
              this.form.action = this.uri();
              function complete() {
                initIframe();
                fn();
              }
              function initIframe() {
                if (self1.iframe) {
                  try {
                    self1.form.removeChild(self1.iframe);
                  } catch (e) {
                    self1.onError("jsonp polling iframe removal error", e);
                  }
                }
                try {
                  var html = '<iframe src="javascript:0" name="' + self1.iframeId + '">';
                  iframe = document.createElement(html);
                } catch (e) {
                  iframe = document.createElement("iframe");
                  iframe.name = self1.iframeId;
                  iframe.src = "javascript:0";
                }
                iframe.id = self1.iframeId;
                self1.form.appendChild(iframe);
                self1.iframe = iframe;
              }
              initIframe();
              data = data.replace(rEscapedNewline, "\\\n");
              this.area.value = data.replace(rNewline, "\\n");
              try {
                this.form.submit();
              } catch (e) {
              }
              if (this.iframe.attachEvent) {
                this.iframe.onreadystatechange = function() {
                  if (self1.iframe.readyState === "complete") {
                    complete();
                  }
                };
              } else {
                this.iframe.onload = complete;
              }
            };
          },
          "./node_modules/engine.io-client/lib/transports/polling-xhr.js": function(module1, exports1, __webpack_require__) {
            var XMLHttpRequest1 = __webpack_require__("./node_modules/engine.io-client/lib/xmlhttprequest.js");
            var Polling = __webpack_require__("./node_modules/engine.io-client/lib/transports/polling.js");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            var inherit = __webpack_require__("./node_modules/component-inherit/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("engine.io-client:polling-xhr");
            var globalThis1 = __webpack_require__("./node_modules/engine.io-client/lib/globalThis.browser.js");
            module1.exports = XHR;
            module1.exports.Request = Request;
            function empty() {
            }
            function XHR(opts) {
              Polling.call(this, opts);
              this.requestTimeout = opts.requestTimeout;
              this.extraHeaders = opts.extraHeaders;
              if (typeof location !== "undefined") {
                var isSSL = "https:" === location.protocol;
                var port = location.port;
                if (!port) {
                  port = isSSL ? 443 : 80;
                }
                this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
                this.xs = opts.secure !== isSSL;
              }
            }
            inherit(XHR, Polling);
            XHR.prototype.supportsBinary = true;
            XHR.prototype.request = function(opts) {
              opts = opts || {};
              opts.uri = this.uri();
              opts.xd = this.xd;
              opts.xs = this.xs;
              opts.agent = this.agent || false;
              opts.supportsBinary = this.supportsBinary;
              opts.enablesXDR = this.enablesXDR;
              opts.withCredentials = this.withCredentials;
              opts.pfx = this.pfx;
              opts.key = this.key;
              opts.passphrase = this.passphrase;
              opts.cert = this.cert;
              opts.ca = this.ca;
              opts.ciphers = this.ciphers;
              opts.rejectUnauthorized = this.rejectUnauthorized;
              opts.requestTimeout = this.requestTimeout;
              opts.extraHeaders = this.extraHeaders;
              return new Request(opts);
            };
            XHR.prototype.doWrite = function(data, fn) {
              var isBinary = typeof data !== "string" && data !== void 0;
              var req = this.request({
                method: "POST",
                data,
                isBinary
              });
              var self1 = this;
              req.on("success", fn);
              req.on("error", function(err) {
                self1.onError("xhr post error", err);
              });
              this.sendXhr = req;
            };
            XHR.prototype.doPoll = function() {
              debug("xhr poll");
              var req = this.request();
              var self1 = this;
              req.on("data", function(data) {
                self1.onData(data);
              });
              req.on("error", function(err) {
                self1.onError("xhr poll error", err);
              });
              this.pollXhr = req;
            };
            function Request(opts) {
              this.method = opts.method || "GET";
              this.uri = opts.uri;
              this.xd = !!opts.xd;
              this.xs = !!opts.xs;
              this.async = false !== opts.async;
              this.data = void 0 !== opts.data ? opts.data : null;
              this.agent = opts.agent;
              this.isBinary = opts.isBinary;
              this.supportsBinary = opts.supportsBinary;
              this.enablesXDR = opts.enablesXDR;
              this.withCredentials = opts.withCredentials;
              this.requestTimeout = opts.requestTimeout;
              this.pfx = opts.pfx;
              this.key = opts.key;
              this.passphrase = opts.passphrase;
              this.cert = opts.cert;
              this.ca = opts.ca;
              this.ciphers = opts.ciphers;
              this.rejectUnauthorized = opts.rejectUnauthorized;
              this.extraHeaders = opts.extraHeaders;
              this.create();
            }
            Emitter(Request.prototype);
            Request.prototype.create = function() {
              var opts = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
              };
              opts.pfx = this.pfx;
              opts.key = this.key;
              opts.passphrase = this.passphrase;
              opts.cert = this.cert;
              opts.ca = this.ca;
              opts.ciphers = this.ciphers;
              opts.rejectUnauthorized = this.rejectUnauthorized;
              var xhr = this.xhr = new XMLHttpRequest1(opts);
              var self1 = this;
              try {
                debug("xhr open %s: %s", this.method, this.uri);
                xhr.open(this.method, this.uri, this.async);
                try {
                  if (this.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (var i in this.extraHeaders) {
                      if (this.extraHeaders.hasOwnProperty(i)) {
                        xhr.setRequestHeader(i, this.extraHeaders[i]);
                      }
                    }
                  }
                } catch (e) {
                }
                if ("POST" === this.method) {
                  try {
                    if (this.isBinary) {
                      xhr.setRequestHeader("Content-type", "application/octet-stream");
                    } else {
                      xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                    }
                  } catch (e) {
                  }
                }
                try {
                  xhr.setRequestHeader("Accept", "*/*");
                } catch (e) {
                }
                if ("withCredentials" in xhr) {
                  xhr.withCredentials = this.withCredentials;
                }
                if (this.requestTimeout) {
                  xhr.timeout = this.requestTimeout;
                }
                if (this.hasXDR()) {
                  xhr.onload = function() {
                    self1.onLoad();
                  };
                  xhr.onerror = function() {
                    self1.onError(xhr.responseText);
                  };
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 2) {
                      try {
                        var contentType = xhr.getResponseHeader("Content-Type");
                        if (self1.supportsBinary && contentType === "application/octet-stream" || contentType === "application/octet-stream; charset=UTF-8") {
                          xhr.responseType = "arraybuffer";
                        }
                      } catch (e) {
                      }
                    }
                    if (4 !== xhr.readyState)
                      return;
                    if (200 === xhr.status || 1223 === xhr.status) {
                      self1.onLoad();
                    } else {
                      setTimeout(function() {
                        self1.onError(typeof xhr.status === "number" ? xhr.status : 0);
                      }, 0);
                    }
                  };
                }
                debug("xhr data %s", this.data);
                xhr.send(this.data);
              } catch (e) {
                setTimeout(function() {
                  self1.onError(e);
                }, 0);
                return;
              }
              if (typeof document !== "undefined") {
                this.index = Request.requestsCount++;
                Request.requests[this.index] = this;
              }
            };
            Request.prototype.onSuccess = function() {
              this.emit("success");
              this.cleanup();
            };
            Request.prototype.onData = function(data) {
              this.emit("data", data);
              this.onSuccess();
            };
            Request.prototype.onError = function(err) {
              this.emit("error", err);
              this.cleanup(true);
            };
            Request.prototype.cleanup = function(fromError) {
              if ("undefined" === typeof this.xhr || null === this.xhr) {
                return;
              }
              if (this.hasXDR()) {
                this.xhr.onload = this.xhr.onerror = empty;
              } else {
                this.xhr.onreadystatechange = empty;
              }
              if (fromError) {
                try {
                  this.xhr.abort();
                } catch (e) {
                }
              }
              if (typeof document !== "undefined") {
                delete Request.requests[this.index];
              }
              this.xhr = null;
            };
            Request.prototype.onLoad = function() {
              var data;
              try {
                var contentType;
                try {
                  contentType = this.xhr.getResponseHeader("Content-Type");
                } catch (e) {
                }
                if (contentType === "application/octet-stream" || contentType === "application/octet-stream; charset=UTF-8") {
                  data = this.xhr.response || this.xhr.responseText;
                } else {
                  data = this.xhr.responseText;
                }
              } catch (e) {
                this.onError(e);
              }
              if (null != data) {
                this.onData(data);
              }
            };
            Request.prototype.hasXDR = function() {
              return typeof XDomainRequest !== "undefined" && !this.xs && this.enablesXDR;
            };
            Request.prototype.abort = function() {
              this.cleanup();
            };
            Request.requestsCount = 0;
            Request.requests = {};
            if (typeof document !== "undefined") {
              if (typeof attachEvent === "function") {
                attachEvent("onunload", unloadHandler);
              } else if (typeof addEventListener === "function") {
                var terminationEvent = "onpagehide" in globalThis1 ? "pagehide" : "unload";
                addEventListener(terminationEvent, unloadHandler, false);
              }
            }
            function unloadHandler() {
              for (var i in Request.requests) {
                if (Request.requests.hasOwnProperty(i)) {
                  Request.requests[i].abort();
                }
              }
            }
          },
          "./node_modules/engine.io-client/lib/transports/polling.js": function(module1, exports1, __webpack_require__) {
            var Transport = __webpack_require__("./node_modules/engine.io-client/lib/transport.js");
            var parseqs = __webpack_require__("./node_modules/parseqs/index.js");
            var parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
            var inherit = __webpack_require__("./node_modules/component-inherit/index.js");
            var yeast = __webpack_require__("./node_modules/yeast/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("engine.io-client:polling");
            module1.exports = Polling;
            var hasXHR2 = function() {
              var XMLHttpRequest1 = __webpack_require__("./node_modules/engine.io-client/lib/xmlhttprequest.js");
              var xhr = new XMLHttpRequest1({
                xdomain: false
              });
              return null != xhr.responseType;
            }();
            function Polling(opts) {
              var forceBase64 = opts && opts.forceBase64;
              if (!hasXHR2 || forceBase64) {
                this.supportsBinary = false;
              }
              Transport.call(this, opts);
            }
            inherit(Polling, Transport);
            Polling.prototype.name = "polling";
            Polling.prototype.doOpen = function() {
              this.poll();
            };
            Polling.prototype.pause = function(onPause) {
              var self1 = this;
              this.readyState = "pausing";
              function pause() {
                debug("paused");
                self1.readyState = "paused";
                onPause();
              }
              if (this.polling || !this.writable) {
                var total = 0;
                if (this.polling) {
                  debug("we are currently polling - waiting to pause");
                  total++;
                  this.once("pollComplete", function() {
                    debug("pre-pause polling complete");
                    --total || pause();
                  });
                }
                if (!this.writable) {
                  debug("we are currently writing - waiting to pause");
                  total++;
                  this.once("drain", function() {
                    debug("pre-pause writing complete");
                    --total || pause();
                  });
                }
              } else {
                pause();
              }
            };
            Polling.prototype.poll = function() {
              debug("polling");
              this.polling = true;
              this.doPoll();
              this.emit("poll");
            };
            Polling.prototype.onData = function(data) {
              var self1 = this;
              debug("polling got data %s", data);
              var callback = function(packet, index, total) {
                if ("opening" === self1.readyState && packet.type === "open") {
                  self1.onOpen();
                }
                if ("close" === packet.type) {
                  self1.onClose();
                  return false;
                }
                self1.onPacket(packet);
              };
              parser.decodePayload(data, this.socket.binaryType, callback);
              if ("closed" !== this.readyState) {
                this.polling = false;
                this.emit("pollComplete");
                if ("open" === this.readyState) {
                  this.poll();
                } else {
                  debug('ignoring poll - transport state "%s"', this.readyState);
                }
              }
            };
            Polling.prototype.doClose = function() {
              var self1 = this;
              function close() {
                debug("writing close packet");
                self1.write([
                  {
                    type: "close"
                  }
                ]);
              }
              if ("open" === this.readyState) {
                debug("transport open - closing");
                close();
              } else {
                debug("transport not open - deferring close");
                this.once("open", close);
              }
            };
            Polling.prototype.write = function(packets) {
              var self1 = this;
              this.writable = false;
              var callbackfn = function() {
                self1.writable = true;
                self1.emit("drain");
              };
              parser.encodePayload(packets, this.supportsBinary, function(data) {
                self1.doWrite(data, callbackfn);
              });
            };
            Polling.prototype.uri = function() {
              var query = this.query || {};
              var schema = this.secure ? "https" : "http";
              var port = "";
              if (false !== this.timestampRequests) {
                query[this.timestampParam] = yeast();
              }
              if (!this.supportsBinary && !query.sid) {
                query.b64 = 1;
              }
              query = parseqs.encode(query);
              if (this.port && ("https" === schema && Number(this.port) !== 443 || "http" === schema && Number(this.port) !== 80)) {
                port = ":" + this.port;
              }
              if (query.length) {
                query = "?" + query;
              }
              var ipv6 = this.hostname.indexOf(":") !== -1;
              return schema + "://" + (ipv6 ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
            };
          },
          "./node_modules/engine.io-client/lib/transports/websocket.js": function(module1, exports1, __webpack_require__) {
            (function(Buffer2) {
              var Transport = __webpack_require__("./node_modules/engine.io-client/lib/transport.js");
              var parser = __webpack_require__("./node_modules/engine.io-parser/lib/browser.js");
              var parseqs = __webpack_require__("./node_modules/parseqs/index.js");
              var inherit = __webpack_require__("./node_modules/component-inherit/index.js");
              var yeast = __webpack_require__("./node_modules/yeast/index.js");
              var debug = __webpack_require__("./node_modules/debug/src/browser.js")("engine.io-client:websocket");
              var BrowserWebSocket, NodeWebSocket;
              if (typeof WebSocket !== "undefined") {
                BrowserWebSocket = WebSocket;
              } else if (typeof self !== "undefined") {
                BrowserWebSocket = self.WebSocket || self.MozWebSocket;
              }
              if (typeof window === "undefined") {
                try {
                  NodeWebSocket = __webpack_require__(0);
                } catch (e) {
                }
              }
              var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
              module1.exports = WS;
              function WS(opts) {
                var forceBase64 = opts && opts.forceBase64;
                if (forceBase64) {
                  this.supportsBinary = false;
                }
                this.perMessageDeflate = opts.perMessageDeflate;
                this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
                this.protocols = opts.protocols;
                if (!this.usingBrowserWebSocket) {
                  WebSocketImpl = NodeWebSocket;
                }
                Transport.call(this, opts);
              }
              inherit(WS, Transport);
              WS.prototype.name = "websocket";
              WS.prototype.supportsBinary = true;
              WS.prototype.doOpen = function() {
                if (!this.check()) {
                  return;
                }
                var uri = this.uri();
                var protocols = this.protocols;
                var opts = {};
                if (!this.isReactNative) {
                  opts.agent = this.agent;
                  opts.perMessageDeflate = this.perMessageDeflate;
                  opts.pfx = this.pfx;
                  opts.key = this.key;
                  opts.passphrase = this.passphrase;
                  opts.cert = this.cert;
                  opts.ca = this.ca;
                  opts.ciphers = this.ciphers;
                  opts.rejectUnauthorized = this.rejectUnauthorized;
                }
                if (this.extraHeaders) {
                  opts.headers = this.extraHeaders;
                }
                if (this.localAddress) {
                  opts.localAddress = this.localAddress;
                }
                try {
                  this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
                } catch (err) {
                  return this.emit("error", err);
                }
                if (this.ws.binaryType === void 0) {
                  this.supportsBinary = false;
                }
                if (this.ws.supports && this.ws.supports.binary) {
                  this.supportsBinary = true;
                  this.ws.binaryType = "nodebuffer";
                } else {
                  this.ws.binaryType = "arraybuffer";
                }
                this.addEventListeners();
              };
              WS.prototype.addEventListeners = function() {
                var self1 = this;
                this.ws.onopen = function() {
                  self1.onOpen();
                };
                this.ws.onclose = function() {
                  self1.onClose();
                };
                this.ws.onmessage = function(ev) {
                  self1.onData(ev.data);
                };
                this.ws.onerror = function(e) {
                  self1.onError("websocket error", e);
                };
              };
              WS.prototype.write = function(packets) {
                var self1 = this;
                this.writable = false;
                var total = packets.length;
                for (var i = 0, l = total; i < l; i++) {
                  (function(packet) {
                    parser.encodePacket(packet, self1.supportsBinary, function(data) {
                      if (!self1.usingBrowserWebSocket) {
                        var opts = {};
                        if (packet.options) {
                          opts.compress = packet.options.compress;
                        }
                        if (self1.perMessageDeflate) {
                          var len = "string" === typeof data ? Buffer2.byteLength(data) : data.length;
                          if (len < self1.perMessageDeflate.threshold) {
                            opts.compress = false;
                          }
                        }
                      }
                      try {
                        if (self1.usingBrowserWebSocket) {
                          self1.ws.send(data);
                        } else {
                          self1.ws.send(data, opts);
                        }
                      } catch (e) {
                        debug("websocket closed before onclose event");
                      }
                      --total || done();
                    });
                  })(packets[i]);
                }
                function done() {
                  self1.emit("flush");
                  setTimeout(function() {
                    self1.writable = true;
                    self1.emit("drain");
                  }, 0);
                }
              };
              WS.prototype.onClose = function() {
                Transport.prototype.onClose.call(this);
              };
              WS.prototype.doClose = function() {
                if (typeof this.ws !== "undefined") {
                  this.ws.close();
                }
              };
              WS.prototype.uri = function() {
                var query = this.query || {};
                var schema = this.secure ? "wss" : "ws";
                var port = "";
                if (this.port && ("wss" === schema && Number(this.port) !== 443 || "ws" === schema && Number(this.port) !== 80)) {
                  port = ":" + this.port;
                }
                if (this.timestampRequests) {
                  query[this.timestampParam] = yeast();
                }
                if (!this.supportsBinary) {
                  query.b64 = 1;
                }
                query = parseqs.encode(query);
                if (query.length) {
                  query = "?" + query;
                }
                var ipv6 = this.hostname.indexOf(":") !== -1;
                return schema + "://" + (ipv6 ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
              };
              WS.prototype.check = function() {
                return !!WebSocketImpl && !("__initialize" in WebSocketImpl && this.name === WS.prototype.name);
              };
            }).call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer);
          },
          "./node_modules/engine.io-client/lib/xmlhttprequest.js": function(module1, exports1, __webpack_require__) {
            var hasCORS = __webpack_require__("./node_modules/has-cors/index.js");
            var globalThis1 = __webpack_require__("./node_modules/engine.io-client/lib/globalThis.browser.js");
            module1.exports = function(opts) {
              var xdomain = opts.xdomain;
              var xscheme = opts.xscheme;
              var enablesXDR = opts.enablesXDR;
              try {
                if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
                  return new XMLHttpRequest();
                }
              } catch (e) {
              }
              try {
                if ("undefined" !== typeof XDomainRequest && !xscheme && enablesXDR) {
                  return new XDomainRequest();
                }
              } catch (e) {
              }
              if (!xdomain) {
                try {
                  return new globalThis1[[
                    "Active"
                  ].concat("Object").join("X")]("Microsoft.XMLHTTP");
                } catch (e) {
                }
              }
            };
          },
          "./node_modules/engine.io-parser/lib/browser.js": function(module1, exports1, __webpack_require__) {
            var keys = __webpack_require__("./node_modules/engine.io-parser/lib/keys.js");
            var hasBinary = __webpack_require__("./node_modules/has-binary2/index.js");
            var sliceBuffer = __webpack_require__("./node_modules/arraybuffer.slice/index.js");
            var after = __webpack_require__("./node_modules/after/index.js");
            var utf8 = __webpack_require__("./node_modules/engine.io-parser/lib/utf8.js");
            var base64encoder;
            if (typeof ArrayBuffer !== "undefined") {
              base64encoder = __webpack_require__("./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
            }
            var isAndroid = typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
            var isPhantomJS = typeof navigator !== "undefined" && /PhantomJS/i.test(navigator.userAgent);
            var dontSendBlobs = isAndroid || isPhantomJS;
            exports1.protocol = 3;
            var packets = exports1.packets = {
              open: 0,
              close: 1,
              ping: 2,
              pong: 3,
              message: 4,
              upgrade: 5,
              noop: 6
            };
            var packetslist = keys(packets);
            var err = {
              type: "error",
              data: "parser error"
            };
            var Blob1 = __webpack_require__("./node_modules/blob/index.js");
            exports1.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
              if (typeof supportsBinary === "function") {
                callback = supportsBinary;
                supportsBinary = false;
              }
              if (typeof utf8encode === "function") {
                callback = utf8encode;
                utf8encode = null;
              }
              var data = packet.data === void 0 ? void 0 : packet.data.buffer || packet.data;
              if (typeof ArrayBuffer !== "undefined" && data instanceof ArrayBuffer) {
                return encodeArrayBuffer(packet, supportsBinary, callback);
              } else if (typeof Blob1 !== "undefined" && data instanceof Blob1) {
                return encodeBlob(packet, supportsBinary, callback);
              }
              if (data && data.base64) {
                return encodeBase64Object(packet, callback);
              }
              var encoded = packets[packet.type];
              if (void 0 !== packet.data) {
                encoded += utf8encode ? utf8.encode(String(packet.data), {
                  strict: false
                }) : String(packet.data);
              }
              return callback("" + encoded);
            };
            function encodeBase64Object(packet, callback) {
              var message = "b" + exports1.packets[packet.type] + packet.data.data;
              return callback(message);
            }
            function encodeArrayBuffer(packet, supportsBinary, callback) {
              if (!supportsBinary) {
                return exports1.encodeBase64Packet(packet, callback);
              }
              var data = packet.data;
              var contentArray = new Uint8Array(data);
              var resultBuffer = new Uint8Array(1 + data.byteLength);
              resultBuffer[0] = packets[packet.type];
              for (var i = 0; i < contentArray.length; i++) {
                resultBuffer[i + 1] = contentArray[i];
              }
              return callback(resultBuffer.buffer);
            }
            function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
              if (!supportsBinary) {
                return exports1.encodeBase64Packet(packet, callback);
              }
              var fr = new FileReader();
              fr.onload = function() {
                exports1.encodePacket({
                  type: packet.type,
                  data: fr.result
                }, supportsBinary, true, callback);
              };
              return fr.readAsArrayBuffer(packet.data);
            }
            function encodeBlob(packet, supportsBinary, callback) {
              if (!supportsBinary) {
                return exports1.encodeBase64Packet(packet, callback);
              }
              if (dontSendBlobs) {
                return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
              }
              var length = new Uint8Array(1);
              length[0] = packets[packet.type];
              var blob = new Blob1([
                length.buffer,
                packet.data
              ]);
              return callback(blob);
            }
            exports1.encodeBase64Packet = function(packet, callback) {
              var message = "b" + exports1.packets[packet.type];
              if (typeof Blob1 !== "undefined" && packet.data instanceof Blob1) {
                var fr = new FileReader();
                fr.onload = function() {
                  var b64 = fr.result.split(",")[1];
                  callback(message + b64);
                };
                return fr.readAsDataURL(packet.data);
              }
              var b64data;
              try {
                b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
              } catch (e) {
                var typed = new Uint8Array(packet.data);
                var basic = new Array(typed.length);
                for (var i = 0; i < typed.length; i++) {
                  basic[i] = typed[i];
                }
                b64data = String.fromCharCode.apply(null, basic);
              }
              message += btoa(b64data);
              return callback(message);
            };
            exports1.decodePacket = function(data, binaryType, utf8decode) {
              if (data === void 0) {
                return err;
              }
              if (typeof data === "string") {
                if (data.charAt(0) === "b") {
                  return exports1.decodeBase64Packet(data.substr(1), binaryType);
                }
                if (utf8decode) {
                  data = tryDecode(data);
                  if (data === false) {
                    return err;
                  }
                }
                var type = data.charAt(0);
                if (Number(type) != type || !packetslist[type]) {
                  return err;
                }
                if (data.length > 1) {
                  return {
                    type: packetslist[type],
                    data: data.substring(1)
                  };
                } else {
                  return {
                    type: packetslist[type]
                  };
                }
              }
              var asArray = new Uint8Array(data);
              var type = asArray[0];
              var rest = sliceBuffer(data, 1);
              if (Blob1 && binaryType === "blob") {
                rest = new Blob1([
                  rest
                ]);
              }
              return {
                type: packetslist[type],
                data: rest
              };
            };
            function tryDecode(data) {
              try {
                data = utf8.decode(data, {
                  strict: false
                });
              } catch (e) {
                return false;
              }
              return data;
            }
            exports1.decodeBase64Packet = function(msg, binaryType) {
              var type = packetslist[msg.charAt(0)];
              if (!base64encoder) {
                return {
                  type,
                  data: {
                    base64: true,
                    data: msg.substr(1)
                  }
                };
              }
              var data = base64encoder.decode(msg.substr(1));
              if (binaryType === "blob" && Blob1) {
                data = new Blob1([
                  data
                ]);
              }
              return {
                type,
                data
              };
            };
            exports1.encodePayload = function(packets2, supportsBinary, callback) {
              if (typeof supportsBinary === "function") {
                callback = supportsBinary;
                supportsBinary = null;
              }
              var isBinary = hasBinary(packets2);
              if (supportsBinary && isBinary) {
                if (Blob1 && !dontSendBlobs) {
                  return exports1.encodePayloadAsBlob(packets2, callback);
                }
                return exports1.encodePayloadAsArrayBuffer(packets2, callback);
              }
              if (!packets2.length) {
                return callback("0:");
              }
              function setLengthHeader(message) {
                return message.length + ":" + message;
              }
              function encodeOne(packet, doneCallback) {
                exports1.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
                  doneCallback(null, setLengthHeader(message));
                });
              }
              map(packets2, encodeOne, function(err2, results) {
                return callback(results.join(""));
              });
            };
            function map(ary, each, done) {
              var result = new Array(ary.length);
              var next = after(ary.length, done);
              var eachWithIndex = function(i2, el, cb) {
                each(el, function(error, msg) {
                  result[i2] = msg;
                  cb(error, result);
                });
              };
              for (var i = 0; i < ary.length; i++) {
                eachWithIndex(i, ary[i], next);
              }
            }
            exports1.decodePayload = function(data, binaryType, callback) {
              if (typeof data !== "string") {
                return exports1.decodePayloadAsBinary(data, binaryType, callback);
              }
              if (typeof binaryType === "function") {
                callback = binaryType;
                binaryType = null;
              }
              var packet;
              if (data === "") {
                return callback(err, 0, 1);
              }
              var length = "", n, msg;
              for (var i = 0, l = data.length; i < l; i++) {
                var chr = data.charAt(i);
                if (chr !== ":") {
                  length += chr;
                  continue;
                }
                if (length === "" || length != (n = Number(length))) {
                  return callback(err, 0, 1);
                }
                msg = data.substr(i + 1, n);
                if (length != msg.length) {
                  return callback(err, 0, 1);
                }
                if (msg.length) {
                  packet = exports1.decodePacket(msg, binaryType, false);
                  if (err.type === packet.type && err.data === packet.data) {
                    return callback(err, 0, 1);
                  }
                  var ret = callback(packet, i + n, l);
                  if (false === ret)
                    return;
                }
                i += n;
                length = "";
              }
              if (length !== "") {
                return callback(err, 0, 1);
              }
            };
            exports1.encodePayloadAsArrayBuffer = function(packets2, callback) {
              if (!packets2.length) {
                return callback(new ArrayBuffer(0));
              }
              function encodeOne(packet, doneCallback) {
                exports1.encodePacket(packet, true, true, function(data) {
                  return doneCallback(null, data);
                });
              }
              map(packets2, encodeOne, function(err2, encodedPackets) {
                var totalLength = encodedPackets.reduce(function(acc, p) {
                  var len;
                  if (typeof p === "string") {
                    len = p.length;
                  } else {
                    len = p.byteLength;
                  }
                  return acc + len.toString().length + len + 2;
                }, 0);
                var resultArray = new Uint8Array(totalLength);
                var bufferIndex = 0;
                encodedPackets.forEach(function(p) {
                  var isString = typeof p === "string";
                  var ab = p;
                  if (isString) {
                    var view = new Uint8Array(p.length);
                    for (var i = 0; i < p.length; i++) {
                      view[i] = p.charCodeAt(i);
                    }
                    ab = view.buffer;
                  }
                  if (isString) {
                    resultArray[bufferIndex++] = 0;
                  } else {
                    resultArray[bufferIndex++] = 1;
                  }
                  var lenStr = ab.byteLength.toString();
                  for (var i = 0; i < lenStr.length; i++) {
                    resultArray[bufferIndex++] = parseInt(lenStr[i]);
                  }
                  resultArray[bufferIndex++] = 255;
                  var view = new Uint8Array(ab);
                  for (var i = 0; i < view.length; i++) {
                    resultArray[bufferIndex++] = view[i];
                  }
                });
                return callback(resultArray.buffer);
              });
            };
            exports1.encodePayloadAsBlob = function(packets2, callback) {
              function encodeOne(packet, doneCallback) {
                exports1.encodePacket(packet, true, true, function(encoded) {
                  var binaryIdentifier = new Uint8Array(1);
                  binaryIdentifier[0] = 1;
                  if (typeof encoded === "string") {
                    var view = new Uint8Array(encoded.length);
                    for (var i = 0; i < encoded.length; i++) {
                      view[i] = encoded.charCodeAt(i);
                    }
                    encoded = view.buffer;
                    binaryIdentifier[0] = 0;
                  }
                  var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
                  var lenStr = len.toString();
                  var lengthAry = new Uint8Array(lenStr.length + 1);
                  for (var i = 0; i < lenStr.length; i++) {
                    lengthAry[i] = parseInt(lenStr[i]);
                  }
                  lengthAry[lenStr.length] = 255;
                  if (Blob1) {
                    var blob = new Blob1([
                      binaryIdentifier.buffer,
                      lengthAry.buffer,
                      encoded
                    ]);
                    doneCallback(null, blob);
                  }
                });
              }
              map(packets2, encodeOne, function(err2, results) {
                return callback(new Blob1(results));
              });
            };
            exports1.decodePayloadAsBinary = function(data, binaryType, callback) {
              if (typeof binaryType === "function") {
                callback = binaryType;
                binaryType = null;
              }
              var bufferTail = data;
              var buffers = [];
              while (bufferTail.byteLength > 0) {
                var tailArray = new Uint8Array(bufferTail);
                var isString = tailArray[0] === 0;
                var msgLength = "";
                for (var i = 1; ; i++) {
                  if (tailArray[i] === 255)
                    break;
                  if (msgLength.length > 310) {
                    return callback(err, 0, 1);
                  }
                  msgLength += tailArray[i];
                }
                bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
                msgLength = parseInt(msgLength);
                var msg = sliceBuffer(bufferTail, 0, msgLength);
                if (isString) {
                  try {
                    msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                  } catch (e) {
                    var typed = new Uint8Array(msg);
                    msg = "";
                    for (var i = 0; i < typed.length; i++) {
                      msg += String.fromCharCode(typed[i]);
                    }
                  }
                }
                buffers.push(msg);
                bufferTail = sliceBuffer(bufferTail, msgLength);
              }
              var total = buffers.length;
              buffers.forEach(function(buffer, i2) {
                callback(exports1.decodePacket(buffer, binaryType, true), i2, total);
              });
            };
          },
          "./node_modules/engine.io-parser/lib/keys.js": function(module1, exports1) {
            module1.exports = Object.keys || function keys(obj) {
              var arr = [];
              var has = Object.prototype.hasOwnProperty;
              for (var i in obj) {
                if (has.call(obj, i)) {
                  arr.push(i);
                }
              }
              return arr;
            };
          },
          "./node_modules/engine.io-parser/lib/utf8.js": function(module1, exports1) {
            var stringFromCharCode = String.fromCharCode;
            function ucs2decode(string) {
              var output = [];
              var counter = 0;
              var length = string.length;
              var value;
              var extra;
              while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 55296 && value <= 56319 && counter < length) {
                  extra = string.charCodeAt(counter++);
                  if ((extra & 64512) == 56320) {
                    output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                  } else {
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            }
            function ucs2encode(array) {
              var length = array.length;
              var index = -1;
              var value;
              var output = "";
              while (++index < length) {
                value = array[index];
                if (value > 65535) {
                  value -= 65536;
                  output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                  value = 56320 | value & 1023;
                }
                output += stringFromCharCode(value);
              }
              return output;
            }
            function checkScalarValue(codePoint, strict) {
              if (codePoint >= 55296 && codePoint <= 57343) {
                if (strict) {
                  throw Error("Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value");
                }
                return false;
              }
              return true;
            }
            function createByte(codePoint, shift) {
              return stringFromCharCode(codePoint >> shift & 63 | 128);
            }
            function encodeCodePoint(codePoint, strict) {
              if ((codePoint & 4294967168) == 0) {
                return stringFromCharCode(codePoint);
              }
              var symbol = "";
              if ((codePoint & 4294965248) == 0) {
                symbol = stringFromCharCode(codePoint >> 6 & 31 | 192);
              } else if ((codePoint & 4294901760) == 0) {
                if (!checkScalarValue(codePoint, strict)) {
                  codePoint = 65533;
                }
                symbol = stringFromCharCode(codePoint >> 12 & 15 | 224);
                symbol += createByte(codePoint, 6);
              } else if ((codePoint & 4292870144) == 0) {
                symbol = stringFromCharCode(codePoint >> 18 & 7 | 240);
                symbol += createByte(codePoint, 12);
                symbol += createByte(codePoint, 6);
              }
              symbol += stringFromCharCode(codePoint & 63 | 128);
              return symbol;
            }
            function utf8encode(string, opts) {
              opts = opts || {};
              var strict = false !== opts.strict;
              var codePoints = ucs2decode(string);
              var length = codePoints.length;
              var index = -1;
              var codePoint;
              var byteString = "";
              while (++index < length) {
                codePoint = codePoints[index];
                byteString += encodeCodePoint(codePoint, strict);
              }
              return byteString;
            }
            function readContinuationByte() {
              if (byteIndex >= byteCount) {
                throw Error("Invalid byte index");
              }
              var continuationByte = byteArray[byteIndex] & 255;
              byteIndex++;
              if ((continuationByte & 192) == 128) {
                return continuationByte & 63;
              }
              throw Error("Invalid continuation byte");
            }
            function decodeSymbol(strict) {
              var byte1;
              var byte2;
              var byte3;
              var byte4;
              var codePoint;
              if (byteIndex > byteCount) {
                throw Error("Invalid byte index");
              }
              if (byteIndex == byteCount) {
                return false;
              }
              byte1 = byteArray[byteIndex] & 255;
              byteIndex++;
              if ((byte1 & 128) == 0) {
                return byte1;
              }
              if ((byte1 & 224) == 192) {
                byte2 = readContinuationByte();
                codePoint = (byte1 & 31) << 6 | byte2;
                if (codePoint >= 128) {
                  return codePoint;
                } else {
                  throw Error("Invalid continuation byte");
                }
              }
              if ((byte1 & 240) == 224) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                codePoint = (byte1 & 15) << 12 | byte2 << 6 | byte3;
                if (codePoint >= 2048) {
                  return checkScalarValue(codePoint, strict) ? codePoint : 65533;
                } else {
                  throw Error("Invalid continuation byte");
                }
              }
              if ((byte1 & 248) == 240) {
                byte2 = readContinuationByte();
                byte3 = readContinuationByte();
                byte4 = readContinuationByte();
                codePoint = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
                if (codePoint >= 65536 && codePoint <= 1114111) {
                  return codePoint;
                }
              }
              throw Error("Invalid UTF-8 detected");
            }
            var byteArray;
            var byteCount;
            var byteIndex;
            function utf8decode(byteString, opts) {
              opts = opts || {};
              var strict = false !== opts.strict;
              byteArray = ucs2decode(byteString);
              byteCount = byteArray.length;
              byteIndex = 0;
              var codePoints = [];
              var tmp;
              while ((tmp = decodeSymbol(strict)) !== false) {
                codePoints.push(tmp);
              }
              return ucs2encode(codePoints);
            }
            module1.exports = {
              version: "2.1.2",
              encode: utf8encode,
              decode: utf8decode
            };
          },
          "./node_modules/enum/lib/enum.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            (function(global) {
              __webpack_require__.d(__webpack_exports__, "default", function() {
                return Enum;
              });
              var _enumItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/enum/lib/enumItem.js");
              var _isType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/enum/lib/isType.js");
              var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/enum/lib/indexOf.js");
              const isBuffer = (obj) => {
                return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
              };
              const getEndianess = () => {
                const buffer = new ArrayBuffer(2);
                new DataView(buffer).setInt16(0, 256, true);
                return new Int16Array(buffer)[0] === 256 ? "LE" : "BE";
              };
              const endianness = getEndianess();
              class Enum {
                getKey(value) {
                  var item = this.get(value);
                  if (item) {
                    return item.key;
                  }
                }
                getValue(key) {
                  var item = this.get(key);
                  if (item) {
                    return item.value;
                  }
                }
                get(key, offset) {
                  if (key === null || key === void 0) {
                    return;
                  }
                  if (isBuffer(key)) {
                    key = key["readUInt32" + this._options.endianness](offset || 0);
                  }
                  if (_enumItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEnumItem(key)) {
                    var foundIndex = _indexOf_js__WEBPACK_IMPORTED_MODULE_2__["indexOf"].call(this.enums, key);
                    if (foundIndex >= 0) {
                      return key;
                    }
                    if (!this.isFlaggable || this.isFlaggable && key.key.indexOf(this._options.separator) < 0) {
                      return;
                    }
                    return this.get(key.key);
                  } else if (Object(_isType_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(key)) {
                    var enums = this;
                    if (this._options.ignoreCase) {
                      enums = this.getLowerCaseEnums();
                      key = key.toLowerCase();
                    }
                    if (key.indexOf(this._options.separator) > 0) {
                      var parts = key.split(this._options.separator);
                      var value = 0;
                      for (var i = 0; i < parts.length; i++) {
                        var part = parts[i];
                        value |= enums[part].value;
                      }
                      return new _enumItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](key, value);
                    } else {
                      return enums[key];
                    }
                  } else {
                    for (var m in this) {
                      if (this.hasOwnProperty(m)) {
                        if (this[m].value === key) {
                          return this[m];
                        }
                      }
                    }
                    var result = null;
                    if (this.isFlaggable) {
                      for (var n in this) {
                        if (this.hasOwnProperty(n)) {
                          if ((key & this[n].value) !== 0) {
                            if (result) {
                              result += this._options.separator;
                            } else {
                              result = "";
                            }
                            result += n;
                          }
                        }
                      }
                    }
                    return this.get(result || null);
                  }
                }
                set(buffer, offset, value) {
                  var item = this.get(value);
                  if (item) {
                    return buffer["writeUInt32" + this._options.endianness](item.value, offset || 0);
                  }
                }
                freezeEnums() {
                  function envSupportsFreezing() {
                    return Object.isFrozen && Object.isSealed && Object.getOwnPropertyNames && Object.getOwnPropertyDescriptor && Object.defineProperties && Object.__defineGetter__ && Object.__defineSetter__;
                  }
                  function freezer(o) {
                    var props = Object.getOwnPropertyNames(o);
                    props.forEach(function(p) {
                      if (!Object.getOwnPropertyDescriptor(o, p).configurable) {
                        return;
                      }
                      Object.defineProperties(o, p, {
                        writable: false,
                        configurable: false
                      });
                    });
                    return o;
                  }
                  function getPropertyValue(value) {
                    return value;
                  }
                  function deepFreezeEnums(o) {
                    if (typeof o !== "object" || o === null || Object.isFrozen(o) || Object.isSealed(o)) {
                      return;
                    }
                    for (var key in o) {
                      if (o.hasOwnProperty(key)) {
                        o.__defineGetter__(key, getPropertyValue.bind(null, o[key]));
                        o.__defineSetter__(key, function throwPropertySetError(value) {
                          throw TypeError("Cannot redefine property; Enum Type is not extensible.");
                        });
                        deepFreezeEnums(o[key]);
                      }
                    }
                    if (Object.freeze) {
                      Object.freeze(o);
                    } else {
                      freezer(o);
                    }
                  }
                  if (envSupportsFreezing()) {
                    deepFreezeEnums(this);
                  }
                  return this;
                }
                isDefined(enumItem) {
                  let condition = (e) => e === enumItem;
                  if (Object(_isType_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(enumItem) || Object(_isType_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(enumItem)) {
                    condition = (e) => e.is(enumItem);
                  }
                  return this.enums.some(condition);
                }
                toJSON() {
                  return this._enumMap;
                }
                extend(map) {
                  if (map.length) {
                    var array = map;
                    map = {};
                    for (var i = 0; i < array.length; i++) {
                      var exponent = this._enumLastIndex + i;
                      map[array[i]] = Math.pow(2, exponent);
                    }
                    for (var member in map) {
                      guardReservedKeys(this._options.name, member);
                      this[member] = new _enumItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](member, map[member], {
                        ignoreCase: this._options.ignoreCase
                      });
                      this.enums.push(this[member]);
                    }
                    for (var key in this._enumMap) {
                      map[key] = this._enumMap[key];
                    }
                    this._enumLastIndex += map.length;
                    this._enumMap = map;
                    if (this._options.freeze) {
                      this.freezeEnums();
                    }
                  }
                }
                static register(key = "Enum") {
                  if (typeof global !== "undefined" && !global[key]) {
                    global[key] = Enum;
                  } else if (typeof window !== "undefined" && !window[key]) {
                    window[key] = Enum;
                  }
                }
                [Symbol.iterator]() {
                  let index = 0;
                  return {
                    next: () => index < this.enums.length ? {
                      done: false,
                      value: this.enums[index++]
                    } : {
                      done: true
                    }
                  };
                }
                constructor(map, options) {
                  this.size = 4;
                  this.indirection = 1;
                  if (options && Object(_isType_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(options)) {
                    options = {
                      name: options
                    };
                  }
                  this._options = options || {};
                  this._options.separator = this._options.separator || " | ";
                  this._options.endianness = this._options.endianness || endianness;
                  this._options.ignoreCase = this._options.ignoreCase || false;
                  this._options.freez = this._options.freez || false;
                  this._options.freeze = this._options.freeze || this._options.freez || false;
                  this.enums = [];
                  if (map.length) {
                    this._enumLastIndex = map.length;
                    var array = map;
                    map = {};
                    for (var i = 0; i < array.length; i++) {
                      map[array[i]] = Math.pow(2, i);
                    }
                  }
                  for (var member in map) {
                    guardReservedKeys(this._options.name, member);
                    this[member] = new _enumItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](member, map[member], {
                      ignoreCase: this._options.ignoreCase
                    });
                    this.enums.push(this[member]);
                  }
                  this._enumMap = map;
                  if (this._options.ignoreCase) {
                    this.getLowerCaseEnums = function() {
                      var res = {};
                      for (var i2 = 0, len = this.enums.length; i2 < len; i2++) {
                        res[this.enums[i2].key.toLowerCase()] = this.enums[i2];
                      }
                      return res;
                    };
                  }
                  if (this._options.name) {
                    this.name = this._options.name;
                  }
                  const isFlaggable = () => {
                    for (var i2 = 0, len = this.enums.length; i2 < len; i2++) {
                      var e = this.enums[i2];
                      if (!(e.value !== 0 && !(e.value & e.value - 1))) {
                        return false;
                      }
                    }
                    return true;
                  };
                  this.isFlaggable = isFlaggable();
                  if (this._options.freeze) {
                    this.freezeEnums();
                  }
                }
              }
              ;
              var reservedKeys = [
                "_options",
                "get",
                "getKey",
                "getValue",
                "enums",
                "isFlaggable",
                "_enumMap",
                "toJSON",
                "_enumLastIndex"
              ];
              function guardReservedKeys(customName, key) {
                if (customName && key === "name" || _indexOf_js__WEBPACK_IMPORTED_MODULE_2__["indexOf"].call(reservedKeys, key) >= 0) {
                  throw new Error(`Enum key ${key} is a reserved word!`);
                }
              }
            }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
          },
          "./node_modules/enum/lib/enumItem.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() {
              return EnumItem;
            });
            var _isType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/enum/lib/isType.js");
            class EnumItem {
              has(value) {
                if (EnumItem.isEnumItem(value)) {
                  return (this.value & value.value) !== 0;
                } else if (Object(_isType_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
                  if (this._options.ignoreCase) {
                    return this.key.toLowerCase().indexOf(value.toLowerCase()) >= 0;
                  }
                  return this.key.indexOf(value) >= 0;
                } else {
                  return (this.value & value) !== 0;
                }
              }
              is(key) {
                if (EnumItem.isEnumItem(key)) {
                  return this.key === key.key;
                } else if (Object(_isType_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(key)) {
                  if (this._options.ignoreCase) {
                    return this.key.toLowerCase() === key.toLowerCase();
                  }
                  return this.key === key;
                } else {
                  return this.value === key;
                }
              }
              toString() {
                return this.key;
              }
              toJSON() {
                return this.key;
              }
              valueOf() {
                return this.value;
              }
              static isEnumItem(value) {
                return value instanceof EnumItem || Object(_isType_js__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && value.key !== void 0 && value.value !== void 0;
              }
              constructor(key, value, options = {}) {
                this.key = key;
                this.value = value;
                this._options = options;
                this._options.ignoreCase = this._options.ignoreCase || false;
              }
            }
            ;
          },
          "./node_modules/enum/lib/indexOf.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "indexOf", function() {
              return indexOf;
            });
            const indexOf = Array.prototype.indexOf || function(find, i) {
              if (i === void 0)
                i = 0;
              if (i < 0)
                i += this.length;
              if (i < 0)
                i = 0;
              for (var n = this.length; i < n; i++) {
                if (i in this && this[i] === find) {
                  return i;
                }
              }
              return -1;
            };
          },
          "./node_modules/enum/lib/isType.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "isType", function() {
              return isType;
            });
            __webpack_require__.d(__webpack_exports__, "isObject", function() {
              return isObject;
            });
            __webpack_require__.d(__webpack_exports__, "isString", function() {
              return isString;
            });
            __webpack_require__.d(__webpack_exports__, "isNumber", function() {
              return isNumber;
            });
            const isType = (type, value) => typeof value === type;
            const isObject = (value) => isType("object", value);
            const isString = (value) => isType("string", value);
            const isNumber = (value) => isType("number", value);
          },
          "./node_modules/events/events.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            var R = typeof Reflect === "object" ? Reflect : null;
            var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
              return Function.prototype.apply.call(target, receiver, args);
            };
            var ReflectOwnKeys;
            if (R && typeof R.ownKeys === "function") {
              ReflectOwnKeys = R.ownKeys;
            } else if (Object.getOwnPropertySymbols) {
              ReflectOwnKeys = function ReflectOwnKeys2(target) {
                return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
              };
            } else {
              ReflectOwnKeys = function ReflectOwnKeys2(target) {
                return Object.getOwnPropertyNames(target);
              };
            }
            function ProcessEmitWarning(warning) {
              if (console && console.warn)
                console.warn(warning);
            }
            var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
              return value !== value;
            };
            function EventEmitter() {
              EventEmitter.init.call(this);
            }
            module1.exports = EventEmitter;
            module1.exports.once = once;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = void 0;
            EventEmitter.prototype._eventsCount = 0;
            EventEmitter.prototype._maxListeners = void 0;
            var defaultMaxListeners = 10;
            function checkListener(listener) {
              if (typeof listener !== "function") {
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
              }
            }
            Object.defineProperty(EventEmitter, "defaultMaxListeners", {
              enumerable: true,
              get: function() {
                return defaultMaxListeners;
              },
              set: function(arg) {
                if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
                  throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
                }
                defaultMaxListeners = arg;
              }
            });
            EventEmitter.init = function() {
              if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
                this._events = /* @__PURE__ */ Object.create(null);
                this._eventsCount = 0;
              }
              this._maxListeners = this._maxListeners || void 0;
            };
            EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
              if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
              }
              this._maxListeners = n;
              return this;
            };
            function _getMaxListeners(that) {
              if (that._maxListeners === void 0)
                return EventEmitter.defaultMaxListeners;
              return that._maxListeners;
            }
            EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
              return _getMaxListeners(this);
            };
            EventEmitter.prototype.emit = function emit(type) {
              var args = [];
              for (var i = 1; i < arguments.length; i++)
                args.push(arguments[i]);
              var doError = type === "error";
              var events = this._events;
              if (events !== void 0)
                doError = doError && events.error === void 0;
              else if (!doError)
                return false;
              if (doError) {
                var er;
                if (args.length > 0)
                  er = args[0];
                if (er instanceof Error) {
                  throw er;
                }
                var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
                err.context = er;
                throw err;
              }
              var handler = events[type];
              if (handler === void 0)
                return false;
              if (typeof handler === "function") {
                ReflectApply(handler, this, args);
              } else {
                var len = handler.length;
                var listeners = arrayClone(handler, len);
                for (var i = 0; i < len; ++i)
                  ReflectApply(listeners[i], this, args);
              }
              return true;
            };
            function _addListener(target, type, listener, prepend) {
              var m;
              var events;
              var existing;
              checkListener(listener);
              events = target._events;
              if (events === void 0) {
                events = target._events = /* @__PURE__ */ Object.create(null);
                target._eventsCount = 0;
              } else {
                if (events.newListener !== void 0) {
                  target.emit("newListener", type, listener.listener ? listener.listener : listener);
                  events = target._events;
                }
                existing = events[type];
              }
              if (existing === void 0) {
                existing = events[type] = listener;
                ++target._eventsCount;
              } else {
                if (typeof existing === "function") {
                  existing = events[type] = prepend ? [
                    listener,
                    existing
                  ] : [
                    existing,
                    listener
                  ];
                } else if (prepend) {
                  existing.unshift(listener);
                } else {
                  existing.push(listener);
                }
                m = _getMaxListeners(target);
                if (m > 0 && existing.length > m && !existing.warned) {
                  existing.warned = true;
                  var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  w.name = "MaxListenersExceededWarning";
                  w.emitter = target;
                  w.type = type;
                  w.count = existing.length;
                  ProcessEmitWarning(w);
                }
              }
              return target;
            }
            EventEmitter.prototype.addListener = function addListener(type, listener) {
              return _addListener(this, type, listener, false);
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.prependListener = function prependListener(type, listener) {
              return _addListener(this, type, listener, true);
            };
            function onceWrapper() {
              if (!this.fired) {
                this.target.removeListener(this.type, this.wrapFn);
                this.fired = true;
                if (arguments.length === 0)
                  return this.listener.call(this.target);
                return this.listener.apply(this.target, arguments);
              }
            }
            function _onceWrap(target, type, listener) {
              var state = {
                fired: false,
                wrapFn: void 0,
                target,
                type,
                listener
              };
              var wrapped = onceWrapper.bind(state);
              wrapped.listener = listener;
              state.wrapFn = wrapped;
              return wrapped;
            }
            EventEmitter.prototype.once = function once2(type, listener) {
              checkListener(listener);
              this.on(type, _onceWrap(this, type, listener));
              return this;
            };
            EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
              checkListener(listener);
              this.prependListener(type, _onceWrap(this, type, listener));
              return this;
            };
            EventEmitter.prototype.removeListener = function removeListener(type, listener) {
              var list, events, position, i, originalListener;
              checkListener(listener);
              events = this._events;
              if (events === void 0)
                return this;
              list = events[type];
              if (list === void 0)
                return this;
              if (list === listener || list.listener === listener) {
                if (--this._eventsCount === 0)
                  this._events = /* @__PURE__ */ Object.create(null);
                else {
                  delete events[type];
                  if (events.removeListener)
                    this.emit("removeListener", type, list.listener || listener);
                }
              } else if (typeof list !== "function") {
                position = -1;
                for (i = list.length - 1; i >= 0; i--) {
                  if (list[i] === listener || list[i].listener === listener) {
                    originalListener = list[i].listener;
                    position = i;
                    break;
                  }
                }
                if (position < 0)
                  return this;
                if (position === 0)
                  list.shift();
                else {
                  spliceOne(list, position);
                }
                if (list.length === 1)
                  events[type] = list[0];
                if (events.removeListener !== void 0)
                  this.emit("removeListener", type, originalListener || listener);
              }
              return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
              var listeners, events, i;
              events = this._events;
              if (events === void 0)
                return this;
              if (events.removeListener === void 0) {
                if (arguments.length === 0) {
                  this._events = /* @__PURE__ */ Object.create(null);
                  this._eventsCount = 0;
                } else if (events[type] !== void 0) {
                  if (--this._eventsCount === 0)
                    this._events = /* @__PURE__ */ Object.create(null);
                  else
                    delete events[type];
                }
                return this;
              }
              if (arguments.length === 0) {
                var keys = Object.keys(events);
                var key;
                for (i = 0; i < keys.length; ++i) {
                  key = keys[i];
                  if (key === "removeListener")
                    continue;
                  this.removeAllListeners(key);
                }
                this.removeAllListeners("removeListener");
                this._events = /* @__PURE__ */ Object.create(null);
                this._eventsCount = 0;
                return this;
              }
              listeners = events[type];
              if (typeof listeners === "function") {
                this.removeListener(type, listeners);
              } else if (listeners !== void 0) {
                for (i = listeners.length - 1; i >= 0; i--) {
                  this.removeListener(type, listeners[i]);
                }
              }
              return this;
            };
            function _listeners(target, type, unwrap) {
              var events = target._events;
              if (events === void 0)
                return [];
              var evlistener = events[type];
              if (evlistener === void 0)
                return [];
              if (typeof evlistener === "function")
                return unwrap ? [
                  evlistener.listener || evlistener
                ] : [
                  evlistener
                ];
              return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
            }
            EventEmitter.prototype.listeners = function listeners(type) {
              return _listeners(this, type, true);
            };
            EventEmitter.prototype.rawListeners = function rawListeners(type) {
              return _listeners(this, type, false);
            };
            EventEmitter.listenerCount = function(emitter, type) {
              if (typeof emitter.listenerCount === "function") {
                return emitter.listenerCount(type);
              } else {
                return listenerCount.call(emitter, type);
              }
            };
            EventEmitter.prototype.listenerCount = listenerCount;
            function listenerCount(type) {
              var events = this._events;
              if (events !== void 0) {
                var evlistener = events[type];
                if (typeof evlistener === "function") {
                  return 1;
                } else if (evlistener !== void 0) {
                  return evlistener.length;
                }
              }
              return 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
              return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
            };
            function arrayClone(arr, n) {
              var copy = new Array(n);
              for (var i = 0; i < n; ++i)
                copy[i] = arr[i];
              return copy;
            }
            function spliceOne(list, index) {
              for (; index + 1 < list.length; index++)
                list[index] = list[index + 1];
              list.pop();
            }
            function unwrapListeners(arr) {
              var ret = new Array(arr.length);
              for (var i = 0; i < ret.length; ++i) {
                ret[i] = arr[i].listener || arr[i];
              }
              return ret;
            }
            function once(emitter, name) {
              return new Promise(function(resolve, reject) {
                function errorListener(err) {
                  emitter.removeListener(name, resolver);
                  reject(err);
                }
                function resolver() {
                  if (typeof emitter.removeListener === "function") {
                    emitter.removeListener("error", errorListener);
                  }
                  resolve([].slice.call(arguments));
                }
                ;
                eventTargetAgnosticAddListener(emitter, name, resolver, {
                  once: true
                });
                if (name !== "error") {
                  addErrorHandlerIfEventEmitter(emitter, errorListener, {
                    once: true
                  });
                }
              });
            }
            function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
              if (typeof emitter.on === "function") {
                eventTargetAgnosticAddListener(emitter, "error", handler, flags);
              }
            }
            function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
              if (typeof emitter.on === "function") {
                if (flags.once) {
                  emitter.once(name, listener);
                } else {
                  emitter.on(name, listener);
                }
              } else if (typeof emitter.addEventListener === "function") {
                emitter.addEventListener(name, function wrapListener(arg) {
                  if (flags.once) {
                    emitter.removeEventListener(name, wrapListener);
                  }
                  listener(arg);
                });
              } else {
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
              }
            }
          },
          "./node_modules/filter-obj/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            module1.exports = function(obj, predicate) {
              var ret = {};
              var keys = Object.keys(obj);
              var isArr = Array.isArray(predicate);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var val = obj[key];
                if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
                  ret[key] = val;
                }
              }
              return ret;
            };
          },
          "./node_modules/has-binary2/index.js": function(module1, exports1, __webpack_require__) {
            (function(Buffer2) {
              var isArray = __webpack_require__("./node_modules/isarray/index.js");
              var toString = Object.prototype.toString;
              var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
              var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
              module1.exports = hasBinary;
              function hasBinary(obj) {
                if (!obj || typeof obj !== "object") {
                  return false;
                }
                if (isArray(obj)) {
                  for (var i = 0, l = obj.length; i < l; i++) {
                    if (hasBinary(obj[i])) {
                      return true;
                    }
                  }
                  return false;
                }
                if (typeof Buffer2 === "function" && Buffer2.isBuffer && Buffer2.isBuffer(obj) || typeof ArrayBuffer === "function" && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
                  return true;
                }
                if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
                  return hasBinary(obj.toJSON(), true);
                }
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
                    return true;
                  }
                }
                return false;
              }
            }).call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer);
          },
          "./node_modules/has-cors/index.js": function(module1, exports1) {
            try {
              module1.exports = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
            } catch (err) {
              module1.exports = false;
            }
          },
          "./node_modules/ieee754/index.js": function(module1, exports1) {
            exports1.read = function(buffer, offset, isLE, mLen, nBytes) {
              var e, m;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var nBits = -7;
              var i = isLE ? nBytes - 1 : 0;
              var d = isLE ? -1 : 1;
              var s = buffer[offset + i];
              i += d;
              e = s & (1 << -nBits) - 1;
              s >>= -nBits;
              nBits += eLen;
              for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
              }
              m = e & (1 << -nBits) - 1;
              e >>= -nBits;
              nBits += mLen;
              for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
              }
              if (e === 0) {
                e = 1 - eBias;
              } else if (e === eMax) {
                return m ? NaN : (s ? -1 : 1) * Infinity;
              } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
              }
              return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
              var e, m, c;
              var eLen = nBytes * 8 - mLen - 1;
              var eMax = (1 << eLen) - 1;
              var eBias = eMax >> 1;
              var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
              var i = isLE ? 0 : nBytes - 1;
              var d = isLE ? 1 : -1;
              var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
              value = Math.abs(value);
              if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
              } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                  e--;
                  c *= 2;
                }
                if (e + eBias >= 1) {
                  value += rt / c;
                } else {
                  value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                  e++;
                  c /= 2;
                }
                if (e + eBias >= eMax) {
                  m = 0;
                  e = eMax;
                } else if (e + eBias >= 1) {
                  m = (value * c - 1) * Math.pow(2, mLen);
                  e = e + eBias;
                } else {
                  m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                  e = 0;
                }
              }
              for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
              }
              e = e << mLen | m;
              eLen += mLen;
              for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
              }
              buffer[offset + i - d] |= s * 128;
            };
          },
          "./node_modules/indexof/index.js": function(module1, exports1) {
            var indexOf = [].indexOf;
            module1.exports = function(arr, obj) {
              if (indexOf)
                return arr.indexOf(obj);
              for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj)
                  return i;
              }
              return -1;
            };
          },
          "./node_modules/isarray/index.js": function(module1, exports1) {
            var toString = {}.toString;
            module1.exports = Array.isArray || function(arr) {
              return toString.call(arr) == "[object Array]";
            };
          },
          "./node_modules/js-binarypack/lib/binarypack.js": function(module1, exports1, __webpack_require__) {
            var BufferBuilder = __webpack_require__("./node_modules/js-binarypack/lib/bufferbuilder.js").BufferBuilder;
            var binaryFeatures = __webpack_require__("./node_modules/js-binarypack/lib/bufferbuilder.js").binaryFeatures;
            var BinaryPack = {
              unpack: function(data) {
                var unpacker = new Unpacker(data);
                return unpacker.unpack();
              },
              pack: function(data) {
                var packer = new Packer();
                packer.pack(data);
                var buffer = packer.getBuffer();
                return buffer;
              }
            };
            module1.exports = BinaryPack;
            function Unpacker(data) {
              this.index = 0;
              this.dataBuffer = data;
              this.dataView = new Uint8Array(this.dataBuffer);
              this.length = this.dataBuffer.byteLength;
            }
            Unpacker.prototype.unpack = function() {
              var type = this.unpack_uint8();
              if (type < 128) {
                var positive_fixnum = type;
                return positive_fixnum;
              } else if ((type ^ 224) < 32) {
                var negative_fixnum = (type ^ 224) - 32;
                return negative_fixnum;
              }
              var size;
              if ((size = type ^ 160) <= 15) {
                return this.unpack_raw(size);
              } else if ((size = type ^ 176) <= 15) {
                return this.unpack_string(size);
              } else if ((size = type ^ 144) <= 15) {
                return this.unpack_array(size);
              } else if ((size = type ^ 128) <= 15) {
                return this.unpack_map(size);
              }
              switch (type) {
                case 192:
                  return null;
                case 193:
                  return void 0;
                case 194:
                  return false;
                case 195:
                  return true;
                case 202:
                  return this.unpack_float();
                case 203:
                  return this.unpack_double();
                case 204:
                  return this.unpack_uint8();
                case 205:
                  return this.unpack_uint16();
                case 206:
                  return this.unpack_uint32();
                case 207:
                  return this.unpack_uint64();
                case 208:
                  return this.unpack_int8();
                case 209:
                  return this.unpack_int16();
                case 210:
                  return this.unpack_int32();
                case 211:
                  return this.unpack_int64();
                case 212:
                  return void 0;
                case 213:
                  return void 0;
                case 214:
                  return void 0;
                case 215:
                  return void 0;
                case 216:
                  size = this.unpack_uint16();
                  return this.unpack_string(size);
                case 217:
                  size = this.unpack_uint32();
                  return this.unpack_string(size);
                case 218:
                  size = this.unpack_uint16();
                  return this.unpack_raw(size);
                case 219:
                  size = this.unpack_uint32();
                  return this.unpack_raw(size);
                case 220:
                  size = this.unpack_uint16();
                  return this.unpack_array(size);
                case 221:
                  size = this.unpack_uint32();
                  return this.unpack_array(size);
                case 222:
                  size = this.unpack_uint16();
                  return this.unpack_map(size);
                case 223:
                  size = this.unpack_uint32();
                  return this.unpack_map(size);
              }
            };
            Unpacker.prototype.unpack_uint8 = function() {
              var byte = this.dataView[this.index] & 255;
              this.index++;
              return byte;
            };
            Unpacker.prototype.unpack_uint16 = function() {
              var bytes = this.read(2);
              var uint16 = (bytes[0] & 255) * 256 + (bytes[1] & 255);
              this.index += 2;
              return uint16;
            };
            Unpacker.prototype.unpack_uint32 = function() {
              var bytes = this.read(4);
              var uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
              this.index += 4;
              return uint32;
            };
            Unpacker.prototype.unpack_uint64 = function() {
              var bytes = this.read(8);
              var uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
              this.index += 8;
              return uint64;
            };
            Unpacker.prototype.unpack_int8 = function() {
              var uint8 = this.unpack_uint8();
              return uint8 < 128 ? uint8 : uint8 - (1 << 8);
            };
            Unpacker.prototype.unpack_int16 = function() {
              var uint16 = this.unpack_uint16();
              return uint16 < 32768 ? uint16 : uint16 - (1 << 16);
            };
            Unpacker.prototype.unpack_int32 = function() {
              var uint32 = this.unpack_uint32();
              return uint32 < Math.pow(2, 31) ? uint32 : uint32 - Math.pow(2, 32);
            };
            Unpacker.prototype.unpack_int64 = function() {
              var uint64 = this.unpack_uint64();
              return uint64 < Math.pow(2, 63) ? uint64 : uint64 - Math.pow(2, 64);
            };
            Unpacker.prototype.unpack_raw = function(size) {
              if (this.length < this.index + size) {
                throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + size + " " + this.length);
              }
              var buf = this.dataBuffer.slice(this.index, this.index + size);
              this.index += size;
              return buf;
            };
            Unpacker.prototype.unpack_string = function(size) {
              var bytes = this.read(size);
              var i = 0, str = "", c, code;
              while (i < size) {
                c = bytes[i];
                if (c < 128) {
                  str += String.fromCharCode(c);
                  i++;
                } else if ((c ^ 192) < 32) {
                  code = (c ^ 192) << 6 | bytes[i + 1] & 63;
                  str += String.fromCharCode(code);
                  i += 2;
                } else {
                  code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
                  str += String.fromCharCode(code);
                  i += 3;
                }
              }
              this.index += size;
              return str;
            };
            Unpacker.prototype.unpack_array = function(size) {
              var objects = new Array(size);
              for (var i = 0; i < size; i++) {
                objects[i] = this.unpack();
              }
              return objects;
            };
            Unpacker.prototype.unpack_map = function(size) {
              var map = {};
              for (var i = 0; i < size; i++) {
                var key = this.unpack();
                var value = this.unpack();
                map[key] = value;
              }
              return map;
            };
            Unpacker.prototype.unpack_float = function() {
              var uint32 = this.unpack_uint32();
              var sign = uint32 >> 31;
              var exp = (uint32 >> 23 & 255) - 127;
              var fraction = uint32 & 8388607 | 8388608;
              return (sign == 0 ? 1 : -1) * fraction * Math.pow(2, exp - 23);
            };
            Unpacker.prototype.unpack_double = function() {
              var h32 = this.unpack_uint32();
              var l32 = this.unpack_uint32();
              var sign = h32 >> 31;
              var exp = (h32 >> 20 & 2047) - 1023;
              var hfrac = h32 & 1048575 | 1048576;
              var frac = hfrac * Math.pow(2, exp - 20) + l32 * Math.pow(2, exp - 52);
              return (sign == 0 ? 1 : -1) * frac;
            };
            Unpacker.prototype.read = function(length) {
              var j = this.index;
              if (j + length <= this.length) {
                return this.dataView.subarray(j, j + length);
              } else {
                throw new Error("BinaryPackFailure: read index out of range");
              }
            };
            function Packer() {
              this.bufferBuilder = new BufferBuilder();
            }
            Packer.prototype.getBuffer = function() {
              return this.bufferBuilder.getBuffer();
            };
            Packer.prototype.pack = function(value) {
              var type = typeof value;
              if (type == "string") {
                this.pack_string(value);
              } else if (type == "number") {
                if (Math.floor(value) === value) {
                  this.pack_integer(value);
                } else {
                  this.pack_double(value);
                }
              } else if (type == "boolean") {
                if (value === true) {
                  this.bufferBuilder.append(195);
                } else if (value === false) {
                  this.bufferBuilder.append(194);
                }
              } else if (type == "undefined") {
                this.bufferBuilder.append(192);
              } else if (type == "object") {
                if (value === null) {
                  this.bufferBuilder.append(192);
                } else {
                  var constructor = value.constructor;
                  if (constructor == Array) {
                    this.pack_array(value);
                  } else if (constructor == Blob || constructor == File) {
                    this.pack_bin(value);
                  } else if (constructor == ArrayBuffer) {
                    if (binaryFeatures.useArrayBufferView) {
                      this.pack_bin(new Uint8Array(value));
                    } else {
                      this.pack_bin(value);
                    }
                  } else if ("BYTES_PER_ELEMENT" in value) {
                    if (binaryFeatures.useArrayBufferView) {
                      this.pack_bin(new Uint8Array(value.buffer));
                    } else {
                      this.pack_bin(value.buffer);
                    }
                  } else if (constructor == Object) {
                    this.pack_object(value);
                  } else if (constructor == Date) {
                    this.pack_string(value.toString());
                  } else if (typeof value.toBinaryPack == "function") {
                    this.bufferBuilder.append(value.toBinaryPack());
                  } else {
                    throw new Error('Type "' + constructor.toString() + '" not yet supported');
                  }
                }
              } else {
                throw new Error('Type "' + type + '" not yet supported');
              }
              this.bufferBuilder.flush();
            };
            Packer.prototype.pack_bin = function(blob) {
              var length = blob.length || blob.byteLength || blob.size;
              if (length <= 15) {
                this.pack_uint8(160 + length);
              } else if (length <= 65535) {
                this.bufferBuilder.append(218);
                this.pack_uint16(length);
              } else if (length <= 4294967295) {
                this.bufferBuilder.append(219);
                this.pack_uint32(length);
              } else {
                throw new Error("Invalid length");
              }
              this.bufferBuilder.append(blob);
            };
            Packer.prototype.pack_string = function(str) {
              var length = utf8Length(str);
              if (length <= 15) {
                this.pack_uint8(176 + length);
              } else if (length <= 65535) {
                this.bufferBuilder.append(216);
                this.pack_uint16(length);
              } else if (length <= 4294967295) {
                this.bufferBuilder.append(217);
                this.pack_uint32(length);
              } else {
                throw new Error("Invalid length");
              }
              this.bufferBuilder.append(str);
            };
            Packer.prototype.pack_array = function(ary) {
              var length = ary.length;
              if (length <= 15) {
                this.pack_uint8(144 + length);
              } else if (length <= 65535) {
                this.bufferBuilder.append(220);
                this.pack_uint16(length);
              } else if (length <= 4294967295) {
                this.bufferBuilder.append(221);
                this.pack_uint32(length);
              } else {
                throw new Error("Invalid length");
              }
              for (var i = 0; i < length; i++) {
                this.pack(ary[i]);
              }
            };
            Packer.prototype.pack_integer = function(num) {
              if (-32 <= num && num <= 127) {
                this.bufferBuilder.append(num & 255);
              } else if (0 <= num && num <= 255) {
                this.bufferBuilder.append(204);
                this.pack_uint8(num);
              } else if (-128 <= num && num <= 127) {
                this.bufferBuilder.append(208);
                this.pack_int8(num);
              } else if (0 <= num && num <= 65535) {
                this.bufferBuilder.append(205);
                this.pack_uint16(num);
              } else if (-32768 <= num && num <= 32767) {
                this.bufferBuilder.append(209);
                this.pack_int16(num);
              } else if (0 <= num && num <= 4294967295) {
                this.bufferBuilder.append(206);
                this.pack_uint32(num);
              } else if (-2147483648 <= num && num <= 2147483647) {
                this.bufferBuilder.append(210);
                this.pack_int32(num);
              } else if (-9223372036854776e3 <= num && num <= 9223372036854776e3) {
                this.bufferBuilder.append(211);
                this.pack_int64(num);
              } else if (0 <= num && num <= 18446744073709552e3) {
                this.bufferBuilder.append(207);
                this.pack_uint64(num);
              } else {
                throw new Error("Invalid integer");
              }
            };
            Packer.prototype.pack_double = function(num) {
              var sign = 0;
              if (num < 0) {
                sign = 1;
                num = -num;
              }
              var exp = Math.floor(Math.log(num) / Math.LN2);
              var frac0 = num / Math.pow(2, exp) - 1;
              var frac1 = Math.floor(frac0 * Math.pow(2, 52));
              var b32 = Math.pow(2, 32);
              var h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 1048575;
              var l32 = frac1 % b32;
              this.bufferBuilder.append(203);
              this.pack_int32(h32);
              this.pack_int32(l32);
            };
            Packer.prototype.pack_object = function(obj) {
              var keys = Object.keys(obj);
              var length = keys.length;
              if (length <= 15) {
                this.pack_uint8(128 + length);
              } else if (length <= 65535) {
                this.bufferBuilder.append(222);
                this.pack_uint16(length);
              } else if (length <= 4294967295) {
                this.bufferBuilder.append(223);
                this.pack_uint32(length);
              } else {
                throw new Error("Invalid length");
              }
              for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                  this.pack(prop);
                  this.pack(obj[prop]);
                }
              }
            };
            Packer.prototype.pack_uint8 = function(num) {
              this.bufferBuilder.append(num);
            };
            Packer.prototype.pack_uint16 = function(num) {
              this.bufferBuilder.append(num >> 8);
              this.bufferBuilder.append(num & 255);
            };
            Packer.prototype.pack_uint32 = function(num) {
              var n = num & 4294967295;
              this.bufferBuilder.append((n & 4278190080) >>> 24);
              this.bufferBuilder.append((n & 16711680) >>> 16);
              this.bufferBuilder.append((n & 65280) >>> 8);
              this.bufferBuilder.append(n & 255);
            };
            Packer.prototype.pack_uint64 = function(num) {
              var high = num / Math.pow(2, 32);
              var low = num % Math.pow(2, 32);
              this.bufferBuilder.append((high & 4278190080) >>> 24);
              this.bufferBuilder.append((high & 16711680) >>> 16);
              this.bufferBuilder.append((high & 65280) >>> 8);
              this.bufferBuilder.append(high & 255);
              this.bufferBuilder.append((low & 4278190080) >>> 24);
              this.bufferBuilder.append((low & 16711680) >>> 16);
              this.bufferBuilder.append((low & 65280) >>> 8);
              this.bufferBuilder.append(low & 255);
            };
            Packer.prototype.pack_int8 = function(num) {
              this.bufferBuilder.append(num & 255);
            };
            Packer.prototype.pack_int16 = function(num) {
              this.bufferBuilder.append((num & 65280) >> 8);
              this.bufferBuilder.append(num & 255);
            };
            Packer.prototype.pack_int32 = function(num) {
              this.bufferBuilder.append(num >>> 24 & 255);
              this.bufferBuilder.append((num & 16711680) >>> 16);
              this.bufferBuilder.append((num & 65280) >>> 8);
              this.bufferBuilder.append(num & 255);
            };
            Packer.prototype.pack_int64 = function(num) {
              var high = Math.floor(num / Math.pow(2, 32));
              var low = num % Math.pow(2, 32);
              this.bufferBuilder.append((high & 4278190080) >>> 24);
              this.bufferBuilder.append((high & 16711680) >>> 16);
              this.bufferBuilder.append((high & 65280) >>> 8);
              this.bufferBuilder.append(high & 255);
              this.bufferBuilder.append((low & 4278190080) >>> 24);
              this.bufferBuilder.append((low & 16711680) >>> 16);
              this.bufferBuilder.append((low & 65280) >>> 8);
              this.bufferBuilder.append(low & 255);
            };
            function _utf8Replace(m) {
              var code = m.charCodeAt(0);
              if (code <= 2047)
                return "00";
              if (code <= 65535)
                return "000";
              if (code <= 2097151)
                return "0000";
              if (code <= 67108863)
                return "00000";
              return "000000";
            }
            function utf8Length(str) {
              if (str.length > 600) {
                return new Blob([
                  str
                ]).size;
              } else {
                return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
              }
            }
          },
          "./node_modules/js-binarypack/lib/bufferbuilder.js": function(module1, exports1) {
            var binaryFeatures = {};
            binaryFeatures.useBlobBuilder = function() {
              try {
                new Blob([]);
                return false;
              } catch (e) {
                return true;
              }
            }();
            binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && function() {
              try {
                return new Blob([
                  new Uint8Array([])
                ]).size === 0;
              } catch (e) {
                return true;
              }
            }();
            module1.exports.binaryFeatures = binaryFeatures;
            var BlobBuilder = module1.exports.BlobBuilder;
            if (typeof window != "undefined") {
              BlobBuilder = module1.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
            }
            function BufferBuilder() {
              this._pieces = [];
              this._parts = [];
            }
            BufferBuilder.prototype.append = function(data) {
              if (typeof data === "number") {
                this._pieces.push(data);
              } else {
                this.flush();
                this._parts.push(data);
              }
            };
            BufferBuilder.prototype.flush = function() {
              if (this._pieces.length > 0) {
                var buf = new Uint8Array(this._pieces);
                if (!binaryFeatures.useArrayBufferView) {
                  buf = buf.buffer;
                }
                this._parts.push(buf);
                this._pieces = [];
              }
            };
            BufferBuilder.prototype.getBuffer = function() {
              this.flush();
              if (binaryFeatures.useBlobBuilder) {
                var builder = new BlobBuilder();
                for (var i = 0, ii = this._parts.length; i < ii; i++) {
                  builder.append(this._parts[i]);
                }
                return builder.getBlob();
              } else {
                return new Blob(this._parts);
              }
            };
            module1.exports.BufferBuilder = BufferBuilder;
          },
          "./node_modules/ms/index.js": function(module1, exports1) {
            var s = 1e3;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;
            module1.exports = function(val, options) {
              options = options || {};
              var type = typeof val;
              if (type === "string" && val.length > 0) {
                return parse(val);
              } else if (type === "number" && isNaN(val) === false) {
                return options.long ? fmtLong(val) : fmtShort(val);
              }
              throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
            };
            function parse(str) {
              str = String(str);
              if (str.length > 100) {
                return;
              }
              var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
              if (!match) {
                return;
              }
              var n = parseFloat(match[1]);
              var type = (match[2] || "ms").toLowerCase();
              switch (type) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return n * y;
                case "days":
                case "day":
                case "d":
                  return n * d;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * h;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * m;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * s;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return n;
                default:
                  return void 0;
              }
            }
            function fmtShort(ms) {
              if (ms >= d) {
                return Math.round(ms / d) + "d";
              }
              if (ms >= h) {
                return Math.round(ms / h) + "h";
              }
              if (ms >= m) {
                return Math.round(ms / m) + "m";
              }
              if (ms >= s) {
                return Math.round(ms / s) + "s";
              }
              return ms + "ms";
            }
            function fmtLong(ms) {
              return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
            }
            function plural(ms, n, name) {
              if (ms < n) {
                return;
              }
              if (ms < n * 1.5) {
                return Math.floor(ms / n) + " " + name;
              }
              return Math.ceil(ms / n) + " " + name + "s";
            }
          },
          "./node_modules/node-libs-browser/node_modules/buffer/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            (function(global) {
              var base64 = __webpack_require__("./node_modules/base64-js/index.js");
              var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");
              var isArray = __webpack_require__("./node_modules/node-libs-browser/node_modules/isarray/index.js");
              exports1.Buffer = Buffer2;
              exports1.SlowBuffer = SlowBuffer;
              exports1.INSPECT_MAX_BYTES = 50;
              Buffer2.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== void 0 ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
              exports1.kMaxLength = kMaxLength();
              function typedArraySupport() {
                try {
                  var arr = new Uint8Array(1);
                  arr.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                      return 42;
                    }
                  };
                  return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
                } catch (e) {
                  return false;
                }
              }
              function kMaxLength() {
                return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function createBuffer(that, length) {
                if (kMaxLength() < length) {
                  throw new RangeError("Invalid typed array length");
                }
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  that = new Uint8Array(length);
                  that.__proto__ = Buffer2.prototype;
                } else {
                  if (that === null) {
                    that = new Buffer2(length);
                  }
                  that.length = length;
                }
                return that;
              }
              function Buffer2(arg, encodingOrOffset, length) {
                if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
                  return new Buffer2(arg, encodingOrOffset, length);
                }
                if (typeof arg === "number") {
                  if (typeof encodingOrOffset === "string") {
                    throw new Error("If encoding is specified then the first argument must be a string");
                  }
                  return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
              }
              Buffer2.poolSize = 8192;
              Buffer2._augment = function(arr) {
                arr.__proto__ = Buffer2.prototype;
                return arr;
              };
              function from(that, value, encodingOrOffset, length) {
                if (typeof value === "number") {
                  throw new TypeError('"value" argument must not be a number');
                }
                if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                  return fromArrayBuffer(that, value, encodingOrOffset, length);
                }
                if (typeof value === "string") {
                  return fromString(that, value, encodingOrOffset);
                }
                return fromObject(that, value);
              }
              Buffer2.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
              };
              if (Buffer2.TYPED_ARRAY_SUPPORT) {
                Buffer2.prototype.__proto__ = Uint8Array.prototype;
                Buffer2.__proto__ = Uint8Array;
                if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
                  Object.defineProperty(Buffer2, Symbol.species, {
                    value: null,
                    configurable: true
                  });
                }
              }
              function assertSize(size) {
                if (typeof size !== "number") {
                  throw new TypeError('"size" argument must be a number');
                } else if (size < 0) {
                  throw new RangeError('"size" argument must not be negative');
                }
              }
              function alloc(that, size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                  return createBuffer(that, size);
                }
                if (fill !== void 0) {
                  return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                }
                return createBuffer(that, size);
              }
              Buffer2.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
              };
              function allocUnsafe(that, size) {
                assertSize(size);
                that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                if (!Buffer2.TYPED_ARRAY_SUPPORT) {
                  for (var i = 0; i < size; ++i) {
                    that[i] = 0;
                  }
                }
                return that;
              }
              Buffer2.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
              };
              Buffer2.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
              };
              function fromString(that, string, encoding) {
                if (typeof encoding !== "string" || encoding === "") {
                  encoding = "utf8";
                }
                if (!Buffer2.isEncoding(encoding)) {
                  throw new TypeError('"encoding" must be a valid string encoding');
                }
                var length = byteLength(string, encoding) | 0;
                that = createBuffer(that, length);
                var actual = that.write(string, encoding);
                if (actual !== length) {
                  that = that.slice(0, actual);
                }
                return that;
              }
              function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                that = createBuffer(that, length);
                for (var i = 0; i < length; i += 1) {
                  that[i] = array[i] & 255;
                }
                return that;
              }
              function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength;
                if (byteOffset < 0 || array.byteLength < byteOffset) {
                  throw new RangeError("'offset' is out of bounds");
                }
                if (array.byteLength < byteOffset + (length || 0)) {
                  throw new RangeError("'length' is out of bounds");
                }
                if (byteOffset === void 0 && length === void 0) {
                  array = new Uint8Array(array);
                } else if (length === void 0) {
                  array = new Uint8Array(array, byteOffset);
                } else {
                  array = new Uint8Array(array, byteOffset, length);
                }
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  that = array;
                  that.__proto__ = Buffer2.prototype;
                } else {
                  that = fromArrayLike(that, array);
                }
                return that;
              }
              function fromObject(that, obj) {
                if (Buffer2.isBuffer(obj)) {
                  var len = checked(obj.length) | 0;
                  that = createBuffer(that, len);
                  if (that.length === 0) {
                    return that;
                  }
                  obj.copy(that, 0, 0, len);
                  return that;
                }
                if (obj) {
                  if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                    if (typeof obj.length !== "number" || isnan(obj.length)) {
                      return createBuffer(that, 0);
                    }
                    return fromArrayLike(that, obj);
                  }
                  if (obj.type === "Buffer" && isArray(obj.data)) {
                    return fromArrayLike(that, obj.data);
                  }
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              }
              function checked(length) {
                if (length >= kMaxLength()) {
                  throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
                }
                return length | 0;
              }
              function SlowBuffer(length) {
                if (+length != length) {
                  length = 0;
                }
                return Buffer2.alloc(+length);
              }
              Buffer2.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
              };
              Buffer2.compare = function compare(a, b) {
                if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
                  throw new TypeError("Arguments must be Buffers");
                }
                if (a === b)
                  return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                  if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                  }
                }
                if (x < y)
                  return -1;
                if (y < x)
                  return 1;
                return 0;
              };
              Buffer2.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return true;
                  default:
                    return false;
                }
              };
              Buffer2.concat = function concat(list, length) {
                if (!isArray(list)) {
                  throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (list.length === 0) {
                  return Buffer2.alloc(0);
                }
                var i;
                if (length === void 0) {
                  length = 0;
                  for (i = 0; i < list.length; ++i) {
                    length += list[i].length;
                  }
                }
                var buffer = Buffer2.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                  var buf = list[i];
                  if (!Buffer2.isBuffer(buf)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  }
                  buf.copy(buffer, pos);
                  pos += buf.length;
                }
                return buffer;
              };
              function byteLength(string, encoding) {
                if (Buffer2.isBuffer(string)) {
                  return string.length;
                }
                if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                  return string.byteLength;
                }
                if (typeof string !== "string") {
                  string = "" + string;
                }
                var len = string.length;
                if (len === 0)
                  return 0;
                var loweredCase = false;
                for (; ; ) {
                  switch (encoding) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return len;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                      return utf8ToBytes(string).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return len * 2;
                    case "hex":
                      return len >>> 1;
                    case "base64":
                      return base64ToBytes(string).length;
                    default:
                      if (loweredCase)
                        return utf8ToBytes(string).length;
                      encoding = ("" + encoding).toLowerCase();
                      loweredCase = true;
                  }
                }
              }
              Buffer2.byteLength = byteLength;
              function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === void 0 || start < 0) {
                  start = 0;
                }
                if (start > this.length) {
                  return "";
                }
                if (end === void 0 || end > this.length) {
                  end = this.length;
                }
                if (end <= 0) {
                  return "";
                }
                end >>>= 0;
                start >>>= 0;
                if (end <= start) {
                  return "";
                }
                if (!encoding)
                  encoding = "utf8";
                while (true) {
                  switch (encoding) {
                    case "hex":
                      return hexSlice(this, start, end);
                    case "utf8":
                    case "utf-8":
                      return utf8Slice(this, start, end);
                    case "ascii":
                      return asciiSlice(this, start, end);
                    case "latin1":
                    case "binary":
                      return latin1Slice(this, start, end);
                    case "base64":
                      return base64Slice(this, start, end);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return utf16leSlice(this, start, end);
                    default:
                      if (loweredCase)
                        throw new TypeError("Unknown encoding: " + encoding);
                      encoding = (encoding + "").toLowerCase();
                      loweredCase = true;
                  }
                }
              }
              Buffer2.prototype._isBuffer = true;
              function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
              }
              Buffer2.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                  throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for (var i = 0; i < len; i += 2) {
                  swap(this, i, i + 1);
                }
                return this;
              };
              Buffer2.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                  throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for (var i = 0; i < len; i += 4) {
                  swap(this, i, i + 3);
                  swap(this, i + 1, i + 2);
                }
                return this;
              };
              Buffer2.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                  throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for (var i = 0; i < len; i += 8) {
                  swap(this, i, i + 7);
                  swap(this, i + 1, i + 6);
                  swap(this, i + 2, i + 5);
                  swap(this, i + 3, i + 4);
                }
                return this;
              };
              Buffer2.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0)
                  return "";
                if (arguments.length === 0)
                  return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
              };
              Buffer2.prototype.equals = function equals(b) {
                if (!Buffer2.isBuffer(b))
                  throw new TypeError("Argument must be a Buffer");
                if (this === b)
                  return true;
                return Buffer2.compare(this, b) === 0;
              };
              Buffer2.prototype.inspect = function inspect() {
                var str = "";
                var max = exports1.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                  str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                  if (this.length > max)
                    str += " ... ";
                }
                return "<Buffer " + str + ">";
              };
              Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer2.isBuffer(target)) {
                  throw new TypeError("Argument must be a Buffer");
                }
                if (start === void 0) {
                  start = 0;
                }
                if (end === void 0) {
                  end = target ? target.length : 0;
                }
                if (thisStart === void 0) {
                  thisStart = 0;
                }
                if (thisEnd === void 0) {
                  thisEnd = this.length;
                }
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                  throw new RangeError("out of range index");
                }
                if (thisStart >= thisEnd && start >= end) {
                  return 0;
                }
                if (thisStart >= thisEnd) {
                  return -1;
                }
                if (start >= end) {
                  return 1;
                }
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target)
                  return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) {
                  if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                  }
                }
                if (x < y)
                  return -1;
                if (y < x)
                  return 1;
                return 0;
              };
              function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0)
                  return -1;
                if (typeof byteOffset === "string") {
                  encoding = byteOffset;
                  byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                  byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                  byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                if (isNaN(byteOffset)) {
                  byteOffset = dir ? 0 : buffer.length - 1;
                }
                if (byteOffset < 0)
                  byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                  if (dir)
                    return -1;
                  else
                    byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                  if (dir)
                    byteOffset = 0;
                  else
                    return -1;
                }
                if (typeof val === "string") {
                  val = Buffer2.from(val, encoding);
                }
                if (Buffer2.isBuffer(val)) {
                  if (val.length === 0) {
                    return -1;
                  }
                  return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                  val = val & 255;
                  if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                    if (dir) {
                      return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                    } else {
                      return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                    }
                  }
                  return arrayIndexOf(buffer, [
                    val
                  ], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
              }
              function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== void 0) {
                  encoding = String(encoding).toLowerCase();
                  if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                    if (arr.length < 2 || val.length < 2) {
                      return -1;
                    }
                    indexSize = 2;
                    arrLength /= 2;
                    valLength /= 2;
                    byteOffset /= 2;
                  }
                }
                function read(buf, i2) {
                  if (indexSize === 1) {
                    return buf[i2];
                  } else {
                    return buf.readUInt16BE(i2 * indexSize);
                  }
                }
                var i;
                if (dir) {
                  var foundIndex = -1;
                  for (i = byteOffset; i < arrLength; i++) {
                    if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                      if (foundIndex === -1)
                        foundIndex = i;
                      if (i - foundIndex + 1 === valLength)
                        return foundIndex * indexSize;
                    } else {
                      if (foundIndex !== -1)
                        i -= i - foundIndex;
                      foundIndex = -1;
                    }
                  }
                } else {
                  if (byteOffset + valLength > arrLength)
                    byteOffset = arrLength - valLength;
                  for (i = byteOffset; i >= 0; i--) {
                    var found = true;
                    for (var j = 0; j < valLength; j++) {
                      if (read(arr, i + j) !== read(val, j)) {
                        found = false;
                        break;
                      }
                    }
                    if (found)
                      return i;
                  }
                }
                return -1;
              }
              Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
              };
              Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
              };
              Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
              };
              function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                  length = remaining;
                } else {
                  length = Number(length);
                  if (length > remaining) {
                    length = remaining;
                  }
                }
                var strLen = string.length;
                if (strLen % 2 !== 0)
                  throw new TypeError("Invalid hex string");
                if (length > strLen / 2) {
                  length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                  var parsed = parseInt(string.substr(i * 2, 2), 16);
                  if (isNaN(parsed))
                    return i;
                  buf[offset + i] = parsed;
                }
                return i;
              }
              function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
              }
              function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
              }
              function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
              }
              function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
              }
              function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
              }
              Buffer2.prototype.write = function write(string, offset, length, encoding) {
                if (offset === void 0) {
                  encoding = "utf8";
                  length = this.length;
                  offset = 0;
                } else if (length === void 0 && typeof offset === "string") {
                  encoding = offset;
                  length = this.length;
                  offset = 0;
                } else if (isFinite(offset)) {
                  offset = offset | 0;
                  if (isFinite(length)) {
                    length = length | 0;
                    if (encoding === void 0)
                      encoding = "utf8";
                  } else {
                    encoding = length;
                    length = void 0;
                  }
                } else {
                  throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var remaining = this.length - offset;
                if (length === void 0 || length > remaining)
                  length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                  throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!encoding)
                  encoding = "utf8";
                var loweredCase = false;
                for (; ; ) {
                  switch (encoding) {
                    case "hex":
                      return hexWrite(this, string, offset, length);
                    case "utf8":
                    case "utf-8":
                      return utf8Write(this, string, offset, length);
                    case "ascii":
                      return asciiWrite(this, string, offset, length);
                    case "latin1":
                    case "binary":
                      return latin1Write(this, string, offset, length);
                    case "base64":
                      return base64Write(this, string, offset, length);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return ucs2Write(this, string, offset, length);
                    default:
                      if (loweredCase)
                        throw new TypeError("Unknown encoding: " + encoding);
                      encoding = ("" + encoding).toLowerCase();
                      loweredCase = true;
                  }
                }
              };
              Buffer2.prototype.toJSON = function toJSON() {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
                };
              };
              function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                  return base64.fromByteArray(buf);
                } else {
                  return base64.fromByteArray(buf.slice(start, end));
                }
              }
              function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                  var firstByte = buf[i];
                  var codePoint = null;
                  var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                  if (i + bytesPerSequence <= end) {
                    var secondByte, thirdByte, fourthByte, tempCodePoint;
                    switch (bytesPerSequence) {
                      case 1:
                        if (firstByte < 128) {
                          codePoint = firstByte;
                        }
                        break;
                      case 2:
                        secondByte = buf[i + 1];
                        if ((secondByte & 192) === 128) {
                          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                          if (tempCodePoint > 127) {
                            codePoint = tempCodePoint;
                          }
                        }
                        break;
                      case 3:
                        secondByte = buf[i + 1];
                        thirdByte = buf[i + 2];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                            codePoint = tempCodePoint;
                          }
                        }
                        break;
                      case 4:
                        secondByte = buf[i + 1];
                        thirdByte = buf[i + 2];
                        fourthByte = buf[i + 3];
                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                            codePoint = tempCodePoint;
                          }
                        }
                    }
                  }
                  if (codePoint === null) {
                    codePoint = 65533;
                    bytesPerSequence = 1;
                  } else if (codePoint > 65535) {
                    codePoint -= 65536;
                    res.push(codePoint >>> 10 & 1023 | 55296);
                    codePoint = 56320 | codePoint & 1023;
                  }
                  res.push(codePoint);
                  i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
              }
              var MAX_ARGUMENTS_LENGTH = 4096;
              function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                  return String.fromCharCode.apply(String, codePoints);
                }
                var res = "";
                var i = 0;
                while (i < len) {
                  res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
              }
              function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                  ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
              }
              function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                  ret += String.fromCharCode(buf[i]);
                }
                return ret;
              }
              function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0)
                  start = 0;
                if (!end || end < 0 || end > len)
                  end = len;
                var out = "";
                for (var i = start; i < end; ++i) {
                  out += toHex(buf[i]);
                }
                return out;
              }
              function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length; i += 2) {
                  res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
              }
              Buffer2.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === void 0 ? len : ~~end;
                if (start < 0) {
                  start += len;
                  if (start < 0)
                    start = 0;
                } else if (start > len) {
                  start = len;
                }
                if (end < 0) {
                  end += len;
                  if (end < 0)
                    end = 0;
                } else if (end > len) {
                  end = len;
                }
                if (end < start)
                  end = start;
                var newBuf;
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  newBuf = this.subarray(start, end);
                  newBuf.__proto__ = Buffer2.prototype;
                } else {
                  var sliceLen = end - start;
                  newBuf = new Buffer2(sliceLen, void 0);
                  for (var i = 0; i < sliceLen; ++i) {
                    newBuf[i] = this[i + start];
                  }
                }
                return newBuf;
              };
              function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0)
                  throw new RangeError("offset is not uint");
                if (offset + ext > length)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert)
                  checkOffset(offset, byteLength2, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength2 && (mul *= 256)) {
                  val += this[offset + i] * mul;
                }
                return val;
              };
              Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert) {
                  checkOffset(offset, byteLength2, this.length);
                }
                var val = this[offset + --byteLength2];
                var mul = 1;
                while (byteLength2 > 0 && (mul *= 256)) {
                  val += this[offset + --byteLength2] * mul;
                }
                return val;
              };
              Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 1, this.length);
                return this[offset];
              };
              Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
              };
              Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
              };
              Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
              };
              Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
              };
              Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert)
                  checkOffset(offset, byteLength2, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength2 && (mul *= 256)) {
                  val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul)
                  val -= Math.pow(2, 8 * byteLength2);
                return val;
              };
              Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert)
                  checkOffset(offset, byteLength2, this.length);
                var i = byteLength2;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                  val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul)
                  val -= Math.pow(2, 8 * byteLength2);
                return val;
              };
              Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128))
                  return this[offset];
                return (255 - this[offset] + 1) * -1;
              };
              Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
              };
              Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
              };
              Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
              };
              Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
              };
              Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
              };
              Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
              };
              Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
              };
              Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert)
                  checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
              };
              function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer2.isBuffer(buf))
                  throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min)
                  throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length)
                  throw new RangeError("Index out of range");
              }
              Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert) {
                  var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                  checkInt(this, value, offset, byteLength2, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength2 && (mul *= 256)) {
                  this[offset + i] = value / mul & 255;
                }
                return offset + byteLength2;
              };
              Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength2 = byteLength2 | 0;
                if (!noAssert) {
                  var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                  checkInt(this, value, offset, byteLength2, maxBytes, 0);
                }
                var i = byteLength2 - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                  this[offset + i] = value / mul & 255;
                }
                return offset + byteLength2;
              };
              Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 1, 255, 0);
                if (!Buffer2.TYPED_ARRAY_SUPPORT)
                  value = Math.floor(value);
                this[offset] = value & 255;
                return offset + 1;
              };
              function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0)
                  value = 65535 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                  buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                }
              }
              Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                } else {
                  objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
              };
              Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 255;
                } else {
                  objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
              };
              function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0)
                  value = 4294967295 + value + 1;
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                  buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                }
              }
              Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset + 3] = value >>> 24;
                  this[offset + 2] = value >>> 16;
                  this[offset + 1] = value >>> 8;
                  this[offset] = value & 255;
                } else {
                  objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
              };
              Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 255;
                } else {
                  objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
              };
              Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                  var limit = Math.pow(2, 8 * byteLength2 - 1);
                  checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength2 && (mul *= 256)) {
                  if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                    sub = 1;
                  }
                  this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength2;
              };
              Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                  var limit = Math.pow(2, 8 * byteLength2 - 1);
                  checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                }
                var i = byteLength2 - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                  if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                    sub = 1;
                  }
                  this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength2;
              };
              Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 1, 127, -128);
                if (!Buffer2.TYPED_ARRAY_SUPPORT)
                  value = Math.floor(value);
                if (value < 0)
                  value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
              };
              Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                } else {
                  objectWriteUInt16(this, value, offset, true);
                }
                return offset + 2;
              };
              Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 8;
                  this[offset + 1] = value & 255;
                } else {
                  objectWriteUInt16(this, value, offset, false);
                }
                return offset + 2;
              };
              Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value & 255;
                  this[offset + 1] = value >>> 8;
                  this[offset + 2] = value >>> 16;
                  this[offset + 3] = value >>> 24;
                } else {
                  objectWriteUInt32(this, value, offset, true);
                }
                return offset + 4;
              };
              Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert)
                  checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0)
                  value = 4294967295 + value + 1;
                if (Buffer2.TYPED_ARRAY_SUPPORT) {
                  this[offset] = value >>> 24;
                  this[offset + 1] = value >>> 16;
                  this[offset + 2] = value >>> 8;
                  this[offset + 3] = value & 255;
                } else {
                  objectWriteUInt32(this, value, offset, false);
                }
                return offset + 4;
              };
              function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length)
                  throw new RangeError("Index out of range");
                if (offset < 0)
                  throw new RangeError("Index out of range");
              }
              function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                  checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
              }
              Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
              };
              Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
              };
              function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                  checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
              }
              Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
              };
              Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
              };
              Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start)
                  start = 0;
                if (!end && end !== 0)
                  end = this.length;
                if (targetStart >= target.length)
                  targetStart = target.length;
                if (!targetStart)
                  targetStart = 0;
                if (end > 0 && end < start)
                  end = start;
                if (end === start)
                  return 0;
                if (target.length === 0 || this.length === 0)
                  return 0;
                if (targetStart < 0) {
                  throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length)
                  throw new RangeError("sourceStart out of bounds");
                if (end < 0)
                  throw new RangeError("sourceEnd out of bounds");
                if (end > this.length)
                  end = this.length;
                if (target.length - targetStart < end - start) {
                  end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                  for (i = len - 1; i >= 0; --i) {
                    target[i + targetStart] = this[i + start];
                  }
                } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
                  for (i = 0; i < len; ++i) {
                    target[i + targetStart] = this[i + start];
                  }
                } else {
                  Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                }
                return len;
              };
              Buffer2.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                  if (typeof start === "string") {
                    encoding = start;
                    start = 0;
                    end = this.length;
                  } else if (typeof end === "string") {
                    encoding = end;
                    end = this.length;
                  }
                  if (val.length === 1) {
                    var code = val.charCodeAt(0);
                    if (code < 256) {
                      val = code;
                    }
                  }
                  if (encoding !== void 0 && typeof encoding !== "string") {
                    throw new TypeError("encoding must be a string");
                  }
                  if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
                    throw new TypeError("Unknown encoding: " + encoding);
                  }
                } else if (typeof val === "number") {
                  val = val & 255;
                }
                if (start < 0 || this.length < start || this.length < end) {
                  throw new RangeError("Out of range index");
                }
                if (end <= start) {
                  return this;
                }
                start = start >>> 0;
                end = end === void 0 ? this.length : end >>> 0;
                if (!val)
                  val = 0;
                var i;
                if (typeof val === "number") {
                  for (i = start; i < end; ++i) {
                    this[i] = val;
                  }
                } else {
                  var bytes = Buffer2.isBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
                  var len = bytes.length;
                  for (i = 0; i < end - start; ++i) {
                    this[i + start] = bytes[i % len];
                  }
                }
                return this;
              };
              var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
              function base64clean(str) {
                str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                if (str.length < 2)
                  return "";
                while (str.length % 4 !== 0) {
                  str = str + "=";
                }
                return str;
              }
              function stringtrim(str) {
                if (str.trim)
                  return str.trim();
                return str.replace(/^\s+|\s+$/g, "");
              }
              function toHex(n) {
                if (n < 16)
                  return "0" + n.toString(16);
                return n.toString(16);
              }
              function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                  codePoint = string.charCodeAt(i);
                  if (codePoint > 55295 && codePoint < 57344) {
                    if (!leadSurrogate) {
                      if (codePoint > 56319) {
                        if ((units -= 3) > -1)
                          bytes.push(239, 191, 189);
                        continue;
                      } else if (i + 1 === length) {
                        if ((units -= 3) > -1)
                          bytes.push(239, 191, 189);
                        continue;
                      }
                      leadSurrogate = codePoint;
                      continue;
                    }
                    if (codePoint < 56320) {
                      if ((units -= 3) > -1)
                        bytes.push(239, 191, 189);
                      leadSurrogate = codePoint;
                      continue;
                    }
                    codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                  } else if (leadSurrogate) {
                    if ((units -= 3) > -1)
                      bytes.push(239, 191, 189);
                  }
                  leadSurrogate = null;
                  if (codePoint < 128) {
                    if ((units -= 1) < 0)
                      break;
                    bytes.push(codePoint);
                  } else if (codePoint < 2048) {
                    if ((units -= 2) < 0)
                      break;
                    bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                  } else if (codePoint < 65536) {
                    if ((units -= 3) < 0)
                      break;
                    bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                  } else if (codePoint < 1114112) {
                    if ((units -= 4) < 0)
                      break;
                    bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                  } else {
                    throw new Error("Invalid code point");
                  }
                }
                return bytes;
              }
              function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                  byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
              }
              function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                  if ((units -= 2) < 0)
                    break;
                  c = str.charCodeAt(i);
                  hi = c >> 8;
                  lo = c % 256;
                  byteArray.push(lo);
                  byteArray.push(hi);
                }
                return byteArray;
              }
              function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
              }
              function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                  if (i + offset >= dst.length || i >= src.length)
                    break;
                  dst[i + offset] = src[i];
                }
                return i;
              }
              function isnan(val) {
                return val !== val;
              }
            }).call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"));
          },
          "./node_modules/node-libs-browser/node_modules/isarray/index.js": function(module1, exports1) {
            var toString = {}.toString;
            module1.exports = Array.isArray || function(arr) {
              return toString.call(arr) == "[object Array]";
            };
          },
          "./node_modules/object-sizeof/byte_size.js": function(module1, exports1) {
            module1.exports = {
              STRING: 2,
              BOOLEAN: 4,
              NUMBER: 8
            };
          },
          "./node_modules/object-sizeof/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            var ECMA_SIZES = __webpack_require__("./node_modules/object-sizeof/byte_size.js");
            var Buffer2 = __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
            function allProperties(obj) {
              const stringProperties = [];
              for (var prop in obj) {
                stringProperties.push(prop);
              }
              if (Object.getOwnPropertySymbols) {
                var symbolProperties = Object.getOwnPropertySymbols(obj);
                Array.prototype.push.apply(stringProperties, symbolProperties);
              }
              return stringProperties;
            }
            function sizeOfObject(seen, object) {
              if (object == null) {
                return 0;
              }
              var bytes = 0;
              var properties = allProperties(object);
              for (var i = 0; i < properties.length; i++) {
                var key = properties[i];
                if (typeof object[key] === "object" && object[key] !== null) {
                  if (seen.has(object[key])) {
                    continue;
                  }
                  seen.add(object[key]);
                }
                bytes += getCalculator(seen)(key);
                try {
                  bytes += getCalculator(seen)(object[key]);
                } catch (ex) {
                  if (ex instanceof RangeError) {
                    bytes = 0;
                  }
                }
              }
              return bytes;
            }
            function getCalculator(seen) {
              return function calculator(object) {
                if (Buffer2.isBuffer(object)) {
                  return object.length;
                }
                var objectType = typeof object;
                switch (objectType) {
                  case "string":
                    return object.length * ECMA_SIZES.STRING;
                  case "boolean":
                    return ECMA_SIZES.BOOLEAN;
                  case "number":
                    return ECMA_SIZES.NUMBER;
                  case "symbol":
                    const isGlobalSymbol = Symbol.keyFor && Symbol.keyFor(object);
                    return isGlobalSymbol ? Symbol.keyFor(object).length * ECMA_SIZES.STRING : (object.toString().length - 8) * ECMA_SIZES.STRING;
                  case "object":
                    if (Array.isArray(object)) {
                      return object.map(getCalculator(seen)).reduce(function(acc, curr) {
                        return acc + curr;
                      }, 0);
                    } else {
                      return sizeOfObject(seen, object);
                    }
                  default:
                    return 0;
                }
              };
            }
            function sizeof(object) {
              return getCalculator(/* @__PURE__ */ new WeakSet())(object);
            }
            module1.exports = sizeof;
          },
          "./node_modules/parseqs/index.js": function(module1, exports1) {
            exports1.encode = function(obj) {
              var str = "";
              for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                  if (str.length)
                    str += "&";
                  str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
                }
              }
              return str;
            };
            exports1.decode = function(qs) {
              var qry = {};
              var pairs = qs.split("&");
              for (var i = 0, l = pairs.length; i < l; i++) {
                var pair = pairs[i].split("=");
                qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
              }
              return qry;
            };
          },
          "./node_modules/parseuri/index.js": function(module1, exports1) {
            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
            var parts = [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor"
            ];
            module1.exports = function parseuri(str) {
              var src = str, b = str.indexOf("["), e = str.indexOf("]");
              if (b != -1 && e != -1) {
                str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
              }
              var m = re.exec(str || ""), uri = {}, i = 14;
              while (i--) {
                uri[parts[i]] = m[i] || "";
              }
              if (b != -1 && e != -1) {
                uri.source = src;
                uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
                uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                uri.ipv6uri = true;
              }
              uri.pathNames = pathNames(uri, uri["path"]);
              uri.queryKey = queryKey(uri, uri["query"]);
              return uri;
            };
            function pathNames(obj, path) {
              var regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
              if (path.substr(0, 1) == "/" || path.length === 0) {
                names.splice(0, 1);
              }
              if (path.substr(path.length - 1, 1) == "/") {
                names.splice(names.length - 1, 1);
              }
              return names;
            }
            function queryKey(uri, query) {
              var data = {};
              query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
                if ($1) {
                  data[$1] = $2;
                }
              });
              return data;
            }
          },
          "./node_modules/process/browser.js": function(module1, exports1) {
            var process = module1.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
              throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
              throw new Error("clearTimeout has not been defined");
            }
            (function() {
              try {
                if (typeof setTimeout === "function") {
                  cachedSetTimeout = setTimeout;
                } else {
                  cachedSetTimeout = defaultSetTimout;
                }
              } catch (e) {
                cachedSetTimeout = defaultSetTimout;
              }
              try {
                if (typeof clearTimeout === "function") {
                  cachedClearTimeout = clearTimeout;
                } else {
                  cachedClearTimeout = defaultClearTimeout;
                }
              } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
              }
            })();
            function runTimeout(fun) {
              if (cachedSetTimeout === setTimeout) {
                return setTimeout(fun, 0);
              }
              if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
              }
              try {
                return cachedSetTimeout(fun, 0);
              } catch (e) {
                try {
                  return cachedSetTimeout.call(null, fun, 0);
                } catch (e2) {
                  return cachedSetTimeout.call(this, fun, 0);
                }
              }
            }
            function runClearTimeout(marker) {
              if (cachedClearTimeout === clearTimeout) {
                return clearTimeout(marker);
              }
              if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
              }
              try {
                return cachedClearTimeout(marker);
              } catch (e) {
                try {
                  return cachedClearTimeout.call(null, marker);
                } catch (e2) {
                  return cachedClearTimeout.call(this, marker);
                }
              }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
              if (!draining || !currentQueue) {
                return;
              }
              draining = false;
              if (currentQueue.length) {
                queue = currentQueue.concat(queue);
              } else {
                queueIndex = -1;
              }
              if (queue.length) {
                drainQueue();
              }
            }
            function drainQueue() {
              if (draining) {
                return;
              }
              var timeout = runTimeout(cleanUpNextTick);
              draining = true;
              var len = queue.length;
              while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                  if (currentQueue) {
                    currentQueue[queueIndex].run();
                  }
                }
                queueIndex = -1;
                len = queue.length;
              }
              currentQueue = null;
              draining = false;
              runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
              var args = new Array(arguments.length - 1);
              if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                  args[i - 1] = arguments[i];
                }
              }
              queue.push(new Item(fun, args));
              if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
              }
            };
            function Item(fun, array) {
              this.fun = fun;
              this.array = array;
            }
            Item.prototype.run = function() {
              this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {
            }
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
              return [];
            };
            process.binding = function(name) {
              throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
              return "/";
            };
            process.chdir = function(dir) {
              throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
              return 0;
            };
          },
          "./node_modules/query-string/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            const strictUriEncode = __webpack_require__("./node_modules/strict-uri-encode/index.js");
            const decodeComponent = __webpack_require__("./node_modules/decode-uri-component/index.js");
            const splitOnFirst = __webpack_require__("./node_modules/split-on-first/index.js");
            const filterObject = __webpack_require__("./node_modules/filter-obj/index.js");
            const isNullOrUndefined = (value) => value === null || value === void 0;
            function encoderForArrayFormat(options) {
              switch (options.arrayFormat) {
                case "index":
                  return (key) => (result, value) => {
                    const index = result.length;
                    if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                      return result;
                    }
                    if (value === null) {
                      return [
                        ...result,
                        [
                          encode(key, options),
                          "[",
                          index,
                          "]"
                        ].join("")
                      ];
                    }
                    return [
                      ...result,
                      [
                        encode(key, options),
                        "[",
                        encode(index, options),
                        "]=",
                        encode(value, options)
                      ].join("")
                    ];
                  };
                case "bracket":
                  return (key) => (result, value) => {
                    if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                      return result;
                    }
                    if (value === null) {
                      return [
                        ...result,
                        [
                          encode(key, options),
                          "[]"
                        ].join("")
                      ];
                    }
                    return [
                      ...result,
                      [
                        encode(key, options),
                        "[]=",
                        encode(value, options)
                      ].join("")
                    ];
                  };
                case "comma":
                case "separator":
                  return (key) => (result, value) => {
                    if (value === null || value === void 0 || value.length === 0) {
                      return result;
                    }
                    if (result.length === 0) {
                      return [
                        [
                          encode(key, options),
                          "=",
                          encode(value, options)
                        ].join("")
                      ];
                    }
                    return [
                      [
                        result,
                        encode(value, options)
                      ].join(options.arrayFormatSeparator)
                    ];
                  };
                default:
                  return (key) => (result, value) => {
                    if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                      return result;
                    }
                    if (value === null) {
                      return [
                        ...result,
                        encode(key, options)
                      ];
                    }
                    return [
                      ...result,
                      [
                        encode(key, options),
                        "=",
                        encode(value, options)
                      ].join("")
                    ];
                  };
              }
            }
            function parserForArrayFormat(options) {
              let result;
              switch (options.arrayFormat) {
                case "index":
                  return (key, value, accumulator) => {
                    result = /\[(\d*)\]$/.exec(key);
                    key = key.replace(/\[\d*\]$/, "");
                    if (!result) {
                      accumulator[key] = value;
                      return;
                    }
                    if (accumulator[key] === void 0) {
                      accumulator[key] = {};
                    }
                    accumulator[key][result[1]] = value;
                  };
                case "bracket":
                  return (key, value, accumulator) => {
                    result = /(\[\])$/.exec(key);
                    key = key.replace(/\[\]$/, "");
                    if (!result) {
                      accumulator[key] = value;
                      return;
                    }
                    if (accumulator[key] === void 0) {
                      accumulator[key] = [
                        value
                      ];
                      return;
                    }
                    accumulator[key] = [].concat(accumulator[key], value);
                  };
                case "comma":
                case "separator":
                  return (key, value, accumulator) => {
                    const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                    const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
                    value = isEncodedArray ? decode(value, options) : value;
                    const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
                    accumulator[key] = newValue;
                  };
                default:
                  return (key, value, accumulator) => {
                    if (accumulator[key] === void 0) {
                      accumulator[key] = value;
                      return;
                    }
                    accumulator[key] = [].concat(accumulator[key], value);
                  };
              }
            }
            function validateArrayFormatSeparator(value) {
              if (typeof value !== "string" || value.length !== 1) {
                throw new TypeError("arrayFormatSeparator must be single character string");
              }
            }
            function encode(value, options) {
              if (options.encode) {
                return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
              }
              return value;
            }
            function decode(value, options) {
              if (options.decode) {
                return decodeComponent(value);
              }
              return value;
            }
            function keysSorter(input) {
              if (Array.isArray(input)) {
                return input.sort();
              }
              if (typeof input === "object") {
                return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
              }
              return input;
            }
            function removeHash(input) {
              const hashStart = input.indexOf("#");
              if (hashStart !== -1) {
                input = input.slice(0, hashStart);
              }
              return input;
            }
            function getHash(url) {
              let hash = "";
              const hashStart = url.indexOf("#");
              if (hashStart !== -1) {
                hash = url.slice(hashStart);
              }
              return hash;
            }
            function extract(input) {
              input = removeHash(input);
              const queryStart = input.indexOf("?");
              if (queryStart === -1) {
                return "";
              }
              return input.slice(queryStart + 1);
            }
            function parseValue(value, options) {
              if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") {
                value = Number(value);
              } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
                value = value.toLowerCase() === "true";
              }
              return value;
            }
            function parse(query, options) {
              options = Object.assign({
                decode: true,
                sort: true,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: false,
                parseBooleans: false
              }, options);
              validateArrayFormatSeparator(options.arrayFormatSeparator);
              const formatter = parserForArrayFormat(options);
              const ret = /* @__PURE__ */ Object.create(null);
              if (typeof query !== "string") {
                return ret;
              }
              query = query.trim().replace(/^[?#&]/, "");
              if (!query) {
                return ret;
              }
              for (const param of query.split("&")) {
                if (param === "") {
                  continue;
                }
                let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
                value = value === void 0 ? null : [
                  "comma",
                  "separator"
                ].includes(options.arrayFormat) ? value : decode(value, options);
                formatter(decode(key, options), value, ret);
              }
              for (const key of Object.keys(ret)) {
                const value = ret[key];
                if (typeof value === "object" && value !== null) {
                  for (const k of Object.keys(value)) {
                    value[k] = parseValue(value[k], options);
                  }
                } else {
                  ret[key] = parseValue(value, options);
                }
              }
              if (options.sort === false) {
                return ret;
              }
              return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
                const value = ret[key];
                if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
                  result[key] = keysSorter(value);
                } else {
                  result[key] = value;
                }
                return result;
              }, /* @__PURE__ */ Object.create(null));
            }
            exports1.extract = extract;
            exports1.parse = parse;
            exports1.stringify = (object, options) => {
              if (!object) {
                return "";
              }
              options = Object.assign({
                encode: true,
                strict: true,
                arrayFormat: "none",
                arrayFormatSeparator: ","
              }, options);
              validateArrayFormatSeparator(options.arrayFormatSeparator);
              const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
              const formatter = encoderForArrayFormat(options);
              const objectCopy = {};
              for (const key of Object.keys(object)) {
                if (!shouldFilter(key)) {
                  objectCopy[key] = object[key];
                }
              }
              const keys = Object.keys(objectCopy);
              if (options.sort !== false) {
                keys.sort(options.sort);
              }
              return keys.map((key) => {
                const value = object[key];
                if (value === void 0) {
                  return "";
                }
                if (value === null) {
                  return encode(key, options);
                }
                if (Array.isArray(value)) {
                  return value.reduce(formatter(key), []).join("&");
                }
                return encode(key, options) + "=" + encode(value, options);
              }).filter((x) => x.length > 0).join("&");
            };
            exports1.parseUrl = (url, options) => {
              options = Object.assign({
                decode: true
              }, options);
              const [url_, hash] = splitOnFirst(url, "#");
              return Object.assign({
                url: url_.split("?")[0] || "",
                query: parse(extract(url), options)
              }, options && options.parseFragmentIdentifier && hash ? {
                fragmentIdentifier: decode(hash, options)
              } : {});
            };
            exports1.stringifyUrl = (object, options) => {
              options = Object.assign({
                encode: true,
                strict: true
              }, options);
              const url = removeHash(object.url).split("?")[0] || "";
              const queryFromUrl = exports1.extract(object.url);
              const parsedQueryFromUrl = exports1.parse(queryFromUrl, {
                sort: false
              });
              const query = Object.assign(parsedQueryFromUrl, object.query);
              let queryString = exports1.stringify(query, options);
              if (queryString) {
                queryString = `?${queryString}`;
              }
              let hash = getHash(object.url);
              if (object.fragmentIdentifier) {
                hash = `#${encode(object.fragmentIdentifier, options)}`;
              }
              return `${url}${queryString}${hash}`;
            };
            exports1.pick = (input, filter, options) => {
              options = Object.assign({
                parseFragmentIdentifier: true
              }, options);
              const { url, query, fragmentIdentifier } = exports1.parseUrl(input, options);
              return exports1.stringifyUrl({
                url,
                query: filterObject(query, filter),
                fragmentIdentifier
              }, options);
            };
            exports1.exclude = (input, filter, options) => {
              const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
              return exports1.pick(input, exclusionFilter, options);
            };
          },
          "./node_modules/sdp-transform/lib/grammar.js": function(module1, exports1) {
            var grammar = module1.exports = {
              v: [
                {
                  name: "version",
                  reg: /^(\d*)$/
                }
              ],
              o: [
                {
                  name: "origin",
                  reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
                  names: [
                    "username",
                    "sessionId",
                    "sessionVersion",
                    "netType",
                    "ipVer",
                    "address"
                  ],
                  format: "%s %s %d %s IP%d %s"
                }
              ],
              s: [
                {
                  name: "name"
                }
              ],
              i: [
                {
                  name: "description"
                }
              ],
              u: [
                {
                  name: "uri"
                }
              ],
              e: [
                {
                  name: "email"
                }
              ],
              p: [
                {
                  name: "phone"
                }
              ],
              z: [
                {
                  name: "timezones"
                }
              ],
              r: [
                {
                  name: "repeats"
                }
              ],
              t: [
                {
                  name: "timing",
                  reg: /^(\d*) (\d*)/,
                  names: [
                    "start",
                    "stop"
                  ],
                  format: "%d %d"
                }
              ],
              c: [
                {
                  name: "connection",
                  reg: /^IN IP(\d) (\S*)/,
                  names: [
                    "version",
                    "ip"
                  ],
                  format: "IN IP%d %s"
                }
              ],
              b: [
                {
                  push: "bandwidth",
                  reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
                  names: [
                    "type",
                    "limit"
                  ],
                  format: "%s:%s"
                }
              ],
              m: [
                {
                  reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
                  names: [
                    "type",
                    "port",
                    "protocol",
                    "payloads"
                  ],
                  format: "%s %d %s %s"
                }
              ],
              a: [
                {
                  push: "rtp",
                  reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                  names: [
                    "payload",
                    "codec",
                    "rate",
                    "encoding"
                  ],
                  format: function(o) {
                    return o.encoding ? "rtpmap:%d %s/%s/%s" : o.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
                  }
                },
                {
                  push: "fmtp",
                  reg: /^fmtp:(\d*) ([\S| ]*)/,
                  names: [
                    "payload",
                    "config"
                  ],
                  format: "fmtp:%d %s"
                },
                {
                  name: "control",
                  reg: /^control:(.*)/,
                  format: "control:%s"
                },
                {
                  name: "rtcp",
                  reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                  names: [
                    "port",
                    "netType",
                    "ipVer",
                    "address"
                  ],
                  format: function(o) {
                    return o.address != null ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
                  }
                },
                {
                  push: "rtcpFbTrrInt",
                  reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
                  names: [
                    "payload",
                    "value"
                  ],
                  format: "rtcp-fb:%s trr-int %d"
                },
                {
                  push: "rtcpFb",
                  reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                  names: [
                    "payload",
                    "type",
                    "subtype"
                  ],
                  format: function(o) {
                    return o.subtype != null ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
                  }
                },
                {
                  push: "ext",
                  reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                  names: [
                    "value",
                    "direction",
                    "encrypt-uri",
                    "uri",
                    "config"
                  ],
                  format: function(o) {
                    return "extmap:%d" + (o.direction ? "/%s" : "%v") + (o["encrypt-uri"] ? " %s" : "%v") + " %s" + (o.config ? " %s" : "");
                  }
                },
                {
                  name: "extmapAllowMixed",
                  reg: /^(extmap-allow-mixed)/
                },
                {
                  push: "crypto",
                  reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                  names: [
                    "id",
                    "suite",
                    "config",
                    "sessionConfig"
                  ],
                  format: function(o) {
                    return o.sessionConfig != null ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
                  }
                },
                {
                  name: "setup",
                  reg: /^setup:(\w*)/,
                  format: "setup:%s"
                },
                {
                  name: "connectionType",
                  reg: /^connection:(new|existing)/,
                  format: "connection:%s"
                },
                {
                  name: "mid",
                  reg: /^mid:([^\s]*)/,
                  format: "mid:%s"
                },
                {
                  name: "msid",
                  reg: /^msid:(.*)/,
                  format: "msid:%s"
                },
                {
                  name: "ptime",
                  reg: /^ptime:(\d*(?:\.\d*)*)/,
                  format: "ptime:%d"
                },
                {
                  name: "maxptime",
                  reg: /^maxptime:(\d*(?:\.\d*)*)/,
                  format: "maxptime:%d"
                },
                {
                  name: "direction",
                  reg: /^(sendrecv|recvonly|sendonly|inactive)/
                },
                {
                  name: "icelite",
                  reg: /^(ice-lite)/
                },
                {
                  name: "iceUfrag",
                  reg: /^ice-ufrag:(\S*)/,
                  format: "ice-ufrag:%s"
                },
                {
                  name: "icePwd",
                  reg: /^ice-pwd:(\S*)/,
                  format: "ice-pwd:%s"
                },
                {
                  name: "fingerprint",
                  reg: /^fingerprint:(\S*) (\S*)/,
                  names: [
                    "type",
                    "hash"
                  ],
                  format: "fingerprint:%s %s"
                },
                {
                  push: "candidates",
                  reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                  names: [
                    "foundation",
                    "component",
                    "transport",
                    "priority",
                    "ip",
                    "port",
                    "type",
                    "raddr",
                    "rport",
                    "tcptype",
                    "generation",
                    "network-id",
                    "network-cost"
                  ],
                  format: function(o) {
                    var str = "candidate:%s %d %s %d %s %d typ %s";
                    str += o.raddr != null ? " raddr %s rport %d" : "%v%v";
                    str += o.tcptype != null ? " tcptype %s" : "%v";
                    if (o.generation != null) {
                      str += " generation %d";
                    }
                    str += o["network-id"] != null ? " network-id %d" : "%v";
                    str += o["network-cost"] != null ? " network-cost %d" : "%v";
                    return str;
                  }
                },
                {
                  name: "endOfCandidates",
                  reg: /^(end-of-candidates)/
                },
                {
                  name: "remoteCandidates",
                  reg: /^remote-candidates:(.*)/,
                  format: "remote-candidates:%s"
                },
                {
                  name: "iceOptions",
                  reg: /^ice-options:(\S*)/,
                  format: "ice-options:%s"
                },
                {
                  push: "ssrcs",
                  reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                  names: [
                    "id",
                    "attribute",
                    "value"
                  ],
                  format: function(o) {
                    var str = "ssrc:%d";
                    if (o.attribute != null) {
                      str += " %s";
                      if (o.value != null) {
                        str += ":%s";
                      }
                    }
                    return str;
                  }
                },
                {
                  push: "ssrcGroups",
                  reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
                  names: [
                    "semantics",
                    "ssrcs"
                  ],
                  format: "ssrc-group:%s %s"
                },
                {
                  name: "msidSemantic",
                  reg: /^msid-semantic:\s?(\w*) (\S*)/,
                  names: [
                    "semantic",
                    "token"
                  ],
                  format: "msid-semantic: %s %s"
                },
                {
                  push: "groups",
                  reg: /^group:(\w*) (.*)/,
                  names: [
                    "type",
                    "mids"
                  ],
                  format: "group:%s %s"
                },
                {
                  name: "rtcpMux",
                  reg: /^(rtcp-mux)/
                },
                {
                  name: "rtcpRsize",
                  reg: /^(rtcp-rsize)/
                },
                {
                  name: "sctpmap",
                  reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                  names: [
                    "sctpmapNumber",
                    "app",
                    "maxMessageSize"
                  ],
                  format: function(o) {
                    return o.maxMessageSize != null ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
                  }
                },
                {
                  name: "xGoogleFlag",
                  reg: /^x-google-flag:([^\s]*)/,
                  format: "x-google-flag:%s"
                },
                {
                  push: "rids",
                  reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                  names: [
                    "id",
                    "direction",
                    "params"
                  ],
                  format: function(o) {
                    return o.params ? "rid:%s %s %s" : "rid:%s %s";
                  }
                },
                {
                  push: "imageattrs",
                  reg: new RegExp(
                    "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"
                  ),
                  names: [
                    "pt",
                    "dir1",
                    "attrs1",
                    "dir2",
                    "attrs2"
                  ],
                  format: function(o) {
                    return "imageattr:%s %s %s" + (o.dir2 ? " %s %s" : "");
                  }
                },
                {
                  name: "simulcast",
                  reg: new RegExp(
                    "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"
                  ),
                  names: [
                    "dir1",
                    "list1",
                    "dir2",
                    "list2"
                  ],
                  format: function(o) {
                    return "simulcast:%s %s" + (o.dir2 ? " %s %s" : "");
                  }
                },
                {
                  name: "simulcast_03",
                  reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
                  names: [
                    "value"
                  ],
                  format: "simulcast: %s"
                },
                {
                  name: "framerate",
                  reg: /^framerate:(\d+(?:$|\.\d+))/,
                  format: "framerate:%s"
                },
                {
                  name: "sourceFilter",
                  reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
                  names: [
                    "filterMode",
                    "netType",
                    "addressTypes",
                    "destAddress",
                    "srcList"
                  ],
                  format: "source-filter: %s %s %s %s %s"
                },
                {
                  name: "bundleOnly",
                  reg: /^(bundle-only)/
                },
                {
                  name: "label",
                  reg: /^label:(.+)/,
                  format: "label:%s"
                },
                {
                  name: "sctpPort",
                  reg: /^sctp-port:(\d+)$/,
                  format: "sctp-port:%s"
                },
                {
                  name: "maxMessageSize",
                  reg: /^max-message-size:(\d+)$/,
                  format: "max-message-size:%s"
                },
                {
                  push: "tsRefClocks",
                  reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                  names: [
                    "clksrc",
                    "clksrcExt"
                  ],
                  format: function(o) {
                    return "ts-refclk:%s" + (o.clksrcExt != null ? "=%s" : "");
                  }
                },
                {
                  name: "mediaClk",
                  reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                  names: [
                    "id",
                    "mediaClockName",
                    "mediaClockValue",
                    "rateNumerator",
                    "rateDenominator"
                  ],
                  format: function(o) {
                    var str = "mediaclk:";
                    str += o.id != null ? "id=%s %s" : "%v%s";
                    str += o.mediaClockValue != null ? "=%s" : "";
                    str += o.rateNumerator != null ? " rate=%s" : "";
                    str += o.rateDenominator != null ? "/%s" : "";
                    return str;
                  }
                },
                {
                  name: "keywords",
                  reg: /^keywds:(.+)$/,
                  format: "keywds:%s"
                },
                {
                  name: "content",
                  reg: /^content:(.+)/,
                  format: "content:%s"
                },
                {
                  name: "bfcpFloorCtrl",
                  reg: /^floorctrl:(c-only|s-only|c-s)/,
                  format: "floorctrl:%s"
                },
                {
                  name: "bfcpConfId",
                  reg: /^confid:(\d+)/,
                  format: "confid:%s"
                },
                {
                  name: "bfcpUserId",
                  reg: /^userid:(\d+)/,
                  format: "userid:%s"
                },
                {
                  name: "bfcpFloorId",
                  reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
                  names: [
                    "id",
                    "mStream"
                  ],
                  format: "floorid:%s mstrm:%s"
                },
                {
                  push: "invalid",
                  names: [
                    "value"
                  ]
                }
              ]
            };
            Object.keys(grammar).forEach(function(key) {
              var objs = grammar[key];
              objs.forEach(function(obj) {
                if (!obj.reg) {
                  obj.reg = /(.*)/;
                }
                if (!obj.format) {
                  obj.format = "%s";
                }
              });
            });
          },
          "./node_modules/sdp-transform/lib/index.js": function(module1, exports1, __webpack_require__) {
            var parser = __webpack_require__("./node_modules/sdp-transform/lib/parser.js");
            var writer = __webpack_require__("./node_modules/sdp-transform/lib/writer.js");
            exports1.write = writer;
            exports1.parse = parser.parse;
            exports1.parseParams = parser.parseParams;
            exports1.parseFmtpConfig = parser.parseFmtpConfig;
            exports1.parsePayloads = parser.parsePayloads;
            exports1.parseRemoteCandidates = parser.parseRemoteCandidates;
            exports1.parseImageAttributes = parser.parseImageAttributes;
            exports1.parseSimulcastStreamList = parser.parseSimulcastStreamList;
          },
          "./node_modules/sdp-transform/lib/parser.js": function(module1, exports1, __webpack_require__) {
            var toIntIfInt = function(v) {
              return String(Number(v)) === v ? Number(v) : v;
            };
            var attachProperties = function(match, location1, names, rawName) {
              if (rawName && !names) {
                location1[rawName] = toIntIfInt(match[1]);
              } else {
                for (var i = 0; i < names.length; i += 1) {
                  if (match[i + 1] != null) {
                    location1[names[i]] = toIntIfInt(match[i + 1]);
                  }
                }
              }
            };
            var parseReg = function(obj, location1, content) {
              var needsBlank = obj.name && obj.names;
              if (obj.push && !location1[obj.push]) {
                location1[obj.push] = [];
              } else if (needsBlank && !location1[obj.name]) {
                location1[obj.name] = {};
              }
              var keyLocation = obj.push ? {} : needsBlank ? location1[obj.name] : location1;
              attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);
              if (obj.push) {
                location1[obj.push].push(keyLocation);
              }
            };
            var grammar = __webpack_require__("./node_modules/sdp-transform/lib/grammar.js");
            var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            exports1.parse = function(sdp) {
              var session = {}, media = [], location1 = session;
              sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l) {
                var type = l[0];
                var content = l.slice(2);
                if (type === "m") {
                  media.push({
                    rtp: [],
                    fmtp: []
                  });
                  location1 = media[media.length - 1];
                }
                for (var j = 0; j < (grammar[type] || []).length; j += 1) {
                  var obj = grammar[type][j];
                  if (obj.reg.test(content)) {
                    return parseReg(obj, location1, content);
                  }
                }
              });
              session.media = media;
              return session;
            };
            var paramReducer = function(acc, expr) {
              var s = expr.split(/=(.+)/, 2);
              if (s.length === 2) {
                acc[s[0]] = toIntIfInt(s[1]);
              } else if (s.length === 1 && expr.length > 1) {
                acc[s[0]] = void 0;
              }
              return acc;
            };
            exports1.parseParams = function(str) {
              return str.split(/;\s?/).reduce(paramReducer, {});
            };
            exports1.parseFmtpConfig = exports1.parseParams;
            exports1.parsePayloads = function(str) {
              return str.toString().split(" ").map(Number);
            };
            exports1.parseRemoteCandidates = function(str) {
              var candidates = [];
              var parts = str.split(" ").map(toIntIfInt);
              for (var i = 0; i < parts.length; i += 3) {
                candidates.push({
                  component: parts[i],
                  ip: parts[i + 1],
                  port: parts[i + 2]
                });
              }
              return candidates;
            };
            exports1.parseImageAttributes = function(str) {
              return str.split(" ").map(function(item) {
                return item.substring(1, item.length - 1).split(",").reduce(paramReducer, {});
              });
            };
            exports1.parseSimulcastStreamList = function(str) {
              return str.split(";").map(function(stream) {
                return stream.split(",").map(function(format) {
                  var scid, paused = false;
                  if (format[0] !== "~") {
                    scid = toIntIfInt(format);
                  } else {
                    scid = toIntIfInt(format.substring(1, format.length));
                    paused = true;
                  }
                  return {
                    scid,
                    paused
                  };
                });
              });
            };
          },
          "./node_modules/sdp-transform/lib/writer.js": function(module1, exports1, __webpack_require__) {
            var grammar = __webpack_require__("./node_modules/sdp-transform/lib/grammar.js");
            var formatRegExp = /%[sdv%]/g;
            var format = function(formatStr) {
              var i = 1;
              var args = arguments;
              var len = args.length;
              return formatStr.replace(formatRegExp, function(x) {
                if (i >= len) {
                  return x;
                }
                var arg = args[i];
                i += 1;
                switch (x) {
                  case "%%":
                    return "%";
                  case "%s":
                    return String(arg);
                  case "%d":
                    return Number(arg);
                  case "%v":
                    return "";
                }
              });
            };
            var makeLine = function(type, obj, location1) {
              var str = obj.format instanceof Function ? obj.format(obj.push ? location1 : location1[obj.name]) : obj.format;
              var args = [
                type + "=" + str
              ];
              if (obj.names) {
                for (var i = 0; i < obj.names.length; i += 1) {
                  var n = obj.names[i];
                  if (obj.name) {
                    args.push(location1[obj.name][n]);
                  } else {
                    args.push(location1[obj.names[i]]);
                  }
                }
              } else {
                args.push(location1[obj.name]);
              }
              return format.apply(null, args);
            };
            var defaultOuterOrder = [
              "v",
              "o",
              "s",
              "i",
              "u",
              "e",
              "p",
              "c",
              "b",
              "t",
              "r",
              "z",
              "a"
            ];
            var defaultInnerOrder = [
              "i",
              "c",
              "b",
              "a"
            ];
            module1.exports = function(session, opts) {
              opts = opts || {};
              if (session.version == null) {
                session.version = 0;
              }
              if (session.name == null) {
                session.name = " ";
              }
              session.media.forEach(function(mLine) {
                if (mLine.payloads == null) {
                  mLine.payloads = "";
                }
              });
              var outerOrder = opts.outerOrder || defaultOuterOrder;
              var innerOrder = opts.innerOrder || defaultInnerOrder;
              var sdp = [];
              outerOrder.forEach(function(type) {
                grammar[type].forEach(function(obj) {
                  if (obj.name in session && session[obj.name] != null) {
                    sdp.push(makeLine(type, obj, session));
                  } else if (obj.push in session && session[obj.push] != null) {
                    session[obj.push].forEach(function(el) {
                      sdp.push(makeLine(type, obj, el));
                    });
                  }
                });
              });
              session.media.forEach(function(mLine) {
                sdp.push(makeLine("m", grammar.m[0], mLine));
                innerOrder.forEach(function(type) {
                  grammar[type].forEach(function(obj) {
                    if (obj.name in mLine && mLine[obj.name] != null) {
                      sdp.push(makeLine(type, obj, mLine));
                    } else if (obj.push in mLine && mLine[obj.push] != null) {
                      mLine[obj.push].forEach(function(el) {
                        sdp.push(makeLine(type, obj, el));
                      });
                    }
                  });
                });
              });
              return sdp.join("\r\n") + "\r\n";
            };
          },
          "./node_modules/socket.io-client/lib/index.js": function(module1, exports1, __webpack_require__) {
            var url = __webpack_require__("./node_modules/socket.io-client/lib/url.js");
            var parser = __webpack_require__("./node_modules/socket.io-parser/index.js");
            var Manager = __webpack_require__("./node_modules/socket.io-client/lib/manager.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("socket.io-client");
            module1.exports = exports1 = lookup;
            var cache = exports1.managers = {};
            function lookup(uri, opts) {
              if (typeof uri === "object") {
                opts = uri;
                uri = void 0;
              }
              opts = opts || {};
              var parsed = url(uri);
              var source = parsed.source;
              var id = parsed.id;
              var path = parsed.path;
              var sameNamespace = cache[id] && path in cache[id].nsps;
              var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
              var io;
              if (newConnection) {
                debug("ignoring socket cache for %s", source);
                io = Manager(source, opts);
              } else {
                if (!cache[id]) {
                  debug("new io instance for %s", source);
                  cache[id] = Manager(source, opts);
                }
                io = cache[id];
              }
              if (parsed.query && !opts.query) {
                opts.query = parsed.query;
              }
              return io.socket(parsed.path, opts);
            }
            exports1.protocol = parser.protocol;
            exports1.connect = lookup;
            exports1.Manager = __webpack_require__("./node_modules/socket.io-client/lib/manager.js");
            exports1.Socket = __webpack_require__("./node_modules/socket.io-client/lib/socket.js");
          },
          "./node_modules/socket.io-client/lib/manager.js": function(module1, exports1, __webpack_require__) {
            var eio = __webpack_require__("./node_modules/engine.io-client/lib/index.js");
            var Socket = __webpack_require__("./node_modules/socket.io-client/lib/socket.js");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            var parser = __webpack_require__("./node_modules/socket.io-parser/index.js");
            var on = __webpack_require__("./node_modules/socket.io-client/lib/on.js");
            var bind = __webpack_require__("./node_modules/component-bind/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("socket.io-client:manager");
            var indexOf = __webpack_require__("./node_modules/indexof/index.js");
            var Backoff = __webpack_require__("./node_modules/backo2/index.js");
            var has = Object.prototype.hasOwnProperty;
            module1.exports = Manager;
            function Manager(uri, opts) {
              if (!(this instanceof Manager))
                return new Manager(uri, opts);
              if (uri && "object" === typeof uri) {
                opts = uri;
                uri = void 0;
              }
              opts = opts || {};
              opts.path = opts.path || "/socket.io";
              this.nsps = {};
              this.subs = [];
              this.opts = opts;
              this.reconnection(opts.reconnection !== false);
              this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
              this.reconnectionDelay(opts.reconnectionDelay || 1e3);
              this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
              this.randomizationFactor(opts.randomizationFactor || 0.5);
              this.backoff = new Backoff({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
              });
              this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
              this.readyState = "closed";
              this.uri = uri;
              this.connecting = [];
              this.lastPing = null;
              this.encoding = false;
              this.packetBuffer = [];
              var _parser = opts.parser || parser;
              this.encoder = new _parser.Encoder();
              this.decoder = new _parser.Decoder();
              this.autoConnect = opts.autoConnect !== false;
              if (this.autoConnect)
                this.open();
            }
            Manager.prototype.emitAll = function() {
              this.emit.apply(this, arguments);
              for (var nsp in this.nsps) {
                if (has.call(this.nsps, nsp)) {
                  this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
                }
              }
            };
            Manager.prototype.updateSocketIds = function() {
              for (var nsp in this.nsps) {
                if (has.call(this.nsps, nsp)) {
                  this.nsps[nsp].id = this.generateId(nsp);
                }
              }
            };
            Manager.prototype.generateId = function(nsp) {
              return (nsp === "/" ? "" : nsp + "#") + this.engine.id;
            };
            Emitter(Manager.prototype);
            Manager.prototype.reconnection = function(v) {
              if (!arguments.length)
                return this._reconnection;
              this._reconnection = !!v;
              return this;
            };
            Manager.prototype.reconnectionAttempts = function(v) {
              if (!arguments.length)
                return this._reconnectionAttempts;
              this._reconnectionAttempts = v;
              return this;
            };
            Manager.prototype.reconnectionDelay = function(v) {
              if (!arguments.length)
                return this._reconnectionDelay;
              this._reconnectionDelay = v;
              this.backoff && this.backoff.setMin(v);
              return this;
            };
            Manager.prototype.randomizationFactor = function(v) {
              if (!arguments.length)
                return this._randomizationFactor;
              this._randomizationFactor = v;
              this.backoff && this.backoff.setJitter(v);
              return this;
            };
            Manager.prototype.reconnectionDelayMax = function(v) {
              if (!arguments.length)
                return this._reconnectionDelayMax;
              this._reconnectionDelayMax = v;
              this.backoff && this.backoff.setMax(v);
              return this;
            };
            Manager.prototype.timeout = function(v) {
              if (!arguments.length)
                return this._timeout;
              this._timeout = v;
              return this;
            };
            Manager.prototype.maybeReconnectOnOpen = function() {
              if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
                this.reconnect();
              }
            };
            Manager.prototype.open = Manager.prototype.connect = function(fn, opts) {
              debug("readyState %s", this.readyState);
              if (~this.readyState.indexOf("open"))
                return this;
              debug("opening %s", this.uri);
              this.engine = eio(this.uri, this.opts);
              var socket = this.engine;
              var self1 = this;
              this.readyState = "opening";
              this.skipReconnect = false;
              var openSub = on(socket, "open", function() {
                self1.onopen();
                fn && fn();
              });
              var errorSub = on(socket, "error", function(data) {
                debug("connect_error");
                self1.cleanup();
                self1.readyState = "closed";
                self1.emitAll("connect_error", data);
                if (fn) {
                  var err = new Error("Connection error");
                  err.data = data;
                  fn(err);
                } else {
                  self1.maybeReconnectOnOpen();
                }
              });
              if (false !== this._timeout) {
                var timeout = this._timeout;
                debug("connect attempt will timeout after %d", timeout);
                if (timeout === 0) {
                  openSub.destroy();
                }
                var timer = setTimeout(function() {
                  debug("connect attempt timed out after %d", timeout);
                  openSub.destroy();
                  socket.close();
                  socket.emit("error", "timeout");
                  self1.emitAll("connect_timeout", timeout);
                }, timeout);
                this.subs.push({
                  destroy: function() {
                    clearTimeout(timer);
                  }
                });
              }
              this.subs.push(openSub);
              this.subs.push(errorSub);
              return this;
            };
            Manager.prototype.onopen = function() {
              debug("open");
              this.cleanup();
              this.readyState = "open";
              this.emit("open");
              var socket = this.engine;
              this.subs.push(on(socket, "data", bind(this, "ondata")));
              this.subs.push(on(socket, "ping", bind(this, "onping")));
              this.subs.push(on(socket, "pong", bind(this, "onpong")));
              this.subs.push(on(socket, "error", bind(this, "onerror")));
              this.subs.push(on(socket, "close", bind(this, "onclose")));
              this.subs.push(on(this.decoder, "decoded", bind(this, "ondecoded")));
            };
            Manager.prototype.onping = function() {
              this.lastPing = new Date();
              this.emitAll("ping");
            };
            Manager.prototype.onpong = function() {
              this.emitAll("pong", new Date() - this.lastPing);
            };
            Manager.prototype.ondata = function(data) {
              this.decoder.add(data);
            };
            Manager.prototype.ondecoded = function(packet) {
              this.emit("packet", packet);
            };
            Manager.prototype.onerror = function(err) {
              debug("error", err);
              this.emitAll("error", err);
            };
            Manager.prototype.socket = function(nsp, opts) {
              var socket = this.nsps[nsp];
              if (!socket) {
                socket = new Socket(this, nsp, opts);
                this.nsps[nsp] = socket;
                var self1 = this;
                socket.on("connecting", onConnecting);
                socket.on("connect", function() {
                  socket.id = self1.generateId(nsp);
                });
                if (this.autoConnect) {
                  onConnecting();
                }
              }
              function onConnecting() {
                if (!~indexOf(self1.connecting, socket)) {
                  self1.connecting.push(socket);
                }
              }
              return socket;
            };
            Manager.prototype.destroy = function(socket) {
              var index = indexOf(this.connecting, socket);
              if (~index)
                this.connecting.splice(index, 1);
              if (this.connecting.length)
                return;
              this.close();
            };
            Manager.prototype.packet = function(packet) {
              debug("writing packet %j", packet);
              var self1 = this;
              if (packet.query && packet.type === 0)
                packet.nsp += "?" + packet.query;
              if (!self1.encoding) {
                self1.encoding = true;
                this.encoder.encode(packet, function(encodedPackets) {
                  for (var i = 0; i < encodedPackets.length; i++) {
                    self1.engine.write(encodedPackets[i], packet.options);
                  }
                  self1.encoding = false;
                  self1.processPacketQueue();
                });
              } else {
                self1.packetBuffer.push(packet);
              }
            };
            Manager.prototype.processPacketQueue = function() {
              if (this.packetBuffer.length > 0 && !this.encoding) {
                var pack = this.packetBuffer.shift();
                this.packet(pack);
              }
            };
            Manager.prototype.cleanup = function() {
              debug("cleanup");
              var subsLength = this.subs.length;
              for (var i = 0; i < subsLength; i++) {
                var sub = this.subs.shift();
                sub.destroy();
              }
              this.packetBuffer = [];
              this.encoding = false;
              this.lastPing = null;
              this.decoder.destroy();
            };
            Manager.prototype.close = Manager.prototype.disconnect = function() {
              debug("disconnect");
              this.skipReconnect = true;
              this.reconnecting = false;
              if ("opening" === this.readyState) {
                this.cleanup();
              }
              this.backoff.reset();
              this.readyState = "closed";
              if (this.engine)
                this.engine.close();
            };
            Manager.prototype.onclose = function(reason) {
              debug("onclose");
              this.cleanup();
              this.backoff.reset();
              this.readyState = "closed";
              this.emit("close", reason);
              if (this._reconnection && !this.skipReconnect) {
                this.reconnect();
              }
            };
            Manager.prototype.reconnect = function() {
              if (this.reconnecting || this.skipReconnect)
                return this;
              var self1 = this;
              if (this.backoff.attempts >= this._reconnectionAttempts) {
                debug("reconnect failed");
                this.backoff.reset();
                this.emitAll("reconnect_failed");
                this.reconnecting = false;
              } else {
                var delay = this.backoff.duration();
                debug("will wait %dms before reconnect attempt", delay);
                this.reconnecting = true;
                var timer = setTimeout(function() {
                  if (self1.skipReconnect)
                    return;
                  debug("attempting reconnect");
                  self1.emitAll("reconnect_attempt", self1.backoff.attempts);
                  self1.emitAll("reconnecting", self1.backoff.attempts);
                  if (self1.skipReconnect)
                    return;
                  self1.open(function(err) {
                    if (err) {
                      debug("reconnect attempt error");
                      self1.reconnecting = false;
                      self1.reconnect();
                      self1.emitAll("reconnect_error", err.data);
                    } else {
                      debug("reconnect success");
                      self1.onreconnect();
                    }
                  });
                }, delay);
                this.subs.push({
                  destroy: function() {
                    clearTimeout(timer);
                  }
                });
              }
            };
            Manager.prototype.onreconnect = function() {
              var attempt = this.backoff.attempts;
              this.reconnecting = false;
              this.backoff.reset();
              this.updateSocketIds();
              this.emitAll("reconnect", attempt);
            };
          },
          "./node_modules/socket.io-client/lib/on.js": function(module1, exports1) {
            module1.exports = on;
            function on(obj, ev, fn) {
              obj.on(ev, fn);
              return {
                destroy: function() {
                  obj.removeListener(ev, fn);
                }
              };
            }
          },
          "./node_modules/socket.io-client/lib/socket.js": function(module1, exports1, __webpack_require__) {
            var parser = __webpack_require__("./node_modules/socket.io-parser/index.js");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            var toArray = __webpack_require__("./node_modules/to-array/index.js");
            var on = __webpack_require__("./node_modules/socket.io-client/lib/on.js");
            var bind = __webpack_require__("./node_modules/component-bind/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("socket.io-client:socket");
            var parseqs = __webpack_require__("./node_modules/parseqs/index.js");
            var hasBin = __webpack_require__("./node_modules/has-binary2/index.js");
            module1.exports = exports1 = Socket;
            var events = {
              connect: 1,
              connect_error: 1,
              connect_timeout: 1,
              connecting: 1,
              disconnect: 1,
              error: 1,
              reconnect: 1,
              reconnect_attempt: 1,
              reconnect_failed: 1,
              reconnect_error: 1,
              reconnecting: 1,
              ping: 1,
              pong: 1
            };
            var emit = Emitter.prototype.emit;
            function Socket(io, nsp, opts) {
              this.io = io;
              this.nsp = nsp;
              this.json = this;
              this.ids = 0;
              this.acks = {};
              this.receiveBuffer = [];
              this.sendBuffer = [];
              this.connected = false;
              this.disconnected = true;
              this.flags = {};
              if (opts && opts.query) {
                this.query = opts.query;
              }
              if (this.io.autoConnect)
                this.open();
            }
            Emitter(Socket.prototype);
            Socket.prototype.subEvents = function() {
              if (this.subs)
                return;
              var io = this.io;
              this.subs = [
                on(io, "open", bind(this, "onopen")),
                on(io, "packet", bind(this, "onpacket")),
                on(io, "close", bind(this, "onclose"))
              ];
            };
            Socket.prototype.open = Socket.prototype.connect = function() {
              if (this.connected)
                return this;
              this.subEvents();
              if (!this.io.reconnecting)
                this.io.open();
              if ("open" === this.io.readyState)
                this.onopen();
              this.emit("connecting");
              return this;
            };
            Socket.prototype.send = function() {
              var args = toArray(arguments);
              args.unshift("message");
              this.emit.apply(this, args);
              return this;
            };
            Socket.prototype.emit = function(ev) {
              if (events.hasOwnProperty(ev)) {
                emit.apply(this, arguments);
                return this;
              }
              var args = toArray(arguments);
              var packet = {
                type: (this.flags.binary !== void 0 ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
                data: args
              };
              packet.options = {};
              packet.options.compress = !this.flags || false !== this.flags.compress;
              if ("function" === typeof args[args.length - 1]) {
                debug("emitting packet with ack id %d", this.ids);
                this.acks[this.ids] = args.pop();
                packet.id = this.ids++;
              }
              if (this.connected) {
                this.packet(packet);
              } else {
                this.sendBuffer.push(packet);
              }
              this.flags = {};
              return this;
            };
            Socket.prototype.packet = function(packet) {
              packet.nsp = this.nsp;
              this.io.packet(packet);
            };
            Socket.prototype.onopen = function() {
              debug("transport is open - connecting");
              if ("/" !== this.nsp) {
                if (this.query) {
                  var query = typeof this.query === "object" ? parseqs.encode(this.query) : this.query;
                  debug("sending connect packet with query %s", query);
                  this.packet({
                    type: parser.CONNECT,
                    query
                  });
                } else {
                  this.packet({
                    type: parser.CONNECT
                  });
                }
              }
            };
            Socket.prototype.onclose = function(reason) {
              debug("close (%s)", reason);
              this.connected = false;
              this.disconnected = true;
              delete this.id;
              this.emit("disconnect", reason);
            };
            Socket.prototype.onpacket = function(packet) {
              var sameNamespace = packet.nsp === this.nsp;
              var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === "/";
              if (!sameNamespace && !rootNamespaceError)
                return;
              switch (packet.type) {
                case parser.CONNECT:
                  this.onconnect();
                  break;
                case parser.EVENT:
                  this.onevent(packet);
                  break;
                case parser.BINARY_EVENT:
                  this.onevent(packet);
                  break;
                case parser.ACK:
                  this.onack(packet);
                  break;
                case parser.BINARY_ACK:
                  this.onack(packet);
                  break;
                case parser.DISCONNECT:
                  this.ondisconnect();
                  break;
                case parser.ERROR:
                  this.emit("error", packet.data);
                  break;
              }
            };
            Socket.prototype.onevent = function(packet) {
              var args = packet.data || [];
              debug("emitting event %j", args);
              if (null != packet.id) {
                debug("attaching ack callback to event");
                args.push(this.ack(packet.id));
              }
              if (this.connected) {
                emit.apply(this, args);
              } else {
                this.receiveBuffer.push(args);
              }
            };
            Socket.prototype.ack = function(id) {
              var self1 = this;
              var sent = false;
              return function() {
                if (sent)
                  return;
                sent = true;
                var args = toArray(arguments);
                debug("sending ack %j", args);
                self1.packet({
                  type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
                  id,
                  data: args
                });
              };
            };
            Socket.prototype.onack = function(packet) {
              var ack = this.acks[packet.id];
              if ("function" === typeof ack) {
                debug("calling ack %s with %j", packet.id, packet.data);
                ack.apply(this, packet.data);
                delete this.acks[packet.id];
              } else {
                debug("bad ack %s", packet.id);
              }
            };
            Socket.prototype.onconnect = function() {
              this.connected = true;
              this.disconnected = false;
              this.emitBuffered();
              this.emit("connect");
            };
            Socket.prototype.emitBuffered = function() {
              var i;
              for (i = 0; i < this.receiveBuffer.length; i++) {
                emit.apply(this, this.receiveBuffer[i]);
              }
              this.receiveBuffer = [];
              for (i = 0; i < this.sendBuffer.length; i++) {
                this.packet(this.sendBuffer[i]);
              }
              this.sendBuffer = [];
            };
            Socket.prototype.ondisconnect = function() {
              debug("server disconnect (%s)", this.nsp);
              this.destroy();
              this.onclose("io server disconnect");
            };
            Socket.prototype.destroy = function() {
              if (this.subs) {
                for (var i = 0; i < this.subs.length; i++) {
                  this.subs[i].destroy();
                }
                this.subs = null;
              }
              this.io.destroy(this);
            };
            Socket.prototype.close = Socket.prototype.disconnect = function() {
              if (this.connected) {
                debug("performing disconnect (%s)", this.nsp);
                this.packet({
                  type: parser.DISCONNECT
                });
              }
              this.destroy();
              if (this.connected) {
                this.onclose("io client disconnect");
              }
              return this;
            };
            Socket.prototype.compress = function(compress) {
              this.flags.compress = compress;
              return this;
            };
            Socket.prototype.binary = function(binary) {
              this.flags.binary = binary;
              return this;
            };
          },
          "./node_modules/socket.io-client/lib/url.js": function(module1, exports1, __webpack_require__) {
            var parseuri = __webpack_require__("./node_modules/parseuri/index.js");
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("socket.io-client:url");
            module1.exports = url;
            function url(uri, loc) {
              var obj = uri;
              loc = loc || typeof location !== "undefined" && location;
              if (null == uri)
                uri = loc.protocol + "//" + loc.host;
              if ("string" === typeof uri) {
                if ("/" === uri.charAt(0)) {
                  if ("/" === uri.charAt(1)) {
                    uri = loc.protocol + uri;
                  } else {
                    uri = loc.host + uri;
                  }
                }
                if (!/^(https?|wss?):\/\//.test(uri)) {
                  debug("protocol-less url %s", uri);
                  if ("undefined" !== typeof loc) {
                    uri = loc.protocol + "//" + uri;
                  } else {
                    uri = "https://" + uri;
                  }
                }
                debug("parse %s", uri);
                obj = parseuri(uri);
              }
              if (!obj.port) {
                if (/^(http|ws)$/.test(obj.protocol)) {
                  obj.port = "80";
                } else if (/^(http|ws)s$/.test(obj.protocol)) {
                  obj.port = "443";
                }
              }
              obj.path = obj.path || "/";
              var ipv6 = obj.host.indexOf(":") !== -1;
              var host = ipv6 ? "[" + obj.host + "]" : obj.host;
              obj.id = obj.protocol + "://" + host + ":" + obj.port;
              obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
              return obj;
            }
          },
          "./node_modules/socket.io-parser/binary.js": function(module1, exports1, __webpack_require__) {
            var isArray = __webpack_require__("./node_modules/isarray/index.js");
            var isBuf = __webpack_require__("./node_modules/socket.io-parser/is-buffer.js");
            var toString = Object.prototype.toString;
            var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
            var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
            exports1.deconstructPacket = function(packet) {
              var buffers = [];
              var packetData = packet.data;
              var pack = packet;
              pack.data = _deconstructPacket(packetData, buffers);
              pack.attachments = buffers.length;
              return {
                packet: pack,
                buffers
              };
            };
            function _deconstructPacket(data, buffers) {
              if (!data)
                return data;
              if (isBuf(data)) {
                var placeholder = {
                  _placeholder: true,
                  num: buffers.length
                };
                buffers.push(data);
                return placeholder;
              } else if (isArray(data)) {
                var newData = new Array(data.length);
                for (var i = 0; i < data.length; i++) {
                  newData[i] = _deconstructPacket(data[i], buffers);
                }
                return newData;
              } else if (typeof data === "object" && !(data instanceof Date)) {
                var newData = {};
                for (var key in data) {
                  newData[key] = _deconstructPacket(data[key], buffers);
                }
                return newData;
              }
              return data;
            }
            exports1.reconstructPacket = function(packet, buffers) {
              packet.data = _reconstructPacket(packet.data, buffers);
              packet.attachments = void 0;
              return packet;
            };
            function _reconstructPacket(data, buffers) {
              if (!data)
                return data;
              if (data && data._placeholder) {
                return buffers[data.num];
              } else if (isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                  data[i] = _reconstructPacket(data[i], buffers);
                }
              } else if (typeof data === "object") {
                for (var key in data) {
                  data[key] = _reconstructPacket(data[key], buffers);
                }
              }
              return data;
            }
            exports1.removeBlobs = function(data, callback) {
              function _removeBlobs(obj, curKey, containingObject) {
                if (!obj)
                  return obj;
                if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
                  pendingBlobs++;
                  var fileReader = new FileReader();
                  fileReader.onload = function() {
                    if (containingObject) {
                      containingObject[curKey] = this.result;
                    } else {
                      bloblessData = this.result;
                    }
                    if (!--pendingBlobs) {
                      callback(bloblessData);
                    }
                  };
                  fileReader.readAsArrayBuffer(obj);
                } else if (isArray(obj)) {
                  for (var i = 0; i < obj.length; i++) {
                    _removeBlobs(obj[i], i, obj);
                  }
                } else if (typeof obj === "object" && !isBuf(obj)) {
                  for (var key in obj) {
                    _removeBlobs(obj[key], key, obj);
                  }
                }
              }
              var pendingBlobs = 0;
              var bloblessData = data;
              _removeBlobs(bloblessData);
              if (!pendingBlobs) {
                callback(bloblessData);
              }
            };
          },
          "./node_modules/socket.io-parser/index.js": function(module1, exports1, __webpack_require__) {
            var debug = __webpack_require__("./node_modules/debug/src/browser.js")("socket.io-parser");
            var Emitter = __webpack_require__("./node_modules/component-emitter/index.js");
            var binary = __webpack_require__("./node_modules/socket.io-parser/binary.js");
            var isArray = __webpack_require__("./node_modules/isarray/index.js");
            var isBuf = __webpack_require__("./node_modules/socket.io-parser/is-buffer.js");
            exports1.protocol = 4;
            exports1.types = [
              "CONNECT",
              "DISCONNECT",
              "EVENT",
              "ACK",
              "ERROR",
              "BINARY_EVENT",
              "BINARY_ACK"
            ];
            exports1.CONNECT = 0;
            exports1.DISCONNECT = 1;
            exports1.EVENT = 2;
            exports1.ACK = 3;
            exports1.ERROR = 4;
            exports1.BINARY_EVENT = 5;
            exports1.BINARY_ACK = 6;
            exports1.Encoder = Encoder;
            exports1.Decoder = Decoder;
            function Encoder() {
            }
            var ERROR_PACKET = exports1.ERROR + '"encode error"';
            Encoder.prototype.encode = function(obj, callback) {
              debug("encoding packet %j", obj);
              if (exports1.BINARY_EVENT === obj.type || exports1.BINARY_ACK === obj.type) {
                encodeAsBinary(obj, callback);
              } else {
                var encoding = encodeAsString(obj);
                callback([
                  encoding
                ]);
              }
            };
            function encodeAsString(obj) {
              var str = "" + obj.type;
              if (exports1.BINARY_EVENT === obj.type || exports1.BINARY_ACK === obj.type) {
                str += obj.attachments + "-";
              }
              if (obj.nsp && "/" !== obj.nsp) {
                str += obj.nsp + ",";
              }
              if (null != obj.id) {
                str += obj.id;
              }
              if (null != obj.data) {
                var payload = tryStringify(obj.data);
                if (payload !== false) {
                  str += payload;
                } else {
                  return ERROR_PACKET;
                }
              }
              debug("encoded %j as %s", obj, str);
              return str;
            }
            function tryStringify(str) {
              try {
                return JSON.stringify(str);
              } catch (e) {
                return false;
              }
            }
            function encodeAsBinary(obj, callback) {
              function writeEncoding(bloblessData) {
                var deconstruction = binary.deconstructPacket(bloblessData);
                var pack = encodeAsString(deconstruction.packet);
                var buffers = deconstruction.buffers;
                buffers.unshift(pack);
                callback(buffers);
              }
              binary.removeBlobs(obj, writeEncoding);
            }
            function Decoder() {
              this.reconstructor = null;
            }
            Emitter(Decoder.prototype);
            Decoder.prototype.add = function(obj) {
              var packet;
              if (typeof obj === "string") {
                packet = decodeString(obj);
                if (exports1.BINARY_EVENT === packet.type || exports1.BINARY_ACK === packet.type) {
                  this.reconstructor = new BinaryReconstructor(packet);
                  if (this.reconstructor.reconPack.attachments === 0) {
                    this.emit("decoded", packet);
                  }
                } else {
                  this.emit("decoded", packet);
                }
              } else if (isBuf(obj) || obj.base64) {
                if (!this.reconstructor) {
                  throw new Error("got binary data when not reconstructing a packet");
                } else {
                  packet = this.reconstructor.takeBinaryData(obj);
                  if (packet) {
                    this.reconstructor = null;
                    this.emit("decoded", packet);
                  }
                }
              } else {
                throw new Error("Unknown type: " + obj);
              }
            };
            function decodeString(str) {
              var i = 0;
              var p = {
                type: Number(str.charAt(0))
              };
              if (null == exports1.types[p.type]) {
                return error("unknown packet type " + p.type);
              }
              if (exports1.BINARY_EVENT === p.type || exports1.BINARY_ACK === p.type) {
                var start = i + 1;
                while (str.charAt(++i) !== "-" && i != str.length) {
                }
                var buf = str.substring(start, i);
                if (buf != Number(buf) || str.charAt(i) !== "-") {
                  throw new Error("Illegal attachments");
                }
                p.attachments = Number(buf);
              }
              if ("/" === str.charAt(i + 1)) {
                var start = i + 1;
                while (++i) {
                  var c = str.charAt(i);
                  if ("," === c)
                    break;
                  if (i === str.length)
                    break;
                }
                p.nsp = str.substring(start, i);
              } else {
                p.nsp = "/";
              }
              var next = str.charAt(i + 1);
              if ("" !== next && Number(next) == next) {
                var start = i + 1;
                while (++i) {
                  var c = str.charAt(i);
                  if (null == c || Number(c) != c) {
                    --i;
                    break;
                  }
                  if (i === str.length)
                    break;
                }
                p.id = Number(str.substring(start, i + 1));
              }
              if (str.charAt(++i)) {
                var payload = tryParse(str.substr(i));
                var isPayloadValid = payload !== false && (p.type === exports1.ERROR || isArray(payload));
                if (isPayloadValid) {
                  p.data = payload;
                } else {
                  return error("invalid payload");
                }
              }
              debug("decoded %s as %j", str, p);
              return p;
            }
            function tryParse(str) {
              try {
                return JSON.parse(str);
              } catch (e) {
                return false;
              }
            }
            Decoder.prototype.destroy = function() {
              if (this.reconstructor) {
                this.reconstructor.finishedReconstruction();
              }
            };
            function BinaryReconstructor(packet) {
              this.reconPack = packet;
              this.buffers = [];
            }
            BinaryReconstructor.prototype.takeBinaryData = function(binData) {
              this.buffers.push(binData);
              if (this.buffers.length === this.reconPack.attachments) {
                var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                this.finishedReconstruction();
                return packet;
              }
              return null;
            };
            BinaryReconstructor.prototype.finishedReconstruction = function() {
              this.reconPack = null;
              this.buffers = [];
            };
            function error(msg) {
              return {
                type: exports1.ERROR,
                data: "parser error: " + msg
              };
            }
          },
          "./node_modules/socket.io-parser/is-buffer.js": function(module1, exports1, __webpack_require__) {
            (function(Buffer2) {
              module1.exports = isBuf;
              var withNativeBuffer = typeof Buffer2 === "function" && typeof Buffer2.isBuffer === "function";
              var withNativeArrayBuffer = typeof ArrayBuffer === "function";
              var isView = function(obj) {
                return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
              };
              function isBuf(obj) {
                return withNativeBuffer && Buffer2.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
              }
            }).call(this, __webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer);
          },
          "./node_modules/split-on-first/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            module1.exports = (string, separator) => {
              if (!(typeof string === "string" && typeof separator === "string")) {
                throw new TypeError("Expected the arguments to be of type `string`");
              }
              if (separator === "") {
                return [
                  string
                ];
              }
              const separatorIndex = string.indexOf(separator);
              if (separatorIndex === -1) {
                return [
                  string
                ];
              }
              return [
                string.slice(0, separatorIndex),
                string.slice(separatorIndex + separator.length)
              ];
            };
          },
          "./node_modules/strict-uri-encode/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            module1.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
          },
          "./node_modules/to-array/index.js": function(module1, exports1) {
            module1.exports = toArray;
            function toArray(list, index) {
              var array = [];
              index = index || 0;
              for (var i = index || 0; i < list.length; i++) {
                array[i - index] = list[i];
              }
              return array;
            }
          },
          "./node_modules/webpack/buildin/global.js": function(module1, exports1) {
            var g;
            g = function() {
              return this;
            }();
            try {
              g = g || new Function("return this")();
            } catch (e) {
              if (typeof window === "object")
                g = window;
            }
            module1.exports = g;
          },
          "./node_modules/yeast/index.js": function(module1, exports1, __webpack_require__) {
            "use strict";
            var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {}, seed = 0, i = 0, prev;
            function encode(num) {
              var encoded = "";
              do {
                encoded = alphabet[num % length] + encoded;
                num = Math.floor(num / length);
              } while (num > 0);
              return encoded;
            }
            function decode(str) {
              var decoded = 0;
              for (i = 0; i < str.length; i++) {
                decoded = decoded * length + map[str.charAt(i)];
              }
              return decoded;
            }
            function yeast() {
              var now = encode(+new Date());
              if (now !== prev)
                return seed = 0, prev = now;
              return now + "." + encode(seed++);
            }
            for (; i < length; i++)
              map[alphabet[i]] = i;
            yeast.encode = encode;
            yeast.decode = decode;
            module1.exports = yeast;
          },
          "./package.json": function(module1) {
            module1.exports = JSON.parse('{"name":"skyway-js","version":"4.4.5","description":"The official JavaScript SDK for SkyWay","main":"dist/skyway.js","types":"skyway-js.d.ts","scripts":{"test":"karma start ./karma.conf.js","clean":"del ./dist","lint":"eslint .","build":"NODE_ENV=production webpack","dev":"webpack -w"},"repository":{"type":"git","url":"git+https://github.com/skyway/skyway-js-sdk"},"files":["dist/skyway.js","skyway-js.d.ts","LICENSE","CHANGELOG.md","README.md"],"author":"NTT Communications Corp.","license":"Apache-2.0","devDependencies":{"babel-loader":"7.1.5","babel-plugin-espower":"2.4.0","babel-plugin-istanbul":"4.1.6","babel-preset-es2015":"^6.24.1","del-cli":"^2.0.0","eslint":"^6.1.0","eslint-config-prettier":"^6.0.0","eslint-plugin-prettier":"^3.1.0","inject-loader":"^4.0.1","karma":"^4.2.0","karma-chrome-launcher":"^3.0.0","karma-coverage":"^1.1.2","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^4.0.2","mocha":"^6.2.0","power-assert":"^1.6.1","prettier":"^1.18.2","sinon":"^7.3.2","webpack":"^4.38.0","webpack-cli":"^3.3.6"},"dependencies":{"@jitsi/sdp-interop":"^0.1.13","@types/node":"^12.6.8","detect-browser":"^4.6.0","enum":"^3.0.4","events":"^3.0.0","js-binarypack":"0.0.9","object-sizeof":"^1.4.0","query-string":"^6.8.2","sdp-transform":"^2.11.0","socket.io-client":"^2.2.0","socket.io-parser":"~3.3.0"}}');
          },
          "./src/peer.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var events = __webpack_require__("./node_modules/events/events.js");
            var events_default = /* @__PURE__ */ __webpack_require__.n(events);
            var lib_enum = __webpack_require__("./node_modules/enum/lib/enum.js");
            var lib = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
            var lib_default = /* @__PURE__ */ __webpack_require__.n(lib);
            var query_string = __webpack_require__("./node_modules/query-string/index.js");
            var query_string_default = /* @__PURE__ */ __webpack_require__.n(query_string);
            const DISPATCHER_HOST = "dispatcher.webrtc.ecl.ntt.com";
            const DISPATCHER_PORT = 443;
            const DISPATCHER_SECURE = true;
            const DISPATCHER_TIMEOUT = 1e4;
            const TURN_HOST = "turn.webrtc.ecl.ntt.com";
            const TURN_PORT = 443;
            const MESSAGE_TYPES = {
              CLIENT: new lib_enum["default"]([
                "SEND_OFFER",
                "SEND_ANSWER",
                "SEND_CANDIDATE",
                "SEND_LEAVE",
                "ROOM_JOIN",
                "ROOM_LEAVE",
                "ROOM_GET_LOGS",
                "ROOM_GET_USERS",
                "ROOM_SEND_DATA",
                "SFU_GET_OFFER",
                "SFU_ANSWER",
                "SFU_CANDIDATE",
                "PING",
                "UPDATE_CREDENTIAL",
                "SEND_FORCE_CLOSE"
              ]),
              SERVER: new lib_enum["default"]([
                "OPEN",
                "ERROR",
                "OFFER",
                "ANSWER",
                "CANDIDATE",
                "LEAVE",
                "AUTH_EXPIRES_IN",
                "ROOM_LOGS",
                "ROOM_USERS",
                "ROOM_DATA",
                "ROOM_USER_JOIN",
                "ROOM_USER_LEAVE",
                "SFU_OFFER",
                "FORCE_CLOSE"
              ])
            };
            const maxChunkSize = 16300;
            const config_maxDataSize = 20 * 1024 * 1024;
            const minBroadcastIntervalMs = 100;
            const maxNumberOfAttempts = 10;
            const reconnectionAttempts = 2;
            const numberServersToTry = 3;
            const config_sendInterval = 1;
            const pingInterval = 25e3;
            const defaultConfig = {
              iceServers: [
                {
                  urls: "stun:stun.webrtc.ecl.ntt.com:3478",
                  url: "stun:stun.webrtc.ecl.ntt.com:3478"
                }
              ],
              iceTransportPolicy: "all"
            };
            var config = {
              DISPATCHER_HOST,
              DISPATCHER_PORT,
              DISPATCHER_SECURE,
              DISPATCHER_TIMEOUT,
              TURN_HOST,
              TURN_PORT,
              MESSAGE_TYPES,
              maxChunkSize,
              maxDataSize: config_maxDataSize,
              minBroadcastIntervalMs,
              maxNumberOfAttempts,
              reconnectionAttempts,
              numberServersToTry,
              sendInterval: config_sendInterval,
              pingInterval,
              defaultConfig
            };
            const LOG_PREFIX = "SkyWay: ";
            const LogLevel = new lib_enum["default"]({
              NONE: 0,
              ERROR: 1,
              WARN: 2,
              FULL: 3
            });
            class Logger {
              setLogLevel(level) {
                if (level.value) {
                  level = level.value;
                }
                const debugLevel = parseInt(level, 10);
                switch (debugLevel) {
                  case 0:
                    this._logLevel = LogLevel.NONE.value;
                    break;
                  case 1:
                    this._logLevel = LogLevel.ERROR.value;
                    break;
                  case 2:
                    this._logLevel = LogLevel.WARN.value;
                    break;
                  case 3:
                    this._logLevel = LogLevel.FULL.value;
                    break;
                  default:
                    this._logLevel = LogLevel.NONE.value;
                    break;
                }
              }
              warn(...args) {
                if (this._logLevel >= LogLevel.WARN.value) {
                  console.warn(LOG_PREFIX, ...args);
                }
              }
              error(...args) {
                if (this._logLevel >= LogLevel.ERROR.value) {
                  console.error(LOG_PREFIX, ...args);
                }
              }
              log(...args) {
                if (this._logLevel >= LogLevel.FULL.value) {
                  console.log(LOG_PREFIX, ...args);
                }
              }
              constructor() {
                this._logLevel = LogLevel.NONE.value;
                this.LOG_LEVELS = LogLevel;
              }
            }
            var logger = new Logger();
            var detect_browser = __webpack_require__("./node_modules/detect-browser/index.js");
            function validateId(id) {
              return !id || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(id);
            }
            function validateKey(key) {
              return !key || /^[a-z0-9]{8}(-[a-z0-9]{4}){3}-[a-z0-9]{12}$/.exec(key);
            }
            function randomId() {
              const keyLength = 16;
              const randString = Math.random().toString(36) + "0000000000000000000";
              return randString.substr(2, keyLength);
            }
            function randomToken() {
              return Math.random().toString(36).substr(2);
            }
            function joinArrayBuffers(buffers) {
              const size = buffers.reduce((sum, buffer) => {
                return sum + buffer.byteLength;
              }, 0);
              const tmpArray = new Uint8Array(size);
              let currPos = 0;
              for (const buffer of buffers) {
                tmpArray.set(new Uint8Array(buffer), currPos);
                currPos += buffer.byteLength;
              }
              return tmpArray.buffer;
            }
            function blobToArrayBuffer(blob, cb) {
              const fr = new FileReader();
              fr.onload = (event) => {
                cb(event.target.result);
              };
              fr.readAsArrayBuffer(blob);
            }
            function isSecure() {
              return location.protocol === "https:";
            }
            function detectBrowser() {
              const { name, version } = Object(detect_browser["detect"])();
              const [major, minor, patch] = version.split(".").map((i) => parseInt(i));
              return {
                name,
                major,
                minor,
                patch
              };
            }
            function isPlanBSafari() {
              const { name } = Object(detect_browser["detect"])();
              if (!(name === "safari" || name === "ios")) {
                return false;
              }
              if (RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")) {
                return false;
              }
              return true;
            }
            var util = {
              validateId,
              validateKey,
              randomId,
              randomToken,
              joinArrayBuffers,
              blobToArrayBuffer,
              isSecure,
              detectBrowser,
              isPlanBSafari
            };
            var package_0 = __webpack_require__("./package.json");
            class socket_Socket extends events_default.a {
              get isOpen() {
                return Boolean(this._io && this._io.connected && this._isOpen);
              }
              async start(id, token, credential) {
                let query = `apiKey=${this._key}&token=${token}&platform=javascript&sdk_version=${package_0["version"]}`;
                if (id) {
                  query += `&peerId=${id}`;
                  this._isPeerIdSet = true;
                }
                if (credential) {
                  const encodedCredentialStr = encodeURIComponent(JSON.stringify(credential));
                  query += `&credential=${encodedCredentialStr}`;
                }
                if (this._dispatcherUrl) {
                  try {
                    this.signalingServerUrl = await this._fetchSignalingServerUrlWithRetry();
                  } catch (err) {
                    this.emit("error", err);
                    return;
                  }
                }
                const brower = util.detectBrowser();
                const isSafari15OrOver = (brower.name === "ios" || brower.name === "safari") && brower.major >= 15;
                const transports = isSafari15OrOver ? [
                  "polling"
                ] : [
                  "polling",
                  "websocket"
                ];
                this._io = lib_default()(this.signalingServerUrl, {
                  "force new connection": true,
                  query,
                  reconnectionAttempts: config.reconnectionAttempts,
                  transports
                });
                this._io.on("reconnect_failed", () => {
                  this._stopPings();
                  this._connectToNewServer();
                });
                this._io.on("error", (e) => {
                  logger.error(e);
                });
                this._setupMessageHandlers();
              }
              async _connectToNewServer() {
                if (this._reconnectAttempts >= config.numberServersToTry) {
                  this.emit("error", "Could not connect to server.");
                  return;
                }
                try {
                  this.signalingServerUrl = await this._fetchSignalingServerUrlWithRetry();
                } catch (err) {
                  this.emit("error", err);
                  return;
                }
                this._io.io.uri = this.signalingServerUrl;
                this._io.connect();
                this._reconnectAttempts++;
              }
              async _fetchSignalingServerUrlWithRetry() {
                for (let attempts = 0; attempts < config.maxNumberOfAttempts; attempts++) {
                  const serverInfo = await this._fetchSignalingServer().catch((err) => {
                    logger.warn(err);
                  });
                  if (serverInfo && serverInfo.port && serverInfo.host && (!this.signalingServerUrl || this.signalingServerUrl.indexOf(serverInfo.host) === -1)) {
                    const httpProtocol = serverInfo.secure ? "https://" : "http://";
                    return `${httpProtocol}${serverInfo.host}:${serverInfo.port}`;
                  }
                }
                throw new Error("Could not get signaling server url.");
              }
              _fetchSignalingServer() {
                return new Promise((resolve, reject) => {
                  const http = new XMLHttpRequest();
                  http.timeout = config.DISPATCHER_TIMEOUT;
                  http.open("GET", this._dispatcherUrl, true);
                  http.onerror = () => {
                    reject(new Error("There was a problem with the request for the dispatcher. Check your peer options and network connections."));
                  };
                  http.onabort = () => {
                    reject(new Error("The request for the dispatcher was aborted."));
                  };
                  http.ontimeout = () => {
                    reject(new Error("The request for the dispatcher timed out. Check your firewall, network speed, SkyWay failure information"));
                  };
                  http.onload = () => {
                    if (http.status !== 200) {
                      reject(new Error("Connection failed. Unexpected response: " + http.status));
                      return;
                    }
                    try {
                      const res = JSON.parse(http.responseText);
                      if (res && res.domain) {
                        resolve({
                          host: res.domain,
                          port: 443,
                          secure: true
                        });
                        return;
                      }
                      reject(new Error("The dispatcher server returned an invalid JSON response. have no signaling server domain in JSON."));
                    } catch (err) {
                      reject(new Error("The dispatcher server returned an invalid JSON response."));
                    }
                  };
                  http.send(null);
                });
              }
              send(type, message) {
                if (!type) {
                  this._io.emit("error", "Invalid message");
                  return;
                }
                if (!this.isOpen) {
                  this._queue.push({
                    type,
                    message
                  });
                  return;
                }
                if (this._io.connected === true) {
                  this._io.emit(type, message);
                }
              }
              close() {
                if (this.isOpen) {
                  this._stopPings();
                  this._io.disconnect();
                  this._isOpen = false;
                }
              }
              reconnect() {
                this._io.connect();
              }
              updateCredential(newCredential) {
                const parseQuery = query_string_default.a.parse(this._io.io.opts.query);
                if (parseQuery.credential) {
                  parseQuery.credential = encodeURIComponent(JSON.stringify(newCredential));
                } else {
                  logger.warn("Adding a credential when one wasn't specified before.");
                }
                this._io.io.opts.query = query_string_default.a.stringify(parseQuery);
                this.send(config.MESSAGE_TYPES.CLIENT.UPDATE_CREDENTIAL.key, newCredential);
              }
              _setupMessageHandlers() {
                config.MESSAGE_TYPES.SERVER.enums.forEach((type) => {
                  if (type.key === config.MESSAGE_TYPES.SERVER.OPEN.key) {
                    this._io.on(type.key, (openMessage) => {
                      if (!openMessage || !openMessage.peerId) {
                        return;
                      }
                      if (!this._isPeerIdSet) {
                        this._io.io.opts.query += `&peerId=${openMessage.peerId}`;
                        this._isPeerIdSet = true;
                      }
                      this._reconnectAttempts = 0;
                      this._startPings();
                      this._sendQueuedMessages();
                      if (!this._isOpen) {
                        this._isOpen = true;
                        this.emit(type.key, openMessage);
                      }
                    });
                  } else {
                    this._io.on(type.key, (message) => {
                      this.emit(type.key, message);
                    });
                  }
                });
              }
              _sendQueuedMessages() {
                for (const data of this._queue) {
                  this.send(data.type, data.message);
                }
                this._queue = [];
              }
              _startPings() {
                if (!this._pingIntervalId) {
                  this._pingIntervalId = setInterval(() => {
                    this.send(config.MESSAGE_TYPES.CLIENT.PING.key);
                  }, config.pingInterval);
                }
              }
              _stopPings() {
                clearInterval(this._pingIntervalId);
                this._pingIntervalId = void 0;
              }
              constructor(key, options) {
                super();
                this._isOpen = false;
                this._isPeerIdSet = false;
                this._queue = [];
                this._io = null;
                this._key = key;
                this._reconnectAttempts = 0;
                if (options.host && options.port) {
                  const httpProtocol = options.secure ? "https://" : "http://";
                  this.signalingServerUrl = `${httpProtocol}${options.host}:${options.port}`;
                } else {
                  const dispatcherHost = options.dispatcherHost || config.DISPATCHER_HOST;
                  const dispatcherPort = options.dispatcherPort || config.DISPATCHER_PORT;
                  const dispatcherSecure = options.dispatcherSecure || config.DISPATCHER_SECURE;
                  const httpProtocol = dispatcherSecure ? "https://" : "http://";
                  this._dispatcherUrl = `${httpProtocol}${dispatcherHost}:${dispatcherPort}/signaling`;
                }
              }
            }
            var socket = socket_Socket;
            var sdp_transform_lib = __webpack_require__("./node_modules/sdp-transform/lib/index.js");
            var sdp_transform_lib_default = /* @__PURE__ */ __webpack_require__.n(sdp_transform_lib);
            var sdp_interop_lib = __webpack_require__("./node_modules/@jitsi/sdp-interop/lib/index.js");
            class sdpUtil_SdpUtil {
              unifiedToPlanB(offer) {
                const interop = new sdp_interop_lib["Interop"]();
                const oldSdp = interop.toPlanB(offer).sdp;
                const msids = /* @__PURE__ */ new Set();
                const msidRegexp = /a=ssrc:\d+ msid:(\w+)/g;
                let matches;
                while (matches = msidRegexp.exec(oldSdp)) {
                  msids.add(matches[1]);
                }
                const newSdp = oldSdp.replace("a=msid-semantic:WMS *", `a=msid-semantic:WMS ${Array.from(msids).join(" ")}`);
                return new RTCSessionDescription({
                  type: "offer",
                  sdp: newSdp
                });
              }
              addVideoBandwidth(sdp, bandwidth) {
                this._validateBandwidth(bandwidth);
                return this._addBandwidth(sdp, bandwidth, "video");
              }
              addAudioBandwidth(sdp, bandwidth) {
                this._validateBandwidth(bandwidth);
                return this._addBandwidth(sdp, bandwidth, "audio");
              }
              filterVideoCodec(sdp, codec) {
                return this._filterCodec(sdp, codec, "video");
              }
              filterAudioCodec(sdp, codec) {
                return this._filterCodec(sdp, codec, "audio");
              }
              ensureUnifiedPlan(sdp) {
                const delimiter = "\r\n";
                return sdp.split(delimiter).map((line) => {
                  return line.startsWith("a=msid-semantic") ? "a=msid-semantic:WMS *" : line;
                }).join(delimiter);
              }
              _filterCodec(sdp, codec, mediaType) {
                if (codec === void 0) {
                  throw new Error("codec is not passed");
                }
                const sdpObject = sdp_transform_lib_default.a.parse(sdp);
                sdpObject.media = sdpObject.media.map((media) => {
                  if (media.type === mediaType) {
                    media.rtp = media.rtp.filter((rtp) => {
                      return rtp.codec === codec;
                    });
                    const payloadNumbers = media.rtp.reduce((prev, curr) => {
                      return [
                        ...prev,
                        curr.payload
                      ];
                    }, []);
                    if (media.rtp.length === 0) {
                      throw new Error(`${codec} does not exist`);
                    }
                    if (media.fmtp) {
                      media.fmtp = media.fmtp.filter((fmtp) => {
                        return payloadNumbers.includes(fmtp.payload);
                      });
                    }
                    if (media.rtcpFb) {
                      media.rtcpFb = media.rtcpFb.filter((rtcpFb) => {
                        return payloadNumbers.includes(rtcpFb.payload);
                      });
                    }
                    media.payloads = payloadNumbers.join(" ");
                  }
                  return media;
                });
                return sdp_transform_lib_default.a.write(sdpObject);
              }
              _addBandwidth(sdp, bandwidth, mediaType) {
                const sdpObject = sdp_transform_lib_default.a.parse(sdp);
                sdpObject.media = sdpObject.media.map((media) => {
                  if (media.type === mediaType) {
                    media.bandwidth = [
                      {
                        type: "AS",
                        limit: bandwidth.toString()
                      },
                      {
                        type: "TIAS",
                        limit: (bandwidth * 1e3).toString()
                      }
                    ];
                  }
                  return media;
                });
                return sdp_transform_lib_default.a.write(sdpObject);
              }
              _validateBandwidth(bandwidth) {
                if (bandwidth === void 0) {
                  throw new Error("bandwidth is not passed");
                }
                if (!/^\d+$/.test(bandwidth)) {
                  throw new Error(`${bandwidth} is not a number`);
                }
              }
            }
            var sdpUtil = new sdpUtil_SdpUtil();
            const NegotiatorEvents = new lib_enum["default"]([
              "addStream",
              "dcCreated",
              "offerCreated",
              "answerCreated",
              "iceCandidate",
              "iceConnectionFailed",
              "negotiationNeeded",
              "error"
            ]);
            class negotiator_Negotiator extends events_default.a {
              async startConnection(options = {}) {
                this._pc = this._createPeerConnection(options.pcConfig);
                this._setupPCListeners();
                this.originator = options.originator;
                this._audioBandwidth = options.audioBandwidth;
                this._videoBandwidth = options.videoBandwidth;
                this._audioCodec = options.audioCodec;
                this._videoCodec = options.videoCodec;
                this._type = options.type;
                if (this._type === "media") {
                  if (options.stream) {
                    const vTracks = options.stream.getVideoTracks();
                    const aTracks = options.stream.getAudioTracks();
                    const recvonlyState = this._getReceiveOnlyState(options);
                    if (vTracks.length > 0) {
                      vTracks.forEach((track) => this._pc.addTrack(track, options.stream));
                    } else {
                      recvonlyState.video && this._pc.addTransceiver("video", {
                        direction: "recvonly"
                      });
                    }
                    if (aTracks.length > 0) {
                      aTracks.forEach((track) => this._pc.addTrack(track, options.stream));
                    } else {
                      recvonlyState.audio && this._pc.addTransceiver("audio", {
                        direction: "recvonly"
                      });
                    }
                  } else if (this.originator) {
                    this._pc.addTransceiver("audio", {
                      direction: "recvonly"
                    });
                    this._pc.addTransceiver("video", {
                      direction: "recvonly"
                    });
                  }
                }
                if (this.originator) {
                  if (this._type === "data") {
                    const label = options.label || "";
                    const dcInit = options.dcInit || {};
                    const dc = this._pc.createDataChannel(label, dcInit);
                    this.emit(negotiator_Negotiator.EVENTS.dcCreated.key, dc);
                  }
                } else {
                  await this.handleOffer(options.offer);
                }
              }
              replaceStream(newStream) {
                if (!this._pc) {
                  return;
                }
                this._isNegotiationAllowed = true;
                const _this = this;
                const vTracks = newStream.getVideoTracks();
                const aTracks = newStream.getAudioTracks();
                const senders = this._pc.getSenders();
                const vSender = senders.find((sender) => sender.track && sender.track.kind === "video");
                const aSender = senders.find((sender) => sender.track && sender.track.kind === "audio");
                _updateSenderWithTrack(vSender, vTracks[0], newStream);
                _updateSenderWithTrack(aSender, aTracks[0], newStream);
                function _updateSenderWithTrack(sender, track, stream) {
                  if (track === void 0 && sender === void 0) {
                    return;
                  }
                  if (track === void 0) {
                    _this._pc.removeTrack(sender);
                    return;
                  }
                  if (sender === void 0) {
                    _this._pc.addTrack(track, stream);
                    return;
                  }
                  if (sender.track.id === track.id) {
                    return;
                  }
                  sender.replaceTrack(track);
                }
              }
              async handleOffer(offerSdp) {
                if (this._lastOffer && offerSdp && this._lastOffer.sdp === offerSdp.sdp) {
                  return;
                }
                this._isNegotiationAllowed = true;
                if (this._pc.signalingState === "have-remote-offer" || this._isExecutingHandleOffer) {
                  this._offerQueue.push(offerSdp);
                  return;
                }
                this._lastOffer = offerSdp;
                this._isExecutingHandleOffer = true;
                let answer;
                try {
                  await this._setRemoteDescription(offerSdp);
                  answer = await this._makeAnswerSdp().catch((err) => logger.error(err));
                } finally {
                  this._isExecutingHandleOffer = false;
                }
                if (this._pc.signalingState === "stable") {
                  const offer = this._offerQueue.shift();
                  if (offer) {
                    this.handleOffer(offer);
                  }
                }
                this.emit(negotiator_Negotiator.EVENTS.answerCreated.key, answer);
              }
              async handleAnswer(answerSdp) {
                this._isNegotiationAllowed = true;
                if (this._isExpectingAnswer) {
                  await this._setRemoteDescription(answerSdp);
                  this._isExpectingAnswer = false;
                } else if (this._pc.onnegotiationneeded) {
                  this._pc.onnegotiationneeded();
                }
              }
              async handleCandidate(candidate) {
                if (!this._pc) {
                  return;
                }
                await this._pc.addIceCandidate(new RTCIceCandidate(candidate)).then(() => logger.log("Successfully added ICE candidate")).catch((err) => logger.error("Failed to add ICE candidate", err));
              }
              cleanup() {
                logger.log("Cleaning up PeerConnection");
                if (this._pc && (this._pc.readyState !== "closed" || this._pc.signalingState !== "closed")) {
                  this._pc.close();
                }
                this._pc = null;
              }
              _createPeerConnection(pcConfig = {}) {
                logger.log("Creating RTCPeerConnection");
                pcConfig.sdpSemantics = "unified-plan";
                return new RTCPeerConnection(pcConfig);
              }
              _setupPCListeners() {
                const pc = this._pc;
                pc.ontrack = (evt) => {
                  logger.log("Received remote media stream track");
                  evt.streams.forEach((stream) => {
                    this.emit(negotiator_Negotiator.EVENTS.addStream.key, stream);
                  });
                };
                pc.ondatachannel = (evt) => {
                  logger.log("Received data channel");
                  const dc = evt.channel;
                  this.emit(negotiator_Negotiator.EVENTS.dcCreated.key, dc);
                };
                pc.onicecandidate = (evt) => {
                  if (!evt.candidate || evt.candidate.candidate === "") {
                    logger.log("ICE candidates gathering complete");
                    return;
                  }
                  logger.log("Generated ICE candidate for:", evt.candidate);
                  this.emit(negotiator_Negotiator.EVENTS.iceCandidate.key, evt.candidate);
                };
                pc.oniceconnectionstatechange = () => {
                  switch (pc.iceConnectionState) {
                    case "completed":
                      logger.log("iceConnectionState is completed");
                      pc.onicecandidate = () => {
                      };
                      break;
                    case "disconnected":
                      logger.log("iceConnectionState is disconnected, trying reconnect by browser");
                      break;
                    case "failed":
                      logger.log("iceConnectionState is failed, closing connection");
                      this.emit(negotiator_Negotiator.EVENTS.iceConnectionFailed.key);
                      break;
                    default:
                      logger.log(`iceConnectionState is ${pc.iceConnectionState}`);
                      break;
                  }
                };
                pc.onconnectionstatechange = () => {
                  logger.log(`connectionState is ${pc.connectionState}`);
                  if (pc.connectionState === "failed" && pc.iceConnectionState === "disconnected") {
                    logger.log("connectionState is failed, closing connection");
                    this.emit(negotiator_Negotiator.EVENTS.iceConnectionFailed.key);
                  }
                };
                pc.onnegotiationneeded = async () => {
                  logger.log("`negotiationneeded` triggered");
                  if (pc.signalingState === "stable" && this._isNegotiationAllowed) {
                    this._isNegotiationAllowed = false;
                    if (this.originator) {
                      const offer = await this._makeOfferSdp();
                      this._setLocalDescription(offer);
                      this.emit(negotiator_Negotiator.EVENTS.negotiationNeeded.key);
                    }
                  }
                };
                pc.onsignalingstatechange = () => {
                  logger.log(`signalingState is ${pc.signalingState}`);
                  if (pc.signalingState === "stable" && !this._isExecutingHandleOffer) {
                    const offer = this._offerQueue.shift();
                    if (offer) {
                      this.handleOffer(offer);
                    }
                  }
                };
              }
              async _makeOfferSdp() {
                let offer;
                try {
                  offer = await this._pc.createOffer();
                } catch (err) {
                  err.type = "webrtc";
                  logger.error(err);
                  this.emit(negotiator_Negotiator.EVENTS.error.key, err);
                  logger.log("Failed to createOffer, ", err);
                  throw err;
                }
                logger.log("Created offer.");
                if (this._audioBandwidth) {
                  offer.sdp = sdpUtil.addAudioBandwidth(offer.sdp, this._audioBandwidth);
                }
                if (this._videoBandwidth) {
                  offer.sdp = sdpUtil.addVideoBandwidth(offer.sdp, this._videoBandwidth);
                }
                if (this._audioCodec) {
                  offer.sdp = sdpUtil.filterAudioCodec(offer.sdp, this._audioCodec);
                }
                if (this._videoCodec) {
                  offer.sdp = sdpUtil.filterVideoCodec(offer.sdp, this._videoCodec);
                }
                return offer;
              }
              async _makeAnswerSdp() {
                let answer;
                try {
                  answer = await this._pc.createAnswer();
                } catch (err) {
                  err.type = "webrtc";
                  logger.error(err);
                  this.emit(negotiator_Negotiator.EVENTS.error.key, err);
                  logger.log("Failed to createAnswer, ", err);
                  throw err;
                }
                logger.log("Created answer.");
                if (this._audioBandwidth) {
                  answer.sdp = sdpUtil.addAudioBandwidth(answer.sdp, this._audioBandwidth);
                }
                if (this._videoBandwidth) {
                  answer.sdp = sdpUtil.addVideoBandwidth(answer.sdp, this._videoBandwidth);
                }
                if (this._audioCodec) {
                  answer.sdp = sdpUtil.filterAudioCodec(answer.sdp, this._audioCodec);
                }
                if (this._videoCodec) {
                  answer.sdp = sdpUtil.filterVideoCodec(answer.sdp, this._videoCodec);
                }
                try {
                  await this._pc.setLocalDescription(answer);
                } catch (err) {
                  err.type = "webrtc";
                  logger.error(err);
                  this.emit(negotiator_Negotiator.EVENTS.error.key, err);
                  logger.log("Failed to setLocalDescription, ", err);
                  throw err;
                }
                logger.log("Set localDescription: answer");
                logger.log(`Setting local description ${JSON.stringify(answer.sdp)}`);
                return answer;
              }
              async _setLocalDescription(offer) {
                logger.log(`Setting local description ${JSON.stringify(offer.sdp)}`);
                try {
                  await this._pc.setLocalDescription(offer);
                } catch (err) {
                  err.type = "webrtc";
                  logger.error(err);
                  this.emit(negotiator_Negotiator.EVENTS.error.key, err);
                  logger.log("Failed to setLocalDescription, ", err);
                  throw err;
                }
                logger.log("Set localDescription: offer");
                this._isExpectingAnswer = true;
                this.emit(negotiator_Negotiator.EVENTS.offerCreated.key, offer);
              }
              async _setRemoteDescription(sdp) {
                logger.log(`Setting remote description ${JSON.stringify(sdp)}`);
                try {
                  await this._pc.setRemoteDescription(new RTCSessionDescription(sdp));
                  this.hasRemoteDescription = true;
                } catch (err) {
                  err.type = "webrtc";
                  logger.error(err);
                  this.emit(negotiator_Negotiator.EVENTS.error.key, err);
                  logger.log("Failed to setRemoteDescription: ", err);
                  throw err;
                }
                logger.log("Set remoteDescription:", sdp.type);
              }
              _getReceiveOnlyState(options = {}) {
                const state = {
                  audio: false,
                  video: false
                };
                const hasStream = options.stream instanceof MediaStream;
                const hasAudioTrack = hasStream ? options.stream.getAudioTracks().length !== 0 : false;
                const hasVideoTrack = hasStream ? options.stream.getVideoTracks().length !== 0 : false;
                if (hasStream === false && options.audioReceiveEnabled === void 0 && options.videoReceiveEnabled === void 0) {
                  state.audio = true;
                  state.video = true;
                  return state;
                }
                if (options.audioReceiveEnabled && hasAudioTrack === false) {
                  state.audio = true;
                }
                if (options.videoReceiveEnabled && hasVideoTrack === false) {
                  state.video = true;
                }
                if (options.audioReceiveEnabled === false && hasAudioTrack) {
                  logger.warn("Option audioReceiveEnabled will be treated as true, because passed stream has MediaStreamTrack(kind = audio)");
                }
                if (options.videoReceiveEnabled === false && hasVideoTrack) {
                  logger.warn("Option videoReceiveEnabled will be treated as true, because passed stream has MediaStreamTrack(kind = video)");
                }
                return state;
              }
              static get EVENTS() {
                return NegotiatorEvents;
              }
              constructor() {
                super();
                this._offerQueue = [];
                this._isExpectingAnswer = false;
                this._isNegotiationAllowed = true;
                this._isExecutingHandleOffer = false;
                this.hasRemoteDescription = false;
              }
            }
            var negotiator = negotiator_Negotiator;
            const ConnectionEvents = new lib_enum["default"]([
              "candidate",
              "offer",
              "answer",
              "close",
              "forceClose"
            ]);
            class connection_Connection extends events_default.a {
              get id() {
                return this._options.connectionId || this._idPrefix + this._randomIdSuffix;
              }
              async handleAnswer(answerMessage) {
                if (this._pcAvailable) {
                  await this._negotiator.handleAnswer(answerMessage.answer);
                  this.open = true;
                  this._handleQueuedMessages();
                } else {
                  logger.log(`Queuing ANSWER message in ${this.id} from ${this.remoteId}`);
                  this._queuedMessages.push({
                    type: config.MESSAGE_TYPES.SERVER.ANSWER.key,
                    payload: answerMessage
                  });
                }
              }
              handleCandidate(candidateMessage) {
                if (this._negotiator.originator && !this._negotiator.hasRemoteDescription) {
                  this._queuedMessages.push({
                    type: config.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                    payload: candidateMessage
                  });
                  return;
                }
                if (this._pcAvailable) {
                  this._negotiator.handleCandidate(candidateMessage.candidate);
                } else {
                  logger.log(`Queuing CANDIDATE message in ${this.id} from ${this.remoteId}`);
                  this._queuedMessages.push({
                    type: config.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                    payload: candidateMessage
                  });
                }
              }
              updateOffer(offerMessage) {
                if (this.open) {
                  this._negotiator.handleOffer(offerMessage.offer);
                } else {
                  this._options.payload = offerMessage;
                }
              }
              getPeerConnection() {
                if (!this.open) {
                  return null;
                }
                return this._negotiator._pc;
              }
              _handleQueuedMessages() {
                for (const message of this._queuedMessages) {
                  switch (message.type) {
                    case config.MESSAGE_TYPES.SERVER.ANSWER.key:
                      this.handleAnswer(message.payload);
                      break;
                    case config.MESSAGE_TYPES.SERVER.CANDIDATE.key:
                      this.handleCandidate(message.payload);
                      break;
                    default:
                      logger.warn("Unrecognized message type:", message.type, "from peer:", this.remoteId);
                      break;
                  }
                }
                this._queuedMessages = [];
              }
              close(forceClose = void 0) {
                if (!this.open) {
                  return;
                }
                this.open = false;
                this._negotiator.cleanup();
                this.emit(connection_Connection.EVENTS.close.key);
                if (forceClose) {
                  this.emit(connection_Connection.EVENTS.forceClose.key);
                } else if (forceClose === void 0) {
                  logger.warn(`Default value of the forceClose parameter will change false to true from future versions.`);
                }
              }
              _setupNegotiatorMessageHandlers() {
                this._negotiator.on(negotiator.EVENTS.answerCreated.key, (answer) => {
                  const connectionAnswer = {
                    answer,
                    dst: this.remoteId,
                    connectionId: this.id,
                    connectionType: this.type
                  };
                  this.emit(connection_Connection.EVENTS.answer.key, connectionAnswer);
                });
                this._negotiator.on(negotiator.EVENTS.offerCreated.key, (offer) => {
                  const connectionOffer = {
                    offer,
                    dst: this.remoteId,
                    connectionId: this.id,
                    connectionType: this.type,
                    metadata: this.metadata
                  };
                  if (this.serialization) {
                    connectionOffer.serialization = this.serialization;
                  }
                  if (this.label) {
                    connectionOffer.label = this.label;
                  }
                  if (this.dcInit) {
                    connectionOffer.dcInit = this.dcInit;
                  }
                  this.emit(connection_Connection.EVENTS.offer.key, connectionOffer);
                });
                this._negotiator.on(negotiator.EVENTS.iceCandidate.key, (candidate) => {
                  const connectionCandidate = {
                    candidate,
                    dst: this.remoteId,
                    connectionId: this.id,
                    connectionType: this.type
                  };
                  this.emit(connection_Connection.EVENTS.candidate.key, connectionCandidate);
                });
                this._negotiator.on(negotiator.EVENTS.iceConnectionFailed.key, () => {
                  this.close(false);
                });
              }
              get peer() {
                logger.warn(`${this.constructor.name}.peer is deprecated and may be removed from a future version. Please use ${this.constructor.name}.remoteId instead.`);
                return this.remoteId;
              }
              static get EVENTS() {
                return ConnectionEvents;
              }
              constructor(remoteId, options) {
                super();
                options = options || {};
                if (this.constructor === connection_Connection) {
                  throw new TypeError("Cannot construct Connection instances directly");
                }
                this._options = options;
                this.open = false;
                this.type = void 0;
                this.metadata = this._options.metadata;
                this.remoteId = remoteId;
                this._negotiator = new negotiator();
                this._idPrefix = "c_";
                this._randomIdSuffix = util.randomToken();
                this._setupNegotiatorMessageHandlers();
              }
            }
            var peer_connection = connection_Connection;
            var binarypack = __webpack_require__("./node_modules/js-binarypack/lib/binarypack.js");
            var binarypack_default = /* @__PURE__ */ __webpack_require__.n(binarypack);
            var object_sizeof = __webpack_require__("./node_modules/object-sizeof/index.js");
            var object_sizeof_default = /* @__PURE__ */ __webpack_require__.n(object_sizeof);
            const DCEvents = new lib_enum["default"]([
              "open",
              "data",
              "error"
            ]);
            DCEvents.extend(peer_connection.EVENTS.enums);
            const DCSerializations = new lib_enum["default"]([
              "binary",
              "binary-utf8",
              "json",
              "none"
            ]);
            class dataConnection_DataConnection extends peer_connection {
              async startConnection() {
                await this._negotiator.startConnection(this._options.payload || {
                  originator: true,
                  type: "data",
                  label: this.label,
                  dcInit: this.dcInit,
                  pcConfig: this._options.pcConfig
                });
                this._pcAvailable = true;
                this._handleQueuedMessages();
              }
              _setupMessageHandlers() {
                this._dc.onopen = () => {
                  if (this._isOnOpenCalled) {
                    return;
                  }
                  logger.log("Data channel connection success");
                  this.open = true;
                  this._isOnOpenCalled = true;
                  this.emit(dataConnection_DataConnection.EVENTS.open.key);
                };
                this._dc.onmessage = (msg) => {
                  this._handleDataMessage(msg);
                };
                this._dc.onclose = () => {
                  logger.log("DataChannel closed for:", this.id);
                  this.close(false);
                };
                this._dc.onerror = (err) => {
                  logger.error(err);
                };
              }
              _handleDataMessage(msg) {
                if (this.serialization === dataConnection_DataConnection.SERIALIZATIONS.none.key) {
                  this.emit(dataConnection_DataConnection.EVENTS.data.key, msg.data);
                  return;
                } else if (this.serialization === dataConnection_DataConnection.SERIALIZATIONS.json.key) {
                  this.emit(dataConnection_DataConnection.EVENTS.data.key, JSON.parse(msg.data));
                  return;
                }
                const dataMeta = binarypack_default.a.unpack(msg.data);
                let currData = this._receivedData[dataMeta.id];
                if (!currData) {
                  currData = this._receivedData[dataMeta.id] = {
                    size: dataMeta.size,
                    type: dataMeta.type,
                    name: dataMeta.name,
                    mimeType: dataMeta.mimeType,
                    totalParts: dataMeta.totalParts,
                    parts: new Array(dataMeta.totalParts),
                    receivedParts: 0
                  };
                }
                currData.receivedParts++;
                currData.parts[dataMeta.index] = dataMeta.data;
                if (currData.receivedParts === currData.totalParts) {
                  delete this._receivedData[dataMeta.id];
                  const ab = util.joinArrayBuffers(currData.parts);
                  const unpackedData = binarypack_default.a.unpack(ab);
                  let finalData;
                  switch (currData.type) {
                    case "Blob":
                      finalData = new Blob([
                        new Uint8Array(unpackedData)
                      ], {
                        type: currData.mimeType
                      });
                      break;
                    case "File":
                      finalData = new File([
                        new Uint8Array(unpackedData)
                      ], currData.name, {
                        type: currData.mimeType
                      });
                      break;
                    default:
                      finalData = unpackedData;
                  }
                  this.emit(dataConnection_DataConnection.EVENTS.data.key, finalData);
                }
              }
              send(data) {
                if (!this.open) {
                  this.emit(dataConnection_DataConnection.EVENTS.error.key, new Error("Connection is not open. You should listen for the `open` event before sending messages."));
                  return;
                }
                if (data === void 0 || data === null) {
                  return;
                }
                if (this.serialization === dataConnection_DataConnection.SERIALIZATIONS.none.key) {
                  this._sendBuffer.push(data);
                  this._startSendLoop();
                  return;
                } else if (this.serialization === dataConnection_DataConnection.SERIALIZATIONS.json.key) {
                  this._sendBuffer.push(JSON.stringify(data));
                  this._startSendLoop();
                  return;
                }
                const packedData = binarypack_default.a.pack(data);
                const size = packedData.size;
                const type = data.constructor.name;
                const dataMeta = {
                  id: util.randomId(),
                  type,
                  size,
                  totalParts: 0
                };
                if (type === "File") {
                  dataMeta.name = data.name;
                }
                if (data instanceof Blob) {
                  dataMeta.mimeType = data.type;
                }
                const chunkSize = config.maxChunkSize - object_sizeof_default()(dataMeta);
                const numSlices = Math.ceil(size / chunkSize);
                dataMeta.totalParts = numSlices;
                for (let sliceIndex = 0; sliceIndex < numSlices; sliceIndex++) {
                  const slice = packedData.slice(sliceIndex * chunkSize, (sliceIndex + 1) * chunkSize);
                  dataMeta.index = sliceIndex;
                  dataMeta.data = slice;
                  util.blobToArrayBuffer(binarypack_default.a.pack(dataMeta), (ab) => {
                    this._sendBuffer.push(ab);
                    this._startSendLoop();
                  });
                }
              }
              close(forceClose) {
                const cleanup = (forceClose2) => {
                  super.close(forceClose2);
                  this._isOnOpenCalled = false;
                };
                if (!this._dc) {
                  cleanup(forceClose);
                  return;
                }
                this._dc.onclose = () => {
                  logger.log("DataChannel closed for:", this.id);
                  cleanup(forceClose);
                };
                if (this._dc.readyState === "closing") {
                  return;
                } else if (this._dc.readyState === "closed") {
                  cleanup(forceClose);
                } else {
                  this._dc.close();
                }
              }
              _startSendLoop() {
                if (!this.sendInterval) {
                  this.sendInterval = setInterval(() => {
                    const currMsg = this._sendBuffer.shift();
                    try {
                      this._dc.send(currMsg);
                    } catch (error) {
                      this._sendBuffer.push(currMsg);
                    }
                    if (this._sendBuffer.length === 0) {
                      clearInterval(this.sendInterval);
                      this.sendInterval = void 0;
                    }
                  }, config.sendInterval);
                }
              }
              _isUnreliableDCInit(dcInit) {
                if (!dcInit) {
                  return false;
                }
                if ("maxRetransmits" in dcInit || "maxPacketLifeTime" in dcInit) {
                  return true;
                }
                return false;
              }
              static get SERIALIZATIONS() {
                return DCSerializations;
              }
              static get EVENTS() {
                return DCEvents;
              }
              constructor(remoteId, options) {
                super(remoteId, options);
                this._idPrefix = "dc_";
                this.type = "data";
                this._isOnOpenCalled = false;
                this.label = this._options.label || this.id;
                this.dcInit = this._options.dcInit || {};
                this.serialization = dataConnection_DataConnection.SERIALIZATIONS.binary.key;
                if (this._options.serialization) {
                  if (!dataConnection_DataConnection.SERIALIZATIONS.get(this._options.serialization)) {
                    throw new Error("Invalid serialization");
                  }
                  this.serialization = this._options.serialization;
                  if (this._isUnreliableDCInit(this.dcInit)) {
                    logger.warn("You can not specify serialization with unreliable mode enabled.");
                    this.serialization = dataConnection_DataConnection.SERIALIZATIONS.binary.key;
                  }
                }
                this._sendBuffer = [];
                this._receivedData = {};
                this._queuedMessages = this._options.queuedMessages || [];
                this._negotiator.on(negotiator.EVENTS.dcCreated.key, (dc) => {
                  this._dc = dc;
                  this._dc.binaryType = "arraybuffer";
                  this._setupMessageHandlers();
                  if (!this._isOnOpenCalled && this._dc.readyState === "open") {
                    this._dc.onopen();
                  }
                });
                if (this._options.payload) {
                  this._options.payload.pcConfig = this._options.pcConfig;
                }
              }
            }
            var dataConnection = dataConnection_DataConnection;
            const MCEvents = new lib_enum["default"]([
              "stream"
            ]);
            MCEvents.extend(peer_connection.EVENTS.enums);
            class mediaConnection_MediaConnection extends peer_connection {
              async startConnection() {
                if (!this._options.originator) {
                  return;
                }
                await this._negotiator.startConnection({
                  type: "media",
                  stream: this.localStream,
                  originator: this._options.originator,
                  pcConfig: this._options.pcConfig,
                  videoBandwidth: this._options.videoBandwidth,
                  audioBandwidth: this._options.audioBandwidth,
                  videoCodec: this._options.videoCodec,
                  audioCodec: this._options.audioCodec,
                  videoReceiveEnabled: this._options.videoReceiveEnabled,
                  audioReceiveEnabled: this._options.audioReceiveEnabled
                });
                this._pcAvailable = true;
                this._handleQueuedMessages();
              }
              answer(stream, options = {}) {
                if (this.localStream) {
                  logger.warn("localStream already exists on this MediaConnection. Are you answering a call twice?");
                  return;
                }
                this._options.payload.stream = stream;
                this.localStream = stream;
                this._negotiator.startConnection({
                  type: "media",
                  stream: this.localStream,
                  originator: false,
                  offer: this._options.payload.offer,
                  pcConfig: this._options.pcConfig,
                  audioBandwidth: options.audioBandwidth,
                  videoBandwidth: options.videoBandwidth,
                  videoCodec: options.videoCodec,
                  audioCodec: options.audioCodec
                });
                this._pcAvailable = true;
                this._handleQueuedMessages();
                this.open = true;
              }
              replaceStream(newStream) {
                this._negotiator.replaceStream(newStream);
                this.localStream = newStream;
              }
              _setupNegotiatorMessageHandlers() {
                super._setupNegotiatorMessageHandlers();
                this._negotiator.on(negotiator.EVENTS.addStream.key, (remoteStream) => {
                  logger.log("Receiving stream", remoteStream);
                  if (this.remoteStream && this.remoteStream.id === remoteStream.id) {
                    return;
                  }
                  this.remoteStream = remoteStream;
                  this.emit(mediaConnection_MediaConnection.EVENTS.stream.key, remoteStream);
                });
              }
              static get EVENTS() {
                return MCEvents;
              }
              constructor(remoteId, options) {
                super(remoteId, options);
                this._idPrefix = "mc_";
                this.type = "media";
                this.localStream = this._options.stream;
                this._queuedMessages = this._options.queuedMessages || [];
                this._pcAvailable = false;
              }
            }
            var mediaConnection = mediaConnection_MediaConnection;
            var socket_io_parser = __webpack_require__("./node_modules/socket.io-parser/index.js");
            var socket_io_parser_default = /* @__PURE__ */ __webpack_require__.n(socket_io_parser);
            var has_binary2 = __webpack_require__("./node_modules/has-binary2/index.js");
            var has_binary2_default = /* @__PURE__ */ __webpack_require__.n(has_binary2);
            const Events = [
              "stream",
              "open",
              "close",
              "peerJoin",
              "peerLeave",
              "error",
              "data",
              "log"
            ];
            const MessageEvents = [
              "offer",
              "answer",
              "candidate",
              "leave",
              "close",
              "getLog",
              "broadcast"
            ];
            const RoomEvents = new lib_enum["default"](Events);
            const RoomMessageEvents = new lib_enum["default"](MessageEvents);
            class room_Room extends events_default.a {
              validateSendDataSize(data) {
                const isBin = has_binary2_default()([
                  data
                ]);
                const packet = {
                  type: isBin ? socket_io_parser_default.a.BINARY_EVENT : socket_io_parser_default.a.EVENT,
                  data: [
                    data
                  ]
                };
                const encoder = new socket_io_parser_default.a.Encoder();
                let dataSize;
                encoder.encode(packet, (encodedPackets) => {
                  dataSize = isBin ? encodedPackets[1].byteLength : encodedPackets[0].length;
                });
                const maxDataSize = config.maxDataSize;
                if (dataSize > maxDataSize) {
                  throw new Error("The size of data to send must be less than 20 MB");
                }
                return true;
              }
              _sendData(msg, key) {
                const sendInterval = config.minBroadcastIntervalMs;
                const now = Date.now();
                const diff = now - this.lastsend;
                if (this.messageQueue.length == 0 && diff >= sendInterval) {
                  this.lastsend = now;
                  this.emit(key, msg);
                  return;
                }
                this.messageQueue.push({
                  msg,
                  key
                });
                if (this.sendIntervalID !== null) {
                  return;
                }
                this.sendIntervalID = setInterval(() => {
                  if (this.messageQueue.length === 0) {
                    clearInterval(this.sendIntervalID);
                    this.sendIntervalID = null;
                    return;
                  }
                  const message = this.messageQueue.shift();
                  this.lastsend = Date.now();
                  this.emit(message.key, message.msg);
                }, sendInterval);
              }
              handleData(dataMessage) {
                const message = {
                  data: dataMessage.data,
                  src: dataMessage.src
                };
                this.emit(room_Room.EVENTS.data.key, message);
              }
              handleLog(logs) {
                this.emit(room_Room.EVENTS.log.key, logs);
              }
              getLog() {
                const message = {
                  roomName: this.name
                };
                this.emit(room_Room.MESSAGE_EVENTS.getLog.key, message);
              }
              static get EVENTS() {
                return RoomEvents;
              }
              static get MESSAGE_EVENTS() {
                return RoomMessageEvents;
              }
              constructor(name, peerId, options = {}) {
                super();
                if (this.constructor === room_Room) {
                  throw new TypeError("Cannot construct Room instances directly");
                }
                this.name = name;
                this._options = options;
                this._peerId = peerId;
                this._localStream = this._options.stream;
                this._pcConfig = this._options.pcConfig;
                this.lastSent = 0;
                this.messageQueue = [];
                this.sendIntervalID = null;
              }
            }
            var peer_room = room_Room;
            const sfuRoom_MessageEvents = [
              "offerRequest",
              "candidate"
            ];
            const SFUEvents = new lib_enum["default"]([]);
            SFUEvents.extend(peer_room.EVENTS.enums);
            const SFUMessageEvents = new lib_enum["default"](sfuRoom_MessageEvents);
            SFUMessageEvents.extend(peer_room.MESSAGE_EVENTS.enums);
            class sfuRoom_SFURoom extends peer_room {
              call(stream) {
                if (stream) {
                  this._localStream = stream;
                }
                const data = {
                  roomName: this.name
                };
                this.emit(sfuRoom_SFURoom.MESSAGE_EVENTS.offerRequest.key, data);
              }
              handleOffer(offerMessage) {
                let offer = offerMessage.offer;
                if (util.isPlanBSafari()) {
                  offer = sdpUtil.unifiedToPlanB(offer);
                }
                if (this._connectionStarted) {
                  this._negotiator.handleOffer(offer);
                } else {
                  this._negotiator.startConnection({
                    type: "media",
                    stream: this._localStream,
                    pcConfig: this._options.pcConfig,
                    offer
                  });
                  this._setupNegotiatorMessageHandlers();
                  this._connectionStarted = true;
                }
              }
              _setupNegotiatorMessageHandlers() {
                this._negotiator.on(negotiator.EVENTS.addStream.key, (stream) => {
                  const remoteStream = stream;
                  if (this._msidMap[remoteStream.id]) {
                    remoteStream.peerId = this._msidMap[remoteStream.id];
                    if (remoteStream.peerId === this._peerId) {
                      return;
                    }
                    const cachedStream = this.remoteStreams[remoteStream.id];
                    if (cachedStream && cachedStream.id === remoteStream.id) {
                      return;
                    }
                    this.remoteStreams[remoteStream.id] = remoteStream;
                    this.emit(sfuRoom_SFURoom.EVENTS.stream.key, remoteStream);
                    logger.log(`Received remote media stream for ${remoteStream.peerId} in ${this.name}`);
                  } else {
                    this._unknownStreams[remoteStream.id] = remoteStream;
                  }
                });
                this._negotiator.on(negotiator.EVENTS.negotiationNeeded.key, () => {
                  const offerRequestMessage = {
                    roomName: this.name
                  };
                  this.emit(sfuRoom_SFURoom.MESSAGE_EVENTS.offerRequest.key, offerRequestMessage);
                });
                this._negotiator.on(negotiator.EVENTS.answerCreated.key, (answer) => {
                  if (!util.isPlanBSafari()) {
                    answer.sdp = sdpUtil.ensureUnifiedPlan(answer.sdp);
                  }
                  const answerMessage = {
                    roomName: this.name,
                    answer
                  };
                  this.emit(sfuRoom_SFURoom.MESSAGE_EVENTS.answer.key, answerMessage);
                });
                this._negotiator.on(negotiator.EVENTS.iceConnectionFailed.key, () => {
                  this.close();
                });
                this._negotiator.on(negotiator.EVENTS.iceCandidate.key, (candidate) => {
                  const candidateMessage = {
                    roomName: this.name,
                    candidate
                  };
                  this.emit(sfuRoom_SFURoom.MESSAGE_EVENTS.candidate.key, candidateMessage);
                });
              }
              handleJoin(joinMessage) {
                const { src, roomMembers } = joinMessage;
                if (src === this._peerId) {
                  this._open = true;
                  this.members = roomMembers.filter((peerId) => peerId !== src);
                  this.call(this._localStream);
                  this.emit(sfuRoom_SFURoom.EVENTS.open.key);
                  return;
                }
                this.members.push(src);
                this.emit(sfuRoom_SFURoom.EVENTS.peerJoin.key, src);
              }
              handleLeave(leaveMessage) {
                if (!this._open) {
                  return;
                }
                const src = leaveMessage.src;
                const index = this.members.indexOf(src);
                if (index >= 0) {
                  this.members.splice(index, 1);
                }
                for (const msid in this.remoteStreams) {
                  if (this.remoteStreams[msid].peerId === src) {
                    delete this.remoteStreams[msid];
                    delete this._msidMap[msid];
                    delete this._unknownStreams[msid];
                  }
                }
                this.emit(sfuRoom_SFURoom.EVENTS.peerLeave.key, src);
              }
              send(data) {
                if (!this._open) {
                  return;
                }
                if (!this.validateSendDataSize(data)) {
                  return;
                }
                const message = {
                  roomName: this.name,
                  data
                };
                this._sendData(message, sfuRoom_SFURoom.MESSAGE_EVENTS.broadcast.key);
              }
              close() {
                if (!this._open) {
                  return;
                }
                if (this._negotiator) {
                  this._negotiator.cleanup();
                }
                this._open = false;
                const message = {
                  roomName: this.name
                };
                this.emit(sfuRoom_SFURoom.MESSAGE_EVENTS.leave.key, message);
                this.emit(sfuRoom_SFURoom.EVENTS.close.key);
              }
              replaceStream(newStream) {
                this._localStream = newStream;
                this._negotiator.replaceStream(newStream);
              }
              updateMsidMap(msids = {}) {
                this._msidMap = msids;
                for (const msid of Object.keys(this._unknownStreams)) {
                  if (this._msidMap[msid]) {
                    const remoteStream = this._unknownStreams[msid];
                    remoteStream.peerId = this._msidMap[remoteStream.id];
                    delete this._unknownStreams[msid];
                    if (remoteStream.peerId === this._peerId) {
                      return;
                    }
                    this.remoteStreams[remoteStream.id] = remoteStream;
                    this.emit(sfuRoom_SFURoom.EVENTS.stream.key, remoteStream);
                  }
                }
              }
              getPeerConnection() {
                if (!this._connectionStarted) {
                  return null;
                }
                return this._negotiator._pc;
              }
              static get EVENTS() {
                return SFUEvents;
              }
              static get MESSAGE_EVENTS() {
                return SFUMessageEvents;
              }
              constructor(name, peerId, options) {
                super(name, peerId, options);
                this.remoteStreams = {};
                this.members = [];
                this._open = false;
                this._msidMap = {};
                this._unknownStreams = {};
                this._negotiator = new negotiator();
              }
            }
            var peer_sfuRoom = sfuRoom_SFURoom;
            const meshRoom_MessageEvents = [
              "broadcastByDC",
              "getPeers"
            ];
            const MeshEvents = new lib_enum["default"]([]);
            MeshEvents.extend(peer_room.EVENTS.enums);
            const MeshMessageEvents = new lib_enum["default"](meshRoom_MessageEvents);
            MeshMessageEvents.extend(peer_room.MESSAGE_EVENTS.enums);
            class meshRoom_MeshRoom extends peer_room {
              call(stream) {
                if (stream) {
                  this._localStream = stream;
                }
                const data = {
                  roomName: this.name,
                  type: "media"
                };
                this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.getPeers.key, data);
              }
              connect() {
                const data = {
                  roomName: this.name,
                  type: "data"
                };
                this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.getPeers.key, data);
              }
              makeMediaConnections(peerIds) {
                const options = {
                  stream: this._localStream,
                  pcConfig: this._pcConfig,
                  originator: true,
                  videoBandwidth: this._options.videoBandwidth,
                  audioBandwidth: this._options.audioBandwidth,
                  videoCodec: this._options.videoCodec,
                  audioCodec: this._options.audioCodec,
                  videoReceiveEnabled: this._options.videoReceiveEnabled,
                  audioReceiveEnabled: this._options.audioReceiveEnabled
                };
                this._makeConnections(peerIds, "media", options);
              }
              makeDataConnections(peerIds) {
                const options = {
                  pcConfig: this._pcConfig
                };
                this._makeConnections(peerIds, "data", options);
              }
              handleJoin(joinMessage) {
                const src = joinMessage.src;
                if (src === this._peerId) {
                  this.call(this._localStream);
                  this.emit(meshRoom_MeshRoom.EVENTS.open.key);
                  return;
                }
                this.emit(meshRoom_MeshRoom.EVENTS.peerJoin.key, src);
              }
              handleLeave(leaveMessage) {
                const src = leaveMessage.src;
                this._deleteConnections(src);
                this.emit(meshRoom_MeshRoom.EVENTS.peerLeave.key, src);
              }
              handleOffer(offerMessage) {
                const connectionId = offerMessage.connectionId;
                let connection = this._getConnection(offerMessage.src, connectionId);
                if (connection) {
                  connection.updateOffer(offerMessage);
                  return;
                }
                if (offerMessage.connectionType === "media") {
                  if (this._hasConnection(offerMessage.src)) {
                    if (this._peerId > offerMessage.src)
                      return;
                  }
                  connection = new mediaConnection(offerMessage.src, {
                    connectionId,
                    payload: offerMessage,
                    metadata: offerMessage.metadata,
                    queuedMessages: this._queuedMessages[connectionId],
                    pcConfig: this._pcConfig
                  });
                  connection.startConnection();
                  logger.log("MediaConnection created in OFFER");
                  this._addConnection(offerMessage.src, connection);
                  this._setupMessageHandlers(connection);
                  connection.answer(this._localStream, {
                    videoBandwidth: this._options.videoBandwidth,
                    audioBandwidth: this._options.audioBandwidth,
                    videoCodec: this._options.videoCodec,
                    audioCodec: this._options.audioCodec,
                    videoReceiveEnabled: this._options.videoReceiveEnabled,
                    audioReceiveEnabled: this._options.audioReceiveEnabled
                  });
                } else {
                  logger.warn(`Received malformed connection type: ${offerMessage.connectionType}`);
                }
              }
              handleAnswer(answerMessage) {
                const connection = this._getConnection(answerMessage.src, answerMessage.connectionId);
                if (connection) {
                  connection.handleAnswer(answerMessage);
                }
              }
              handleCandidate(candidateMessage) {
                const connection = this._getConnection(candidateMessage.src, candidateMessage.connectionId);
                if (connection) {
                  connection.handleCandidate(candidateMessage);
                } else {
                  if (this._queuedMessages[candidateMessage.connectionId] === void 0) {
                    this._queuedMessages[candidateMessage.connectionId] = [];
                  }
                  this._queuedMessages[candidateMessage.connectionId].push({
                    type: config.MESSAGE_TYPES.SERVER.CANDIDATE.key,
                    payload: candidateMessage
                  });
                }
              }
              send(data) {
                if (!this.validateSendDataSize(data)) {
                  return;
                }
                const message = {
                  roomName: this.name,
                  data
                };
                this._sendData(message, meshRoom_MeshRoom.MESSAGE_EVENTS.broadcast.key);
              }
              close() {
                for (const peerId in this.connections) {
                  if (this.connections.hasOwnProperty(peerId)) {
                    this.connections[peerId].forEach((connection) => {
                      connection.close(false);
                    });
                  }
                }
                const message = {
                  roomName: this.name
                };
                this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.leave.key, message);
                this.emit(meshRoom_MeshRoom.EVENTS.close.key);
              }
              replaceStream(newStream) {
                this._localStream = newStream;
                for (const peerId in this.connections) {
                  if (this.connections.hasOwnProperty(peerId)) {
                    this.connections[peerId].forEach((connection) => {
                      if (connection.type === "media") {
                        connection.replaceStream(newStream);
                      }
                    });
                  }
                }
              }
              getPeerConnections() {
                const peerConnections = {};
                for (const [peerId, [connection]] of Object.entries(this.connections)) {
                  const pc = connection.getPeerConnection();
                  if (pc) {
                    peerConnections[peerId] = pc;
                  }
                }
                return peerConnections;
              }
              _addConnection(peerId, connection) {
                if (!this.connections[peerId]) {
                  this.connections[peerId] = [];
                }
                this.connections[peerId].push(connection);
              }
              _makeConnections(peerIds, type, options) {
                peerIds.filter((peerId) => {
                  return peerId !== this._peerId;
                }).filter((peerId) => {
                  return !this._hasConnection(peerId);
                }).forEach((peerId) => {
                  let connection;
                  switch (type) {
                    case "data":
                      connection = new dataConnection(peerId, options);
                      break;
                    case "media":
                      connection = new mediaConnection(peerId, options);
                      break;
                    default:
                      return;
                  }
                  connection.startConnection();
                  this._addConnection(peerId, connection);
                  this._setupMessageHandlers(connection);
                  logger.log(`${type} connection to ${peerId} created in ${this.name}`);
                });
              }
              _deleteConnections(peerId) {
                if (this.connections[peerId]) {
                  this.connections[peerId].forEach((connection) => {
                    connection.close(false);
                  });
                  delete this.connections[peerId];
                }
              }
              _getConnection(peerId, connectionId) {
                if (this.connections && this.connections[peerId]) {
                  const conn = this.connections[peerId].filter((connection) => {
                    return connection.id === connectionId;
                  });
                  return conn[0];
                }
                return null;
              }
              _hasConnection(peerId) {
                return this.connections[peerId] && this.connections[peerId].length > 0;
              }
              _setupMessageHandlers(connection) {
                connection.on(peer_connection.EVENTS.offer.key, (offerMessage) => {
                  offerMessage.roomName = this.name;
                  this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.offer.key, offerMessage);
                });
                connection.on(peer_connection.EVENTS.answer.key, (answerMessage) => {
                  answerMessage.roomName = this.name;
                  this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.answer.key, answerMessage);
                });
                connection.on(peer_connection.EVENTS.candidate.key, (candidateMessage) => {
                  candidateMessage.roomName = this.name;
                  this.emit(meshRoom_MeshRoom.MESSAGE_EVENTS.candidate.key, candidateMessage);
                });
                if (connection.type === "media") {
                  connection.on(mediaConnection.EVENTS.stream.key, (remoteStream) => {
                    remoteStream.peerId = connection.remoteId;
                    this.emit(meshRoom_MeshRoom.EVENTS.stream.key, remoteStream);
                  });
                }
              }
              static get EVENTS() {
                return MeshEvents;
              }
              static get MESSAGE_EVENTS() {
                return MeshMessageEvents;
              }
              constructor(name, peerId, options) {
                super(name, peerId, options);
                this.connections = {};
                this._queuedMessages = {};
              }
            }
            var peer_meshRoom = meshRoom_MeshRoom;
            const PeerEvents = new lib_enum["default"]([
              "open",
              "error",
              "call",
              "connection",
              "expiresin",
              "close",
              "disconnected"
            ]);
            class peer_Peer extends events_default.a {
              call(peerId, stream, options = {}) {
                if (!this._checkOpenStatus()) {
                  return;
                }
                options.originator = true;
                options.stream = stream;
                options.pcConfig = this._pcConfig;
                const mc = new mediaConnection(peerId, options);
                mc.startConnection();
                logger.log("MediaConnection created in call method");
                this._addConnection(peerId, mc);
                return mc;
              }
              connect(peerId, options = {}) {
                if (!this._checkOpenStatus()) {
                  return;
                }
                options.pcConfig = this._pcConfig;
                const connection = new dataConnection(peerId, options);
                connection.startConnection();
                logger.log("DataConnection created in connect method");
                this._addConnection(peerId, connection);
                return connection;
              }
              joinRoom(roomName, roomOptions = {}) {
                if (!this._checkOpenStatus()) {
                  return;
                }
                if (!roomName) {
                  const err = new Error("Room name must be defined.");
                  err.type = "room-error";
                  logger.error(err);
                  this.emit(peer_Peer.EVENTS.error.key, err);
                  return null;
                }
                roomOptions.pcConfig = this._pcConfig;
                roomOptions.peerId = this.id;
                if (roomOptions.mode === "sfu") {
                  return this._initializeSfuRoom(roomName, roomOptions);
                }
                return this._initializeFullMeshRoom(roomName, roomOptions);
              }
              getConnection(peerId, connectionId) {
                if (!this._checkOpenStatus()) {
                  return;
                }
                if (this.connections[peerId]) {
                  for (const connection of this.connections[peerId]) {
                    if (connection.id === connectionId) {
                      return connection;
                    }
                  }
                }
                return null;
              }
              get open() {
                return this.socket && this.socket.isOpen;
              }
              destroy() {
                this._cleanup();
                this.disconnect(true);
              }
              disconnect(suppressWarning = false) {
                if (!suppressWarning) {
                  logger.warn(`Use peer's destroy method instead. This method may be removed in future versions.`);
                }
                if (this.open) {
                  this.socket.close();
                  this.emit(peer_Peer.EVENTS.disconnected.key, this.id);
                }
              }
              reconnect() {
                logger.warn(`Recreate peer instance instead. This method may be removed in future versions.`);
                if (!this.open) {
                  this.socket.reconnect();
                }
              }
              updateCredential(newCredential) {
                this.socket.updateCredential(newCredential);
              }
              listAllPeers(cb) {
                if (!this._checkOpenStatus()) {
                  return;
                }
                cb = cb || function() {
                };
                const self1 = this;
                const http = new XMLHttpRequest();
                const url = `${this.socket.signalingServerUrl}/api/apikeys/${this.options.key}/clients/`;
                http.open("get", url, true);
                http.onerror = function() {
                  self1._abort("server-error", "Could not get peers from the server.");
                  cb([]);
                };
                http.onreadystatechange = function() {
                  if (http.readyState !== 4) {
                    return;
                  }
                  if (http.status === 401) {
                    cb([]);
                    const err = new Error("It doesn't look like you have permission to list peers IDs. Please enable the SkyWay REST API on dashboard");
                    err.type = "list-error";
                    logger.error(err);
                    self1.emit(peer_Peer.EVENTS.error.key, err);
                  } else if (http.status === 200) {
                    cb(JSON.parse(http.responseText));
                  } else {
                    cb([]);
                  }
                };
                http.send(null);
              }
              async fetchPeerExists(peerId) {
                if (!this.open) {
                  throw new Error("Peer is not yet connected to signaling server");
                }
                const currentTimestamp = new Date().getTime();
                if (this._lastFetchPeerExistsTime !== void 0 && currentTimestamp - this._lastFetchPeerExistsTime < 1e3) {
                  throw new Error("fetchPeerExists can only be called once per second");
                }
                this._lastFetchPeerExistsTime = currentTimestamp;
                const url = `${this.socket.signalingServerUrl}/api/apikeys/${this.options.key}/peers/${peerId}/exists`;
                const response = await fetch(url);
                if (response.status === 200) {
                  const body = await response.json();
                  return body.exists;
                } else {
                  const body = await response.text();
                  throw new Error(body);
                }
              }
              _checkOpenStatus() {
                if (!this.open) {
                  this._emitNotConnectedError();
                }
                return this.open;
              }
              _emitNotConnectedError() {
                logger.warn("You cannot connect to a new Peer because you are not connecting to SkyWay server now.You can create a new Peer to reconnect, or call reconnect() on this peer if you believe its ID to still be available.");
                const err = new Error("Cannot connect to new Peer before connecting to SkyWay server or after disconnecting from the server.");
                err.type = "disconnected";
                logger.error(err);
                this.emit(peer_Peer.EVENTS.error.key, err);
              }
              _initializeServerConnection(id) {
                this.socket = new socket(this.options.key, {
                  secure: this.options.secure,
                  host: this.options.host,
                  port: this.options.port,
                  dispatcherSecure: this.options.dispatcherSecure,
                  dispatcherHost: this.options.dispatcherHost,
                  dispatcherPort: this.options.dispatcherPort
                });
                this._setupMessageHandlers();
                this.socket.on("error", (error) => {
                  this._abort("socket-error", error);
                });
                this.socket.on("disconnect", () => {
                  this.disconnect(true);
                  const err = new Error("Lost connection to server.");
                  err.type = "socket-error";
                  logger.error(err);
                  this.emit(peer_Peer.EVENTS.error.key, err);
                });
                this.socket.start(id, this.options.token, this.options.credential);
              }
              _initializeSfuRoom(roomName, roomOptions = {}) {
                if (this.rooms[roomName]) {
                  return this.rooms[roomName];
                }
                const sfuRoom = new peer_sfuRoom(roomName, this.id, roomOptions);
                this.rooms[roomName] = sfuRoom;
                this._setupSFURoomMessageHandlers(sfuRoom);
                const data = {
                  roomName,
                  roomType: "sfu"
                };
                this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_JOIN.key, data);
                return sfuRoom;
              }
              _initializeFullMeshRoom(roomName, roomOptions = {}) {
                if (this.rooms[roomName]) {
                  return this.rooms[roomName];
                }
                const meshRoom = new peer_meshRoom(roomName, this.id, roomOptions);
                this.rooms[roomName] = meshRoom;
                this._setupMeshRoomMessageHandlers(meshRoom);
                const data = {
                  roomName,
                  roomType: "mesh"
                };
                this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_JOIN.key, data);
                return meshRoom;
              }
              _setupMessageHandlers() {
                this.socket.on(config.MESSAGE_TYPES.SERVER.OPEN.key, (openMessage) => {
                  this.id = openMessage.peerId;
                  this._pcConfig = Object.assign({}, this.options.config);
                  const iceServers = this._pcConfig.iceServers;
                  this._pcConfig.iceServers = iceServers ? iceServers.slice() : [];
                  const turnCredential = openMessage.turnCredential;
                  let turnUserName;
                  let turnPassword;
                  if (typeof turnCredential === "object") {
                    turnUserName = turnCredential.username;
                    turnPassword = turnCredential.credential;
                  } else if (typeof turnCredential === "string") {
                    turnUserName = `${this.options.key}$${this.id}`;
                    turnPassword = turnCredential;
                  }
                  if (this.options.turn === true && turnUserName && turnPassword) {
                    const turnCombinations = [
                      {
                        protocol: "turn",
                        transport: "tcp"
                      },
                      {
                        protocol: "turn",
                        transport: "udp"
                      }
                    ];
                    const browser = util.detectBrowser();
                    if (browser.name !== "edge") {
                      turnCombinations.push({
                        protocol: "turns",
                        transport: "tcp"
                      });
                    }
                    for (const turnType of turnCombinations) {
                      const protocol = turnType.protocol;
                      const transport = turnType.transport;
                      const iceServer = {
                        urls: `${protocol}:${config.TURN_HOST}:${config.TURN_PORT}?transport=${transport}`,
                        url: `${protocol}:${config.TURN_HOST}:${config.TURN_PORT}?transport=${transport}`,
                        username: turnUserName,
                        credential: turnPassword
                      };
                      this._pcConfig.iceServers.push(iceServer);
                    }
                    logger.log("SkyWay TURN Server is available");
                  } else {
                    logger.log("SkyWay TURN Server is unavailable");
                  }
                  this.emit(peer_Peer.EVENTS.open.key, this.id);
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ERROR.key, (error) => {
                  const err = new Error(error.message);
                  err.type = error.type;
                  logger.error(err);
                  this.emit(peer_Peer.EVENTS.error.key, err);
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.LEAVE.key, (peerId) => {
                  logger.log(`Received leave message from ${peerId}`);
                  this._cleanupPeer(peerId);
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.FORCE_CLOSE.key, ({ src: remoteId, connectionId }) => {
                  const connection = this.getConnection(remoteId, connectionId);
                  if (connection) {
                    connection.close(false);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.AUTH_EXPIRES_IN.key, (remainingSec) => {
                  logger.log(`Credential expires in ${remainingSec}`);
                  this.emit(peer_Peer.EVENTS.expiresin.key, remainingSec);
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.OFFER.key, (offerMessage) => {
                  const roomName = offerMessage.roomName;
                  if (roomName) {
                    const room = this.rooms[roomName];
                    if (room) {
                      room.handleOffer(offerMessage);
                    }
                    return;
                  }
                  const connectionId = offerMessage.connectionId;
                  let connection = this.getConnection(offerMessage.src, connectionId);
                  if (connection) {
                    connection.updateOffer(offerMessage);
                    return;
                  }
                  if (offerMessage.connectionType === "media") {
                    connection = new mediaConnection(offerMessage.src, {
                      connectionId,
                      payload: offerMessage,
                      metadata: offerMessage.metadata,
                      originator: false,
                      queuedMessages: this._queuedMessages[connectionId],
                      pcConfig: this._pcConfig
                    });
                    connection.startConnection();
                    logger.log("MediaConnection created in OFFER");
                    this._addConnection(offerMessage.src, connection);
                    this.emit(peer_Peer.EVENTS.call.key, connection);
                  } else if (offerMessage.connectionType === "data") {
                    connection = new dataConnection(offerMessage.src, {
                      connectionId,
                      payload: offerMessage,
                      metadata: offerMessage.metadata,
                      label: offerMessage.label,
                      dcInit: offerMessage.dcInit,
                      serialization: offerMessage.serialization,
                      queuedMessages: this._queuedMessages[connectionId],
                      pcConfig: this._pcConfig
                    });
                    connection.startConnection();
                    logger.log("DataConnection created in OFFER");
                    this._addConnection(offerMessage.src, connection);
                    this.emit(peer_Peer.EVENTS.connection.key, connection);
                  } else {
                    logger.warn("Received malformed connection type: ", offerMessage.connectionType);
                  }
                  delete this._queuedMessages[connectionId];
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ANSWER.key, (answerMessage) => {
                  const roomName = answerMessage.roomName;
                  if (roomName) {
                    const room = this.rooms[roomName];
                    if (room) {
                      room.handleAnswer(answerMessage);
                    }
                    return;
                  }
                  const connection = this.getConnection(answerMessage.src, answerMessage.connectionId);
                  if (connection) {
                    connection.handleAnswer(answerMessage);
                  } else {
                    this._storeMessage(config.MESSAGE_TYPES.SERVER.ANSWER.key, answerMessage);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.CANDIDATE.key, (candidateMessage) => {
                  const roomName = candidateMessage.roomName;
                  if (roomName) {
                    const room = this.rooms[roomName];
                    if (room) {
                      room.handleCandidate(candidateMessage);
                    }
                    return;
                  }
                  const connection = this.getConnection(candidateMessage.src, candidateMessage.connectionId);
                  if (connection) {
                    connection.handleCandidate(candidateMessage);
                  } else {
                    this._storeMessage(config.MESSAGE_TYPES.SERVER.CANDIDATE.key, candidateMessage);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ROOM_USER_JOIN.key, (roomUserJoinMessage) => {
                  const room = this.rooms[roomUserJoinMessage.roomName];
                  if (room) {
                    room.handleJoin(roomUserJoinMessage);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ROOM_USER_LEAVE.key, (roomUserLeaveMessage) => {
                  const room = this.rooms[roomUserLeaveMessage.roomName];
                  if (room) {
                    room.handleLeave(roomUserLeaveMessage);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ROOM_DATA.key, (roomDataMessage) => {
                  const room = this.rooms[roomDataMessage.roomName];
                  if (room) {
                    room.handleData(roomDataMessage);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ROOM_LOGS.key, (roomLogMessage) => {
                  const room = this.rooms[roomLogMessage.roomName];
                  if (room) {
                    room.handleLog(roomLogMessage.log);
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.ROOM_USERS.key, (roomUserListMessage) => {
                  const room = this.rooms[roomUserListMessage.roomName];
                  if (room) {
                    if (roomUserListMessage.type === "media") {
                      room.makeMediaConnections(roomUserListMessage.userList);
                    } else {
                      room.makeDataConnections(roomUserListMessage.userList);
                    }
                  }
                });
                this.socket.on(config.MESSAGE_TYPES.SERVER.SFU_OFFER.key, (offerMessage) => {
                  const room = this.rooms[offerMessage.roomName];
                  if (room) {
                    room.updateMsidMap(offerMessage.msids);
                    room.handleOffer(offerMessage);
                  }
                });
              }
              _setupConnectionMessageHandlers(connection) {
                connection.on(peer_connection.EVENTS.candidate.key, (candidateMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_CANDIDATE.key, candidateMessage);
                });
                connection.on(peer_connection.EVENTS.answer.key, (answerMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_ANSWER.key, answerMessage);
                });
                connection.on(peer_connection.EVENTS.offer.key, (offerMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_OFFER.key, offerMessage);
                });
                connection.on(peer_connection.EVENTS.forceClose.key, () => {
                  const forceCloseMessage = {
                    dst: connection.remoteId,
                    connectionId: connection.id
                  };
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_FORCE_CLOSE.key, forceCloseMessage);
                });
              }
              _setupRoomMessageHandlers(room) {
                room.on(peer_sfuRoom.MESSAGE_EVENTS.broadcast.key, (sendMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_SEND_DATA.key, sendMessage);
                });
                room.on(peer_sfuRoom.MESSAGE_EVENTS.getLog.key, (getLogMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_GET_LOGS.key, getLogMessage);
                });
                room.on(peer_sfuRoom.MESSAGE_EVENTS.leave.key, (leaveMessage) => {
                  delete this.rooms[room.name];
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_LEAVE.key, leaveMessage);
                });
              }
              _setupSFURoomMessageHandlers(room) {
                this._setupRoomMessageHandlers(room);
                room.on(peer_sfuRoom.MESSAGE_EVENTS.offerRequest.key, (sendMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SFU_GET_OFFER.key, sendMessage);
                });
                room.on(peer_sfuRoom.MESSAGE_EVENTS.answer.key, (answerMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SFU_ANSWER.key, answerMessage);
                });
                room.on(peer_sfuRoom.MESSAGE_EVENTS.candidate.key, (candidateMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SFU_CANDIDATE.key, candidateMessage);
                });
              }
              _setupMeshRoomMessageHandlers(room) {
                this._setupRoomMessageHandlers(room);
                room.on(peer_meshRoom.MESSAGE_EVENTS.offer.key, (offerMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_OFFER.key, offerMessage);
                });
                room.on(peer_meshRoom.MESSAGE_EVENTS.answer.key, (answerMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_ANSWER.key, answerMessage);
                });
                room.on(peer_meshRoom.MESSAGE_EVENTS.candidate.key, (candidateMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.SEND_CANDIDATE.key, candidateMessage);
                });
                room.on(peer_meshRoom.MESSAGE_EVENTS.getPeers.key, (requestMessage) => {
                  this.socket.send(config.MESSAGE_TYPES.CLIENT.ROOM_GET_USERS.key, requestMessage);
                });
              }
              _abort(type, message) {
                logger.error("Aborting!");
                this.disconnect(true);
                const err = new Error(message);
                err.type = type;
                logger.error(err);
                this.emit(peer_Peer.EVENTS.error.key, err);
              }
              _addConnection(peerId, connection) {
                if (!this.connections[peerId]) {
                  this.connections[peerId] = [];
                }
                this.connections[peerId].push(connection);
                this._setupConnectionMessageHandlers(connection);
              }
              _storeMessage(type, message) {
                if (!this._queuedMessages[message.connectionId]) {
                  this._queuedMessages[message.connectionId] = [];
                }
                this._queuedMessages[message.connectionId].push({
                  type,
                  payload: message
                });
              }
              _cleanup() {
                if (this.connections) {
                  for (const peer2 of Object.keys(this.connections)) {
                    this._cleanupPeer(peer2);
                  }
                }
                this.emit(peer_Peer.EVENTS.close.key);
              }
              _cleanupPeer(peer2) {
                if (this.connections[peer2]) {
                  for (const connection of this.connections[peer2]) {
                    connection.close(false);
                  }
                }
              }
              static get EVENTS() {
                return PeerEvents;
              }
              constructor(id, options) {
                super();
                this.connections = {};
                this.rooms = {};
                this._queuedMessages = {};
                if (id && id.constructor === Object) {
                  options = id;
                  id = void 0;
                } else if (id) {
                  id = id.toString();
                }
                const defaultOptions = {
                  debug: logger.LOG_LEVELS.NONE,
                  secure: true,
                  config: config.defaultConfig,
                  turn: true,
                  dispatcherSecure: config.DISPATCHER_SECURE,
                  dispatcherHost: config.DISPATCHER_HOST,
                  dispatcherPort: config.DISPATCHER_PORT
                };
                this.options = Object.assign({}, defaultOptions, options);
                this.options.token = util.randomToken();
                logger.setLogLevel(this.options.debug);
                if (!util.validateId(id)) {
                  this._abort("invalid-id", `ID "${id}" is invalid`);
                  return;
                }
                if (!util.validateKey(options.key)) {
                  this._abort("invalid-key", `API KEY "${this.options.key}" is invalid`);
                  return;
                }
                if (this.options.host === "/") {
                  this.options.host = window.location.hostname;
                }
                if (options.secure === void 0 && this.options.port !== 443) {
                  this.options.secure = void 0;
                }
                this._initializeServerConnection(id);
              }
            }
            var peer = __webpack_exports__["default"] = peer_Peer;
          },
          0: function(module1, exports1) {
          }
        })["default"];
      });
    }
  });

  // EmscriptenBuild/src/heliodor_pre.ts
  var heliodor_pre_exports = {};
  __export(heliodor_pre_exports, {
    OutputVRControllerState: () => OutputVRControllerState,
    PrintMatrix: () => PrintMatrix,
    PrintPosition: () => PrintPosition,
    PrintQuaternion: () => PrintQuaternion,
    adjustCameraPosition: () => adjustCameraPosition,
    checkAndInitVR: () => checkAndInitVR,
    checkVR: () => checkVR,
    g_useVideoStreamFlag: () => g_useVideoStreamFlag,
    getVROneOfTwoButtonValue: () => getVROneOfTwoButtonValue,
    hel_prepareVCUID: () => hel_prepareVCUID,
    helcore_video_play: () => helcore_video_play,
    setState: () => setState,
    videoStreams: () => videoStreams
  });

  // EmscriptenBuild/src/heliodor_core_globals.ts
  init_const();

  // EmscriptenBuild/src/logics/callCGui.ts
  init_const();
  init_domOps();
  init_moduleCaller();
  var hel_reflectCanvasSize = () => {
    if (!worldViewerWindow.g_ReflectCanvasSizeMode)
      return;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    if (width <= 0 || height <= 0) {
      return;
    }
    const mainCanvas2 = getMainCanvasDOMElement();
    if (mainCanvas2 !== void 0) {
      mainCanvas2.width = width;
      mainCanvas2.height = height;
    }
  };
  var hel_resizeWindow = () => {
    hel_reflectCanvasSize();
    const mainCanvas2 = getMainCanvasDOMElement();
    if (mainCanvas2 !== void 0) {
      requestResizeWindow(mainCanvas2);
    }
  };

  // EmscriptenBuild/src/heliodor_core_globals.ts
  init_domOps();
  worldViewerWindow.g_WorldID = void 0;
  worldViewerWindow.g_Skyway_RoomID = "";
  worldViewerWindow.g_Spot = void 0;
  worldViewerWindow.g_ShowWorldSelect = void 0;
  worldViewerWindow.g_Logined = false;
  worldViewerWindow.g_CanvasFileName = "Canvas/CanvasList.json";
  worldViewerWindow.g_CompImageListFileName = "";
  worldViewerWindow.g_CurrentUserName = "Guest";
  worldViewerWindow.g_MainCanvas = void 0;
  worldViewerWindow.g_CanvasIsPortrait = 0;
  worldViewerWindow.g_UseWebGL10 = false;
  worldViewerWindow.g_extPVRTC = null;
  worldViewerWindow.g_TextureCompression_PVRTC = false;
  worldViewerWindow.g_extETC2 = null;
  worldViewerWindow.g_TextureCompression_ETC2 = false;
  worldViewerWindow.g_extASTC = null;
  worldViewerWindow.g_TextureCompression_ASTC = false;
  worldViewerWindow.g_extDXT = null;
  worldViewerWindow.g_TextureCompression_DXT = false;
  worldViewerWindow.g_Use_EXT_shader_texture_lod = false;
  worldViewerWindow.g_Use_EXT_color_buffer_half_float = false;
  worldViewerWindow.g_EXT_color_buffer_float = null;
  worldViewerWindow.g_EXT_color_buffer_half_float = null;
  worldViewerWindow.g_Use_EXT_color_buffer = false;
  worldViewerWindow.g_OES_texture_half_float = null;
  worldViewerWindow.g_Use_OES_texture_half_float = false;
  worldViewerWindow.g_EXT_shader_texture_lod = null;
  worldViewerWindow.g_hel_MixerTabActive = 1;
  worldViewerWindow.g_hel_MixerFade = INITIAL_MIXER_FADER_SETTING;
  worldViewerWindow.g_hel_MixerDistance = INITIAL_MIXER_DISTANCE_SETTING;
  worldViewerWindow.g_hel_MixerMute = INITIAL_MIXER_MUTE_SETTING;
  worldViewerWindow.g_hel_MixerMasterVolume = 1;
  worldViewerWindow.g_hel_MixerMasterMute = 0;
  worldViewerWindow.g_hel_UseLegacyAudio = false;
  worldViewerWindow.g_audioList = [];
  worldViewerWindow.g_hel_Mixer = INITIAL_MIXER_SETTING;
  worldViewerWindow.g_hel_RealMixer = INITIAL_MIXER_REAL_SETTING;
  worldViewerWindow.g_Video = null;
  worldViewerWindow.g_videocanplay = false;
  worldViewerWindow.g_videopaused = false;
  worldViewerWindow.g_videoended = false;
  worldViewerWindow.g_VideoAudioContext = null;
  worldViewerWindow.g_VideoSource = null;
  worldViewerWindow.g_VideoGainNode = null;
  worldViewerWindow.g_VideoHls = null;
  worldViewerWindow.g_VideoHlsConfig = null;
  worldViewerWindow.g_VideoPlayerType = null;
  worldViewerWindow.g_TextCanvasList = [], worldViewerWindow.g_GyroActive = false;
  worldViewerWindow.g_hel_UploadFileImage = null;
  worldViewerWindow.g_InputFile = document.getElementById("input_file"), worldViewerWindow.g_VCUID = "";
  worldViewerWindow.g_configurl = document.getElementById("configurl"), worldViewerWindow.g_localText_configurl = document.getElementById("configurl-text"), worldViewerWindow.g_username = document.getElementById("username"), worldViewerWindow.g_localText_username = document.getElementById("username-text");
  worldViewerWindow.g_Skyway_Start = false;
  worldViewerWindow.g_Status = null;
  worldViewerWindow.g_Log = null;
  worldViewerWindow.g_Skyway_MyName = "Guest";
  worldViewerWindow.g_localStream = null;
  worldViewerWindow.g_SKYWAY_KEY = "37825849-7771-49bd-890e-61971fb4f431";
  worldViewerWindow.g_Skyway_MyAvatar = 0;
  worldViewerWindow.g_Skyway_MyAvatar_ForSend = 0;
  worldViewerWindow.g_Skyway_Use_CustomAvatarIcon = false;
  worldViewerWindow.g_Skyway_CustomAvatarIcon_URL = "";
  worldViewerWindow.g_skyway_set_mic_state_timer = null;
  worldViewerWindow.g_skyway_msg = document.getElementById("msg"), worldViewerWindow.g_skyway_localText = document.getElementById("js-local-text"), worldViewerWindow.g_SkywayPlayerList = [], worldViewerWindow.g_MainCanvas4XR = null;
  worldViewerWindow.g_EnterDialogNetConnectCallFunc = null;
  worldViewerWindow.g_xrwFriendCode = "";
  worldViewerWindow.g_hel_UseSkywayAudioGain = true;
  worldViewerWindow.g_DataFolderName = "data";
  worldViewerWindow.g_ActionProcedureList = [];
  worldViewerWindow.g_OnclickedAvatarProcedureList = [];
  worldViewerWindow.g_OnloadedProcedureList = [];
  worldViewerWindow.g_OnresizeProcedureList = [];
  worldViewerWindow.g_SkywayCommandProcedureList = [];
  worldViewerWindow.g_SkywayMyinfoProcedureList = [];
  worldViewerWindow.g_ReflectCanvasSizeMode = true;
  worldViewerWindow.heliport_funcTable = [];
  worldViewerWindow.heliport_retValue = void 0;
  var mainCanvas = document.getElementById("canvas");
  setMainCanvasDOMElement(mainCanvas);
  hel_reflectCanvasSize();
  if (mainCanvas !== void 0) {
    mainCanvas.onclick = function() {
      worldViewerWindow.g_MainCanvas.focus();
    };
    mainCanvas.oncontextmenu = (e) => {
      e.preventDefault();
    };
  }
  worldViewerWindow.onresize = hel_resizeWindow;
  var setState = () => {
    if (worldViewerWindow.Module !== void 0) {
      worldViewerWindow.Module.setstate = (text) => {
        const status = document.getElementById("status");
        if (!status)
          return;
        status.innerHTML = text;
      };
    }
  };
  setState();

  // EmscriptenBuild/src/heliodor_pre.ts
  __reExport(heliodor_pre_exports, __toESM(require_heliodor_core_shared()));

  // EmscriptenBuild/src/heliodor_core_render_callee.ts
  init_const();
  init_debugLog();
  init_dataOps();
  init_domOps();
  init_platform();
  var hel_checkPVRTC = (context) => {
    setTextureExtOnPvrtc(context.getExtension("WEBGL_compressed_texture_pvrtc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"));
    const pvrtc = getTextureExtOnPvrtc();
    if (pvrtc === void 0) {
      return false;
    }
    const supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
    if (!supportedCompressedTextureFormat) {
      return false;
    }
    const supportsPVRTC_rgb = supportedCompressedTextureFormat.includes(pvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG);
    if (!supportsPVRTC_rgb) {
      return false;
    }
    return supportedCompressedTextureFormat.includes(pvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG);
  };
  var hel_checkETC2 = (context) => {
    setTextureExtOnETC2(context.getExtension("WEBGL_compressed_texture_etc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_etc"));
    const etc2 = getTextureExtOnETC2();
    if (etc2 === void 0) {
      return false;
    }
    const supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
    if (!supportedCompressedTextureFormat) {
      return false;
    }
    const supportsETC2_rgb = supportedCompressedTextureFormat.includes(etc2.COMPRESSED_RGB8_ETC2);
    if (!supportsETC2_rgb) {
      return false;
    }
    return supportedCompressedTextureFormat.includes(etc2.COMPRESSED_RGBA8_ETC2_EAC);
  };
  var hel_checkASTC = (context) => {
    setTextureExtOnAstc(context.getExtension("WEBGL_compressed_texture_astc") || context.getExtension("WEBKIT_WEBGL_compressed_texture_astc"));
    const astc = getTextureExtOnAstc();
    if (astc === void 0) {
      return false;
    }
    const supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
    if (!supportedCompressedTextureFormat) {
      return false;
    }
    return supportedCompressedTextureFormat.includes(astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR);
  };
  var hel_checkDXT = (context) => {
    setTextureExtOnDxt(context.getExtension("EXT_texture_compression_bptc"));
    const dxt = getTextureExtOnDxt();
    if (dxt === void 0) {
      return false;
    }
    const supportedCompressedTextureFormat = context.getParameter(context.COMPRESSED_TEXTURE_FORMATS);
    if (!supportedCompressedTextureFormat) {
      return false;
    }
    const supportsDXT_UNORM = supportedCompressedTextureFormat.includes(dxt.COMPRESSED_RGBA_BPTC_UNORM_EXT);
    if (!supportsDXT_UNORM) {
      return false;
    }
    return supportedCompressedTextureFormat.includes(dxt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT);
  };
  var hel_check_EXT_shader_texture_lod = (context) => {
    setExtShaderTextureLod(context.getExtension("EXT_shader_texture_lod"));
    const lod = getExtShaderTextureLod();
    return lod !== void 0;
  };
  var hel_check_OES_standard_derivatives = (context) => {
    setOesStandardDerivatives(context.getExtension("OES_standard_derivatives"));
    const drv = getOesStandardDerivatives();
    return drv !== void 0;
  };
  var hel_check_EXT_color_buffer = (context) => {
    setExtColorBufferFloat(context.getExtension("EXT_color_buffer_float"));
    setExtColorBufferHalfFloat(context.getExtension("EXT_color_buffer_half_float"));
    const UseFloatBuffer = getExtColorBufferFloat() !== void 0 || getExtColorBufferHalfFloat() !== void 0;
    return UseFloatBuffer;
  };
  var hel_check_WEBGL_depth_texture = (context) => {
    setWebglDepthTexture(context.getExtension("WEBGL_depth_texture"));
    const depthTexture = getWebglDepthTexture();
    return depthTexture !== void 0;
  };
  var hel_check_OES_texture_float = (context) => {
    setOesTextureFloat(context.getExtension("OES_texture_float"));
    const float = getOesTextureFloat();
    return float !== void 0;
  };
  var hel_check_OES_texture_half_float = (context) => {
    setOesTextureHalfFloat(context.getExtension("OES_texture_half_float"));
    const halfFloat = getOesTextureHalfFloat();
    return halfFloat !== void 0;
  };
  var hel_check_OES_texture_float_linear = (context) => {
    setOesTextureFloatLinear(context.getExtension("OES_texture_float_linear"));
    const floatLinear = getOesTextureFloatLinear();
    return floatLinear !== void 0;
  };
  var hel_check_OES_texture_half_float_linear = (context) => {
    setOesTextureHalfFloatLinear(context.getExtension("OES_texture_half_float_linear"));
    const halfFloatLinear = getOesTextureHalfFloatLinear();
    return halfFloatLinear !== void 0;
  };
  var hel_check_EXT_texture_filter_anisotropic = (context) => {
    setExtTextureFilterAnisotropic(context.getExtension("EXT_texture_filter_anisotropic"));
    const filterAnisotropic = getExtTextureFilterAnisotropic();
    return filterAnisotropic !== void 0;
  };
  var hel_check_ANGLE_instanced_arrays = (context) => {
    setAngleInstancedArrays(context.getExtension("ANGLE_instanced_arrays"));
    const instancedArrays = getAngleInstancedArrays();
    return instancedArrays !== void 0;
  };
  worldViewerWindow.initGL = (majorVersion) => {
    const mainCanvas2 = getMainCanvasDOMElement();
    if (mainCanvas2 === void 0) {
      debugLog("canvas is null");
      return 0;
    }
    if (majorVersion === 1)
      setWebGL10Toggle(true);
    if (worldViewerWindow.hel_isiPhone() && !hel_isiPad()) {
      const iOSVer = hel_getiOSVersion();
      console.log("iOS Ver : " + iOSVer.toString());
      if (iOSVer < 1604) {
        setWebGL10Toggle(true);
      }
    }
    if (hel_isiPad() || worldViewerWindow.hel_isMac()) {
      const MacVer = hel_getMacOSVersion();
      console.log("MacOS Ver : " + MacVer.toString());
      if (MacVer > 0 && MacVer < 1604) {
        setWebGL10Toggle(true);
      }
    }
    if (hel_isChrome()) {
      const ChromeVer = hel_getChromeVersion();
      console.log("Chrome Ver : " + ChromeVer);
      if (hel_isAndroid() && ChromeVer >= 120) {
        setWebGL10Toggle(true);
      }
    }
    const glAttribs = {
      alpha: 0,
      premultipliedAlpha: 0,
      depth: true,
      majorVersion,
      minorVersion: 0,
      enableExtensionsByDefault: 1,
      antialias: true
    };
    let webglctx = null;
    if (!getWebGL10Toggle()) {
      glAttribs.antialias = false;
      webglctx = mainCanvas2.getContext("webgl2", glAttribs);
    }
    if (!webglctx) {
      setWebGL10Toggle(true);
      glAttribs.majorVersion = 1;
      for (const contextType of defineYourRenderTypes()) {
        webglctx = mainCanvas2.getContext(contextType, glAttribs);
        if (webglctx)
          break;
      }
    }
    if (!webglctx) {
      debugLog("webgl is null");
      return 0;
    }
    const glctx = GL.registerContext(webglctx, glAttribs);
    if (!glctx) {
      debugLog("glctx is null");
      return 0;
    }
    GL.makeContextCurrent(glctx);
    setTexturePvrtcToggle(hel_checkPVRTC(webglctx));
    setTextureETC2Toggle(hel_checkETC2(webglctx));
    setTextureAstcToggle(hel_checkASTC(webglctx));
    setTextureDxtToggle(hel_checkDXT(webglctx));
    setExtShaderTextureLodToggle(hel_check_EXT_shader_texture_lod(webglctx));
    setOesStandardDerivativesToggle(hel_check_OES_standard_derivatives(webglctx));
    setExtColorBufferToggle(hel_check_EXT_color_buffer(webglctx));
    setOesTextureHalfFloatToggle(hel_check_OES_texture_half_float(webglctx));
    setOesTextureFloatLinearToggle(hel_check_OES_texture_float_linear(webglctx));
    setOesTextureHalfFloatLinearToggle(hel_check_OES_texture_half_float_linear(webglctx));
    setOesTextureFloatToggle(hel_check_OES_texture_float(webglctx));
    setWebglDepthTextureToggle(hel_check_WEBGL_depth_texture(webglctx));
    setExtTextureFilterAnisotropicToggle(hel_check_EXT_texture_filter_anisotropic(webglctx));
    setAngleInstancedArraysToggle(hel_check_ANGLE_instanced_arrays(webglctx));
    setWebGLRenderingContext(webglctx);
    return 1;
  };
  worldViewerWindow.hel_isSupported_ASTC = () => {
    return getTextureAstcToggle();
  };
  worldViewerWindow.hel_isSupported_ETC2 = () => {
    return getTextureETC2Toggle();
  };
  worldViewerWindow.hel_isSupported_DXT = () => {
    return getTextureDxtToggle();
  };
  worldViewerWindow.hel_isSupported_PVRTC = () => {
    return getTexturePvrtcToggle();
  };

  // EmscriptenBuild/src/heliodor_core_video_callee.ts
  init_const();
  init_debugLog();
  init_dataOps();
  init_domOps();
  var helcore_video_node_gain = () => {
    if (!worldViewerWindow.hel_isiPhone() && !worldViewerWindow.hel_isMac()) {
      return;
    }
    if (getVideoAudioContext() === void 0) {
      setVideoAudioContext(new (worldViewerWindow.AudioContext || worldViewerWindow.webkitAudioContext)());
    }
    let videoSource = getVideoSource();
    const audioContext = getVideoAudioContext();
    const video = getVideo();
    if (videoSource === void 0 && audioContext !== void 0 && video !== void 0) {
      setVideoSource(audioContext.createMediaElementSource(video));
      videoSource = getVideoSource();
    }
    const videoGainNode = getVideoGainNode();
    if (videoGainNode === void 0 && videoSource !== void 0 && audioContext !== void 0) {
      const created = audioContext.createGain();
      setVideoGainNode(created);
      videoSource.connect(created);
      created.connect(audioContext.destination);
    }
  };
  worldViewerWindow.g_on_video_frame_capture = (uint8Array, x, y, width, height) => {
    debugLog("worldViewerWindow.g_on_video_frame_capture:", uint8Array, x, y, width, height);
  };
  worldViewerWindow.helcpp_video_Prepare = (loop) => {
    const video = getVideo();
    if (video !== void 0) {
      video.loop = loop;
      return;
    }
    const updatedVideo = document.getElementById("video0");
    setVideo(updatedVideo);
    updatedVideo.loop = loop;
    setVideoEndedToggle(false);
    updatedVideo.onseeking = () => setVideoCanPlayToggle(false);
    updatedVideo.onseeked = () => setVideoCanPlayToggle(true);
    updatedVideo.oncanplay = () => setVideoCanPlayToggle(false);
    updatedVideo.oncanplaythrough = () => {
      setVideoCanPlayToggle(true);
    };
    updatedVideo.onerror = function() {
      this.onerror = null;
    };
    updatedVideo.onended = (event) => {
      setVideoEndedToggle(true);
      worldViewerWindow.hel_setText(ETextParamType_VideoEnded, "");
    };
    updatedVideo.addEventListener("loadedmetadata", () => {
      if (typeof worldViewerWindow.hel_video_on_loadedmetadata === "function") {
        worldViewerWindow.hel_video_on_loadedmetadata();
      }
    });
  };
  var helcore_video_play = (itemName, materialName, fileName, loop, streaming, seekbar) => {
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_PlayVideo, itemName + "," + materialName + "," + fileName + "," + (loop ? "true" : "false") + "," + (streaming ? "true" : "false") + "," + (seekbar ? "true" : "false"));
  };
  worldViewerWindow.hel_video_play = (itemName, materialName, fileName, loop, streaming) => {
    helcore_video_play(itemName, materialName, fileName, loop, streaming, true);
  };
  worldViewerWindow.helcpp_video_play = (videoSrc, videoStreaming) => {
    setVideoSourceUrl(videoSrc);
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    if (videoStreaming !== 0) {
      if (typeof IVSPlayer !== "undefined" && IVSPlayer.isPlayerSupported) {
        worldViewerWindow.g_VideoPlayerType = HEL_VIDEO_PLAYER_IVS;
        helcore_video_node_gain();
        const player = IVSPlayer.create();
        player.attachHTMLVideoElement(video);
        player.load(videoSrc);
        player.play();
      } else if (!worldViewerWindow.hel_isiPhone() && typeof Hls !== "undefined" && Hls.isSupported()) {
        worldViewerWindow.g_VideoPlayerType = HEL_VIDEO_PLAYER_HLS;
        helcore_video_node_gain();
        worldViewerWindow.g_VideoHls = null;
        const hlsConfig = getVideoHlsConfig();
        if (hlsConfig !== void 0) {
          worldViewerWindow.g_VideoHls = new Hls(hlsConfig);
        } else {
          worldViewerWindow.g_VideoHls = new Hls();
        }
        worldViewerWindow.g_VideoHls.loadSource(videoSrc);
        worldViewerWindow.g_VideoHls.attachMedia(video);
        video.play();
        worldViewerWindow.g_VideoHls.startLoad();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        worldViewerWindow.g_VideoPlayerType = HEL_VIDEO_PLAYER_DEFAULT;
        helcore_video_node_gain();
        video.srcObject = null;
        video.src = videoSrc;
        video.play();
      } else {
        debugLog("video streaming not supported");
      }
    } else {
      worldViewerWindow.g_VideoPlayerType = HEL_VIDEO_PLAYER_DEFAULT;
      helcore_video_node_gain();
      video.srcObject = null;
      video.src = videoSrc;
      video.play();
    }
  };
  worldViewerWindow.hel_video_stop = () => {
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_StopVideo, "");
    worldViewerWindow.g_VideoPlayerType = null;
  };
  worldViewerWindow.helcpp_video_stop = () => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    video.pause();
    if (worldViewerWindow.g_VideoPlayerType === HEL_VIDEO_PLAYER_HLS) {
      worldViewerWindow.g_VideoHls.stopLoad();
    }
    worldViewerWindow.g_VideoPlayerType = null;
  };
  worldViewerWindow.helcpp_video_playpause_toggle = async (pause_enable) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    if (pause_enable) {
      video.pause();
      if (worldViewerWindow.g_VideoPlayerType === HEL_VIDEO_PLAYER_HLS) {
        worldViewerWindow.g_VideoHls.stopLoad();
      }
    } else {
      await video.play();
      if (worldViewerWindow.g_VideoPlayerType === HEL_VIDEO_PLAYER_HLS) {
        worldViewerWindow.g_VideoHls.startLoad();
      }
    }
  };
  worldViewerWindow.hel_video_is_paused = () => {
    const video = getVideo();
    if (video === void 0) {
      return true;
    }
    return video.paused;
  };
  worldViewerWindow.hel_video_add_forward = (seconds) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    video.currentTime += seconds;
  };
  worldViewerWindow.hel_video_isplay = () => {
    return worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_IsPlayVideo, "");
  };
  worldViewerWindow.helcpp_video_isplay = () => {
    const video = getVideo();
    if (video === void 0) {
      return false;
    }
    return !(video.loop && getVideoEndedToggle());
  };
  worldViewerWindow.hel_video_add_rewind = (seconds) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    video.currentTime -= seconds;
  };
  worldViewerWindow.hel_video_get_duration = () => {
    const video = getVideo();
    if (video === void 0) {
      return 0;
    }
    return video.duration;
  };
  worldViewerWindow.hel_video_set_currenttime = (sliderRate) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    if (video.duration > 0) {
      video.currentTime = sliderRate * video.duration;
    }
  };
  worldViewerWindow.hel_video_get_currenttime = () => {
    const video = getVideo();
    if (video === void 0) {
      return 0;
    }
    return video.currentTime;
  };
  worldViewerWindow.hel_video_SetHlsConfig = (config) => setVideoHlsConfig(config);
  worldViewerWindow.hel_video_seek = (seconds) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    video.currentTime = seconds;
  };
  worldViewerWindow.hel_video_SetMute = (mute) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    video.muted = mute;
  };
  worldViewerWindow.hel_video_get_slider_rate = () => {
    const video = getVideo();
    if (video === void 0) {
      return 0;
    }
    let sliderRate = 0;
    if (video.duration > 0) {
      sliderRate = video.currentTime / video.duration;
    }
    return sliderRate;
  };
  worldViewerWindow.hel_video_copy_video_frame_to_system = (x, y, width, height) => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    const w = width != null ? width : video.videoWidth;
    const h = height != null ? height : video.videoHeight;
    const findVideoJson = (json) => {
      for (const item of json.items) {
        if (item.clickablenodes != null) {
          for (const node of item.clickablenodes) {
            if (node.eventmap != null) {
              return node;
            }
          }
        }
      }
      return void 0;
    };
    const sceneJsonPath = getSceneJsonPath();
    if (sceneJsonPath === void 0) {
      console.error("sceneJsonPath not found");
      return;
    }
    fetch(sceneJsonPath).then((response) => {
      response.json().then((json) => {
        setSceneJson(json);
        const node = findVideoJson(json);
        if (node != null) {
          setVideoInfo(node);
          worldViewerWindow.hel_setText(ETextParamType_CopyVideoFrameToSystem, `${x},${y},${w},${h}`);
        } else {
          console.error("The video info not found in the scene json file.");
        }
      });
    });
  };
  worldViewerWindow.hel_video_cancel_to_copy_video_frame_to_system = () => {
    const video = getVideo();
    if (video === void 0) {
      return;
    }
    worldViewerWindow.hel_setText(ETextParamType_CancelToCopyVideoFrameToSystem, "");
  };
  worldViewerWindow.hel_video_open_genericwindow = () => {
    worldViewerWindow.hel_setText(ETextParamType_SetGenericWindowState, "movieviewer,open,");
  };
  worldViewerWindow.hel_video_close_genericwindow = () => {
    worldViewerWindow.hel_setText(ETextParamType_SetGenericWindowState, "movieviewer,close,");
  };

  // EmscriptenBuild/src/heliodor_core_videorecorder_callee.ts
  init_const();
  init_dataOps();
  init_domOps();
  worldViewerWindow.hel_release_RecordedVideo = () => {
    var prevBlob = getRecordedVideoBlobURL();
    if (prevBlob !== void 0 && prevBlob !== null) {
      URL.revokeObjectURL(prevBlob);
      setRecordedVideoBlobURL(null);
    }
    setRecordedVideoBlobObj(null);
  };
  worldViewerWindow.hel_start_VideoRecording = () => {
    var recorder = getVideoRecorder();
    if (recorder === void 0 || recorder === null) {
      const MainCanvas = getMainCanvasDOMElement();
      if (MainCanvas === void 0 || MainCanvas === null)
        return;
      const RecordCanvas = document.createElement("canvas");
      RecordCanvas.style.visibility = "hidden";
      RecordCanvas.width = MainCanvas.width;
      RecordCanvas.height = MainCanvas.height;
      setVideoRecordCanvas(RecordCanvas);
      var RecordCtx = RecordCanvas.getContext("2d");
      if (RecordCtx !== null) {
      }
      setVideoRecordContext(RecordCtx);
      recorder = createRecoreder();
      recorder.start();
      setVideoRecorder(recorder);
    }
  };
  var createRecoreder = () => {
    var recorder = null;
    var supportedType = null;
    var extension = null;
    let recordedStream = new MediaStream();
    if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")) {
      supportedType = "video/webm;codecs=vp9,opus";
      extension = "webm";
    } else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8,opus")) {
      supportedType = "video/webm;codecs=vp8,opus";
      extension = "webm";
    } else if (MediaRecorder.isTypeSupported("video/mp4;codecs=avc1")) {
      supportedType = "video/mp4;codecs=avc1";
      extension = "mp4";
    }
    const RecordCanvas = getVideoRecordCanvas();
    if (RecordCanvas !== void 0 && RecordCanvas !== null) {
      let CanvasStream = RecordCanvas.captureStream();
      const videoTrack = CanvasStream.getVideoTracks();
      recordedStream.addTrack(videoTrack[0]);
    }
    var audioList = getAudioList();
    if (audioList !== void 0 && audioList !== null) {
      audioList.forEach((element) => {
        if (element !== null) {
          if (element.isPlaying() && element.getType() == 0) {
            var context = element.getContext();
            if (context !== void 0 && (context === null || context === void 0 ? void 0 : context.state) == "running") {
              var gainNode = element.getGainNode();
              if (gainNode !== void 0) {
                let dest = context.createMediaStreamDestination();
                gainNode.connect(dest);
                let audioStream = dest.stream;
                const audioTracks = audioStream.getTracks();
                const audioTrack = audioTracks[0];
                if (audioStream.active && audioTrack !== void 0 && audioTrack !== null && audioTrack.enabled && !audioTrack.muted) {
                  recordedStream.addTrack(audioTrack);
                }
              }
            }
          }
        }
      });
    }
    if (supportedType !== null && supportedType != "") {
      recorder = new MediaRecorder(recordedStream, {
        mimeType: supportedType
      });
    }
    if (recorder) {
      recorder.ondataavailable = (e) => {
        let videoBlob = new Blob([
          e.data
        ], {
          type: e.data.type
        });
        setRecordedVideoBlobObj(videoBlob);
        const BlobURL = window.URL.createObjectURL(videoBlob);
        setRecordedVideoBlobURL(BlobURL);
      };
    }
    setVideoRecorderExtension(extension);
    return recorder;
  };
  worldViewerWindow.hel_request_frame_for_VideoRecording = () => {
    var recorder = getVideoRecorder();
    if (recorder !== void 0 && recorder !== null) {
      var videoTrack = recorder.stream.getVideoTracks()[0];
      const RecordCanvas = getVideoRecordCanvas();
      const MainCanvas = getMainCanvasDOMElement();
      if (videoTrack !== void 0 && videoTrack !== null && RecordCanvas !== void 0 && RecordCanvas !== null && MainCanvas !== void 0 && MainCanvas !== null) {
        const ctx = getVideoRecordContext();
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(MainCanvas, 0, 0);
      }
    }
  };
  worldViewerWindow.hel_stop_VideoRecording = () => {
    var recorder = getVideoRecorder();
    if (recorder !== void 0 && recorder !== null) {
      recorder.stop();
      let tracks = recorder.stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
        recorder.stream.removeTrack(track);
      });
      setVideoRecorder(null);
      const RecordCanvas = getVideoRecordCanvas();
      if (RecordCanvas !== void 0 && RecordCanvas !== null) {
        RecordCanvas.remove();
        setVideoRecordCanvas(null);
        setVideoRecordContext(null);
      }
    }
  };
  worldViewerWindow.hel_open_recorded_video_preview = () => {
    const BlobURL = getRecordedVideoBlobURL();
    if (BlobURL !== void 0 && BlobURL !== null) {
      if (worldViewerWindow.hel_isiPhone()) {
        window.location.href = BlobURL;
      } else {
        window.open(BlobURL, "_blank");
      }
    }
  };
  worldViewerWindow.hel_convert_webm_to_mp4 = async () => {
    const videoBlob = getRecordedVideoBlobObj();
    var responseData = "";
    if (videoBlob !== void 0 && videoBlob !== null && !worldViewerWindow.hel_isiPhone()) {
      const formData = new FormData();
      formData.append("file", videoBlob);
      await fetch("https://vket-helper-chan.api.vket.com/webm_convert", {
        method: "POST",
        body: formData
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      }).then((data) => {
        responseData = data.images.file;
      });
    } else {
      responseData = getRecordedVideoBlobURL();
    }
    return responseData;
  };
  worldViewerWindow.hel_save_recorded_video = (downloadURL) => {
    if (downloadURL !== void 0 && downloadURL !== null && downloadURL !== "") {
      const extension = "mp4";
      const a = document.createElement("a");
      a.href = downloadURL;
      const today = new Date();
      a.download = "" + today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + "_" + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) + ("00" + today.getSeconds()).slice(-2) + "." + extension;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  worldViewerWindow.hel_get_VideoRecordCanvas = () => {
    return getVideoRecordCanvas();
  };
  worldViewerWindow.hel_get_VideoRecordContext = () => {
    return getVideoRecordContext();
  };

  // EmscriptenBuild/src/CHELAudio.ts
  init_const();
  init_dataOps();
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CHELAudio = class {
    load(fileName, toplay, loop) {
      this.toplay = toplay;
      if (getUseLegacyAudioToggle()) {
        this.audio.src = fileName;
        this.audio.load();
        const that = this;
        if (toplay) {
          that.play(loop);
        }
        this.audio.addEventListener("ended", function() {
          that.playing = false;
        }, false);
      } else {
        const request = new XMLHttpRequest();
        request.open("GET", fileName, true);
        request.responseType = "arraybuffer";
        const that = this;
        request.onload = function() {
          that.context.decodeAudioData(request.response, function(buf) {
            that.source.buffer = buf;
            that.source.connect(that.gainNode);
            that.gainNode.connect(that.context.destination);
            if (toplay) {
              that.play(loop);
            }
          });
        };
        request.send();
      }
    }
    play(loop) {
      if (!this.toplay && this.isPlay())
        return;
      if (this.audio !== void 0) {
        this.audio.loop = loop;
        this.audio.play();
        this.playing = true;
      } else {
        this.source.loop = loop;
        this.source.start(0);
        this.playBeginTime = this.context.currentTime;
        this.playing = true;
      }
      this.toplay = false;
    }
    stop() {
      if (!this.playing)
        return;
      if (this.audio !== void 0) {
        this.audio.pause();
      } else {
        this.source.stop();
      }
      this.playing = false;
    }
    isPlay() {
      if (this.toplay)
        return 1;
      return this.playing ? 1 : 0;
    }
    getPlayTimeAudio() {
      if (!this.playing)
        return 0;
      if (this.audio !== void 0) {
        return 0;
      } else {
        const parseTime = this.context.currentTime - this.playBeginTime;
        return parseInt(parseTime * 1e3, 10);
      }
    }
    setVolume(volume) {
      if (this.audio === void 0) {
        this.gainNode.gain.value = getMixerTab() * volume;
      }
    }
    release() {
      this.stop();
    }
    constructor(type, volume) {
      _defineProperty(this, "type", void 0);
      _defineProperty(this, "toplay", void 0);
      _defineProperty(this, "audio", void 0);
      _defineProperty(this, "playing", void 0);
      _defineProperty(this, "playBeginTime", void 0);
      _defineProperty(this, "context", void 0);
      _defineProperty(this, "source", void 0);
      _defineProperty(this, "gainNode", void 0);
      _defineProperty(this, "getType", () => this.type);
      _defineProperty(this, "isPlaying", () => this.playing);
      _defineProperty(this, "getContext", () => this.context);
      _defineProperty(this, "getGainNode", () => this.gainNode);
      this.type = type;
      this.toplay = false;
      if (getUseLegacyAudioToggle()) {
        this.audio = new Audio();
        this.playing = false;
        this.playBeginTime = 0;
      } else {
        this.context = new (worldViewerWindow.AudioContext || worldViewerWindow.webkitAudioContext)();
        this.playing = false;
        this.playBeginTime = 0;
        if (this.context === void 0) {
          return;
        }
        this.source = this.context.createBufferSource();
        this.gainNode = this.context.createGain();
        this.gainNode.gain.value = volume;
        const that = this;
        this.source.onended = function() {
          const buf = that.source.buffer;
          const ended = that.source.onended;
          that.source.stop();
          that.source = that.context.createBufferSource();
          that.source.onended = ended;
          that.source.buffer = buf;
          that.source.connect(that.gainNode);
          that.playing = false;
        };
      }
    }
  };

  // EmscriptenBuild/src/heliodor_core_audio_callee.ts
  init_const();
  init_dataOps();
  var defineNextAudioIndexFromAudioList = () => {
    const audioList = getAudioList();
    for (let index = 0; index < audioList.length; index++) {
      if (audioList[index] === null || audioList[index] === void 0) {
        return index;
      }
    }
    pushNullToAudioList();
    return audioList.length - 1;
  };
  worldViewerWindow.createAudio = (fileName, type, play, loop, volume) => {
    const index = defineNextAudioIndexFromAudioList();
    const helAudio = new CHELAudio(type, volume);
    setAudioList(helAudio, index);
    helAudio.load(fileName, play, loop);
    return index;
  };
  worldViewerWindow.releaseAudioIndex = (index) => {
    var _audioList_index;
    const audioList = getAudioList();
    if (audioList[index] === null) {
      return;
    }
    (_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.release();
    setAudioList(null, index);
  };
  worldViewerWindow.playAudio = (index, loop) => {
    var _audioList_index;
    const audioList = getAudioList();
    if (audioList[index] === null) {
      return;
    }
    (_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.play(loop);
  };
  worldViewerWindow.stopAudio = (index) => {
    var _audioList_index;
    const audioList = getAudioList();
    if (audioList[index] === null) {
      return;
    }
    (_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.stop();
  };
  worldViewerWindow.isPlayAudio = (index) => {
    var _audioList_index;
    const audioList = getAudioList();
    if (audioList[index] === null) {
      return 0;
    }
    return ((_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.isPlay()) || 0;
  };
  worldViewerWindow.setAudioVolume = (index, realVolume) => {
    var _audioList_index;
    const audioList = getAudioList();
    if (audioList[index] === null) {
      return;
    }
    return (_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.setVolume(realVolume);
  };
  worldViewerWindow.hel_mixer_GetVolume = (type) => {
    return parseFloat(getMixerSettingAt(type));
  };
  worldViewerWindow.hel_mixer_IsMute = (type) => {
    return parseFloat(getMixerMuteAt(type));
  };
  worldViewerWindow.hel_mixer_GetMasterVolume = () => {
    return parseFloat(getMixerMasterVolume());
  };
  worldViewerWindow.hel_mixer_IsMasterMute = () => {
    return parseFloat(getMixerMasterMute());
  };

  // EmscriptenBuild/src/heliodor_core_gui_callee.ts
  init_const();
  init_debugLog();
  init_domOps();
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  worldViewerWindow.hel_video_set_movieviewer_ui = (visible) => {
    const paused = worldViewerWindow.hel_video_is_paused();
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_VideoPlayerCurrentTime");
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_VideoPlayerTotalTime");
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_hud_movie_play");
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_hud_movie_pause");
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_hud_movie_forward");
    worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_hud_movie_rewind");
    if (visible) {
      if (paused) {
        worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_movie_play");
        worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_movie_pause");
      }
    } else {
      worldViewerWindow.hel_canvas_ToggleChange("IsVisible_VideoPlayerCurrentTime");
      worldViewerWindow.hel_canvas_ToggleChange("IsVisible_VideoPlayerTotalTime");
      worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_movie_pause");
      worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_movie_forward");
      worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_movie_rewind");
    }
    let layout_name = "movieviewer";
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "VideoPlayerCurrentTime", visible);
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "VideoPlayerTotalTime", visible);
    if (paused) {
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_play", visible);
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_pause", false);
    } else {
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_play", false);
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_pause", visible);
    }
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_forward", visible);
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_rewind", visible);
    layout_name = "movieviewer_po";
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "VideoPlayerCurrentTime", visible);
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "VideoPlayerTotalTime", visible);
    if (paused) {
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_play", visible);
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_pause", false);
    } else {
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_play", false);
      worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_pause", visible);
    }
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_forward", visible);
    worldViewerWindow.hel_canvas_SetGUIShow(layout_name, "hud_movie_rewind", visible);
  };
  worldViewerWindow.hel_screenshot = () => {
    const mainCanvas2 = getMainCanvasDOMElement();
    if (mainCanvas2 === void 0) {
      debugLog("[ hel_screenshot ] mainCanvas is not assigned. noop");
      return;
    }
    if (worldViewerWindow.hel_isiPhone() && mainCanvas2 !== void 0) {
      window.localStorage["ssBase64"] = mainCanvas2.toDataURL("image/jpeg");
      modalSS.show();
      return;
    }
    mainCanvas2.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      const today = new Date();
      a.download = "" + today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + "_" + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) + ("00" + today.getSeconds()).slice(-2) + ".png";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  worldViewerWindow.hel_openPage = (url) => {
    if (!worldViewerWindow.open(url, "_blank")) {
      worldViewerWindow.location.href = url;
    }
  };
  worldViewerWindow.hel_set_HTMLElement_value = (elementName, value) => {
    var element = document.getElementById(elementName);
    if (element !== void 0 && element != null) {
      element.value = value;
    }
  };
  worldViewerWindow.hel_get_HTMLElement_value = (elementName) => {
    var element = document.getElementById(elementName);
    if (element !== void 0 && element != null) {
      var value = element.value;
      return value !== void 0 && value !== null ? value : "";
    }
    return "";
  };
  worldViewerWindow.hel_get_randomUUID = () => {
    return self.crypto.randomUUID();
  };
  var ModalSS = class {
    show() {
      if (this.container !== null)
        this.container.style.visibility = "visible";
    }
    hide() {
      if (this.container !== null)
        this.container.style.visibility = "hidden";
    }
    constructor() {
      _defineProperty2(this, "container", void 0);
      _defineProperty2(this, "btnOpenSS", void 0);
      _defineProperty2(this, "btnClose", void 0);
      this.container = document.querySelector("#__ss_modal");
      this.btnOpenSS = document.querySelector("#__ss_modal-dialog-btn_open_ss");
      if (this.btnOpenSS !== null) {
        this.btnOpenSS.addEventListener("click", () => {
          this.hide();
        });
      }
      this.btnClose = document.querySelector("#__ss_modal-dialog-btn_close");
      if (this.btnClose !== null) {
        this.btnClose.addEventListener("click", () => {
          this.hide();
        });
      }
    }
  };
  var modalSS = new ModalSS();

  // EmscriptenBuild/src/heliodor_core_gui_caller.ts
  init_const();
  init_dataOps();
  worldViewerWindow.hel_canvas_SetLayoutShow = (layoutName, show) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetLayoutShow," + layoutName + "," + (show ? "true" : "false"));
  };
  worldViewerWindow.hel_canvas_SetGUIShow = (layoutName, guiName, show) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIShow," + layoutName + "," + guiName + "," + (show ? "true" : "false"));
  };
  worldViewerWindow.hel_canvas_ResetGUIPos = (layoutName, guiName) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "ResetGUIPos," + layoutName + "," + guiName);
  };
  worldViewerWindow.hel_canvas_SetGUIText = (layoutName, guiName, text) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIText," + layoutName + "," + guiName + "," + text);
  };
  worldViewerWindow.hel_scene_SetShowNode = (ItemName, NodeName, Show) => {
    worldViewerWindow.hel_setText(ETextParamType_SceneItem, "SetShowNode," + ItemName + "," + NodeName + "," + (Show ? "1" : "0"));
  };
  worldViewerWindow.hel_canvas_ResetToggleDefault = (ToggleName) => {
    const layoutName = "DummyLayout";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "ToggleDefault," + layoutName + "," + ToggleName);
  };
  worldViewerWindow.hel_canvas_ToggleChange = (ToggleName) => {
    const layoutName = "DummyLayout";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "ToggleChange," + layoutName + "," + ToggleName);
  };
  worldViewerWindow.hel_canvas_MakeAvatarIconMap = () => {
    if (typeof worldViewerWindow.hel_set_avatar_iconpath !== "undefined") {
      worldViewerWindow.hel_set_avatar_iconpath();
    }
  };
  worldViewerWindow.hel_canvas_ClearAvatarIconMap = () => {
    const layoutName = "DummyLayout";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "ClearAvatarIconMap," + layoutName + ",true");
  };
  worldViewerWindow.hel_canvas_AddAvatarIconMap = (AvatarId, AvatarIconPath) => {
    const layoutName = "DummyLayout";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "AddAvatarIconMap," + layoutName + "," + AvatarId + "," + AvatarIconPath);
  };
  worldViewerWindow.hel_canvas_ReplaceAvatarIconMap = (AvatarId, AvatarIconPath) => {
    const layoutName = "DummyLayout";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "ReplaceAvatarIconMap," + layoutName + "," + AvatarId + "," + AvatarIconPath);
  };
  worldViewerWindow.hel_canvas_ReplaceMyAvatarIcon = (newAvatarId) => {
    worldViewerWindow.hel_setText(ETextParamType_ReplaceMyAvatarIcon, newAvatarId);
  };
  worldViewerWindow.hel_canvas_SetGUIImage = (layoutName, guiName, fileName) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIImage," + layoutName + "," + guiName + "," + fileName);
  };
  worldViewerWindow.hel_canvas_SetGUIImageUploadTextureClipping = (layoutName, guiName, textureWidth, textureHeight) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIImageUploadTextureClipping," + layoutName + "," + guiName + "," + textureWidth + "," + textureHeight);
  };
  worldViewerWindow.hel_canvas_SetGUIImageResizeRequest = (layoutName, guiName, resizeType) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIImageResizeRequest," + layoutName + "," + guiName + "," + resizeType);
  };
  worldViewerWindow.hel_canvas_SetGUIImageByHTMLCanvas = (layoutName, guiName, canvasID) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIImageByHTMLCanvas," + layoutName + "," + guiName + "," + canvasID);
  };
  worldViewerWindow.hel_canvas_SetGUIImageByUint8Array = (layoutName, guiName, ary_u8) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "SetGUIImageByUint8Array," + layoutName + "," + guiName);
    worldViewerWindow.hel_setBinary(EBinaryParamType_SetGUIImage, ary_u8);
  };
  worldViewerWindow.hel_canvas_GetLayerShow = (layoutName) => {
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "GetLayerShow," + layoutName);
    return getCanvasLayerShow(layoutName);
  };
  worldViewerWindow.hel_canvas_IsPortrait = () => {
    const layoutName = "Dummy";
    worldViewerWindow.hel_setText(ETextParamType_OperateCanvas, "IsPortrait," + layoutName);
    return getCanvasIsPortrait();
  };
  worldViewerWindow.hel_setCanvasLayerShow = (layoutName, isShow) => {
    setCanvasLayerShow(layoutName, isShow);
  };
  worldViewerWindow.hel_getCanvasLayerShow = (layoutName) => {
    return getCanvasLayerShow(layoutName);
  };
  worldViewerWindow.hel_setCanvasIsPortrait = (isPortrait) => {
    setCanvasIsPortrait(isPortrait);
  };
  worldViewerWindow.hel_getCanvasIsPortrait = () => {
    return getCanvasIsPortrait();
  };

  // EmscriptenBuild/src/heliodor_core_misc.ts
  init_const();
  init_dataOps();
  var hel_makeVCUID = () => {
    let Result = "1";
    for (let n = 1; n < 10; n++) {
      Result += String(Math.floor(Math.random() * 10));
    }
    return Result;
  };
  var hel_prepareVCUID = () => {
    const VCUID_CookieName = "VCUID";
    setVCUID(worldViewerWindow.hel_get_cookie(VCUID_CookieName) || "");
    const vcuid = getVCUID();
    if (vcuid === void 0) {
      const updatedVcuid = hel_makeVCUID();
      setVCUID(updatedVcuid);
      worldViewerWindow.hel_set_cookie(VCUID_CookieName, updatedVcuid);
    }
  };
  worldViewerWindow.hel_player_SetMoveEnable = (Flag) => {
    worldViewerWindow.hel_setText(ETextParamType_PlayerMoveEnable, Flag ? "1" : "0");
  };
  worldViewerWindow.hel_send_chat_message_enterkey = (event) => {
    if (event.keyCode === 13 && !event.isComposing) {
      worldViewerWindow.hel_skyway_send_chat_text();
      worldViewerWindow.hel_textchat_send_message();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  worldViewerWindow.hel_scene_PlayItem = (ItemName, Index) => {
    worldViewerWindow.hel_setText(ETextParamType_SceneItem, "Play," + ItemName + "," + Index);
  };
  worldViewerWindow.hel_scene_StopItem = (ItemName) => {
    worldViewerWindow.hel_setText(ETextParamType_StopItem, ItemName);
  };
  worldViewerWindow.hel_player_PlayEmote = (EmoteIndex) => {
    worldViewerWindow.hel_setText(ETextParamType_PlayEmote, EmoteIndex);
  };
  worldViewerWindow.hel_scene_ReplaceTexture = (ItemName, MaterialName, FilePath) => {
    worldViewerWindow.hel_setText(ETextParamType_SceneItem, "ReplaceTexture," + ItemName + "," + MaterialName + "," + FilePath);
  };
  worldViewerWindow.hel_sub_scene_ReplaceTexture = (ItemName, MaterialName, FilePath) => {
    worldViewerWindow.hel_setText(ETextParamType_SubSceneItem, "ReplaceTexture," + ItemName + "," + MaterialName + "," + FilePath);
  };
  worldViewerWindow.hel_scene_ReplaceTextureByHTMLCanvas = (ItemName, MaterialName, CanvasID) => {
    worldViewerWindow.hel_setText(ETextParamType_SceneItem, "ReplaceTextureByHTMLCanvas," + ItemName + "," + MaterialName + "," + CanvasID);
  };
  worldViewerWindow.hel_scene_SetEnableCollider = (ItemName, NodeName, Show) => {
    worldViewerWindow.hel_setText(ETextParamType_SceneItem, "SetEnableCollider," + ItemName + "," + NodeName + "," + Show);
  };
  worldViewerWindow.hel_player_Warp = (X, Y, Z, Angle) => {
    worldViewerWindow.hel_setText(ETextParamType_WarpPlayer, "" + X + "," + Y + "," + Z + "," + Angle);
  };
  worldViewerWindow.hel_player_SetPriority = (PlayerID, Priority) => {
    worldViewerWindow.hel_setText(ETextParamType_SetPlayerPriority, PlayerID + "," + Priority.toString());
  };
  worldViewerWindow.hel_remove_emoji = (text_context) => {
    const regex_conditions = RegExp("\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F", "gu");
    text_context.value = text_context.value.replaceAll(regex_conditions, "*");
  };
  worldViewerWindow.hel_setAvatarFileName = (avatarFileName) => {
    worldViewerWindow.hel_setText(ETextParamType_AvatarFileName, avatarFileName);
  };
  worldViewerWindow.hel_isLoading = () => {
    return worldViewerWindow.hel_setText(ETextParamType_IsLoading, "") !== 0;
  };
  worldViewerWindow.hel_setGlobalComponentFileName = (globalFileName) => {
    worldViewerWindow.hel_setText(ETextParamType_GlobalFileName, globalFileName);
  };
  worldViewerWindow.showGUIdebugTab = (text) => {
    const tab = document.getElementById("GUIdebugTab");
    if (!tab) {
      return;
    }
    tab.innerHTML = text;
  };
  worldViewerWindow.showGUIdebug = (text) => {
    const debug = document.getElementById("GUIdebug");
    if (!debug)
      return;
    debug.innerHTML = text;
  };
  worldViewerWindow.onDebugTableClick = (val) => {
    worldViewerWindow.hel_setText(ETextParamType_GUIDebugInput, String(val));
  };

  // EmscriptenBuild/src/heliodor_lib.ts
  init_const();
  init_debugLog();

  // EmscriptenBuild/src/heliodor_xr.ts
  init_const();
  init_debugLog();

  // EmscriptenBuild/src/logics/assign.ts
  init_const();
  init_dataOps();
  var presetBeforeBoot = () => {
    const worldId = getWorldId();
    const skyRoomId = getSkyRoomId();
    const spotId = getSpotId();
    if (worldId !== void 0) {
      worldViewerWindow.hel_setText(ETextParamType_WorldID, worldId);
    }
    if (skyRoomId !== void 0) {
      worldViewerWindow.hel_setText(ETextParamType_RoomID, skyRoomId);
    }
    if (spotId !== void 0) {
      worldViewerWindow.hel_setText(ETextParamType_SpotName, spotId);
    }
    worldViewerWindow.hel_setText(ETextParamType_LocationHref, location.href);
    worldViewerWindow.hel_setText(ETextParamType_ShowWorldSelect, getWorldSelectedToggle() ? "1" : "0");
  };

  // EmscriptenBuild/src/heliodor_xr.ts
  init_dataOps();
  init_dataOps();
  init_domOps();
  init_moduleCaller();
  var xrButtonNameMulti = "xrStartButtonMulti";
  var xrButtonNameSingle = "xrStartButtonSingle";
  var xrButtonMulti = document.getElementById(xrButtonNameMulti);
  var xrButtonSingle = document.getElementById(xrButtonNameSingle);
  if (xrButtonSingle !== void 0 && xrButtonSingle !== null) {
    xrButtonSingle.onclick = async () => {
      await checkAndInitVR(worldViewerWindow.xrFileName);
    };
  }
  if (xrButtonMulti !== void 0 && xrButtonMulti !== null) {
    xrButtonMulti.onclick = async () => {
      worldViewerWindow.hel_skyway_join();
      worldViewerWindow.hel_skyway_main();
      await worldViewerWindow.hel_skyway_start();
      await checkAndInitVR(worldViewerWindow.xrFileName, 1);
    };
  }
  worldViewerWindow.hel_checkAndInitVR = async () => {
    await checkAndInitVR(worldViewerWindow.xrFileName);
  };
  worldViewerWindow.hel_exitVR = () => {
    const xRSession = getXRSession();
    if (xRSession !== null) {
      xRSession.end();
    }
  };
  var lastPos = [
    0,
    0,
    0
  ];
  worldViewerWindow.XRButtonCheck = () => {
    if (xrButtonSingle !== void 0 && xrButtonSingle !== null) {
      xrButtonSingle.style.visibility = navigator.xr !== void 0 && navigator.xr !== null ? "visible" : "hidden";
    }
    if (xrButtonMulti !== void 0 && xrButtonMulti !== null) {
      xrButtonMulti.style.visibility = navigator.xr !== void 0 && navigator.xr !== null ? "visible" : "hidden";
    }
  };
  var changeWebXRIcons = (flag) => {
    if (flag) {
      worldViewerWindow.hel_canvas_ToggleChange("webxr_all");
    } else {
      worldViewerWindow.hel_canvas_ResetToggleDefault("webxr_all");
    }
  };
  var checkVR = () => {
    const XR = navigator.xr;
    if (XR) {
      XR.isSessionSupported("immersive-vr").then((supported) => {
        if (supported) {
          changeWebXRIcons(true);
        } else {
          debugLog("vr is not supported");
          changeWebXRIcons(false);
        }
      }).catch((err) => {
        debugLog("support check " + err.message);
        changeWebXRIcons(false);
      });
    } else {
      debugLog("Is Not Support WebXR On This Browser.");
      changeWebXRIcons(false);
    }
  };
  var checkAndInitVR = async (sceneFile, IsMulti = 0) => {
    const XR = navigator.xr;
    if (XR) {
      const xrSceneFileName = sceneFile === void 0 ? "Scene/webxrtest.json" : sceneFile;
      XR.isSessionSupported("immersive-vr").then((supported) => {
        if (supported) {
          XR.requestSession("immersive-vr", {
            requiredFeatures: [
              "local-floor"
            ]
          }).then(async (xRSession) => {
            debugLog("call StartVR");
            setXRSession(xRSession);
            await StartVR(0, 0, 0, IsMulti, xrSceneFileName, xRSession);
          }).catch((err) => {
            debugLog("immersive-vr check " + err.message);
          });
        } else {
          debugLog("vr is not supported");
        }
      }).catch((err) => {
        debugLog("support check " + err.message);
      });
    } else {
      debugLog("Is Not Support WebXR On This Browser.");
    }
  };
  var isValid = (val) => {
    if (Number.isNaN(val)) {
      return false;
    }
    return val !== null;
  };
  var isButtonValid = (button) => {
    if (button === void 0) {
      return false;
    }
    if (button === null) {
      return false;
    }
    return isValid(button.value);
  };
  var getVRButtonPressValue = (button) => {
    if (isButtonValid(button)) {
      if (button.value === 0) {
        return button.pressed ? 1 : 0;
      } else {
        return button.value;
      }
    } else {
      return 0;
    }
  };
  var getVROneOfTwoButtonValue = (buttonF, buttonS) => {
    if (isButtonValid(buttonF)) {
      if (buttonF === 0) {
        if (isButtonValid(buttonS)) {
          return buttonS.value;
        }
      } else {
        return buttonF.value;
      }
    } else {
      if (isButtonValid(buttonS)) {
        return buttonS.value;
      }
    }
    return 0;
  };
  var getVROneOfTwoButtonPressedValue = (buttonF, buttonS) => {
    if (isButtonValid(buttonF)) {
      const btnF = getVRButtonPressValue(buttonF);
      if (btnF === 0) {
        if (isButtonValid(buttonS)) {
          return getVRButtonPressValue(buttonS);
        }
      } else {
        return btnF;
      }
    } else {
      if (isButtonValid(buttonS)) {
        return getVRButtonPressValue(buttonS);
      }
    }
    return 0;
  };
  var getVROneOfTwoValue = (first, second) => {
    if (isValid(first)) {
      if (first === 0) {
        if (isValid(second)) {
          return second;
        }
      } else {
        return first;
      }
    } else {
      if (isValid(second)) {
        return second;
      }
    }
    return 0;
  };
  var applyQuaternion = (out, vec, q) => {
    const qx = q[0];
    const qy = q[1];
    const qz = q[2];
    const qw = q[3];
    const x = vec[0];
    const y = vec[1];
    const z = vec[2];
    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;
    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;
    const w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  };
  var nativizeFloatArray = (ptr, farray) => {
    for (let i = 0; i < farray.length; ++i) {
      worldViewerWindow.setValue(ptr + i * 4, farray[i], "float");
    }
    return ptr + farray.length * 4;
  };
  var valueToArray = (iarray, val) => {
    for (let i = 0; i < iarray.length; ++i) {
      iarray[i] = val;
    }
  };
  var NativizeMatrix = (ptr, mat) => {
    for (let i = 0; i < 16; ++i) {
      worldViewerWindow.setValue(ptr + i * 4, mat[i], "float");
    }
    return ptr + 16 * 4;
  };
  var PrintPosition = (pos, name) => {
    let str = name + " : ";
    str += "x=" + pos.x + " , ";
    str += "y=" + pos.y + " , ";
    str += "z=" + pos.z;
    debugLog(str);
  };
  var PrintQuaternion = (q, name) => {
    let str = name + " : ";
    str += "x=" + q.x + " , ";
    str += "y=" + q.y + " , ";
    str += "z=" + q.z;
    debugLog(str);
  };
  var PrintMatrix = (mat, name) => {
    let str = name + " : ";
    for (let i = 0; i < 16; ++i) {
      str += mat[i];
      if (i % 4 === 3) {
        str += "\n";
      } else {
        str += ",";
      }
    }
    debugLog(str);
  };
  var StartVR = async (Type, CharaType, Param1, MultiPlay, StrParam0, session) => {
    if (xrButtonMulti === null) {
      debugLog("[ StartVR ] no XrButton Assigned");
    } else {
      xrButtonMulti.style.visibility = "hidden";
    }
    const status = getStatusDOMElement();
    if (status !== void 0) {
      status.style.visibility = "visible";
    }
    const log = getLogDOMElement();
    if (log !== void 0) {
      log.style.visibility = "visible";
    }
    session.requestReferenceSpace("local-floor").then(async (RefSpace) => {
      worldViewerWindow.hel_setCanvasFileName("Canvas/CanvasList.json");
      await hel_start_vr(Type, CharaType, Param1, MultiPlay === 1, StrParam0, session, RefSpace);
    });
  };
  var OutputVRControllerState = (session) => {
    for (const inputSource of session.inputSources) {
      const handedness = inputSource.handedness;
      const gamepad = inputSource.gamepad;
      let str = "handedness=";
      if (gamepad) {
        str += handedness;
        str += " , gamepad buttons=";
        let strVal = "";
        let strTouch = "";
        let strPress = "";
        for (const button of gamepad.buttons) {
          strVal += button.value + ",";
          strTouch += button.touched + ",";
          strPress += button.pressed + ",";
        }
        debugLog(str);
        debugLog("val=" + strVal);
        debugLog("touch" + strTouch);
        debugLog("press" + strPress);
        let strAxes = "axes=";
        for (const axis of gamepad.axes) {
          strAxes += axis + ",";
        }
        debugLog(strAxes);
      } else {
        debugLog("Gamepad is null");
      }
    }
  };
  var onXRSessionEnd = async (session) => {
    if (session) {
      debugLog("XRSession Is End object=" + session);
      if (session.session !== null) {
        requestToReleaseBoundFrameBuffer();
        session.session = null;
      }
      switchToNoneVR();
      worldViewerWindow.hel_requestAnimationFrame();
    }
  };
  var hel_start_vr = async (Type, CharaType, Param1, MultiPlay, StrParam0, session, XRRefSpace) => {
    session.addEventListener("end", onXRSessionEnd);
    const mainCanvas4Xr = getMainCanvas4XrDOMElement();
    if (mainCanvas4Xr === void 0 || mainCanvas4Xr.width <= 0 || mainCanvas4Xr.height <= 0) {
      return;
    }
    const CanTouch = worldViewerWindow.ontouchstart !== void 0;
    setSceneJsonPath(worldViewerWindow.g_DataFolderName + "/" + StrParam0);
    presetBeforeBoot();
    worldViewerWindow.hel_setText(ETextParamType_Logined, "1");
    worldViewerWindow.hel_setText(ETextParamType_CanvasFileName, getCanvasFileName());
    worldViewerWindow.hel_setText(ETextParamType_CurrentUserName, getCurrentUserName());
    mainCanvas4Xr.focus();
    const WebglCtx4XR = getWebGLRenderingContext();
    await WebglCtx4XR.makeXRCompatible();
    const webglLayer = new worldViewerWindow.XRWebGLLayer(session, WebglCtx4XR);
    await session.updateRenderState({
      baseLayer: webglLayer,
      depthFar: 1e4,
      depthNear: 0.1
    });
    const drawFrameVRClosure = (time, frame) => {
      drawFrameVR(time, frame, XRRefSpace);
    };
    worldViewerWindow.hel_cancelAnimationFrame();
    switchToVR(0, 0);
    session.requestAnimationFrame(drawFrameVRClosure);
  };
  var updateVRController = (frame, refSpace) => {
    const session = frame.session;
    const NUM_OF_CONTROLLERS = 2;
    const CONTROLLER_INFO_NUM = 3 + 4;
    const GAMEPAD_INFO_NUM = 2 + 6;
    const controllerParams = new Float32Array(CONTROLLER_INFO_NUM * NUM_OF_CONTROLLERS);
    const gamepadParams = new Float32Array(GAMEPAD_INFO_NUM * NUM_OF_CONTROLLERS);
    const activates = new Uint8Array(NUM_OF_CONTROLLERS);
    for (let idx = 0; idx < activates.length; ++idx) {
      activates[idx] = 0;
    }
    valueToArray(gamepadParams, 0);
    let controllernum = 0;
    for (const inputSource of session.inputSources) {
      const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);
      let controllerIdx = 0;
      if (!targetRayPose) {
        debugLog("no pose");
        continue;
      } else {
        if (inputSource.handedness === "none") {
          debugLog("not vrcontroller");
          continue;
        }
        controllerIdx = inputSource.handedness === "left" ? 0 : 1;
      }
      ++controllernum;
      activates[controllerIdx] = 1;
      if (inputSource.targetRayMode === "tracked-pointer") {
        const idx = controllerIdx * CONTROLLER_INFO_NUM;
        let pos = targetRayPose.transform.position;
        const rot = targetRayPose.transform.orientation;
        if (inputSource.gripSpace) {
          const gripPose = frame.getPose(inputSource.gripSpace, refSpace);
          if (gripPose) {
            pos = gripPose.transform.position;
          }
        }
        controllerParams[idx] = pos.x;
        controllerParams[1 + idx] = pos.y;
        controllerParams[2 + idx] = -pos.z;
        controllerParams[3 + idx] = -rot.x;
        controllerParams[4 + idx] = -rot.y;
        controllerParams[5 + idx] = rot.z;
        controllerParams[6 + idx] = rot.w;
        const gamepad = inputSource.gamepad;
        if (gamepad === null || gamepad === void 0)
          continue;
        const gpidx = controllerIdx * GAMEPAD_INFO_NUM;
        if (gamepad.axes !== void 0) {
          if (gamepad.axes !== null) {
            if (gamepad.axes.length > 1) {
              gamepadParams[gpidx] = getVROneOfTwoValue(gamepad.axes[0], gamepad.axes[2]);
              gamepadParams[1 + gpidx] = getVROneOfTwoValue(gamepad.axes[1], gamepad.axes[3]);
            }
          }
        }
        if (gamepad.buttons !== void 0) {
          if (gamepad.buttons !== null) {
            gamepadParams[2 + gpidx] = gamepad.buttons[0].value;
            gamepadParams[3 + gpidx] = gamepad.buttons[1].value;
            const axisPressValue = getVROneOfTwoButtonPressedValue(gamepad.buttons[2], gamepad.buttons[3]);
            gamepadParams[4 + gpidx] = axisPressValue;
            gamepadParams[5 + gpidx] = axisPressValue;
            if (gamepad.buttons.length < 4) {
              gamepadParams[6 + gpidx] = 0;
              gamepadParams[7 + gpidx] = 0;
            } else {
              gamepadParams[6 + gpidx] = gamepad.buttons[4].value === null ? 0 : gamepad.buttons[4].value;
              gamepadParams[7 + gpidx] = gamepad.buttons[5].value === null ? 0 : gamepad.buttons[5].value;
            }
          }
        }
      } else {
        debugLog("not tracked-pointer");
      }
    }
    const controllerdata = requestMemoryAllocate(controllerParams.length * 4);
    const gamepaddata = requestMemoryAllocate(gamepadParams.length * 4);
    const activedata = requestMemoryAllocate(activates.length);
    nativizeFloatArray(controllerdata, controllerParams);
    nativizeFloatArray(gamepaddata, gamepadParams);
    requestSetDataToHeap(activates, activedata);
    const isAvailable = requestVRControllerValue(controllernum, activedata, controllerdata, gamepaddata);
    requestReleaseMemoryFor(controllerdata);
    requestReleaseMemoryFor(gamepaddata);
    requestReleaseMemoryFor(activedata);
  };
  var drawFrameVR = (time, frame, XRRefSpace) => {
    const session = frame.session;
    const glLayer = session.renderState.baseLayer;
    const viewerPose = frame.getViewerPose(XRRefSpace);
    if (viewerPose === null) {
      debugLog("xrsession=" + session);
      debugLog("viewerpose=" + viewerPose);
      debugLog("xrrefspace=" + XRRefSpace);
      debugLog("getViewerPos is Failed");
      debugLog("frame=" + frame);
      const drawFrameVRClosure2 = (t, f) => {
        drawFrameVR(t, f, XRRefSpace);
      };
      session.requestAnimationFrame(drawFrameVRClosure2);
      return;
    }
    const NUM_OF_VRCAMERAS = 2;
    const CAMERA_PARAMS = 7;
    const SIZE_OF_VR_VIEWPARAM = (16 + 16 + 4) * 4;
    const data = requestMemoryAllocate(SIZE_OF_VR_VIEWPARAM * NUM_OF_VRCAMERAS);
    const cameraParams = new Float32Array(CAMERA_PARAMS * NUM_OF_VRCAMERAS);
    for (const xrView of viewerPose.views) {
      const viewport = glLayer.getViewport(xrView);
      const eyeIdx = xrView.eye === "left" ? 0 : 1;
      cameraParams[eyeIdx * CAMERA_PARAMS] = xrView.transform.position.x;
      cameraParams[eyeIdx * CAMERA_PARAMS + 1] = xrView.transform.position.y;
      cameraParams[eyeIdx * CAMERA_PARAMS + 2] = xrView.transform.position.z;
      cameraParams[eyeIdx * CAMERA_PARAMS + 3] = xrView.transform.orientation.x;
      cameraParams[eyeIdx * CAMERA_PARAMS + 4] = xrView.transform.orientation.y;
      cameraParams[eyeIdx * CAMERA_PARAMS + 5] = xrView.transform.orientation.z;
      cameraParams[eyeIdx * CAMERA_PARAMS + 6] = xrView.transform.orientation.w;
      let ptr = data + SIZE_OF_VR_VIEWPARAM * eyeIdx;
      worldViewerWindow.setValue(ptr, viewport.x, "float");
      ptr += 4;
      worldViewerWindow.setValue(ptr, viewport.y, "float");
      ptr += 4;
      worldViewerWindow.setValue(ptr, viewport.width, "float");
      ptr += 4;
      worldViewerWindow.setValue(ptr, viewport.height, "float");
      ptr += 4;
      const viewMat = xrView.transform.inverse.matrix;
      viewMat[8] *= -1;
      viewMat[9] *= -1;
      viewMat[10] *= -1;
      ptr = NativizeMatrix(ptr, viewMat);
      const projMat = xrView.projectionMatrix;
      ptr = NativizeMatrix(ptr, projMat);
    }
    const vrcameradata = requestMemoryAllocate(4 * CAMERA_PARAMS * NUM_OF_VRCAMERAS);
    nativizeFloatArray(vrcameradata, cameraParams);
    requestToSetVrCameraPointer(vrcameradata);
    requestReleaseMemoryFor(vrcameradata);
    const posedata = requestMemoryAllocate((3 + 4) * 4);
    const poseParams = new Float32Array(3 + 4);
    poseParams[0] = viewerPose.transform.position.x;
    poseParams[1] = viewerPose.transform.position.y;
    poseParams[2] = viewerPose.transform.position.z;
    poseParams[3] = viewerPose.transform.orientation.x;
    poseParams[4] = viewerPose.transform.orientation.y;
    poseParams[5] = viewerPose.transform.orientation.z;
    poseParams[6] = viewerPose.transform.orientation.w;
    nativizeFloatArray(posedata, poseParams);
    requestSetVrPosePointer(posedata);
    requestReleaseMemoryFor(posedata);
    requestSetVrPointer(data);
    updateVRController(frame, XRRefSpace);
    requestToBindFrameBufferOf(glLayer);
    requestToDrawFrame();
    requestReleaseMemoryFor(data);
    const drawFrameVRClosure = (t, f) => {
      drawFrameVR(t, f, XRRefSpace);
    };
    session.requestAnimationFrame(drawFrameVRClosure);
  };
  var adjustCameraPosition = (XRRefSpace) => {
    const SIZE_OF_FPS_CAMERAPARAM = (3 + 4) * 4;
    const cameradata = requestMemoryAllocate(SIZE_OF_FPS_CAMERAPARAM);
    const isAvailable = requestIfCameraFpsValueAvailable(cameradata);
    if (isAvailable) {
      const camera = [];
      for (let i = 0; i < 7; ++i) {
        camera.push(requestToGetValueOf(cameradata + i * 4));
      }
      let offsetPos = [
        lastPos[0] - camera[0],
        lastPos[1] - camera[1],
        lastPos[2] - camera[2]
      ];
      const q = [
        camera[3],
        camera[4],
        camera[5],
        camera[6]
      ];
      offsetPos = applyQuaternion(offsetPos, offsetPos, q);
      for (let i = 0; i < 3; ++i) {
        lastPos[i] = camera[i];
      }
      const xrRigidTransform = new worldViewerWindow.XRRigidTransform(
        {
          x: offsetPos[0],
          y: offsetPos[1],
          z: offsetPos[2]
        },
        {
          x: 0,
          y: 0,
          z: 0,
          w: 1
        }
      );
      XRRefSpace = XRRefSpace.getOffsetReferenceSpace(xrRigidTransform);
    }
    requestReleaseMemoryFor(cameradata);
    return XRRefSpace;
  };

  // EmscriptenBuild/src/logics/cookieOps.ts
  init_const();
  init_dataOps();
  var hel_mixer_LoadCookie_Volume = () => {
    const VolumeWorld = worldViewerWindow.hel_get_cookie("mixervolume_world");
    if (VolumeWorld !== void 0) {
      setMixerSettingAt(VolumeWorld, HEL_AUDIO_TYPE_WORLD);
    }
    const VolumeVoice = worldViewerWindow.hel_get_cookie("mixervolume_voice");
    if (VolumeVoice !== void 0) {
      setMixerSettingAt(VolumeVoice, HEL_AUDIO_TYPE_VOICE);
    }
    const VolumeSE = worldViewerWindow.hel_get_cookie("mixervolume_se");
    if (VolumeSE !== void 0) {
      setMixerSettingAt(VolumeSE, HEL_AUDIO_TYPE_SE);
    }
    const VolumeSystemSE = worldViewerWindow.hel_get_cookie("mixervolume_systemse");
    if (VolumeSystemSE !== void 0) {
      setMixerSettingAt(VolumeSystemSE, HEL_AUDIO_TYPE_SYSTEMSE);
    }
    const VolumeVideo = worldViewerWindow.hel_get_cookie("mixervolume_video");
    if (VolumeVideo !== void 0) {
      setMixerSettingAt(VolumeVideo, HEL_AUDIO_TYPE_VIDEO);
    }
    const VolumeMaster = worldViewerWindow.hel_get_cookie("mixervolume_master");
    if (VolumeMaster !== void 0) {
      setMixerMasterVolume(VolumeMaster);
    }
  };
  var hel_mixer_LoadCookie_Mute = () => {
    const MuteWorld = worldViewerWindow.hel_get_cookie("mixermute_world");
    if (MuteWorld !== void 0) {
      setMixerMuteAt(MuteWorld, HEL_AUDIO_TYPE_WORLD);
    }
    const MuteVoice = worldViewerWindow.hel_get_cookie("mixermute_voice");
    if (MuteVoice !== void 0) {
      setMixerMuteAt(MuteVoice, HEL_AUDIO_TYPE_VOICE);
    }
    const MuteSE = worldViewerWindow.hel_get_cookie("mixermute_se");
    if (MuteSE !== void 0) {
      setMixerMuteAt(MuteSE, HEL_AUDIO_TYPE_SE);
    }
    const MuteSystemSE = worldViewerWindow.hel_get_cookie("mixermute_systemse");
    if (MuteSystemSE !== void 0) {
      setMixerMuteAt(MuteSystemSE, HEL_AUDIO_TYPE_SYSTEMSE);
    }
    const MuteVideo = worldViewerWindow.hel_get_cookie("mixermute_video");
    if (MuteVideo !== void 0) {
      setMixerMuteAt(MuteVideo, HEL_AUDIO_TYPE_VIDEO);
    }
    const MuteMaster = worldViewerWindow.hel_get_cookie("mixermute_master");
    if (MuteMaster !== void 0) {
      setMixerMasterMute(MuteMaster);
    }
  };

  // EmscriptenBuild/src/heliodor_lib.ts
  init_dataOps();
  init_device();
  init_domOps();

  // EmscriptenBuild/src/logics/mixerOps.ts
  init_const();
  init_dataOps();
  var hel_mixer_UpdateByType = (type) => {
    worldViewerWindow.hel_mixer_SetVolume(type, getMixerSettingAt(type), getMixerMasterVolume(), getMixerFaderSettingAt(type), getMixerDistanceAt(type), getMixerMuteAt(type));
  };
  var hel_mixer_UpdateAll = () => {
    hel_mixer_UpdateByType(HEL_AUDIO_TYPE_VOICE);
    hel_mixer_UpdateByType(HEL_AUDIO_TYPE_VIDEO);
    const audioList = getAudioList();
    for (let index = 0; index < audioList.length; index++) {
      var _audioList_index, _audioList_index1;
      if (audioList[index] === null)
        continue;
      const type = (_audioList_index = audioList[index]) === null || _audioList_index === void 0 ? void 0 : _audioList_index.getType();
      const realVolume = getMixerSettingAt(type) * getMixerFaderSettingAt(type) * getMixerDistanceAt(type) * (getMixerMuteAt(type) !== 0 ? 0 : 1);
      (_audioList_index1 = audioList[index]) === null || _audioList_index1 === void 0 ? void 0 : _audioList_index1.setVolume(realVolume);
    }
  };

  // EmscriptenBuild/src/heliodor_lib.ts
  init_moduleCaller();
  init_platform();
  worldViewerWindow.hel_setCanvasFileName = (canvasFileName) => {
    setCanvasFileName(canvasFileName);
  };
  worldViewerWindow.hel_setCompImageListFileName = (compImageListFileName) => {
    setCompImageListFileName(compImageListFileName);
  };
  var drawFrame = () => {
    updateGamepadsInfo();
    requestToDrawFrame();
    const myReq = worldViewerWindow.requestAnimationFrame(drawFrame);
    setAnimationFrameRequest(myReq);
  };
  worldViewerWindow.hel_SetDataFolderName = (DataFolderName) => {
    setDataFolderName(DataFolderName);
  };
  worldViewerWindow.hel_requestAnimationFrame = () => {
    drawFrame();
  };
  worldViewerWindow.hel_cancelAnimationFrame = () => {
    const request = getAnimationFrameRequest();
    worldViewerWindow.cancelAnimationFrame(request);
  };
  worldViewerWindow.hel_start = (Type, CharaType, Param1, MultiPlay, StrParam0) => {
    setState();
    const mainCanvas2 = getMainCanvasDOMElement();
    if (mainCanvas2 === void 0 || mainCanvas2.width <= 0 || mainCanvas2.height <= 0) {
      debugLog("[ hel_start ] mainCanvas is not assigned. noop");
      return;
    }
    const CanTouch = worldViewerWindow.ontouchstart !== void 0;
    setSceneJsonPath(worldViewerWindow.g_DataFolderName + "/" + StrParam0);
    hel_mixer_LoadCookie_Volume();
    hel_mixer_LoadCookie_Mute();
    hel_prepareVCUID();
    worldViewerWindow.hel_set_show_TextField_configurl(false);
    worldViewerWindow.hel_set_show_TextField_UserName(false);
    worldViewerWindow.hel_gtag("Start", {
      param0: getWorldId(),
      param1: MultiPlay
    });
    presetBeforeBoot();
    worldViewerWindow.hel_setText(ETextParamType_Logined, getLoggedInStatusToggle() ? "1" : "0");
    worldViewerWindow.hel_setText(ETextParamType_CanvasFileName, getCanvasFileName());
    worldViewerWindow.hel_setText(ETextParamType_CompImageListFileName, getCompImageListFileName());
    worldViewerWindow.hel_setText(ETextParamType_CurrentUserName, getCurrentUserName());
    worldViewerWindow.hel_setText(ETextParamType_HeliodorSDKVersion, getHeliodorSdkVersion());
    requestBootStrapGameEngine(Type, CharaType, Param1, StrParam0, CanTouch, MultiPlay, false);
    initializeGamePad();
    mainCanvas2.focus();
    drawFrame();
  };
  worldViewerWindow.hel_startScene = (CharaType, MultiPlay, SceneFileName, IsVR = false) => {
    if (IsVR) {
      checkAndInitVR(SceneFileName, MultiPlay ? 1 : 0);
    } else {
      worldViewerWindow.hel_start(0, CharaType, 0, MultiPlay, SceneFileName);
    }
  };
  worldViewerWindow.hel_onloadedForSystem = () => {
    checkVR();
  };
  document.addEventListener("visibilitychange", () => {
    requestOnWindowActivate(document.visibilityState !== "hidden");
    if (!hel_isMobile())
      return;
    if (document.visibilityState === "hidden") {
      setMixerTab(0);
      hel_mixer_UpdateAll();
      worldViewerWindow.hel_skyway_set_mic_state(false);
      worldViewerWindow.hel_setText(ETextParamType_SetMicState, "0");
      worldViewerWindow.hel_canvas_ResetToggleDefault("voicechat");
    } else if (document.visibilityState === "visible") {
      setMixerTab(1);
      hel_mixer_UpdateAll();
    }
  }, false);
  document.addEventListener("fullscreenchange", () => hel_resizeWindow());
  window.addEventListener("beforeunload", (event) => requestOnBeforeUnload());
  window.addEventListener("pagehide", (event) => requestOnUnload());
  worldViewerWindow.heliport_funcTable = [];
  worldViewerWindow.hel_bindjs_find_func = (objNameList, funcName) => {
    let targetObj = worldViewerWindow;
    for (const objName of objNameList) {
      const newObj = targetObj[objName];
      if (newObj === void 0) {
        return -1;
      }
      targetObj = newObj;
    }
    const func = targetObj[funcName];
    if (func === void 0 || typeof func !== "function") {
      return -1;
    }
    const index = worldViewerWindow.heliport_funcTable.length;
    worldViewerWindow.heliport_funcTable.push(func);
    return index;
  };
  worldViewerWindow.hel_bindjs_call_func = (funcID, asyncReceiver, ...params) => {
    if (funcID < 0 || funcID >= worldViewerWindow.heliport_funcTable.length) {
      return null;
    }
    const result = worldViewerWindow.heliport_funcTable[funcID](...params);
    if (asyncReceiver) {
      result.then(asyncReceiver);
    } else {
      return result;
    }
  };
  worldViewerWindow.hel_debug_showstatus = (flag) => {
    const status = document.getElementById("status");
    if (status) {
      status.style.display = flag ? "block" : "none";
    }
    const log = document.getElementById("log");
    if (log) {
      log.style.display = flag ? "block" : "none";
    }
  };

  // EmscriptenBuild/src/heliodor_skyway.ts
  init_const();
  init_debugLog();
  init_dataOps();
  init_domOps();
  init_moduleCaller();

  // EmscriptenBuild/src/networklib/IHeliNetwork.ts
  var EHeliMicPermissionState;
  (function(EHeliMicPermissionState2) {
    EHeliMicPermissionState2[EHeliMicPermissionState2["Prompt"] = 0] = "Prompt";
    EHeliMicPermissionState2[EHeliMicPermissionState2["Granted"] = 1] = "Granted";
    EHeliMicPermissionState2[EHeliMicPermissionState2["Denied"] = 2] = "Denied";
  })(EHeliMicPermissionState || (EHeliMicPermissionState = {}));

  // EmscriptenBuild/src/networklib/skywaylib/CHeliSkyway.ts
  var import_skyway_js = __toESM(require_skyway());

  // EmscriptenBuild/src/networklib/skywaylib/CHELSkyPlayer.ts
  init_const();
  init_dataOps();
  function _defineProperty3(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CHELSkywayPlayer = class {
    release() {
    }
    getPeerId() {
      return this.peerId;
    }
    setStream(stream) {
      const useSkywayAudioGainToggle = getUseSkywayAudioGainToggle();
      if (!useSkywayAudioGainToggle) {
        return;
      }
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack === null) {
        return;
      }
      this.audio.srcObject = new MediaStream([
        audioTrack
      ]);
      this.audio.muted = worldViewerWindow.hel_isiPhone();
      this.audio.play();
      if (worldViewerWindow.hel_isiPhone()) {
        if (this.context !== void 0) {
          this.source = this.context.createMediaStreamSource(new MediaStream([
            audioTrack
          ]));
          this.audioDestination = this.context.createMediaStreamDestination();
        }
        if (this.gainNode !== void 0 && this.audioDestination !== void 0 && this.source !== void 0) {
          this.source.connect(this.gainNode);
          this.gainNode.connect(this.audioDestination);
        }
      }
      stream.removeTrack(audioTrack);
      if (this.audioDestination !== void 0) {
        stream.addTrack(this.audioDestination.stream.getAudioTracks()[0]);
      }
    }
    setVolume(volume) {
      this.volume = volume;
      this.updateVolume();
    }
    SetVoiceAttenuate(volume) {
      this.attenuateVolume = volume;
      this.updateVolume();
    }
    SetMute(mute) {
      this.mute = mute;
      this.updateVolume();
    }
    updateVolume() {
      const useSkywayAudioGainToggle = getUseSkywayAudioGainToggle();
      if (!useSkywayAudioGainToggle) {
        return;
      }
      if (worldViewerWindow.hel_isiPhone()) {
        if (this.gainNode !== void 0) {
          this.gainNode.gain.value = this.volume * this.attenuateVolume * (this.mute ? 0 : 1);
        }
      } else {
        this.audio.volume = this.volume * this.attenuateVolume * (this.mute ? 0 : 1);
      }
    }
    constructor(peerId, volume) {
      _defineProperty3(this, "peerId", void 0);
      _defineProperty3(this, "context", void 0);
      _defineProperty3(this, "gainNode", void 0);
      _defineProperty3(this, "volume", void 0);
      _defineProperty3(this, "attenuateVolume", void 0);
      _defineProperty3(this, "mute", void 0);
      _defineProperty3(this, "source", void 0);
      _defineProperty3(this, "audioDestination", void 0);
      _defineProperty3(this, "audio", void 0);
      this.peerId = peerId;
      const useSkywayAudioGainToggle = getUseSkywayAudioGainToggle();
      if (useSkywayAudioGainToggle) {
        if (worldViewerWindow.hel_isiPhone()) {
          this.context = new (worldViewerWindow.AudioContext || worldViewerWindow.webkitAudioContext)();
          if (this.context !== void 0) {
            this.gainNode = this.context.createGain();
          }
        }
      }
      this.audio = document.createElement("audio");
      this.volume = volume;
      this.attenuateVolume = 0;
      this.mute = false;
      this.updateVolume();
    }
  };

  // EmscriptenBuild/src/networklib/skywaylib/CHeliSkyway.ts
  init_const();
  init_debugLog();
  init_dataOps();
  init_domOps();
  function _defineProperty4(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CHeliSkyway = class {
    async connect(configKey) {
      if (!navigator.mediaDevices) {
        debugLog("navigator.mediaDevices not found");
        return null;
      }
      const localStream = g_useVideoStreamFlag ? await CHeliSkyway.setLocalAudioStreamWithDummyVideoBy() : await CHeliSkyway.setLocalAudioStreamBy();
      await this.checkMicPermissionState();
      if (localStream == null || this.m_MicPermissionState != EHeliMicPermissionState.Granted) {
        closeLocalStream();
        return null;
      }
      worldViewerWindow.hel_skyway_set_mic_state(false);
      await CHeliSkyway.playLocalStream(localStream);
      const peer = new import_skyway_js.default({
        key: configKey === void 0 ? getSkywayKey() : configKey,
        debug: 0
      });
      this.setPeer(peer);
      peer.on("error", console.error);
      return this.getPeer();
    }
    disconnect() {
      this.leaveRoom();
      this.destroyPeer();
      closeLocalStream();
      CHeliSkyway.resetLocalStream();
    }
    isConnected() {
      const peer = this.getPeer();
      if (peer == null)
        return false;
      return true;
    }
    getPeerId() {
      const peer = this.getPeer();
      if (peer == null)
        return "";
      const id = peer.id !== void 0 ? peer.id : "";
      return id;
    }
    setPeer(peer) {
      this.m_Peer = peer;
    }
    getPeer() {
      return this.m_Peer;
    }
    destroyPeer() {
      if (this.m_Peer == null)
        return;
      this.m_Peer.destroy();
      this.m_Peer = null;
    }
    getMicPermissionState() {
      return this.m_MicPermissionState;
    }
    async checkMicPermissionState() {
      const prevPermissionState = this.m_MicPermissionState;
      try {
        const permissionStatus = await navigator.permissions.query({
          name: "microphone"
        });
        if (permissionStatus.state === "denied") {
          this.m_MicPermissionState = EHeliMicPermissionState.Denied;
        } else if (permissionStatus.state === "granted") {
          this.m_MicPermissionState = EHeliMicPermissionState.Granted;
        } else if (permissionStatus.state === "prompt") {
          this.m_MicPermissionState = EHeliMicPermissionState.Prompt;
        } else {
          this.m_MicPermissionState = EHeliMicPermissionState.Prompt;
        }
      } catch (e) {
        if (getLocalStream() !== void 0) {
          this.m_MicPermissionState = EHeliMicPermissionState.Granted;
        } else {
          this.m_MicPermissionState = EHeliMicPermissionState.Denied;
        }
      }
      if (this.m_IHeliNetworkCallback != null && prevPermissionState != this.m_MicPermissionState) {
        this.m_IHeliNetworkCallback.OnChangedMicPermissionState(this.m_MicPermissionState);
      }
    }
    joinRoom(roomid) {
      const remoteVideos = document.getElementById("js-remote-streams");
      const peer = this.getPeer();
      if (peer == null || !peer.open) {
        debugLog("peer not open");
        return;
      }
      const localStream = getLocalStream();
      if (localStream === void 0) {
        debugLog("localStream is not exist");
        return;
      }
      const roomIdWithSubDomain = CHeliSkyway.addSubDomainRoomId(roomid);
      const room = peer.joinRoom(roomid, {
        mode: "sfu",
        stream: localStream,
        videoReceiveEnabled: true
      });
      this.setSkywayRoom(room);
      room.once("open", () => {
        worldViewerWindow.hel_skyway_receive_data("open", peer.id, "");
        worldViewerWindow.hel_skyway_receive_data("data", peer.id, "name:" + getSkywayName());
        this.sendMyPlayerInfoToAllPlayer();
      });
      room.on("peerJoin", (peerId) => {
        this.createPlayer(peerId);
        this.sendMyPlayerInfoToAllPlayer();
        this.sendScreenShareStart();
      });
      room.on("stream", async (stream) => {
        this.setPlayerStream(stream);
        const remoteVideoStreamTracks = stream.getVideoTracks();
        if (remoteVideoStreamTracks.length > 0) {
          const remoteVideoStream = new MediaStream(remoteVideoStreamTracks);
          const peerId = stream.peerId || stream.id;
          videoStreams.set(peerId, remoteVideoStream);
        }
        const newAudio = document.createElement("audio");
        newAudio.srcObject = stream;
        newAudio.playsInline = true;
        newAudio.setAttribute("data-peer-id", stream.peerId);
        remoteVideos.append(newAudio);
        await newAudio.play().catch(console.error);
      });
      peer.on("call", (mediaConnection) => {
        console.log("Skyway called");
        mediaConnection.answer(getLocalStream());
        mediaConnection.on("stream", async (stream) => {
          console.log("Skyway call stream");
          const updatedVideo = document.getElementById("video0");
          setVideo(updatedVideo);
          const video = getVideo();
          if (video) {
            console.log("video connect");
            video.srcObject = stream;
            video.playsInline = true;
            await video.play().catch(console.error);
          } else {
            console.log("video null");
          }
        });
      });
      room.on("data", ({ data, src }) => {
        if (data === "screenshare:tell") {
          const fn = getSkywayOnTellScreenShareStart();
          if (fn !== void 0) {
            fn();
            return;
          }
        } else if (data === "screenshare:waitstart") {
          const fn = getSkywayOnTellWaitScreenShare();
          if (fn !== void 0) {
            fn();
            return;
          }
        }
        if (data.startsWith("screenshare:")) {
          const paramsScreenShare = data.split(":");
          if (paramsScreenShare[1] === "start") {
            const remoteStream = videoStreams.get(src);
            if (worldViewerWindow.hel_video_is_playing_same_stream(remoteStream)) {
              return;
            }
            if (typeof worldViewerWindow.hel_onReceiveNoticeScreenShareStart === "function") {
              worldViewerWindow.hel_onReceiveNoticeScreenShareStart(src, remoteStream, paramsScreenShare[2], paramsScreenShare[3]);
            }
            this.reserveRemotoVideoStream(remoteStream, paramsScreenShare[2], paramsScreenShare[3]);
            worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_OnReceivedStartScreenShare, "");
          }
          if (paramsScreenShare[1] === "stop") {
            if (typeof worldViewerWindow.hel_onReceiveNoticeScreenShareStop === "function") {
              worldViewerWindow.hel_onReceiveNoticeScreenShareStop(src);
            } else {
              worldViewerWindow.hel_video_stop();
              worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_OnReceivedStopScreenShare, "");
            }
          }
        }
        worldViewerWindow.hel_skyway_receive_data("data", src, data);
        if (data.startsWith("msg:")) {
          worldViewerWindow.hel_chatbadge_ui_update();
        }
      });
      room.on("peerLeave", (peerId) => {
        worldViewerWindow.hel_skyway_release_player(peerId);
        const remoteVideo = remoteVideos.querySelector(`[data-peer-id="${peerId}"]`);
        remoteVideo.srcObject.getTracks().forEach((track) => track.stop());
        remoteVideo.srcObject = null;
        remoteVideo.remove();
        if (videoStreams.has(peerId)) {
          videoStreams.delete(peerId);
          if (typeof worldViewerWindow.hel_onReceiveNoticeScreenShareStop === "function") {
            worldViewerWindow.hel_onReceiveNoticeScreenShareStop(peerId);
          }
        }
        worldViewerWindow.hel_skyway_receive_data("leave", peerId, "");
      });
      room.once("close", () => {
        Array.from(remoteVideos.children).forEach((remoteVideo) => {
          remoteVideo.srcObject.getTracks().forEach((track) => track.stop());
          remoteVideo.srcObject = null;
          remoteVideo.remove();
        });
        this.releaseAllPlayer();
      });
      worldViewerWindow.hel_net_replace_room_url_with_roomid(roomid);
    }
    joinRoomAfterPeerOpen(roomid) {
      const peer = this.getPeer();
      if (peer == null) {
        throw new Error("peer has not been set yet");
      }
      peer.on("open", () => {
        this.joinRoom(roomid);
      });
    }
    leaveRoom() {
      if (this.m_Room == null)
        return;
      this.m_Room.close();
      this.m_Room = null;
    }
    setSkywayRoom(meshRoom) {
      this.m_Room = meshRoom;
    }
    static addSubDomainRoomId(roomid) {
      const parts = location.hostname.split(".");
      const subdomain = parts.shift();
      const skywayRoomId = subdomain + "_" + roomid;
      return skywayRoomId;
    }
    createPlayer(peerId) {
      const skywayPlayer = new CHELSkywayPlayer(peerId, getMixerRealSettingAt(HEL_AUDIO_TYPE_VOICE));
      const skywayPlayerList = this.m_PlayerList;
      for (let n = 0; n < skywayPlayerList.length; n++) {
        if (skywayPlayerList[n] === null) {
          this.setPlayerList(skywayPlayer, n);
          return;
        }
      }
      skywayPlayerList.push(skywayPlayer);
    }
    releasePlayer(peerId) {
      const skywayPlayerList = this.m_PlayerList;
      for (let n = 0; n < skywayPlayerList.length; n++) {
        const skywayPlayer = skywayPlayerList[n];
        if (skywayPlayer === null) {
          continue;
        }
        if (skywayPlayer.getPeerId() === peerId) {
          skywayPlayer.release();
          this.setPlayerList(null, n);
          return;
        }
      }
    }
    setPlayerVoiceMute(peerId, mute) {
      const Player = this.getPlayer(peerId);
      if (Player === null)
        return;
      Player.SetMute(mute);
    }
    setPlayerVoiceAttenuate(peerId, volume) {
      const Player = this.getPlayer(peerId);
      if (Player === null)
        return;
      Player.SetVoiceAttenuate(volume);
    }
    setAllPlayerVoiceVolume(volume) {
      const skywayPlayerList = this.m_PlayerList;
      for (let n = 0; n < skywayPlayerList.length; n++) {
        const skywayPlayer = skywayPlayerList[n];
        if (skywayPlayer === null) {
          continue;
        }
        skywayPlayer.setVolume(volume);
      }
    }
    setPlayerStream(stream) {
      if (!stream.peerId) {
        debugLog("stream.peerId not");
        return;
      }
      let player = this.getPlayer(stream.peerId);
      if (player === null) {
        this.createPlayer(stream.peerId);
        player = this.getPlayer(stream.peerId);
        if (player === null) {
          debugLog("CreatePlayer error : " + stream.peerId);
          return;
        }
      }
      player.setStream(stream);
    }
    getPlayer(peerId) {
      const skywayPlayerList = this.m_PlayerList;
      for (let n = 0; n < skywayPlayerList.length; n++) {
        const skywayPlayer = skywayPlayerList[n];
        if (skywayPlayer === null) {
          continue;
        }
        if (skywayPlayer.getPeerId() === peerId) {
          return skywayPlayer;
        }
      }
      return null;
    }
    sendMyPlayerInfoToAllPlayer() {
      if (!this.isConnected())
        return;
      worldViewerWindow.hel_skyway_send_data("join:" + getSkywayName() + ":" + getSkywayAvatarNumberForSend() + ":" + (getSkywayStartToggle() ? 1 : 0) + ":" + (getSkywayUseCustomAvatarIcon() ? 1 : 0));
      if (getSkywayAvatarNumberForSend() !== -1) {
        worldViewerWindow.hel_skyway_send_data("avatar:" + getSkywayAvatarNumberForSend());
      }
      if (getSkywayUseCustomAvatarIcon() && getSkywayCustomAvatarIconURL() !== "") {
        worldViewerWindow.hel_skyway_send_data("customavataricon:" + getSkywayCustomAvatarIconURL());
      }
      worldViewerWindow.hel_skyway_myinfo_bridge_call();
    }
    sendHeartBeat() {
      if (!this.isInRoom())
        return;
      const numOfPlayers = 1 + worldViewerWindow.getNumOfPlayers(this.getSkywayRoom());
      worldViewerWindow.sendHeartbeat(getSkyRoomId(), numOfPlayers);
    }
    sendData(param) {
      const room = this.getSkywayRoom();
      if (room == null) {
        return;
      }
      room.send(param);
    }
    async connectWithDisplayMedia() {
      const localVideo = document.getElementById("js-local-stream");
      if (!navigator.mediaDevices) {
        debugLog("navigator.mediaDevices not found");
        return;
      }
      const localAudioStream = await CHeliSkyway.setLocalAudioStreamBy();
      const localVideoStream = await navigator.mediaDevices.getDisplayMedia({
        audio: false,
        video: {
          width: {
            ideal: 1280
          },
          height: {
            ideal: 720
          },
          frameRate: {
            ideal: 30
          }
        }
      }).catch(console.error);
      localAudioStream.addTrack(localVideoStream.getVideoTracks()[0]);
      worldViewerWindow.hel_skyway_set_mic_state(false);
      localVideo.muted = true;
      localVideo.srcObject = localAudioStream;
      localVideo.playsInline = true;
      await localVideo.play().catch(console.error);
      this.m_Peer = new import_skyway_js.default({
        key: worldViewerWindow.g_SKYWAY_KEY,
        debug: 0
      });
      this.m_Peer.on("error", console.error);
      this.m_Peer.on("open", () => {
        worldViewerWindow.hel_skyway_join();
      });
    }
    async startScreenShare(videoItemName, videoMaterialName, useCamera, useAudio) {
      if (!navigator.mediaDevices) {
        debugLog("navigator.mediaDevices not found");
        return;
      }
      let localVideoStream;
      if (useCamera) {
        localVideoStream = await navigator.mediaDevices.getUserMedia({
          audio: useAudio,
          video: true
        }).catch(console.error);
      } else {
        localVideoStream = await CHeliSkyway.setLocalScreenShareStreamBy(useAudio);
      }
      if (!localVideoStream) {
        return;
      }
      localVideoStream.getVideoTracks()[0].addEventListener("ended", () => {
        worldViewerWindow.hel_skyway_stop_screen_sharing_via_room();
      });
      this.replaceLocalStream(localVideoStream);
      worldViewerWindow.hel_video_stop();
      helcore_video_play(videoItemName, videoMaterialName, "./Video/blankVideo.mp4", true, false, false);
      const video = getVideo();
      if (video !== void 0) {
        const previewVideoStream = new MediaStream();
        previewVideoStream.addTrack(localVideoStream.getVideoTracks()[0]);
        video.srcObject = previewVideoStream;
        await video.play();
      }
      this.setScreenShareCurrentInfo(videoItemName, videoMaterialName);
      setTimeout(() => {
        this.sendScreenShareStart();
      }, 1e3);
      if (typeof worldViewerWindow.hel_onScreenShareStart === "function") {
        worldViewerWindow.hel_onScreenShareStart();
      }
      worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_OnStartScreenShare, "");
    }
    async stopScreenShare() {
      worldViewerWindow.hel_video_stop();
      const localStream = getLocalStream();
      if (localStream === void 0) {
        return;
      }
      localStream.getVideoTracks().forEach((track) => track.stop());
      localStream.removeTrack(localStream.getVideoTracks()[0]);
      const canvas = document.createElement("canvas");
      canvas.getContext("2d");
      const dummyTrack = canvas.captureStream().getVideoTracks()[0];
      localStream.addTrack(dummyTrack);
      setLocalStream(localStream);
      this.replaceLocalStream(localStream);
      worldViewerWindow.hel_skyway_send_data(`screenshare:stop`);
      worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_OnStopScreenShare, "");
    }
    setScreenShareCurrentInfo(videoItemName, videoMaterialName) {
      this.m_ScreenShare_CurrentVideoItemName = videoItemName;
      this.m_ScreenShare_CurrentVideoMaterialName = videoMaterialName;
    }
    sendScreenShareStart() {
      if (this.m_ScreenShare_CurrentVideoItemName === "")
        return;
      if (this.m_ScreenShare_CurrentVideoMaterialName === "")
        return;
      worldViewerWindow.hel_skyway_send_data(`screenshare:start:${this.m_ScreenShare_CurrentVideoItemName}:${this.m_ScreenShare_CurrentVideoMaterialName}`);
    }
    reserveRemotoVideoStream(remoteVideoStream, videoItemName, videoMaterialName) {
      this.m_skyway_reseved_remoteVideoStream = remoteVideoStream;
      this.m_skyway_reseved_videoItemName = videoItemName;
      this.m_skyway_reseved_videoMaterialName = videoMaterialName;
    }
    playScreenShare() {
      worldViewerWindow.hel_skyway_send_data("screenshare:waitstart");
      if (this.m_Room == null)
        return;
      this.m_Room.on("stream", (stream) => {
        const video = getVideo();
        if (video !== void 0) {
          if (video.srcObject !== stream) {
            const videoTracks = stream.getVideoTracks();
            if (videoTracks.length > 0) {
              video.srcObject = stream;
              video.playsInline = true;
            }
          }
        }
      });
    }
    playScreenShareReserved() {
      worldViewerWindow.hel_skyway_play_remote_video_stream(this.m_skyway_reseved_remoteVideoStream, this.m_skyway_reseved_videoItemName, this.m_skyway_reseved_videoMaterialName);
    }
    setCallback(callback) {
      this.m_IHeliNetworkCallback = callback;
    }
    static async setLocalAudioStreamWithDummyVideoBy() {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      }).catch(console.error);
      if (localStream === void 0 || localStream === null) {
        return null;
      }
      const canvas = document.createElement("canvas");
      canvas.getContext("2d");
      localStream.addTrack(canvas.captureStream().getVideoTracks()[0]);
      setLocalStream(localStream);
      return localStream;
    }
    static async setLocalAudioStreamBy() {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      }).catch(console.error);
      setLocalStream(localStream);
      return localStream;
    }
    static async setLocalScreenShareStreamBy(useAudio) {
      const localStream = getLocalStream();
      const localScreenStream = await navigator.mediaDevices.getDisplayMedia({
        audio: useAudio,
        video: {
          width: {
            ideal: 1280
          },
          height: {
            ideal: 720
          },
          frameRate: {
            ideal: 30
          }
        }
      }).catch(console.error);
      if (!localScreenStream || localStream === void 0) {
        return null;
      }
      localStream.removeTrack(localStream.getVideoTracks()[0]);
      localStream.addTrack(localScreenStream.getVideoTracks()[0]);
      if (useAudio) {
        localStream.addTrack(localScreenStream.getAudioTracks()[0]);
      }
      setLocalStream(localStream);
      return localStream;
    }
    replaceLocalStream(stream) {
      if (this.m_Room == null) {
        console.log("replaceLocalStream : m_room is null");
        return;
      }
      this.m_Room.replaceStream(stream);
      setLocalStream(stream);
    }
    static async playLocalStream(localStream) {
      const localVideo = CHeliSkyway.getLocalVideoElement();
      localVideo.muted = true;
      localVideo.srcObject = localStream;
      localVideo.playsInline = true;
      await localVideo.play().catch(console.error);
    }
    static resetLocalStream() {
      const localVideo = CHeliSkyway.getLocalVideoElement();
      localVideo.srcObject = null;
      localVideo.load();
    }
    static getLocalVideoElement() {
      return document.getElementById("js-local-stream");
    }
    setPlayerList(skywayPlayer, index) {
      this.m_PlayerList[index] = skywayPlayer;
    }
    releaseAllPlayer() {
      const skywayPlayerList = this.m_PlayerList;
      for (let n = 0; n < skywayPlayerList.length; n++) {
        const skywayPlayer = skywayPlayerList[n];
        if (skywayPlayer === null) {
          continue;
        }
        worldViewerWindow.hel_skyway_receive_data("leave", skywayPlayer.getPeerId(), "");
        skywayPlayer.release();
        this.setPlayerList(null, n);
      }
    }
    getSkywayRoom() {
      return this.m_Room;
    }
    isInRoom() {
      return this.m_Room != null;
    }
    constructor() {
      _defineProperty4(this, "m_Peer", null);
      _defineProperty4(this, "m_MicPermissionState", EHeliMicPermissionState.Prompt);
      _defineProperty4(this, "m_Room", null);
      _defineProperty4(this, "m_PlayerList", []);
      _defineProperty4(this, "m_ScreenShare_CurrentVideoItemName", "");
      _defineProperty4(this, "m_ScreenShare_CurrentVideoMaterialName", "");
      _defineProperty4(this, "m_skyway_reseved_remoteVideoStream", null);
      _defineProperty4(this, "m_skyway_reseved_videoItemName", "");
      _defineProperty4(this, "m_skyway_reseved_videoMaterialName", "");
      _defineProperty4(this, "m_IHeliNetworkCallback", null);
    }
  };

  // EmscriptenBuild/src/networklib/CHeliNetworkCallback.ts
  init_const();
  var CHeliNetworkCallback = class {
    OnChangedMicPermissionState(MicPermissionState) {
      worldViewerWindow.hel_postMessage(worldViewerWindow.ETextParamType_OnChangedMicPermissionState, MicPermissionState.toString());
    }
  };

  // EmscriptenBuild/src/networklib/heliodor_networklib.ts
  var g_pIHeliNetwork = null;
  var CreateHeliNetwork = () => {
    SetIHeliNetwork(new CHeliSkyway());
  };
  var SetIHeliNetwork = (pIHeliNetwork) => {
    g_pIHeliNetwork = pIHeliNetwork;
    g_pIHeliNetwork.setCallback(new CHeliNetworkCallback());
  };
  var GetIHeliNetwork = () => {
    return g_pIHeliNetwork;
  };
  CreateHeliNetwork();

  // EmscriptenBuild/src/heliodor_skyway.ts
  var g_useVideoStreamFlag = false;
  var videoStreams = /* @__PURE__ */ new Map();
  worldViewerWindow.hel_set_video_stream_use = (flag) => {
    g_useVideoStreamFlag = flag;
    return g_useVideoStreamFlag;
  };
  worldViewerWindow.hel_get_video_stream_use = () => {
    return g_useVideoStreamFlag;
  };
  worldViewerWindow.hel_skyway_release_player = (peerId) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.releasePlayer(peerId);
  };
  worldViewerWindow.hel_skyway_get_player = (peerId) => {
    const pIHeliNetwork = GetIHeliNetwork();
    if (pIHeliNetwork == null)
      return null;
    return pIHeliNetwork.getPlayer(peerId);
  };
  worldViewerWindow.hel_skyway_stream = (stream) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.setPlayerStream(stream);
  };
  worldViewerWindow.hel_skyway_get_peerID = () => {
    var _GetIHeliNetwork;
    return (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.getPeerId();
  };
  worldViewerWindow.hel_skyway_SetMixerVolume = (volume) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.setAllPlayerVoiceVolume(volume);
  };
  worldViewerWindow.hel_skyway_set_roomid = (roomid) => {
    setSkyRoomId(roomid);
  };
  worldViewerWindow.hel_skyway_get_roomid = () => {
    return getSkyRoomId();
  };
  worldViewerWindow.hel_skyway_set_avatar_from_cookie = () => {
    const avatar = worldViewerWindow.hel_get_cookie("Avatar");
    if (avatar !== void 0 && avatar !== -1) {
      setSkywayAvatarNumber(avatar);
      setSkywayAvatarNumberForSend(avatar);
    }
  };
  worldViewerWindow.hel_skyway_receive_data = (cmd, id, param) => {
    const data = cmd + ":" + id + ":" + param;
    handleRtcCommandMessage(cmd, id, param);
    requestSendingReceivedPacketsFromSkyway(data);
  };
  worldViewerWindow.hel_skyway_add_text_chat = (id, text) => {
    worldViewerWindow.hel_skyway_receive_data("data", id, "msg:" + text);
    if (typeof worldViewerWindow.hel_if_displayChatMessage === "function") {
      worldViewerWindow.hel_if_displayChatMessage(id, text);
    }
    worldViewerWindow.hel_chatbadge_ui_update();
  };
  worldViewerWindow.hel_chatbadge_ui_update = () => {
    if (typeof worldViewerWindow.hel_if_displayChatBadge === "function") {
      worldViewerWindow.hel_if_displayChatBadge();
    } else {
      worldViewerWindow.hel_canvas_ResetToggleDefault("IsVisible_hud_textchatbadge");
      if (worldViewerWindow.hel_canvas_GetLayerShow("ChatLogView") || worldViewerWindow.hel_canvas_GetLayerShow("config_base") || worldViewerWindow.hel_canvas_GetLayerShow("photo_layer")) {
      } else {
        worldViewerWindow.hel_canvas_ToggleChange("IsVisible_hud_textchatbadge");
        worldViewerWindow.hel_canvas_SetGUIShow("HUD", "hud_textchatbadge", true);
      }
    }
  };
  worldViewerWindow.hel_skyway_SetVoiceMute = (peerId, mute) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.setPlayerVoiceMute(peerId, mute);
  };
  worldViewerWindow.hel_skyway_SetVoiceAttenuate = (peerId, volume) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.setPlayerVoiceAttenuate(peerId, volume);
  };
  worldViewerWindow.hel_skyway_send_heartbeat = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.sendHeartBeat();
  };
  worldViewerWindow.hel_skyway_send_data = (param) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.sendData(param);
  };
  worldViewerWindow.hel_skyway_join = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.joinRoom(getSkyRoomId());
  };
  worldViewerWindow.hel_skyway_send_myinfo = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.sendMyPlayerInfoToAllPlayer();
  };
  var handleRtcCommandMessage = (cmd, id, param) => {
    if (cmd === "data" && param.startsWith("join:")) {
      noticeHeliScriptPlayerJoin(id, param);
    }
    if (cmd === "leave") {
      noticeHeliScriptPlayerLeave(id, param);
    }
  };
  var noticeHeliScriptPlayerJoin = (playerId, data) => {
    requestOnVCPlayerJoin(playerId, data);
  };
  var noticeHeliScriptPlayerLeave = (playerId, data) => {
    requestOnVCPlayerLeave(playerId, data);
  };
  worldViewerWindow.initializePeer = async (configKey) => {
    var _GetIHeliNetwork;
    await ((_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.connect(configKey));
  };
  worldViewerWindow.hel_net_add_EnterDialog_func = (callFunc) => {
    if (worldViewerWindow.g_EnterDialogNetConnectCallFunc !== void 0) {
      worldViewerWindow.g_EnterDialogNetConnectCallFunc = callFunc;
    }
  };
  worldViewerWindow.hel_net_connect = async (configKey) => {
    worldViewerWindow.hel_skyway_main(configKey);
  };
  worldViewerWindow.hel_net_connect_random_room = async (configKey) => {
    worldViewerWindow.getRandomRoom(getWorldId(), {
      done: (response) => {
        const room_id = response.data.room_id;
        debugLog(`[ getRandomRoom ] room_id = ${room_id}`);
        setSkyRoomId(room_id);
        worldViewerWindow.hel_skyway_main(configKey);
      },
      error: (error) => debugLog(`[ getRandomRoom ] error = ${error}`)
    });
  };
  worldViewerWindow.hel_net_disconnect = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.disconnect();
  };
  worldViewerWindow.hel_net_initialize = async () => {
    var _GetIHeliNetwork;
    await ((_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.connect());
  };
  worldViewerWindow.hel_net_connect_room = (roomid) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.joinRoomAfterPeerOpen(roomid);
  };
  worldViewerWindow.hel_net_disconnect_room = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.leaveRoom();
  };
  worldViewerWindow.hel_net_connect_talk = (talkid) => {
  };
  worldViewerWindow.hel_net_disconnect_talk = () => {
  };
  worldViewerWindow.hel_net_set_room_url = (url) => {
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_SetRoomURL, url);
  };
  worldViewerWindow.hel_net_replace_room_url_with_roomid = (roomid) => {
    var url = new URL(location.href);
    var search_params = url.searchParams;
    search_params.set("roomid", roomid);
    url.search = search_params.toString();
    var new_url = url.toString();
    window.history.pushState("", "", new_url);
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_RoomID, roomid);
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_LocationHref, new_url);
  };
  worldViewerWindow.hel_net_get_mic_permission_state = () => {
    const pIHeliNetwork = GetIHeliNetwork();
    if (pIHeliNetwork == null)
      return 0;
    return pIHeliNetwork.getMicPermissionState();
  };
  worldViewerWindow.hel_skyway_main = async (configKey) => {
    var _GetIHeliNetwork, _GetIHeliNetwork1;
    await ((_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.connect(configKey));
    (_GetIHeliNetwork1 = GetIHeliNetwork()) === null || _GetIHeliNetwork1 === void 0 ? void 0 : _GetIHeliNetwork1.joinRoomAfterPeerOpen(getSkyRoomId());
  };
  worldViewerWindow.hel_skyway_send_chat_text = (focus = true) => {
    const skywayLocalText = getSkywayLocalTextDOMElement();
    if (skywayLocalText === void 0 || skywayLocalText.value === "") {
      return;
    }
    const value = skywayLocalText.value;
    worldViewerWindow.hel_remove_emoji(skywayLocalText);
    const replace_text = worldViewerWindow.hel_skyway_to_code_colon(value);
    worldViewerWindow.hel_skyway_send_data("msg:" + replace_text);
    const pIHeliNetwork = GetIHeliNetwork();
    var id = "";
    if (pIHeliNetwork != null) {
      id = pIHeliNetwork.getPeerId();
    }
    worldViewerWindow.hel_skyway_add_text_chat(id, replace_text);
    skywayLocalText.value = "";
    const mainCanvas2 = getMainCanvasDOMElement();
    if (focus && mainCanvas2 !== void 0) {
      mainCanvas2.focus();
    }
    worldViewerWindow.hel_gtag("SendTextChat", {
      param0: getWorldId()
    });
  };
  worldViewerWindow.apiAjax = (method, url, option) => {
    const api_url = SKYWAY_API_HOST + url;
    const payload = option.data === void 0 ? null : option.data;
    const ajax = new XMLHttpRequest();
    ajax.open(method, api_url);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajax.send(JSON.stringify(payload));
    ajax.addEventListener("load", function(e) {
      try {
        if (e.target === null || e.target === void 0 || !("response" in e.target)) {
          return;
        }
        const response = JSON.parse(e.target["response"]);
        if (e.target["status"] == 200) {
          if (option.done !== void 0 && option.done !== null) {
            option.done(response);
          }
        } else {
          if (option.error !== void 0 && option.error !== null) {
            option.error(response);
          }
        }
      } catch (error) {
        debugLog(error);
      }
    }, false);
  };
  worldViewerWindow.getRandomRoom = (world_id, option) => {
    if (!world_id) {
      return;
    }
    worldViewerWindow.apiAjax("GET", "/rooms/random/" + world_id, {
      done: option === void 0 ? void 0 : option.done,
      error: option === void 0 ? void 0 : option.error
    });
  };
  worldViewerWindow.createNewRoom = (world_id, option) => {
    if (!world_id) {
      return;
    }
    worldViewerWindow.apiAjax("POST", "/rooms", {
      data: {
        world_id
      },
      done: option === void 0 ? void 0 : option.done,
      error: option === void 0 ? void 0 : option.error
    });
  };
  worldViewerWindow.sendHeartbeat = (room_id, player_count, option) => {
    if (!room_id || !player_count) {
      return;
    }
    worldViewerWindow.apiAjax("POST", "/rooms/" + room_id + "/heartbeat", {
      data: {
        player_count
      },
      done: option === void 0 ? void 0 : option.done,
      error: option === void 0 ? void 0 : option.error
    });
  };
  worldViewerWindow.hel_skyway_to_code_colon = (text) => {
    return text.replace(":", "&colon;");
  };
  worldViewerWindow.hel_skyway_to_char_colon = (text) => {
    return text.replace("&colon;", ":");
  };
  worldViewerWindow.hel_skyway_main_with_display_media = async () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.connectWithDisplayMedia();
  };
  worldViewerWindow.hel_skyway_start_screen_sharing_via_room = async (videoItemName, videoMaterialName, useCamera, useAudio) => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.startScreenShare(videoItemName, videoMaterialName, useCamera, useAudio);
  };
  worldViewerWindow.hel_skyway_stop_screen_sharing_via_room = async () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.stopScreenShare();
  };
  worldViewerWindow.hel_skyway_play_remote_video_stream_reserved = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.playScreenShareReserved();
  };
  worldViewerWindow.hel_skyway_play_remote_video_stream = (remoteVideoStream, videoItemName, videoMaterialName) => {
    worldViewerWindow.hel_video_stop();
    helcore_video_play(videoItemName, videoMaterialName, "./Video/blankVideo.mp4", true, false, false);
    setTimeout(() => {
      if (worldViewerWindow.g_Video !== null) {
        worldViewerWindow.g_Video.srcObject = remoteVideoStream;
        worldViewerWindow.g_Video.play();
      }
    }, 500);
    worldViewerWindow.hel_setText(worldViewerWindow.ETextParamType_OnPlayScreenShare, "");
  };
  worldViewerWindow.hel_skyway_stop_remote_video_stream = () => {
    worldViewerWindow.hel_video_stop();
  };
  worldViewerWindow.hel_video_is_playing_same_stream = (stream) => {
    const video = getVideo();
    const videoId = (video === null || video === void 0 ? void 0 : video.paused) === false && video.srcObject && video.srcObject.id;
    return videoId === stream.id;
  };
  worldViewerWindow.hel_skyway_get_remote_video_streams = (all = false) => {
    if (all) {
      return videoStreams;
    }
    const playableStream = /* @__PURE__ */ new Map();
    videoStreams.forEach((stream, peerId) => {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack && videoTrack.getSettings().width && videoTrack.getSettings().frameRate > 0) {
        playableStream.set(peerId, stream);
      }
    });
    return playableStream;
  };
  worldViewerWindow.hel_skyway_display_room_video = () => {
    var _GetIHeliNetwork;
    (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.playScreenShare();
  };
  worldViewerWindow.hel_skyway_generate_peer = async (configKey) => {
    var _GetIHeliNetwork;
    return (_GetIHeliNetwork = GetIHeliNetwork()) === null || _GetIHeliNetwork === void 0 ? void 0 : _GetIHeliNetwork.connect(configKey);
  };
  worldViewerWindow.hel_skyway_set_user_skyway_audio_gain = (toggle) => setUseSkywayAudioGainToggle(toggle);
  worldViewerWindow.hel_skyway_set_user_name = (name) => {
    var currentname = getSkywayName();
    if (currentname === name)
      return;
    worldViewerWindow.hel_set_cookie("playername", name);
    worldViewerWindow.hel_post_TextField_UserName(true);
  };
  var cookie_Skyway_MyName = worldViewerWindow.hel_get_cookie("playername");
  if (cookie_Skyway_MyName !== void 0) {
    setSkywayName(cookie_Skyway_MyName);
  }
  worldViewerWindow.hel_skyway_set_show_chatbox(false);
  worldViewerWindow.hel_skyway_set_avatar_from_cookie();
})();
/*!
 * SkyWay Copyright(c) 2022 NTT Communications Corporation
 * peerjs Copyright(c) 2013 Michelle Bu <michelle@michellebu.com>
 */
/*! https://mths.be/utf8js v2.1.2 by @mathias */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=heliodor_pre.js.map
