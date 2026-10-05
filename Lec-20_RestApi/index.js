// const express = require("express");
// const app = express();
// let users=[
//     {
//         id:1,
//         name:"Nitesh"
//     },
//      {
//         id:2,
//         name:"Prince"
//     }
// ]
// app.get("/",(req,res)=>{
//     res.send("hello world")

// })
// app.get("/users/:id",(req,res)=>{
//     // console.log(req.params);
//     let {id} = req.params; //{}
//     console.log("id is :"+id);
//     //send the user with id == id
//     res.send("ok")
// })
// app.get("/products/:pricelt/:color",(req,res)=>{
//     let {pricelt,color} = req.params;
//     console.log(pricelt,color);
//     res.send("ok");
// })

// let allmovies =[]

// //all movies fetch
// app.get("/movies",(req,res)=>{
//     res.send(allmovies);
// })
// //fetch movie with id
// app.get("/movies/:id",(req,res)=>{
//     let {id} = req.params;
//     let movies = allmovies.filter((m)=>{
//         return m.id==id;
//     })
//     res.json(movies[0]);
// })
// //fetch movie with genre

// app.get("/movies/genre",(req,res)=>{
//     let {genre} = req.query;
//     let movies = allmovies.filter((m)=>{
//         return m.genre==genre;
//     })
//     res.json(movies);
// })



// app.listen(4444,()=>{
//     console.log("server started")
// })




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
        name:name,
        email:email,
        password:password
    }
    allusers.push(newUser);
    res.send("user register successfully!!")
})



app.listen(3333,()=>{
    console.log("server started")
})