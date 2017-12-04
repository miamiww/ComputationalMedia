
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
  textAlign(CENTER, CENTER);
  text(ourText[frameCount% ourText.length], width/2, height/2);

  currentIndex++;
}
