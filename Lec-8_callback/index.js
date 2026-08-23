
function fun(){
    setTimeout(()=>{
        console.log("PS5");
    },2000)

}

function study(callback){
    setTimeout(()=>{
        console.log("DSA homework")
        console.log("web homework")
        console.log("college assignment");
        callback();
    },5000)

// callback();
}
//client. --> study ---> fun
study(fun);
// study();
// fun();
console.log("chips");
console.log("songs");