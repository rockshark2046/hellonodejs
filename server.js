"use strict"

var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('hello world');
}).listen(8888);

console.log('Server running at http://123.57.71.92:8888');

