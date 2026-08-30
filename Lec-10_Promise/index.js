function sum(callback,a,b){
    setTimeout(()=>{
       if(typeof a != "number" || typeof b !="number"){
        return callback("both argument should be of type number",null);
       }
        callback(null,a+b);
    },0)
}

//cannot do .then or .catch because some function does not return a promise
// sum(function(err,data){},2,3)
// .then()
// .catch()

// create a function sum , which return a promise two add two values a and b

function sum2(a,b){
    let p = new Promise((resolve,reject)=>{
         if (a==undefined || b == undefined){
            reject("both a and b argument should be passed");
        }
        else if(typeof a != "number" || typeof b !="number"){
            reject("both argument should be of type number");
        }
        else{
            resolve(a+b);
        }
    })
    return p;
}
//sum2 is return a promise
sum2(2) // p
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

// let p = sum2(4,5);
// p.then()
// .catch()
// sum2(4,5) // both are same thing
// .then()
// .catch()
//doubt why p is not used
// function mul(a,b){
//     return a*b
// }
// let res=mul(2,3)
// console.log(res)

// Task : Create a function mult , which return a promise to 
// give product of two number a and b , if both a and b of type number.

function mult(a,b){
      return new Promise((resolve,reject)=>{
         if (a==undefined || b == undefined){
            reject("both a and b argument should be passed");
        }
        else if(typeof a != "number" || typeof b !="number"){
            reject("both argument should be of type number");
        }
        else{
            resolve(a*b);
        }
    })
    
}
mult(3,4)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})


console.log("hello everyone");



