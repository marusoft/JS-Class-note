/**
 * CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
 * agreeOrDisagree()
 * Write a function, agreeOrDisagree(), that takes in two strings,
 * and returns 'You agree!' if the two strings are the same
 *  and 'You disagree!' if the two strings are different.
 * if (first === second)
 * where first and second are your function's parameters
 */

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    console.log("You agree!");
  } else {
    console.log("You disagree!");
  }
};
// agreeOrDisagree("uudddgdgdgdgdgddg", "jsjjahsxgxdd")
agreeOrDisagree("uuddd", "uuddd")