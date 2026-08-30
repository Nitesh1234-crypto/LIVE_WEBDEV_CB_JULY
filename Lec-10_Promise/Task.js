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
             if(amount<=bankbalance){
       
            bankbalance = bankbalance - amount;
            resolve("payment sucessfull")
            return;
           
        }
        
       reject("insufficient balance")
        })
       
 

}

// calculatePrice(2)
// .then((amount)=>{
//     console.log(amount);
//     return buyProduct(amount);
// })
// .then((message)=>{
//     console.log(message);
// })
// .catch((err)=>{
//     console.log(err);
// })


//async / await
/**
 * let amount = calculatePrice(2);
 * let message = buyProduct(amount);
 * console.log(message);
 */


 