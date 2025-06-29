import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function FindLongestWord() {
  const words = ["apple", "banana", "grape", "watermelon"];

  const findLongest = (arr) => {
    let longest = "";
    for (let word of arr) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  };

  const longestWord = findLongest(words);

  return (
    <div>
      <div>Longest word is: {longestWord}</div>
    </div>
  );
}

export default FindLongestWord;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function findLongestWord(arr) {
  let longest = "";
  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Example usage:
const words = ["apple", "banana", "grape", "watermelon"];
console.log(findLongestWord(words)); // Output: "watermelon"
`.trim();

export default function LongestWord(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}