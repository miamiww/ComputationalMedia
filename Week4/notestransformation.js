
let xoffset = 200;
let yoffest = 250;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();

  //push will store origin
  push();
  //reset 0,0 via translate
  stroke(255,0,0);
  translate(mouseX, mouseY);
  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);

  //pop will reset origin to whatever was in push
  //they will also remember other things like the
  //fill and the stroke
  pop();
  push();
  translate(50,50);
  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);
  pop();

  push();
  stroke(0,0,255);
  translate(mouseY,mouseX);
  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);
  pop();
}
