var http = require('http')
var fs = require('fs')
var url = require('url')


http.createServer(function(req,res){
	var path = req.url // this will give me the pathname of any visit made.
	var q = url.parse(path, true)
	var filename = '.' + q.pathname   /// this will return a foler-like pathname  --- ./filename.html


}).listen(3000)