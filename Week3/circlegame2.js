let ex = 45 ;
let ey = 200 ;
let points = 0;
let GoalSize =50 ;
let goalX;
let goalY;

function puck(){
  stroke(200,50);
  fill(0);
  ellipse(ex, ey, 70,70);
  fill(255);
  ellipse(ex, ey, 50,50);
}

function setup() {
  createCanvas(400, 400);
  goalX = width/2-GoalSize/2;
  goalY = height/2-GoalSize/2;
}



function draw() {
  background(220);
  stroke(0);
  fill(0);
  rect(goalX,goalY,GoalSize,GoalSize);
  puck();

  if(ex < width/2+50 & ex > width/2-50 & ey < height/2+GoalSize/2 & ey > height/2-GoalSize/2){
    points = points + 1;
    fill(255, 50, 0);
    text(points,10,20);
    if(points > 100 & points <200 ){
      fill(random(50), 255, 0,random(50,100));
      text("getting the hang of it?",100,300);
    }
    if(points > 500 & points < 750){
      fill(0, random(50), 255);
      text("I wonder how high these numbers can go",100,300);
    }
    if(points > 1000 & points < 1200){
      fill(0, 255, random(255));
      text("they say if you get to 100000 your wish will come true",100,300);
    }
    if(points > 2000 & points < 2200){
      fill(random(50), 0, 255);
      text("what are you going to wish for?",100,200);
    }

  } else {
    points = points - 1;
    fill(255, 50, 0);
    text(points,10,20);
    if(points < -350 & points > -450){
      fill(0, 102, 153);
      text("wow you aren't very good at this",100,200);
    }
    if(points < -600 & points > -800){
      fill(0, 102, 153);
      text("do you even know the rules",100,200);
    }
  }

  let diffX = mouseX - ex;
  let diffY = mouseY - ex;
  if(mouseIsPressed){
    ex += diffX * 0.1;
    ey += diffY * 0.1;
  } else {
    ey += diffX * 0.01;
    ex += diffY * 0.01;
  }
  if(ex>width){
    ex = 0;
  }
  if(ey>height){
    ey = 0;
  }
  if(ey<0){
    ey = height;
  }
  if(ex < 0){
    ex = width;
  }


  print(points);
}
