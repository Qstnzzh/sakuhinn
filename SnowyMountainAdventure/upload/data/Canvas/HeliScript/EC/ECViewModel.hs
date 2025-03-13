component ECViewModel
{
    ECModel m_Model;
    ECView m_View;

    bool m_Initialized;

    public ECViewModel()
    {
        m_Initialized = false;
        
        m_View = new ECView();
    }

    public void Initialize()
    {
        // アクテビティから呼び出す
        // EC連携は有料ユーザーしか使用できない
        if(!m_Initialized)
        {
            m_View.Initialize();

            m_Model = system.Layer_GetComponentByName<ECModel>("ec_window_cart_base");
            m_Model.Initialize();

            m_Initialized = true;
        }
    }

    /*public void OnWindowActivate(bool IsActivate)
    {
        if(IsActivate)
        {
            // 決済タブから戻ってきて購入が完了したのか確認する
            if(m_Model !== null) m_Model.ConfirmCheckoutState();
        }
    }*/

    public void ShowECItemWindow(string param)
    {
        m_View.CloseCartWindow();

        Json ecJson = hsLoadJson(param);
        if(ecJson === null) return;

        string store_id;
        ecJson.FindValueString("store_id", store_id);

        int storeID = store_id.ToInt(); 

        string label;
        ecJson.FindValueString("label", label);

        if(m_Model !== null) m_Model.FetchECItemData(storeID, label);
    }

    public void DrawECItemWindow(ECItemData data)
    {
        m_View.DrawECItemWindow(data);
    }

    public void CloseECItemWindow()
    {
        m_View.CloseECItemWindow();
    }

    public void AddECItemBuyCount()
    {
        if(m_Model !== null) m_Model.UpdateECItemBuyCount(1);
    }
    
    public void ReduceECItemBuyCount()
    {
        if(m_Model !== null) m_Model.UpdateECItemBuyCount(-1);
    }

    public void AddECItemToCart()
    {
        if(m_Model !== null) m_Model.AddECItemToCart();
    }

    public void BuyImmediately()
    {
        if(m_Model !== null) m_Model.BuyImmediately();
    }

    public void DrawECItemBuyCount(ECItemData data)
    {
        m_View.DrawECItemBuyCount(data);
    }

    public void ShowCartWindow()
    {
        m_View.CloseECItemWindow();

        if(m_Model !== null) m_Model.FetchCartECItemList(0);
    }

    public void DrawCartWindow(list<ECItemData> ECItemList, string TotalAmount, int PagerIndex, int TotalQuantity)
    {
        m_View.DrawCartWindow(ECItemList, TotalAmount, PagerIndex, TotalQuantity);
    }

    public void CloseCartWindow()
    {
        m_View.CloseCartWindow();
        if(m_Model !== null) m_Model.Close();
    }
    
    public void ClearCartWindow()
    {
        m_View.CloseCartWindow();
        m_View.DrawCartBadge(0);

        if(m_Model !== null) m_Model.Close();
    }

    public void AddCartECItemBuyCount(string param)
    {
        int DisplayedIndex = param.ToInt();

        if(m_Model !== null) m_Model.UpdateCartECItemBuyCount(1, DisplayedIndex);
    }
    
    public void ReduceCartECItemBuyCount(string param)
    {
        int DisplayedIndex = param.ToInt();

        if(m_Model !== null) m_Model.UpdateCartECItemBuyCount(-1, DisplayedIndex);
    }

    public void DrawCartECItemBuyCount(int DisplayedIndex, ECItemData data)
    {
        m_View.DrawCartECItemBuyCount(DisplayedIndex, data);
    }

    public void DeleteCartECItem(string param)
    {
        int DisplayedIndex = param.ToInt();

        if(m_Model !== null) m_Model.DeleteCartECItem(DisplayedIndex);
    }

    public void BuyCartECItemList()
    {
        if(m_Model !== null) m_Model.BuyECItem();

        CloseCartWindow();
    }

    public void OnClickedPagerBack()
    {
        if(m_Model !== null) m_Model.UpdatePager(-1);
    }

    public void OnClickedPagerNext()
    {
        if(m_Model !== null) m_Model.UpdatePager(1);
    }
}