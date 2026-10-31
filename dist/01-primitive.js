"use strict";
/*
 * JS - Primitives types
 string, number, boolean, null, undefined
 * TS - Primitives types
 never, unknown, any, void
*/
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "JohnDoe";
// userName = 1234; // This will cause a TypeScript error
console.log(userName);
let userAge = 30;
let isLoggedIn = true;
console.log(userAge, isLoggedIn);
const userAddress = null;
// userAddress = "123 Main St"; // This will cause a TypeScript error
console.log(userAddress);
const userPhone = undefined;
// userPhone = "123-456-7890"; // This will cause a TypeScript error
console.log(userPhone);
let userEmail = "john.doe@example.com";
userEmail = "hello@example.com"; // This is allowed since the type is unknown
// userEmail = 1234; // This will cause a TypeScript error
console.log(userEmail);
let userRole = "admin";
userRole = 1234;
userRole = true;
console.log(userRole);
let userStatus = undefined;
// userStatus = true; // This is allowed since the type is void
console.log(userStatus);
//# sourceMappingURL=01-primitive.js.map