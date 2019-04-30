var fs = require('fs');

fs.rename('myFileTest.txt', 'myNodeTestFile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});