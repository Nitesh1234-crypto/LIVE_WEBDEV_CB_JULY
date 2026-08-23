console.log("start");

function timeConsuming(){
    let prevtime = Date.now(); //curr time 10:00 + 4second ==>10:04second > 10:04
    while(prevtime+4000>Date.now()){ //10:01
        //will run
        //while(false){}
    }
    console.log("task completed")
}

// timeConsuming(); //ye code bd mai chle
setTimeout(timeConsuming,500)
function sum(a,b){
    console.log(a+b);
}
sum(2,3);
console.log("end")

//bahut sare code ...