/*
Rewrite the following while loop as a for loop:

let x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
*/
let x = 9;
for(let i = 1; i <= x; i++){
  console.log("hello" + i)
}
