//memoization
/**
{
 2 : 69
}
 */

// function expensiveCalculation(val){
//     // code -- 2min
//     // check storage[val] return stored value
//     let  cal = (val*10 + 5 - 2) * 3 // 2min
//     //return output
//     // add kr do storage { val: cal}
//     return cal;
// }
// let result1 = expensiveCalculation(2);
// //2min
// let result2 = expensiveCalculation(2); 
// //2min
// console.log(result1,result2);

/**
 * requirement --> function memo implement
 * 1. storage data structure --> array, object
 */

// let storage = [];// galat

function memoisationCalculation(){
    let storage = [];
    function calculation(val){
    // let storage = []; // galat tarika
   if(storage[val] != undefined){
    console.log("memo storage")
        return storage[val];
   }
   console.log("not memo")
    let result = (val*val + 236 ) * 3 + 5;
    storage[val] = result;
    return result;
    }
    return calculation;
}

// let out1 = calculation(33); // not memo
// let out2 = calculation(33); // memo storage
// let out3 = calculation(34); // not memo
// let out4 = calculation(33); //memo storage

let memocalculation=memoisationCalculation();
// storage[33] = 10; //storage is not define
let out1=memocalculation(33);//not memo
let out2= memocalculation(33);//memo storage