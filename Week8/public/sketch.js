var cheeseLogger = [];
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

function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
}

function draw(){
//  background(220);
  cheeseShow();
}

function cheeseShow(){
  if(cheeseLogger.length>cheeses){
      text("🧀",random(width),random(height));
  }
  cheeses = cheeseLogger.length;
}
