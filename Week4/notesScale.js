
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
  translate(50,50);
  //scale scales all parameters by a certain amount
  scale(0.01*frameCount,0.01*frameCount);
  face();
  pop();

  for( let i = 0; i < 10; i++){
    push();
    translate(random(width),random(height));
    scale(random(1.5),random(1.5));
    face();
    pop();
  }
}
