//we want to see other function of the url module. 

var url = require('url');   // we are calling on the module url here
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';// let's assume this is our address that we want to manipulate
// rememeber this can come in from our request object.  Hope u rememebered the req.url

//the url module has a method called parse. It parses the address and return it in a splitable property.
var q = url.parse(adr, true); /// q here contains our parsed address.. 


// console.log(q)  // this contains all the property of the parsed address
console.log('.'+ q.pathname)


// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'



//lets create a folder called newNodeServer

//inside the folder lets create two html files
//1 is called winter.html
//2. is called summer.html
//inside the winter.html let's have a text which could just be Welcome to Winter
//inside the summer.html lets have a text that says welcome to summer