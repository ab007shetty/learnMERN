import{j as t}from"./index-Bf1DLwj_.js";import{P as r}from"./PlaygroundWrapper-d9EEX4WR.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function DebounceSearch() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");
  const timeoutRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setResult(value); // pretend to fetch
    }, 500);
  };

  return (
    <div>
      <input value={term} onChange={handleChange} placeholder="Search..." />
      <div>Result: {result}</div>
    </div>
  );
}

export default DebounceSearch;
`.trim();function a(e){return t.jsx(r,{defaultCode:o,...e})}export{a as default};
