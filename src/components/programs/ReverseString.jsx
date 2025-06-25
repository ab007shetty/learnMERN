import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function ReverseString() {
  const [input, setInput] = useState("");
  const [reversed, setReversed] = useState("");

  const reverse = () => setReversed(input.split('').reverse().join(''));

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter string" />
      <button onClick={reverse}>Reverse</button>
      <div>{reversed}</div>
    </div>
  );
}

export default ReverseString;
`.trim();

export default function ReverseString(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}