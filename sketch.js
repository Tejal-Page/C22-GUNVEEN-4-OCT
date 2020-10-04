//calling engine, world and bodies from matter.js and renaming them
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//declaring the variable globally
var engine, world, object1, object2;

function setup() {
  createCanvas(400,400);
  //creating engine
  engine=Engine.create();
  //attaching world to the engine
  world=engine.world;
  //changing attributes
  var object_options={
    isStatic:true
  }
  //var object2_options={
    //restitution:0.5
  //}
  //attaching the objects to the world
  object1=Bodies.rectangle(200, 350, 20, 20, object_options);
  object2=Bodies.circle(100, 100, 30, object_options);
  World.add(world, object1, object2);
  console.log(object1.position.x);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x, object1.position.y, 400, 40); 
  ellipseMode(RADIUS);
  ellipse(object2.position.x, object2.position.y, 20, 30);
  drawSprites();
}