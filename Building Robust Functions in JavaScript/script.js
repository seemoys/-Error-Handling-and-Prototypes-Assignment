function getPerson(person){
    try{
        if(typeof person !="object"||!person.hasOwnProperty("name")||!person.hasOwnProperty("age")){
            throw new Error("Invalid Parameter Type");
        }
        return `Name:${person.name},Age:${person.age}`;
    }catch(error){
        return error.message;
    }
}
const person={name:"Sanu",age:28};
const person1={name:"Sanu"};
const person2=["name","Mithun"];
const personString=getPerson(person);
console.log(personString);