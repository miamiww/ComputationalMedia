let timer = 20;
let lastTimeCheck = 0;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(220);
  ellipse(mouseX,mouseY,10,10);
  mousePressed();

  if(millis() - lastTimeCheck > 1000){
    console.log("Tick!");
    lastTimeCheck = millis();
  }
}

function mousePressed(){
  if(mouseIsPressed){
    textAlign(CENTER,CENTER);
    textSize(20);
    text("YOU WIN",width/2,height/2);
  } else{
    if(timer > 0){
      textAlign(CENTER,CENTER);
      textSize(100);
      text(timer,width/2,height/2);
      if(frameCount % 60 == 0){
        timer --;
      }
    } else{
      background(255,0,0);
      textAlign(CENTER,CENTER);
      textSize(20);
      text("YOU LOSE",width/2,height/2);
    }
  }
}
