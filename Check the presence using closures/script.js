let myNumber=[1,2,3,4,5];
function numberChecker(myNumbers){
    return function func(number){
        return myNumber.includes(number)
    }
}
const checkNumber=numberChecker(myNumber);
console.log(checkNumber(50));