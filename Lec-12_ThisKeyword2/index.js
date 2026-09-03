function Student(name,collegeId){
    this.name=name;
    this.collegeId=collegeId;
    this.getCollegeId = function(){
        return this.collegeId;
    }
}
//with new keyword this bind with newly created object
let s1 = new Student("Raghav","23CSE2026");
let s2 = new Student("Neha","24CSE2026");
console.log(s1);
console.log(s2);

console.log(s1.name);
console.log(s2.name);
console.log(s2.getCollegeId());
console.log(s1.getCollegeId());