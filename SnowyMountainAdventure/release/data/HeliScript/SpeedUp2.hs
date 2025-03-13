component SpeedUp2
{
    Player player;
    Vector3 player_pos;
    Vector3 move_velocity;
    float timer;
    float Speed;
    //float player_Rotate;
    bool SpeedUp_Switch;
    int Move_direction;

    public SpeedUp2()
    {
        timer = 2;
        hsSystemOutput("Hello\n");
        SpeedUp_Switch = false;
        Speed = 0.25f;
    }

    public void Update()
    {
        //SpeedUpHs();
        if(SpeedUp_Switch == true)
        {
            SpeedUpHs();
        }
    }

    void SpeedUp_Switch_OnOff_1()// x+方向
    {
        SpeedUp_Switch = true;
        Move_direction = 1;
        hsSystemOutput("SpeedUp_1!!\n");
    }
    void SpeedUp_Switch_OnOff_2()// z-方向
    {
        SpeedUp_Switch = true;
        Move_direction = 2;
        hsSystemOutput("SpeedUp_2!!\n");
    }
    void SpeedUp_Switch_OnOff_3()// x-方向
    {
        SpeedUp_Switch = true;
        Move_direction = 3;
        hsSystemOutput("SpeedUp_3!!\n");
    }
    void SpeedUp_Switch_OnOff_4()// z+方向
    {
        SpeedUp_Switch = true;
        Move_direction = 4;
        hsSystemOutput("SpeedUp_4!!\n");
    }
    void SpeedUp_Switch_OnOff_5()// y+方向
    {
        SpeedUp_Switch = true;
        Move_direction = 5;
        hsSystemOutput("SpeedUp_5!!\n");
    }

    void SpeedUpHs()
    {
        timer -= hsSystemGetDeltaTime();
        if(timer >= 0)
        {
            player = hsPlayerGet();
            player_pos = player.GetPos();
            switch(Move_direction)
            {
                case 1:
                    move_velocity = makeVector3(Speed,0.0f,0.0f);
                    break;
                case 2:
                    move_velocity = makeVector3(0.0f,0.0f,-Speed);
                    break;
                case 3:
                    move_velocity = makeVector3(-Speed,0.0f,0.0f);
                    break;
                case 4:
                    move_velocity = makeVector3(0.0f,0.0f,Speed);
                    break;
                case 5:
                    move_velocity = makeVector3(0.0f,Speed,Speed);
                    break;
            }
            player_pos.Add(move_velocity);
            player.SetPos(player_pos);
        }
        if (timer <= 0)
        {
            SpeedUp_Switch = false;
            hsSystemOutput("SpeedUp_Switch = false\n");
            timer = 3;
        }
    }
}
