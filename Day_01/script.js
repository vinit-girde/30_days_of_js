// Activity 01 --> Variable Declaration
// Task 1:
var num = 25;
console.log(num); //25

// Task 2:
let str = "Hello World";
console.log(str); // Hello World

// Activity 2 : Constant Declaration
// Task 3:
const isSignedIn = false;
console.log(isSignedIn); //false

// Activity 3 : Datatypes
// Task 4:
let numb = 24;
let sampleStr = "Hello World";
const isChecked = false;
let obj = {
  id: 1,
  name: "Alan",
  isStudent: false,
};
let arr = [1, "Hello", true, "Java"];

console.table([
  ["Number", typeof numb],
  ["String", typeof sampleStr],
  ["Object", typeof obj],
  ["Array", typeof arr],
]);

// Activity 4 :  Reassigning Variables
// Task 5 :
let name = "KD";
console.log("Initial Value of Name", name); // Initial Value of Name KD
name = "Russell";
console.log(name); // Russell

// Activity 5 : Reassigning const variable
// Task 6:
const age = 18;
age = 19;
console.log("Age", age); // TypeError: Assignment to constant variable.
