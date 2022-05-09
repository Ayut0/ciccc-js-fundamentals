const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop
console.log("------------------------- while loop -------------------------")
let i = 0;
while( i < ingredients.length){
    console.log(ingredients[i]);
    i++;
}

//for loop
console.log("------------------------- for loop -------------------------")
for(let i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]);
}

console.log("------------------------- while loop backwards -------------------------")
//backwards while loop
i = ingredients.length-1;
while(i>=0){
    console.log(ingredients[i]);
    i--;
}

//backwards for loop
console.log("------------------------- for loop backwards -------------------------")
for(let i = ingredients.length-1; i>=0; i--){
    console.log(ingredients[i]);
}