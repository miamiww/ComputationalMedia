// variables to initialize the chart
var pollution;
var api = 'http://api.openweathermap.org/pollution/v1/co/'
var lat = '10'
var comma = ','
var long = +'74'
var apikey = '/current.json?appid=86b1f68187923c62492ece8193264951'

// variables to store place -> lat/long conversion
var locationAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address='
var userLocation = 'New York'
var locationAPIkey = '&key=AIzaSyAgTSWUqvk47Q4_USB-zV4vgNy_FifYwkQ'
var placeConvert;
var newLong;
var newLat;

// load weather API to present initial data
function preload() {
    var url = api + lat + comma + long + apikey
    loadJSON(url, gotData)
}
// functions to hold API's in objects
function googleConvert(googdata) {
    placeConvert = googdata;
}
function gotData(data) {
    pollution = data;
}

// change chart based on user input
function setup() {
    userLocation = select('#place');
    var button = select('#submit');
    button.mousePressed(pollutionAsk);
    createCanvas(400, 1200);
}

function pollutionAsk() {
    var placeURL = locationAPI + userLocation + locationAPIkey
    loadJSON(placeURL, googleConvert)

    newLat = placeConvert.results[0].geometry.bounds.northeast.lat
    console.log(newLat)
    newLong = placeConvert.results[0].geometry.bounds.northeast.long
    var url = api + newLat + comma + newLong + apikey
    loadJSON(url, gotData)

}


// draw chart
function draw() {
    background(180, 230, 255);

    if (pollution) {
        for (var i = 0; i < pollution.data.length; i++) {

            var pressure = pollution.data[i].pressure
            var COlevel = pollution.data[i].value
            var loggedP = log(pressure)
            var Ypos = map(loggedP, -12, 7, height - 50, 10)
            var Height = map(COlevel, 0, 0.00001, 0, width / 1.5)
            line(180, Ypos, 180 + Height, Ypos);
            push()
            textSize(8)
            textAlign(LEFT)
            text("Pressure: " + pressure + "\nCO Level: " + COlevel, 20, Ypos)
            pop()

            // Find Sea Level

            if (pressure == 1) {
                push()
                fill(100, 200, 255)
                textSize(22)
                textAlign(RIGHT)
                text("Sea Level", width - 5, Ypos - 5)
                strokeWeight(3)
                stroke(100, 200, 255)
                line(width, Ypos, width - 50, Ypos, 10);
                pop();

            }


        }
    }
}


function titles() {
    textAlign(CENTER)

    textAlign(RIGHT)
    text("Carbon Monoxide mixing ratio\nof New York City", width / 1.01, 280)
    textSize(12)

    text("Levels of CO above\n12,800 ppm are deadly\n12,800ppm = 0.0128", width / 1.01, 330)
    pop()
}
