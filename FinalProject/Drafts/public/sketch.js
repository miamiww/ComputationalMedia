//set up the websocket
var socket = io.connect(window.location.origin);

//set global variables for tracking
var clickData = {};
var leftButtonRecord = [];
var rightButtonRecord = [];
var lastButtonClicked;

//setting global DOM position variables
var canvasSize = {
  x: 400,
  y: 400
}

var centerPoint = {
  x: canvasSize.x / 2,
  y: canvasSize.y /2
}

var buttonPositions = {
  x: centerPoint.x,
  y: canvasSize.y - 40
}

var leftButtonOffset;
var rightButtonOffset = 20;


//the basic p5 functions
function setup(){
  canvas = createCanvas(canvasSize.x,canvasSize.y);


}

function draw(){
  background(220);
}

function beginningButton(){
  startButton = createButton("start");
  startButtonOffset = startButton.width/2;
  startButton.position(centerPoint.x-startButtonOffset,centerPoint.y);
  startButton.mousePressed(decisionButtons);
}

function decisionButtons(){
  startButton.remove();
  leftButton = createButton("introvert");
  leftButtonOffset = leftButton.width + rightButtonOffset/2;
  leftButton.position(buttonPositions.x - leftButtonOffset,buttonPositions.y);
  leftButton.mousePressed(buttonDeciderLeft);
  rightButton = createButton("extrovert");
  rightButton.position(leftButton.x + leftButton.width + rightButtonOffset, leftButton.y);
  rightButton.mousePressed(buttonDeciderRight);
}

//this is what happens when you click the left button
function buttonDeciderLeft(){
  lastButtonClicked = "left";
  leftButtonRecord.push(1);
  saveStuff(lastButtonClicked);
  if(leftButtonRecord.length==1){
    console.log("success");
  } else{
    console.log("fail");
  }
}

//this is what happens when you click the right button
function buttonDeciderRight(){
  lastButtonClicked = "right";
  rightButtonRecord.push(1);
  saveStuff(lastButtonClicked);
  if(rightButtonRecord.length==1){
    console.log("success");
  } else{
    console.log("fail");
  }
}


//function to send out data to be stored via socket
function _emitter(data){
  socket.emit('buttonClick', data);
  //console.log(data);
}

// function to bind time to click value and then call the emitter
function saveStuff(obj) {
  clickData.clicked = obj;
  clickData.time = new Date().getTime();
  _emitter(clickData);
}
