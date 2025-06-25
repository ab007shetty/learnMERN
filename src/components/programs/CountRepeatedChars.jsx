import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function CountRepeatedChars() {
  const [input, setInput] = useState("aabccde");
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
`.trim();

export default function CountRepeatedChars(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}