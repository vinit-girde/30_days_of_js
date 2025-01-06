// Activity 1:
// T-1: Write a function to check if a number is even or odd and log the result to the console.

function checkNumber(number) {
  if (number % 2 === 0) {
    console.log(`${number} is an Even Number`);
  } else {
    console.log(`${number} is an Odd Number`);
  }
}

// checkNumber(8); // 8 is an Even Number
// checkNumber(4000); // 4000 is an Even Number
// checkNumber(19); // 19 is an Odd Number

// T-2 :  Write a function to calculate the square of a number and return the result.

function calculateSquare(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid input: Please provide a valid number");
  }
  return number * number;
}

// console.log(calculateSquare(5)); // 25
// console.log(calculateSquare(19)); // 361
// console.log(calculateSquare("hee")); // Error: Invalid input: Please provide a valid number

// Activity 3 :
// T-3 : Write a function expression to find the maximum of two numbers and log the result to the console.
const findLargestNum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Inputs must only be number";
  }
  return a > b ? a : b;
};

// console.log(findLargestNum()); // undefined
// console.log(findLargestNum("ee", 5)); // Inputs must only be number
// console.log(findLargestNum(30, -4)); // 30

// T-4 : Write a function expression to concatenate two strings and return the result.
const joinStrings = (a, b) => {
  return a + " " + b;
};
// console.log(joinStrings("Hello", "World !")); // Hello World !
// console.log(joinStrings("Hello User", "X")); // Hello User X

// Activity -> 3
// T-5 --> Write an arrow function to calculate the sum of two numbers and return the result.

const addTwoNumbers = (a = 0, b = 0) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Inputs should only be of number type";
  }
  return a + b;
};
// console.log(addTwoNumbers(1, 5)); // 6
// console.log(addTwoNumbers(22, 8)); // 30
// console.log(addTwoNumbers("dd", "kd")); // Inputs should only be of number type

// T-6 -->  Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkCharacter = (string, char) => {
  return string.includes(char);
};

// console.log(checkCharacter("vinit", "v")); // true

// Activity - 4:
// T-7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function getCartItems(a, b = 200) {
  return a * b;
}
// console.log(getCartItems(200, 30)); // 6000
// console.log(getCartItems(9)); // 1800

// T-8 :  Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greetUser = (name, age) => {
  return `Welcome ${name}!. Your age is ${age}.`;
};
// console.log(greetUser("Vinit", 27)); // Welcome Vinit!. Your age is 27.

// Activity - 5:
// T-9 : Write a higher-order function that takes a function and a number, and calls the function that many times.

const callFunctionNTimes = (function_name, no_of_counts) => {
  for (let i = 0; i < no_of_counts; i++) {
    function_name();
  }
};

function sayHello() {
  console.log("Hello");
}

// callFunctionNTimes(sayHello, 5); // Logs Hello 5 times

// T-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const functionX = (function_One, function_Two, value) => {
  const result = function_One(value);
  const finalResult = function_Two(result);
  console.log(`Square of ${value} is :`, result);
  console.log(`Multiply by 3 to ${result} is :`, finalResult);
};

function getSquare(num) {
  return num * num;
}

function multiplyByThree(num) {
  return num * 3;
}

functionX(getSquare, multiplyByThree, 4);
// Square of 4 is : 16
// Multiply by 3 to 16 is : 48
