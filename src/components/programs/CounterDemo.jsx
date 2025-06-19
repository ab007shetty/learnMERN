import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

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