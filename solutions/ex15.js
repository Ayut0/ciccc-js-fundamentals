function ageCalculator(name, yearOfBirth, currentYear){
    const age = currentYear - yearOfBirth;
    const result = name + " is " + age + " years old.";
    return result;
}

console.log(ageCalculator("John", 1983, 2022));