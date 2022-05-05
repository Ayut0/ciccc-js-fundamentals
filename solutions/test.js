// const a = 2;
// const b = 3;
// let total = 0;

// const sum = () => {
//      total = a + b;
//     //total = 5
//     return total;
// };
// console.log(total > 0); // expect print true 5 > 0
// // false total 0 = false
// console.log(total);
// console.log(sum());

let prize = "";
const winner = 1;

switch (winner){
    case 1:
        //prize = prize + "trip for two and" 
        prize += "trip for two and "
    case 2:
        prize += "four piece furniture"
        // prize = "trip for two and four piece of furniture"
    case 3: 
        prize += " smartwatch and"
        break;
    default: 
        prize += " tickets circus"; 
}
console.log("you have won " + prize);
