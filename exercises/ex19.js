/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

const laugh = function (n) {
  let message = "";
  for (let i = 0; i < n; i++) {
    message += "ha";
  }
  return message;
};

function emotions(feeling, laugh){
    return `I am ${feeling}, ${laugh} !`
}

console.log(emotions("happy", laugh(2)));
