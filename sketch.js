
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof(400,400,300,20)


	rope1 = new Rope(roof.body,{x: 400, y : 600});
	rope2 = new Rope(roof.body,{x: 360, y : 600});
	rope3 = new Rope(roof.body,{x: 440, y : 600});
	rope4 = new Rope(roof.body,{x: 320, y : 600});
	rope5 = new Rope(roof.body,{x: 480, y : 600});

	bobObject1 = new Bob(400,600,20);
	bobObject2 = new Bob(360,600,20)
	bobObject3 = new Bob(440,600,20)
	bobObject4 = new Bob(320,600,20);
	bobObject5 = new Bob(480,600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  drawSprites();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
 
}



