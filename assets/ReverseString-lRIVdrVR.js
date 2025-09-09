import{j as t}from"./index-Bf1DLwj_.js";import{P as r}from"./PlaygroundWrapper-d9EEX4WR.js";const n=`
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
`.trim(),i=`
//Write React components, JSX, or pure JS. No need of any import statements.

function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

// Simulate calling with user-provided input
console.log(reverseString("hello")); // Output: "olleh"
`.trim();function u(e){return t.jsx(r,{defaultCode:n,defaultJsCode:i,...e})}export{u as default};
