// function getAge(){
//     console.log(this.age);
// }


// let user1 = {
//     age:25,
//     name:"Nitesh"
// }
// let user2={
//     age:24,
//     name:"sameer"
// }
// let user3={
//     age:20,
//     name:"Neha"
// }
// getAge();  //25 ,20,24
// getAge.call(user1);
// getAge.call(user3);

// let student = {
//     name:"Prince",
//     roll:12345,
//     getName:function(){
//         console.log(this.name);
//     },
//     getAvgMarks:function(mark1,mark2,mark3){
//         console.log((mark1+mark2+mark3)/3);
//     }
// }
// student.getName();//Prince
// student.getName.call(user2);

// student.getAvgMarks(45,75,85);

// student.getAvgMarks.call(user1,20,30,40);


// //apply
// let user3Marks = [40,50,60];
// student.getAvgMarks.call(user3,user3Marks[0],user3Marks[1],user3Marks[2]);
// student.getName.apply(user3);
// student.getAvgMarks.apply(user3,user3Marks);


//bind
 function applyBrake(){
        this.stop = true;
        console.log(this.stop);
    }
let car1={
    name:"maruti suzuki",
    brand:"maruti",
    stop:false,
}

let car2={
    name:"fortuner",
    brand:"toyata",
    stop:false,
}
applyBrake.call(car2);
let car1brake=applyBrake.bind(car1);

console.log(car1)
console.log(car2);
setTimeout(car1brake,2000)

setTimeout(()=>{
    console.log(car1);
},2500)
