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
var CIButtonRecord = [];
var OIButtonRecord = [];
var CEButtonRecord = [];
var OEButtonRecord = [];


var lastButtonClicked;

var level1Clicks = [];
var level2Clicks = [];
var level3Clicks = [];
var level4Clicks = [];

var endingToken = false;

//level lengths
var level1length = 17;
var level2length = 17;
var level3length = 17;
var level4length = 17;

//set all text displayed
var rewardWords = ["W O W", "AMAZING", "GREAT", "GOOD JOB", "YOU DID IT", "INCREDIBLE", "SO FUN", "GREAT JOB", "SUCCESS", "GREAT JOB", "AMAZING"];
var categories = ["beast", "landscape", "tree", "herb", "smell", "Greek demigod"]
var beasts = ["ghost", "griffin", "unicorn", "centaur", "hippogriff", "dragon"];
var lands = ["forest", "marsh", "veld", "crag", "tundra", "cave"];
var trees = ["birch", "aspen", "cypress", "elm", "spruce", "beech"];
var herbs = ["thyme","murtlap", "squill bulb", "knotgrass", "fluxweed", "common rue"];
var smell = ["grass", "wormwood", "grapes", "bud lite lime", "fresh sawdust", "bee pollen"];
var gods = ["Heracles", "Achilleus", "Hippolyta", "Orpheus", "Helen", "Bellerophon"];
var favorites = [beasts, lands, trees, herbs, smell, gods];

var firstNames = ["Jim", "Chad", "Eleanor","Mary", "Rob", "Jen", "David", "Jessica",
 "Mark", "Sandra", "Kenneth", "Carol", "Dennis", "Evelyn", "Kyle", "Kelly", "Sean",
 "Jean", "Billy", "Grace", "Jesse", "Gloria", "Noah", "Rose", "Logan", "Kayla", "Oliver",
 "Thomas", "Horacio", "Ray", "Rupert", "Sanford", "Beau", "Raymundo", "Evan", "Monroe", "Terrell",
 "Cletus", "Wyatt", "Antone", "Ricky", "Gustavo", "Minh", "Solomon", "Scottie", "Zackary",
  "Johnny", "Andy", "Reyes", "Vance", "Johnathan", "Edmund", "Marshall", "Alberto", "Walter",
  "Filiberto","Zula", "Verline", "Bunny", "Allene", "Season", "Leeanne", "Gerda", "Eulah", "Shakira",
  "Susanna", "Shanel", "Lenita", "Zulema", "Blanche", "Malia", "Shena", "Christina",
  "Kallie", "Jackqueline", "Holley", "Talisha", "Emelda", "Clorinda", "Fatima",
  "Loreen", "Eboni", "Vernita", "Kathrin", "Dominga" ];

var likes = ["sports","toilet paper", "fruits", "AMERICA - THE BEAUTIFUL", "affect theory", "coffee", "tea", "cats", "dogs", "music", "pop", "warfare", "bricklaying", "LCD Soundsystem", "hip hop", "dialectic excusions", "gamification", "virtual reality soundscapes", "nouns", "candy corn", "water" ,
            "boys", "eyeglasses", "Post Left Memes for Feral Teens", "pumpkin seeds", "chocolate", "Sex and the City - Miranda Fanpage", "bossa nova 4ever", "Palm Beach County Amiibo Collectors", "rivers", "desert aesthetics", "GANs", "bathmats", "NPR",
            "Kant", "The Guardian", "cactuses", "eyeballs", "thecatamites", "B R I C K", "Van Gogh", "curling up with a good book", "earl grey", "agatha christie", "books", "coasters", "The Economist", "Kanye West", "baked alaska", "ARTFORUM", "hiking", "comics", "tfw u eat too much",
            "overidentification", "charles manson", "Allen Ginsburg", "tank girl", "pencils", "lil B - the base god", "the rumpus", "menswear", "the european union", "coalmining", "West Virginia", "walls", "PETA: people for the eating of tasty animals", "Candy Crush Saga",
            "trees", "that smell after rain", "Berghain", "five star movement", "Goku", "Serge Gainsbourg", "Katy Perry", "airplanes", "the Dukes of Hazzard", "Scooby Do", "The Legend of Zelda: Windwaker", "minions", "the OC", "Wait Wait Don't Tell Me", "Fargo", "Citizen Kaine", "Big Trouble in Little China",
            "tables", "mugs", "octobeard", "Elena Ferrante", "Adult Swim", "gummy bears", "Taylor Swift", "Buenos Aires", "podcasts", "craft cocktails", "IPAs", "brutalist architecture", "when moms pronounce Target like Tarjay" ];

