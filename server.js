var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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

app.listen(1234);