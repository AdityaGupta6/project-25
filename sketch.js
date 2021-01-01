
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1,line2,line3,line4;
var ground;
var paperObject;
var dustbinSprite;

function preload() {
bgImg=loadImage("bg.png");
dustbin=loadImage("dustbin.png");


}

function setup() {
	createCanvas(1100, 400);

dustbinSprite=createSprite(1050, 333, 100, 10);
dustbinSprite.addImage(dustbin)
dustbinSprite.scale=0.3

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1 = new Line(1050, 375, 70, 10);
	line2 = new Line(1085, 337, 10, 85);
	line3 = new Line(1015, 337, 10, 85);
	// line4= new Line(1040, 345, 100, 100);

	ground = new Ground(550, 390, 1100, 20);
	paperObject = new Ball(100, 380, 15);
	
	keyPressed();

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(bgImg);

	ground.display();
line1.display();
line2.display();
line3.display();



	

	
	drawSprites();

	paperObject.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Body.applyForce(paperObject.object,paperObject.object.position,{x:11,y:-12})
}




}

