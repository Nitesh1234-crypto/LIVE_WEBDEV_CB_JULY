// window.name= "Neha";
let user = {
    name:"Pranjal",
    getName:function(){
        console.log(this.name);
    }
}
let user2={
    name:"Raghav"
}
let name = user.name;
console.log(name);
let fn = user.getName;
console.log(fn);
// fn();
//explicit;
fn.call(user);
fn.call(user2);