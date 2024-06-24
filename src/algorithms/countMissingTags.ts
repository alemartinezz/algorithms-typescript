// Your company is tracking processes that are being spawned by logging
// the processes in form of xml app tags. When the process starts, open
// tag gets logged `<app>` and when the process ends, the close tag
// `</app>` gets logged.
// `<app></app>` - single process started and closed

// The process can spawn other processess, resulting in nested tags
// `‹арр><арр><app></app></app><арр></app></app>`

// Unfortunately, the logger got broken and it's sometimes missing the correct
// information in the logs. Your task is to write a function that will take the
// broken log and output how many tags (both start and end) were missing from the file

export default function countMissingTags(log: string): number {
  let openTags = 0;
  let closeTags = 0;

  for (let i = 0; i < log.length; i++) {
    if (log[i] === "<") {
      if (log[i + 1] === "/") {
        // It's a closing tag
        closeTags++;
        i += 5; // Skip past '</app>'
      } else {
        // It's an opening tag
        openTags++;
        i += 4; // Skip past '<app>'
      }
    }
  }

  // The number of missing tags is the absolute difference between the counts of opening and closing tags
  return Math.abs(openTags - closeTags);
}

// Write the tests using console.log for the above function

console.log(countMissingTags("<app></app>")); // 0
console.log(countMissingTags("<app><app></app></app>")); // 0
console.log(countMissingTags("<app><app></app></app>")); // 1
console.log(countMissingTags("<app><app></app></app><app></app>")); // 0
console.log(countMissingTags("<app><app></app></app><app></app></app>")); // 1
