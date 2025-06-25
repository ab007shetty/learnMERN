import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function RemoveDuplicates() {
  const [input, setInput] = useState("[1,2,2,3,4,4,5]");
  const [output, setOutput] = useState([]);

  const remove = () => {
    try {
      const arr = JSON.parse(input);
      const seen = {};
      const unique = [];
      for (let n of arr) {
        if (!seen[n]) {
          seen[n] = true;
          unique.push(n);
        }
      }
      setOutput(unique);
    } catch {
      setOutput(["Invalid array"]);
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={remove}>Remove Duplicates</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}

export default RemoveDuplicates;
`.trim();

export default function RemoveDuplicates(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}