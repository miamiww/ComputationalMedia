function setup(){
  createCanvas(400,400);
//  rectMode(CENTER);
}

function draw(){
//  background(220);
  fill(255,10);

  push();

  translate(width/2,height/2);
  //rotate always rotates on whatever the origin is
  rotate(frameCount*0.01);
  rect(0,0,100,100);
  pop();

  push();

  translate(width/2,height/2);
  //rotate always rotates on whatever the origin is
  rotate(frameCount*0.01);
  rect(-50,-50,100,100);
  pop();

  translate(width/2,height/2);
  //rotate always rotates on whatever the origin is
  rotate(frameCount*0.01);
  scale(mouseX*.01);
  rect(-50,-50,100,100);
  pop();
}
