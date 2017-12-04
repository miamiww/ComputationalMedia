

class blobTimer{
  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.lastBlobTime = millis();
    this.blobs = [];
    this.addBlob();
  }
  update(){
    if(millis() > this.lastBlobTime + 1000){
      this.addBlob();
      this.lastBlobTime = millis();
    }
  }
  addBlob(){
    let c = random(255);
    this.blobs.push(c);
  }
  display(){
    for(let i = 0 ; i < this.blobs.length; i++){
      fill(this.blobs[i]);
      ellipse(this.xpos + i * 20, this.ypos, 15, 15);
    }
  }
}

let timers = [];

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(220);
  for( let i=0; i < timers.length; i++){
    timers[i].update();
    timers[i].display();
  }
}

function mousePressed(){
  timers.push(new blobTimer(mouseX, mouseY));
}
