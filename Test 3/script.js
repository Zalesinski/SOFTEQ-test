const container = document.querySelector(".container");

const childElements = Array.from(container.children);
const childNodes = Array.from(container.childNodes);

console.log(`Array of child elements:`);
console.log(childElements);
console.log(`Array of child nodes:`);
console.log(childNodes);