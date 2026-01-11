import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function FlattenArray() {
  const [input, setInput] = useState("[1,[2,[3,4],5],6]");
  const [output, setOutput] = useState([]);

  const flatten = arr => arr.reduce(
    (acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);

  const handle = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(flatten(parsed));
    } catch {
      setOutput(["Invalid array"]);
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handle}>Flatten</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}

export default FlattenArray;
`.trim();

// Default JavaScript code
const DEFAULT_JS_CODE = `
// Write React components, JSX, or pure JS. No need of any import statements.

// With built-in method
const arr = [1, [2, [3, [4, 5]]]];
console.log(arr.flat(Infinity));


// flattening using reduce array method
function flatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, 5]]]]));


// Manual flattening using recursion (loop based)
function flattenUsingRecursion(arr) {
  let res = [];

  for (let item of arr) {
    Array.isArray(item) ? res.push(...flattenUsingRecursion(item)) : res.push(item);
  }
    return res;
}

console.log(flattenUsingRecursion([1, [2, [3, [4, 5]]]]));

// Without ..., push adds the whole array as one element. Since concat() does not modify the original array but returns a new one, we must reassign it using res = res.concat(...) or the result is lost.

`.trim();

export default function FlattenArray(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}