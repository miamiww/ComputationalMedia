
function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(0,250,120);
  ellipse(125,100,60,45);
  ellipse(275,100,60,45);
  arc(175, 250, 200, 200, 0, PI+QUARTER_PI, CHORD);
}
