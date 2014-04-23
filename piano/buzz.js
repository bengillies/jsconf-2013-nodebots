var five = require('johnny-five');


var notes = {
	"C8 Eighth octave":4186,
	"B7":3951,
	"A♯7/B♭7":3729,
	"A7":3520,
	"G♯7/A♭7":3322,
	"G7":3135,
	"F♯7/G♭7":2959,
	"F7":2793,
	"E7":2637,
	"D♯7/E♭7":2489,
	"D7":2349,
	"C♯7/D♭7":2217,
	"C7 Double high C":2093,
	"B6":1975,
	"A♯6/B♭6":1864,
	"A6":1760,
	"G♯6/A♭6":1661,
	"G6":1567,
	"F♯6/G♭6":1479,
	"F6":1396,
	"E6":1318,
	"D♯6/E♭6":1244,
	"D6":1174,
	"C♯6/D♭6":1108,
	"C6 Soprano C (High C)":1046,
	"B5":987,
	"A♯5/B♭5":932,
	"A5":880,
	"G♯5/A♭5":830,
	"G5":783,
	"F♯5/G♭5":739,
	"F5":698,
	"E5":659,
	"D♯5/E♭5":622,
	"D5":587,
	"C♯5/D♭5":554,
	"C5 Tenor C":523,
	"B4":493,
	"A♯4/B♭4":466,
	"A4 A440":440,
	"G♯4/A♭4":415,
	"G4":391,
	"F♯4/G♭4":369,
	"F4":349,
	"E4":329,
	"D♯4/E♭4":311,
	"D4":293,
	"C♯4/D♭4":277,
	"C4 Middle C":261,
	"B3":246,
	"A♯3/B♭3":233,
	"A3":220,
	"G♯3/A♭3":207,
	"G3":195,
	"F♯3/G♭3":184,
	"F3":174,
	"E3":164,
	"D♯3/E♭3":155,
	"D3":146,
	"C♯3/D♭3":138,
	"C3 Low C":130,
	"B2":123,
	"A♯2/B♭2":116,
	"A2":110,
	"G♯2/A♭2":103,
	"G2":97,
	"F♯2/G♭2":92,
	"F2":87,
	"E2":82,
	"D♯2/E♭2":77,
	"D2":73,
	"C♯2/D♭2":69,
	"C2 Deep C":65,
	"B1":61,
	"A♯1/B♭1":58,
	"A1":55,
	"G♯1/A♭1":51,
	"G1":48,
	"F♯1/G♭1":46,
	"F1":43,
	"E1":41,
	"D♯1/E♭1":38,
	"D1":36,
	"C♯1/D♭1":34,
	"C1 Pedal C":32,
	"B0":30,
	"A♯0/B♭0":29,
	"A0 Double Pedal A":27
};

function play(piezo, note) {
	console.info('playing ' + note);
	var duration = 500,
		tone = notes[note];

	if (tone) {
		piezo.tone(tone, duration);
	}
}


function connect(fn) {
	var board = new five.Board({
		debug: false
	});

	board.on('ready', function() {
		var piezo = new five.Piezo(9);

		fn(null, piezo);
	});
}

module.exports.notes = Object.keys(notes).reverse();
module.exports.connect = connect;
module.exports.play = play;
