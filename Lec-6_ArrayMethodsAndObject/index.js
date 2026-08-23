
//includes
let arr = [2,3,4,5,6,"banana","orange","lion"];

console.log(arr.includes(5));//true;

if(arr.includes("banana")){
    //do some work
}

//join

let arr2 = ["the","sky","is","blue"];

let output = arr2.join(","); 
console.log(output);

//find

let result = arr.find((ele)=>{
    if(ele>2){
        return ele;
    }
});
console.log(result)

arr.map((ele,index)=>{
console.log(index,ele);
})
arr.filter((ele,index)=>{
 console.log(index);
})
arr.reduce((acc,curr,idx)=>{
    console.log(idx);
})