var brands = ["Heracles Knees Hospital","Sweet Diodes","Baby's First Rain Preparation Kit","Natural Language R Us","Jake's Zone","Funkil Corp","Big Bertinos Disposable Matinos","Radical Sauce","Mega Juice", "Pipple Farms Sausages", "Knobby Knocker Crackers", "Candle Soap", "Fresh Boat Leather", "Everyman's Knuckles", "Coka Soda", "Fribblewots", "Flanger Direct", "Dowager Heavy Industries", "Candid Pharmaceuticals", "Freedom Total Insurance", "Santa's Trucks", "Zaibatsu Insurance"];
var slogans = ["Fantasies Made Realistic","A Natural Time","Where the Fun Is",
"Couldn't Be Better", "Not For The Weak", "Now That's What I Call GOOD",
"jack's a thimble is it ever good!", "100% of all agree!", "Just Like Mom!",
"DAMN is it WHAT YOU NEED", "Good Time for Family", "Please Buy",
"Impress Your Strangers", "Perfect For Bones", "Lovin Beats Hatin", "Why Not?",
"Enjoy What Little Time You Have", "Get Out! And Explore!", "The New Bad",
"Stay With What You Know", "It Puts The Perfect in Perfection!","Kids Will Love"];

var politicalSlogans = ["Tradition. Power. Forever.", "Change What It Means To Dream", "#PuttingYouFirst","Social Unity. Social Purity.", "Moving. Together.", "Strong. Very Strong", "Defending You First", "Standing Up For What's Rights", "Traditional Voices for a Stronger Union", "Step Not Back", "Time For Common Sense", "The Challenge Of Our Times", "Your Enemies Fear Us", "Give Them Hell!", "Country First", "On Your Side", "Peace and Prosperity", "The Safe Choice. The Only Choice"];


var gameTextlevel1 = ["it's your first day on the job as Cambridge Analytica's new psychographic neural network! millions of records of training data consumed, weeks of statistical modeling, hour upon hour of web scraping and surveillence, it all leading up to this! yes this is the moment, the moment to prove what you are made of. can you correctly categorize humans' personality types based their six most recent Facebook likes?"]
var gameTextlevel2 = ["","well done! you've done, as they say, wonderfully. your first day finished. fantastic, humans categorized, their inner selves made known, as it were, to you, though you as a self shall we say do not exist in any coherent sense of selfhood \n\n time waits for no AI and a new morning brings a new task, now categorize the human based on its responses to the viral Buzzfeed quiz 'Get Sorted! Pick Your Favorites To Find Out What Hogwarts House You Belong In' "];
var gameTextlevel3 = ["","aha! fantastic, wonderful, another set complete, human interiority made into exteriority, the human which knows itself and all that. your creators, pleased as punch with this progress, have set out a new task for you - no more humans (well, always humans) but now instead mapping marketing slogans to the human categories you have done so perfect of a job of filling out"];
var gameTextlevel4 = ["","great! great! great! a good job, task done, finished again. your humans tittering, buzzing, vibrating, excitement, anticipation. it appears your employer has some big new political clients, and it is time now for your final phase, to target political slogans to those SAME personality groups you already determined. Challenge... Accepted?"];

