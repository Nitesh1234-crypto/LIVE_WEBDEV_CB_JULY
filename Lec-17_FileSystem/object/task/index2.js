const allUsers = [];
const fs = require("fs");
// const addUser = require("./index");
// addUser("Nitesh",25);
function addUser(name, age) {
    const user = {
        name: name,
        age: age
    };

    allUsers.push(user);
}

addUser("Nitesh", 25);
fs.writeFile("allusers.json",JSON.stringify(allUsers),function(err){
    if(err) return console.log(err);
    console.log("fdhfs")
})
