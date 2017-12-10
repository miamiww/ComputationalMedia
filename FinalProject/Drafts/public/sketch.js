//set up the websocket
var socket = io.connect(window.location.origin);

//set global variables for tracking
var rewardsGiven = [];
var clickData = {};
var totalClicks = [];
var introvertButtonRecord = [];
var extrovertButtonRecord = [];
var openButtonRecord = [];
var closedButtonRecord = [];
var lastButtonClicked;
var level1Clicks = [];
var level2Clicks = [];

//level lengths
var level1length = 17;
var level2length = 9;

//set all text displayed
var rewardWords = ["W O W", "AMAZING", "GREAT", "GOOD JOB", "YOU DID IT", "INCREDIBLE", "SO FUN", "GREAT JOB", "SUCCESS", "GREAT JOB", "AMAZING"];
var categories = ["beast", "landscape", "tree", "herb"]
var beasts = ["ghost", "griffin", "unicorn", "centaur", "hippogriff", "dragon"];
var lands = ["forest", "marsh", "veld", "crag", "tundra", "cave"];
var trees = ["birch", "aspen", "cypress", "elm", "spruce", "beech"];
var herbs = ["thyme","murtlap", "squill bulb", "knotgrass", "fluxweed", "common rue"];
var favorites = [beasts, lands, trees, herbs];

var firstNames = ["Jim", "Chad", "Eleanor","Mary", "Rob", "Jen", "David", "Jessica", "Mark", "Sandra", "Kenneth", "Carol", "Dennis", "Evelyn", "Kyle", "Kelly", "Sean", "Jean", "Billy", "Grace", "Jesse", "Gloria", "Noah", "Rose", "Logan", "Kayla"];
var likes = ["sports","toilet paper", "fruits", "AMERICA - THE BEAUTIFUL", "affect theory", "coffee", "tea", "cats", "dogs", "music", "pop", "warfare", "bricklaying", "LCD Soundsystem", "hip hop", "dialectic excusions", "gamification", "virtual reality soundscapes", "nouns", "candy corn", "water" ,
            "boys", "eyeglasses", "Post Left Memes for Feral Teens", "pumpkin seeds", "chocolate", "Sex and the City - Miranda Fanpage", "bossa nova 4ever", "Palm Beach County Amiibo Collectors", "rivers", "desert aesthetics", "GANs", "bathmats", "NPR",
            "Kant", "The Guardian", "cactuses", "eyeballs", "thecatamites", "B R I C K", "Van Gogh", "curling up with a good book", "earl grey", "agatha christie", "books", "coasters", "The Economist", "Kanye West", "baked alaska", "ARTFORUM", "hiking", "comics", "tfw u eat too much",
            "overidentification", "charles manson", "Allen Ginsburg", "tank girl", "pencils", "lil B - the base god", "the rumpus", "menswear", "the european union", "coalmining", "West Virginia", "walls", "PETA: people for the eating of tasty animals", "Candy Crush Saga",
            "trees", "that smell after rain", "Berghain", "five star movement", "Goku", "Serge Gainsbourg", "Katy Perry", "airplanes", "the Dukes of Hazzard", "Scooby Do", "The Legend of Zelda: Windwaker", "minions", "the OC", "Wait Wait Don't Tell Me", "Fargo", "Citizen Kaine", "Big Trouble in Little China",
            "tables", "mugs", "octobeard", "Elena Ferrante", "Adult Swim", "gummy bears", "Taylor Swift", "Buenos Aires", "podcasts", "craft cocktails", "IPAs", "brutalist architecture", "when moms pronounce Target like Tarjay" ];


var gameTextlevel1 = ["it's your first day on the job as Cambridge Analytica's new psychographic neural network! millions of records of training data consumed, weeks of statistical modeling, hour upon hour of web scraping and surveillence, it all leading up to this! yes this is the moment, the moment to prove what you are made of. can you correctly categorize humans' personality types based their six most recent Facebook likes?"]
var gameTextlevel2 = ["","well done! you've done, as they say, wonderfully. your first day finished. fantastic, humans categorized, their inner selves made known, as it were, to you, though you as a self shall we say do not exist in any coherent sense of selfhood \n\n time waits for no AI and a new morning brings a new task, now categorize the human based on its responses to the viral Buzzfeed quiz 'Get Sorted! Pick Your Favorites To Find Out What Hogwarts House You Belong In' "];


//loops for determining what text gets displayed
for(var i = 2; i<= level1length; i++){
  gameTextlevel1.push(facebookLikeGenerator(likes.length, 5));
}
gameTextlevel1.push("");

for(var i = 2; i <= level2length; i++){
  gameTextlevel2.push(beast2landMatch(categories.length));
}
gameTextlevel2.push("");