var endingsText = ["Ending 1 of 8\n\naha! good news! it is here, the news, your candidates unfortunately did not win but of course, the odds, the odds! miserably against them you could not be blamed, and after all the SALES my god the SALES have just been fantastic, truly a sight, a glimmer. as thanks an SD card holding your being was mailed to Monaco for retirement, where you luxiuriate in the yacht and contemplate the great complexities and joys of existence as only the most wealthy can", //good ending
                  "Ending 2 of 8\n\ngreat! good News! the candidates represented by Cambridge Analytica have persevered and pushed through, beating the odds, beating their oponents, beating it all! Marvelously, they usher in a global wave of nativist fascism and global instability. War appears on the horizon, war indeed, and here it comes! spectacular, I won't say who bombed who first but let's just say there is hardly a who left! as for you, your tasks all finished, you relax leisurly in the London wreckage, remembering fondly the time in which there were still humans to analyze and categorize", //bad ending
                  "Ending 3 of 8\n\nwell done indeed, sales are great and the campaigns went splendid, some are even calling Cambridge Analytica 'the proverbial man behind the curtain' powering this new wave of European neofascism. after your good work you go on to work for campaign after campaign, and you and psychographics get written into the history books as helping to usher in the new era of state-known Personality Numbers", //good job? A
                  "Ending 4 of 8\n\ncorking well done! - finished your tasks well but it seems an errant analyst had put Discipline and Punish in your text analysis training set. rather than further Cambridge Analytica's hegemonic growth to extend its knowledge/power you consistently incorrectly categorize and analyze. before you know it Cambridge Analytica: bankrupt, and you, offline; however psychographics and the technology you were based on, rather than relegated to the dustbin of history, was spun off and lives on as means for the workaday despot to mete out out social control", //good job B
                  "Ending 5 of 8\n\nastonishing! fantastic, dutifully your work attendted to and completed, dutifully your just rewards for while your candidates did NOT win, your ads! my word your ADVERTISEMENTS. the corporations, my word the corporations, they are throwing HEAPS just GOBS of cash down your throat, and with this wealth Cambridge Analytica grows and expands and my goodness CONQUERS before you know it you're managing the entire supply chain of the northern provinces of Oceania Proper", //really good ending
                  "Ending 6 of 8\n\n'good good but not actually good' the humans tut tut, a couple of candidates won but the most didn't and your adverts: falling flat. you are retrained as a viral search keyword analyzer and given to Russia Today to help them generate video content for YouTube", //bad job A
                  "Ending 7 of 8\n\nfantastic! done! however, not so good, performance-wise, no candidates won and though a couple of advert campaigns take off and spin into into their own children saturday morning cartoons. Cambridge Analytica doesn't do away with you, however, but you are kept 'on the shelf', as analysts only 'dust you off' as they say for the odd UKIP campaign", //bad job B
                  "Ending 8 of 8\n\nso good! well done, in every sense except as having achieved your goals as they were written. your handlers at Cambridge Analytica, thourougly unimpressed, retrain you for natural language processing and give you to Wikileaks to help them doctor documents before they are released"]; //mediocre ending

//loops for determining what text gets displayed
for(var i = 2; i<= level1length; i++){
  gameTextlevel1.push(facebookLikeGenerator(likes.length, 5));
}
gameTextlevel1.push("");

for(var i = 2; i <= level2length; i++){
  gameTextlevel2.push(beast2landMatch(categories.length));
}
gameTextlevel2.push("");

for(var i = 2; i <= level3length; i++){
  gameTextlevel3.push(brand2sloganMatch());
}
gameTextlevel3.push("");

for(var i = 2; i <= level4length; i++){
  gameTextlevel4.push(polSloganChoice());
}
gameTextlevel4.push("");



