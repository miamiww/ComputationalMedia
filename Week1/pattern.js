function setup(){
  createCanvas(600, 600);
  noStroke();
//  strokeWeight(1);
}

function draw(){
  background(230);
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(255,140,200);
      ellipse(x,y,40,40);

    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(0,140,200);
      arc(x,y,40,40,0,radians(90));
//      rect(x,y,20,20)
    }
  }
  for (var y=0; y<= height; y+=40){
    for (var x =0; x<= width; x += 40){
      fill(0,140,200);
//      arc(x,y,40,40,radians(180),radians(270));
    }
  }
}
