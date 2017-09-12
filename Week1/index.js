
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50,250,0);
  ellipse(125,100,50,33);
  ellipse(275,100,50,33);
  arc(175, 250, 200, 200, 0, PI+QUARTER_PI, CHORD);
}
