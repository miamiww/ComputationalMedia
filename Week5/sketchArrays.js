
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
    rect(width/2,rectY[i],100,60,20);
    rectY[i]++;
  }
  for( let i = rectY.length - 1; i>=0; i--){
    if(rectY[i]>350){
      rectY.splice(i,1);
    }
  }
}

function mousePressed(){
  rectY.push(0);

}

function keyPressed(){
//  rectY.pop();
  console.log(rectY);
}
