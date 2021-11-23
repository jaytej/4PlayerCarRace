class Form{
    constructor(){

        this.greetings = createElement('h2');
        this.input = createInput("name");
        this.button = createButton('play');
        this.greetings2 = createElement('h2');
    }
    display(){

        var title = createElement('h2');
        title.html("Welcome to Car Racing Game");
        title.position(displayWidth/2-150,displayHeight/4-100);
        this.input.position(displayWidth/2-80,displayHeight/2-50);
        this.input.size(150,30);
        this.button.position(displayWidth/2-50,displayHeight/2+150);
        this.button.size(100,30)

        this.button.mousePressed(()=>{

            title.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greetings.html("Hello "+player.name);
            this.greetings.position(displayWidth/2-100,displayHeight/2-50);
            track1.play();
        })
    }
    hide(){

        this.button.hide();
        this.input.hide();
        this.greetings.hide();
    }
    end(){

        if (player.rank>=4){
            var reset = createButton('Reset');
            reset.position(displayWidth-200,20);
            reset.mousePressed(()=>{

                player.updatecarsatend(0);
                player.updateCount(0);
                game.update(0);
                var playerref = database.ref('players');
                playerref.remove();
                this.greetings2.hide();
            });
        }

        this.greetings2.html("Congratulations "+player.name+" Your Rank is "+rank);
        this.greetings2.position(displayWidth/2-100,displayHeight/2-50);
    }
}