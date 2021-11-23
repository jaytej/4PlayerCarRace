class Game{
    constructor(){

    }

    getState(){

        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){

            gameState = data.val();
        })
    }
    update(state){

        database.ref('/').update({

            gameState: state
        })
    }
    async start(){

      if (gameState===0){

        form = new Form();
        form.display();
        player = new Player();
        var playerCountref = await database.ref('playerCount').once("value");

        if (playerCountref.exists()) {
            
            playerCount = playerCountref.val();
            player.getCount();
        }
       }
       car1 = createSprite(100,200);
       car2 = createSprite(250,200);
       car3 = createSprite(400,200);
       car4 = createSprite(550,200);
       cars = [car1,car2,car3,car4];

       car1.addImage(car1img);
       car2.addImage(car2img);
       car3.addImage(car3img);
       car4.addImage(car4img);
    }
    play(){
        
        track1.stop();
        form.hide();
        Player.getplayerinfo();
        player.getcarsatend();

        if (allplayers !== undefined) {
            
            //track2.play();
            background(groundimg);
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index = 0;
            var x = 215;
            var y;
            for(var p in allplayers){

                index = index+1;
                x = x+225;
                y = displayHeight-allplayers[p].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index===player.index) {
                    
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
                
                player.distance += 10;
                player.update();
        }
        if (player.distance>4230) {
            
            gameState = 2;
            player.rank+=1;
            player.updatecarsatend(player.rank);
            rank = player.rank;
        }
        drawSprites();
    }
    end(){

        form.end();
    }
}