/**
 * printing 1 - 10 manually
 */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/**
 * printing items in an array manually
 */
let myFavoritePlaceToLive = ["Nigeria", "Qatar", "Saudi Arabia", "Ghana"];
console.log(myFavoritePlaceToLive[0]);
console.log(myFavoritePlaceToLive[1]);
console.log(myFavoritePlaceToLive[2]);
console.log(myFavoritePlaceToLive[3]);

/**
 * Printing 1 - 10 using for loop
 */

for (let i = 1; i <= 10; i++) {
  console.log(`Printing 1 - 10 using for loop = ${i}`);
}

/**
 * using for loop to iterate over an array
 */

for (let i = 0; i < myFavoritePlaceToLive.length; i++) {
  console.log(`I would love to live in ${myFavoritePlaceToLive[i]}`);
}

/**
 * assignment
 * iterate over the food you love to eat using for loop
 */

/**
 * Looping numbers backward 5, 4, 3, 2, 1, 0
 */

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

/**
 * create an array of numbers 1 - 10,
 * iterate over the array and multiply 2 over them.
 */

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numberArray.length; i++) {
  console.log("1 - 10 multiplied by two =", numberArray[i] * 2);
}

/**
 * Nested loop
 */
const array1 = []
const array2 = []
for (let index = 0; index < array1.length; index++) {
  for (let index = 0; index < array2.length; index++) {
    //logic to perform
  }
}

/**
 * Multiplication Table
 */
const numberArrayOne = [1, 2, 3, 4, 5];
const numberArrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < numberArrayOne.length; i++) {
  for (let j = 0; j < numberArrayTwo.length; j++) {
    const result = numberArrayOne[i] * numberArrayTwo[j]
    // console.log(result);
    console.log(`${numberArrayOne[i]} * ${numberArrayTwo[j]} = ${result}`);
    // console.log(`${numberArrayOne}[i] * ${numberArrayTwo}[j]`);
  }
}
