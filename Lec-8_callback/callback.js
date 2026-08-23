//Restaurant

function starter(callback){
  setTimeout(()=>{
    console.log("starter prepared");
    // callback(mainCourse); //drinks
    bill(function(){
        console.log("auto leke ghr chlo")
    })
  },2000)
}
function drinks(callback){
  setTimeout(()=>{
        console.log("drink is Ready");
        // callback(dessert) //maincourse
        callback(bill);
  },500)
}

function mainCourse(callback){
 setTimeout(()=>{
    console.log("main course prepared");
    // callback(bill) //dessert
    callback(starter);
  },5000)
}

function dessert(callback){
 setTimeout(()=>{
    console.log("dessert prepared");
    callback(function(){
        console.log("auto leke ghr chalo")
    })
  },1000)
}

function bill(callback){
 setTimeout(()=>{
    console.log("bill paid");
    callback();
  },100)
}

//order-1: starter ---> drinks --> mainCourse --> dessert --> bill

//order -2 maincourse --> drinks --> starter --> bill

// starter(drinks)
mainCourse(drinks);


//asynchronous function ---> jb tu khtm ho jaye toh mujhe inform kr diyo (callback function)

