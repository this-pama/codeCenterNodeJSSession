var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'})
	console.log(req.url)
	res.end('Hello World! This is my first Node JS code.')
}).listen(3000)