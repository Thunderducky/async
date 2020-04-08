const fs = require("fs");

fs.readFile("hello.txt", "utf8", function(err, data){
    if(err){
        return console.log(err);
    }
    if(data.startsWith("Hello")){
        console.log("Hello Back")
    }
    fs.writeFile("hello.txt", "Goodbye", function(){
        console.log("done");
    })
})
