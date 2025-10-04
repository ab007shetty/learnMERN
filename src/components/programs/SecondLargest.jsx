import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function SecondLargest() {
  const [nums, setNums] = useState("1,5,2,9,7");
  const [second, setSecond] = useState(null);

  const find = () => {
    const arr = nums.split(",").map(Number);
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    setSecond(unique[1]);
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={find}>Find Second Largest</button>
      <div>{second}</div>
    </div>
  );
}

export default SecondLargest;
`.trim();

const DEFAULT_JS_CODE = `
function findSecondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}

console.log(findSecondLargest([1, 5, 2, 9, 7])); // 7
`.trim();

export default function SecondLargest(props) {
  return (
    <PlaygroundWrapper defaultCode={DEFAULT_BODY} defaultJsCode={DEFAULT_JS_CODE} {...props} />
  );
}
