import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
// Type a component, JSX, or export default!

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}> - </button>
      <h1> {counter} </h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}> + </button>
    </div>
  );
}

export default Counter;
`.trim();

export default function CounterDemo(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}