let capture;

function preload(){

}

function setup(){
  createCanvas(400,400);
  capture = createCapture(VIDEO);
  capture.size(width,height);
  capture.hide();
}

function draw(){
  // image(capture,0,0);
  //background(220);
  capture.loadPixels();
  for(let cx = 0; cx < width;cx += 10){
    for(let cy = 0; cy < height; cy += 10){
      let offset = int(((cy*capture.width)+cx)*4);
      let greenc = capture.pixels[offset+1];
      fill(255);
      let elSize = map(greenc,0,255,0,15);
      // fill(greenc,greenc,greenc);
      ellipse(cx,cy,elSize,elSize);
    }
  }
  // for(let i = 0; i < 5000; i++){
  //   let rx = int(random(capture.width));
  //   let ry = int(random(capture.height));
  //   // let c = capture.get(rx,ry);
  //   let offset = ((ry*capture.width)+rx)*4;
  //   let redc = capture.pixels[offset];
  //   let greenc = capture.pixels[offset + 1];
  //   let bluec = capture.pixels[offset + 2];
  //   let alphac = capture.pixels[offset + 3];
  //   // fill(c);
  //   // fill(redc,greenc,bluec,alphac);
  //   // fill(redc,redc,redc);
  //   fill(redc,0,0);
  //   noStroke();
  //   ellipse(rx,ry,greenc*0.1,greenc*0.1);
  //   // ellipse(rx,ry,5,5);
  // }

}
