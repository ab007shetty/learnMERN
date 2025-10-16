import{j as e}from"./index-DjC9gwR6.js";import{P as o}from"./PlaygroundWrapper-aXiJo82o.js";const n=`
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
`.trim();function s(t){return e.jsx(o,{defaultCode:n,...t})}export{s as default};
