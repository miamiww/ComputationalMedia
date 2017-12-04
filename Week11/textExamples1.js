
function preload(){
  // var myfont = loadFont("");
}

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(220);
  // fill(255,0,0);
  // stroke(0);
  // strokeWeight(5);
  // textSize(100* mouseX/width);
  // textFont("Courier New");

  textSize(48);
  textAlign(CENTER, BOTTOM);
  text("piggy", 200,100);
  ellipse(200,100,15,15);
  textAlign(LEFT, CENTER);
  text("piggy", 200,200);
  ellipse(200,200,15,15);
  textAlign(RIGHT);
  text("piggy",200,300);
  ellipse(200,300,15,15);
}
