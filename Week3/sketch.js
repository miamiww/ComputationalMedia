let ex = 0 ;
let ey = 0 ;
let points = 0;
let GoalSize =50 ;
let goalX;
let goalY;

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
  stroke(200,50);
  fill(0);
  ellipse(ex, ey, 70,70);
  fill(255);
  ellipse(ex, ey, 50,50);

  if(ex < width/2+50 & ex > width/2-50 & ey < height/2+GoalSize/2 & ey > height/2-GoalSize/2){
    points = points + 1;
    fill(255, 50, 0);
    text(points,10,20);
    if(points > 1000){
      fill(0, 102, 153);
      text("you win! you're the best");
    }
  } else {
    points = points - 1;
    fill(255, 50, 0);
    text(points,10,20);
    if(points < -150 & points > -250){
      fill(0, 102, 153);
      text("wow you aren't very good at this",100,200);
    }
    if(points < -325 & points > -390){
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
