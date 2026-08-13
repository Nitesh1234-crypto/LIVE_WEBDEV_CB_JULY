
// let marks= 0;
function incrementMark(){
    let marks= 0;
    function process(val){
        marks+=val;
        console.log(marks);
    }
    function getMark(){
        return marks;
    }
    return [process,getMark]; // 50, 55
}
// console.log(marks); //null
// incrementMark(50); //50
// incrementMark(55); //105
// marks=100; // not define
// console.log(marks); // 50

let student1=incrementMark(); //[process,getMark]
student1[0](45);

console.log(student1[1]());
student1[0](5);
console.log(student1[1]());
// student1(50);
// student1(55);

let student2 = incrementMark(); //[process,getMark]
// student2(32);
// student2(1);


