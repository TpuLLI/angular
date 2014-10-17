var express = require("express");
var path = require("path");
var html = require("html");
var app = express();


app.use(express.static(__dirname + "/public"));

app.set("view engine", "html");

app.get("*", function(req, res) {
  res.sendfile(__dirname + "/public/views/start.html");
  // res.render("layout.html");
});


app.listen(3003, function() {
  console.log("Start!");
});