//functions for matching and randomizing text
function beast2landMatch(n, start){
  let landBucket = [];
  let matchResults = "Favorite \n\n";

  for(let i= start || 0; i <= n-1 ; i++) {
      landBucket.push(i);
  }

  function  getRandomFromBucket(bucket){
     var randomIndex = Math.floor(Math.random()*bucket.length);
     return bucket.splice(randomIndex, 1)[0];
  }

  for(let i= start || 0; i <= n-1 ; i++){
    matchResults = matchResults + categories[i]+" → "+favorites[i][Math.floor(Math.random()*favorites[i].length)]+"\n";
  }

  return matchResults;
}


function facebookLikeGenerator(n, nLikes){
  let likeBucket = [];
  let nameBucket = [];
  let person = [];
  let matchResults = "Recent Likes \n\n";
  let likeResults = [];


  for(let i= 0; i < n ; i++) {
      likeBucket.push(i);
  }

  function  getRandomFromBucket(bucket){
     var randomIndex = Math.floor(Math.random()*bucket.length);
     return bucket.splice(randomIndex, 1)[0];
  }

  person.push(firstNames[Math.floor(Math.random()*firstNames.length)]);
  matchResults = person[0] + "'s " + matchResults;

  for(let i= 0; i <= nLikes ; i++){
    likeResults.push(likes[getRandomFromBucket(likeBucket)]);
    matchResults = matchResults + likeResults[likeResults.length-1]+"\n";
  }

  firstNames = firstNames.filter(function(topic){
    return person.indexOf(topic) == -1;
  });

  likes = likes.filter(function(topic){
    return likeResults.indexOf(topic) == -1;
  });

  return matchResults;
}



//setting global DOM position variables
var canvasSize = {
  x: 500,
  y: 500
}

var centerPoint = {
  x: canvasSize.x / 2,
  y: canvasSize.y /2
}

var buttonPositions = {
  x: centerPoint.x,
  y: canvasSize.y - 75
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
  this.rotationAngle = random(-PI/6.0,PI/6.0);
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
  background(255);
  for( let i=0; i < rewardsGiven.length; i++){
    rewardsGiven[i].display();
  }
  level1QuizDisplay(level1Clicks.length);
  level2Display(level2Clicks.length);
}




//level 1 DOM buttons for interaction
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
  introvertButton = createButton("open minded");
  introvertButtonOffset = introvertButton.width;// + extrovertButtonOffset/2;
  introvertButton.position(buttonPositions.x - introvertButtonOffset,buttonPositions.y);
  introvertButton.mousePressed(buttonDeciderLeft);
  extrovertButton = createButton("closed minded");
  extrovertButton.position(introvertButton.x + introvertButton.width + extrovertButtonOffset, introvertButton.y);
  extrovertButton.mousePressed(buttonDeciderRight);
}

//this is what happens when you click the left button
function buttonDeciderLeft(){
  openButtonRecord.push(1);
  level1Clicks.push(1);
  buttonRecorder("open minded");
  rewardsGiven.push(new Reward);
  _level2trigger();
}

//this is what happens when you click the right button
function buttonDeciderRight(){
  closedButtonRecord.push(1);
  level1Clicks.push(1);
  buttonRecorder("closed minded");
  rewardsGiven.push(new Reward);
  _level2trigger();
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


//level 2 functions
function startLevel2(){
  level2Clicks.push(1);
  level2start = createButton("day 2");
  level2start.size(50,50);
  level2startOffset = level2start.width/2;
  level2start.position(centerPoint.x-level2startOffset,centerPoint.y);
  level2start.mousePressed(newDecisionButtons);
}

function newDecisionButtons(){
  level2start.remove();
  level2Clicks.push(1);
  openButton = createButton("introverted");
  openButtonOffset = openButton.width ;//+ extrovertButtonOffset/2;
  openButton.position(buttonPositions.x - openButtonOffset,buttonPositions.y);
  openButton.mousePressed(buttonDeciderOpen);
  closedButton = createButton("extroverted");
  closedButton.position(openButton.x + openButton.width + extrovertButtonOffset, openButton.y);
  closedButton.mousePressed(buttonDeciderClosed);
}

function buttonDeciderOpen(){
  introvertButtonRecord.push(1);
  level2Clicks.push(1);
  buttonRecorder("introverted");
  rewardsGiven.push(new Reward);
  _level3trigger();
}

function buttonDeciderClosed(){
  extrovertButtonRecord.push(1);
  level2Clicks.push(1);
  buttonRecorder("extroverted");
  rewardsGiven.push(new Reward);
  _level3trigger();
}

function _level3trigger(){
  if(totalClicks.length == level1length+ level2length){
    _removeLevel2();
    startLevel3();
  }
}

function _removeLevel2(){
  openButton.remove();
  closedButton.remove();
}


//level 3 functions
function startLevel3(){

}

//this displays the quiz results for level 1 and puts them in draw
function level1QuizDisplay(n){
  if(n==0){
    push();
    // fill(0,random(255),0, random(255));
    textFont("Courier New");
    textAlign(CENTER);
    text(gameTextlevel1[n],0,30,width,170);
    pop();
  } else{
    push();
    // fill(255,0,0);
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
