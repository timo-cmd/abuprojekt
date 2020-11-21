var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder


var server = app.listen(8000);
console.log('Abu-project 2020 Perlen Papier AG by Timo Sarkar\nListening on ipv4 127.0.0.1 on port 8000. Please refer to the URL: http://localhost:8000')