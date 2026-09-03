let obj = {
    name:"Nitesh"
}

console.log(obj);
console.log(obj.name);
// console.log(obj.Prototype);
obj.__proto__.a = 10;
console.log(obj.__proto__); // how to access object obj prototype

let res=obj.toString();
console.log(res);
console.log(obj.a);

let arr = [1,2,3,4,5];
console.dir(arr);
arr.push(6);

let arr2 = ["banana","orange"];
arr2.push("pineapple");
console.dir(arr2);

console.log(arr2.__proto__ == arr.__proto__);
console.log(arr.__proto__==obj.__proto__);

let str = new String("Rahul");
console.log(str);
console.log(str.__proto__==obj.__proto__);
let str2= "Raghav";
let res2=str2.toUpperCase();
console.log(res2);

let a = new Number(10);
let res3=a.toFixed();
console.log(a);
console.log(res3);

