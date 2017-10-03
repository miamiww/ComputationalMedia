
var brightBlue = [73,174,227];
var brightGold = [225,204,39];
var offPink = [233,71,126];
var brightTan = [248,208,162];
var brightGrey = [145,153,238];

var you = {
  x: 50,
  ytopT: 50,
  ytop: 100,
  ybottom: 175,
  yfarB: 250,
  spacing: 50,
  length:75
}


function setup(){
  createCanvas(1000, 600);
  noStroke();
//  frameRate(80);
}

function youSuck(i){
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

}

function draw(){

  var time = frameCount % 600;

  if(mouseIsPressed){
    fill(255);
    youSuck(time);
//    for(let ii = 0; ii<=75;ii++){
//        youSuck(ii);
//    }

  } else{
    fill(0);
    youSuck(time);
  }

}
