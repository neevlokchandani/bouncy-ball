const Engine=Matter.Engine;
const World=Matter.World;
const Bodi=Matter.Bodies;
var ball,ground;
var engine;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var bounce={
    restitution: 1
  }
  ball = Bodi.circle(200,100,50,bounce);
  var opp={
 isStatic: true

  }
  
  ground = Bodi.rectangle(200,390,410,10,opp)
  World.add(world,ball)
  World.add(world,ground)

  console.log(ball.position.x);
  console.log(ball.position.y);
}

function draw() {
  background("blue");  
 ellipseMode(RADIUS); 
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,410,10)
  drawSprites();
}