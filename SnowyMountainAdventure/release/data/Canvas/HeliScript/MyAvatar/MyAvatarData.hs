class MyAvatarUserData
{
    public string PlayerID;
    public string UUID;
}

class MyAvatarData
{
    string m_UUID;
    string m_ThumbnailURI;
    string m_Name;

    string m_VCUID;
    string m_DownloadToken;

    public MyAvatarData()
    {
        SetVal("", "", "");
        SetData("", "", "");
    }

    public void SetVal(string uuid, string ThumbnailURI, string name)
    {
        m_UUID = uuid;
        m_ThumbnailURI = ThumbnailURI;
        m_Name = name;
    }

    public void SetData(string VCUID, string UUID, string DownloadToken)
    {
        m_VCUID = VCUID;
        m_UUID = UUID;
        m_DownloadToken = DownloadToken;
    }

    public string GetUUID()
    {
        return m_UUID;
    }
    
    public void SetUUID(string UUID)
    {
        m_UUID = UUID;
    }

    public string GetThumbnailURI()
    {
        return m_ThumbnailURI;
    }

    public string GetName()
    {
        return m_Name;
    }

    public string GetVCUID()
    {
        return m_VCUID;
    }
    
    public void SetVCUID(string VCUID)
    {
        m_VCUID = VCUID;
    }

    public string GetDownloadToken()
    {
        return m_DownloadToken;
    }

    public void SetDownloadToken(string DownloadToken)
    {
        m_DownloadToken = DownloadToken;
    }
}