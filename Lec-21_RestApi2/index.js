

const express = require("express");
const app = express();

let allusers = [];
app.use(express.json()) //it parse req.body if content type is json
//[nitesh,nitesh@gmail.com,1234,Raghav,r@gmail.com,2345]
app.use(express.urlencoded()) // it parse req.body if content type is urlencoded

app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/users",(req,res)=>{
    res.json(allusers);
})
//resgister user --> name,email,password

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/users/addusers",(req,res)=>{
    let {name,email,password} = req.body;
    let newUser = {
        id: Math.floor(Math.random()*100000000),
        name:name,
        email:email,
        password:password
    }
    allusers.push(newUser);
    res.send("user register successfully!!")
})

app.delete("/users/deleteuser",(req,res)=>{
    let {id} = req.query;
    let newAllUsers = allusers.filter((u)=>{
        return u.id!=id;
    })
    allusers=newAllUsers;
    res.send("user deleted")
})

app.put("/users/updateuser/:id",(req,res)=>{
    let {id} = req.params;
    let {name,email,password} = req.body;
    let userArr= allusers.filter((u)=>{
        return u.id==id
    })
    let user = userArr[0]; //{name,email,password}
    user.name=name;
    user.email=email;
    user.password=password;

    res.send("user updated")

})
app.patch("/users/updateuser/:id",(req,res)=>{
    let {id} = req.params;
    let userArr = allusers.filter((u)=>{
        return u.id==id;
    })
    let user = userArr[0];
    user={...user,...req.body};
    for(let i =0;i<allusers.length;i++){
        if(allusers[i].id==id){
            allusers[i]=user;
        }
    }
    res.send("user updated")
})

app.listen(3333,()=>{
    console.log("server started")
})