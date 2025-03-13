const string TOAST_TYPE_NONE = "TOAST_TYPE_NONE";
const string TOAST_TYPE_NORMAL = "TOAST_TYPE_NORMAL";
const string TOAST_TYPE_ERROR = "TOAST_TYPE_ERROR";

component ToastViewModel
{
    string m_CurrentToastType;

    ToastView m_View;
    ErrorToastView m_ErrorView;

    int m_BeginDeltaTime;
    int m_StayTime;

    int m_EndTime;
    int m_EndDeltaTime;

    bool m_IsNotifying;
    
    public ToastViewModel()
    {
        m_CurrentToastType = TOAST_TYPE_NONE;

        m_View = new ToastView();
        m_ErrorView = new ErrorToastView();

        m_BeginDeltaTime = 250;
        m_StayTime = 3500;

        m_EndTime = 250;
        m_EndDeltaTime = 0;

        m_IsNotifying = false;
    }

    public void SetNoticeTime(string param)
    {
        string currentStr = param;

        string beginStr;
        string stayStr;
        string endStr;

        int separate = -1;

        separate = currentStr.IndexOf(",");
        if(separate != -1)
        {
            beginStr = currentStr.SubString(0, separate);
            currentStr = currentStr.SubString(separate + 1, (currentStr.Length() - 1) - separate);

            separate = -1;
        }

        separate = currentStr.IndexOf(",");
        if(separate != -1)
        {
            stayStr = currentStr.SubString(0, separate);
            endStr = currentStr.SubString(separate + 1, (currentStr.Length() - 1) - separate);
        }

        if(!beginStr.IsEmpty()) m_BeginDeltaTime = beginStr.ToInt();
        if(!stayStr.IsEmpty())  m_StayTime = stayStr.ToInt();
        if(!endStr.IsEmpty())   m_EndDeltaTime = endStr.ToInt();
    }

    public void NotifyMessage(string message)
    {
        m_View.Begin(message, m_BeginDeltaTime);

        int NotifyStartTime = hsSystemGetTime();
        m_EndTime = (NotifyStartTime + m_BeginDeltaTime + m_StayTime);

        m_IsNotifying = true;
        m_CurrentToastType = TOAST_TYPE_NORMAL;
    }

    ///エラー通知
    ///error : エラーメッセージ
    public void NotifyError(string error)
    {
        m_ErrorView.Begin(error, m_BeginDeltaTime);

        int NotifyStartTime = hsSystemGetTime();
        m_EndTime = (NotifyStartTime + m_BeginDeltaTime + m_StayTime);

        m_IsNotifying = true;
        m_CurrentToastType = TOAST_TYPE_ERROR;
    }

    public void NotifyMessageFromJS(string param)
    {
        //
        if(param.IsEmpty()) return;

        Json MessageJSON = hsLoadJson(param);
        if(MessageJSON === null) return;

        string message;
        MessageJSON.FindValueString("message", message);

        int beginDeltaTime;
        MessageJSON.FindValueInt("beginDeltaTime", beginDeltaTime);
        
        int stayTime;
        MessageJSON.FindValueInt("stayTime", stayTime);
        
        int endDeltaTime;
        MessageJSON.FindValueInt("endDeltaTime", endDeltaTime);

        //
        m_View.Begin(message, beginDeltaTime);

        int NotifyStartTime = hsSystemGetTime();
        m_EndTime = (NotifyStartTime + beginDeltaTime + stayTime);

        m_EndDeltaTime = endDeltaTime;

        m_IsNotifying = true;
        m_CurrentToastType = TOAST_TYPE_NORMAL;
    }

    ///JSからのエラー通知
    ///param : エラー通知パラメータ（JSON)
    public void NotifyErrorFromJS(string param)
    {
        if(param.IsEmpty()) return;

        Json MessageJSON = hsLoadJson(param);
        if(MessageJSON === null) return;

        string error;
        MessageJSON.FindValueString("error", error);

        int beginDeltaTime;
        MessageJSON.FindValueInt("beginDeltaTime", beginDeltaTime);
        
        int stayTime;
        MessageJSON.FindValueInt("stayTime", stayTime);
        
        int endDeltaTime;
        MessageJSON.FindValueInt("endDeltaTime", endDeltaTime);

        m_ErrorView.Begin(error, beginDeltaTime);

        int NotifyStartTime = hsSystemGetTime();
        m_EndTime = (NotifyStartTime + beginDeltaTime + stayTime);

        m_EndDeltaTime = endDeltaTime;

        m_IsNotifying = true;
        m_CurrentToastType = TOAST_TYPE_ERROR;
    }

    public void Update()
    {
        if(m_IsNotifying)
        {
            int CurrentTime = hsSystemGetTime();

            if(CurrentTime >= m_EndTime && CurrentTime < (m_EndTime + m_EndDeltaTime))
            {
                if(m_CurrentToastType == TOAST_TYPE_NORMAL)
                {
                    m_View.End(m_EndDeltaTime);
                }
                else if(m_CurrentToastType == TOAST_TYPE_ERROR)
                {
                    m_ErrorView.End(m_EndDeltaTime);
                }

                m_CurrentToastType = TOAST_TYPE_NONE;
            }
            else if(CurrentTime >= (m_EndTime + m_EndDeltaTime))
            {
                m_IsNotifying = false;

                m_View.Close();
                m_ErrorView.Close();
            }
        }
    }
}