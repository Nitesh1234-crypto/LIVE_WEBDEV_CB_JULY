let p = new Promise((resolve,reject)=>{
    
         let permission= false;
    //if promise fullfiled
    if(permission)  resolve("milne aa gya");
    else{
        //else promise reject
         reject("ghr se permission nhi milli");
    }
   
   
})

// console.log(p);
// setTimeout(()=>{
//     console.log(p);
// },2000)
console.log(p);
p.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})

console.log("hi");
console.log("hello");


