class PhotoModeCameraView
{
    public PhotoModeCameraView()
    {
    }

    public void StartRecording()
    {
        hsCanvasResetToggleDefault("Toggle_Record_Start_Stop");
        hsCanvasToggleChange("Toggle_Record_Start_Stop");
    }
    
    public void StopRecording()
    {
        hsCanvasResetToggleDefault("Toggle_Record_Start_Stop");
    }

    public void ShowDialog(string LayoutName, bool show)
    {
        hsCanvasSetLayerShow(LayoutName, show);
    }

    public void ShowRecordgingQuitPhotoOff(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_recordging_quit_camera_photo");
        
        if(show)
        {
            hsCanvasToggleChange("Toggle_recordging_quit_camera_photo");
        }
    }

    public void ClosePhotoMode()
    {
        hsCanvasSetLayerShow("photo_layer", false);
        hsCanvasResetToggleDefault("Toggle_MoveKeyOnly");
        hsCanvasResetToggleDefault("Toggle_Photo_MoveDir");
        hsCanvasResetToggleDefault("Toggle_nameplate_delete");
        hsCanvasResetToggleDefault("Toggle_camera_gaze");
        hsCanvasResetToggleDefault("Toggle_ShowPreviewPhoto");

        hsCanvasSetLayerShow("focus_layer", false);
        hsCanvasResetToggleDefault("Toggle_camera_focus");

        CloseVideoRecorder();
    }

    public void CloseVideoRecorder()
    {
        hsCanvasSetLayerShow("record_layer", false);
        hsCanvasSetLayerShow("record_side_panel", false);

        hsCanvasResetToggleDefault("Toggle_Photo_Movie");
        hsCanvasResetToggleDefault("Toggle_Record_Start_Stop");
        hsCanvasResetToggleDefault("Toggle_SidePanel_Open_Close");
        hsCanvasResetToggleDefault("Toggle_Camera_Avatar_Move");

        ShowDialog("camera_recording_quit_NowRecording", false);
        ShowDialog("camera_movie_save", false);
        ShowDialog("camera_wait", false);
        ShowDialog("camera_failed", false);
        ShowDialog("camera_recording_start", false);
        ShowDialog("camera_recording_quit_NotSaved", false);
    }
}