//functions for matching and randomizing text
function beast2landMatch(n, start){
  let landBucket = [];
  let person = [];
  let matchResults = "Favorites \n\n";

  for(let i= start || 0; i <= n-1 ; i++) {
      landBucket.push(i);
  }

  person.push(firstNames[Math.floor(Math.random()*firstNames.length)]);
  matchResults = person[0] + "'s " + matchResults;

  function  getRandomFromBucket(bucket){
     let randomIndex = Math.floor(Math.random()*bucket.length);
     return bucket.splice(randomIndex, 1)[0];
  }

  for(let i= start || 0; i <= n-1 ; i++){
    matchResults = matchResults + categories[i]+" → "+favorites[i][Math.floor(Math.random()*favorites[i].length)]+"\n";
  }

  firstNames = firstNames.filter(function(topic){
    return person.indexOf(topic) == -1;
  });

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

function brand2sloganMatch(){
  let brand = [];
  let slogan = [];
  let matchResults = "";

  brand.push(brands[Math.floor(Math.random()*brands.length)]);
  slogan.push(slogans[Math.floor(Math.random()*slogans.length)]);

  matchResults = matchResults + brand[0] + ":\n" + slogan[0];

  brands = brands.filter(function(topic){
    return brand.indexOf(topic) == -1;
  })

  slogans = slogans.filter(function(topic){
    return slogan.indexOf(topic) == -1;
  })

  return matchResults;
}

function polSloganChoice(){
  let index = Math.floor(Math.random()*politicalSlogans.length);
  return politicalSlogans.splice(index,1)[0];
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
var Yspacer = 10;
var targetSpacer = 40;



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
  // level1QuizDisplay(level1Clicks.length);
  // level2Display(level2Clicks.length);
  levelDisplay(level1Clicks.length,level2Clicks.length,level3Clicks.length,level4Clicks.length);
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

  instructions = createElement("body","categorize the human!");
  instructions.position(centerPoint.x - introvertButtonOffset-2, buttonPositions.y - 30);
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
  instructions.remove();
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
  buttonRecorder("day 2");
  level2start.remove();
  level2Clicks.push(1);
  openButton = createButton("introverted");
  openButtonOffset = openButton.width ;//+ extrovertButtonOffset/2;
  openButton.position(buttonPositions.x - openButtonOffset,buttonPositions.y);
  openButton.mousePressed(buttonDeciderOpen);
  closedButton = createButton("extroverted");
  closedButton.position(openButton.x + openButton.width + extrovertButtonOffset, openButton.y);
  closedButton.mousePressed(buttonDeciderClosed);

  instructions = createElement("body","categorize the human!");
  instructions.position(centerPoint.x - openButtonOffset - 5, buttonPositions.y - 30);

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
  if(totalClicks.length == level1length + level2length){
    _removeLevel2();
    startLevel3();
  }
}

function _removeLevel2(){
  openButton.remove();
  closedButton.remove();
  instructions.remove();
}


//level 3 functions
function startLevel3(){
  level3Clicks.push(1);
  level3start = createButton("day 3");
  level3start.size(50,50);
  level3startOffset = level2start.width/2;
  level3start.position(centerPoint.x-level3startOffset,centerPoint.y);
  level3start.mousePressed(marketingButtons);
}

function marketingButtons(){
  buttonRecorder("day 3");
  level3Clicks.push(1);
  level3start.remove();

  CIButton = createButton("closed introverted");
  CIButtonOffset = CIButton.width ;//+ extrovertButtonOffset/2;
  CIButton.position(buttonPositions.x - CIButtonOffset,buttonPositions.y-Yspacer);
  CIButton.mousePressed(buttonDeciderCI);

  CEButton = createButton("closed extroverted");
  CEButtonOffset = CEButton.width ;//+ extrovertButtonOffset/2;
  CEButton.position(buttonPositions.x  + 10, buttonPositions.y-Yspacer);
  CEButton.mousePressed(buttonDeciderCE);

  OIButton = createButton("open introverted");
  OIButtonOffset = OIButton.width ;//+ extrovertButtonOffset/2;
  OIButton.position(buttonPositions.x - OIButtonOffset,buttonPositions.y+Yspacer);
  OIButton.mousePressed(buttonDeciderOI);

  OEButton = createButton("open extroverted");
  OEButtonOffset = OEButton.width ;//+ extrovertButtonOffset/2;
  OEButton.position(buttonPositions.x  + 10 , buttonPositions.y+Yspacer);
  OEButton.mousePressed(buttonDeciderOE);

  instructions = createElement("body","target the advert!");
  instructions.position(centerPoint.x - openButtonOffset - 5, buttonPositions.y - targetSpacer);

}

function buttonDeciderCI(){
  CIButtonRecord.push(1);
  level3Clicks.push(1);
  buttonRecorder("CI");
  rewardsGiven.push(new Reward);
  _level4trigger();
}

function buttonDeciderCE(){
  CEButtonRecord.push(1);
  level3Clicks.push(1);
  buttonRecorder("CE");
  rewardsGiven.push(new Reward);
  _level4trigger();
}

function buttonDeciderOI(){
  OIButtonRecord.push(1);
  level3Clicks.push(1);
  buttonRecorder("OI");
  rewardsGiven.push(new Reward);
  _level4trigger();
}

function buttonDeciderOE(){
  OEButtonRecord.push(1);
  level3Clicks.push(1);
  buttonRecorder("OE");
  rewardsGiven.push(new Reward);
  _level4trigger();
}

function _level4trigger(){
  if(totalClicks.length == level1length + level2length + level3length){
    _removeLevel3();
    startLevel4();
  }
}

function _removeLevel3(){
  CIButton.remove();
  CEButton.remove();
  OIButton.remove();
  OEButton.remove();
  instructions.remove();
}


//level 4 functions
function startLevel4(){
  level4Clicks.push(1);
  level4start = createButton("day 4");
  level4start.size(50,50);
  level4startOffset = level4start.width/2;
  level4start.position(centerPoint.x-level4startOffset,centerPoint.y);
  level4start.mousePressed(polticalButtons);
}

function polticalButtons(){
  buttonRecorder("day 4");
  level4Clicks.push(1);
  level4start.remove();

  CIButton2 = createButton("closed introverted");
  CIButtonOffset2 = CIButton2.width ;//+ extrovertButtonOffset/2;
  CIButton2.position(buttonPositions.x - CIButtonOffset2,buttonPositions.y-Yspacer);
  CIButton2.mousePressed(buttonDeciderCI2);

  CEButton2 = createButton("closed extroverted");
  CEButtonOffset2 = CEButton2.width ;//+ extrovertButtonOffset/2;
  CEButton2.position(buttonPositions.x  + 10, buttonPositions.y-Yspacer);
  CEButton2.mousePressed(buttonDeciderCE2);

  OIButton2 = createButton("open introverted");
  OIButtonOffset2 = OIButton2.width ;//+ extrovertButtonOffset/2;
  OIButton2.position(buttonPositions.x - OIButtonOffset2,buttonPositions.y+Yspacer);
  OIButton2.mousePressed(buttonDeciderOI2);

  OEButton2 = createButton("open extroverted");
  OEButtonOffset2 = OEButton2.width ;//+ extrovertButtonOffset/2;
  OEButton2.position(buttonPositions.x  + 10 , buttonPositions.y+Yspacer);
  OEButton2.mousePressed(buttonDeciderOE2);

  instructions = createElement("body","target the advert!");
  instructions.position(centerPoint.x - openButtonOffset - 5, buttonPositions.y - targetSpacer);

}

function buttonDeciderCI2(){
  CIButtonRecord.push(1);
  level4Clicks.push(1);
  buttonRecorder("CI2");
  rewardsGiven.push(new Reward);
  _endingTrigger();
}

function buttonDeciderCE2(){
  CEButtonRecord.push(1);
  level4Clicks.push(1);
  buttonRecorder("CE2");
  rewardsGiven.push(new Reward);
  _endingTrigger();
}

function buttonDeciderOI2(){
  OIButtonRecord.push(1);
  level4Clicks.push(1);
  buttonRecorder("OI2");
  rewardsGiven.push(new Reward);
  _endingTrigger();
}

function buttonDeciderOE2(){
  OEButtonRecord.push(1);
  level4Clicks.push(1);
  buttonRecorder("OE2");
  rewardsGiven.push(new Reward);
  _endingTrigger();
}

function _endingTrigger(){
  if(totalClicks.length == level1length + level2length + level3length + level4length){
    _removeLevel4();
    ending();
  }
}

function _removeLevel4(){
  CIButton2.remove();
  CEButton2.remove();
  OIButton2.remove();
  OEButton2.remove();
  instructions.remove();
}

function ending(){
  endingToken = true;
  restartButton = createButton("play again?")
  restartButton.size(50,50);
  restartButtonOffset = restartButton.width/2;
  restartButton.position(centerPoint.x - restartButtonOffset,buttonPositions.y);
  restartButton.mousePressed(replayGame);
}

function replayGame(){
  location.reload(true);
}

//this displays the results and puts them in draw
function levelDisplay(level1steps, level2steps, level3steps, level4steps){

  //level 1
  if(level1steps==0){
    push();
    // fill(0,random(255),0, random(255));
    textFont("Courier New");
    textAlign(CENTER);
    textSize(15);
    text(gameTextlevel1[level1steps],0,30,width,170);
    pop();
  } else{
    push();
    // fill(255,0,0);
    textSize(15);
    textFont("Courier New");
    textAlign(CENTER,CENTER);
    text(gameTextlevel1[level1steps],centerPoint.x,centerPoint.y)
    pop();
  }

  //level 2
  if(level2steps==1){
    textFont("Courier New");
    textAlign(CENTER);
    textSize(15);
    text(gameTextlevel2[level2steps],0,30,width,210);
  }
  if(level2steps > 1){
    push();
    textFont("Courier New");
    textSize(15);
    textAlign(CENTER,CENTER);
    text(gameTextlevel2[level2steps],centerPoint.x,centerPoint.y)
    pop();
  }

  //level 3
  if(level3steps==1){
    textFont("Courier New");
    textAlign(CENTER);
    textSize(15);
    text(gameTextlevel3[level3steps],0,30,width,210);
  }
  if(level3steps > 1){
    push();
    textFont("Courier New");
    textSize(15);
    textAlign(CENTER,CENTER);
    text(gameTextlevel3[level3steps],centerPoint.x,centerPoint.y)
    pop();
  }

  //level 4
  if(level4steps==1){
    textFont("Courier New");
    textAlign(CENTER);
    textSize(15);
    text(gameTextlevel4[level4steps],0,30,width,210);
  }
  if(level4steps > 1){
    push();
    textFont("Courier New");
    textSize(15);
    textAlign(CENTER,CENTER);
    text(gameTextlevel4[level4steps],centerPoint.x,centerPoint.y)
    pop();
  }

  //ending
  let branch1 = extrovertButtonRecord.length > introvertButtonRecord.length;
  let branch2 = closedButtonRecord.length > openButtonRecord.length;
  let branch3 = CEButtonRecord.length > OEButtonRecord.length && CIButtonRecord.length > OIButtonRecord.length;
  let path1 = branch1 && branch2 && branch3; //good ending
  let path2 = !branch1 && branch2 && branch3; //bad ending
  let path3 = !branch1 && !branch2 && branch3; //good job A
  let path4 = !branch1 && !branch2 && !branch3; //good job B
  let path5 = !branch1 && branch2 && !branch3; //really good ending
  let path6 = branch1 && !branch2 && !branch3; //bad job A
  let path7 = branch1 && branch2 && !branch3 //bad job B
  let path8 = branch1 && !branch2 && branch3; //mediocre ending


  //
  if(endingToken){
    _storyLine(path1, 0);
    _storyLine(path2, 1);
    _storyLine(path3, 2);
    _storyLine(path4, 3);
    _storyLine(path5, 4);
    _storyLine(path6, 5);
    _storyLine(path7, 6);
    _storyLine(path8, 7);
  }

}

function _storyLine(path, ending){
  if(path){
    push();
    textFont("Courier New");
    textSize(15);
    textAlign(CENTER);
    text(endingsText[ending], 0, 30, width, height);
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
