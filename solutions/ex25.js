function loopy(range, multiples, words){
        for(
            let i = range[0];(range[0]>range[1])? i>=range[1]:i<=range[1];
            (range[0]>range[1])? i--: i++)
            {
            if(i%multiples[0] === 0 && i%multiples[1] === 0){
                console.log(words[0] + words[1]);
            } else if (i%multiples[0] === 0) {
                console.log(words[0]);
            } else if (i%multiples[1] === 0){
                console.log(words[1]);
            } else {
                console.log(i);
            }
        }
    
}

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);
loopy([80, 45], [3, 7], ["Fizz", "Buzz"]);