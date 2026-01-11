import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function PeaksValleys() {
  const [nums, setNums] = useState("1,3,2,4,1");
  const [result, setResult] = useState("");

  const find = () => {
    const arr = nums.split(",").map(Number);
    const res = [];

    for (let i = 1; i < arr.length - 1; i++) {
      if (
        (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
        (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
      ) {
        res.push(arr[i]);
      }
    }
    setResult(res.join(", "));
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={find}>Find Peaks/Valleys</button>
      <div>{result}</div>
    </div>
  );
}

export default PeaksValleys;
`.trim();

const DEFAULT_JS_CODE = `
function peaksValleys(arr) {
  const res = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
    ) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(peaksValleys([1,3,2,4,1]));
`.trim();

export default function PeaksValleys(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
