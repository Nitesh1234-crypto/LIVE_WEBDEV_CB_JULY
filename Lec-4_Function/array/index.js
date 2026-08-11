let arr = [];
console.log(typeof arr);
//length
console.log(arr.length);
console.log(arr[99]);
// arr[0] = undefined;
arr[0] = null;
console.log(arr.length);

//set --> index
//index start from 0;
// 0 1 2 3 4 5
//[1,2,3,4,5,6]
//set
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
console.log(arr);

//to read at any particular index
console.log(arr);
//get
let val = arr[2];
console.log(val)


//how to add new val at last; --> push


//[10,20,30] ==> 40 ==> [10,20,30,40]

let arr2 = [10,20,30,40];
arr2.push(50);
console.log(arr2);

// method to remove element from last

arr2.pop();
arr2.pop();
arr2.pop();
console.log(arr2);


// int[] arr = {2,3,"4",5} X
// we can store multiple type in array.
let values = [2,3,"hello world", true,false, "hi", "coding blocks"]
console.log(values[4]);

// method to add value at start
values.unshift(10);
console.log(values);

//method to remove value at start;
values.shift();
console.log(values);

//method to remove at any particular index

values.splice(2,1) //index, length
console.log(values);
let someoutput=values.splice(2) // if no second argument is passed
//then all the element including the index will be deleted
console.log(values);
console.log(someoutput);
