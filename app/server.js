var express = require("express");
var app = express();
var converter = require("./converter");

app.get('/', function (req, res) {
  res.send('<h1>Home Page</h1>');
});

app.get('*', function (req, res) {
  var urlExists = converter.checkIfUrlExists(req.url);

  if (urlExists) {
    //retrive DB entry and redirect there
    res.send('<h1>Does exist</h1>');
  } else {
    //go to 'does not exist' page
    res.send('<h1>Doesnt exist</h1>');
  }
});

app.listen(3000, function (){
  console.log('listening on port 3000');
});