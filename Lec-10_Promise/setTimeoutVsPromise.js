setTimeout(()=>{
    console.log("hi");
},0)
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

//aur bhi bahut sare code
// fetch()
//expensiveCalCulation()

mult(3,4)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

// setTimeout(()=>{
//     console.log("hi");
// },0)


console.log("hello everyone");

//nidhi --> hi, 12, hello everyone.
//Neha --> hello everyone, 12, hi.
//Prajanl -- > hello everyone, 12, hi.
//Raghav --> hello everyone, hi, 12.