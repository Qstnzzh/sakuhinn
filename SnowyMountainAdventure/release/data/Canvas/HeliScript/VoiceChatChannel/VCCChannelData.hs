const string CHANNEL_TYPE_OPEN = "public";
const string CHANNEL_TYPE_PRIVATE = "private";

class VCCChannelData
{
    public string ChannelType;
    public string CreateUserCode;

    public string ChannelId;
    public string SpatiumCode;
    public string WorldCode;
    public string ChannelName;
    public string Description;
    public string ChannelPassword;

    public int    MaxPlayerCount;
    public int    MaxVoicePlayerCount;

    public list<VCCUserData> JoinUsersData;

    public VCCChannelData()
    {
        ChannelType = CHANNEL_TYPE_OPEN;
        
        MaxPlayerCount = 0;
        MaxVoicePlayerCount = 0;

        JoinUsersData = new list<VCCUserData>();
    }
}