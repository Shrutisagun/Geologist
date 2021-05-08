
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;
var ground;
function preload()
{
	
}

function setup() {
var canvas=	createCanvas(12000, 400);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1900,20);
  stone = new Stone(700,320,70,70);
  hammer = new Hammer(810,260,300,PI/2);
  rubber = new Rubber(600,410);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  ground.display();
  stone.display();
 hammer.display();
 rubber.display();
}



