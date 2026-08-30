let products = [
    {
        id:1,
        "product_Name":"iphone 17 pro",
        "product_price" : 145000
    },
    {
        id:2,
        "product_Name":"note 8 pro",
        "product_price" : 100000
    },
    {
        id:3,
        "product_Name":"tv",
        "product_price" : 56000
    }

]

let bankbalance = 1000000;

//dusra
function calculatePrice(productId){
 return new Promise((resolve,reject)=>{
 let flag = false;
    products.forEach((product)=>{
        if(product.id === productId ){
            flag=true;
            resolve(product.product_price)
            return;
        }
    })
      if(!flag){
         reject("Product not found!!")
      }
   
 })
}
//dusra
function buyProduct(amount){
   
        //login\

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                 if(amount<=bankbalance){
       
            bankbalance = bankbalance - amount;
            resolve("payment sucessfull")
            return;
           
            }
        
            reject("insufficient balance")
            },3000)
            
        })
       
 

}

//async / await
/**
 * let amount = calculatePrice(2);
 * let message = buyProduct(amount);
 * console.log(message);
 */
async function purchaseProduct(){
    try {
        let amount = await calculatePrice(2); //wait for promise to complete - either resolve or reject
        console.log(amount);
        let message = await buyProduct(amount);
        console.log(message);
        console.log(bankbalance);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("all done")
    }
    
  
}
purchaseProduct();

function sum(a,b){
    console.log(a+b);
}
sum(2,3);
console.log("welcome to my application");
console.log("what you want to do today")

//what does async function return -- > Promise return krta hai
 