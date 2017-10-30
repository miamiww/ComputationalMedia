var button;
var canvas;
var nextButton;
var buttonHistory = [];
var buttonNames = ["button 1", "button 2", "b u t o n", "next button","you got button", "too much button","button","friend button","please push","push all","its button","button 12", "you got to button","button unlocked","the button","lots of button","here button","why button","how many buttons","push button","click please",
"must click","button click here","click the button","button now","now button","there is the button","the button has arrived",
"is this button","what is button","button good","we love button","all love button", "need more button","how much button","can't button","button can do good","is this button","where is button","is button","please stop button","please end all button","button destroy","end buttons","delete all button", "too much button","I need fewer button",
"this is overly many button","button stop","cancel button","undefined","no end to button","trapped in button","button universe only button","world of button cannot get out","trapped","button","button factory","universe of button factory","gotta love button","kiss button","button family","lotta button","its button time","button button",
"two button","button survival","button is here"];
var buttonEndGame = [];

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;


function setup(){
  canvas = createCanvas(canvasSizeWidth-50,canvasSizeHeight-50);
  canvas.position(50,50);

  //button fun
  button = createButton("button");
  button.position(0,0);
  button.mousePressed(newButton);
  button.size(50,50);
}

function draw(){

  if(buttonEndGame.length>9){
    background(0,235,155);
    rotate();
    text("THANK YOU FOR DEFEATING THE BUTTON ARMY",0,height/2,200,1000);
  } else{
    background(255);
  }

}

function newButton(){
  if(buttonHistory.length < buttonNames.length){
    if(buttonHistory.length>0){
        nextButton.remove();
    } else{
      button.remove();
    }
    nextButton = createButton(buttonNames[buttonHistory.length]);
    buttonHistory.push(0);
    nextButton.position(random(browserSize.browserWidth-50),random(browserSize.browserHeight-50));
    // nextButton.style();
    nextButton.size(50,50);
    nextButton.mousePressed(newButton);
  } else{
    lastButton = createButton("remove button");
    lastButton.position(0,0);
    lastButton.size(browserSize.browserWidth,browserSize.browserHeight);
    lastButton.mousePressed(buttonFuture);
//    console.log("trapped");
  }
}

function buttonFuture(){
  if(buttonEndGame.length == 0){
    nextButton.remove();
  }
  buttonEndGame.push(0);
  if(buttonEndGame.length>9){
    lastButton.remove();
  }
}
