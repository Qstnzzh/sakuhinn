const string VCC_WINDOW_TYPE_ICONONLY = "VCC_WINDOW_TYPE_ICONONLY";
const string VCC_WINDOW_TYPE_NAME = "VCC_WINDOW_TYPE_NAME";
const string VCC_WINDOW_TYPE_NONE = "VCC_WINDOW_TYPE_NONE";

component VCCViewModel
{
    VCCModel m_Model;
    VCCView m_View;
    
    int m_SelectedChannelIndex;
    string m_SelectedChannelType;
    
    bool m_IsOpenedChannelList;

    string m_CurrentWindowType;

    public VCCViewModel()
    {
        m_View = new VCCView();
        m_Model = system.Layer_GetComponentByName<VCCModel>("vcc_icon_only_base");

        m_SelectedChannelIndex = -1;

        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;

        m_IsOpenedChannelList = false;
    }

    public void ResizeCallback()
    {
        m_View.ResizeCallback();
    }

    // 強制終了の処理
    // JavaScriptの beforeunload, WindowsのWM_CLOSEに対応
    public void OnBeforeUnload()
    {
        m_Model.Disconnect();
    }

    // 強制終了の処理
    // JavaScriptの unload, WindowsのWM_DESTROYに対応
    public void OnUnload()
    {
        m_Model.Disconnect();
    }

    public void UpdateSelfUserData(string param)
    {
        if(param.IsEmpty()) return;

        Json data = hsLoadJson(param);
        if(data === null) return;

        string UserName;
        data.FindValueString("UserName", UserName);

        string IconURL;
        data.FindValueString("IconURL", IconURL);

        string UserCode;
        data.FindValueString("UserCode", UserCode);

        string UserType;
        data.FindValueString("UserType", UserType);

        m_Model.UpdateSelfUserData(UserName, IconURL, UserCode, UserType);
    }

    public void UpdateCurrentPlayerCount()
    {
        m_View.UpdateCurrentPlayerCount(m_Model.GetCurrentChannel(), m_Model.GetCurrentUserTable());
    }

    public string GetRoomId()
    {
        return m_Model.GetRoomId();
    }

    public void ClickArrowDown(string param)
    {
        // 既に開いているウィンドウを閉じる
        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        m_View.CloseChannelSettings();
        m_View.CloseChannelNumInput();
        
        CloseChannelList("");

        // アイコンユーザーリストを表示する
        m_CurrentWindowType = VCC_WINDOW_TYPE_ICONONLY;
        m_View.OpenIconOnlyUserList(m_Model.GetCurrentChannel(), m_Model.GetCurrentUserTable());
        m_View.ShowUserListArrowUp(true);
    }

    public void ClickArrowUp(string param)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;
        
        m_View.CloseIconOnlyUserList();
        m_View.CloseUserList();
        m_View.ShowUserListArrowUp(false);
    }
    
    public void ClearAllVCCLayer(string param)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;

        if(m_Model.IsConnected())
        {
            m_View.ShowUserListArrowUp(false);
        }
        
        m_View.CloseIconOnlyUserList();
        m_View.CloseUserList();

        CloseChannelList("");
        m_View.CloseConnectDialog();

        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        m_View.CloseChannelSettings();
    }

    public void OpenChannelList(string param)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;

        if(!m_IsOpenedChannelList)
        {
            m_Model.FetchChannelList();
            m_IsOpenedChannelList = true;
        }
    }

    public void ShowChannelList(list<VCCChannelData> ChannelList)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;

        m_View.ShowChannelList(ChannelList);
    }
    
    public void CloseChannelList(string param)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;
        m_View.CloseChannelList();
        m_IsOpenedChannelList = false;
    }

    public void OpenUserList(string param)
    {
        m_View.CloseIconOnlyUserList();
        m_CurrentWindowType = VCC_WINDOW_TYPE_NAME;
        m_View.OpenUserList(m_Model.GetCurrentChannel(), m_Model.GetVCNumber(), m_Model.GetCurrentUserTable());
    }

    public void CloseUserList(string param)
    {
        m_View.CloseUserList();
        m_CurrentWindowType = VCC_WINDOW_TYPE_ICONONLY;
        m_View.OpenIconOnlyUserList(m_Model.GetCurrentChannel(), m_Model.GetCurrentUserTable());
    }

    public void ExitChanel(string param)
    {
        m_CurrentWindowType = VCC_WINDOW_TYPE_NONE;
        
        m_View.CloseIconOnlyUserList();
        m_View.CloseUserList();
        m_View.ShowUserListArrowUp(false);

        m_Model.Disconnect();

        m_SelectedChannelIndex = -1;
        m_View.UpdateConnectStatus("", -1, false, true);

        // マイアバターのユーザーテーブルをクリア
        LayerBundle layer = hsLayerGet("mainmenu_mypage_avatar_base");
        if(layer !== null)
        {
            layer.CallComponentMethod("MyAvatarViewModel", "ClearUserTable", "");
        }
    }

    public void MoveChannel(string param)
    {
        m_View.CloseIconOnlyUserList();
        m_View.CloseUserList();
        m_View.ShowUserListArrowUp(false);

        m_Model.FetchChannelList();
    }
    
    public void SelectChannel(string ChannelIndex)
    {
        m_SelectedChannelIndex = ChannelIndex.ToInt();
        
        m_View.OpenConnectDialog(m_Model.GetChannelList(), m_SelectedChannelIndex);
    }

    public void ClickConnectButton(string param)
    {
        m_View.CloseConnectDialog();
        CloseChannelList("");

        m_Model.Connect(m_SelectedChannelIndex);
    }

    public void ClickConnectFromNumber(string param)
    {
        // ViewからNumberを取得(後日実装)
        // string ChannelNumber = m_View.GetChannelNumberInput();
        // m_Model.ConnectFromChannelNumber(ChannelNumber);
    }

    public void UpdateConnectStatus(VCCChannelData CurrentChannel, int VoiceChannelIndex, bool IsConnected, bool IsUpdateArrow)
    {
        m_View.UpdateConnectStatus(CurrentChannel.ChannelName, VoiceChannelIndex , IsConnected, IsUpdateArrow);
    }
    
    public void ClickCancelButton(string param)
    {
        m_View.CloseConnectDialog();
    }

    public void OpenChannelSettings(string param)
    {
        bool IsChange = (param != "false");

        if(IsChange)
        {
            if(!m_Model.IsChannelCreator()) return;

            m_View.CloseIconOnlyUserList();
            m_View.CloseUserList();
            m_View.ShowUserListArrowUp(false);
        }

        CloseChannelList("");
        m_View.UpdateSelectedNewChannelType(true);
        m_View.OpenChannelSettings(IsChange);
    }
    
    public void CloseChannelSettings(string param)
    {
        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        m_View.CloseChannelSettings();
    }

    public void OpenChannelNumInput(string param)
    {
        CloseChannelList("");
        m_View.OpenChannelNumInput();
    }

    public void CloseChannelNumInput(string param)
    {
        m_View.CloseChannelNumInput();
    }

    public void SelectNewChannelType(string param)
    {
        m_SelectedChannelType = param;
        m_View.UpdateSelectedNewChannelType((param == CHANNEL_TYPE_OPEN));
    }

    public void CreateNewChannel(string param)
    {
        string ChannelName = hel_get_HTMLElement_value(m_View.GetLocalInputText_ChannelName());
        ChannelName = ChannelName.SubString(0, 50);

        // 空文字なら何もしない
        if(ChannelName.IsEmpty() || _IsEmptyWithTrim(ChannelName))
        {
            return;
        }

        m_Model.CreateNewChannel(ChannelName, m_SelectedChannelType);

        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        m_View.CloseChannelSettings();
    }

    public void UpdateChannel(string param)
    {
        string ChannelName = hel_get_HTMLElement_value(m_View.GetLocalInputText_ChannelName());
        ChannelName = ChannelName.SubString(0, 50);

        // 空文字なら何もしない
        if(ChannelName.IsEmpty() || _IsEmptyWithTrim(ChannelName))
        {
            return;
        }

        m_Model.UpdateChannel(ChannelName, m_SelectedChannelType);

        m_SelectedChannelType = CHANNEL_TYPE_OPEN;
        m_View.CloseChannelSettings();
    }

    bool _IsEmptyWithTrim(string src)
    {
        if(src.IsEmpty()) return true;

        for(int i = 0; i < src.Length(); i++)
        {
            string val = src.SubString(i, 1);
            if(val != "\n" && val != " ")
            {
                return false; // 空白も改行もない完全なEmptyである
            }
        }

        return true;
    }

    public void ShowUserProfile(string PlayerID)
    {
        Player OtherPlayer = hsPlayerGetByID(PlayerID);
        string OtherUserCode = OtherPlayer.GetCustomState("UserCode");
        string OtherUserType = OtherPlayer.GetCustomState("UserType");

        if(!OtherUserCode.IsEmpty() && !OtherUserType.IsEmpty())
        {
            Player SelfPlayer = hsPlayerGet();
            string SelfUserCode = SelfPlayer.GetCustomState("UserCode");
            string SelfUserType = SelfPlayer.GetCustomState("UserType");

            LayerBundle layerProfile=hsLayerGet("other_profile");
            if(layerProfile!==null){
                ProfileModel profileModel=system.Layer_GetComponentByName<ProfileModel>("other_profile");
                profileModel.FindUserDataAndShowProfileFromUserID(OtherUserCode, OtherUserType, (SelfUserType == "login" && SelfUserCode != OtherUserCode));
            }
        }
    }

    //ネットワーク同期周り/////////////////////////////////////////////////////////////////
    public void ConnectFromRoomID(string RoomID)
    {
        m_Model.ConnectFromRoomID(RoomID);
    }

    public list<VCCUserData> GetCurrentUserTable()
    {
        return m_Model.GetCurrentUserTable();
    } 

    public void OnVCPlayerJoin(string ID, string Data)
    {
        m_Model.JoinRoom(ID, Data);
    }

    public void OnVCPlayerLeave(string ID, string Data)
    {
        m_Model.LeaveRoom(ID, Data);
    }

    public void RemovePlayer(string UserCode)
    {
        m_Model.RemovePlayer(UserCode);
    }

    public void Block(string UserCode)
    {
        m_Model.Block(UserCode);
    }
    
    public void UnBlock(string UserCode)
    {
        m_Model.UnBlock(UserCode);
    }

    public void BlockTempolary(string UserCode)
    {
        m_Model.BlockTempolary(UserCode);
    }
    
    public void UnBlockTempolary(string UserCode)
    {
        m_Model.UnBlockTempolary(UserCode);
    }
}