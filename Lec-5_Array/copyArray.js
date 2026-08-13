
//how to copy an array

let oldArray = [1,2,3,4,5,6];
let copyArray = oldArray;
// console.log(copyArray);
// copyArray[2] = 10;
// console.log(copyArray);
// console.log(oldArray);

// operator : spread operator

let copyArray2 = [...oldArray] // [1,2,3,4,5,6]

copyArray2[2] = 10;
// console.log(copyArray2);

// ......................
        // 0 1  2   3 4   5
let arr = [1,2,[3,4],5,6,[7,[8]]] //2 level --> 1st level -- 1,2,5,6
            //. 0 1       0  1 
            //               0                                   //2nd level -- [3,4] [7]
                                            // 3rd level -->8
let copy = [...arr];
// console.log(copy);
// copy[0]=10;
// console.log(copy);
// console.log(arr);
copy[2][0] = 30;
// console.log(copy);
// console.log(arr);
//[3,4]

//deep copy 
/**
 * change array into string
 * string wapis convert kr do array.
 */
// let strArr = arr.toLocaleString();
// console.log(String(arr));
// let arr2 = [1];
// console.log(String(arr2));

//JSON --> javascript object notation
// 1. let out =JSON.stringfy(arr) --> convert object into string form
//2. JSON.parse(out) --> convert string JSON form back into object (arr)

let out = JSON.stringify(arr);
// console.log(out);
let parseArr = JSON.parse(out);
// console.log(parseArr);
parseArr[2][0] = 300;
console.log(arr);
console.log(parseArr);
