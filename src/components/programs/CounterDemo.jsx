import PlaygroundWrapper from "../PlaygroundWrapper";
import { Hash } from "lucide-react";

const DEFAULT_BODY = `
// Type a component, JSX, or export default!

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span style={{display: "inline-block", width: 40, textAlign: "center"}}>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Counter;
`.trim();

export default function CounterDemo() {
  return (
    <PlaygroundWrapper
      icon={Hash}
      name="Counter"
      description="Demonstrates a simple counter using useState."
      concept="useState"
      conceptDescription={
        <>
          <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span> is a React Hook that lets you add state to functional components.<br />
          In this example, <span className="font-mono">useState(0)</span> creates a <span className="font-mono">counter</span> state variable and a <span className="font-mono">setCounter</span> function that updates it. When you click the buttons, <span className="font-mono">setCounter</span> changes the state and causes the component to re-render and display the new value.
        </>
      }
      defaultCode={DEFAULT_BODY}
    />
  );
}