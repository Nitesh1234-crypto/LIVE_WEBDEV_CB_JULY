console.log(a);
var a = 10;
console.log(a);
function fun(){
    console.log(a); // 10, undefined
    var a=20;
    function foo(){
        a++;
        console.log(a); //undefined
        var a=30;
    }
    foo();
}
fun();



// console.log(b);
// var b =30;
// outer();
// function outer(){
//     console.log("hello world");
// }