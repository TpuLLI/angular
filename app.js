var express = require("express");
var path = require("path");
var html = require("html");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
rootPath = __dirname;
var app = express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser());

app.set("view engine", "html");

require('./routes/news')(app);
require('./routes/start')(app);

mongoose.connect('mongodb://localhost/adminka', function(err, res) {
  if(err) {
    console.log('error connecting to MongoDB Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.listen(3003, function() {
  console.log("Start!");
});
