

var ellipseSize = 50;

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;



function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
}

function draw(){
  background(220);
  ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  if(mouseIsPressed){
    fill(0,255,0);
  } else{
    fill(0,0,255);
  }
}

function mousePressed(){
  ellipseSize += 10;
}

function touchMoved(){
  return false;
}
