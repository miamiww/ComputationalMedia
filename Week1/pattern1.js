function setup(){
  createCanvas(400, 400);
  noStroke();
//  strokeWeight(1);
}

function draw(){
  background(128,180,13);
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(0);
      ellipse(x-5*random(),y-5*random(),30,30)
    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(320);
      ellipse(x+5*random(),y+5*random(),30,30)
    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(35,73,251);
      ellipse(x,y,30,30);
    }
  }
}
