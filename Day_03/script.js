// Activity 1:
// Task 1:

function checkStatusOfNumber(num) {
  if (num > 0) {
    return `The number ${num} is Positive`;
  } else if (num === 0) {
    return `Given number is Zero.`;
  } else {
    return `The number ${num} is Negative`;
  }
}

// console.log(checkStatusOfNumber(12));
// console.log(checkStatusOfNumber(0));
// console.log(checkStatusOfNumber(-33));

// Task 2::
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log(`The Person is eligible to vote.`);
  } else {
    console.log(`You are not eligible to vote.`);
  }
}

// checkVotingEligibility(17);
// checkVotingEligibility(18);
// checkVotingEligibility(100);

// Activity 2::
// Task 3::
function findLargestNumber(a, b, c) {
  if (a > b && a > c) {
    console.log(`Number ${a} is largest number `);
  } else if (b > a && b > c) {
    console.log(`Number ${b} is largest number `);
  } else {
    console.log(`Number ${c} is largest number `);
  }
}

// findLargestNumber(20, 33, 99);
// findLargestNumber(1.5, 330, -9);

// Activity 3::
// Task 4:
function findDayName(num) {
  switch (num) {
    case 1:
      console.log(`Today is Monday`);
      break;
    case 2:
      console.log(`Today is Tuesday`);
      break;
    case 3:
      console.log(`Today is Wednesday`);
      break;
    case 4:
      console.log(`Today is Thursday`);
      break;
    case 5:
      console.log(`Today is Friday`);
      break;
    case 6:
      console.log(`Today is Saturday`);
      break;
    case 7:
      console.log(`Today is Sunday`);
      break;
    default:
      console.log("Invalid Number ");
      break;
  }
}

// findDayName(7);
// findDayName(70);
// findDayName(-7);
// findDayName(3);

// Task 5 :
function assignGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 80:
      grade = "B";
      break;
    case marks >= 70:
      grade = "C";
      break;
    case marks >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }
  console.log(`The grade for score of ${marks} is = ${grade}`);
}

// assignGrade(90);
// assignGrade(95);
// assignGrade(30);
// assignGrade(67);

// Activity 4::
// Task 6:

function isNumberEvenOrOdd(number) {
  console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);
}

// isNumberEvenOrOdd(5);
// isNumberEvenOrOdd(99);
// isNumberEvenOrOdd(71);
// isNumberEvenOrOdd(35);

// Activity 5::
// Task 7:
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`The ${year} is a Leap Year`);
  } else {
    console.log(`The ${year} is not a Leap Year`);
  }
}

// isLeapYear(2000);
// isLeapYear(2017);
// isLeapYear(1999);
// isLeapYear(1997);
