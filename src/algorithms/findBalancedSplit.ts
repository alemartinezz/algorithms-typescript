// The task is to find the smallest index K in the array A such that the number of occurrences
// of the integer X in the subarray A[0..K-1] is equal to the number of occurrences of integers
// that are not X in the subarray A[K..N-1].
//
// Here is the code implementing this algorithm:

// A - non-empty array of integers
// X - integer
// N - size of array A
// 0 <= K <= N
// X in [0..K-1] == !X in [K..N-1]
// if K == 0 then [0..K-1] is empty
// if K == N then [K..N-1] is empty

const testArrays: number[][] = [
  [5, 5, 1, 7, 2, 3, 5], // X in [0..K-1] == !X in [K..N-1], K == 4
  [1, 15, 5, 51, 4, 7, 9, 1, 3, 4, 5, 8, 9, 6, 3, 5, 4, 7, 6, 5, 5], // X in [0..K-1] == !X in [K..N-1], K == 4
  [1, 1, 1, 1, 1, 1], // [0..K-1] is empty
  [5, 5, 5, 5, 5, 5, 5], // [K..N-1] is empty
];

function solution(X: number, A: number[]): number {
  const xCount = A.filter((value) => value === X).length;
  if (xCount === 0 || xCount === A.length) {
    return xCount;
  }

  let sameCount = 0;
  let diffCount = A.length - xCount;
  let index = 0;

  while (sameCount !== diffCount && index !== A.length - 1) {
    if (A[index] === X) {
      sameCount += 1;
    } else {
      diffCount -= 1;
    }
    index += 1;
  }

  return index;
}

for (const array of testArrays) {
  console.log(solution(5, array));
}

// Additional test cases
console.log(solution(5, [5, 5, 1, 7, 2, 3, 5])); // 4
console.log(
  solution(5, [1, 15, 5, 51, 4, 7, 9, 1, 3, 4, 5, 8, 9, 6, 3, 5, 4, 7, 6, 5, 5])
); // 4
console.log(solution(5, [1, 1, 1, 1, 1, 1])); // 0
