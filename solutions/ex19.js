function emotions(emotion, emotionFunction){
    return "I am " + emotion +", " + emotionFunction();
}

function crying(){
    return "boohoo!";
}

emotions("happy", function laugh(number){
    let result = "";
    for(let i=1; i<=number; i++){
        result += "ha";
    }
    return result + "!";
});

console.log(emotions("sad", function crying(){
    return "boohoo!";
}));