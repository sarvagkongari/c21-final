const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function setup() {
 createCanvas(800, 700);
 var balls_option={
	 isStatic:false,
	 restitution:0.2,
	 friction:0,
	 density:1.3
	}

 engine = Engine.create();
 world = engine.world;
var ground_options={
  isStatic:true
}
 ground=Bodies.rectangle(0,680,1600,20,ground_options)
 World.add(world,ground)
 //Create the Bodies Here.
 ball=Bodies.circle(100,100,20,balls_option)
 World.add(world,ball)
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  rect(ground.position.x,ground.position.y,1600,20)
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{
      x:85,y:-85
    })
  }
}

