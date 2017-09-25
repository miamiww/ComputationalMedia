function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(10);
  strokeCap(SQUARE);
  background(0,0,255);
  fill(255,255,0);
  arc(200, 200, 225, 225, PI/4, 1.75*PI, CHORD)
  arc(200, 200, 175, 175, PI/4, 1.75*PI, PIE)
  fill(0,0,255);
  arc(200, 200, 125, 125, PI/4, 1.75*PI)
}
