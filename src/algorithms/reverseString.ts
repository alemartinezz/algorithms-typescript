/**
 * Algorithm to reverse a given string.
 *
 * @param str - The input string to be reversed.
 * @returns string - Returns a new string that is the reverse of the input string.
 */

/*
 * Prompt: Write a TypeScript function that reverses a given string. The function should return a new string that
 * is the reverse of the input string.
 */

function reverseString(str: string): string {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("Hello, World!")); // Output: "!dlroW ,olleH"
console.log(reverseString("OpenAI")); // Output: "IAnepO"
console.log(reverseString("TypeScript")); // Output: "tpircSepyT"
console.log(reverseString("Racecar")); // Output: "racecaR"
