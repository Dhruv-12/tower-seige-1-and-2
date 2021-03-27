const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ground;
var box1;
var polygon;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(250,290,200,20);
    box1 = new Box (330, 250, 30, 40);
    box2 = new Box (300, 250, 30, 40);
    box3 = new Box (270, 250, 30, 40);
    box4 = new Box (240, 250, 30, 40);
    box5 = new Box (210, 250, 30, 40);
    box6 = new Box (180, 250, 30, 40);
    //level 2
    box7 = new Box(315, 210,30,40);
    box8 = new Box(285,210,30,40);
    box9 = new Box(255,210,30,40);
    box10 = new Box(225,210,30,40);
    box11 = new Box(195,210,30,40);
    //level 3
    box12 = new Box(300,170,30,40)
    box13 = new Box(270,170,30,40);
    box14 = new Box(240,170,30,40);
    box15 = new Box(210,170, 30,40);
    //level 4
    box16 = new Box(285, 130,30,40);
    box17 = new Box(255,130,30,40);
    box18 = new Box(225,130,30,40);
    //level 5
    box19 = new Box(270,90,30,40);
    box20 = new Box(240,90,30,40);
    //level 6
    box21 = new Box(255,50,30,40)

    //polygon
    polygon = new Polygon(600,50);



    //sling
    sling = new SlingShot(polygon.body, {x:636,y:196})
    Engine.run(engine);

    
}

function draw(){
    background(0);

    ground.display();
    ground1.display();
    box2.display();
    box1.display();
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
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    polygon.display();
    sling.display();
    text(mouseX + " :" +mouseY,600,50);
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon.body);
    }
}
