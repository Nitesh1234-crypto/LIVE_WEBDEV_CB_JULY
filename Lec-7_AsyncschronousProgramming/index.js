console.log("hi");
let id1=setTimeout(function(){
 let a =10;
 let b = 20;
 console.log("sum"+ " "+a+b);
},3000);
console.log("hi2");
function mul(){
    let a =2;
    let b=5;
    console.log("mul"+ " "+a*b);
}
let id2=setTimeout(mul,4000);
console.log("hi3");
//setInterval
//stop watch
// let time = 0;

let id3=setInterval(function(){
    console.log("i will run continuosly after one second ");
},1000)
// time=5;
//stop setTimeout and setInterval 

//1. clearTimeout();
//2. clearInterval();
// clearTimeout()
console.log(id1);
console.log(id2);
console.log(id3);
//id give unique identity to each setTimeout and setInterval.
clearTimeout(id2);
// clearInterval(id3);// work --> 5second
setTimeout(()=>{
clearInterval(id3);
},5000)

console.log("bye gudnight!!")



