// Canvas間の依存関係を解消するための試みのひとつ(あるCanvasをCanvasListから削除してもエラーにならない. 部品としての独立性)
// 一つのCanvasファイルに付き一つのコントローラーまでで他のレイヤーのコンポーネントにはhsLayerGetでアクセスするようにする

component HUDController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "HUD")
        {
            if(ButtonName == "hud_cart") // EC
            {
                LayerBundle layer = hsLayerGet("ec_window_cart_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("ECViewModel", "ShowCartWindow", "");
                }
            }
            else if(ButtonName == "hud_voicechat_arrow_down")
            {
                LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("VCCViewModel", "ClickArrowDown", "");
                }
            }
            else if(ButtonName == "hud_voicechat_arrow_up")
            {
                LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("VCCViewModel", "ClickArrowUp", "");
                }
            }
            else if(ButtonName == "hud_voicechat_arrow_right")
            {
                LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                if(layer !== null)
                {
                    layer.CallComponentMethod("VCCViewModel", "OpenChannelList", "");
                }
            }
            else if(ButtonName == "hud_camera" || ButtonName == "hud_config" || ButtonName == "hud_mainmenu" || ButtonName == "hud_textchatinput")
            {
                // VCC
                {
                    LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                    if(layer !== null) 
                    {
                        layer.CallComponentMethod("VCCViewModel", "ClearAllVCCLayer", "");
                    }
                }

                // TC
                {
                    LayerBundle layer = hsLayerGet("textchat_common");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("TCViewModel", "CloseTextChat", "");
                    }
                }
            }
            else if(ButtonName == "hud_open_textchat")
            {
                LayerBundle layer = hsLayerGet("textchat_common");
                if(layer !== null)
                {
                    layer.CallComponentMethod("TCViewModel", "OpenTextChat", "");
                }
            }
            else if(ButtonName == "hud_window_mode_01" || ButtonName == "hud_window_mode_02")
            {
                LayerBundle layer = hsLayerGet("genericwindow_common_middle");
                if(layer !== null)
                {
                    layer.CallComponentMethod("GenericWindowViewModel", "OnClickedOpenIcon", "");
                }
            }
        }
    }
}