"use strict";
// * Generics
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Alice", "Bob", "Charlie"];
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" },
    { id: "4", name: "David" },
];
const users2 = [
    {
        id: "1",
        name: "Alice",
        personalInfo: { age: 25, email: "alice@example.com" },
    },
    {
        id: "2",
        name: "Bob",
        personalInfo: { age: 30, email: "bob@example.com" },
    },
    {
        id: "3",
        name: "Charlie",
        personalInfo: { age: 35, email: "charlie@example.com" },
    },
    {
        id: "4",
        name: "David",
        personalInfo: { age: 40, email: "david@example.com" },
    },
];
// * Generic With Function
function getArray(items) {
    return new Array().concat(items);
}
//# sourceMappingURL=09-generics.js.map