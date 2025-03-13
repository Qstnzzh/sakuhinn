component Master
{
   Player player;
   bool is_start;
    
   public Master()
   {
        
   }

   public void Update()
   {
       
   }
    
   public void GameStart(){
       is_start = true;
       hsSystemWriteLine("Game Start");
   }
    
   public void GameClear(){
       is_start = false;
       if(is_start == false){
           hsSystemWriteLine("Game Clear");
       }
   }
}