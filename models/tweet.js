"use strict";

var mongoose = require("mongoose");

var tweetSchema = new mongoose.Schema({
    twid       : String,
    author     : String,
    avatar     : String,
    text       : String,
    date       : Date,
    screenname : String,
    entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: []
    },
    userLocation: String,
    coordinates: {
        coordinates: [Number],
        type: String
    },
    retweetCount: Number,
    favoriteCount: Number,
    lang: String,
    followersCount: Number,
    friendsCount: Number,
    statusesCount: Number
});


var Tweets = mongoose.model('Tweet', tweetSchema);
//export our tweet model
module.exports = Tweets;