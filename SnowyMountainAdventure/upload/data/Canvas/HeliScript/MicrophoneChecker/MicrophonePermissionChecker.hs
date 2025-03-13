//マイク許可チェッククラス
component MicrophonePermissionChecker
{
    public MicrophonePermissionChecker()
    {
    }
	private void CheckMicrophone(int state){
		hsCanvasResetToggleDefault("mic_disabled");
		if(state==HSMicPermissionState_Prompt){
			hsCanvasSetLayerShow("mic_permission_click_layer",true);
		}else if(state==HSMicPermissionState_Granted){
			hsCanvasToggleChange("mic_disabled");
			hsCanvasSetLayerShow("mic_permission_click_layer",false);
			hsCanvasSetLayerShow("mic_block_info_layer",false);
		}else if(state==HSMicPermissionState_Denied){
			hsCanvasSetLayerShow("mic_permission_click_layer",false); 
			hsCanvasSetLayerShow("mic_block_info_layer",true);
		}
	}
    public void OnLoaded()
    {
    }
	public void OnChangedMicPermissionState(int state)
	{
		//hsSystemOutput("change permissionstate = %d\n" % state);
        CheckMicrophone(state);
	}
	public void OnClickedButton(string layerName,string buttonName){
		//左上のマイク不可ボタンを押したときに「確認が必要」状態ならダイアログを出す
		if(layerName=="HUD" && buttonName=="hud_usermic_disabled"){
			int state = hsNetGetMicPermissionState();
			if(state==HSMicPermissionState_Prompt){
				hsCanvasSetLayerShow("mic_permission_click_layer",true);
				hsNetFirstEnterRoom();
			}else if(state==HSMicPermissionState_Denied){
				hsCanvasSetLayerShow("mic_block_info_layer",true);
			}
		}
	}
}