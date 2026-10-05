const {readFileSync,writeFileSync} = require("fs");//{writeFileSync:function,readFileSync}

// writeFileSync("notes.txt","hello world");

let data=readFileSync("notes.txt",{encoding:"utf-8"});
// console.log(data.toLocaleString());
console.log(data);


console.log("hi");
