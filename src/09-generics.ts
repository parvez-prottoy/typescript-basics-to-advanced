// * Generics

type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];
const numbers: GenericArray<number> = [1, 2, 3, 4, 5];
const booleans: GenericArray<boolean> = [true, false, true];

const users: GenericArray<{ id: string; name: string }> = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
  { id: "4", name: "David" },
];

// * Generic With Interface

interface User<T> {
  id: string;
  name: string;
  personalInfo: T;
}

const users2: GenericArray<User<{ age: number; email: string }>> = [
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

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
