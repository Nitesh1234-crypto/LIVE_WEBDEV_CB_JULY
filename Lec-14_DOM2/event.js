



//event


// let btn = document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     let h1 = document.createElement("h1");
//     h1.innerText = "wassuppp....!!!";
//     document.querySelector("body").prepend(h1);
// })

//append() --> last mai add hota hai
//prepend() -->first pe add krta hai

let btn = document.querySelector(".signup");
 let form= document.querySelector("form");
btn.addEventListener("click",function(){
  
    form.classList.toggle("hide");
})
let container= document.querySelector(".container");


container.addEventListener("click",function(){
   form.classList.add("hide")
})