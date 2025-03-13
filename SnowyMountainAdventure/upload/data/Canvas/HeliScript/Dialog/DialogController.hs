component DialogController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "enterdialog" || LayerName == "enterdialog_po")
        {
            if(ButtonName == "btn_enter_room")
            {
                LayerBundle layer = hsLayerGet("config_profile");
                if(layer !== null)
                {
                    layer.CallComponentMethod("ProfileMenuViewModel", "ClickNicknameUpdateButton", "");
                }
            }
        }
    }
}