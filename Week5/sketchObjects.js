
let z ={
  "x": 1,
  "y": 2
};



//array of objects
let rectangles = [
{"x": 0, "y": 0, "speed":5},
{"x":5, "y": 3, "speed": 4},
{"x":3, "y": 4, "speed": 10},
]

let rectY = [];

function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
  noStroke();
}


function draw(){
  background(220);
//  rect(width/2,rectY,100,60);
  for( let i = 0; i < rectY.length; i++ ){
    rect(rectY[i].x,rectY[i].y,100,60,20);
    rectY[i].y = rectY[i].y + rectY[i].speed;
  }
  for( let i = rectY.length - 1; i>=0; i--){
    if(rectY[i].y>350){
      rectY.splice(i,1);
    }
  }
}


function mousePressed(){
  let newRect = {
    "x": mouseX,
    "y": mouseY,
    "speed": random(5)+.1
  };
  rectY.push(newRect);
}
