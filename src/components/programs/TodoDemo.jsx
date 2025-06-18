import PlaygroundWrapper from "../PlaygroundWrapper";
import { ListTodo } from "lucide-react";

const DEFAULT_BODY = `
// Type a component, JSX, or export default!

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const remove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Todo</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => remove(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
`.trim();

export default function TodoDemo() {
  return (
    <PlaygroundWrapper
      icon={ListTodo}
      name="ToDo"
      description="Demonstrates useState for managing both the todo array and input value in a functional component."
      concept="useState"
      conceptDescription={
        <>
          <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span> lets you declare state variables in functional components.<br />
          Here, <span className="font-mono">useState([])</span> stores the list of todos and <span className="font-mono">useState("")</span> manages the input field value. Each state update causes the component to re-render and display the latest UI.
        </>
      }
      defaultCode={DEFAULT_BODY}
    />
  );
}