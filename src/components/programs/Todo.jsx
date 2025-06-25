import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const remove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggle(i)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => remove(i)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
`.trim();

export default function Todo(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}