var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("libraries/images/jungle.jpg");
  player_img = loadImage("libraries/images/basket2.png");
  fruit1_img = loadImage("libraries/images/apple2.png");
  fruit2_img = loadImage("libraries/images/banana2.png");
  fruit3_img = loadImage("libraries/images/melon2.png");
  fruit4_img = loadImage("libraries/images/orange2.png");
  fruit5_img = loadImage("libraries/images/pineapple2.png");
}
function setup() {
  createCanvas(1000, 600);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  fruitGroup = new Group();
  
}

function draw() {
  background(180, 249, 165);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
  }
