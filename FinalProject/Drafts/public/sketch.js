//set up the websocket
var socket = io.connect(window.location.origin);

//set global variables for tracking
var clickData = {};
var totalClicks = [];
var leftButtonRecord = [];
var rightButtonRecord = [];
var lastButtonClicked;

//set all text displayed
var beasts = ["ghost", "elf", "unicorn", "chimera", "goblin"];
var lands = ["forest", "marsh", "velt", "crag", "tundra"];
var gameText = ["it's your first day on the job as Cambridge Analytica's new psychographic neural network! can you correctly categorize these humans' personality types based on their responses to a Buzzfeed matching quiz?",
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch(),
                beast2landMatch()]
function beast2landMatch(){
  var bucket = [0,1,2,3,4];

  function  getRandomFromBucket(){
     var randomIndex = Math.floor(Math.random()*bucket.length);
     return bucket.splice(randomIndex, 1)[0];
  }

  return beasts[0]+" - "+lands[getRandomFromBucket()]+"\n"+
  beasts[1]+" - "+lands[getRandomFromBucket() ]+"\n"+
  beasts[2]+" - "+lands[getRandomFromBucket()]+"\n"+
  beasts[3]+" - "+lands[getRandomFromBucket()]+"\n"+
  beasts[4]+" - "+lands[getRandomFromBucket()]+"\n";
}



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

var startButtonOffset;
var leftButtonOffset;
var rightButtonOffset = 20;


//the basic p5 functions
function setup(){
  canvas = createCanvas(canvasSize.x,canvasSize.y);
  beginningButton();
}

function draw(){
  background(220);
  level1QuizDisplay(totalClicks.length);
}

function beginningButton(){
  startButton = createButton("start");
  startButtonOffset = startButton.width/2;
  startButton.position(centerPoint.x-startButtonOffset,centerPoint.y);
  startButton.mousePressed(decisionButtons);
}

function decisionButtons(){
  buttonRecorder("start");
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
  leftButtonRecord.push(1);
  buttonRecorder("introvert");
  _level2trigger();
}

//this is what happens when you click the right button
function buttonDeciderRight(){
  rightButtonRecord.push(1);
  buttonRecorder("extrovert");
  _level2trigger();
}


//this displays the quiz results for level 1 and puts them in draw
function level1QuizDisplay(n){
  if(n==0){
    text(gameText[n],0,10,width,150);
  } else{
    push();
    textAlign(CENTER,LEFT);
    text(gameText[n],centerPoint.x,centerPoint.y)
    pop();
  }
}



function _level2trigger(){
  if(totalClicks.length == 10){
    _removeLevel1();
    startLevel2();
  }
}

function _removeLevel1(){
  rightButton.remove();
  leftButton.remove();
}

function startLevel2(){

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

function buttonRecorder(button){
  lastButtonClicked = button;
  saveStuff(lastButtonClicked);
  totalClicks.push(button);
}
