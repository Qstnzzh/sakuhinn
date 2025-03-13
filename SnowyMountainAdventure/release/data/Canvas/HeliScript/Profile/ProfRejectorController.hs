//対象ユーザーをキックしたりBANしたりブロックしたりするコンポーネント
component ProfRejectorController
{
    //現在選択中のプロフィール情報は
    //profileModel_が持っている
    public ProfRejectorController()
    {
    }
    public void OnLoaded()
    {

    }
    private ProfRejector GetProfileRejector(){
        //対象アバターを見えなくし、アバターターゲッティングも解除する
        LayerBundle optionLayer=hsLayerGet("prof_option_layer");
        if(optionLayer===null){
            return null;
        }
    
        ProfRejector rejector= system.Layer_GetComponentByName<ProfRejector>("prof_option_layer");
        return rejector;
    }
    public void OnClickedButton(string layerName,string btnName){
        ProfRejector rejector=GetProfileRejector();
        if(layerName=="prof_option_forced_exit_dialog"){//強制退室ダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            rejector.KickTargetUser();
        }else if(layerName=="prof_option_no_entry_dialog"){//入室禁止ダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            rejector.BanTargetUser();
        }else if(layerName=="prof_option_temporary_block_dialog"){//一次ブロックダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            rejector.TemporaryBlockTargetUser();
        }else if(layerName=="prof_option_block_dialog"){//完全ブロックダイアログ
            if(btnName=="prof_option_cancel_btn"){
                return;
            }
            rejector.BlockTargetUser();
        }
    }


}