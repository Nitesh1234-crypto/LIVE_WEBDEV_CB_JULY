function Student(name, collegeId){
    this.name = name;
    this.collegeId = collegeId;
    // this.getName = function(){
    //     return this.name;
    // }
    // this.getCollegeId = function(){
    //     return this.collegeId;
    // }
}
Student.prototype.getName = function(){
    return this.name;
}
Student.prototype.getCollgeId = function(){
    return this.collegeId;
}

let s1 = new Student("Nitesh","23");
let s2 = new Student("Rahul","24");
console.log(s1);
console.log(s2);
console.log(s1.name);
console.log(s2.name);
console.log(s1.getCollgeId());
console.log(s2.getCollgeId());