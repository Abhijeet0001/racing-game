class Player {
  constructor(){
    this.name = null
    this.index = null
    this.distance = 0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name ,
      distance : this.distance 
    });
  }
static getPlayerinfo(){
  var playerref = database.ref('players')
  playerref.on("value",(data)=>{AllPlayers = data.val()})
}
}
