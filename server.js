var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 9000;
const os = require('os');

var emoji = require('./emoji.json');
var images = require('./images.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cars = [
    "Mini",
    "Jag",
    "Veyron",
    "Micra",
    "Bentley"
];

const system = os.cpus().concat(os.freemem()).concat(os.loadavg().concat(os.platform()))

console.log(os.cpus().concat(os.freemem()).concat(os.loadavg()).concat(os.platform()))

app.get("/cars", function(req, res) {
    res.send(cars);
})

app.get("/emoji", function(req, res) {
    res.send(emoji);
})

app.get("/cpu", function(req, res) {
    res.send(system);
})

app.get("/", function(req, res) {
    res.send(system);
})

app.get("/images", function(req, res) {
    res.send(images);
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

app.listen(port);