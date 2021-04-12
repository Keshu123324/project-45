var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var xdistance = 0;
var ydistance = 0;


var form, player, game;

var survivors, survivor1, survivor2, survivor3, survivor4,key;        

var horror_house, survivor1_img, survivor2_img, survivor3_img, survivor4_img,survivor5_img;
var bg,backgroundImage,gameMap,gamePath;
var keyImage, ghostImage;

function preload(){
  backgroundImage=loadImage("images/deadline image.png");
  gameMap = loadImage("images/haunted_bg.jpg");
  keyImage = loadImage("images/edited deadline key.png");
  ghostImage= loadImage("images/ghost edited.png")
  //gamePath = loadImage("images/ghost path.jpeg");
  
 // horror_house = loadImage("images/track.jpg");
  survivor1_img = loadImage("images/survivor1.jpg");
  survivor2_img = loadImage("images/survivor2.png");
  survivor3_img = loadImage("images/survivor3.png");
  survivor4_img = loadImage("images/survivor4.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 spawnKey();
 spawnGhost();
}

 function spawnKey() {
  var key = createSprite(Math.round(random(100,5000)),100,200);
 key.y= Math.round(random(100,9000));
 key.addImage(keyImage);
 key.velocityY =5;
 key.scale=0.4;
 key.lifetime=600;
 }

 function spawnGhost() {
  var ghost = createSprite(Math.round(random(100,5000)),100,200);
 ghost.y= Math.round(random(100,9000));
 ghost.addImage(ghostImage);
 ghost.velocityY =5;
 ghost.scale=0.4;
 ghost.lifetime=600;
 }