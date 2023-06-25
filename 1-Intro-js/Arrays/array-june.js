let placesIlove = ["Lagos", "Abuja", "Kano", "Ogun"];
console.log("placesIlove", placesIlove);

let getThirdPlacesILove = placesIlove[2];
console.log(getThirdPlacesILove);

const myList = ["Clothe", 2, true, "Mango"];
console.log("myList", myList);

// methods in Arrays

/**
 * Gets or sets the length of the array.
 * This is a number one higher than the
 * highest index in the array.
 */
const lengthOfPlacesIlove = placesIlove.length;
console.log("lengthOfPlacesIlove", lengthOfPlacesIlove);

/**
 * .pop()
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and
 * the array is not modified.
 */

const myFoodList = ["rice", "dodo", "beans", "fish", "mango"];
const popElement = myFoodList.pop();
console.log(popElement);

/**
 * .push()
 * Appends new elements to the end of an array,
 * and returns the new length of the array.
 * @param items — New elements to add to the array.
 */
const addItemToMyFoodList = myFoodList.push("stew");
console.log(myFoodList);

/**
 * .shift()
 * Removes the first element from an array and returns
 * it. If the array is empty, undefined is returned
 * and the array is not modified.
 */

console.log("shift-method", myFoodList.shift());

/**
 * .unshift()
 * Inserts new elements at the start of an array,
 * and returns the new length of the array.
 * @param items — Elements to insert at the
 * start of the array.
 */

myFoodList.unshift("Oha");
console.log("unshift-method", myFoodList);

/**
 * .split()
 * Split a string into substrings using
 * the specified separator and return them as an array.
 */

const itemToSplit = "tumeric";
console.log(itemToSplit.split(""));

/**
 * .slice()
 * Returns a copy of a section of an array. For both start
 * and end, a negative index can be used to indicate
 * an offset from the end of the array.
 * For example, -2 refers to the second to last
 * element of the array.
 */

const arrayToSlice = ["Garlic", "Ginger", "Tumeric", "BlackSeed", "Spinach"];
console.log(arrayToSlice.slice(1, 3));
console.log(arrayToSlice.slice(-2, -1));

/**
 * .join()
 * Adds all the elements of an array into a string,
 * separated by the specified separator string.
 */

let mySchoolName = "Marusoft Academy";
console.log(mySchoolName.split("").join(""));

/**
 * .reverse()
 * Reverses the elements in an array in place.
 * This method mutates the array and returns
 * a reference to the same array.
 */

const itemToReversed = ["vegetable", "rice", "stew", "dodo"];
console.log(itemToReversed.reverse());

/**
 * .includes()
 * The element to search for.
 * Determines whether an array
 * includes a certain element,
 * returning true or false as appropriate.
 */

const myFriendList = [
  "alimi",
  "mubarak",
  "muhammed",
  "hamzah",
  "abdulAfeez",
  "khalid",
  "basheerah",
];
console.log(myFriendList.includes("Taiwo", 0));
console.log(myFriendList.includes("Kemi", 1));
console.log(myFriendList.includes("Khalid".toLowerCase(), 0));

/**
 * .splice()
 * Removes elements from an array and,
 * if necessary, inserts new elements in their
 * place, returning the deleted elements.
 * @param start — The zero-based location in
 * the array from which to start removing elements.
 * @param deleteCount — The number of elements to remove.
 * @returns — An array containing the elements
 * that were deleted.
 */

const countries = ["Nigeria", "Togo", "Ghana", "Chad", "Tunsia", "Haiti"];
console.log(countries.splice(0, 2));



