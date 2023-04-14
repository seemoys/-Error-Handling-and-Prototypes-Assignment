class Car{
    constructor(company,model,year){
        this.company=company;
        this.model=model;
        this.year=year;
    }
    getDescription(){
        console.log(`This is ${this.year} ${this.company} ${this.model}`)
    }

}
const myCar=new Car("Maruti Suzuki","Dzire VDi","2021");
myCar.getDescription();

/*
class Car {
  constructor(company, model, year) {
    if (!company || !model || !year) {
      throw new Error("Missing required properties");
    }
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

try {
  const myCar = new Car("Toyota", "Corolla","2021");
  console.log(myCar.getDescription()); // This line will not be executed
} catch (error) {
  console.log(error.message); // outputs "Missing required properties"
}
*/