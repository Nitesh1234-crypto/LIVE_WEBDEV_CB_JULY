//Restaurant

function starter(callback){
  setTimeout(()=>{
    console.log("starter prepared");
    callback();
  },2000)
}
function drinks(callback){
  setTimeout(()=>{
        console.log("drink is Ready");
       callback()
  },500)
}

function mainCourse(callback){
 setTimeout(()=>{
    console.log("main course prepared");
    callback();
  },5000)
}

function dessert(callback){
 setTimeout(()=>{
    console.log("dessert prepared");
   callback();
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




//asynchronous function ---> jb tu khtm ho jaye toh mujhe inform kr diyo (callback function)

//client 

// starter(function(){
//     drinks(function(){
//         mainCourse(function(){
//             dessert(function(){
//                 bill(function(){
//                     console.log("auto pkd ke ghr chalo")
//                 })
//             })
//         })
//     })
// })

mainCourse(()=>{
    drinks(()=>{
        starter(function(){
            bill(function(){
                console.log("auto pkd ke ghr chalo")
            })
        })
    })
})


//agar next function ke andar mujhe jo data bhjna hai vo previous function se aayega !!


