function getAlphabetArray() {
    const alphabet = [];
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
}

console.log(getAlphabetArray());