import{j as t}from"./index-BcA8-jrW.js";import{P as r}from"./PlaygroundWrapper-d15mF70_.js";const s=`
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
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.

// Using includes
function removeDuplicatesUsingIncludes(arr) {
  const result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(removeDuplicatesUsingIncludes([1, 2, 2, "a", "b", "a", 3, 1, 4]));


// Using Set
function removeDuplicatesUsingSet(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesUsingSet([1, 2, 2, "a", "b", "a", 3, 1, 4]));


// Using filter
function removeDuplicatesUsingFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicatesUsingFilter([1, 2, 2, "a", "b", "a", 3, 1, 4]));


// Using Object (Hash Map)
function removeDuplicatesUsingObject(arr) {
  const seen = {};      // acts as a hash map
  const result = [];

  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;   // mark as seen
      result.push(item);  // add to result
    }
  }
  return result;
}

console.log(removeDuplicatesUsingObject([1, 2, 2, "a", "b", "a", 3, 1, 4]));

`.trim();function u(e){return t.jsx(r,{defaultCode:s,defaultJsCode:n,...e})}export{u as default};
