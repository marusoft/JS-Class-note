// Data types

/**
 * string data type
 */

"hello";
"122222";
"2.44";

console.log("I am learning JavaScript");
console.log("answer =", 23 + 5);
console.log(true);
console.log("Answer =", 6 % 3);

// js builtIn  Methods

// .toUpperCase()
// Converts all the alphabetic characters in a string to uppercase.
console.log("lautech".toUpperCase());
console.log("nigeria".toUpperCase());

// .toLowerCase()
// Converts all the alphabetic characters in a string to lowercase.
console.log("LLLALLLLLALLALALLL".toLowerCase());
console.log("THIS IS MY FIRST CLASS OF JAVASCRIPT".toLowerCase());

// .length
// Returns the length of a String object.
console.log("hello Khalid".length);
console.log("Khalid".length);
console.log("Marusoft Academy".length);

// Math.random()
// Returns a pseudorandom number between 0 and 1.
console.log(Math.random());

// Returns a pseudorandom number between 0 and 6 exclusive
console.log(Math.random() * 6);

// Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(4.246307596699513));

// Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(4.543889153502049));

// Returns the value of a base expression taken to a specified power.
// Returns the value of a base expression taken to a specified power.

// @param x — The base value of the expression.

// @param y — The exponent value of the expression.
console.log(Math.pow(2, 4));

/**
 * Assignment
 * Instructions
 * 1.Use the console.log code in the editor to log your favourite number to the console.
 * Run your code when you are ready to see the result.
 * 2. On the next line, log a number representing the number of weeks you've been programming.
 * Put a number representing the number of weeks you've been programming inside the parentheses of console.log():
 */

/**
 * Variables
 */

let variableName = "some value";

let myName = "Kehinde";
console.log(myName);

const myStudentName = "Khalid";
console.log(myStudentName);

/**
 * Different between let and const
 * Similarities between let and const
 * A variable declear with const cannot be re-assign a value whereas a variable declear with let can be re-assigned
 * The similarity between let and const is that they are both block {} scope variable
 */

myName = "Omokehinde";
console.log(myName);

// myStudentName = "Suleiman";

// console.log(myStudentName); // throw error: TypeError: Assignment to constant variable

/***
 * Accessing characters in a string
 */

let myFavoriteClubName = "Liverpool";

console.log(myFavoriteClubName[0]); // L
console.log(myFavoriteClubName[1]); // i
console.log(myFavoriteClubName[2]); // v
console.log(myFavoriteClubName[3]); // e
console.log(myFavoriteClubName[4]); // r
console.log(myFavoriteClubName[5]); // p
console.log(myFavoriteClubName[6]); // o
console.log(myFavoriteClubName[7]); // o
console.log(myFavoriteClubName[8]); // l

// Concatenation of strings i.e joining two or more string together
const firstName = "Kehinde";
const lastName = "Alimi";
const middleName = "Maruf";

// old way of concatenating

let myFullName = firstName + " " + middleName + " " + lastName;
console.log("My FullName is", myFullName); // Kehinde Alimi Maruf

// new of concatenating using backtick and dollar sign and curly brace
let myFullName2 = `${firstName} ${middleName} ${lastName}`;
console.log("The new way of joining my name", myFullName2); // Kehinde Alimi Maruf

// Abbreviate my middlename

let myFullName3 = `${firstName} ${middleName[0]}. ${lastName}`;
console.log("My abbreviated name", myFullName3); // Kehinde M. Alimi

/**
 * Comparison and Logical Operator
 * Comparison operators compare the value on the left with the value on the right.
 * Less than: <
 * Greater than: >
 * Less than or equal to: <=
 * Greater than or equal to: >=
 * Strict equal to: ===
 * Is NOT equal to: !==
 */

let myState = "Ogun";
let myStudentState = "Lagos";

console.log("Compare State1:", myState.length > myStudentState.length);
console.log("Compare State2:", myState.length < myStudentState.length);
console.log("Compare State3:", myState.length === myStudentState.length);
console.log("Compare State4:", myState.length !== myStudentState.length);
console.log("Compare State4:", myState.length >= myStudentState.length);
console.log("Compare State6:", myState.length <= myStudentState.length);

/**
 * the and operator (&&)
 * the or operator (||)
 * the not operator (!)
 * When we use the && operator, we are checking that two things are true:
 * When we use the || operator, we are checking that either thing are true:
 * NOTE: When using the && operator, both conditions must evaluate to true for
 * the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition
 * will evaluate to false and the else block will execute.
 * When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true.
 * The ! not operator reverses, or negates, the value of a boolean:
 */

// Control Flow

/**
 * if statement
 */
// if (condition) {
// do something
// } else {
// do another thing
// }

// if (conditional) {
// logic to run the condition
// }

// example -1

if (true) {
  console.log("Hello control flow");
}

/**
 * if else statement
 */

let myFavoriteFood = "Vegetable, Oha and Garri";

if (myFavoriteFood.length >= 20) {
  console.log("This is my favorite food");
} else {
  console.log("This is not my favorite food");
}

/**
 * if and else if and else statement
 */

const myNewCourse = "Data Science";

if (myNewCourse.length % 3 !== 0) {
  console.log("This is my new course to learn");
} else if (myNewCourse.length % 3 > 0) {
  console.log("This is just the normal divison");
} else {
  console.log("There is no ideal");
}

/**
 * compare value with control flow
 */

let myHomeAddress = "Airport Road, Lagos";
let myWorkAddress = "Yaba, phase One, Lagos";

if (myHomeAddress.length && myWorkAddress.length === 21) {
  console.log("hello");
} else {
  console.log("Dont say Hello");
}

if (myHomeAddress.length || myWorkAddress.length === 21) {
  console.log("hello");
} else {
  console.log("Dont say Hello");
}

/**
 * switch statement
 */

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const myAnswer = 12 % 5;
switch (myAnswer) {
  case 1:
    console.log("this not 1");
    break;
  case 2:
    console.log("probaly the answer");
    break;
  case 3:
    console.log("maybe this is the answer");
    break;

  default:
    console.log("Please try again");
    break;
}

/**
 * example 2
 */

const daysOfTheWeek = new Date().getDay();
// console.log(daysOfTheWeek);

switch (daysOfTheWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("I don't know");
    break;
}

/**
 * example 3
 */

let myDiceValue = Math.floor(Math.random() * 6 + 1);
console.log(myDiceValue);

switch (myDiceValue) {
  case 1:
    console.log(`${myDiceValue} is the current dice face`);
    break;
  case 2:
    console.log(`${myDiceValue} is the current dice face`);
    break;
  case 3:
    console.log(`${myDiceValue} is the current dice face`);
    break;
  case 4:
    console.log(`${myDiceValue} is the current dice face`);
    break;
  case 5:
    console.log(`${myDiceValue} is the current dice face`);
    break;
  case 6:
    console.log(`${myDiceValue} is the current dice face`);

    break;

  default:
    console.log("Try to roll the dice to know the current dice face");
    break;
}
