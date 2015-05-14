// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    _ = require("underscore"),
    bodyParser = require("body-parser");

// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //

// pre-seeded food data
var foods =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
];

// ROUTES //

// root path
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// this is the route that feeds JSON to the front end
app.get("/foods", function (req, res){
  // render foods index as JSON
  res.send(JSON.stringify(foods));
});

app.post("/foods", function (req, res){
  // food#create
  var id = foods.length + 1;
  var incoming = {id: foods.length + 1,name: req.body.foodInput,yumminess: "not much"};
  foods.push(incoming);
  //res.redirect('..');
  res.send(JSON.stringify(incoming));
});

app.delete("/foods/:id", function (req, res){
  // food#delete
});

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});