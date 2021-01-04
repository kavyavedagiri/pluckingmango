
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {

	engine = Engine.create();
  world = engine.world;
createCanvas(1600, 1000);
  boy = new Boy(350,885,400,400);
  tree = new Tree(1200,600,850,800);
  stone = new Stone(220,790,35,35);

  mango1 = new Mango(900,350,70);
  mango2 = new Mango(800,300,70);
  mango3 = new Mango(1000,200,70);
  mango4 = new Mango(1000,300,70);
  mango5 = new Mango(900,200,70);
  
  string = new Chain(stone.body, { x : 225 , y : 790});
  ground = new Ground(width/2,height-5,width,10);
 
	Engine.run(engine);
  
}


function draw() {
 
	background(400);
	rectMode(CENTER);
	  ground.display();
   
	  boy.display();
	  tree.display();
   
	  string.display();
	  stone.display();
   
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango5.display();
	  
	  
	  detectollision(stone.body,mango1.body);
	//   detectollision(stone,mango2);
	//   detectollision(stone,mango3);
	//   detectollision(stone,mango4);
	//   detectollision(stone,mango5);
   
	  drawSprites();
	 
}
function detectollision(lstone,lmango){
console.log("Working");
	collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
	   
	   Body.setStatic(lmango,false);
	}
 
	// mangoBodyPosition= lmango.body.position;
	// stoneBodyPosition= lstone.body.position;
 
	// var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
 
	// if (distance<=lmango.r+lstone.r){
	//    Body.setstatic(lmango.body,false);
	// }
 }

 function mouseDragged(){
	Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 }
 
 function mouseReleased(){
	string.fly();
 }
