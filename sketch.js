
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage,tree,treeImage;
var ground;
var m1,m2,m3,m4,m5,m6,m7,m8;
var rock,chain;
function preload(){
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(950, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground();

	m1 = new Mango(560,370,50,60);
	m2 = new Mango(600,400,30,40);
	m3 = new Mango(700,270,25,30);
	m4 = new Mango(800,380,55,70);
	m5 = new Mango(770,305,40,50);
	m6 = new Mango(650,300,40,50);
	m7 = new Mango(700,350,40,50);
	m8 = new Mango(850,350,30,35);

	rock = new Rock(130,500);

	chain = new Chain(rock.body,{x:130,y:480});
	

	
	

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  
  background("skyblue");
  ground.display();
  image(treeImage,530,180,350,500);
  image(boyImage,95,400,200,300);
  detectcollision(rock,m1);
  detectcollision(rock,m2);
  detectcollision(rock,m3);
  detectcollision(rock,m4);
  detectcollision(rock,m5);
  detectcollision(rock,m6);
  detectcollision(rock,m7);
  detectcollision(rock,m8);
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  
  rock.display();
  chain.display();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance>= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body,{x:130,y:480});
		chain.attach(rock.body);
	};
}