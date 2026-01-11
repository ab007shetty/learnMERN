import{j as t}from"./index-B9-fRT7P.js";import{P as r}from"./PlaygroundWrapper-WsRgzkuU.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function ReverseString() {
  const [input, setInput] = useState("hello");
  const [reversed, setReversed] = useState("");

  const reverse = () => {
    let rev = "";
    for (let i = input.length - 1; i >= 0; i--) {
      rev += input[i];
    }
    setReversed(rev);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter string" />
      <button onClick={reverse}>Reverse</button>
      <div>{reversed}</div>
    </div>
  );
}

export default ReverseString;
`.trim(),o=`
// Write React components, JSX, or pure JS. No need of any import statements.

// Using built-in methods
function reverseStringBuiltIn(input) {
  return input.split('').reverse().join('');
}

console.log(reverseStringBuiltIn("olleh")); // "hello"


// Without built-in methods
function reverseStringManual(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

console.log(reverseStringManual("doog")); // "good"


//Using for-of loop
function reverseString(str) {
  let res = "";
  for (let char of str) {
    res = char + res;
  }
  return res;
}

console.log(reverseString("yad")); // day

`.trim();function u(e){return t.jsx(r,{defaultCode:n,defaultJsCode:o,...e})}export{u as default};
