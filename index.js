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
	gpio.write(port, true, function(err) {
		if (err) throw err;
		console.log('Written to pin');
	});
}

app.post('/on', function (req, res) {
	var port = parseInt(req.body.port);
	gpio.setup(port , gpio.DIR_OUT, turnOn(port));
	res.end("Turning On: " + port)
})

function turnOff(port) {
	gpio.write(port, false, function(err) {
		if (err) throw err;
		console.log('Written to pin');
	});
}

app.post('/off', function (req, res) {
	var port = parseInt(req.body.port);
	gpio.setup(port , gpio.DIR_OUT, turnOff(port));
	res.end("Turning On: " + port)
})


var server = app.listen(4545, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
