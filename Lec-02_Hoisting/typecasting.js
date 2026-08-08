let num = Number("32");
console.log(num);
// to check type of any variable or value
//  we have a operator called typeof
console.log(typeof "32");
console.log(typeof num);
let value=String(567)
console.log(value);
console.log(typeof value);
let val2 = Number("abc");
console.log(val2);

//[];
let arr = Number([]);
console.log(arr);
console.log(Number(""));
console.log(Number("     "))
console.log(Number("_________"));
console.log(Number(".        "));
console.log(String([]));
console.log(typeof String([1,2,3]));//"1,2,3"
console.log(Number([1,2,3]));
console.log(String({})); //""

let obj ={
    a:10,
    b:20

}
console.log(String(obj));
console.log(Number({}))//nan-->

//Boolean
/*
"{
"a":10,
"b":20
}
"
*/
