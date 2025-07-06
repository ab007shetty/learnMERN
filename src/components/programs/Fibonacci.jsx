import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Fibonacci() {
  const [num, setNum] = React.useState(10);
  const [resultArr, setResultArr] = React.useState([]);

  const generateFibonacci = () => {
    const sequence = [];
    for (let i = 0; i < num; i++) {
      sequence.push(i < 2 ? 1 : sequence[i - 1] + sequence[i - 2]);
    }
    setResultArr(sequence);
  };

  return (
    <div>
      <div>
        <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} />
        <button onClick={generateFibonacci}>Generate</button>
      </div>
      <div>{resultArr.join(", ")}</div>
    </div>
  );
}

export default Fibonacci;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function generateFibonacci(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i < 2 ? 1 : result[i - 1] + result[i - 2]);
  }
  return result;
}

// Example usage:
const num = 5;
const sequence = generateFibonacci(num);
console.log("Fibonacci sequence:", sequence); // [1, 1, 2, 3, 5]
`.trim();

export default function Fibonacci(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}