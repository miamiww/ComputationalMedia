let circleDiameter = 100;
let circleX = 150;
let circleY = 125;
let red = 255;
let green = 0;
let blue = 0;

function setup(){
  createCanvas(400,400);
}


function draw(){
  background(255);
  noStroke();
  // check if mouse is over circle
  // if it is then fill(255,0,0)
  // otherwise fill(255)
  let d = dist(mouseX,mouseY,circleX,circleY);
  if(d < circleDiameter/2){
    fill(red,green,blue);
    red -= 2;
    green += 1;
    blue += 2;
  } else{
    fill(255);
  }
  if(green=255){
    fill(red,green,blue);
  }
  ellipse(circleX,circleY,circleDiameter,circleDiameter);
}
