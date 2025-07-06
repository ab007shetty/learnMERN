import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function CounterWithReducer() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "inc": return state + 1;
      case "dec": return state - 1;
      default: return state;
    }
  }, 0);

  return (
    <div>
      <button onClick={() => dispatch("dec")}>-</button> &nbsp;&nbsp;
      <span>{count}</span> &nbsp;&nbsp;
      <button onClick={() => dispatch("inc")}>+</button>
    </div>
  );
}

export default CounterWithReducer;
`.trim();

export default function CounterWithReducer(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}