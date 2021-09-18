const stringOne = `Write a regular expression to match strings containing both "Softeq" and "#rules" in any order.`;
const stringTwo = `Write a regular expression to match strings containing both #rules and Softeq in any order.`;
const stringTree = `Write a regular expression to match strings containing both "#rules" and ... in any order.`;


function findMatch(str) {
    return str.match(/Softeq.*#rules|#rules.*Softeq/gm)
}

console.log(findMatch(stringOne));
console.log(findMatch(stringTwo));
console.log(findMatch(stringTree));
