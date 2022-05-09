function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
}

function buildTriangle(width){
    let triangle = "";
    for(let i = 1; i<=width; i++){
        triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(15));