//set up the websocket
var socket = io.connect(window.location.origin);

//set global variables
var clickData = {};
var leftButtonRecord = [];
var rightButtonRecord = [];
var lastButtonClicked;

function setup(){
  canvas = createCanvas(400,400);
  leftButton = createButton("click");
  leftButton.position(20,20);
  leftButton.mousePressed(buttonDeciderLeft);
  rightButton = createButton("click");
  rightButton.position(leftButton.x + leftButton.width+ 10, leftButton.y);
  rightButton.mousePressed(buttonDeciderRight);
}

function draw(){
  background(220);

}


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

// function to bind time to click
function saveStuff(obj) {
  clickData.clicked = obj;
  clickData.time = new Date().getTime();
  _emitter(clickData);
}
