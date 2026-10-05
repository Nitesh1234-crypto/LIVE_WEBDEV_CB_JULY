

let obj = {
    a:10,
    b:20
}
let obj2={
    c:30,
    d:40,
   
  
}
// obj2.obj=obj; //{c:30,d:40,obj:{a:30,b:40}}

// console.log(obj2.a);
// console.log(obj2.obj.a);
obj2.__proto__ = obj;
console.log(obj2.a);