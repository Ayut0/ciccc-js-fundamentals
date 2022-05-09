const laugh = function(number){
    let result = "";
    for(let i=1; i<=number; i++){
        result += "ha";
    }
    return result + "!";
}

console.log(laugh(5));