
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,ball5;



function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

roof = new Roof (350,100,300,30);
ball1 = new Ball (250,300)
ball2 = new Ball (300,300)
ball3 = new Ball (350,300)
ball4 = new Ball (400,300)
ball5 = new Ball (450,300)

rope1 = new Rope (ball1.body,roof.body,-100,0);
rope2 = new Rope (ball2.body,roof.body,-50,0);

rope3= new Rope (ball3.body,roof.body,0,0);

rope4 = new Rope (ball4.body,roof.body,50,0);
rope5 = new Rope (ball5.body,roof.body,100,0);



	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
roof.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}
function keyPressed (){
	if (keyCode === 32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-550,y:0})
	}
}