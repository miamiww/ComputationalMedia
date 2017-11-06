var cheeseLogger = [];
var cheeseRs = [];
var cheeses = 0;
var socket = io.connect(window.location.origin);

socket.on('mysocket', function(data) {
    console.log(data);
    cheeseLogger.push(data);
});

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;


function Cheese() {
      this.x = random(width);
      this.y = random(height);
}

Cheese.prototype.display = function(){
  text("🧀",this.x,this.y);
}



function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
}

function draw(){
  background(255);
  cheeseShow();
  for (var i = 0; i < cheeseRs.length; i++) {
    cheeseRs[i].display();
  }
  welcome();
}

function welcome(){
  text("WELCOME TO WORLD CHEESE INDEX",10,10);
  text("ONE CHEESE = ONE CHEESE TWEET",10,25);
//  fill(0,0,0,0);
  text("cheese tweets " + cheeseLogger.length,10,40);
  text("seconds " + Math.floor(millis()/1000),10,55);
  text("cheese per second " +cheeseLogger.length/Math.floor(millis()/1000),10,70);
//  clear();
}



function cheeseShow(){
  if(cheeseLogger.length>cheeses){
      cheeseRs.push(new Cheese);
  }
  cheeses = cheeseLogger.length;
}
