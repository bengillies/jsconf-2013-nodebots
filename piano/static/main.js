var socket = io.connect('http://localhost:8080');

[].slice.call(document.getElementsByTagName('button')).forEach(function(el) {
	el.addEventListener('click', sendNote);
});

function sendNote(ev) {
	var note = ev.target.getAttribute('data-note');

	socket.emit('note', { note: note });
}
