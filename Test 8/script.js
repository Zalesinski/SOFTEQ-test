function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessANumber(min, max, number) {

    let tries = 1;
    let guess =  Math.floor(max / 2);
    let result;

    do {
        result = verify(guess);
        if (result === 1) {
            max = guess;
            guess = Math.floor((min + guess) / 2);
        } else {
            min = guess;
            guess = guess + Math.floor(  (max - guess) / 2);
        }
    } while (result)
    return result;

    function verify(guess) {
        console.log(`Try #${tries}. Is it ${guess}?`)
        if (guess === number) {
            console.log(`Yes! Guessed after ${tries} tries.`)
            return 0;
        }
        console.log("Nope.")
        tries++;
        return guess > number ? 1 : -1;
    }
}

let secretNumber = getRandomInt(1, 1000001);

console.log(`Try to find ${secretNumber}.`)

guessANumber(1, 1000001, secretNumber)