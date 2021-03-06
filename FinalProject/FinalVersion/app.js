//set up dependencies and set up server variables
var json2csv = require('json2csv');
var fs = require('fs');
var express = require('express');
var app = express();
var server = app.listen(7010);
var io = require('socket.io')(server);

//important variables for building the csv
var newLine= "\r\n";
var fields = ["clicked","time"];
var dataBase = "public/data.csv";

//start server running and serving the html page
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


//set up socket behaviorss
io.on('connection', function(socket) {
    console.log('A user connected');

    socket.on('buttonClick',function(data){
      console.log("clicked");
      console.log(data);
      _csvWriter(dataBase,data);
    })

    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });

});



//function to write csv
function _csvWriter(csvName,data){
  var toCSV = { data: data, fields: fields, hasCSVColumnTitle: false };
  fs.stat(csvName, function(err, stat) {
      if(err == null) {
        console.log('File exists');
        var csv = json2csv(toCSV) + newLine;
        console.log(csv);
        fs.appendFile(csvName, csv, function (err) {
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        })
      } else{
        console.log('New file, just writing headers');
        fields= (fields + newLine);
        fs.writeFile(csvName, fields, function (err, stat) {
          if (err) throw err;
          console.log('file saved');
        });
      }
  });
}
