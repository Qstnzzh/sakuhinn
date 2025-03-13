class PhotoModeCameraModel
{
    PhotoModeCameraViewModel m_ViewModel;

    bool m_IsRecording;

    bool m_IsConverting;
    bool m_AvailableSaveData;
    bool m_IsSaved;
    string m_DownloadURL;

    float m_StartRecordTime;
    int m_CurrentRecordTime;
    int m_MaxRecordTime;

    public PhotoModeCameraModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<PhotoModeCameraViewModel>("record_layer");

        m_IsRecording = false;
        m_IsConverting = false;
        m_AvailableSaveData = false;
        m_IsSaved = true;
        m_StartRecordTime = 0.0;
        m_CurrentRecordTime = 0;
        m_MaxRecordTime = 60;
    }

    public void Release()
    {
        hel_release_RecordedVideo();

        m_IsConverting = false;
        m_AvailableSaveData = false;
        m_IsSaved = true;

        m_DownloadURL = "";

        hsCanvasResetToggleDefault("Toggle_Is_Saved_Video");
        hsCanvasResetToggleDefault("Toggle_Exist_Recorded_Data");
    }

    public bool IsRecording()
    {
        return m_IsRecording;
    }

    public bool IsSaved()
    {
        return m_IsSaved;
    }

    public void StartRecording()
    {
        Release();
        
        hel_setText(ETextParamType_SetVideoRecording, "1");
        hel_start_VideoRecording();

        m_IsRecording = true;
        m_StartRecordTime = hsSystemGetTime() * 0.001;
        m_CurrentRecordTime = 0;
    }

    public void StopRecording()
    {
        hel_setText(ETextParamType_SetVideoRecording, "0");
        hel_stop_VideoRecording();

        m_IsRecording = false;
        m_IsSaved = false;
        
        hsCanvasResetToggleDefault("Toggle_Is_Saved_Video");
        hsCanvasToggleChange("Toggle_Is_Saved_Video");
        hsCanvasResetToggleDefault("Toggle_Exist_Recorded_Data");
        hsCanvasToggleChange("Toggle_Exist_Recorded_Data");
    }

    public void Build()
    {
        if(m_IsRecording)
        {
            float CurrentSecondsTime = hsSystemGetTime() * 0.001;
            m_CurrentRecordTime = int(CurrentSecondsTime - m_StartRecordTime);

            if(m_CurrentRecordTime >= m_MaxRecordTime)
            {
                string TimeText = "1:00/1:00";
                hsCanvasSetGUIText("record_layer", "camera_recording_time_text", TimeText);

                if(m_CurrentRecordTime > m_MaxRecordTime)
                {
                    m_ViewModel.OnClickedStopRecording();
                    return;
                }
            }
            else
            {
                string TimeText = "0:" + ((m_CurrentRecordTime < 10)? "0" : "") + string(m_CurrentRecordTime) + "/1:00";
                hsCanvasSetGUIText("record_layer", "camera_recording_time_text", TimeText);
            }
        }
    }

    public void ShowPreview()
    {
        hel_open_recorded_video_preview();
    }

    public void SaveVideo()
    {
        if(!m_IsConverting)
        {
            m_ViewModel.ConvertWebmToMp4();
            m_IsConverting = true;

            m_ViewModel.OnClickedOpenDialog("camera_wait");
        }
        else
        {
            if(m_AvailableSaveData)
            {
                if(m_DownloadURL.IsEmpty())
                {
                    m_ViewModel.OnClickedOpenDialog("camera_failed");
                }
                else
                {
                    hel_save_recorded_video(m_DownloadURL);
                    m_IsSaved = true;
                    hsCanvasResetToggleDefault("Toggle_Is_Saved_Video");
                }
            }
            else
            {
                m_ViewModel.OnClickedOpenDialog("camera_wait");
            }
        }
    }

    public void FinishConvertingWebmToMp4(string data)
    {
        m_DownloadURL = data;
        m_AvailableSaveData = true;
    }
}