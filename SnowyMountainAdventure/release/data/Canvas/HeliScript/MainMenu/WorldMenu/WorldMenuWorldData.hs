class WorldMenuWorldData
{
    public string WorldID;
    public string Title;
    public int    VisitCount;
    public bool   IsOfficial;
    public string IngameUrl;
    public string ThumbnailURL;
    public string UserCode;

    public WorldMenuWorldData()
    {
        VisitCount = 0;
    }
}

class WorldMenuWorldDetailData
{
    public string CreatedDate;
    public string UpdatedDate;
    public string CreatorName;
    public string CreatorName_EN;
    public string UserCode;
    public string Description;
    public int    NumOfLikes;
    public string WorldSetID;
    public bool   Liked;

    public WorldMenuWorldDetailData()
    {
        NumOfLikes = 0;
        Liked = false;
    }
}