//rest operator ===> spread operator
//syntax : ...
//...val ==> rest
function sum(...val){
    console.log(val);
    let totalSum=val.reduce((acc,cur)=>{
        return acc+cur;
    },0)
    return totalSum;

}
console.log(sum(10,20,30));
console.log(sum(1,2));
console.log(sum(1,2,3,4,5));