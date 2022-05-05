const eatsAnimals = true;
const eatsPlants = true;
let category = "";

category = eatsAnimals?(eatsPlants?"omnivore":"carnivore"):eatsPlants?"herbivore":"undefined";

console.log(category);