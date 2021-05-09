const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ballimg;
var score=0;

function preload() {
    ballimg = loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   ball=Bodies.circle(50,200,20);
   World.add(world,ball);


   slingShot=new SlingShot(ball,{x:100,y:200})


    ground = new Ground(600,height,1200,20);
    //level one
    stand1=new Stand(390,300,250,10)
    stand2=new Stand(720,200,200,10)
    
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);

    //level two
    box7 = new Box(330,235,30,40);
    box8 = new Box(360,235,30,40);
    box9 = new Box(390,235,30,40);
    box10 = new Box(420,235,30,40);

    //level three
    box11 = new Box(360,195,30,40);
    box12 = new Box(390,195,30,40);
    //box13 = new Box(420,195,30,40);

    //level four
    box13 = new Box(375,155,30,40);

   //stack2,level one
    box14 = new Box(640,175,30,40);
    box15 = new Box(670,175,30,40);
    box16 = new Box(700,175,30,40);
    box17= new Box(730,175,30,40);
    box18 = new Box(760,175,30,40);
    box19= new Box(790,175,30,40);

    //level two
    box20 = new Box(670,135,30,40);
    box21 = new Box(700,135,30,40);
    box22 = new Box(730,135,30,40);
    box23 = new Box(760,135,30,40);

    //level three
    box24 = new Box(700,95,30,40);
    box25= new Box(730,95,30,40);
    //box13 = new Box(420,195,30,40);

    //level four
    box26= new Box(715,55,30,40);
}
  
function draw(){
 background(0);
 Engine.update(engine);

 fill("yellow")
 textSize(20)
 text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks")

 ground.display();
 stand1.display();
 stand2.display();

 fill("red")
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 
 box13.display();

 //stack2
fill("blue")
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 
 box26.display();

fill("gold")
box1.score();
box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 
 box13.score();

//stack 2
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
text("score:"+score,750,40);
imageMode(CENTER)

image(ballimg ,ball.position.x,ball.position.y,40,40); 
slingShot.display();
 } 

 function mouseDragged(){
     Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
     } 
function mouseReleased(){
     slingShot.fly();
     }

function keyPressed(){
if(keyCode==32){

slingShot.attach(ball);


}




}


    
