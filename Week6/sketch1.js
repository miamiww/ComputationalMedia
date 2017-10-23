
//main colors
var brightBlue = [73,174,227];
var brightGold = [225,204,39];
var offPink = [233,71,126];
var brightTan = [248,208,162];
var brightGrey = [145,153,238];
//additional colors
var dullPink = [238,171,178];
var offBlack = [30,29,20];
var brightRed = [221,59,48];
var dullRed = [197,88,141];
var dullBlue = [163,213,217];

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;



function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
  noStroke();
}

function draw(){
  background(offBlack);
  //1st level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(dullBlue);
      arc(x,y,40,40,radians(270),0);
    }
  }
  //2nd level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightTan);
      arc(x,y,35,35,0,radians(90));
    }
  }
  //3rd level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(offPink);
      arc(x,y,30,30,radians(90),radians(180));
    }
  }
  //4th level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightGrey);
      arc(x,y,25,25,radians(180),radians(270));
    }
  }
  //5th level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightBlue);
      arc(x,y,20,20,radians(270),radians(360));
    }
  }
  //6th level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(dullPink);
      arc(x,y,15,15,0,radians(90));
    }
  }
  //7th level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(brightBlue);
      arc(x,y,10,10,radians(90),radians(180));
    }
  }
  //8th level
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(dullRed);
      arc(x,y,5,5,radians(180),radians(270));
    }
  }

}
