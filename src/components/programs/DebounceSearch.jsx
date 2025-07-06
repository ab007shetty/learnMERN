import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function DebounceSearch() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");
  const timeoutRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setResult(value); // pretend to fetch
    }, 500);
  };

  return (
    <div>
      <input value={term} onChange={handleChange} placeholder="Search..." />
      <div>Result: {result}</div>
    </div>
  );
}

export default DebounceSearch;
`.trim();

export default function DebounceSearch(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}