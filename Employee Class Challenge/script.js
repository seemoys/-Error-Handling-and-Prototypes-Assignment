class Employee{
    constructor(name, position,salary){
        if(!name||!position||!salary){
            throw new Error("Missing inputs");
        }
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return `The Employee ${this.name} salary is ${this.salary}`
    }
}
try{
    const employee=new Employee("Seemoy","FrontEnd Developer","20000");
    console.log(employee.getSalary());
}catch(error){
    console.log(error.message);
}