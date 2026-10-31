// * normal function and arrow function
function add(a: number, b: number): string {
  return `The sum of ${a} and ${b} is ${a + b}`;
}
add(5, 10);
// add(5, "10"); // This will cause a TypeScript error

const multiply = (a: number, b: number): string => {
  return `The product of ${a} and ${b} is ${a * b}`;
};
multiply(5, 10);

const userInfo = {
  name: "John Doe",
  balance: 1000,
  addBalance(amount: number): number {
    return (this.balance += amount);
  },
};
userInfo.addBalance(500);

const numberArray: number[] = [1, 2, 3, 4, 5];

const squareNumbers = numberArray.map((num: number): number => num * num);
console.log(squareNumbers); // [1, 4, 9, 16, 25]
