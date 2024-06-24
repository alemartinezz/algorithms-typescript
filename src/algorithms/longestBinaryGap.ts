// A *binary gap* within a positive integer N is any maximal sequence of
// consecutive zeros that is surrounded by ones at both ends in the binary
// representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps:
// one of length 4 and one of length 3. The number 20 has binary representation 10100 and
// contains one binary gap of length 1. The number 15 has binary representation 1111 and
// has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// > function solution(N: number): number;
// >

// that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary
// representation 10000010001 and so its longest binary gap is of length 5.
// Given N = 32 the function should return 0, because N has binary representation
// '100000' and thus no binary gaps.

// Write an **efficient** algorithm for the following assumptions:

// - N is an integer within the range [1..2,147,483,647].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

export default function longest_binary_gap(N: number): number {
  let current_gap = 0;
  let max_gap = 0;
  let counting = false; // To start counting only after the first '1' is encountered

  for (let item of N.toString(2)) {
    if (item === "1") {
      if (counting) {
        // Only update max_gap if we have been counting a gap
        if (current_gap > max_gap) {
          max_gap = current_gap;
        }
      }
      // Reset the current gap count after a '1'
      current_gap = 0;
      counting = true; // Start counting gaps
    } else if (counting) {
      // Only count zeros if we've started counting gaps
      current_gap += 1;
    }
  }

  return max_gap;
}

console.log(longest_binary_gap(1041)); // 5
console.log(longest_binary_gap(32)); // 0
console.log(longest_binary_gap(15)); // 0
console.log(longest_binary_gap(20)); // 1
