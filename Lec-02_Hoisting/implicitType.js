let val = "1";
let val2=1;
console.log(typeof (val+val2));
console.log(val - val2);

let str = "abc";
let str2 = "23";

let result = str + 1;
let result2 = str - 1;
let result3 = str++;
let result4 = str2++;
console.log(result);
console.log(result2);
console.log(result3);
console.log(str2);

//same data type no implicit typecasting
console.log([]+23); // if non-primitive or primitive 
//alway  non - primitive type cast hoga;

/**
 * "" + 23 --> "" + "23" --> "23"
 * 0 + 23 --> 23
 */

console.log([0] + 23); //023
console.log([0,1]+23); //"0,123"

console.log(23 - ["ab"]);//23 //22