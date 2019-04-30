var http = require('http')
var fs = require('fs')


http.createServer(function(req,res){
	//what file do we want to read. That demoServer.html 
	//that means we need an fs module.
	//fs module has a method called readFile()
	// the readFile() takes two parameters,
	// 1 is the file it wants to read, which is demoServer.html
	//2. is a function which says what it should do after it reads the file.
	fs.readFile('demoServer.html', function(err, data){
		// here our function which is the second parameter to readFile() method takes 2 parametere which are err and data.
		// err is an object which contains error if there is an error when reading file
		// data is an object which contains data that is read from the file.
		//if data read is successful, it should give a response
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.write(data)
		res.end()
	})
}).listen(3000)