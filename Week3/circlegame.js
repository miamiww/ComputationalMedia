let ex = 45 ;
let ey = 200 ;
let points = 0;
let GoalSize =50 ;
let goalX;
let goalY;
let chunkMover;

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;

function Puck(){
  this.x = ex;
  this.y = ey;
}

Puck.prototype.display = function(){
  stroke(200,50);
  fill(0);
  ellipse(this.x, this.y, 70,70);
  if(points>10000){
    fill(255,0,0);
  } else{
    fill(255);
  }
  ellipse(this.x, this.y, 50,50);
}

Puck.prototype.drift = function(){
  let diffX = mouseX - this.x;
  let diffY = mouseY - this.y;
  if(mouseIsPressed){
    this.x += diffX * 0.1;
    this.y += diffY * 0.1;
  } else {
    this.y += diffX * 0.05 + random();
    this.x += diffY * 0.05 + random();
  }
  if(this.x>width){
    this.x = 0;
  }
  if(this.y>height){
    this.y = 0;
  }
  if(this.y <0){
    this.y  = height;
  }
  if(this.x < 0){
    this.x = width;
  }
}

Puck.prototype.pointsDelivery = function(){
  if(this.x < width/2+50 & this.x > width/2-50 & this.y < height/2+GoalSize/2 & this.y > height/2-GoalSize/2){

    points = points + 1;
    fill(255, 50, 0);
    text(points,10,20);
    pointsUpWords();


  } else {
    points = points - 1;
    fill(255, 50, 0);
    text(points,10,20);
    pointsDownWords();
  }

//  print(points);
}


function pointsUpWords(){
  if(points > 50 & points <200 ){
    fill(0);
    text("getting the hang of it?",width/10,height/3);
  }
  if(points > 500 & points < 750){
    fill(0);
    text("I wonder how high these numbers can go",width/4,height/3);
  }
  if(points > 1000 & points < 1200){
    fill(0);
    text("they say if you get to 100000 your wish will come true",100,height/3);
  }
  if(points > 2000 & points < 2200){
    fill(0);
    text("what are you going to wish for?",100,height/3);
  }
  if(points > 3000 & points < 3250){
    fill(0);
    text("do you think Sisyphus is still rolling his boulder?",100,height/3);
  }
}

function pointsDownWords(){
  if(points < -350 & points > -450){
    fill(0);
    text("wow you aren't very good at this",100,200);
  }
  if(points < -600 & points > -800){
    fill(0);
    text("do you even know the rules",100,200);
  }
  if(points < -2150 & points > -2550){
    fill(255, 0, 0);
    text("you're going to make them angry",100,200);
  }
  if(points < -1250 & points > -1700 ){
    fill(0);
    text("surely you've figured it out by now",100,200);
  }
  if(points < -2500 & points > -2750){
    fill(255, 0, 0);
    text("down down down",100,300);
  }
  if(points < -2650 & points > -2800){
    fill(255, 0, 0);
    text("tumbling, crumbling",100,height-100);
  }
  if(points < -3300 & points > -3500){
    fill(0);
    text("I was kidding about making them angry",200,200);
  }
  if(points < -3450 & points > -3800){
    fill(0);
    text("there's no them, it's just us here",200,height-100);
  }
}

function goal(){
  noStroke();
  fill(0);

//  rect(goalX,goalY,GoalSize,GoalSize);
  fill(0);
  noStroke();
  rect(goalX,goalY,GoalSize/3,GoalSize/3);
  rect(goalX+chunkMover,goalY,GoalSize/3,GoalSize/3)
  rect(goalX+chunkMover,goalY+chunkMover,GoalSize/3,GoalSize/3)
  rect(goalX,goalY+chunkMover,GoalSize/3,GoalSize/3)
}

function setup() {
  createCanvas(canvasSizeWidth, canvasSizeHeight);
  goalX = width/2-GoalSize/2;
  goalY = height/2-GoalSize/2;
  chunkMover = 2*GoalSize/3;
  gamePuck = new Puck();
}



function draw() {
  background(255);
  textFont("Courier");
  goal();
  gamePuck.pointsDelivery();
  gamePuck.drift();
  gamePuck.display();

}
