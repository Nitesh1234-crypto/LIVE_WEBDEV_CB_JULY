const fs = require("fs");
console.log(process.argv);
let name = process.argv[2];
let age = process.argv[3];
fs.readFile("allusers.json","utf-8",function(err,data){
    if(data){
        //[{},{}]
        let newUser = {name:name,age:age};
        let allUsers= JSON.parse(data);
        allUsers.push(newUser);
        fs.writeFile("allusers.json",JSON.stringify(allUsers),function(err){
            if(err) return console.log(err);
            console.log("user added")
        })

    }else{
        let allUsers = [];
        let newUser =  {name:name,age:age};
        allUsers.push(newUser);
         fs.writeFile("allusers.json",JSON.stringify(allUsers),function(err){
            if(err) return console.log(err);
            console.log("user added")
        })
    }
})
