const fs = require("fs");
const myFs = require("./fsModuleFunctions/fsPromise")

fs.readFile("notes.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    fs.readFile("notes2.txt","utf-8",function(err,data2){
        if(err) return console.log(err);
        let resultData = data1+"\n" + data2;
        fs.writeFile("notes4.txt",resultData,function(err){
            if(err) return console.log(err);
            console.log("task done");
        })
    })
})

async function Task2(){
    try {
        let data1 = await myFs.readFilePromise("notes.txt");
        let data2 = await myFs.readFilePromise("notes2.txt");
        let resultData = data1+"\n"+data2;
        let message = await myFs.writeFilePromise("notes5.txt",resultData);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
    
}
Task2();