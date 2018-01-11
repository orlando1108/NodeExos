var fs = require('fs') 
const path = require('path');

//console.log(process.argv)

function readMyDir(dirPath, ext) {
   fs.readdir(dirPath, function doneReading(err, list) {
	  list.forEach(function(item) { 
         if(path.extname(item).includes(ext))
			console.log(item)
		 })

  })
}
readMyDir(process.argv[2], process.argv[3])


