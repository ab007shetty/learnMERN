import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function SlidingWindow() {
  const [nums, setNums] = useState("2,1,5,1,3,2");
  const [k, setK] = useState("3");
  const [result, setResult] = useState("");

  const find = () => {
    const arr = nums.split(",").map(Number);
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
      windowSum += arr[i];
      if (i >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[i - (k - 1)];
      }
    }
    setResult(maxSum);
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <br/><br/>
      <input value={k} onChange={e => setK(e.target.value)} />
      <button onClick={find}>Find Max Window Sum</button>
      <div>{result}</div>
    </div>
  );
}

export default SlidingWindow;
`.trim();

const DEFAULT_JS_CODE = `
function maxWindowSum(arr, k) {
  let sum = 0, max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[i - (k - 1)];
    }
  }
  return max;
}

console.log(maxWindowSum([2,1,5,1,3,2], 3)); // 9
`.trim();

export default function SlidingWindow(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
