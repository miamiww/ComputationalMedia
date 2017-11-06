var Twitter = require('twitter')
var json2csv = require('json2csv');
var fs    = require("fs");
var express = require('express');
var app = express();
var server = app.listen(3000);

var io = require('socket.io')(server);


app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var fields = ['id_str','created_at','text', 'user.screen_name','user.lang','coordinates.coordinates'];
var newLine= "\r\n";

var client = new Twitter({
  consumer_key: 'sTpYrbMJUoDSi7ZcUGQLky2W3',
  consumer_secret: 'TVnynAQ358MkRaM2lTGGzRKm4UcXAltBDF4wpONvQb8e3vjPcH',
  access_token_key: '1335327188-4mRLS4TtD6t6LG2Zrq2u3y9kkTxwAtC8j3JZKlu',
  access_token_secret: 'eT6ZqUT298TTKlC83zseynomQMSiKPNx72rIhfkXEIDOl'
})




client.stream('statuses/filter', {
        track: 'cheese'

    }, function(tweetStream) {

        tweetStream.on('data', function(tweet) {
//            console.log(tweet.)
            _cheesyTweet(tweet);
            var toCSV = { data: tweet, fields: fields, hasCSVColumnTitle: false };
//            console.log(tweet.text);
//            console.log(tweet.user.screen_name);
//            console.log(tweet);
            fs.stat('cheeseTweets.csv', function (err, stat) {
                if (err == null) {
                    console.log('File exists');
                    var csv = json2csv(toCSV) + newLine;
                    console.log(csv);
                    fs.appendFile('cheeseTweets.csv', csv, function (err) {
                        if (err) throw err;
                        console.log('The "data to append" was appended to file!');
                    });
                }
                else {
                    console.log('New file, just writing headers');
                    fields= (fields + newLine);

                    fs.writeFile('cheeseTweets.csv', fields, function (err, stat) {
                        if (err) throw err;
                        console.log('file saved');
                    });
                }
            });
        });
});

function _cheesyTweet(data){
  io.sockets.emit('mysocket', data);
  //console.log(data);
}
