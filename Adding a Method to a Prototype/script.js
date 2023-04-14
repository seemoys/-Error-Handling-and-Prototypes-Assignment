function Student(name){
    this.name=name;
}
Student.prototype.printDetails=function(){
    console.log(`Hello my Name is ${this.name}`);
}
const student=new Student("Seemoy");
student.printDetails();