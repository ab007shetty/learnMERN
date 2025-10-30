import{j as t}from"./index-DW8VmNK2.js";import{P as o}from"./PlaygroundWrapper-BbDN0lfi.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

 function DebounceSearch() {
  const [text, setText] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(text), 2000);
    return () => clearTimeout(t);
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Original: {text} </p>
      <p>Debounced: {debounced}</p>
    </div>
  );
}

export default DebounceSearch;
`.trim();function a(e){return t.jsx(o,{defaultCode:n,...e})}export{a as default};
