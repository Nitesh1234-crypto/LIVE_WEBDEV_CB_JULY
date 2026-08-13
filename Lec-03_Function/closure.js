// function fun(){
//     let a = 10;
//     function foo(){
//         a++;
//         console.log(a);
        
//     }
//     foo();
// }
// fun();
var c = 10;
function fun(){
    let a = 10;
    function foo(){
        let d = 10;
        a++;
        console.log(a);
        
    }
    return foo;
}
let f1=fun();
console.log(f1);
f1(); // 11
f1()

let f2= fun();
f2();