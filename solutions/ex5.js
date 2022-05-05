const shirtWidth = 19; 
const shirtLength = 29.5; 
const shirtSleeve = 8.60;
let sizeResult = "N/A"

if (shirtWidth>=18 && shirtWidth<20){
    if(shirtLength>=28 && shirtLength<29){
        if(shirtSleeve>=8.13 && shirtSleeve<8.38){
            sizeResult ="Shirt size is S.";
        }
    }

} else if (shirtWidth<22){
    if(shirtLength>=29 && shirtLength<30){
        if(shirtSleeve>=8.38 && shirtSleeve<8.63){
            sizeResult ="Shirt size is M.";
        }
    }
    
} else if (shirtWidth<24){
    if(shirtLength>=30 && shirtLength<31){
        if(shirtSleeve>=8.63 && shirtSleeve<8.88){
            sizeResult ="Shirt size is L.";
        }
    }
    
} else if (shirtWidth<26){
    if(shirtLength>=31 && shirtLength<33){
        if(shirtSleeve>=8.88 && shirtSleeve<9.63){
            sizeResult ="Shirt size is XL.";
        }
    }
    
} else if (shirtWidth<28){
    if(shirtLength>=33 && shirtLength<34){
        if(shirtSleeve>=9.63 && shirtSleeve<10.13){
            sizeResult ="Shirt size is 2XL.";
        }
    }
    
} else if (shirtWidth<30){
    if(shirtLength>=34 && shirtLength<35){
        if(shirtSleeve>=10.13 && shirtSleeve<10.38){
            sizeResult ="Shirt size is 3XL.";
        }
    }
    
} else {
    sizeResult ="N/A";
}

console.log(sizeResult);