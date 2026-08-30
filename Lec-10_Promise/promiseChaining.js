function sum2(a,b){
    let p = new Promise((resolve,reject)=>{
         if (a==undefined || b == undefined){
            reject("sum: both a and b argument should be passed");
        }
        else if(typeof a != "number" || typeof b !="number"){
            reject("sum: both argument should be of type number");
        }
        else{
            setTimeout(()=>{
                 resolve(a+b);
            },1000)
           
        }
    })
    return p;
}
function mult(a,b){
      return new Promise((resolve,reject)=>{
         if (a==undefined || b == undefined){
            reject("mul:both a and b argument should be passed");
        }
        else if(typeof a != "number" || typeof b !="number"){
            reject("mult: both argument should be of type number");
        }
        else{
            setTimeout(()=>{
                 resolve(a*b);
            },500)
           
        }
    })
    
}
// sum2(2,3)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//   console.log(err);
// })

// mult(3,4)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//   console.log(err);
// })
//promise chaining

sum2(2,3)
.then((data)=>{
    console.log(data);
    return mult(3,"4")
})
.then((data)=>{
    console.log(data);
    console.log("done")
})
.catch((err)=>{
    console.log(err);
})