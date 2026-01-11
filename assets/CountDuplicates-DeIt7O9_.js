import{j as e}from"./index-B9-fRT7P.js";import{P as n}from"./PlaygroundWrapper-WsRgzkuU.js";const u=`
//Write React components, JSX, or pure JS. No need of any import statements.

function CountDuplicates() {
  const [input, setInput] = useState('["apple","banana","apple","orange","banana","apple"]');
  const [output, setOutput] = useState({});

  const count = () => {
    const arr = JSON.parse(input);
    const result = {};
    arr.forEach(item => {
      result[item] = (result[item] || 0) + 1;
    });
    setOutput(result);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={count}>Count</button>
      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}

export default CountDuplicates;
`.trim(),a=`
//Count duplicates in array
function countDuplicates(arr) {
  const result = {};
  arr.forEach(item => {
    result[item] = (result[item] || 0) + 1;
  });
  return result;
}

// Example usage:
console.log(countDuplicates(['apple','banana','apple','orange','banana','apple']));
`.trim();function p(t){return e.jsx(n,{defaultCode:u,defaultJsCode:a,...t})}export{p as default};
