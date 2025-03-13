// 動的UI生成機能がHeliScriptの組み込み関数として追加されるまでの繋ぎの関数群
// ug_〇〇がその関数. ug = UI Generator

// Layer /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void ug_AddLayer(string LayerName, bool IsPortrait, bool Show, int Z)
{
    hel_setText(ETextParamType_OperateCanvas, "AddLayer" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + ((Show)? "true" : "false") + "," + "%d" % Z);
}

void ug_ReleaseLayer(string LayerName, bool IsPortrait)
{
    hel_setText(ETextParamType_OperateCanvas, "ReleaseLayer" + "," + LayerName + "," + ((IsPortrait)? "true" : "false"));
}

void ug_SetLayerComponentNameList(string LayerName, bool IsPortrait, list<string> ComponentNameList)
{
    string NameListStr;
    for(int i = 0; i < ComponentNameList.Count; i++)
    {
        string ComponentName = ComponentNameList[i];

        if(i < ComponentNameList.Count - 1)
        {
            NameListStr += ComponentName + ",";
        }
        else
        {
            // 末尾にカンマが付かないようにする
            NameListStr += ComponentName;
        }
    }

    hel_setText(ETextParamType_OperateCanvas, "SetLayerComponentNameList" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + NameListStr);
}

void ug_SetLayerMask(string LayerName, bool IsPortrait, string URI, int PosX, int PosY, int SizeX, int SizeY, float PivoX, float PivoY, string Anchor, int Z,
    float ColorR, float ColorG, float ColorB, float ColorA, bool Show, bool Vertical, bool FreeSlide) // FreeSlideの初期値はfalse
{
    hel_setText(ETextParamType_OperateCanvas, "SetLayerMask" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + URI + "," + "%d" % PosX + "," + "%d" % PosY + "," + "%d" % SizeX + "," + "%d" % SizeY 
        + "," + "%f" % PivoX + "," + "%f" % PivoY + "," + Anchor + "," + "%d" % Z + "," + "%f" % ColorR + "," + "%f" % ColorG + "," + "%f" % ColorB + "," + "%f" % ColorA
        + "," + ((Show)? "true" : "false") + "," + ((Vertical)? "true" : "false") + "," + ((FreeSlide)? "true" : "false"));
}

// GUI //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void ug_AddGUIImage(string LayerName, bool IsPortrait, 
    string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string URI)
{
    hel_setText(
        ETextParamType_OperateCanvas, "AddGUI" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + "image"
        // [GUIParam]
        + "," + GUIName + "," + Platform + "," + Language + "," + Portrait + "," + ((Show)? "true" : "false") + "," + "%d" % Z + "," + "%d" % PosX + "," + "%d" % PosY + "," + "%d" % SizeX + "," + "%d" % SizeY 
        + "," + "%f" % PivotX + "," + "%f" % PivotY + "," + Anchor + "," + ((RaycastTarget)? "true" : "false") + "," + "%f" % Angle
        // [TypeParam]
        + "," + "TypeParam:" + URI);
}

void ug_AddGUIButton(string LayerName, bool IsPortrait, 
    string GUIName, string Platform, string Language, string Portrait, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string FileName, string OnCursorFileName, string DownFileName, string ClickAreaFileName, int ClickAreaSizeX, int ClickAreaSizeY)
{
    hel_setText(
        ETextParamType_OperateCanvas, "AddGUI" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + "button"
        // [GUIParam]
        + "," + GUIName + "," + Platform + "," + Language + "," + Portrait + "," + ((Show)? "true" : "false") + "," + "%d" % Z + "," + "%d" % PosX + "," + "%d" % PosY + "," + "%d" % SizeX + "," + "%d" % SizeY 
        + "," + "%f" % PivotX + "," + "%f" % PivotY + "," + Anchor + "," + ((RaycastTarget)? "true" : "false") + "," + "%f" % Angle
        // [TypeParam]
        + "," + "TypeParam:" + FileName + "," + OnCursorFileName + "," + DownFileName + "," + ClickAreaFileName + "," + "%d" % ClickAreaSizeX + "," + "%d" % ClickAreaSizeY);
}

void ug_AddGUIText(string LayerName, bool IsPortrait, 
    string GUIName, bool Show, int Z, int PosX, int PosY, int SizeX, int SizeY, float PivotX, float PivotY, string Anchor, bool RaycastTarget, float Angle,
    string Text, string FontFamily, int FontSize, float ColorR, float ColorG, float ColorB, float ColorA, string Alignment, int CharaSpace, int LineSpace, bool IsOverflowWrap)
{
    hel_setText(
        ETextParamType_OperateCanvas, "AddGUI" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + "text"
        // [GUIParam]
        + "," + GUIName + "," + ((Show)? "true" : "false") + "," + "%d" % Z + "," + "%d" % PosX + "," + "%d" % PosY + "," + "%d" % SizeX + "," + "%d" % SizeY 
        + "," + "%f" % PivotX + "," + "%f" % PivotY + "," + Anchor + "," + ((RaycastTarget)? "true" : "false") + "," + "%f" % Angle
        // [TypeParam]
        + "," + "TypeParam:" + Text + "," + FontFamily + "," + "%d" % FontSize + "," + "%f" % ColorR + "," + "%f" % ColorG + "," + "%f" % ColorB + "," + "%f" % ColorA + "," + Alignment + "," + "%d" % CharaSpace + "," + "%d" % LineSpace + "," + ((IsOverflowWrap)? "true" : "false"));
}

void ug_ReleaseGUI(string LayerName, bool IsPortrait, string GUIName)
{
    hel_setText(ETextParamType_OperateCanvas, "ReleaseGUI" + "," + LayerName + "," + ((IsPortrait)? "true" : "false") + "," + GUIName);
}

void ug_AddGUIAction(string LayerName, string GUIName, string GUIAction)
{
    hel_setText(ETextParamType_OperateCanvas, "AddGUIAction" + "," + LayerName + "," + GUIName + "," + GUIAction);
}

void ug_AddGUIToggle(string LayerName, string GUIName, string ToggleName, bool State)
{
    hel_setText(ETextParamType_OperateCanvas, "AddGUIToggle" + "," + LayerName + "," + GUIName + "," + ToggleName + "," + ((State)? "true" : "false"));
}