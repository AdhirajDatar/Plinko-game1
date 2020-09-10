const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for (var d = 0; d <= width; d = d + 80) {   
    divisions.push(new Divisions(d,height - divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {   
    plinkos.push(new PLINKO(j,75));
  }
  for (var j = 15; j <= width; j = j + 50) {   
    plinkos.push(new PLINKO(j,175));
  }
  for (var j = 15; j <= width; j = j + 50) {   
    plinkos.push(new PLINKO(j,275));
  }
  for (var j = 15; j <= width; j = j + 50) {   
    plinkos.push(new PLINKO(j,375));
  }

  ground = new Ground(240,790,480,20);
  
}

function draw() {
  Engine.update(engine);
  background(0); 

  ground.display();

  for (var d = 0; d < divisions.length ; d++) {   
    divisions[d].display();
  }

  for (var j = 0; j < plinkos.length; j++) {   
    plinkos[j].display();
  }

  if(frameCount%60 ===0){
    particles.push(new PARTICLES(random(10,470),5,5));
  }


  for (var p = 0; p < particles.length; p++) {   
    particles[p].display();
  }

  drawSprites();
}