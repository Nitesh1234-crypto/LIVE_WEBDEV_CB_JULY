const fs = require("fs");
function writeFilePromise(filePath,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,data,function(err){
            if(err) return reject(err);
            resolve("data is written in file"+" "+ filePath);
        })
    })

}

function readFilePromise(filePath){
 return new Promise((resolve,reject)=>{
        fs.readFile(filePath,"utf-8",function(err,data){
            if(err) return reject(err);
            resolve(data);
        })
 })
}

module.exports.writeFilePromise=writeFilePromise;
module.exports.readFilePromise=readFilePromise;