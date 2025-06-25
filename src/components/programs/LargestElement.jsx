import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function LargestElement() {
  const [input, setInput] = useState("[1,5,3,9,2]");
  const [largest, setLargest] = useState(null);

  const find = () => {
    try {
      const arr = JSON.parse(input);
      setLargest(Math.max(...arr));
    } catch {
      setLargest("Invalid array");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={find}>Find Largest</button>
      <div>{largest}</div>
    </div>
  );
}

export default LargestElement;
`.trim();

export default function LargestElement(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}