

function Student(name,email,college_id){
     this.name=name;
     this.email=email;
     this.college_id=college_id;
}

Student.prototype.getName = function(){
    return this.name;
}
Student.prototype.getEmail = function(){
    return this.email;
}
Student.prototype.getCollegeId = function(){
    return this.college_id;
}
function Teacher(name,email,college_id,empId){
    this.name=name;
    this.email=email;
    this.college_id= college_id;
    this.empId = empId;
}
// console.log(Teacher.prototype);
Teacher.prototype.getEmpId = function(){
    return this.empId;
}


Teacher.prototype.__proto__=Student.prototype;

let t1 = new Teacher("Nitesh","nitesh@gmail.com","123NIT2026","CB23");
// console.log(t1);
let name = t1.getName();
console.log(name);
let email = t1.getEmail();
console.log(email);
let empId = t1.getEmpId();
console.log(empId);

let s1 = new Student("Pranjal","p@gmail.com","dshdhs")
console.log(s1.getEmpId());