class Person{
    constructor(name="Unknown",age=0){
        this.name=name;
        this.age=age;   

    }
    getDetails(){
        return `Name:${this.name}`;
    }
};
const person1=new Person("Sanu",25);
const person2=new Person("Seemoy",27);
console.log(person1.getDetails());
console.log(person2.getDetails());