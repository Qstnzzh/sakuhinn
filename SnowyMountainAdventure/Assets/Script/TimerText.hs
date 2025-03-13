component TimerText
{
    int triggerStartSystemTime;
    bool m_isCount;
    Item Timer;
    
    public TimerText()
    {
        Timer = hsItemGet("Timer");
    }

    public void Update()
    {
        Count();
    }

    void Count()
    {
        if(m_isCount)
        {
            int startDurationTime = hsSystemGetTime() - triggerStartSystemTime;
            Timer.WriteTextPlane(FormatMilliseconds(startDurationTime));
        }
    }

    public void StartTimeText()
    {
        m_isCount = true;
        triggerStartSystemTime = hsSystemGetTime();
    }

    public void StopTimeText()
    {
        m_isCount = false;
    }

    string FormatMilliseconds(int milliseconds)
    {
        string result;

        int minutes = milliseconds / 60000;
        int seconds = (milliseconds % 60000) / 1000;
        int millis = (milliseconds % 1000) / 10;

        result = ZeroPadding(minutes, 2) + ":" + ZeroPadding(seconds, 2) + "." + ZeroPadding(millis, 2);

        return result;
    }

    string ZeroPadding(int num, int length)
    {
        string result = num.ToString();

        if(result.Length() < length)
        {
            string seriesOfZeros = "";

            for(int i = 0; i < length - result.Length(); i++)
            {
                seriesOfZeros += "0";
            }
            result = seriesOfZeros + result;
        }
        return result;
    }
}