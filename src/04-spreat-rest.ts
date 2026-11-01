// * Spread Operator
const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];
const arr3: number[] = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// * Rest Operator
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3, 4); // 10
