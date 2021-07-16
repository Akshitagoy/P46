const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


function preload(){
  night = loadImage("images/sky.jpeg");
  iron2 = loadImage("images/marvel.png");
  iron3 = loadImage("images/spiderman2.png");
  iron4 = loadImage("images/captainAmerica.png");
}

function setup() {
  createCanvas(displayWidth+165,displayHeight-22);
  engine = Engine.create();
  world = engine.world;

 earth  = new Ground(700, 950);
 heroes = new Heroes(500,650);
 villian = new Villian(900,650);
   //var marvel = createSprite(300,650);
   //marvel.addImage(iron2);
   //marvel.scale = 1.2
   //var spider  = createSprite(100,650);
   //spider.addImage(iron3);
   //spider.scale = 0.7;
   //var captainA = createSprite(700,650);
   //captainA.addImage(iron4);
   //captainA.scale = 1.4;

}

function draw() {
  background(night);
  
  //Engine.update(engine);
  earth.display(); 
  heroes.display();
  villian.display(); 



  
  drawSprites();
}