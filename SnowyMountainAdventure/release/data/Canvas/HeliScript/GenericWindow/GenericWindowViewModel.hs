const string GENERIC_WINDOW_TYPE_NONE = "none_window";
const string GENERIC_WINDOW_TYPE_MOVIEVIEWER = "movieviewer";
const string GENERIC_WINDOW_TYPE_SCREENSHARE = "screenshare";
const string GENERIC_WINDOW_TYPE_IMAGEVIEWER = "imageviewer";

const string GENERIC_WINDOW_STATE_NONE = "none";
const string GENERIC_WINDOW_STATE_OPEN_IF_PLAYING = "openifplaying"; // プレイ中なら開き、そうでなければ閉じる
const string GENERIC_WINDOW_STATE_OPEN = "open";
const string GENERIC_WINDOW_STATE_CLOSE = "close";
const string GENERIC_WINDOW_STATE_MAXIMIZE = "maximize";
const string GENERIC_WINDOW_STATE_MINIMIZE = "minimize";

component GenericWindowViewModel
{
    string m_CurrentWindowType;
    string m_CurrentWindowState;

    GenericWindowView m_View;

    bool m_ClickedOpenIcon;
    bool m_PlayIconAnimation;

    public GenericWindowViewModel()
    {
        m_CurrentWindowType = GENERIC_WINDOW_TYPE_NONE;
        m_CurrentWindowState = GENERIC_WINDOW_STATE_NONE;

        m_ClickedOpenIcon = false;
        m_PlayIconAnimation = false;

        m_View = new GenericWindowView();
    }

    public void OnVideoFullScreenChange(bool IsFullScreen)
    {
        m_View.SwitchMiddleLarge(IsFullScreen);
    }

    public void OnClickedOpenIcon()
    {
        m_ClickedOpenIcon = true;
        m_PlayIconAnimation = false;

        m_View.ShowOpenIcon(false);

        OpenCurrentWindow();
    }

    public void Close(string Param)
    {
        // Windowのクローズ
        m_View.Close();

        // OpenIconの表示非表示処理
        bool IsShowOpenIcon = (Param != "false");

        m_ClickedOpenIcon = false;
        m_PlayIconAnimation = IsShowOpenIcon;

        m_View.ShowOpenIcon(IsShowOpenIcon);
    }

    public void Update()
    {
        // OpenIconのアニメーション
        if(m_PlayIconAnimation)
        {
            float CurrentTime = float(hsSystemGetTime()) / 1000.0;
            CurrentTime *= 3.1415 * 2.0; // 1秒で2PI移動する

            // 0.5秒毎に画像を切り替える
            float rate = hsMathSin(CurrentTime);

            hsCanvasResetToggleDefault("Toggle_Window_Icon_Animation");
            if(rate > 0.0)
            {
                hsCanvasToggleChange("Toggle_Window_Icon_Animation");
            }
        }
    }

    public void SetGenericWindowState(string data)
    {
        string currentStr = data;

        string Target;
        string State;
        string Param;
        int separate = -1;

        separate = currentStr.IndexOf(",");
        if(separate != -1)
        {
            Target = currentStr.SubString(0, separate);
            currentStr = currentStr.SubString(separate + 1, (currentStr.Length() - 1) - separate);
        }
        else
        {
            Target = data;
        }

        separate = currentStr.IndexOf(",");
        if(separate != -1)
        {
            State = currentStr.SubString(0, separate);
            Param = currentStr.SubString(separate + 1, (currentStr.Length() - 1) - separate);
        }

        _Raise(Target, State, Param);
    }

    public void OpenCurrentWindow()
    {
        _Raise(m_CurrentWindowType, m_CurrentWindowState, "");
    }

    void _Raise(string Target, string State, string Param)
    {
        if(State.IsEmpty()) 
        {
            // 旧バージョンとの互換性のためにStateはEmptyの場合、openifplayingとして扱う
            State = GENERIC_WINDOW_STATE_OPEN_IF_PLAYING;
        }
        
        m_CurrentWindowType = Target;
        m_CurrentWindowState = State;

        // OpenIconを押したので各ウィンドウを開く
        if(m_CurrentWindowType == GENERIC_WINDOW_TYPE_MOVIEVIEWER)
        {
            // 動画
            _DoMovieViewer(m_CurrentWindowType, State, Param);
        }
        else if(m_CurrentWindowType == GENERIC_WINDOW_TYPE_SCREENSHARE)
        {
            // 画面共有
            _DoScreenShare(m_CurrentWindowType, State, Param);
        }
        else if(m_CurrentWindowType == GENERIC_WINDOW_TYPE_IMAGEVIEWER)
        {
            // 画像
            _DoImageViewer(m_CurrentWindowType, State, Param);
        }
    }

    // 動画
    void _DoMovieViewer(string Target, string State, string Param)
    {
        // まだOpenIconを押していないのでOpenIconを表示する
        if(!m_ClickedOpenIcon && hsVideoIsPlaying())
        {
            m_PlayIconAnimation = true;
            m_View.ShowOpenIcon(true);
            
            return;
        }

        if(State == GENERIC_WINDOW_STATE_OPEN_IF_PLAYING)
        {
            if(hsVideoIsPlaying())
            {
                m_View.ShowBaseLayer(true);
                m_View.ShowSeekBar(true);
                m_View.ShowVideFrameImage(true);
            }
            else
            {
                Close("false");
            }
        }
        else if(State == GENERIC_WINDOW_STATE_OPEN)
        {
            m_View.ShowBaseLayer(true);
            m_View.ShowSeekBar(true);
            m_View.ShowVideFrameImage(true);
        }
        else if(State == GENERIC_WINDOW_STATE_CLOSE)
        {
            Close("false");
        }
        else if(State == GENERIC_WINDOW_STATE_MAXIMIZE)
        {
            if(hsVideoIsPlaying())
            {
                m_View.ShowBaseLayer(true);
                m_View.ShowSeekBar(true);
                m_View.ShowVideFrameImage(true);
            }

            m_View.SwitchMiddleLarge(true);
        }
        else if(State == GENERIC_WINDOW_STATE_MINIMIZE)
        {
            m_View.SwitchMiddleLarge(false);
        }
        else
        {
            Close("false");
        }
    }

    // 画面共有
    void _DoScreenShare(string Target, string State, string Param)
    {
        // まだOpenIconを押していないのでOpenIconを表示する
        if(!m_ClickedOpenIcon && hsVideoIsPlaying())
        {
            m_PlayIconAnimation = true;
            m_View.ShowOpenIcon(true);
            
            return;
        }

        if(State == GENERIC_WINDOW_STATE_OPEN_IF_PLAYING)
        {
            if(hsVideoIsPlaying())
            {
                m_View.ShowBaseLayer(true);
                m_View.ShowVideFrameImage(true);
            }
            else
            {
                Close("false");
            }
        }
        else if(State == GENERIC_WINDOW_STATE_OPEN)
        {
            m_View.ShowBaseLayer(true);
            m_View.ShowVideFrameImage(true);
        }
        else if(State == GENERIC_WINDOW_STATE_CLOSE)
        {
            Close("false");
        }
        else if(State == GENERIC_WINDOW_STATE_MAXIMIZE)
        {
            if(hsVideoIsPlaying())
            {
                m_View.ShowBaseLayer(true);
                m_View.ShowVideFrameImage(true);
            }

            m_View.SwitchMiddleLarge(true);
        }
        else if(State == GENERIC_WINDOW_STATE_MINIMIZE)
        {
            m_View.SwitchMiddleLarge(false);
        }
        else
        {
            Close("false");
        }
    }

    // 画像
    void _DoImageViewer(string Target, string State, string Param)
    {
        if(State == GENERIC_WINDOW_STATE_OPEN || State == GENERIC_WINDOW_STATE_OPEN_IF_PLAYING)
        {
            if(!Param.IsEmpty()) m_View.SetImage(Param);

            m_View.ShowBaseLayer(true);
            m_View.ShowImageView(true);
        }
        else if(State == GENERIC_WINDOW_STATE_CLOSE)
        {
            Close("false");
        }
        else if(State == GENERIC_WINDOW_STATE_MAXIMIZE)
        {
            if(!Param.IsEmpty()) m_View.SetImage(Param);

            m_View.ShowBaseLayer(true);
            m_View.ShowImageView(true);

            m_View.SwitchMiddleLarge(true);
        }
        else if(State == GENERIC_WINDOW_STATE_MINIMIZE)
        {
            m_View.SwitchMiddleLarge(false);
        }
    }
}