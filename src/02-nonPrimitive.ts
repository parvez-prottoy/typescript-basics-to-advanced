/*
 * js - array, object
 */

let arr: number[] = [1, 2, 3, 4, 5];
// arr.push("hello"); // This is allowed since the type is any
console.log(arr);

let userNames: string[] = ["John", "Jane", "Doe"];
userNames.push("Smith");
// userNames.push(true);
console.log(userNames);

let information: (string | number | boolean)[] = [
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
let user: [string, number, boolean] = ["John", 30, true];
console.log(user);

let userLocation: [string, number] = ["New York", 10001];
console.log(userLocation);

let status: [string, string, string] = ["active", "inactive", "pending"];
console.log(status);
