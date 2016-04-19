"use strict";

var Tweet = require('../models/tweet');

module.exports = function(stream, io){

    //Tweet recieved
    stream.on('data', function(data) {
        //if there is a username associated with this tweet
        if (data['user'] !== undefined) {
            // Construct a new tweet object
            var tweet = {
                twid: data['id_str'],
                author: data['user']['name'],
                avatar: data['user']['profile_image_url'],
                text: data['text'],
                date: data['created_at'],
                screenname: data['user']['screen_name'],
                entities: data['entities'],
                userLocation: data['user']['location'],
                coordinates: data['coordinates'],
                retweetCount: data['retweet_count'],
                favoriteCount: data['favorite_count'],
                lang: data['user']['lang'],
                followersCount: data['user']['followers_count'],
                friendsCount: data['user']['friends_count'],
                statusesCount: data['user']['statuses_count']
            };

            // Create a new model instance with our object
            var tweetEntry = new Tweet(tweet);

            //console.log(tweet.body);

            // Save the tweet data to mongo
            tweetEntry.save(function(err) {
                if (!err) {
                    //No error, emit
                    io.volatile.emit('tweet', tweet);
                } else {
                    //TODO: handle error
                    console.log(err);
                }
            });
        }
    });
};
