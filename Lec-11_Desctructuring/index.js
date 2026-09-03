let user = {
    name:"Nitesh",
    age:25,
    college:"NSUT"
}

let {age,name,college} = user;

console.log(name,age,college);

let arr = ["Raghav","Neha","Rahul","Prince"];
let [name1,name2,name3,name4] = arr;
console.log(name1,name2,name3,name4);

//first and last value
let [firstName,,,lastname] = arr;
console.log(firstName,lastname);

//default value
let [f1,f2,f3,f4="Nitesh",f5="Neha"] = arr;
console.log(f1,f2,f3,f4,f5);

// function sum(a=10,b=20){
//     console.log(a+b);
// }
// sum(2)

function useState(){
    return ["statevariable","statefunction"];
}

let [state,setState]=useState();
console.log(state);  //statevariable
console.log(setState);//statefunction
