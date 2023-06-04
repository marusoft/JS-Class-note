// ========  STRING DATA TYPE =========

console.log(
  "I am so excited to start learning JavaScript programming language"
);
console.log("Alimi Kehinde");

// ======== NUMBER =========

console.log(233233232333232);
console.log(3.142);
console.log(1 / 2);

// ====== BOLEAN ======

console.log(true);
console.log(false);

// ARITHMETIC OPERATORS

console.log("ADDITION OF 2 and 7 =", 2 + 7);
console.log("SUBTRACTION OF 10 and 7 = ", 10 - 7);
console.log("DIVISION OF 10 BY 2 = ", 10 / 2);
console.log("MULPLICATION OF 5 and 7 = ", 5 * 7);
console.log(33 % 7);
console.log(10 % 2);

// ==== VARIABLE =====
var myBag = "Laptop"; // old way

// new of declearing variable
let myName = "Alimi Kehinde";
console.log(myName);
const myRegNumber = "CA2023123GJ";
console.log(myRegNumber);
const myMatricNumber = 0134551;
console.log(myMatricNumber);

// incremenatal operators

let mango = 10;
mango++;
mango = mango + 2;
console.log(mango);

// decremental operators

let basketOfFruitOfOranges = 32;
// basketOfFruitOfOranges--
basketOfFruitOfOranges = basketOfFruitOfOranges - 4;
console.log(basketOfFruitOfOranges);

// concatenation
// First method
let myFirstName = "Kehinde";
let myLastName = "Alimi";
let myMiddleName = "Maruf";
let fullName = myFirstName + " " + myLastName;
console.log("Fullname", fullName);

// second method

fullName = `${myFirstName} ${myLastName}`;
console.log(fullName);

// Inbuilt method
// .length
let myFirstNameCount = myFirstName.length;
console.log(myFirstNameCount);

let myLastNameCount = myLastName.length;
console.log(myLastNameCount);

// .toUpperCase()

let convertMyFirstNameToUpperCase = myFirstName.toUpperCase();
console.log(convertMyFirstNameToUpperCase);
let convertMyLastNameToUpperCase = myLastName.toLowerCase();
console.log(convertMyLastNameToUpperCase);

// index of string

const firstCharacter = myFirstName[2];
console.log(firstCharacter);

let abbreviateMyMiddleName = `${myFirstName}, ${myMiddleName[0]}. ${myLastName}`;
console.log(abbreviateMyMiddleName);

// Comparison Operators

let x = 10;
let y = 7;
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);
console.log(x === y);
console.log(x !== y);

// Logical Operators

// and Operator &&
const mySchoolName = "Unity High School";
const myPrimarySchool = "Junior Academy";
const checkBothSchoolLength =
  (mySchoolName.length && myPrimarySchool.length) === 40;
console.log("checkBothSchoolLength = ", checkBothSchoolLength);

// and Operator ||

const checkEitherSchoolLength =
  (mySchoolName.length || myPrimarySchool.length) === 17;
console.log("checkEitherSchoolLength = ", checkEitherSchoolLength);

// not Operator !

const myNumber = 22;
const notMyNumber = !myNumber;
console.log("notMyNumber", notMyNumber);

// Control Flow
// IF ELSE statement
// example 1
let myAge = 33;
if (myAge) {
  console.log("This is my age");
} else {
  console.log("This is not my age");
}

// example 2
let a = 10;
let b = 30;
const answer = a + b;

if (!answer) {
  console.log("This answer is correct");
} else {
  console.log("This answer is wrong");
}

//  example  3

let myFavouriteClub = "Chelsea";

if (myFavouriteClub.length > 6) {
  console.log("This is my favourite club name");
} else {
  console.log("This is not my favourite club name ");
}

// if elseif and else
let p = 3;
const multiplyByFive = p * 5;
if (multiplyByFive < 10) {
  console.log("this is not the real answer");
} else if (multiplyByFive >= 10) {
  console.log("There can be real answer in this region");
} else {
  console.log("There is no ideal");
}

// Switch Statement

// example 1
const randomNum = Math.round(Math.random() * 5);
console.log("randomNum", randomNum);

switch (randomNum) {
  case 0:
    console.log("This is zero");
    break;
  case 1:
    console.log("This is one");
    break;
  case 2:
    console.log("This is two");
    break;
  case 3:
    console.log("This is three");
    break;
  case 4:
    console.log("This is four");
    break;
  case 5:
    console.log("This is five");
    break;

  default:
    break;
}

// example 2
const dayOfTheWeek = new Date().getDay();
console.log(dayOfTheWeek);

switch (dayOfTheWeek) {
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
    break;
}

// Tenary Operator

// condition ? console.log("do something") : console.log("do another thing");

"kehinde".length % 2 === 1
  ? console.log("this is length of my name")
  : console.log("this is not the length of my name");

//  single line commment

/**
 * multi line comment
 */

/**
 * A variable declear with let can be re-asign a new value
 * whereas, a variable declear with const cannot be re-asigned or updated.
 */
let mySchool = "LAUTECH";
mySchool = "UNILAG";
console.log("MySchool", mySchool);

// const myFavoriteProgrammingLanguage = "JavaScript";
//  myFavoriteProgrammingLanguage = "PHP"
//  console.log(" myFavoriteProgrammingLanguage", myFavoriteProgrammingLanguage);