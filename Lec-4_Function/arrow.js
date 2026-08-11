let sum = (a,b)=>{
    return a+b;
}
let output=sum(2,3);
// console.log(output);

// property
// 1. if no curly bracket then the value is by default return
let sub = (a,b) => a-b;
let out2 = sub(10,5);
// console.log(out2)

// 2. if single argument then there is not need of paranthese
// let mul = (a)=> a*5;
let mul = a => a*5;
let out3 = mul(3);
console.log(out3);
// function decalaration --> function expression

function outer(){ // function decalartion
    console.log("outer")
}

let inner = function(cb){ // function expression
    console.log("inner");
    console.log(cb);
    cb();
}
inner(()=>{ // function dec, annonymous, callback
    console.log("arrow function passed")
})