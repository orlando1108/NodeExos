var fs = require('fs') 
var lines = undefined 

//console.log(process.argv)

function addOne(path) {
  content =  fs.readFileSync(path)
	lines = content.toString().split('\n').length-1
	console.log(lines)
  }



addOne(process.argv[2])
