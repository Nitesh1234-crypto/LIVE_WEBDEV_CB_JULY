


//prototype chaining
let user = {
    name:"Neha"
}
console.log(user.__proto__ == Object.prototype);

let str= new String("Prince");
console.log(str);
console.log(str.__proto__.__proto__==Object.prototype);

console.log(str.toLocaleString());

console.log(str.__proto__.__proto__.__proto__);