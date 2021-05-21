const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,590,1200,20);
    ball = new Ball(450,350);
    rope = new Rope(ball.body,{x:450,y:50});
    

    box1 = new Box(600,545);    
    box2 = new Box(600,470);
    box3 = new Box(600,405);
    box4 = new Box(600,335);
    box5 = new Box(600,265);
    box6 = new Box(600,195);
    box7 = new Box(600,125); 
    box8 = new Box(600,55);

    box9 = new Box(690,545);
    box10 = new Box(690,470);
    box11 = new Box(690,405);
    box12 = new Box(690,335);
    box13 = new Box(690,265);
    box14 = new Box(690,195);
    box15 = new Box(690,125);
    box16 = new Box(690,55);

    box17 = new Box(780,545);
    box18 = new Box(780,470);
    box19 = new Box(780,405);
    box20 = new Box(780,335);
    box21 = new Box(780,265);
    box22 = new Box(780,195);
    box23 = new Box(780,125);
    box24 = new Box(780,55);

    box25 = new Box(870,545);
    box26 = new Box(870,470);
    box27 = new Box(870,405);
    box28 = new Box(870,335);
    box29 = new Box(870,265);
    box30 = new Box(870,195);
    box31 = new Box(870,125);
    box32 = new Box(870,55);

    box33 = new Box(960,545);
    box34 = new Box(960,470);
    box35 = new Box(960,405);
    box36 = new Box(960,335);
    box37 = new Box(960,265);
    box38 = new Box(960,195);
    box39 = new Box(960,125);
    box40 = new Box(960,55);
   
}

function draw(){
    background("pink");

    Engine.update(myEngine);

    ground.display();
    rope.display();
    ball.display();
    
    

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
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}