let kitty;

function preload(){
  kitty = loadImage("kitty_transparent.png");
}

function setup(){
  createCanvas(400,400);
}

function draw(){
//  background(220);
  for(let i = 0; i < 50; i++){
    let rx = random(kitty.width);
    let ry = random(kitty.height);
    let c = kitty.get(rx,ry);
    fill(c);
    noStroke();
    ellipse(rx,ry,5,5);
  }

}
