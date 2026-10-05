const express = require("express");
const fs = require("fs"); //file system
const http = require("http");

const app = express();
app.listen(3000,()=>{
    console.log("server started")
})