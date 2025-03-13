class VCCJoinUserTable
{
    public list<VCCUserData> Data;
    public list<VCCUserData> StashData; // 一時非表示中のユーザーリスト
    public int               Count;
    public string            CreateUserCode;

    public VCCJoinUserTable()
    {
        Data = new list<VCCUserData>();
        StashData = new list<VCCUserData>();
        Count = 0;
    }

    public void Clear()
    {
        for(int i = 0; i < Data.Count; i++)
        {
            VCCUserData elm = Data[i];
            elm.Release();
        }

        Data.Clear();
        
        for(int i = 0; i < StashData.Count; i++)
        {
            VCCUserData elm = StashData[i];
            elm.Release();
        }

        StashData.Clear();
    }

    public void Add(VCCUserData user)
    {
        user.TableOrder = Data.Count;
        user.IsChannelCreator = (!CreateUserCode.IsEmpty() && user.UserCode == CreateUserCode);

        // GUIをロードする
        user.Load(Data);

        Data.Add(user);

        Count = Data.Count;
        _UpdateCurrentPlayerCount();
    }

    public void RemoveAt(int index)
    {   
        // GUIとリストの要素をリリースする
        Data[index].Release();
        Data.RemoveAt(index);

        // テーブルでのOrderとPosを更新する
        Count = Data.Count;
        _UpdateCurrentPlayerCount();

        for(int i = 0; i < Data.Count; i++)
        {
            if(Data[i].TableOrder < index) continue;

            Data[i].TableOrder = i;
            Data[i].UpdateGUIPos(i, Data);
        }
    }

    void _UpdateCurrentPlayerCount()
    {
        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
        if(layer !== null) layer.CallComponentMethod("VCCViewModel", "UpdateCurrentPlayerCount", "");
    }

    public void UpdateUserData(int UserIndex, string channel_session_code, string user_code, string user_type, string user_name, string icon_url)
    {
        if(UserIndex == -1 || UserIndex >= Data.Count) return;

        Data[UserIndex].ChannelSessionCode = channel_session_code;
        Data[UserIndex].UserCode = user_code;
        Data[UserIndex].UserType = user_type;
        Data[UserIndex].UserName = user_name;
        Data[UserIndex].IconURL = icon_url;

        Data[UserIndex].IsChannelCreator = (!CreateUserCode.IsEmpty() && user_code == CreateUserCode);

        Data[UserIndex].UpdateGUIResource();
    }

    public void UpdateSelfUserData(VCCUserData SelfUser)
    {
        SelfUser.IsChannelCreator = (!CreateUserCode.IsEmpty() && SelfUser.UserCode == CreateUserCode);
        SelfUser.UpdateGUIResource();
    }

    public void PushUserDataStash(string PlayerID)
    {
        for(int i = 0; i < Data.Count; i++)
        {
            if(!PlayerID.IsEmpty() && Data[i].PlayerID == PlayerID)
            {
                // 指定されたユーザーをStashDataに入れる
                StashData.Add(Data[i]);

                // Dataからはいったん削除する
                RemoveAt(i);

                break;
            }
        }
    }

    public void ApplyUserDataStash(string PlayerID)
    {
        for(int i = 0; i < StashData.Count; i++)
        {
            if(!PlayerID.IsEmpty() && StashData[i].PlayerID == PlayerID)
            {
                // Dataの末尾に再び追加する
                Add(StashData[i]);

                // StashDataから取り除く
                StashData.RemoveAt(i);

                break;
            }
        }
    }

    public void DropUserDataStash(string PlayerID)
    {
        for(int i = 0; i < StashData.Count; i++)
        {
            if(!PlayerID.IsEmpty() && StashData[i].PlayerID == PlayerID)
            {
                // StashDataから取り除く
                StashData.RemoveAt(i);

                break;
            }
        }
    }
}