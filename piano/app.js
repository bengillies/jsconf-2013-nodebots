var io = require('socket.io').listen(8080),
	buzz = require('./buzz'),
	express = require('express'),
	app = express();

app.use(app.router);
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
	var data = {
		title: "Piano",
		notes: buzz.notes.map(function(note) {
			return {
				name: note,
				isSharp: /[♯♭]/.test(note)
			};
		})
	};

	res.render('index.html.hbs', data);
});

buzz.connect(function(err, piezo) {
	app.listen(3000);
	console.info('express started listening on 3000');

	io.on('connection', function(socket) {
		socket.on('note', function(data) {
			buzz.play(piezo, data.note);
		});
	});
});

