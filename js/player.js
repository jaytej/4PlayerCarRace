class Player{
    constructor(){

        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
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
            distance: this.distance,
            rank: this.rank
        })
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