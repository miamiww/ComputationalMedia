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


function _cheesyTweet(data){
  io.sockets.emit('mysocket', data);
  //console.log(data);
}

client.stream('statuses/filter', {
        track: 'cheese'

    }, function(tweetStream) {

        tweetStream.on('data', function(tweet) {
            _cheesyTweet(tweet.id_str); 
            console.log(tweet);
        });
});
