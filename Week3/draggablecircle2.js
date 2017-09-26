let circleDiameter = 100;
let cx = 150;
let cy = 125;


function setup(){
  createCanvas(4000,4000);
}


function draw(){
  background(255);
  noStroke();
  // check if mouse is over circle
  // if it is then fill(255,0,0)
  // otherwise fill(255)
  if(dist(mouseX,mouseY,cx,cy) <50){
    fill(255,0,0);
    if(mouseIsPressed){
      cx = mouseX;
      cy = mouseY;
    }
  } else{
    fill(255);
  }
  ellipse(cx,cy,circleDiameter,circleDiameter);
}
