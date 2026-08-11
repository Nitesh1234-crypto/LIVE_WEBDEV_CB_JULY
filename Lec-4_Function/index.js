var a =10;
function outer(){
    var b = 20;
    function inner(){
        var c=30;
        a++;
        b++;
        c++;
        console.log("First" +" "+ a,b,c);
        function innermost(){
            a++;
            b++;
            c++;
            console.log("Second"+" "+a,b,c)
        }
        return innermost

    }
    return inner;
}

let f1 = outer();

let f11 = f1();

f11();

let f12 = f1();

f12();