
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

  //reset 0,0 via translate
  translate(mouseX, mouseY);
  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);

  translate(50,50);
  ellipse(0,0,40,40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 75, 0, PI);

}
