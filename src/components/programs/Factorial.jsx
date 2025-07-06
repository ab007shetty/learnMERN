import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Factorial() {
  const [input, setInput] = useState("3");
  const [output, setOutput] = useState("");

  const calculateFactorial = () => {
    const number = parseInt(input);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    setOutput(factorial);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={calculateFactorial}>Factorial</button>
      <div>{output}</div>
    </div>
  );
}

export default Factorial;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
`.trim();

export default function Factorial(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}