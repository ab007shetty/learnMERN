import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function RemoveDuplicates() {
  const [input, setInput] = React.useState("[1,2,2,3,4,4,5]");
  const [output, setOutput] = React.useState([]);

  const remove = () => {
    try {
      const arr = JSON.parse(input);
      const seen = {};
      const unique = [];

      for (let num of arr) {
        if (!seen[num]) {
          seen[num] = true;
          unique.push(num);
        }
      }

      setOutput(unique);
    } catch {
      setOutput(["Invalid array"]);
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={remove}>Remove Duplicates</button>
      <div>{JSON.stringify(output)}</div>
    </div>
  );
}

export default RemoveDuplicates;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function removeDuplicates(arr) {
  const seen = {};
  const unique = [];

  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      unique.push(num);
    }
  }
  return unique;
}


function removeDuplicatesUsingSet(arr) {
  return [...new Set(arr)];
}

// Example usage:
const input = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(input)); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicatesUsingSet(input)); // Output: [1, 2, 3, 4, 5]
`.trim();

export default function RemoveDuplicates(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}