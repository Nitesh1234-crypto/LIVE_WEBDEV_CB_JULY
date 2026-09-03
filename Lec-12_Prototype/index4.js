let obj = {
    a:10,
    b:20
}
let obj2 = {
    c:30,
    d:40
}
obj.__proto__ = obj2;
console.log(obj);
console.log(obj.c);


let str = new String("Nitesh");
// str.charAt(i) = "R";
// console.log(str);

String.prototype.__proto__=Array.prototype;
console.log(str);


// obj ---> prototype -- > Object.prototype;(predifne function)
//obj -- > prototype --> obj2
