//scope


// {
//     let b= 30;
//     var a=20;
//     //console.log(a,b); // 1. 20,30 //20,30
// }

// console.log(a); //2. 10 //10
// console.log(b); //2. error //error


var a=10;
var x=200
function fun(){
    var a=100;
    let b =30;
 
    function foo(){
        var a=50;
        let b=60;
        var x=300;
        console.log(a,b);
    }
    foo();
    console.log(a,b)
    console.log(x); 
}
fun();