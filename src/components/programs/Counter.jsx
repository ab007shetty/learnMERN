import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_REACT_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Counter() {
  const [counter, setCounter] = useState(0);

// setCounter(counter + 1) can be wrong, use prevCount to always get the latest value

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

export default function Counter(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_REACT_CODE}
      {...props}
    />
  );
}