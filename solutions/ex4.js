
const flavor = "vanilla";
const vessel = "cone";
const toppings = "sprinkles";

//First solution 

let checkFlavor = false;
let checkVessel = false;
let checkToppings = false;

if(flavor === "vanilla" || flavor === "chocolate"){
    checkFlavor = true;
}

if(vessel === "cone" || vessel === "bowl"){
    checkVessel = true;
}

if(toppings === "sprinkles" || toppings === "peanuts"){
    checkToppings = true;
}

if(checkFlavor && checkVessel && checkToppings){
    console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
}

//Second solution

if(flavor === "vanilla" || flavor === "chocolate"){
    if(vessel === "cone" || vessel === "bowl"){
        if(toppings === "sprinkles" || toppings === "peanuts"){
            console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
        } else {
            console.log("Choose a different topping");
        }
        
    } else {
        console.log("Choose a different vessel");
    }
    
} else {
    console.log("Choose a different flavor");
}

// Third solution

if(
    (flavor === "vanilla" || flavor === "chocolate") && 
    (vessel === "cone" || vessel === "bowl") && 
    (toppings === "sprinkles" || toppings === "peanuts")){
        console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
    
} else {
    console.log("Choose different options");
}