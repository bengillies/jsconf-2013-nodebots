var five = require('johnny-five');



function Lights() {
	this.red = new five.Led(6);
	this.green = new five.Led(10);
	this.blue = new five.Led(11);
}

Lights.prototype.flash(duration) {
	var led = this[['red', 'green', 'blue'][Math.floor(Math.random() * 3)]];

	led.on();
	led.brightness(255);

	setTimeout(function() {
		this.red.off();
		this.green.off();
		this.blue.off();
	}, duration);
}

module.exports.lights = Lights;
