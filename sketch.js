
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
  pi = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

   
  p = createSprite(1295,505,1,1);
  p.addImage(pi);

	ground = new Ground(width/2,670,1500,10);

	boxLeft = new Dustbin(1180, 510, 20,300);
	boxRight = new Dustbin(1410 ,510 , 20,300);
	boxDown = new Dustbin(1295, 650,230,20);
  paper = new Paper(100,650,70);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine)

  background(220);

  ground.display();
  boxLeft.display();
  boxRight.display();
  boxDown.display();
  paper.display();

  drawSprites();
 
}

 function keyPressed(){

  if(keyCode === UP_ARROW){

  Body.applyForce(paper.body,paper.body.position,{x:1080,y:-1410});
  

  }

 }



