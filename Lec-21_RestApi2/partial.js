// let obj1={
//     a:10,
//     b:20,
//     c:30
// }

// // let obj2 = {...obj1,d:10}
// // let obj2={...obj1,a:40} //{a:10,b:20,c:30,a:40}
// let oo = {a:100,b:50}
// let obj2 = {...obj1,...oo};


// console.log(obj2);

// let user={
//     e:2,
//     f:1,
//     g:4
// }
// let body={
//     f:30
// }

// user={...user,...body}
// console.log(user);


let allusers=[
    {
       id:1,
       name:"Pranjal"
    },
    {
        id:2,
        name:"Nitesh"
    }
]

let users = allusers.filter((u)=>{
    return u.id==2;
})
// console.log(users[0]);
// console.log(allusers[1]==users[0]);
let obj = users[0];
let obj2 = allusers[1];
console.log(obj);
console.log(obj2);
console.log(obj==obj2);


// console.log(obj==obj3);

// obj.name="Rahul";
obj2 = {
    id:2,
    name:"Prince"
}
console.log(obj2);
allusers[1]=obj2;

console.log(allusers[1]);


