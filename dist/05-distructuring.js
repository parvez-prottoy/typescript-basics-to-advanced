"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * Object Destructuring
const car = {
    make: "Toyota",
    model: {
        name: "Camry",
        year: 2020,
        color: ["red", "blue", "black"],
    },
    year: [2020, 2021, 2022],
};
const { make, model: { name, year, color: [firstColor, secondColor, thirdColor], }, year: [firstYear, secondYear, thirdYear], } = car;
// * Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
//# sourceMappingURL=05-distructuring.js.map