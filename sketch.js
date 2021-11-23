var database;
var form,game,player,playerCount = 0,bgimg,rank,track1,track2;
var gameState = 0;
var allplayers;
var car1,car2,car3,car4,cars = [];

function preload(){

  bgimg = loadImage("images/form_bg.png");
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  car3img = loadImage("images/car3.png");
  car4img = loadImage("images/car4.png");
  trackimg = loadImage("images/track.jpg");
  groundimg = loadImage("images/ground.png");
  end_bg = loadImage("images/end_bg.jpg");
  track1 = loadSound("tracks/start.mp3");
  track2 = loadSound("tracks/play.mp3");
}

function setup(){

  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-180);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if (gameState===0){

    background(bgimg);
  }

  if (playerCount===4){

    game.update(1);
  }
  if (gameState===1) {
    
    clear();
    game.play();
  }
  if (gameState===2) {
    
    clear();
    background(end_bg);
    game.end();
  }
}