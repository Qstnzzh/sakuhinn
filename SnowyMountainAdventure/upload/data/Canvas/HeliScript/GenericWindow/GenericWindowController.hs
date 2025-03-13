component GenericWindowController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "genericwindow_common_middle" || LayerName == "genericwindow_common_large")
        {
            if(ButtonName == "common_btn_close")
            {
                LayerBundle layer = hsLayerGet("genericwindow_common_middle");
                if(layer === null) return;

                layer.CallComponentMethod("GenericWindowViewModel", "Close", "true");
            }
        }
    }
}