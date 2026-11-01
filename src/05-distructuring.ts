// * Object Destructuring
const car: {
  make: string;
  model: { name: string; year: number; color: string[] };
  year: number[];
} = {
  make: "Toyota",
  model: {
    name: "Camry",
    year: 2020,
    color: ["red", "blue", "black"],
  },
  year: [2020, 2021, 2022],
};

const {
  make,
  model: {
    name,
    year,
    color: [firstColor, secondColor, thirdColor],
  },
  year: [firstYear, secondYear, thirdYear],
} = car;

// * Array Destructuring
const colors: string[] = ["red", "green", "blue"];
const [first, second, third] = colors;
