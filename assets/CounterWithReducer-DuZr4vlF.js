import{j as e}from"./index-DFz3m4oZ.js";import{P as n}from"./PlaygroundWrapper-_VVRH7F6.js";const o=`
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
`.trim();function u(t){return e.jsx(n,{defaultCode:o,...t})}export{u as default};
