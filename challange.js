// version one legacy
function findLongestWord1(sentence) {
  const cleaned = Array.from(
    new Set(
      sentence
        .split(/\s+/)
        .map((e) => e.replace(/\W/gi, ""))
        .sort((prev, next) => {
          return next.length - prev.length;
        })
    )
  );
  const longestVowel = cleaned.reduce(
    (longestVowelCount, current) => {
      const vowels = Array.from(current).reduce((acc, char) => {
        if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char)) {
          return ++acc;
        }
        return acc;
      }, 0);
      if (vowels > longestVowelCount.count) {
        return { word: current, count: vowels };
      }
      return longestVowelCount;
    },
    { word: "", count: 0 }
  );
  return longestVowel;
}

// version two smaller

function findLongestWord(sentence) {
  return Array.from(
    new Set(sentence.split(/\s+/).map((e) => e.replace(/\W/g, "")))
  ).sort((a, b) => {
    const va = (a.match(/[aeiou]/gi) || []).length;
    const vb = (b.match(/[aeiou]/gi) || []).length;
    return vb - va || b.length - a.length;
  })[0];
}
// Example usage:
const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid peeeeeeople already, have all the answers” (Socrates)";
const longestWord = findLongestWord(sentence);
console.log("Compact: Longest word with the most vowels:", longestWord);
console.log(
  "Legacy 1: Longest word with the most vowels:",
  findLongestWord1(sentence)
);
