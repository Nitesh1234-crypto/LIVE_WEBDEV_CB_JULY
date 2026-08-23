// // //object is key value pair.
// let user = {
   
//     name:"Nitesh",
//     age:25,
//     "which country": "India",
//     "#":"some value"
// }

// // //whenever you want to represent a real world entity , 

// // //how to access/get a value in object
// // //1. dot anotation
// // //2. bracket anotation

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user["which country"]);
// // console.log(user["#"]);
// // console.log(user["name"]);

// // //how to set values in object

// let obj = {

// }
// obj.b =10;
// // console.log(obj);
// //Task set "num is" : 60 in obj
// //arr[0] --> get , arr[0]=16 -->set

// //loop for___in
// // let key = "name"
// for(let key in user){
//     // console.log(typeof key); //string -->"name"
//     let value = user[key]; // dot annotation will not work because typeof key is string
//     console.log(value);
//     // console.log(user."name");
//     // console.log(user[key]);
// }
//             //target, src
// Object.assign(obj,user); // obj ke andar user ki sari values copy kr di
// console.log(obj); // target object modify ho jata hai

// // dusra tarike to copy these two object(obj and user) in newobject
// //spread operator
// // let arr = [1,2,3,4];
// // console.log(...arr);
// let newObj = {...obj,...user}; // previous object modify nhi hote
// console.log(newObj);

// //
// let arr1 = [1,2,3];
// let arr2 = ["banana","orange","pineApple"];

// //copy these two array and create a newArray.
// let newArray=[...arr1,...arr2];
// console.log(newArray);
// let obj2=Object.assign(user,obj,arr1);//multiple sources
// console.log(obj2);
// let student={
//     roll:123456,
//     name:"Raghav",
//     university:"APJ",
//     adress:"Bijnor"
// }
// let keys = Object.keys(student);
// console.log(keys); 
// let values= Object.values(student);
// console.log(values);

// //seal
// // Object.seal(student); // seal --> you cannot add more properties in that object
// // student.course="B.tech"; // new property will not add
// // student.name="Pranjal" // existing property can modify
// // console.log(student);
// Object.freeze(student);
// student.course="B.tech"; //new property will not add
// student.name="Pranjal"; // existing property can not be modify
// console.log(student);

let previousObj = {
    a:10,
    b:20,
    c:30,
    d:40
}
let arr=[1,2,3,4]
let newarr = [...arr,...[6,7,8]];
let newObject = {...previousObj};
console.log(newObject);
