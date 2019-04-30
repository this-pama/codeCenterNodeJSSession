var fs = require('fs');

// the appendFile() method takes 3 parameters. 
//1 the file you want to append a text to. If this file exist, it will append to it, if it doesnt, it will create it.
//2. the text you want to add to your file
// 3. a function which does something when the action fails or is successful.
fs.appendFile('myFileTest.txt', '\nThis is a new line example.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

