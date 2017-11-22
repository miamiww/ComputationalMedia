

var ellipseSize = 50;

var browserSize = {
  browserWidth: window.innerWidth || document.body.clientWidth,
  browserHeight: window.innerHeight || document.body.clientHeight
}

let canvasSizeWidth = browserSize.browserWidth;
let canvasSizeHeight = browserSize.browserHeight;



function setup(){
  createCanvas(canvasSizeWidth,canvasSizeHeight);
  colorMode(HSB);
}

function draw(){
  background(0);
  fill(rotationZ,128,128);
  ellipse(width/2,height/2,
    map(rotationX, -180, 180, 0, 255),
    map(rotationY, -90, 90, 0, 255));
//  background(map(rotationX , -180, 180, 0, 255));
  text(rotationX, width/2, height/2);
  text(rotationY, width/2, height/2+20);

  // background(50 * touches.length);
  // if(touches.length >= 2){
  //   let d = dist(touches[0].x, touches[0].y,
  //                touches[1].x, touches[1].y)
  //   ellipse(width/2,height/2,d,d);
  // }

  // for( var i =0; i < touches.length; i++){
  //   ellipse(touches[i].x,
  //           touches[i].y,
  //         40,
  //         40);
  // }
}

function mousePressed(){
  ellipseSize += 10;
}

function touchMoved(){
  return false;
}
