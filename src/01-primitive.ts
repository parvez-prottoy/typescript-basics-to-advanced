/* 
 * JS - Primitives types
 string, number, boolean, null, undefined
 * TS - Primitives types
 never, unknown, any, void
*/

let userName: string = "JohnDoe";
// userName = 1234; // This will cause a TypeScript error
console.log(userName);

let userAge: number = 30;
let isLoggedIn: boolean = true;

console.log(userAge, isLoggedIn);

const userAddress: null = null;
// userAddress = "123 Main St"; // This will cause a TypeScript error
console.log(userAddress);

const userPhone: undefined = undefined;
// userPhone = "123-456-7890"; // This will cause a TypeScript error
console.log(userPhone);

let userEmail: unknown = "john.doe@example.com";
userEmail = "hello@example.com"; // This is allowed since the type is unknown
// userEmail = 1234; // This will cause a TypeScript error
console.log(userEmail);

let userRole: any = "admin";
userRole = 1234;
userRole = true;
console.log(userRole);

let userStatus: void = undefined;
// userStatus = true; // This is allowed since the type is void
console.log(userStatus);
