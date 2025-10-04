import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

 function DebounceSearch() {
  const [text, setText] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(text), 2000);
    return () => clearTimeout(t);
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Original: {text} </p>
      <p>Debounced: {debounced}</p>
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