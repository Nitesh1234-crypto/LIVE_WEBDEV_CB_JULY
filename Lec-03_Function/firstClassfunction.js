// //1. function ko app variable mai store kr skte ho

// let foo = function(){
//     console.log("hello world");
//     return 5;
// }
// // // foo();

// //2. you can pass function as argument
// function fun(val){
//     console.log(val); //?? undefined --> hello world
//     val(); //error: val is not a function
// }

// fun(foo); // foo is a callback function.

// function onefunction(){
//   function twofunction(){
//     console.log("i am two")
//   }
//   return twofunction;
// }
// let result =onefunction();
// console.log(typeof result);
// console.log(result());


//IIFE
(function(){
    console.log("i am iife");
})();


function fun(cb){
    console.log(cb);
}
fun(function(){})