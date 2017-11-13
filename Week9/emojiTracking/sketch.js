var ctracker;
var slider;
var vidWidth = 400;
var vidHeight = 400;
//create array of emojis for slider
var emojis = [
  "🍥", "💩","🌯","🍾","👢","👘","👽"
]
var ec ;
var emotionData;

function setup() {

  // setup camera capture
  var videoInput = createCapture();
  videoInput.size(vidWidth, vidHeight);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(vidWidth, vidHeight);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  slider = createSlider(0, 6, 0);
  slider.position(0, 400);

  noStroke();

//  var ec = new emotionClassifier();
//  ec.init(emotionModel);
//  var emotionData = ec.getBlank();
}

function draw() {
  clear();

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();

//  for (var i=0; i<positions.length; i++) {
    // set the color of the ellipse based on position on screen
//    fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
    // draw ellipse at each position point
    var val = slider.value();
    //create emoji size
    textSize(200);
    //assign emoji to center of the face (position 6 adjusted for inexplicable drift)
    text(emojis[val], positions[6][0] - 100, positions[6][1]);
//  }

}
