
//extends
//super

class Vehical{
    constructor(brand,color,model){
        this.brand=brand;
        this.color=color;
        this.model=model;
    }
    getbrand(){
        return this.brand;

    }
    getcolor(){
        return this.color;
    }
    getmodel(){
        return this.model;
    }
}

class Bike extends Vehical{
    constructor(brand,color,model,ABS){
        super(brand,color,model); // super keyword calls parent class contructor
        this.ABS=ABS
    }
    getABS(){
        return this.ABS;
    }

}

let b1 = new Bike("Honda","Silver","Honda Activa","Yes");

console.log(b1.getbrand());


//static
class Car extends Vehical{
    #brake = true ; //private property
    #airbags = "No"; //private property are only accessible inside the class
    constructor(name,brand,color,airBags){
        super(name,brand,color);
        this.#airbags=airBags;
    }
  static openAirBags(){
        console.log("air bags open !!!!!")
    }
    getBrake(){
        return this.#brake;
    }
    setBrake(value){
        this.#brake = value;
    }
    getairbags(){
        return this.#airbags;
    }
}

let c1 = new Car("fortuner","Tyota","white","yes");

console.log(c1);
console.log(c1.getairbags());
// c1.openAirBags(); //without creating an object you can not call class methods

Car.openAirBags(); // static --> you can call static method without creating an object of the class;

console.log(typeof Car);
console.log(c1.getBrake());
// console.log(c1.#brake);
// c1.#brake = false;

c1.setBrake(false);
console.log(c1.getBrake());

// console.log(Bike.prototype);