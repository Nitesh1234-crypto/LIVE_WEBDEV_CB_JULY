function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
console.log("hello");
// module.exports.sum=sum;
// module.exports.sub=sub;
// module.exports.mul = mul;

// module.exports = {
//     sum:sum,
//     sub:sub,
//     mul:mul
// }
let dog = "bark";
let cat = "meow"
module.exports = {
    sum,
    sub,
    mul,
    dog,
    cat
}