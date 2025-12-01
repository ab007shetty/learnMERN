import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Autocomplete() {
  const items = ["apple","banana","orange","grape","mango"];
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  React.useEffect(() => {
    setFiltered(items.filter(item => item.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map((item,i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default Autocomplete;
`.trim();

export default function Autocomplete(props) {
  return <PlaygroundWrapper defaultCode={DEFAULT_BODY} {...props} />;
}
