var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var ground;

var div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11;

var score =0;
var particle;
var count =0;

var gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  div1=new Divisions(5,700,10,400);
  div2=new Divisions(75,700,10,400);
  div3=new Divisions(150,700,10,400);
  div4=new Divisions(230,700,10,400);
  div5=new Divisions(310,700,10,400);
  div6=new Divisions(390,700,10,400);
  div7=new Divisions(475,700,10,400);
  div8=new Divisions(559,700,10,400);
  div9=new Divisions(641,700,10,400);
  div10=new Divisions(721,700,10,400);
  div11=new Divisions(798,700,10,400);
  


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,20,30);
 
 text("500",20,530);
 text("500",95,530);
 text("500",175,530);
 text("100",255,530);
 text("100",330,530);
 text("100",410,530);
 text("100",495,530);
 text("200",580,530);
 text("200",660,530);
 text("200",740,530);
  Engine.update(engine);

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();
  div9.display();
  div10.display();
  div11.display();

 
 
  
  
   if(particle===null){
     particle.display();

     if(particle.body.position.y>760){
       score=score+500;
       particle=null;
       if(count>=5){ gameState="end";}
     }
   }


   
}

function mousePressed(){
  if(gameState!=="end"){
      count++;
      particle=new Particle(mouseX,10,10);

  }
}