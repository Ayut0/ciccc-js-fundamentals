let x = 1;
 while (x<100) {
     //start checking if the number is divisible by 3 and 5 or by 15
     if((x%3 === 0) && (x % 5 === 0)) {
         console.log("FizzBuzz");
     } else if(x%5 === 0){
         console.log("Buzz");
     } else if(x % 3 === 0) {
        console.log("Fizz");
     } else {
         console.log(x);
     }
     x++;
 }