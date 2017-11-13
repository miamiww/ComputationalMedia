let kitty;

function preload(){
  kitty = loadImage("kitty_transparent.png");
}

function setup(){
  createCanvas(400,400);
}

function draw(){
 //background(220);
  kitty.loadPixels();
  for(let i = 0; i < 500; i++){
    let rx = int(random(kitty.width));
    let ry = int(random(kitty.height));
    // let c = kitty.get(rx,ry);
    let offset = ((ry*kitty.width)+rx)*4;
    let redc = kitty.pixels[offset];
    let greenc = kitty.pixels[offset + 1];
    let bluec = kitty.pixels[offset + 2];
    let alphac = kitty.pixels[offset + 3];
    // fill(c);
    fill(redc,greenc,bluec,alphac);
    noStroke();
    ellipse(rx,ry,2,2);
  }

}
