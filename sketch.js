const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(625,368,70,70);
    box2 = new Box(793,368,70,70);
    box3 = new Box(625,368,70,70);
    box4 = new Box(793,368,70,70);
    box5 = new Box(710,200,70,70);
    ground = new Ground(600,height,1200,20);
    
    pig1= new pig(710,365);
    pig2= new pig(710,300);
    
    log1= new log(710,283,240,PI/2)
    log2= new log(710,316,240,PI/2)
    log3= new log(700,200,120,PI/7)
    log4= new log(750,200,120,-PI/7)
    bird1= new bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);

    text(mouseX+","+mouseY,20,20)
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
}