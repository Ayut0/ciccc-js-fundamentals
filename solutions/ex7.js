const education = "no high school diploma";
let averageSalary = 0;

switch(education){
    case "no high school diploma":
        averageSalary = 25636;
        break;
    case "high school diploma":
        averageSalary = 35256;
        break;
    case "Associate's degree":
        averageSalary = 41496;
        break;
    case "Bachelor's degree":
        averageSalary = 59124;
        break;
    case "Master's degree":
        averageSalary = 69732;
        break;
    case "Professional degree":
        averageSalary = 89960;
        break;
    case "Doctoral degree":
        averageSalary = 84396;
        break;
}

console.log("In 2015, a person with "+education+" earned an average of $"+averageSalary.toLocaleString("en-US")+"/year.")