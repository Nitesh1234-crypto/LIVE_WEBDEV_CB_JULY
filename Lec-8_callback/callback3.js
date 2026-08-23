//a,b numbers hai --> sum ->result * val -->result - val ==> result print;

//file read-->function readFileSync(filepath){}
//file read --> function readFileAsync(){}

// let fileData = readFileSync("notes.txt");
// readFileAsync("notes.txt",function(data){
//     console.log(data)
// })


//works dfhdsjkfsdfdsjfjsd


function sum(a,b,callback){
    setTimeout(()=>{
        let res = a+b;
        // return res;
        callback(res);
    },0)
}

function mult(res,val,callback){
    setTimeout(()=>{
        let res2 = res*val;
        // return res;
        callback(res2)
    },0)
}
function sub(res,val,callback){
    setTimeout(()=>{
        let res3= res-val;
        // return res3;
        callback(res3);
    },0)
}

//sum -> res*val->res-val

// let out = sum(2,3);
// console.log(out);
// let out2 = mult(out,5);
// console.log(out2);
// let out3 = sub(out2,2);
// console.log(out3);
sum(2,3,function(data){
    console.log(data);
    mult(data,5,function(data2){
        console.log(data2)
        sub(data2,2,function(data3){
            console.log(data3);
        })
    })
})

