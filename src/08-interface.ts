// * Interface

interface User {
  id: string;
  email: string;
  name: string;
}

interface Admin extends User {
  role: "admin";
}

const user1: User = {
  id: "1",
  email: "user1@example.com",
  name: "User 1",
};

const user2: Admin = {
  id: "1",
  email: "user1@example.com",
  name: "User 1",
  role: "admin",
};

// function
type AddFn = (...args: number[]) => string;

const add: AddFn = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0).toString();
};
add(1, 2, 3, 4, 5); // "15"

interface AddFnInterface {
  (...args: number[]): string;
}

const add2: AddFnInterface = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0).toString();
};

add2(1, 2, 3, 4, 5); // "15"

// array
type Friends = string[];
const friends: Friends = ["Alice", "Bob", "Charlie"];

interface FriendsInterface {
  [index: number]: string;
}
const interfaceFriends: FriendsInterface = ["Alice", "Bob", "Charlie"];
