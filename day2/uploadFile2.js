var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {  // this is the action that will be perfromed when a file is uploaded and the submit button is clicked
    // == is a comparison. It is saying that if the rquest url is equals to fileupload, it should then perform that task
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // perform a task after sucessfull upload
      console.log(files)
      res.write('File uploaded');
      res.end();
    });
  } else {
    //this is what get called immediately anybody visit our server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); // we have defined in here that the action to be performed is fileupload
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);