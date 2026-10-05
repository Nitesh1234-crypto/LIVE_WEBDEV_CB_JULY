
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
}


let u1 = new User("Nitesh","nitesh@gmail.com");
console.log(u1);
let u2 = new User("Raghav","r@gmail.com");
console.log(u2);