import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

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
    <div>
      <h1>Todo</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => remove(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
`.trim();

export default function TodoDemo(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}