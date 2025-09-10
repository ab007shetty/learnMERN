import{j as e}from"./index-Bh1Wg-9I.js";import{P as o}from"./PlaygroundWrapper-CCSPfjHf.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function Todo() {
  const [todos, setTodos] = useState([]);              
  const [input, setInput] = useState("");                     

  const add = () => {
    if (input.trim()) {                                         // Ignores empty or whitespace-only strings
      setTodos([...todos, { text: input, completed: false }]); // Create and add a new todo object
      setInput("");                                           // Clear the input field after adding
    }
  };

  const remove = (index) => {
    setTodos(todos.filter((_, i) => i !== index));        // Use _ to ignore the first parameter i.e item
  };

  const toggle = (index) => {                   // !todo.completed - toggles between true/false; true only 
    setTodos(                                      // completed: false, sets it once and never flips back.
      todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo ));
  };

  return (
    <div>
      <h1>Todo</h1>                           {/* Input field is controlled; 'e' is the event object */}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggle(i)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>                  {/* () => delays execution until the button is actually clicked */}
            <button onClick={() => remove(i)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
`.trim();function s(t){return e.jsx(o,{defaultCode:n,...t})}export{s as default};
