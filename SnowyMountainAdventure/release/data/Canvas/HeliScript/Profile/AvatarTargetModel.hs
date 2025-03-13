class AvatarTargetInfo{
    // public string playerID;
    // public Player player;
    // public Vector3 playerPos;
    public bool isShownTarget;
    public AvatarTargetInfo(){
        // playerID="";
        // player=null;
        // playerPos=new Vector3();
        isShownTarget=false;
    }
}

AvatarTargetInfo g_AvatarTargetInfo;

component AvatarTargetModel
{
    public AvatarTargetModel(){
        g_AvatarTargetInfo=new AvatarTargetInfo();
    }
}