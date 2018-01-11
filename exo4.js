var fs = require('fs') 
var lines = undefined 

//console.log(process.argv)

function addOne(path,callback) {
  fs.readFile(path, function doneReading(err, content) {
    //myNumber = parseInt(fileContents)
	lines = content.toString().split('\n').length-1
	callback()
  })
}

function logMylines() {
  console.log(lines)
}

addOne(process.argv[2],logMylines)
