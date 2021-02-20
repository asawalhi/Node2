var fs = require('fs')
var yargs = require('yargs/yargs')


var a = parseInt(process.argv);
console.log("You entered " + a)

fs.open('text2.txt', 'w+', function(err,fd){
    if(err){
        console.log(err)
    }else{
        console.log("Opened")
    }

})

fs.stat('text2.txt', function(err, stats){

    if(err){
        console.log(err)
    }else{
        console.log("Got stats sucessfully, stats = " + stats)
        console.log("IsFile? " + stats.isFile())

    }
})