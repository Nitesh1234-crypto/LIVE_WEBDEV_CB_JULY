const myFs = require("./fsModuleFunctions/fsPromise");


// myFs.writeFilePromise("notes.txt","mera bnaya hua function hai ye")
// .then((message)=>{
//  console.log(message);
// })
// .catch((err)=>{
//  console.log(err);
// })

myFs.readFilePromise("notes.txt")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

