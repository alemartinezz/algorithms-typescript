/**
 * Given an array of precedence rules, finds the word represented by the given rules.
 *
 * @param {string[]} rules - Array of precedence rules where each rule is in the format "A›B"
 * @returns {string} The word represented by the given rules
 */

function findWord(rules: string[]): string {
  // Maps to store precedence relationships
  const precedence = new Map<string, string>();
  const precedenceKeys = new Set<string>();
  const precedenceValues = new Set<string>();

  // Parse each rule and populate the maps and sets
  for (let rule of rules) {
    const [key, value] = rule.split("›");
    precedence.set(key, value);
    precedenceKeys.add(key);
    precedenceValues.add(value);
  }

  // Find the starting character (the one that is not a value in any rule)
  let start = "";
  for (let key of precedenceKeys) {
    if (!precedenceValues.has(key)) {
      start = key;
      break;
    }
  }

  // Build the result word by following the precedence rules
  let result = start;
  while (precedence.has(result[result.length - 1])) {
    result += precedence.get(result[result.length - 1]);
  }

  return result;
}

// Test cases
console.log(findWord(["P›E", "E›R", "R›U"])); // Expected output: "PERU"
console.log(findWord(["I›N", "A›I", "P›A", "S›P"])); // Expected output: "SPAIN"
console.log(findWord(["H›U", "U›N", "N›G", "G›A", "R›Y"])); // Expected output: "HUNGARY"
console.log(findWord(["I›F", "W›I", "S›W", "F›T"])); // Expected output: "SWIFT"
console.log(findWord(["R›T", "A›S", "P›O", "O›R", "G›A", "T›U", "U›G"])); // Expected output: "PORTUGAL"
console.log(
  findWord([
    "W›I",
    "R›O",
    "T›Z",
    "Z›E",
    "S›W",
    "E›R",
    "L›A",
    "A›S",
    "N›O",
    "I›T",
  ])
); // Expected output: "SWITZERLAND"
