//Array Method
// slice

let arr = [1,2,3,4,5,6,7];
let rangeValue = arr.slice(1,3) //include first and exclude last
console.log(rangeValue); // slice method return and array;
console.log(arr);
let anything=arr.splice(1,2);// first argument start index, second no. of item you want to delete
console.log(anything);
console.log(arr);
//hello world --> str.substring(star,end)==>1,3==> first index
//  include hota hai and last index exclude rhta hai 
//[1,2,5,6,7]
// console.log(arr[-1]);//7 in python
console.log(arr.at(-3));


//loop --> map,filter and reduce
//map , filter and reduce are higher order function.
// they are used to iterate/loop over an array. [1,2,3,4,5,6];

// map : map is used if you want to perform any operation 
// in the array, example like multiple each element of an array with 2.

let originalArray = [1,2,3,4,5] // ==> [2,4,6,8,10]

let newArray=originalArray.map((ele)=>{
ele = ele*2;
return ele;
})
console.log(originalArray);
console.log(newArray);

//filter--> // mujhe array mai se odd value nikal ke de

let oddArray=originalArray.filter((ele)=>{
    if(ele%2 == 1) return ele;

})
console.log(originalArray);
console.log(oddArray);




// % modulo operator ==> reminder nikal ke deta hai 
//5%2 == 1 ; 6%2 ==0

let arr2 = [1,2,3,4,5,6,7,8,9];
let result=arr2.map((e)=>{
    if(e%2==1) return e;
  
})

let result2 = arr2.filter((e)=>{
   if(e%2==0) return e;
})
console.log(result2);
// console.log(result);
// function fun(){
//     console.log("hi");
// }
// console.log(fun());

let str = "";//falsy
if(str){
    console.log("hi");
}