component ECModel
{
    ECViewModel m_ViewModel;

    ECCartData m_CartData;

    int m_StoreID;

    int m_PagerIndex;
    int m_MaxPege;

    int m_TotalQuantity;

    ECItemData m_CurrentSelectedItem;

    list<ECItemData> m_CurrentCartItemList;

    public ECModel()
    {
        m_ViewModel = system.Layer_GetComponentByName<ECViewModel>("ec_window_cart_base");

        m_CartData = new ECCartData();

        m_PagerIndex = 0;
        m_MaxPege = 0;

        m_TotalQuantity = 0;

        m_CurrentSelectedItem = null;
        m_CurrentCartItemList = new list<ECItemData>();
    }

    public void Close()
    {
        m_PagerIndex = 0;

        m_CurrentCartItemList.Clear();
    }

    public void Initialize()
    {
        // EC連携APIの初期化
        api.intermediateEcApi.initialize();

        // カートを作成
        string worldId = hsGetCurrentWorldId();
        api.license.getEcs(_getEcsCallback, worldId);
    }

    void _getEcsCallback(JsVal val)
    {
        // StoreIDの取得
        int StoreId = _AnalyseEcs(val);

        m_StoreID = StoreId;

        // カートを作成
        if(m_StoreID == -1) return;

        api.intermediateEcApi.createCart(_createCartCallback, m_StoreID);
    }

    void _createCartCallback(JsVal val)
    {
        if(val === null) return;

        _CheckError(val, "カートの作成に失敗しました");

        JsVal createCart = val.GetProperty("createCart");
        if(createCart === null) return;
        
        string id = createCart.GetProperty("id").GetStr();
        string checkoutUrl = createCart.GetProperty("checkoutUrl").GetStr();
        string currencyCode = createCart.GetProperty("currencyCode").GetStr();

        string note = createCart.GetProperty("note").GetStr();

        Json note_json = hsLoadJson(note);
        string vketCartId;
        note_json.FindValueString("vketCartId", vketCartId);

        m_CartData.ID = id;
        m_CartData.VketCartId = vketCartId;
        m_CartData.CheckoutUrl = checkoutUrl;
        m_CartData.CurrencySymbol = _GetCurrencySymbol(currencyCode);
        m_CartData.TaxIncludedText = _GetTaxIncludedText(currencyCode);
    }

    public void FetchECItemData(int StoreID, string Label)
    {
        m_CurrentSelectedItem = null;

        api.intermediateEcApi.getProductVariantByLabel(_FetchECItemDataCallback, StoreID, Label);
    }

    void _FetchECItemDataCallback(JsVal val)
    {
        if(val === null || val.IsNull()) return;

        // _CheckError(val, "商品データの取得に失敗しました");

        JsVal product = val.GetProperty("productVariantByLabel");
        if(product === null) return;

        int id = product.GetProperty("id").GetNum();

        string shopifyVariantId = product.GetProperty("shopifyVariantId").GetStr();
        
        string currencyCode = product.GetProperty("currencyCode").GetStr();
        string currencySymbol = _GetCurrencySymbol(currencyCode);

        string Price = product.GetProperty("amount").GetStr();

        string title = product.GetProperty("title").GetStr();
        string ThumbnailURL = product.GetProperty("img").GetStr();
        string description = "";

        JsVal shopifyProduct = product.GetProperty("shopifyProduct");
        
        if(shopifyProduct !== null)
        {
            // 商品説明を取得
            description = shopifyProduct.GetProperty("description").GetStr();
            
            if(title == "Default Title" || title.IsEmpty())
            {
                JsVal shopifyProductImages = shopifyProduct.GetProperty("shopifyProductImages");
                list<JsProp> imagesList = shopifyProductImages.GetPropertyList();
                if(imagesList.Count > 0) ThumbnailURL = imagesList[0].GetValue().GetProperty("url").GetStr();
            }

            // TextPlaneの機能が足りないのでひとまず名前は常にProductNameを使用する
            // 機能が増えたらProductNameとValiantsNameを一行ずつ表示するようにする
            title = shopifyProduct.GetProperty("title").GetStr();
        }

        ECItemData data = new ECItemData();
        data.ECItemCode = id;
        data.VariantId = shopifyVariantId;
        data.Name = title;
        data.Desctipt = description;
        data.ThumbnailURL = ThumbnailURL;
        data.Price = currencySymbol + _GetSepalatePriceText(Price.ToInt()) + m_CartData.TaxIncludedText;
        // 購入数の初期値が0だとワンクリックで購入ができないので１にする
        data.BuyCount = 1;

        m_CurrentSelectedItem = data;

        m_ViewModel.DrawECItemWindow(m_CurrentSelectedItem);
    }

    public void UpdateECItemBuyCount(int Offset)
    {
        if(m_CurrentSelectedItem === null) return;

        m_CurrentSelectedItem.BuyCount += Offset;

        if(m_CurrentSelectedItem.BuyCount < 0)
        {
            m_CurrentSelectedItem.BuyCount = 0;
        }

        m_ViewModel.DrawECItemBuyCount(m_CurrentSelectedItem);
    }

    void _UpdateECItemCallback(string param)
    {
        
    }

    public void AddECItemToCart()
    {
        if(m_CurrentSelectedItem.BuyCount <= 0) return;

        if(m_StoreID == -1) return;

        api.intermediateEcApi.addToCart(_AddECItemToCartCallback, m_StoreID, m_CartData.ID, m_CurrentSelectedItem.VariantId, m_CurrentSelectedItem.BuyCount);
    }

    void _AddECItemToCartCallback(JsVal val)
    {
        m_ViewModel.CloseECItemWindow();
        m_ViewModel.ShowCartWindow();
    }

    public void FetchCartECItemList(int PagerIndex)
    {
        m_CurrentCartItemList.Clear();

        m_PagerIndex = PagerIndex;
        int Offset = 5 * PagerIndex;

        if(m_StoreID == -1) return;

        api.intermediateEcApi.getCart(_FetchCartECItemListCallback, m_StoreID, m_CartData.ID);
    }

    void _FetchCartECItemListCallback(JsVal val)
    {
        if(val === null) return;

        _CheckError(val, "カート情報の取得に失敗しました");

        JsVal cart = val.GetProperty("cart");
        if(cart === null) return;

        JsVal lines = cart.GetProperty("lines");
        if(lines === null) return;

        list<JsProp> linesPropList = lines.GetPropertyList();

        // 合計購入商品数
        int totalQuantity = 0;

        //
        for(int i = 0; i < linesPropList.Count; i++)
        {
            JsVal line = linesPropList[i].GetValue();

            string merchandiseLineId = line.GetProperty("merchandiseLineId").GetStr();
            int quantity = line.GetProperty("quantity").GetNum();

            // productVariant
            JsVal productVariant = line.GetProperty("productVariant");
            if(productVariant === null) continue;

            string title = productVariant.GetProperty("title").GetStr();
            string ThumbnailURL = productVariant.GetProperty("img").GetStr();

            string amount = productVariant.GetProperty("amount").GetStr();
            string ProductVariant = productVariant.GetProperty("id").GetStr();
           
            if(title == "Default Title" || title.IsEmpty())
            {
                JsVal productImages = line.GetProperty("productImages");
                if(productImages === null) continue;

                list<JsProp> imagesList = productImages.GetPropertyList();
                if(imagesList.Count > 0) ThumbnailURL = imagesList[0].GetValue().GetProperty("src").GetStr();
            }

            // TextPlaneの機能が足りないのでひとまず名前は常にProductNameを使用する
            // 機能が増えたらProductNameとValiantsNameを一行ずつ表示するようにする
            title = line.GetProperty("productTitle").GetStr();

            ECItemData data = new ECItemData();
            data.ECItemCode = -1;
            data.VariantId = ProductVariant;
            data.LineId = merchandiseLineId;
            data.ThumbnailURL = ThumbnailURL;
            data.Name = title;
            data.Price = m_CartData.CurrencySymbol + _GetSepalatePriceText(amount.ToInt()) + m_CartData.TaxIncludedText;
            data.Desctipt = "";
            data.BuyCount = quantity;

            m_CurrentCartItemList.Add(data);

            totalQuantity += quantity;
        }
        
        string currencyCode = cart.GetProperty("currencyCode").GetStr();
        string currencySymbol = _GetCurrencySymbol(currencyCode);
        string taxIncludedText = _GetTaxIncludedText(currencyCode);

        int totalAmount = cart.GetProperty("totalAmount").GetNum();

        string totalAmount_text = currencySymbol + _GetSepalatePriceText(totalAmount) + taxIncludedText;

        // Pagerの最大ページ数と初回表示オブジェクトを取得する
        m_MaxPege = _CalcMaxPage(m_CurrentCartItemList.Count);

        // カートウィンドウの描画
        m_TotalQuantity = totalQuantity;
        
        m_ViewModel.DrawCartWindow(m_CurrentCartItemList, totalAmount_text, m_PagerIndex, m_TotalQuantity);
    }

    public void UpdateCartECItemBuyCount(int Offset, int DisplayedIndex)
    {
        // 表示上のインデックスからアイテムリスト上のインデックスに変換する
        int InnerCartItemIndex = _ConvertDispIndexToInnerCartIndex(DisplayedIndex);

        if(InnerCartItemIndex < 0 || InnerCartItemIndex >= m_CurrentCartItemList.Count) return;

        if(m_StoreID == -1) return;

        m_CurrentCartItemList[InnerCartItemIndex].BuyCount += Offset;

        if(m_CurrentCartItemList[InnerCartItemIndex].BuyCount < 0)
        {
            m_CurrentCartItemList[InnerCartItemIndex].BuyCount = 0;
        }

        m_ViewModel.DrawCartECItemBuyCount(DisplayedIndex, m_CurrentCartItemList[InnerCartItemIndex]);

        ECItemData ECItem = m_CurrentCartItemList[InnerCartItemIndex];
        api.intermediateEcApi.updateCart(_UpdateCartECItemCallback, m_StoreID, m_CartData.ID, ECItem.LineId, ECItem.VariantId, ECItem.BuyCount);

        // 購入数が0以下なら削除する
        if(ECItem.BuyCount <= 0)
        {
            m_CurrentCartItemList.RemoveAt(InnerCartItemIndex);
        }
    }

    void _UpdateCartECItemCallback(JsVal val)
    {
        if(val === null) return;

        _CheckError(val, "カートの更新に失敗しました");

        JsVal updateCart = val.GetProperty("updateCart");
        if(updateCart === null) return;

        string currencyCode = updateCart.GetProperty("currencyCode").GetStr();
        string currencySymbol = _GetCurrencySymbol(currencyCode);
        string taxIncludedText = _GetTaxIncludedText(currencyCode);

        int totalAmount = updateCart.GetProperty("totalAmount").GetNum();

        string totalAmount_text = currencySymbol + _GetSepalatePriceText(totalAmount) + taxIncludedText;

        // 合計購入商品数
        JsVal lines = updateCart.GetProperty("lines");
        if(lines === null) return;

        list<JsProp> linesPropList = lines.GetPropertyList();

        int totalQuantity = 0;
        for(int i = 0; i < linesPropList.Count; i++)
        {
            JsVal line = linesPropList[i].GetValue();
            int quantity = line.GetProperty("quantity").GetNum();

            totalQuantity += quantity;
        }

        // Pagerの最大ページ数と初回表示オブジェクトを取得する
        m_MaxPege = _CalcMaxPage(m_CurrentCartItemList.Count);

        // 表示するカート内アイテムが空なら一つ前のページを描画する
        int DisplacedItemCount = m_CurrentCartItemList.Count - m_PagerIndex * 5;
        if(m_PagerIndex > 0 && DisplacedItemCount <= 0)
        {
            UpdatePager(-1);

            return;
        }

        // カートウィンドウの描画
        m_TotalQuantity = totalQuantity;

        m_ViewModel.DrawCartWindow(m_CurrentCartItemList, totalAmount_text, m_PagerIndex, m_TotalQuantity);
    }

    public void DeleteCartECItem(int DisplayedIndex)
    {
        // 表示上のインデックスからアイテムリスト上のインデックスに変換する
        int InnerCartItemIndex = _ConvertDispIndexToInnerCartIndex(DisplayedIndex);

        if(m_StoreID == -1) return;

        // 数量を0にすることで対象のアイテムをカートから削除することができる
        ECItemData ECItem = m_CurrentCartItemList[InnerCartItemIndex];
        api.intermediateEcApi.updateCart(_UpdateCartECItemCallback, m_StoreID, m_CartData.ID, ECItem.LineId, ECItem.VariantId, 0);

        m_CurrentCartItemList.RemoveAt(InnerCartItemIndex);
    }

    public void BuyImmediately()
    {
        if(m_CurrentSelectedItem.BuyCount <= 0) return;

        if(m_StoreID == -1) return;

        api.intermediateEcApi.addToCart(_BuyImmediatelyCallback, m_StoreID, m_CartData.ID, m_CurrentSelectedItem.VariantId, m_CurrentSelectedItem.BuyCount);
    }

    void _BuyImmediatelyCallback(JsVal val)
    {
        m_ViewModel.CloseECItemWindow();

        // アイテムをカートに追加後すぐに購入する
        BuyECItem();   
    }

    public void BuyECItem()
    {
        Player SelfPlayer = hsPlayerGet();
        string name = SelfPlayer.GetName();

        if(m_StoreID == -1) return;

        api.intermediateEcApi.executeCheckout(_executeCheckoutCallback, m_StoreID, m_CartData.ID, name);
    }

    void _executeCheckoutCallback(JsVal val)
    {
        if(val === null) return;

        _CheckError(val, "購入処理に失敗しました");

        JsVal executeCheckout = val.GetProperty("executeCheckout");
        if(executeCheckout === null) return;

        string webUrl;
        if(executeCheckout.GetProperty("webUrl") !== null)
        {
            webUrl = executeCheckout.GetProperty("webUrl").GetStr();

            // 決済ページを開く
            hsWebOpen(webUrl);
        }

        // 購入したので選択中のアイテムとカートアイテムリストをリリースする
        _RefleshCartCallback(null);
    } 

    public void UpdatePager(int Offset)
    {
        m_PagerIndex += Offset;

        if(m_PagerIndex < 0) 
        {
            m_PagerIndex = 0;
            
            return;
        }
        else if(m_PagerIndex >= m_MaxPege)
        {
            m_PagerIndex = (m_MaxPege - 1);

            return;
        }

        // カートウィンドウの描画
        m_ViewModel.DrawCartWindow(m_CurrentCartItemList, "", m_PagerIndex, m_TotalQuantity);
    }

    public void ConfirmCheckoutState()
    {
        api.intermediateEcApi.completeCheckout(_RefleshCartCallback, m_CartData.VketCartId);
    }

    void _RefleshCartCallback(JsVal val)
    {
        // 購入したので選択中のアイテムとカートアイテムリストをリリースする
        m_CurrentSelectedItem = null;
        m_CurrentCartItemList.Clear();

        m_TotalQuantity = 0;

        // カートを新しく作成する
        // 別タブから戻ってきたときに決済が成功で終わって別タブから返ってきたのか単純に別タブを開いて戻ってきたのかの判断がつかないので、
        // Heliport班との取り決めで別タブから戻ってきたときの動作は全てカートのリセットと再生成に
        // (将来的にUI自体の仕様変更で改善する必要がある)
        api.intermediateEcApi.createCart(_createCartCallback, m_StoreID);
        
        // カートが破棄されることでデータとUIが一致しなくなるのでカートウィンドウが開いていた場合は閉じる
        m_ViewModel.ClearCartWindow();
    }

    // Helper Functions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    int _ConvertDispIndexToInnerCartIndex(int Src)
    {
        // 表示上のインデックスからアイテムリスト上のインデックスに変換する
        int Dst = Src + m_PagerIndex * 5;

        return Dst;
    }
    
    int _CalcMaxPage(int src)
    {
        float val = float(src) / 5.0;

        int dst = int(val);

        if(val > float(dst))
        {
            dst += 1;
        }

        return dst;
    }

    string _GetCurrencySymbol(string currencyCode)
    {
        string CurrencySymbol;

        if(currencyCode == "JPY")
        {
            CurrencySymbol = "¥";
        }
        else if(currencyCode == "USD")
        {
            CurrencySymbol = "$";
        }

        return CurrencySymbol;
    }

    string _GetSepalatePriceText(int Price)
    {
        string Src = "%d" % Price;

        string Dst;
        int c = 0;

        for(int i = Src.Length() - 1; i >= 0; i--)
        {
            c++;
            Dst = "%c" % Src[i] + Dst;

            if(c >= 3)
            {
                c = 0;

                Dst = "," + Dst;
            }
        }

        if("%c" % Dst[0] == ",")
        {
            Dst.RemoveAt(0);
        }

        return Dst;
    }

    string _GetTaxIncludedText(string currencyCode)
    {
        string text;

        if(currencyCode == "JPY")
        {
            text = "(税込)";
        }
        else if(currencyCode == "USD")
        {
            text = "(Tax included)";
        }
        else
        {
            text = "(Tax included)";
        }

        return text;
    }

    int _AnalyseEcs(JsVal val)
    {
        if(val === null) return -1;

        _CheckError(val, "StoreIDが取得できません");

        int StoreId = -1;

        Json val_json = hsLoadJson(val.GetStr()); 
        if(val_json === null) return -1;

        Json ecs = val_json.Find(EJSONDataType_Array, "ecs");
        if(ecs === null) return -1;

        list<Json> ecs_array = ecs.GetArrayList();
        
        // レスポンスはなぜか配列になっているが、今のところ存在できるStoreは1つのはずなので最初の要素だけとっておく
        if(ecs_array.Count > 0) ecs_array[0].FindValueInt("id", StoreId);

        return StoreId;
    }
        
    void _CheckError(JsVal val, string errorMessage)
    {
        if(val.GetType() == 5)
        {
            Json val_json = hsLoadJson(val.GetStr());
            list<Json> errors = val_json.GetArrayList();

            for(int i = 0; i < errors.Count; i++)
            {
                Json error = errors[i];
                if(error === null) continue;

                Json path = error.Find(EJSONDataType_Array, "path");
                if(path === null) continue;

                list<Json> path_array = path.GetArrayList();

                for(int n = 0; n < path_array.Count; n++)
                {
                    Json element = path_array[n];
                    if(element === null) continue;

                    string path_str = element.GetValue();

                    string message = "Failed to " + path_str + " : " + errorMessage;

                    LayerBundle layer = hsLayerGet("toast");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
                        layer.CallComponentMethod("ToastViewModel", "NotifyError", message);
                    }
                }
            }
        }
        else if(val.GetType() == 1 || val.GetType() == 2)
        {
            list<JsProp> errors = val.GetPropertyList();

            for(int i = 0; i < errors.Count; i++)
            {
                JsVal error = errors[i].GetValue();
                if(error === null) continue;

                JsVal path = error.GetProperty("path");
                if(path === null) continue;

                list<JsProp> path_array = path.GetPropertyList();

                for(int n = 0; n < path_array.Count; n++)
                {
                    JsVal element = path_array[n].GetValue();
                    if(element === null) continue;

                    string path_str = element.GetStr();

                    string message = "Failed to " + path_str + " : " + errorMessage;

                    LayerBundle layer = hsLayerGet("toast");
                    if(layer !== null)
                    {
                        layer.CallComponentMethod("ToastViewModel", "SetNoticeTime", "250,3500,250");
                        layer.CallComponentMethod("ToastViewModel", "NotifyError", message);
                    }
                }
            }
        }
    }
}