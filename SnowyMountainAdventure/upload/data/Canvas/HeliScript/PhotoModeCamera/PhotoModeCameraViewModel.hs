component PhotoModeCameraViewModel
{
    PhotoModeCameraView m_View;
    PhotoModeCameraModel m_Model;

    public PhotoModeCameraViewModel()
    {
        m_View = new PhotoModeCameraView();
        m_Model = new PhotoModeCameraModel();
    }

    public void Update()
    {
        m_Model.Build();
    }

    public void OnClickedStartRecording()
    {
        if(!m_Model.IsSaved())
        {
            m_View.ShowDialog("camera_recording_start", true);
        }
        else
        {
            StartRecording();
        }
    }

    public void StartRecording()
    {
        m_Model.StartRecording();
        m_View.StartRecording();
        m_View.ShowDialog("camera_recording_start", false);
    }

    public void OnClickedStopRecording()
    {
        m_Model.StopRecording();
        m_View.StopRecording();
        m_View.ShowDialog("camera_movie_save", true);
    }

    public void OnClickedPreviewButton()
    {
        m_Model.ShowPreview();
    }

    public void OnClickedSaveVideoButton()
    {
        m_Model.SaveVideo();
    }

    public void OnClickedCloseVideoRecorder()
    {
        if(m_Model.IsRecording())
        {
            m_Model.StopRecording();
        }

        m_View.CloseVideoRecorder();
    }

    public void OnClickedOpenDialog(string param)
    {
        m_View.ShowDialog(param, true);
    }
    
    public void OnClickedCloseDialog(string param)
    {
        m_View.ShowDialog(param, false);
    }

    public void OnClickedClosePhotoModeOnPhoto()
    {
        if(m_Model.IsRecording())
        {
            m_Model.StopRecording();
        }

        m_View.CloseVideoRecorder();
        m_Model.Release();
    }

    public void OnClickedClosePhotoModeOnVideo()
    {
        if(m_Model.IsRecording())
        {
            m_View.ShowDialog("camera_recording_quit_NowRecording", true);
        }
        else if(!m_Model.IsSaved())
        {
            m_View.ShowDialog("camera_recording_quit_NotSaved", true);
        }
        else
        {
            _ClosePhotoMode();
        }
    }

    public void OnClickedClosePhotoModeDialog()
    {
        _ClosePhotoMode();
    }

    void _ClosePhotoMode()
    {
        if(m_Model.IsRecording())
        {
            m_Model.StopRecording();
        }

        m_View.ClosePhotoMode();
        m_Model.Release();
    }

    public void ConvertWebmToMp4()
    {
        hel_convert_webm_to_mp4(_ConvertWebmToMp4Callback);
    }

    void _ConvertWebmToMp4Callback(string data)
    {
        m_Model.FinishConvertingWebmToMp4(data);
    }
}