console.log(a); // not define X --> undefine
var a=10;

fun();
function fun(){
    var a;
    console.log(a); //10--> Aman/Akshat/Neha //undefine -->vivek
     a=50;
    function foo(){
        console.log(a); //undefine //100?
        var a=100;
    }
    console.log(a); //50
    foo();
}


