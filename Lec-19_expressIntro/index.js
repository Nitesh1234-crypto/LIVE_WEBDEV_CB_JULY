const express = require('express');
const app = express()
const port = 3001
let allusers = [
    {
        id:1,
        name:"Nitesh"
    },
     {
        id:2,
        name:"Pranjal"
    }
    ,
     {
        id:3,
        name:"Mayank"
    },
     {
        id:4,
        name:"Prince"
    }
]

let allProducts = [
    {
        id:1,
        colour:"black",
        brand:"Apple",
        price:150000
    },
     {
        id:2,
        colour:"red",
        brand:"samsung",
        price:95000
    },
     {
        id:3,
        colour:"red",
        brand:"samsung",
        price:50000
    },
     {
        id:4,
        colour:"blue",
        brand:"Mi",
        price:25000
    },
     {
        id:5,
        colour:"red",
        brand:"Apple",
        price:120000
    },
     {
        id:6,
        colour:"red",
        brand:"Apple",
        price:110000
    }
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.post("/about",(req,res)=>{
//     res.send("data is added")
// })
// app.get("/about",(req,res)=>{
//     res.send("<h1>about page 1</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send("about page 2");
// })
// app.get("/user",(req,res)=>{
//     let user = {
//         "name":"Nitesh",
//         "age" : 25
//     }
//     res.json(user);
// })
// app.get("/contact",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
//.  /about --> this is about page
//.  /contact --> this is contact page
app.get("/users",(req,res)=>{
    console.log(req.query.id);
    let userId = req.query.id;
    let user=allusers.filter((u)=>{
        return u.id == userId
    })
    console.log(user[0]);

    res.json(user[0]);
})

app.get("/products/filter",(req,res)=>{
    let {pricelt,colour} = req.query;
    let products = allProducts.filter((p)=>{
        // return p.price<pricelt && p.colour==colour;
        if(p.price<pricelt && p.colour==colour ){
            return p;
        }
    })
    res.json(products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})