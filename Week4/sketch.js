//main colors
var brightBlue = [73,174,227];
var brightGold = [225,204,39];
var offPink = [233,71,126];
var brightTan = [248,208,162];
var brightGrey = [145,153,238];

var buttonSize = 50;

var browserSize = {
  x: window.innerWidth || document.body.clientWidth,
  y: window.innerHeight || document.body.clientHeight
}

function dotMoons(){

  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(255,140,200);
      ellipse(x,y,10,10);

    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightBlue);
      ellipse(x+2,y-2,10,10);
    }
  }

}


function setup() {
  createCanvas(browserSize.x, browserSize.y);

}

function draw() {
  var center = {
    x: width/2,
    y: height/2
  }

  noStroke();

  if (dist(mouseX, mouseY, center.x, center.y) < buttonSize/2) {

    dotMoons();
    background(0);
    fill(255,140,200);
    ellipse(center.x-10, center.y+10, buttonSize, buttonSize);
    fill(brightBlue);
    ellipse(center.x, center.y, buttonSize, buttonSize);
    fill(255);
    text("fuck off",center.x,center.y);

  } else {

    background(brightBlue);

    dotMoons();
  }





}
