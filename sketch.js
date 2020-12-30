

 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
 var engine, world;
 var ground;
 var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
 var particles = [];
 var plinkos = [];
 var divisions =[];
 var divisionHeight=300;
 var particle;
 var score=0;
 var count = 0;
 var gameState ="start";
 var ball1, ball2, ball3, ball4, ball5;
 
 
 
 function setup() {
   createCanvas(772,800);
 
   engine = Engine.create();
   world = engine.world;
 
   ground = new Ground(600, 780, 1200, 10);
   
 
   stand1 = new Division(2, 680, 10, 200);
   stand2 = new Division(87, 680, 10, 200);
   stand3 = new Division(172, 680, 10, 200);
   stand4 = new Division(257, 680, 10, 200);
   stand5 = new Division(342, 680, 10, 200);
   stand6 = new Division(427, 680, 10, 200);
   stand7 = new Division(512, 680, 10, 200);
   stand8 = new Division(597, 680, 10, 200);
   stand9 = new Division(682, 680, 10, 200);
   stand10 = new Division(767, 680, 10, 200);
  
   
   
 
   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75,10));
   }
 
   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175,10));
   }
 
    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275,10));
   }
 
    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375,10));
      
   }
   
 }
 
 function draw() {
    background(0);
    
    fill("white")
    textSize(35);
    text("500",100,650)
    Engine.update(engine);
 
    fill("white")
    textSize(35);
    text("500",185,650)
 
    fill("white")
    textSize(35);
    text("500",15,650)
 
    fill("white")
    textSize(35);
    text("100",270,650)
 
    fill("white")
    textSize(35);
    text("100",355,650)
 
    fill("white")
    textSize(35);
    text("100",440,650)
 
    fill("white")
    textSize(35);
    text("200",525,650)
 
    fill("white")
    textSize(35);
    text("200",610,650)
 
    fill("white")
    textSize(35);
    text("200",695,650)
 
    fill("red")
    textSize(40);
    text("Score:",10,40)
    Engine.update(engine);

    
 
 
    ground.display();
 
    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();
    stand5.display();
    stand6.display();
    stand7.display();
    stand8.display();
    stand9.display();
    stand10.display();
 
    
   
    for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();  
   }
  
 }