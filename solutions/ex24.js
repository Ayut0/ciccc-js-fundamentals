function lastIndexOf(array, number){
    let index = -1;
    // for(let i=array.length-1; i>= 0; i--){
    //     if(array[i] === number){
    //         return i;
    //     };
    // }
    for(let i=0; i < array.length; i++){
        if(array[i] === number){
            index = i;
        };
    }
    return index;
}

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([], 3);

// ---------------- TESTS ---------------
// returned value should be same as second arguement

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);