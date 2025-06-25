import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function AnagramChecker() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const check = () => {
    const normalize = str => str.replace(/\\s/g, '').toLowerCase().split('').sort().join('');
    setResult(normalize(a) === normalize(b));
  };

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="First string" />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="Second string" />
      <button onClick={check}>Check Anagram</button>
      {result !== null && (
        <div>{result ? "Anagram" : "Not an Anagram"}</div>
      )}
    </div>
  );
}

export default AnagramChecker;
`.trim();

export default function AnagramChecker(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}