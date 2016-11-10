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

app.post('/on', function (req, res) {
	gpio.setup(req.body.port, gpio.DIR_OUT, function(err) {
		if (err) throw err;
		console.log('Written to pin: ' + req.body.port);
	});
	gpio.write(req.body.port, true);
	res.end("Turning On: " + req.body.port)
})

app.post('/off', function (req, res) {
	gpio.setup(req.body.port, gpio.DIR_OUT, function(err) {
		if (err) throw err;
		console.log('Written to pin: ' + req.body.port);
	});
	gpio.write(req.body.port, false);
	res.end("Turning Off: " + req.body.port)
})


var server = app.listen(4545, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
