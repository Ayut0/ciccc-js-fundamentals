let solution = 1;
let factorial = 12;
for(let i = factorial; i > 0; i--){
    solution *= i;
    //solution = solution * i;
}

console.log(factorial+"! = " +solution.toLocaleString("en-US"));