


var browserSize = {
  x: window.innerWidth || document.body.clientWidth,
  y: window.innerHeight || document.body.clientHeight
}

function setup(){
  createCanvas(1000, 300);
//  frameRate(10);
}

var you = {
  x: 50,
  ytopT: 50,
  ytop: 100,
  ybottom: 175,
  yfarB: 250,
  spacing: 50,
  length:75

}

function draw(){
  fill(0);
  var i = frameCount;
//  for(var i = 0; i <= 75;i++){
    //Y
    ellipse(you.x,you.ytop+i,20,20);
    ellipse(you.x+i,you.ybottom,20,20);
    ellipse(you.x+you.length,you.ytop+2*i,20,20);
    ellipse(you.x+you.length-i,you.yfarB,20,20);

    //O
    ellipse(you.x+you.length+you.spacing,you.ytop+i,20,20);
    ellipse(you.x+you.length+you.spacing+i,you.ytop,20,20);
    ellipse(you.x+you.length+you.spacing+i,you.ybottom,20,20);
    ellipse(you.x+2*you.length+you.spacing,you.ytop+i,20,20);

    //u
    ellipse(you.x+2*you.length+2*you.spacing,you.ytop+i,20,20);
    ellipse(you.x+2*you.length+2*you.spacing+i,you.ybottom,20,20);
    ellipse(you.x+3*you.length+2*you.spacing,you.ytop+i,20,20);

    //s
    ellipse(you.x+4*you.length+4*you.spacing-i,you.ytop,20,20);
    ellipse(you.x+3*you.length+4*you.spacing,you.ytop+i/2,20,20);
    ellipse(you.x+3*you.length+4*you.spacing+i,you.ytop+you.length/2,20,20);
    ellipse(you.x+4*you.length+4*you.spacing,you.ytop+you.length/2+i/2,20,20);
    ellipse(you.x+4*you.length+4*you.spacing-i,you.ytop+you.length,20,20);

    //u
    ellipse(you.x+4*you.length+5*you.spacing,you.ytop+i,20,20);
    ellipse(you.x+4*you.length+5*you.spacing+i,you.ybottom,20,20);
    ellipse(you.x+5*you.length+5*you.spacing,you.ytop+i,20,20);

    //c
    ellipse(you.x+5*you.length+6*you.spacing,you.ytop+i,20,20);
    ellipse(you.x+5*you.length+6*you.spacing+i,you.ybottom,20,20);
    ellipse(you.x+5*you.length+6*you.spacing+i,you.ytop,20,20);

    //k
    ellipse(you.x+6*you.length+7*you.spacing,you.ytopT+1.66*i,20,20);
    ellipse(you.x+6*you.length+7*you.spacing+i,you.ybottom-75/2+i/2,20,20);
    ellipse(you.x+6*you.length+7*you.spacing+i,you.ybottom-75/2-i/2,20,20);

//  }
//  ellipse(mouseX,mouseY,20,20);
  if(mouseIsPressed){
    i = 0;
    background(255);
  }


}
