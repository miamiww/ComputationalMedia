var bubbles = [];
var maxBubbles = 1750;
var youColor;
var winColor;
var congratColor;
var moveSpeed = 10;
var backgroundColor;

function Bubble () {
      this.x = random(0, width);
      this.y = random(0, height);
}

Bubble.prototype.display = function(){
  stroke(this.r,this.b,this.g);
  fill(this.r,this.b,this.g);
  ellipse(this.x, this.y, 24);
}

Bubble.prototype._move = function(){
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
}

Bubble.prototype.color = function(r,b,g){
  this.r = r;
  this.b = b;
  this.g = g;
}

Bubble.prototype.blow = function(mouseX, mouseY, radius, runAwaySpeed){
  if (Math.hypot(this.x - mouseX, this.y - mouseY) < radius) {
    var xDist = Math.abs(this.x - mouseX);
    var yDist = Math.abs(this.y - mouseY);
    this.x = random(-xDist,xDist) + this.x + random(-radius,radius);
    this.y = random(-yDist,yDist) + this.y + random(-radius,radius);

  } else {
    return this._move();
  }
}


function setup() {
  createCanvas(600, 400);
  backgroundColor = color(random(0,255));
  youColor = color(random(0,255),random(0,255),0,175);
  winColor = color(0,random(0,255),random(0,255),175);
  congratColor = color(random(0,255),0,random(0,255),175);
  //object definition in setup
  for (var i = 0; i < maxBubbles; i++) {
     bubbles[i] = new Bubble();
     bubbles[i].color(random(255),random(255),random(255));
  }
//  frameRate(60);
}

function message(){
  textSize(72);

  textAlign(RIGHT);
  stroke(youColor);
  fill(youColor);
  text("you",width/3,height/4);

  textAlign(CENTER);
  stroke(winColor);
  fill(winColor);
  text("did it.",width/3,height/2);

  textAlign(LEFT);
  stroke(congratColor);
  fill(congratColor);
  text("congrats!",width/2,height/1.5);
}


function draw() {
  background(backgroundColor);
  message();
  for (var i = 0; i < maxBubbles; i++) {
//    bubbles[i]._move();
    bubbles[i].blow(mouseX, mouseY, 75, moveSpeed);
    bubbles[i].display();

  }
}
