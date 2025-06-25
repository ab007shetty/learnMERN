import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Fibonacci() {
  const [n, setN] = useState(5);
  const [result, setResult] = useState([]);

  const gen = () => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i < 2 ? 1 : arr[i - 1] + arr[i - 2]);
    }
    setResult(arr);
  };

  return (
    <div>
      <input
        type="number"
        value={n}
        onChange={e => setN(Number(e.target.value))}
      />
      <button onClick={gen}>Generate</button>
      <div>{result.join(", ")}</div>
    </div>
  );
}

export default Fibonacci;
`.trim();

export default function Fibonacci(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}