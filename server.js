var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var emoji = require('./emoji.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cars = [
    "Mini",
    "Jag",
    "Veyron",
    "Micra",
    "Bentley"
];

app.get("/cars", function(req, res) {
    res.send(cars);
})

app.get("/emoji", function(req, res) {
    res.send(emoji);
})

app.post('/cars', function (req, res) {
    console.log("Car added to cars array: ", req.body.car);
    cars.push(req.body.car);
    console.log(cars);
    res.send(cars);
  });

  app.delete('/cars', function (req, res) {
    console.log("Car deleted from cars array: ", req.body.car);
    cars.splice( cars.indexOf(req.body.car), 1 );
    console.log(cars);
    res.send(cars);
  });

app.listen(9000);