let upGates = [];
let downGates = [];
let points = 0;
let GoalSize =50 ;
let driftSpeed = 0.03;
let comeToSpeed = 0.08;
let reD = [255,0,0];
let blacK = 0;
let goalX;
let goalY;
let chunkMover;
let inGoal;

let trueVar = true;
let falseVar = false;

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;

function Puck(){
  this.x = width/2;
  this.y = height/1.5;
}

Puck.prototype.display = function(){
  stroke(200,50);
  fill(0);
  ellipse(this.x, this.y, 50,50);
  if(points>100000){
    fill(255,0,0);
  } else{
    fill(255);
  }
  ellipse(this.x, this.y, 30,30);
}

Puck.prototype.drift = function(){
  let diffX = mouseX - this.x;
  let diffY = mouseY - this.y;
  if(mouseIsPressed){
    this.x += diffX * comeToSpeed;
    this.y += diffY * comeToSpeed;
  } else {
    this.y += diffX * driftSpeed + random();
    this.x += diffY * driftSpeed + random();
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
  inGoal = this.x < width/2+GoalSize/2 & this.x > width/2-GoalSize/2 & this.y < height/2+GoalSize/2 & this.y > height/2-GoalSize/2;
  if(inGoal){

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

function _gateUpCheck(level){
  if(upGates.length > level){
    return falseVar;
  } else{
    return trueVar;
  }
}

function _pointsFillerUp(level, lowPoints, highPoints, message,messageColor,locationX,locationY){
  if(points > lowPoints & points < highPoints & _gateUpCheck(level) ){
    fill(messageColor);
    text(message,locationX,locationY);
    if(highPoints > 0 & points == highPoints - 1){
      upGates.push(1);
    }
    if(highPoints < 0 & points == lowPoints + 1){
      downGates.push(1);
    }
  }

}

function _gateDownCheck(level){
  if(downGates.length > level){
    return falseVar;
  } else{
    return trueVar;
  }
}

function _pointsFillerDown(level, lowPoints, highPoints, message,messageColor,locationX,locationY){
  if(points > lowPoints & points < highPoints & _gateDownCheck(level) ){
    fill(messageColor);
    text(message,locationX,locationY);
    if(highPoints > 0 & points == highPoints - 1){
      upGates.push(1);
    }
    if(highPoints < 0 & points == lowPoints + 1 ){
      downGates.push(1);
    }
  }

}



function pointsUpWords(){

  _pointsFillerUp(1,50,200,"getting the hang of it?",blacK,width/10,height/3);
  _pointsFillerUp(2,500,750,"I wonder how high these numbers can go",blacK,width/4,height/3);
  _pointsFillerUp(3,1100,1300,"I heard that if you get to 100000 your wish will come true",blacK,width/4,height/3);
  _pointsFillerUp(4,2000,2200,"what are you going to wish for?",blacK,width/2,height/1.5);
  _pointsFillerUp(5,2900,3250,"do you think Sisyphus is still rolling his boulder?",blacK,width/4,height/3)
  _pointsFillerUp(6,3300,3600,"or do you think at one point he just",blacK,width/4,height/3);
  _pointsFillerUp(7,3580,3800,"unclicked?",reD,width/1.7,height/2);
  _pointsFillerUp(8,3900,4200,"and just watched it",blacK,width/3,height/4);
  _pointsFillerUp(9,4100,4280,"roll,",blacK,width/2.5,height/1.5);
  _pointsFillerUp(10,4160,4310,"roll,",blacK,width/2.4,height/1.35);
  _pointsFillerUp(11,4220,4340,"roll",blacK,width/2.2,height/1.23);
  _pointsFillerUp(12,4400,4600,"all the way down for the last time",blacK,width/3,height/1.2);


}

function pointsDownWords(){
  _pointsFillerDown(1,-450,-350,"wow you aren't very good at this",blacK,width/4,height/3);
  _pointsFillerDown(2,-800,-600,"do you even know the rules",blacK,width/1.5,height/3);
  _pointsFillerDown(3,-1500,-1250,"surely you've figured it out by now",blacK,width/4,height/3);
  _pointsFillerDown(4,-2550,-2150,"you're going to make them angry",reD,width/4,height/3);
  _pointsFillerDown(5,-2750,-2500,"down down down",reD,width/4,height/2);
  _pointsFillerDown(6,-2800,-2650,"tumbling, tumbling",reD,width/3,height/1.5);
  _pointsFillerDown(7,-3500,-3200,"I was kidding about making them angry",blacK,width/4,height/3);
  _pointsFillerDown(8,-3800,-3450,"there's no them, it's just us here",blacK,width/3,height/1.5);
  _pointsFillerDown(9,-3950,-3850,"forever",blacK,width/2,height/1.5);

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
