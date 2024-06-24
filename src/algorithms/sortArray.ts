/**
 * Algorithm to sort an array using the built-in sort method.
 *
 * @param arr - The input array to be sorted.
 * @returns number[] - Returns a new array that is sorted.
 */
function simpleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid mutating the original array
  const sortedArr = [...arr];

  // Use the built-in sort method with a comparison function
  sortedArr.sort((a, b) => a - b);

  return sortedArr;
}

// Example usage:
const testArray = [3, 6, 8, 10, 1, 2, 1];
console.log(simpleSort(testArray)); // Output: [1, 1, 2, 3, 6, 8, 10]

/*
 * Prompt: Write a TypeScript function that sorts an array using the built-in sort method. The function should
 * return a new array that is sorted in ascending order.
 */

// Tests

console.log(simpleSort([3, 6, 8, 10, 1, 2, 1])); // [1, 1, 2, 3, 6, 8, 10]
console.log(simpleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(simpleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(simpleSort([1])); // [1]
