const fs = require("fs");

// fs.appendFile("notes2.txt","\nbye bye world",function(err){
//     if(err) return console.log(err);
//     console.log("written");
// })

fs.readFile("notes2.txt","utf-8",function(err,data){
    if(err) return console.log(err);
        fs.writeFile("notes2.txt",data+"\n bye bye world",function(err){
        if(err) return console.log(err);
        console.log("written");
    })
})

