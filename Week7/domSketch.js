let button;
let clearbutton;
let slider;
let count = 0;

function setup(){
  createCanvas(400,400);

  //button fun
  button = createButton("Hello");
  button.position(10,10);
  button.size(100,100)
  button.style("font-family","Comic Sans MS");
  button.style("background-color","#00f");
  button.style("color","#fff");
  button.mousePressed(randomRect);
  clearbutton = createButton("Clear!");
  clearbutton.size(100,100);
  clearbutton.position(10,120);
  clearbutton.style("font-family","Comic Sans MS");
  clearbutton.mousePressed(clearOut);

  //make a slider
  slider = createSlider(0,255,0);
  slider.position(20,height-30);
  slider.size(width-20,20);

  //make a field
  field = createInput("Hello");
  field.position(10,height-50);
}

function draw(){
  background(slider.value(),0,255);
  textSize(100);
  text(count,width/2,height/2);
  text(field.value(),width/2,height*.666);
  button.position(mouseX,mouseY);
}

function randomRect(){
  count++;
//  fill(random(255));
//  rect(random(width),random(height),random(100),random(100))
}

function clearOut(){
  count = 0;
}
