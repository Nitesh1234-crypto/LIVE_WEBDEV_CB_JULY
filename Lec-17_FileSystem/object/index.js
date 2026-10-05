let userData= {
    name:"Nitesh",
    age:25,
    ph:999999999999
}

const fs = require("fs");
fs.writeFile("user.json",JSON.stringify(userData),function(err){
    if(err) console.log(err);
    console.log("written");
})

// console.log(String(userData));

// fs.readFile("user.json","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(typeof data);
//     let user = JSON.parse(data);
//     console.log(typeof user);
//     console.log(user.name);
// })