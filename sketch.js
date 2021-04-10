const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ground

function setup() {
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;
   ground = new Ground(420,280,250,10);
   block1 = new Block(350,220)
   block2 = new Block(400,220)
   block3 = new Block(450,220)
   block4 = new Block(500,220)
   block5 = new Block(375,120)
   block6 = new Block(425,120)
   block7 = new Block(475,120)
   ball = new Ball(100,130)
   rope = new Rope(ball.body,{x:100,y:130})
  }



function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}