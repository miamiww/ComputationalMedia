
let xoffset = 200;
let yoffest = 250;

function setup(){
  createCanvas(400,400);
}

function face(){
  
  //reset 0,0 via translate

  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);

}

function draw(){
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();

  push();
  stroke(255,0,0);
  translate(mouseX, mouseY);
  face();
  pop();

  push();
  translate(50,50);
  face();
  pop();

  push();
  stroke(0,0,255);
  translate(mouseY,mouseX);
  face();
  pop();
}
