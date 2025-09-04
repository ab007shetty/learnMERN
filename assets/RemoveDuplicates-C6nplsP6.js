import{j as t}from"./index-DFz3m4oZ.js";import{P as o}from"./PlaygroundWrapper-_VVRH7F6.js";const s=`
//Write React components, JSX, or pure JS. No need of any import statements.

function RemoveDuplicates() {
  const [input, setInput] = React.useState("[1,2,2,3,4,4,5]");
  const [output, setOutput] = React.useState([]);

  const remove = () => {
    const arr = JSON.parse(input);
    const result = [];
    for (let item of arr) {
      if (!result.includes(item)) result.push(item);
    }
    setOutput(result);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={remove}>Remove</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}


export default RemoveDuplicates;
`.trim(),r=`
//Write React components, JSX, or pure JS. No need of any import statements.

function removeDuplicates(arr) {
  const seen = {};      // acts as a hash map
  const result = [];

  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;   // mark as seen
      result.push(item);   // add to result
    }
  }

  return result;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, "a", "b", "a", 3, 1, 4]));
`.trim();function a(e){return t.jsx(o,{defaultCode:s,defaultJsCode:r,...e})}export{a as default};
