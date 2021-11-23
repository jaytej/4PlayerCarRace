class Player{
    constructor(){

        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
    }
    getCount(){

        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            
            playerCount = data.val();
        })
    }
    updateCount(count){

        database.ref('/').update({

            playerCount: count
        });

    }
    update(){

        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            rank: this.rank
        });
    }

    
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

    static getplayerinfo(){

        var playerinforef = database.ref('players');
        playerinforef.on("value",(data) => {

            allplayers = data.val();
        }) 
    }
    getcarsatend(){

        database.ref('cars_at_end').on("value",(data)=>{

            this.rank = data.val();
        });
    }
    updatecarsatend(rank){

        database.ref('/').update({

            cars_at_end: rank
        })
    }
}