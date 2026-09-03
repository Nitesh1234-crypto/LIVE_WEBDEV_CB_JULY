let user = {
    name:"Nitesh",
    age:25,
    getAge : function(){
        return this.age;
    }
}
let age=user.getAge(); //implicit bind ---> user
console.log(age);



// window.name="Neha";
function getName(){
    console.log(this); //implicit bind ---> global object
    return this.name;
}
console.log(getName()); // this ---> global object (Node environment);/window ( browser)



let user2={
    name:"Raghav",

}
let user3={
    name:"Pranjal"
}

user2.getName = getName; //{name:"Raghav",getName:function(){return this.name}}
user3.getName = getName;

console.log(user2.getName()); //
console.log(user3.getName());