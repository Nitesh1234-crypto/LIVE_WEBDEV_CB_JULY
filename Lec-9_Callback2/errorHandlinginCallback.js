
function sum(callback,a,b){
    setTimeout(()=>{
        if(a==undefined || b==undefined){
             return callback("both argument a and b should be passed",null);
        }
        if(typeof a !='number' || typeof b != 'number') return callback("both parameter should be of type number",null)
        let res = a+b;
        // return res;
        callback(null,res);
    },0)
}
function mult(callback,res,val){
    console.log(res,val);

    setTimeout(()=>{
        if(res ==undefined || val==undefined) return callback("both res and val should be passed",null);
        if(typeof res !="number" || typeof val !="number") return callback("both argument should be of type number",null)
        let res2 = res*val;
        // return res;
        callback(null,res2);
    },0)
}
function sub(callback,res,val){
    setTimeout(()=>{
         if(res ==undefined || val==undefined) return callback("both res and val should be passed",null);
        if(typeof res !="number" || typeof val !="number") return callback("both argument should be of type number",null)

        let res3= res-val;
        // return res3;
        callback(null,res3);
    },0)
}
sum(function(err,data){
   if(err) return console.log(err);
   console.log(data);
   mult(function(err,data){
    if(err) return console.log(err);
    console.log(data)
    sub(function(err,data){
        if(err) return console.log(err);
        console.log(data);
    },data,2);
   },data,5);

   
},2,7)





///error first callback. -> phla parameter vo error , dusra data