 var result = 0

    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)
	
	/*const values  = process.argv.slice(2)
	  const result = values.reduce((acc, element)=>{
	  return acc + parseInt(element)
	  },0)
	  console.log(result)
	  */