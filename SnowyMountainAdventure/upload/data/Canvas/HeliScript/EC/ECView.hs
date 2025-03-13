class ECView
{
    public ECView()
    {
        hsCanvasResetToggleDefault("Toggle_Use_EC");
    }

    public void Initialize()
    {
        hsCanvasResetToggleDefault("Toggle_Use_EC");
        hsCanvasToggleChange("Toggle_Use_EC");
    }

    public void DrawECItemWindow(ECItemData data)
    {
        string layerName = "ec_window_item";

        hsCanvasSetLayerShow(layerName, true);

        hsCanvasSetGUIImage(layerName, "ec_item_thumbnail", (!data.ThumbnailURL.IsEmpty()? data.ThumbnailURL : "gui2023/noimage.png"));
        hsCanvasSetGUIText(layerName, "ec_item_name_text", data.Name);
        hsCanvasSetGUIText(layerName, "ec_item_price_text", data.Price);
        hsCanvasSetGUIText(layerName, "ec_item_descript_text", data.Desctipt);
        hsCanvasSetGUIText(layerName, "ec_item_count_text", "%d" % data.BuyCount);
    }

    public void DrawECItemBuyCount(ECItemData data)
    {
        hsCanvasSetGUIText("ec_window_item", "ec_item_count_text", "%d" % data.BuyCount);
    }

    public void CloseECItemWindow()
    {
        hsCanvasSetLayerShow("ec_window_item", false);
    }

    public void DrawCartWindow(list<ECItemData> ECItemList, string TotalAmount, int PagerIndex, int TotalQuantity)
    {
        hsCanvasSetLayerShow("ec_window_cart_base", true);
        hsCanvasResetToggleDefault("Toggle_EC_Cart_Empty_Exist");

        if(ECItemList.Count > 0)
        {
            string layerName = "ec_window_cart_item_list";

            hsCanvasSetLayerShow(layerName, true);
            hsCanvasToggleChange("Toggle_EC_Cart_Empty_Exist");

            // Pager
            hsCanvasSetGUIText("ec_window_cart_base", "ec_cart_page_text", "%d" % (PagerIndex + 1));

            // カートアイテムリスト
            int StartIndex = PagerIndex * 5;

            for(int DisplayedIndex = 0; DisplayedIndex < 5; DisplayedIndex++)
            {
                hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_%d" %DisplayedIndex);
                hsCanvasResetToggleDefault("Toggle_EC_Soldout_%d" %DisplayedIndex);

                // 表示上のインデックスからアイテムリスト上のインデックスに変換する
                int InnerCartItemIndex = _ConvertDispIndexToInnerCartIndex(DisplayedIndex, PagerIndex); 

                if(InnerCartItemIndex < ECItemList.Count)
                {
                    hsCanvasToggleChange("Toggle_EC_Cart_ECItem_%d" %DisplayedIndex);

                    ECItemData data = ECItemList[InnerCartItemIndex];

                    hsCanvasSetGUIShow(layerName, "ec_item_thumbnail_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIImage(layerName, "ec_item_thumbnail_%d" % DisplayedIndex, data.ThumbnailURL);
                    
                    hsCanvasSetGUIShow(layerName, "ec_item_name_text_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIText(layerName, "ec_item_name_text_%d" % DisplayedIndex, data.Name);
                    
                    hsCanvasSetGUIShow(layerName, "ec_item_price_text_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIText(layerName, "ec_item_price_text_%d" % DisplayedIndex, data.Price);

                    hsCanvasSetGUIShow(layerName, "ec_detail_quantity_%d" % DisplayedIndex, true);

                    hsCanvasSetGUIShow(layerName, "ec_item_count_text_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIText(layerName, "ec_item_count_text_%d" % DisplayedIndex, "%d" % data.BuyCount);

                    hsCanvasSetGUIShow(layerName, "ec_btn_add_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIShow(layerName, "ec_btn_reduce_%d" % DisplayedIndex, true);
                    hsCanvasSetGUIShow(layerName, "ec_btn_delete_%d" % DisplayedIndex, true);

                    if(data.BuyCount <= 0)
                    {
                        hsCanvasToggleChange("Toggle_EC_Soldout_%d" %DisplayedIndex);
                    }
                }
                else
                {
                    hsCanvasSetGUIShow(layerName, "ec_item_thumbnail_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_item_name_text_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_item_price_text_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_detail_quantity_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_item_count_text_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_btn_add_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_btn_reduce_%d" % DisplayedIndex, false);
                    hsCanvasSetGUIShow(layerName, "ec_btn_delete_%d" % DisplayedIndex, false);
                }
            }

            // 合計金額
            if(!TotalAmount.IsEmpty())
            {
                hsCanvasSetGUIText("ec_window_cart_base", "ec_total_price_text", TotalAmount);
            }
        }
        else
        {
            hsCanvasSetLayerShow("ec_window_cart_item_list", false);

            hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_0");
            hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_1");
            hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_2");
            hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_3");
            hsCanvasResetToggleDefault("Toggle_EC_Cart_ECItem_4");
        }

        // カートボタンのバッチ
        DrawCartBadge(TotalQuantity);
    }

    int _ConvertDispIndexToInnerCartIndex(int Src, int PagerIndex)
    {
        // 表示上のインデックスからアイテムリスト上のインデックスに変換する
        int Dst = Src + PagerIndex * 5;

        return Dst;
    }

    public void DrawCartBadge(int TotalQuantity)
    {
        if(TotalQuantity > 0)
        {
            hsCanvasResetToggleDefault("Toggle_Use_EC_Badge");
            hsCanvasToggleChange("Toggle_Use_EC_Badge");
            hsCanvasSetGUIShow("HUD", "hud_ec_badge_text", true);
            hsCanvasSetGUIText("HUD", "hud_ec_badge_text", "%d" % TotalQuantity);
        }
        else
        {
            hsCanvasResetToggleDefault("Toggle_Use_EC_Badge");
            hsCanvasSetGUIShow("HUD", "hud_ec_badge_text", false);
        }
    }

    public void CloseCartWindow()
    {
        hsCanvasSetLayerShow("ec_window_cart_base", false);
        hsCanvasSetLayerShow("ec_window_cart_item_list", false);
    }

    public void DrawCartECItemBuyCount(int DisplayedIndex, ECItemData data)
    {
        hsCanvasSetGUIText("ec_window_cart_item_list", "ec_item_count_text_%d" % DisplayedIndex, "%d" % data.BuyCount);
    }
}