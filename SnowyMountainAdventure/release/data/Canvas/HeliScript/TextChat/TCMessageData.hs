class TCMessageData
{
    public string Name;
    public string IconURL;
    public string Message;
    public string Timestamp;
    public bool   IsMine; // 今後自分のメッセージを反対側に表示する仕様が出てきたときに対応するための変数(ひとまず今はfalseしか入っていない)
    
    public string ChannelSessionCode;
    public string UserCode; // uid, vket_id といった名称でJSONに書かれている英数字
    public string UserType; // login or guest
}