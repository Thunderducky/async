const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("hello.txt", "utf8", function(err, data){
            if(err){
                return reject(err);
            }
            resolve(data);
        })
    })
}


readFileAsync().then(data => {
    console.log(data);
    if(data.startsWith("Hello")){
        console.log("Hello Back")
    }
    return writeFileAsync("hello.txt", "Goodbye")
}).then(() => {
    console.log("done");
}).catch(err => {
    console.log(err);
})
