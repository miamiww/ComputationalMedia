
var ourText = "Luv coffee";
var currentIndex = 0;

function setup(){
  createCanvas(400,400);
  frameRate(10);
}

function draw(){
  background(220);
  fill(0);
  textSize(100);
  let textEnd = map(mouseX, 0, width, 0, ourText.length);
  text(ourText.substring(0, textEnd), 10, height/2);
}
