component VCCChannelSettingView
{
    VCCViewModel m_ViewModel;

    public VCCChannelSettingView()
    {
        m_ViewModel = system.Layer_GetComponentByName<VCCViewModel>("vcc_icon_only_base");
    }

    public void OnResize()
    {
        if(m_ViewModel !== null)
        {
            m_ViewModel.ResizeCallback();
        }
    }
}