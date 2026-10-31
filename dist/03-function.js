"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * normal function and arrow function
function add(a, b) {
    return `The sum of ${a} and ${b} is ${a + b}`;
}
add(5, 10);
// add(5, "10"); // This will cause a TypeScript error
const multiply = (a, b) => {
    return `The product of ${a} and ${b} is ${a * b}`;
};
multiply(5, 10);
const userInfo = {
    name: "John Doe",
    balance: 1000,
    addBalance(amount) {
        return (this.balance += amount);
    },
};
userInfo.addBalance(500);
const numberArray = [1, 2, 3, 4, 5];
const squareNumbers = numberArray.map((num) => num * num);
console.log(squareNumbers); // [1, 4, 9, 16, 25]
//# sourceMappingURL=03-function.js.map