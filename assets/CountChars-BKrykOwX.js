import{j as e}from"./index-DW8VmNK2.js";import{P as o}from"./PlaygroundWrapper-BbDN0lfi.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function CountRepeatedChars() {
  const [input, setInput] = useState("madam007");
  const [result, setResult] = useState({});

  const count = () => {
    const counts = {};
    for (let ch of input) {
      counts[ch] = (counts[ch] || 0) + 1;
    }
    setResult(counts);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={count}>Count</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default CountRepeatedChars;
`.trim(),u=`
//Write React components, JSX, or pure JS. No need of any import statements.

function countRepeatedChars(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char in count) {       // use if needed,  if (count[char] > 1) 
      console.log(char + ": " + count[char]);
  }
}

// Example usage:
countRepeatedChars("Hello");
`.trim();function a(t){return e.jsx(o,{defaultCode:n,defaultJsCode:u,...t})}export{a as default};
