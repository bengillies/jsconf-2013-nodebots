var five = require('johnny-five'),
	board, sensor, red, green, blue;

board = new five.Board();

board.on('ready', function() {
	sensor = new five.Sensor({
		pin: 'A0'
	});

	red = new five.Led(9);
	green = new five.Led(10);
	blue = new five.Led(11);

	board.repl.inject({
		sensor: sensor,
		leds: {
			red: red,
			green: green,
			blue: blue
		}
	});

	sensor.on('change', function() { pickColor(this.scaled); });

	function pickColor(val) {
		red.off(); green.off(); blue.off();

		var max = 250,
			third = 250 / 3,
			twoThirds = third * 2,
			led = val < third ? red : val < twoThirds ? green : blue;

		if (val) {
			led.brightness(255);
		}
	}
});
