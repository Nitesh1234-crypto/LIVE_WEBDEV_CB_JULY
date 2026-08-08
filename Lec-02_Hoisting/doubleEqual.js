// console.log([]==0);
// console.log([]=="");
// console.log(""==0);
// console.log("       "==0);
// console.log(""== "      "); //false


// console.log([]===0);
// console.log([]==="");
// console.log(""===0);
// console.log("       "===0);
// console.log(""==="      "); //false

// console.log(0===0) // true

console.log([]==[]);
console.log({}=={});//false

// let arr = [1,2,3];
// let arr2 = arr;
// console.log(arr==arr2); //true


let arr = [1,2,3]; //20k
let arr2 = arr ; //[1,2,3]; x ===> 20k
let arr3 =[1,2,3]
console.log(arr==arr2); //true
console.log(arr==arr3); //false

arr2[0] = 10;
console.log(arr);


let newArr = [];
for(let i =0;i<arr.length;i++){
    newArr[i] = arr[i]
}
console.log(newArr);
newArr[1] = 20;
console.log(arr);
console.log(newArr);



