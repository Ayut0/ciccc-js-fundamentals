function emotions(emotion, emotionFunction){
    return "I am " + emotion +", " + emotionFunction(2);
}

console.log(emotions("happy", function laugh(number){
    let result = "";
    for(let i=1; i<=number; i++){
        result += "ha";
    }
    return result + "!";
}));