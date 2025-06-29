import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function LargestElement() {
  const [input, setInput] = React.useState("[1,5,3,9,2]");
  const [largest, setLargest] = React.useState(null);

  const find = () => {
    try {
      const arr = JSON.parse(input);
      if (!Array.isArray(arr) || arr.length === 0) {
        setLargest("Invalid array");
        return;
      }

      let max = arr[0];
      for (let num of arr) {
        if (num > max) {
          max = num;
        }
      }

      setLargest(max);
    } catch {
      setLargest("Invalid array");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={find}>Find Largest</button>
      <div>{largest}</div>
    </div>
  );
}

export default LargestElement;
`.trim();

// Default JavaScript code
const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid array";
  }

  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}


function findLargestUsingMath(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid array";
  }

  return Math.max(...arr);
}

// Example usage:
const input = [1, 5, 3, 9, 2];
console.log("Largest element:", findLargest(input)); // Output: 9
console.log("Largest element Using Math.max:", findLargestUsingMath(input)); // Output: 9
`.trim();

export default function LargestElement(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}