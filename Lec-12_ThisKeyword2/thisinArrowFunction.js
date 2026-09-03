// let obj={
//     name:"Nitesh",
//     getName:()=>{
//         console.log(this);
//         console.log(this.name);
//     }
// }

// obj.getName();

//arrow function does not have his own this


let obj2 = {
    name:"Raghav",
    getNameFun : function(){
        console.log(this);
        let obj3={
            name:"Neha",
            getName : ()=>{
                console.log(this);
                console.log(this.name);
            }
        }
        obj3.getName();
       
       
    }
}
obj2.getNameFun();



// let obj2 = {
//     name:"Raghav",
//     getNameFun : function(){
//         console.log(this);
       
//           let getName =()=>{
//                 console.log(this);
//                 console.log(this.name);
//             }
       
//         getName();
       
       
//     }
// }
// obj2.getNameFun();