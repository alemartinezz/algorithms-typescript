export default function smallestMissingNumber(numbers: number[]): number {
  let items: { [key: number]: boolean } = {};

  for (let x of numbers) {
    if (x >= 0) {
      items[x] = true;
    }
  }

  let counter = 0;
  while (items[counter]) {
    counter++;
  }

  return counter;
}

// Write the tests using console.log for the above function

console.log(smallestMissingNumber([1, 3, 6, 4, 1, 2])); // 5
console.log(smallestMissingNumber([1, 2, 3])); // 4
console.log(smallestMissingNumber([-1, -3])); // 1
console.log(smallestMissingNumber([1, 2, 0])); // 3
console.log(smallestMissingNumber([1, 2, 3, 4, 5])); // 6
