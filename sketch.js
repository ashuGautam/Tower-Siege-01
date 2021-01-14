const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;

     

function preload(){

}
function setup(){

    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(490, 550, 315, 10, 172, 66, 67);
    ground2 = new Ground(940, 350, 235, 10, 172, 66, 67);

}
function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    
}