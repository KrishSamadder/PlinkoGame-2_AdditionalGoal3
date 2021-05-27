const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var ground;

var particles=[];
var plinkos = [];
var divisions = [];

var particle;
var count;
var score;
var PLAY=1;
var END=0;
var gameState = 1;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create(); 
  world = engine.world; 

  for(var k = 0; k <= width; k = k + 47){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight-20));
  }
        
  for (var j = 40; j <=width; j=j+50)
  {
  plinkos.push(new Plinko (j, 75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j, 175)) ;
  }
  for (var j = 40; j <=width; j=j+50)
  {
  plinkos.push(new Plinko(j, 275)) ;
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
  plinkos.push(new Plinko(j, 375)) ;
  }

  ground = new Ground(240, 790, 480, 10);

  count=0;
  score=0;
}


function draw() {
  background(0);  
  Engine.update(engine);

  if(gameState===PLAY){
  for (var j = 0; j < particles.length; j++) {
    particles [j].display() ;
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions [k].display ();
    }
    
  for (var h = 0; h<plinkos.length; h++) {
    plinkos [h].display();
  }

  if(particle!=null){
    particle.display();
  
  if(particle.body.position.y>760){
   if(particle.body.position.x<165){
      score=score+500;
      particle=null;
    }
  } 
  }

  if(particle!=null){
    particle.display();
  
  if(particle.body.position.y>760){
    if(particle.body.position.x>210){
   if(particle.body.position.x<333){
      score=score+100;
      particle=null;
    }
  } 
  }
}

if(particle!=null){
  particle.display();

if(particle.body.position.y>760){
  if(particle.body.position.x>338){
    score=score+200;
    particle=null;
  }
}
}

if(count>=5){
  gameState=END;

}

  ground.display();
  }
  
else if(gameState===END){
  for (var j = 0; j < particles.length; j++) {
    particles [j].display() ;
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions [k].display ();
    }
    
  for (var h = 0; h<plinkos.length; h++) {
    plinkos [h].display();

    textSize(50);
    text("GameOver", 120, 450);
  }
  }


  textSize(20);
  text("Score: " + score, 30, 30);

  text("500", 10, 550);
  text("500", 55, 550);
  text("500", 100, 550);
  text("500", 148, 550);
  text("100", 193, 550);
  text("100", 240, 550);
  text("100", 290, 550);
  text("200", 335, 550);  
  text("200", 382, 550);
  text("200", 430, 550);
  }

  function mousePressed(){
   particle=new Particle(mouseX, 10, 10, 10);
   count=count+1;
  }