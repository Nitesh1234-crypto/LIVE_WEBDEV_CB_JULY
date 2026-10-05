const fs = require("fs");


fs.writeFile("notes2.txt","hello world2 asynchronously",function(err){
 if(err) return console.log(err);
 console.log("data written");
});

// fs.readFile("notes.txt","utf-8",function(err,data){
//     if(err) return console.log("error is ",err);
//     console.log(data);
// });
// console.log("hi");

