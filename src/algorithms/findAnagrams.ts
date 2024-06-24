/*
create a function that would find all anagrams of a given word,
using a word list that was provided for the purpose
 */

export function findAnagrams(word: string, wordList: string[]): string[] {
  const sortedWord = word.split("").sort().join("");
  const anagrams = wordList.filter((word) => {
    return word.split("").sort().join("") === sortedWord;
  });
  return anagrams;
}

// Test

const word = "listen";
const wordList = ["enlist", "google", "inlets", "banana"];
console.log(findAnagrams(word, wordList)); // ["enlist", "inlets"]
