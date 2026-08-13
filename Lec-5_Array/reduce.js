//use reduce 
// when you want to perform some operation and return a single value

// return sum of all element in array;
let arr = [1,2,3,4,5,6,7]
// let sum=0;
// for(let i =0;i<arr.length;i++){
//     console.log(sum);
//     sum+=arr[i]
//     console.log(sum);
// }
// return sum;

let totalsum = arr.reduce((acc,curr)=>{
//acc = 0, curr=1; // acc=1, curr =2
console.log(acc,curr);
return acc+curr; // wapis store acc ke andar for next iteration
})
console.log(totalsum);


let arr3 = [2,4,6,8,10];
//to return product of all the element in array.

let multiplyResult = arr3.reduce((acc,curr)=>{
 return acc*curr;
},1)
console.log(multiplyResult);


//how to copy an array

let oldArray = [1,2,3,4,5,6];
let copyArray = oldArray;
console.log(copyArray);
