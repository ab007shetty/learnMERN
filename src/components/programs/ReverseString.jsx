import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function ReverseString() {
  const [input, setInput] = useState("");
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
`.trim();

const DEFAULT_JS_CODE = `
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
`.trim();

export default function ReverseString(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
