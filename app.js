"use strict";

var Twitter = require('twitter'),
    mongoose = require('mongoose'),
    config = require('./config'),
    streamHandler = require('./utils/streamHandler');
 
//initialize our twitter client
var TwitterClient = new Twitter(config.twitterConfig);

//create a socket io running on the configured port to retransmit all
//tweets that have been processed and saved to our database.
var io = require('socket.io')(config.socketPort);

// Connect to our mongo database
mongoose.connect('mongodb://localhost/primary-tweets');
console.log(mongoose.connection.readyState);

//Connect the twitter stream to our stream handler to write the tweets to mongo,
//then retransmit on our socket port.
TwitterClient.stream('statuses/filter',config.streamHandles, function(stream) {
    streamHandler(stream,io);
});

console.log('listening on port 3000');