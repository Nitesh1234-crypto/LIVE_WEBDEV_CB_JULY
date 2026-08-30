function fetchData(callback){
    setTimeout(()=>{
        console.log("fetching....")
        let usersData = [{id:1,name:"Nitesh"},{id:2,name:"Raghav"}];
        callback(usersData);
    },0)
   
}
function sum(a,b){
    return a+b;
}
fetchData(function(data){
     console.log("run after data is fetched");
     //work on data
    data.map((u)=>{
        console.log(u.name);
    })
   
});
let result = sum(2,3);
console.log(result);
// i want this code to run after fetchData
// console.log("run after data is fetched");