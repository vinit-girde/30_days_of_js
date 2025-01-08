// Activity -1
// T-1 :  Create an array of numbers from 1 to 5 and log the array to the console.
let numsArr = [1, 2, 3, 4, 5];
// console.log(numsArr); // [ 1, 2, 3, 4, 5 ]

// T - 2 : Access the first and last elements of the array and log them to the console.
// console.log("First Element:", numsArr[0]); // First Element: 1
// console.log("Last Element:", numsArr.length); // Last Element: 5

// Activity - 2:
// T=3 : Use the push method to add a new number to the end of the array and log the updated array.
numsArr.push(6);
// console.log(numsArr); // [ 1, 2, 3, 4, 5 ,6 ]

// T -4 :  Use the pop method to remove the last element from the array and log the updated array.
numsArr.pop();
// console.log(numsArr); // [ 1, 2, 3, 4, 5 ]

// T--5 : Use the shift method to remove the first element from the array and log the updated array.
numsArr.shift();
// console.log(numsArr); // [ 2, 3, 4, 5 ]

// T--> 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array.

numsArr.unshift(1);
// console.log(numsArr); // [ 1, 2, 3, 4, 5 ]

// Activity -3
//  T-7 : Use the map method to create a new array where each number is doubled and log the new array.
// console.log(numsArr.map((ele) => ele * 2)); // [ 2, 4, 6, 8, 10 ]

// console.log("Original arr", numsArr); // Original arr [ 1, 2, 3, 4, 5 ]

// T-8 : Use the filter method to create a new array with only even numbers and log the new array.
// console.log(numsArr.filter((ele) => ele % 2 === 0)); // [ 2, 4 ]

// T-9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.
// console.log(
//   numsArr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0)
// ); // 15

// T-10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numsArr.length; i++) {
  //   console.log(numsArr[i]);
}
/*
    1
    2
    3
    4
    5
*/

// T-11 :Use the forEach method to iterate over the array and log each element to the console.

// numsArr.forEach((element) => console.log(element));
/*
    1
    2
    3
    4
    5
*/

// T - 12 : Create a two-dimensional array (matrix) and log the entire array to the console.

let twoDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(twoDArr); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// T- 13: Access and log a specific element from the two-dimensional array.
// console.log(twoDArr[1][2]); // 6
