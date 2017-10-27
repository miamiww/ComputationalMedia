let url;
let result = "http://chroniclingamerica.loc.gov/search/titles/results/";
let city;
let before = "?terms=";
let after = "&format=json";
let startYear;

function setup() {
  noCanvas();
  let button = select('#tryit');
  button.mousePressed(cityAsk);
}

function cityAsk() {
	let cityInput = select("#city");
  city = cityInput.value();
  console.log(city);
	let url = result + before + city + after;
  console.log(url);
  loadJSON(url, gotData);
}

function gotData(data) {
  let length = data.items.length;
  let i = Math.floor(random(length));
  startYear = data.items[i].start_year;
  console.log(startYear);
}
