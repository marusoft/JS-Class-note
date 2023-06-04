/**
 * function declearation
 */

function addition() {
  // function body
}

/**
 * Function expression
 */

let myJob = function () {};

/**
 * Arrow function
 */

let mySchoolDetails = () => {};

/**
 * Calling a function
 * example 1
 */

function myBooks() {}
myBooks();

/**
 * Calling a function
 * example 2
 */
let myDailyTask = function () {};
myDailyTask();

/**
 * Calling a function
 * example 3
 */
let myTask = () => {};
myTask();

/**
 * parameter is a and b
 * while values 7 and 8 is the argument
 * example 4
 */

const addNumber = (a, b) => {
  return a + b;
};
console.log(addNumber(7, 8));

/**
 * example 5
 */

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log("areaOfCircle = ", areaOfCircle(3));

/**
 * example 6
 * writing function in a single line
 */

let SubtractionOfNumbers = (s, t) => s - t;
console.log(SubtractionOfNumbers(7, 3));

/**
 * example 6
 * omitting bracket function with one parameter
 */

const myWeekTask = time => {
  return time * 2;
};
