class Vector2{
    public float x;
    public float y;
    public Vector2(){
        x=0;
        y=0;
    }
    public void Copy(Vector2 v){
        x=v.x;
        y=v.y;
    }
    public void Add(Vector2 v){
        x+=v.x;
        y+=v.y;
    }
}

const int g_ConstActionPaletteLimitSize=6;//アクションパレットのサイズ

//アクションパレットコンポーネント
component ActionPalette
{
    //アクションリストとのやり取りに使う用
    list<int> emoteIndicesToActionPalette_;//=new list<int>(0);
    list<string> emoteIconPathTable_;

    public list<int> GetEmoteIndicesToActionPalette(){
        return emoteIndicesToActionPalette_;
    }
    
    public list<string> GetEmoteIconPathTable(){
        return emoteIconPathTable_;
    }

    public ActionPalette()
    {
        emoteIndicesToActionPalette_=new list<int>(g_ConstActionPaletteLimitSize);
        //デフォルト設定
        emoteIndicesToActionPalette_[0]=0;//指さし
        emoteIndicesToActionPalette_[1]=1;//サムズアップ
        emoteIndicesToActionPalette_[2]=2;//てふり
        emoteIndicesToActionPalette_[3]=3;//合掌
        emoteIndicesToActionPalette_[4]=4;//ダンス
        emoteIndicesToActionPalette_[5]=5;//OK

        emoteIconPathTable_=new list<string>(10);
        emoteIconPathTable_[0]="gui2023/action/action_item_point.png";//指さし
        emoteIconPathTable_[1]="gui2023/action/action_item_thumbsup.png";//サムズアップ
        emoteIconPathTable_[2]="gui2023/action/action_item_wave.png";//手をフル
        emoteIconPathTable_[3]="gui2023/action/action_item_pray.png";//合掌
        emoteIconPathTable_[4]="gui2023/action/action_item_dance.png";//ダンス
        emoteIconPathTable_[5]="gui2023/action/action_item_ok.png";//OK
        emoteIconPathTable_[6]="gui2023/action/action_item_ng.png";//NG
        emoteIconPathTable_[7]="gui2023/action/action_item_no1.png";//ガッツポーズ
        emoteIconPathTable_[8]="gui2023/action/action_item_no2.png";//両手をフル
        emoteIconPathTable_[9]="gui2023/action/action_item_no3.png";//オタ芸

    }
    //アクションパレット用のクッキーからインデックスを解析する
    private void AnalyzeActionPaletteCookie(){
        string savedEmoteIndices=hel_get_cookie_onEmptyStr(SAVED_EMOTE_INDICES);
        if(savedEmoteIndices==""){
            return;
        }
        string subStr=savedEmoteIndices;
        int idx=subStr.IndexOf(",");
        int len = subStr.Length();
        emoteIndicesToActionPalette_.Clear();
        while(idx>0){
            emoteIndicesToActionPalette_.Add(subStr.SubString(0,idx).ToInt());
            subStr = subStr.SubString(idx+1,len-idx-1);
            idx=subStr.IndexOf(",");
        }
        emoteIndicesToActionPalette_.Add(subStr.SubString(0,idx).ToInt());
    }
    public void OnLoaded(){
        string savedEmoteIndices=hel_get_cookie_onEmptyStr(SAVED_EMOTE_INDICES);
        AnalyzeActionPaletteCookie();
    }
    private void OnShowActionPalette(){
        for(int i=0 ; i<emoteIndicesToActionPalette_.Count();++i){
            int idx= emoteIndicesToActionPalette_[i];
            string btnName="action_palette_button%d" % (i+1);
            hsCanvasSetGUIImage("action_palette",btnName , emoteIconPathTable_[idx]);
        }
    }
    //GUIボタンクリック    
    public void OnClickedButton(string layerName,string btnName){
        if(layerName=="HUD" && btnName=="hud_emote_pal_on"){
            OnShowActionPalette();
        }else if(layerName=="action_palette"){
            for(int i=0 ; i<emoteIndicesToActionPalette_.Count();++i){
                string name="action_palette_button%d" % (i+1);
                
                if(btnName==name){
                    if(i<emoteIndicesToActionPalette_.Count()){
                        int emoteIndex=emoteIndicesToActionPalette_[i];
                        Player player=hsPlayerGet();
                        player.Emote(emoteIndex);
                    }
                }
            }
        }
    }

    public void Update(){
    }
}