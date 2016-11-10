var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var gpio = require('rpi-gpio');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ghost', function (req, res) {
   res.end("Hello World")
})

function turnOn(port) {
	var spawn = require('child_process').spawn,
	py = spawn('python3', ['./on.py', port]),
	dataString = '';
}

app.post('/on', function (req, res) {
	var port = parseInt(req.body.port);
	turnOn(port);
	res.end("Turning On: " + port)
})

function turnOff(port) {
	var spawn = require('child_process').spawn,
	py = spawn('python3', ['./off.py', port]),
	dataString = '';
}

app.post('/off', function (req, res) {
	var port = parseInt(req.body.port);
	turnOff(port);
	res.end("Turning Off: " + port)
})


var server = app.listen(4545, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
