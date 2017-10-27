
var api = "http://chroniclingamerica.loc.gov/search/pages/results/?andtext=";
var searchTerm = "Seattle";
var format = "&format=json";
var url = api + searchTerm + format;
var data;


function setup() {
//  noCanvas();
  createCanvas(400, 400);
  //background(0);
  let button = select('#tryit');
  button.mousePressed(cityAsk);
  let cityInput = select("#city");

  button.position(cityInput.x + cityInput.width,25)

}

function cityAsk() {
	let cityInput = select("#city");
  searchTerm = cityInput.value();
  console.log(city);
	let url = api + searchTerm + format;
  console.log(url);
  loadJSON(url, gotData);
  data = loadJSON(url);

}

function gotData(data) {
  console.log(data.items[0].date);
}

function draw(){
  ellipse(height/2,width/2,Number(data.items[0].date),30);
}
