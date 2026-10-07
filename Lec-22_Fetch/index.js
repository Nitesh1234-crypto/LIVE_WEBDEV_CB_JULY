const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
let posts = [{"id":68585555,"title":"This is my first post","body":"this post contain documentation regarding fetch ","userid":"1"}];
app.post("/addpost",(req,res)=>{
    let {title,body,userid} = req.body;
    let newPost = {
        id:Math.floor(Math.random()*100000000),
        title:title,
        body:body,
        userid:userid
    }
    posts.push(newPost);
    res.send("post added");
})
app.get("/posts",(req,res)=>{
    res.json(posts);
})
app.delete("/posts/deletepost/:id",(req,res)=>{
    let {id} = req.params;
    let postafterDelete = posts.filter((p)=>{
        return p.id!=id;
    })
    posts=postafterDelete;
    res.json({
        message:"post deleted"
    })
})
app.listen(4444,()=>{
    console.log("server started")
})