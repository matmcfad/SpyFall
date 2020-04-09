(() => {
	var socket_link = io.connect('https://spyfall.azurewebsites.net/');
	//var socket_link = io.connect('http://localhost:3000/');

	var name = location.search.substring(1);

	socket_link.on('connect', () => {
		document.getElementById('join_room_button').addEventListener('click', () => {
			console.log('bruh');
			socket_link.emit('join', {
				source_socket: socket_link.id,
				join_key: document.getElementById('key_enter').value.toLowerCase()
			});
		});

		document.getElementById('back').addEventListener('click', () => {
			window.location = '/';
		});
	});

	socket_link.on('join', data => {
		window.location = 'game_room?' + data.key + '&' + name;
	});

	socket_link.on('no_key_error', data => {
		document.getElementById('no_key_err').innerHTML = '<br>The room "' + data + '" does not exist!';
	});

	function normalizePort(val) {
		var port = parseInt(val, 10);
	
		if (isNaN(port)) {
			// named pipe
			return val;
		}
	
		if (port >= 0) {
			// port number
			return port;
		}
	
		return false;
	}
})();
