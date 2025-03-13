class GenericWindowView
{
    bool m_UseSeekBar;

    public GenericWindowView()
    {
        m_UseSeekBar = false;
    }

    public void ShowBaseLayer(bool show)
    {
        hsCanvasSetLayerShow("genericwindow_common_middle", show);
        hsCanvasSetLayerShow("genericwindow_common_large", show);
        SwitchMiddleLarge(!show);
    }

    public void SwitchMiddleLarge(bool IsFullScreen)
    {
        hsCanvasResetToggleDefault("Toggle_GenericWindow_Middle_Large");

        if(IsFullScreen)
        {
            hsCanvasToggleChange("Toggle_GenericWindow_Middle_Large");
        }

        if(m_UseSeekBar)
        {
            hsVideoShowSeekBar( ((IsFullScreen)? "genericwindow_seekbar_large" : "genericwindow_seekbar_middle") );
        }
    }

    public void Close()
    {
        ShowBaseLayer(false);

        ShowSeekBar(false);
        ShowVideFrameImage(false);
        ShowImageView(false);

        // クローズの時に動画再生が終了していたら再生停止トグルもリセットする
        if(!hsVideoIsPlaying())
        {
            hsCanvasResetToggleDefault("Toggle_movie_playing");
        }
    }

    public void ShowSeekBar(bool show)
    {
        m_UseSeekBar = show;

        hsCanvasSetLayerShow("genericwindow_seekbar_middle", show);
        hsCanvasSetLayerShow("genericwindow_seekbar_large", show);

        if(show)
        {
            hsVideoShowSeekBar("genericwindow_seekbar_middle");
        }
    }

    public void ShowVideFrameImage(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_Use_VideoPlayerTexture");

        if(show)
        {
            hsCanvasToggleChange("Toggle_Use_VideoPlayerTexture");
        }
    }

    public void ShowImageView(bool show)
    {
        hsCanvasResetToggleDefault("Toggle_Use_ImageViewer");

        if(show)
        {
            hsCanvasToggleChange("Toggle_Use_ImageViewer");
        }
    }

    public void SetImage(string URL)
    {
        if(!URL.IsEmpty())
        {
            hsCanvasSetGUIImage("genericwindow_common_middle", "ImageViewer", URL);
            hsCanvasSetGUIImage("genericwindow_common_large", "ImageViewer", URL);
        }
    }

    public void ShowOpenIcon(bool Show)
    {
        hsCanvasResetToggleDefault("Toggle_Generic_Window_Icon");

        if(Show)
        {
            hsCanvasToggleChange("Toggle_Generic_Window_Icon");
        }
    }
}