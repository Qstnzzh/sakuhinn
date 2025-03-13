component PhotoModeCameraController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "camera_layer")
        {
            if(ButtonName == "camera_exit_button")
            {
                LayerBundle layer = hsLayerGet("genericwindow_common_middle");
                if(layer === null) return;

                layer.CallComponentMethod("GenericWindowViewModel", "OpenCurrentWindow", "");
            }
        }
        else if(LayerName == "record_layer")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_movie_shoot")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedStartRecording", "");
            }
            else if(ButtonName == "camera_movie_stop")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedStopRecording", "");
            }
        }
        else if(LayerName == "photo_layer")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_close_button")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedClosePhotoModeOnPhoto", "");
            }
            else if(ButtonName == "camera_close_button_for_videorecording")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedClosePhotoModeOnVideo", "");
            }
            else if(ButtonName == "camera_photo_off")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseVideoRecorder", "");
            }
            else if(ButtonName == "camera_preview")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedPreviewButton", "");
            }
            else if(ButtonName == "camra_dl")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedSaveVideoButton", "");
            }
        }
        else if(LayerName == "camera_recording_quit_NowRecording")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_recording_quit01_btn_recording")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_recording_quit_NowRecording");
            }
            else if(ButtonName == "camera_btn_quit")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedClosePhotoModeDialog", "");
            }
        }
        else if(LayerName == "camera_movie_save")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_btn_ok")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_movie_save");
            }
        }
        else if(LayerName == "camera_wait")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_btn_ok")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_wait");
            }
        }
        else if(LayerName == "camera_failed")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_btn_ok")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_failed");
            }
        }
        else if(LayerName == "camera_recording_start")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_btn_cancel")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_recording_start");
            }
            else if(ButtonName == "camera_recording_start_btn")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "StartRecording", "");
            }
        }
        else if(LayerName == "camera_recording_quit_NotSaved")
        {
            LayerBundle layer = hsLayerGet("PhotoModeCameraViewModel");
            if(layer === null) return;

            if(ButtonName == "camera_btn_cancel")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedCloseDialog", "camera_recording_quit_NotSaved");
            }
            else if(ButtonName == "camera_btn_quit")
            {
                layer.CallComponentMethod("PhotoModeCameraViewModel", "OnClickedClosePhotoModeDialog", "");
            }
        }
    }
}