import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function SortedCheck() {
  const [nums, setNums] = useState("1,2,3,4,5");
  const [result, setResult] = useState("");

  const check = () => {
    const arr = nums.split(",").map(Number);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        setResult("Not Sorted");
        return;
      }
    }
    setResult("Sorted");
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={check}>Check Sorted</button>
      <div>{result}</div>
    </div>
  );
}

export default SortedCheck;
`.trim();

const DEFAULT_JS_CODE = `
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([1,2,3,4]));
`.trim();

export default function SortedCheck(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}

