component AchievementViewModel
{
    public AchievementViewModel()
    {
    }

    public void OnNotifyAction(string data)
    {
        int index = data.IndexOf(",");
        int len = data.Length();
        string actionId_str = data.SubString(0, index); 
        string param_str = data.SubString(index + 1, len - index - 1);

        int actionId = actionId_str.ToInt();
        int param = param_str.ToInt();

        api.achievement.notifyAction(actionId, param);
    }
}