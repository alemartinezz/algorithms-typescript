/**
 * Algorithm to check if a given string is a palindrome.
 *
 * @param str - The input string to be checked.
 * @returns boolean - Returns true if the string is a palindrome, otherwise false.
 */

/*
 * Prompt: Write a TypeScript function that checks if a given string is a palindrome. A palindrome is a word,
 * phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces,
 * punctuation, and capitalization. The function should return true if the string is a palindrome and false otherwise.
 */

function isPalindrome(str: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Initialize two pointers, one at the start and one at the end of the cleaned string
  let left = 0;
  let right = cleanedStr.length - 1;

  // Loop until the pointers meet in the middle
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false; // Characters do not match
    }
    left++;
    right--;
  }

  return true; // All characters matched
}

console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("Not a palindrome phrase.")); // Output: false
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
