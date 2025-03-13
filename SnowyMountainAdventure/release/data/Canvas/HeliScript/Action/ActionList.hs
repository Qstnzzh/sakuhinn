//system.IsLangEN() 
//
class ButtonNameTextJPEN{
    public string jp;
    public string en;
    public ButtonNameTextJPEN(){}

}

const string SAVED_EMOTE_INDICES="SavedEmoteIndices";

component EmoteActionList
{
    const int total_emote_num=10;
    int currentPageNo_;
    list<ButtonNameTextJPEN> buttonNameText_;
    //コンストラクタ
    public EmoteActionList()
    {   
        currentPageNo_=0;
        buttonNameText_ = new list<ButtonNameTextJPEN>(total_emote_num);
        for(int i=0;i<buttonNameText_.Count();++i){
            //buttonNameText_[i]=new ButtonNameTextJPEN();
            buttonNameText_[i].jp="";
            buttonNameText_[i].en="";
        }
        buttonNameText_[0].jp="指差し";
        buttonNameText_[0].en="Pointing";
        buttonNameText_[1].jp="サムズアップ";
        buttonNameText_[1].en="Thumbs Up";
        buttonNameText_[2].jp="手を振る";
        buttonNameText_[2].en="Wave your hand";
        buttonNameText_[3].jp="合掌";
        buttonNameText_[3].en="Joining palms";
        buttonNameText_[4].jp="ダンス";
        buttonNameText_[4].en="Dance";
        buttonNameText_[5].jp="OK";
        buttonNameText_[5].en="OK";
        buttonNameText_[6].jp="NG";
        buttonNameText_[6].en="NG";
        buttonNameText_[7].jp="ガッツポーズ";
        buttonNameText_[7].en="Guts Pose";
        buttonNameText_[8].jp="両手を振る";
        buttonNameText_[8].en="Waving hands";
        buttonNameText_[9].jp="ヲタ芸";
        buttonNameText_[9].en="Wotagei";
        
    }
    
    private ActionPalette GetActionPalette(){
        LayerBundle layer=hsLayerGet("action_palette");
        if(layer===null){
            return null;
        }
        ActionPalette actionPalette=system.Layer_GetComponentByName<ActionPalette>("action_palette");
        return actionPalette;
    }

    //エモートの全種類数
    private int GetEmotesSize(){
        return 10;//ダミー
    }
    //エモートのリストページサイズ
    private int GetPageSize(){
        return GetEmotesSize()/12;
    }
    public void OnLoaded()
    {
        RefreshActionToggle();
    }
    private void ShowCurrentPageNo(){
        string pageNo;
        pageNo = "%d" % (currentPageNo_+1);
        hsCanvasSetGUIText("action_list","action_page_num",pageNo);
    }
    //右ページクリック
    private void OnRightPageClick(){
        if(currentPageNo_<GetPageSize()){
            currentPageNo_++;
        }
        ShowCurrentPageNo();
    }
    //左ページクリック
    private void OnLeftPageClick(){
        if(currentPageNo_>0){
            currentPageNo_--;
        }
        ShowCurrentPageNo();
    }
    private void ToggleEmoteIndex(int index){
        ActionPalette actionPalette=GetActionPalette();
        if(actionPalette===null){
            return;
        }
        list<int> emoteIndices=actionPalette.GetEmoteIndicesToActionPalette();

        int idx=emoteIndices.IndexOf(0,emoteIndices.Count(),index);
        if(idx==-1){
            if(emoteIndices.Count()<g_ConstActionPaletteLimitSize){
                hsCanvasToggleChange("Toggle_Emote_%d" % (index+1) );
                emoteIndices.Add(index);
            }
        }else{
            hsCanvasToggleChange("Toggle_Emote_%d" % (index+1) );
            emoteIndices.RemoveAt(idx);
        }
    }
    //中身設定
    private void InitButtonsText(){
        for(int i=0;i<10;++i){
            string guiText;
            guiText="action_emote%d_text" % (i+1);
            if(system.IsLangEN()){
                hsCanvasSetGUIText("action_list",guiText,buttonNameText_[i].en);
            }else{
                hsCanvasSetGUIText("action_list",guiText,buttonNameText_[i].jp);
            }
        }
    }

    //エモートボタンクリック
    private void OnEmoteButtonClick(int index){
        ToggleEmoteIndex(index);
    }
    private void RefreshActionToggle(){
        InitButtonsText();
        for(int i=0;i<12;++i){
            hsCanvasResetToggleDefault("Toggle_Emote_%d" % (i+1) );
        }
        ActionPalette actionPalette=GetActionPalette();
        if(actionPalette===null){
            return;
        }
        list<int> emoteIndices=actionPalette.GetEmoteIndicesToActionPalette();
        for(int i=0;i<emoteIndices.Count();++i){
            int idx=emoteIndices[i];
            hsCanvasToggleChange("Toggle_Emote_%d" % (1+idx) );
        }
    }

    //アクションパレットの更新を行う
    private void RefreshActionPalette(){

        ActionPalette actionPalette=GetActionPalette();
        if(actionPalette===null){
            return;
        }
        list<int> emoteIndices=actionPalette.GetEmoteIndicesToActionPalette();
        list<string> emoteIconPathTable=actionPalette.GetEmoteIconPathTable();

        for(int i=0 ; i<emoteIndices.Count();++i){
            int idx= emoteIndices[i];
            string btnName="action_palette_button%d" % (i+1);

            hsCanvasSetGUIImage("action_palette",btnName , emoteIconPathTable[idx]);
        }


        for(int i=emoteIndices.Count();i<g_ConstActionPaletteLimitSize;++i){
            string btnName="action_palette_button%d" % (i+1);
            hsCanvasSetGUIImage("action_palette",btnName , "gui2023/action/action_dummy_item.png");
        }
    }

    //現在のエモートをクッキーに保存する
    private void SaveEmoteIndices(){
        ActionPalette actionPalette=GetActionPalette();
        if(actionPalette===null){
            return;
        }
        list<int> emoteIndices=actionPalette.GetEmoteIndicesToActionPalette();
        list<string> emoteIconPathTable=actionPalette.GetEmoteIconPathTable();
        string strIndices="";
        for(int i=0 ; i<emoteIndices.Count();++i){
            int idx=emoteIndices[i];
            if(i==emoteIndices.Count()-1){
                strIndices+="%d" % idx;
            }else{
                strIndices+= "%d," % idx;
            }
        }
        hel_set_cookie(SAVED_EMOTE_INDICES,strIndices);
    }
    //GUIボタンクリック    
    public void OnClickedButton(string layerName,string btnName){
        if(layerName=="action_list"){
            if(btnName=="action_list_decide"){
                SaveEmoteIndices();
                RefreshActionPalette();
            }
            if(btnName=="action_list_right_page"){
                OnRightPageClick();
            }
            else if(btnName=="action_list_left_page"){
                OnLeftPageClick();
            }
            for(int i=0;i<buttonNameText_.Count();++i){
                string name="action_emote%d" % (i+1);
                if(name==btnName){
                    OnEmoteButtonClick(i);
                    break;
                }
            }
        }else if(layerName=="action_palette"){
            //アクションリストが表示されるときに呼び出される
            if(btnName=="action_add_item_btn"){
                RefreshActionToggle();

                if(hsCanvasIsPortrait())
                {
                    // VCC
                    {
                        LayerBundle layer = hsLayerGet("vcc_icon_only_base");
                        if(layer === null) return;

                        layer.CallComponentMethod("VCCViewModel", "ClearAllVCCLayer", "");
                    }

                    // TC
                    {
                        LayerBundle layer = hsLayerGet("textchat_common");
                        if(layer === null) return;

                        layer.CallComponentMethod("TCViewModel", "CloseTextChat", "");
                    }
                }
            }
        }
    }

    public void Update(){
    }
}