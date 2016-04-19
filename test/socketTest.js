//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});
console.log(socket.status);
// Add a connect listener
socket.on('tweet', function(data) {
    console.log(data);
});



