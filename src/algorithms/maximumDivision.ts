/**
 * The task is to find a calculated value based on the absolute values of two integers A and B.
 * The function follows these steps:
 * 1. Convert A and B to their absolute values.
 * 2. If A equals B and B is either 1 or 2, return 4.
 * 3. If the sum of A and B is 1, return 3.
 * 4. Calculate the biggest division result among A/2, B/2, and (A+B)/3.
 * 5. Return the biggest division result plus the parity of the sum (biggestDiv + A + B).
 *
 * Here is the code implementing this algorithm:
 */

function solution(A: number, B: number): number {
  A = Math.abs(A);
  B = Math.abs(B);

  if (A === B && (B === 1 || B === 2)) {
    return 4;
  }

  if (A + B === 1) {
    return 3;
  }

  const biggestDiv: number = Math.max(A / 2, B / 2, (A + B) / 3);

  return biggestDiv + ((biggestDiv + A + B) % 2);
}

console.log(solution(1, 4)); // Example test case

// Valid input range: -100000 to 100000
