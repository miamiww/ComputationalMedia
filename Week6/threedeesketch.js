
var mySpan;

function setup(){
  createCanvas(600,400, WEBGL);
  mySpan = createSpan('this is some text');

}

function draw(){
  background(220);
  directionalLight(0,0,255,-1,-1,1);
  directionalLight(255,0,0,sin(frameCount*0.01),sin(frameCount*0.01),sin(frameCount*0.01));
  pointLight(0,255,0,mouseX-width/2,mouseY-height/2,0);
  push();
  translate(mouseX-width/2,mouseY-height/2,20);
  sphere(50);
  pop();

  for(let i = -5; i < 5; i++){
    push();
    translate(i * 50,sin(frameCount*i*0.01)*50,0);
    box();
    pop();
  }
//  textFont("Futura");
//  text("PLAY ECHO THE DOLPHIN", width/2,height/2)
  //translate(mouseX,mouseY,0);
//  box();
}
