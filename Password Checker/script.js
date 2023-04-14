class User{
    constructor(userName,password){
        this.userName=userName;
        this.password=password;
    }

    getPassword(){
        return `${this.userName} ${this.password.replace(/./g,"*")}`;
    }
    setPassword(newPassword){
        const regex=/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        if(regex.test(newPassword)){
            this.password=newPassword;
        }else{
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}
const user=new User("Seemoy","seemoyshome");
console.log(user.getPassword());

user.setPassword("Kalimukherjee");
console.log(user.getPassword());

user.setPassword("MyPassword");
console.log(user.getPassword());

user.setPassword("myPassword123");
console.log(user.getPassword());


