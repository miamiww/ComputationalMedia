
function preload(){
  // var myfont = loadFont("");
}

let ourText = `It Was
the best time
the worst time
hello time
yes time is good`;

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
  textSize(50);
  textAlign(CENTER);
  textLeading(sin(frameCount*.01)*50);
  // text("it was the best of times it was the worst of times it was good times", 40,40 , 300, 300);
  // text("time time time time time time time time time time time time \n time time time time time",20,20, 300 , 300);
  text(ourText,100 - 100*sin(frameCount*.02),height/2, 300 , 300);

}
