function sumOfIntegerStrings(arr) {
    return arr.reduce((a, b) => {
         b = Number.isInteger(Number(b)) ? Number(b) : 0;
         return a + b;
    }, 0)
}

console.log(sumOfIntegerStrings(['1', 'a', '25', '13.1', '123px', '0.1', '2']));