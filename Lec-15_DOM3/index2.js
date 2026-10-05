let body = document.querySelector("body");
let grandParent = document.querySelector(".grandParent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");


body.addEventListener("click",function(e){
    console.log("body pe click hua");
})

grandParent.addEventListener("click",function(e){
    console.log("grand parent pe click hua");
      e.stopPropagation();
})

parent.addEventListener("click",function(e){
    console.log("parent pe click hua");
})
child.addEventListener("click",function(e){
    console.log("child pe click hua");
  
})