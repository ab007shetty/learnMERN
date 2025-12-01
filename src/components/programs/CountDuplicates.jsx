import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
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
`.trim();

const DEFAULT_JS_CODE = `
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
`.trim();

export default function CountDuplicates(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
