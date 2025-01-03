// Activity 1:
// Task 1 :
function printNumbers(startCount, endCount) {
  for (let i = startCount; i <= endCount; i++) {
    console.log(i + " ");
  }
}

// printNumbers(1, 10);

// Task 2 :
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    let count = num * i;
    console.log(count + " ");
  }
}
// printTable(5);

// Activity 2:
// Task 3:
function addNumbers(startingNum, endingNum) {
  let sum = 0;
  let i = startingNum;
  while (i <= endingNum) {
    sum = sum + i;
    i++;
  }
  console.log(`Sum of ${startingNum} and ${endingNum} =`, sum);
}

// addNumbers(1, 10); // Sum of 1 and 10 = 55

// Task 4:
// Write a program to print numbers from 10 to 1 using a while loop.
function consoleNumber(startingCount, endingCount) {
  let i = startingCount;
  while (i >= endingCount) {
    console.log(i + " ");
    i--;
  }
}
// consoleNumber(10, 1);

// Task 5:
// Write a program to print numbers from 1 to 5 using a do...while loop.
function printNumWithDoWhile(startingNum, endingNum) {
  let i = startingNum;
  do {
    console.log(i + " ");
    i++;
  } while (i < endingNum);
  {
    console.log(i + " ");
    i++;
  }
}
// printNumWithDoWhile(1, 5);

// Task 6 :
//Write a program to calculate the factorial of a number using a do...while loop.
function calculateFactorial(number) {
  let factorial = 1; // Initialize the factorial variable
  let i = number; // Start from the number

  // Calculate factorial using a do...while loop
  do {
    factorial *= i; // Multiply current value of factorial by i
    i--; // Decrement i
  } while (i > 0);
  console.log("Factorial =", factorial);
}
// calculateFactorial(4); // Factorial = 24
console.log("---------------------------------------");

// Task 7:
/*
 *****
 ****
 ***
 **
 *
 */

for (let i = 0; i < 5; i++) {
  let string = "";
  for (let j = i; j < 5; j++) {
    string = string + "*";
  }
  console.log(string);
}
console.log("---------------------------------------");

// Task 8:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip the iteration when i is 5
  }
  console.log(i); // Print the number
}

console.log("---------------------------------------");
// Task 9:
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break; // Exit the loop when i is 7
  }
  console.log(i); // Print the number
}
