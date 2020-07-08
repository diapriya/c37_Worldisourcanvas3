
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body; 
const Events = Matter.Events;

var line1;
var database;
var drawings = [];

function setup() {

  createCanvas(1000,800);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  
  var clearButton =select('#clearButton');
  clearButton.mousePressed(clearDrawings);

  Engine.run(engine);

}
 
function draw() {

  background(255,255,255);
  
 

  Engine.update(engine);
  
  line(1000,0,1000,1000);
  line(1000,0,2,0);



  ellipseMode(RADIUS);
  noStroke();
  ellipse(line1.body.position.x,line1.body.position.y,10);

}

function mouseDragged(){
 
  line1 = Bodies.circle(mouseX,mouseY,10);
 
  ellipse(mouseX,mouseY,10);

 
} 


function colourRed(){
  noStroke();
  fill("red");
}

function colourBlue(){
  noStroke();
  fill("blue");
}

function colourYellow(){
  noStroke();
  fill("yellow");
}

function colourBlack(){
  noStroke();
  fill("black");
}

function clearDrawings(){

  var c = confirm("Sure to clear??");

  if( c  == true ){

    window.location.replace("http://127.0.0.1:8887");

  }
  
}


function saveDrawing(){

  var ref = database.ref('drawings');

  var data = {
    name : "dia",
    drawings : drawings
  }
  var result = ref.push(data);
  console.log(result.key);
}
