/*
create a function that takes a number and returns a comma-formatted
 string, WITHOUT using a native function built in to your language
 for that purpose
 */

export function numberToString(num: number): string {
  const numStr = num.toString();
  const numStrArr = numStr.split("");
  let result = "";
  let counter = 0;
  for (let i = numStrArr.length - 1; i >= 0; i--) {
    result = numStrArr[i] + result;
    counter++;
    if (counter % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }
  return result;
}

// Test

console.log(numberToString(1000000)); // 1,000,000
console.log(numberToString(10000000)); // 10,000,000
console.log(numberToString(100000000)); // 100,000,000
console.log(numberToString(1000000000)); // 1,000,000,000
