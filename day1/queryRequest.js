var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
 var text = q.name +" " + q.year
  res.end('This is a quesry string example of how we can manipulate our url. Here is my query string ' + text);
}).listen(8080);


