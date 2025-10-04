import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function FindMissingNumber() {
  const [nums, setNums] = useState("1,2,4,5");
  const [missing, setMissing] = useState(null);

  const find = () => {
    const arr = nums.split(",").map(Number);
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((a, b) => a + b, 0);
    setMissing(total - sum);
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={find}>Find Missing</button>
      <div>Missing Number: {missing}</div>
    </div>
  );
}

export default FindMissingNumber;
`.trim();

const DEFAULT_JS_CODE = `
function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}

console.log(findMissing([1, 2, 4, 5])); // 3
`.trim();

export default function FindMissingNumber(props) {
  return (
    <PlaygroundWrapper defaultCode={DEFAULT_BODY} defaultJsCode={DEFAULT_JS_CODE} {...props} />
  );
}
