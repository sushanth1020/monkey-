var bananaImage
var obstacleImage
var obstacleGroup
var background
var score

function preload(){
  player=loadImage("Monkey_01,png","Monkey_02,png","Monkey_03,png","Monkey_04,png","Monkey_05,png","Monkey_06,png",
  "Monkey_07,png","Monkey_08,png","Monkey_09,png","Monkey_10,png");
  
  banana=loadImage("banana.png");
  jungle=loadImage("jungle.png");          
}
function setup() {
  createCanvas(400, 400);
  
  player23 = createsprite(350,200,30,40);
  player23.addImage=player
}

function draw() {
  background(220);
  
}