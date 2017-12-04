var ourText = "Luv coffee";
var currentIndex = 0;

function setup(){
  createCanvas(400,400);
  frameRate(10);
}

function draw(){
  background(220);
  fill(0);
  textSize(50);
  textAlign(LEFT, TOP);
  let twidth = textWidth(ourText);
  text(ourText, 10, height/2);
  noFill();
  rect(10, height/2, twidth, 50);
}
