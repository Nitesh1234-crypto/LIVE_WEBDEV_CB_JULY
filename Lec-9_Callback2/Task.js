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
function calculatePrice(productId,callback){
 setTimeout(()=>{
    //logic
    let flag = false;
    products.forEach((product)=>{
        if(product.id === productId ){
            flag=true;
            callback(null,product.product_price);
            callback(null,product.product_price);
            return;
        }
    })
      if(!flag){
         callback("product not found",null);
      }
   
 })
}
//dusra
function buyProduct(amount,callback){
    setTimeout(()=>{
        //login
        if(amount<=bankbalance){
       
            bankbalance = bankbalance - amount;
            callback(null,"payment successfull");
            return;
           
        }
        
        callback("insufficient balance",null);
    })

}

//aap
calculatePrice(2,function(err,amount){
    //   console.log(err,amount);
    if(err) return console.log(err);
  
    buyProduct(amount, function(err,message){
        // console.log(err,message);
        if(err) return console.log(err);
        console.log(message);
        console.log(bankbalance);
    })

})

//disadvantage of callback

// 1. callback hell : callback hell is a nesting of multiple callbacks, creating a pyramid like stucture
//   code readibilty reduces, difficult to manage code.

//2. Inversion of control : apke hath mai control nhi hota dusre ke pass hota hai


//alternative  -- Promise