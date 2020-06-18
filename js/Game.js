class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(25)
    text("game start",120,100)
    Player.getPlayerinfo()
    if(AllPlayers!==undefined){
      var displayPosition = 130
      for(var P in AllPlayers ){
        if(P==="player"+player.index)
        fill("red")
        else{fill("black")}
        textSize(15)
        displayPosition+=20
        console.log(AllPlayers)
        text(AllPlayers[P].name+":"+AllPlayers[P].distance,120,50)
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance+=50
      player.update()
    }
  }
}
