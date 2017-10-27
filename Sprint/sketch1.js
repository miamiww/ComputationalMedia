
var api = "http://chroniclingamerica.loc.gov/search/pages/results/?andtext=";
var searchTerm = "Seattle";
var format = "&format=json";
var url = api + searchTerm + format;
var button;
var inputValue;
var newSearch;
var field;
var data;


function preload(){
  data = loadJSON(url);


}




function setup(){
  createCanvas(400,400);
  //input field
  input = createInput();
  input.position(20, 65);
  //button
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(getLOCData);

//   field = createInput(searchTerm);
//   field.input(inputEvent);
//   field.position(10,height-50);
//   button = createButton("Search");
//   button = select('#submit');
//   button.mousePressed(getLOCdata);
//   searchTerm = select('#term');


}


function draw(){
  background(LOCData()/100000);
  text(LOCData(),width/2,height/2);

}


function LOCData(){
  return inputValue = Number(data["items"][0].date);
}

function getLOCData(){
  searchTerm = input.value();
  url = api + searchTerm + format;
  data = loadJSON(url);
//  inputValue = Number(data["items"][0].date);
}
