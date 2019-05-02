var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      //perform task after successful file upload
      var oldpath = files.filetoupload.path;   // this gives us the path name of where the file was previously
      var newpath = 'C:/Users/Olamilekan/Desktop/dapo/code-center/wk3/day2/' + files.filetoupload.name;  // this is where we are stating the new place we want to save the file upload
      fs.rename(oldpath, newpath, function (err) {   // this is where we now resave the file in a new place
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);