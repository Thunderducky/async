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

async function main(){

    try {
        const data = await readFileAsync();
        console.log(data);
        if(data.startsWith("Hello")){
            console.log("Hello Back")
        }
        await writeFileAsync("hello.txt", "Goodbye")
        console.log("done");
    } catch(err) {
        console.log(err);
    }
}



main();
