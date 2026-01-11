import{j as t}from"./index-BcA8-jrW.js";import{P as r}from"./PlaygroundWrapper-d15mF70_.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function Autocomplete() {
  const items = ["apple","banana","orange","grape","mango"];
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  React.useEffect(() => {
    setFiltered(items.filter(item => item.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map((item,i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

export default Autocomplete;
`.trim();function i(e){return t.jsx(r,{defaultCode:o,...e})}export{i as default};
