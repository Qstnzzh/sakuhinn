class ErrorToastView
{
    public ErrorToastView()
    {
    }

    private void SetBarToggle(){
        hsCanvasResetToggleDefault("Toggle_Default_Toast_Bar");
        hsCanvasResetToggleDefault("Toggle_Error_Toast_Bar");
        hsCanvasToggleChange("Toggle_Default_Toast_Bar");
        hsCanvasToggleChange("Toggle_Error_Toast_Bar");
    }
    public void Begin(string message, int beginDeltaTime)
    {
        SetBarToggle();
        hsCanvasSetLayerShow("toast", true);
        hsCanvasSetGUIText("toast", "toast_text", message);
        
        hsStartLayerAnimation("toast", "Begin", float(beginDeltaTime));
    }
    
    public void End(int endDeltaTime)
    {
        hsStartLayerAnimation("toast", "End", float(endDeltaTime));
    }

    public void Close()
    {
        hsCanvasSetLayerShow("toast", false);
    }
}