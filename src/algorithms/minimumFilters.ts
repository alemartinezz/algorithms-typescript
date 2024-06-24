/**
 * Given an array of integers representing the pollution produced by each factory,
 * find the minimum number of filters needed to reduce the total pollution by at least half.
 *
 * @param {number[]} pollutionLevels - Array of integers representing the pollution produced by each factory.
 * @returns {number} The minimum number of filters needed to reduce the total pollution by at least half.
 */

function minimumAmountOfFilters(pollutionLevels: number[]): number {
  // Calculate the initial total pollution
  const initialTotalPollution = pollutionLevels.reduce(
    (total, pollution) => total + pollution,
    0
  );

  // Target pollution is half of the initial total pollution
  const targetPollution = initialTotalPollution / 2;

  // Sort the pollution levels in descending order
  pollutionLevels.sort((a, b) => b - a);

  let currentPollution = initialTotalPollution;
  let filters = 0;

  while (currentPollution > targetPollution) {
    // Always reduce the pollution of the factory with the highest pollution
    pollutionLevels[0] /= 2;

    // Recalculate the current total pollution
    currentPollution = pollutionLevels.reduce(
      (total, pollution) => total + pollution,
      0
    );

    // Increment the filter count
    filters++;

    // Keep the pollution levels sorted (most polluted first)
    pollutionLevels.sort((a, b) => b - a);
  }

  return filters;
}

// Test cases
console.log(minimumAmountOfFilters([5, 19, 8, 1])); // Expected output: 3
console.log(minimumAmountOfFilters([10, 10])); // Expected output: 2
console.log(minimumAmountOfFilters([3, 0, 5])); // Expected output: 2
