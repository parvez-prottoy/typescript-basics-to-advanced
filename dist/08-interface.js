"use strict";
// * Interface
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: "1",
    email: "user1@example.com",
    name: "User 1",
};
const user2 = {
    id: "1",
    email: "user1@example.com",
    name: "User 1",
    role: "admin",
};
const add = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0).toString();
};
add(1, 2, 3, 4, 5); // "15"
const add2 = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0).toString();
};
add2(1, 2, 3, 4, 5); // "15"
const friends = ["Alice", "Bob", "Charlie"];
const interfaceFriends = ["Alice", "Bob", "Charlie"];
//# sourceMappingURL=08-interface.js.map