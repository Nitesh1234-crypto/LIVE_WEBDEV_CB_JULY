
console.log("start");
const fs = require("fs");

setTimeout(()=>{
    console.log("timeout 1");
},0)
setImmediate(()=>{
    console.log("immediate 1");
})
setTimeout(()=>{
    console.log("timeout 2");
},1000);

fs.readFile("notes.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data);
    setTimeout(()=>{
        console.log("timer 3")
    },0)
    setImmediate(()=>{
        console.log("immediate 2")
    })
    setImmediate(()=>{
        console.log("immediate 3")
    })

})

function isAllowed(age){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age<18){
                reject("not allowed")
            }else{
                resolve("allowed")
            }
        },0)
        
    })
}
isAllowed(19)
.then((message)=>{
    console.log(message)
})
.catch((err)=>{
    console.log(err)
})

process.nextTick(()=>{
    console.log("next tick")
})

console.log("end");

// neha --> start, end, timeout1 , immediate 1,hello world ,  timeout2

//rahul --> start, end, t1, im1, data, im2,t3,t2
