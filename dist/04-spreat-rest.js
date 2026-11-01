"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// * Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4); // 10
//# sourceMappingURL=04-spreat-rest.js.map