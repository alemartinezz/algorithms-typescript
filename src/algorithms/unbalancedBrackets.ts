/**
 * Algorithm to check if a given string of brackets has the same number of opening and closing brackets.
 *
 * @param str - The input string containing different types of brackets.
 * @returns boolean - Returns true if the string has balanced brackets, otherwise false.
 */
function isBalancedBrackets(str: string): boolean {
  const stack: string[] = [];
  const matchingBrackets: { [key: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of str) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
const testString = "{[({}))]}]]";
console.log(isBalancedBrackets(testString)); // Output: false

/*
 * Prompt: Write a TypeScript function that checks if a given string of brackets has the same number of
 * opening and closing brackets. The function should handle different types of brackets: {}, [], and ().
 * The function should return true if the brackets are balanced and false otherwise.
 */

// Write the test cases here

console.log(isBalancedBrackets("{[({})]}")); // true
console.log(isBalancedBrackets("{[({}))]}")); // false
console.log(isBalancedBrackets("{[({})]}]")); // false
console.log(isBalancedBrackets("{[({})]}")); // true
