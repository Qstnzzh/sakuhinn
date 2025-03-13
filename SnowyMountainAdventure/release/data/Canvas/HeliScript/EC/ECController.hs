component ECController
{
    public void OnClickedButton(string LayerName, string ButtonName)
    {
        if(LayerName == "ec_window_item")
        {
            LayerBundle layer = hsLayerGet("ec_window_cart_base");
            if(layer === null) return;

            if(ButtonName == "common_btn_close")
            {
                layer.CallComponentMethod("ECViewModel", "CloseECItemWindow", "");
            }
            else if(ButtonName == "ec_btn_add")
            {
                layer.CallComponentMethod("ECViewModel", "AddECItemBuyCount", "");
            }
            else if(ButtonName == "ec_btn_reduce")
            {
                layer.CallComponentMethod("ECViewModel", "ReduceECItemBuyCount", "");
            }
            else if(ButtonName == "ec_btn_add_cart")
            {
                layer.CallComponentMethod("ECViewModel", "AddECItemToCart", "");
            }
            else if(ButtonName == "ec_btn_buy_now")
            {
                layer.CallComponentMethod("ECViewModel", "BuyImmediately", "");
            }
        }
        else if(LayerName == "ec_window_cart_base")
        {
            LayerBundle layer = hsLayerGet("ec_window_cart_base");
            if(layer === null) return;

            if(ButtonName == "common_btn_close" || ButtonName == "ec_btn_continue_shopping")
            {
                layer.CallComponentMethod("ECViewModel", "CloseCartWindow", "");
            }
            else if(ButtonName == "ec_btn_purchase")
            {
                layer.CallComponentMethod("ECViewModel", "BuyCartECItemList", "");
            }
            else if(ButtonName == "ec_page_back")
            {
                layer.CallComponentMethod("ECViewModel", "OnClickedPagerBack", "");
            }
            else if(ButtonName == "ec_page_next")
            {
                layer.CallComponentMethod("ECViewModel", "OnClickedPagerNext", "");
            }
        }
        else if(LayerName == "ec_window_cart_item_list")
        {
            LayerBundle layer = hsLayerGet("ec_window_cart_base");
            if(layer === null) return;

            string Index = ButtonName.SubString(ButtonName.Length() - 1, 1);

            if(ButtonName.IndexOf("ec_btn_add") != -1)
            {
                layer.CallComponentMethod("ECViewModel", "AddCartECItemBuyCount", Index);
            }
            else if(ButtonName.IndexOf("ec_btn_reduce") != -1)
            {
                layer.CallComponentMethod("ECViewModel", "ReduceCartECItemBuyCount", Index);
            }
            else if(ButtonName.IndexOf("ec_btn_delete") != -1)
            {
                layer.CallComponentMethod("ECViewModel", "DeleteCartECItem", Index);
            }
        }
    }
}