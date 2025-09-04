import{j as o}from"./index-DFz3m4oZ.js";import{P as e}from"./PlaygroundWrapper-_VVRH7F6.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function VowelCounter() {
  const [input, setInput] = useState("Hello World");
  const [count, setCount] = useState(0);

  const countVowels = () => {
    const vowels = "aeiouAEIOU";
    let total = 0;
    for (let char of input) {
      if (vowels.includes(char)) total++;
    }
    setCount(total);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={countVowels}>Count</button>
      <div>Vowels: {count}</div>
    </div>
  );
}

export default VowelCounter;
`.trim(),u=`
//Write React components, JSX, or pure JS. No need of any import statements.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("Hello World")); // 3
console.log(countVowels("UPSC Preparation")); // 6
`.trim();function l(t){return o.jsx(e,{defaultCode:n,defaultJsCode:u,...t})}export{l as default};
