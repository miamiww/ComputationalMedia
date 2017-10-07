let lastFramePress = false;


function setup(){
  createCanvas(400,400);

}

function draw(){
  background(220);
}

function mousePressed(){
  console.log("mouse was pressed!");
  ellipse(mouseX,mouseY,200,200);
}

function mouseReleased(){

}
