
var api = "http://chroniclingamerica.loc.gov/search/pages/results/?andtext=";
var searchTerm = "Seattle";
var format = "&format=json";
var url = api + searchTerm + format;
var button;
var inputValue;

function preload(){
  data = loadJSON(url);
}

function setup(){
  createCanvas(400,400);
  field = createInput(searchTerm);
  field.input(inputEvent);
  field.position(10,height-50);
  button = createButton("Search");
  button = select('#submit');
  button.mousePressed(getLOCdata);
  searchTerm = select('#term');


}

function draw(){
  inputValue = number(data["items"][0].date);

}

function inputEvent(){

}

function getLOCData(){
  searchTerm = newSearch;
  url = api + searchTerm + format;
  data = loadJSON(url);
}
