export default function longestSentence(text: string): number {
  const splitted_text = text.split(".");
  let longest_sentence_length = 0;

  for (const sentence of splitted_text) {
    const current_length = sentence.split(" ").length;

    if (current_length > longest_sentence_length) {
      longest_sentence_length = current_length;
    }
  }

  return longest_sentence_length;
}

// Write the tests using console.log for the above function

console.log(longestSentence("We test coders. Give us a try?")); // 4
console.log(longestSentence("Forget CVs..Save time . x x")); // 2
console.log(longestSentence("We test coders. Give us a try?")); // 4
console.log(longestSentence("Forget CVs..Save time . x x")); // 2
