// function sum(a,b,c,d){
//     return a+b+c+d
// }
// sum(2,3,4,5) //14;

let sum=(a)=>{
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a+b+c+d;
            }
        }
    }
}


let out=sum(2)(3)(4)(5);
console.log(out);

//f1(3)(4)
//f2(4)(5)

// function buy(itemId){

// }

// function deductAmount(amount,userBankDetail){

// }

mul(2)(3)(4)(5);