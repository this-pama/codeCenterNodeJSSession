var fs = require('fs');

fs.writeFile('myFileTest.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});