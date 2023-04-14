function convertToNumber(str){
    const num=parseInt(str);
    if(isNaN(num)){
        return "Invalid Number";
    }else{
        return num;
    }
}
console.log(convertToNumber("5729"));