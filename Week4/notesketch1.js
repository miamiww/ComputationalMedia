let lastFramePress = false;


function setup(){
  createCanvas(400,400);

}

function draw(){
  if(mouseIsPressed){
    console.log("mouse is pressed currently");
  }
  if(mouseIsPressed && !lastFramePress){
    console.log("mouse was pressed!");
  }
  lastFramePress = mouseIsPressed;
}
