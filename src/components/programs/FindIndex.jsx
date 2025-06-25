import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function FindIndex() {
  const [input, setInput] = useState("[1,2,3,4,5]");
  const [target, setTarget] = useState("");
  const [index, setIndex] = useState(null);

  const find = () => {
    try {
      const arr = JSON.parse(input);
      setIndex(arr.indexOf(Number(target)));
    } catch {
      setIndex("Invalid array");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Array" />
      <input value={target} onChange={e => setTarget(e.target.value)} placeholder="Element" />
      <button onClick={find}>Find Index</button>
      <div>{index}</div>
    </div>
  );
}

export default FindIndex;
`.trim();

export default function FindIndex(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}