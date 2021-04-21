
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	yoda = new Alien(200,400,50,50);


	 
}


function draw() {
  background(0);
  
  Engine.update(engine);
  yoda.display();
 
}



