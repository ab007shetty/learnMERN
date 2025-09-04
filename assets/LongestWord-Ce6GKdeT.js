import{j as t}from"./index-DME0ChcM.js";import{P as e}from"./PlaygroundWrapper-C8RUvC-h.js";const n=`
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
`.trim(),r=`
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
`.trim();function a(o){return t.jsx(e,{defaultCode:n,defaultJsCode:r,...o})}export{a as default};
