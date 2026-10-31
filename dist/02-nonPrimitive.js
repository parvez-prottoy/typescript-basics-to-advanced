"use strict";
/*
 * js - array, object
 */
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 3, 4, 5];
// arr.push("hello"); // This is allowed since the type is any
console.log(arr);
let userNames = ["John", "Jane", "Doe"];
userNames.push("Smith");
// userNames.push(true);
console.log(userNames);
let information = [
    "hello",
    1,
    true,
    "world",
    2,
    false,
];
information.push(20);
information.push("typescript");
information.push(true);
// information.push(undefined);
console.log(information);
// ? TS - tuple
let user = ["John", 30, true];
console.log(user);
let userLocation = ["New York", 10001];
console.log(userLocation);
let status = ["active", "inactive", "pending"];
console.log(status);
// ? TS - object
let person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    isMarried: true,
    //   organization: "Programming Hero",
    organization: "6pmIT",
    profession: "Software Engineer",
};
// person.profession = "Senior Software Engineer"; // This will cause an error since profession is readonly
console.log(person);
//# sourceMappingURL=02-nonPrimitive.js.map