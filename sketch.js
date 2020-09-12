const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;

//creating arrays
var particles = [];
var plinkos = [];
var divisions = [];

//division height
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  World.engine.world;
  
  ground = new Ground(600,height,1200,20);

  //creating the divisions
  for (var k = 0; k<=innerWidth; k=k+80){
  divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight));
  }

//creating the plinkos
for (var j = 75; j <=width; j=j+50){
 plinkos.push(new Plinko(j,75));
}
    
for (var j = 50; j <=width; j=j+50){
plinkos.push(new Plinko(j,175));
}
    
for (var j = 75; j <=width; j=j+50){
 plinkos.push(new Plinko(j,275));
 }
    
for (var j = 50; j <=width; j=j+50){
 plinkos.push(new Plinko(j,375));
 }
}


function draw() {
  background("black");  
  textSize(20)
  //text("Score : "+score,20,30);
   Engine.update(engine);
   

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }


  //displaying them
  for (var j=0; j<particles.length; j++){
  particles[j].display();
  }

  for (var k = 0; k<divisions.length; k++){
  division[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
    
  }
  
  drawSprites();

}