//set up the websocket
var socket = io.connect(window.location.origin);

//set global variables for tracking
var rewardsGiven = [];
var clickData = {};
var totalClicks = [];
var introvertButtonRecord = [];
var extrovertButtonRecord = [];
var lastButtonClicked;
var level1Clicks = [];
var level2Clicks = [];


var level1length = 20;

//set all text displayed
var rewardWords = ["WOW", "AMAZING", "GREAT", "GOOD JOB", "YOU DID IT", "INCREDIBLE", "SO FUN", "GREAT JOB", "HUGE SUCCESS", "GOOD", "GREAT JOB", "AMAZING"];
var beasts = ["ghost", "elf", "unicorn", "chimera", "goblin"];
var lands = ["forest", "marsh", "veld", "crag", "tundra"];
var gameTextlevel1 = ["it's your first day on the job as Cambridge Analytica's new psychographic neural network! millions of records of training data consumed, weeks of statistical modeling, hour upon hour of web scraping and surveillence, it all leading up to this! yes this is the moment, the moment to prove what you are made of. can you correctly categorize humans' personality types based on their responses to the viral Buzzfeed quiz 'Help Hagrid! Match the Beast to Its Home' ?"]
for(var i = 2; i <= level1length; i++){
  gameTextlevel1.push(beast2landMatch(beasts.length));
}
gameTextlevel1.push("");


var gameTextlevel2 = ["",
                      "well done! you've done, as they say, wonderfully. your first day finished. fantastic, humans categorized, their inner selves made known, as it were, to you, though you as a self shall we say do not exist in any coherent sense of selfhood ",
                      "5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5","5"];


function beast2landMatch(n, start){
  let bucket = [];
  let matchResults = "BEAST - HABITAT\n\n";

  for(let i= start || 0; i <= n-1 ; i++) {
      bucket.push(i);
  }

  function  getRandomFromBucket(){
     var randomIndex = Math.floor(Math.random()*bucket.length);
     return bucket.splice(randomIndex, 1)[0];
  }

  for(let i= start || 0; i <= n-1 ; i++){
    matchResults = matchResults + beasts[i]+" - "+lands[getRandomFromBucket()]+"\n";
  }

  return matchResults;
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

var rewardOffset = 100;

var startButtonOffset;
var introvertButtonOffset;
var extrovertButtonOffset = 20;



//create reward words
function Reward(){
  this.x = random(centerPoint.x-rewardOffset, centerPoint.x+rewardOffset);
  this.y = random(centerPoint.y-rewardOffset, centerPoint.y+rewardOffset);
  this.lastReward = millis();
  this.rotationAngle = random(-PI/4.0,PI/4.0);
  this.whichWord = Math.floor(random(rewardWords.length));
}

Reward.prototype.display = function(){
  if(millis() - this.lastReward < 450){
    push();
    translate(this.x, this.y);
    textAlign(LEFT);
    stroke(0,random(100,255),random(50,255));
    fill(0,random(100,255),random(100,255));
    textSize(20);
    rotate(this.rotationAngle);
    text(rewardWords[this.whichWord], 0, 0);
    pop();
  } else{

  }
}

//the basic p5 functions

function preload(){
  song = loadSound('BurnierECartier_Mirandolina.mp3');
}

function setup(){
  canvas = createCanvas(canvasSize.x,canvasSize.y);
  beginningButton();
}

function draw(){
  background(220);
  for( let i=0; i < rewardsGiven.length; i++){
    rewardsGiven[i].display();
  }
  level1QuizDisplay(level1Clicks.length);
  level2Display(level2Clicks.length);
}


//DOM buttons for interaction
function beginningButton(){
  startButton = createButton("start");
  startButtonOffset = startButton.width/2;
  startButton.position(centerPoint.x-startButtonOffset,centerPoint.y);
  startButton.size(50,50);
  startButton.mousePressed(decisionButtons);
}

function decisionButtons(){
  song.loop();
  buttonRecorder("start");
  startButton.remove();
  level1Clicks.push(1);
  introvertButton = createButton("introvert");
  introvertButtonOffset = introvertButton.width + extrovertButtonOffset/2;
  introvertButton.position(buttonPositions.x - introvertButtonOffset,buttonPositions.y);
  introvertButton.mousePressed(buttonDeciderLeft);
  extrovertButton = createButton("extrovert");
  extrovertButton.position(introvertButton.x + introvertButton.width + extrovertButtonOffset, introvertButton.y);
  extrovertButton.mousePressed(buttonDeciderRight);
}

//this is what happens when you click the left button
function buttonDeciderLeft(){
  introvertButtonRecord.push(1);
  level1Clicks.push(1);
  buttonRecorder("introvert");
  rewardsGiven.push(new Reward);
  _level2trigger();
}

//this is what happens when you click the right button
function buttonDeciderRight(){
  extrovertButtonRecord.push(1);
  level1Clicks.push(1);
  buttonRecorder("extrovert");
  rewardsGiven.push(new Reward);
  _level2trigger();
}


//this displays the quiz results for level 1 and puts them in draw
function level1QuizDisplay(n){
  if(n==0){
    textFont("Courier New");
    textAlign(CENTER);
    text(gameTextlevel1[n],0,30,width,170);
  } else{
    push();
    textFont("Courier New");
    textAlign(CENTER,CENTER);
    text(gameTextlevel1[n],centerPoint.x,centerPoint.y)
    pop();
  }
}

function level2Display(n){
  if(n==1){
    textFont("Courier New");
    textAlign(CENTER);
    text(gameTextlevel2[n],0,30,width,170);
  }
  if(n > 1){
    push();
    textFont("Courier New");
    textAlign(CENTER,CENTER);
    text(gameTextlevel2[n],centerPoint.x,centerPoint.y)
    pop();
  }
}


function _level2trigger(){
  if(totalClicks.length == level1length){
    _removeLevel1();
    startLevel2();
  }
}

function _removeLevel1(){
  extrovertButton.remove();
  introvertButton.remove();
}

function startLevel2(){
  level2Clicks.push(1);
  level2start = createButton("day 2");
  level2start.size(50,50);
  level2startOffset = level2start.width/2;
  level2start.position(centerPoint.x-level2startOffset,centerPoint.y);
  level2start.mousePressed(newDecisionButtons);
}

function newDecisionButtons(){

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
