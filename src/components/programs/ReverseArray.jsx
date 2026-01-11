import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function ReverseArray() {
  const [nums, setNums] = useState("1,2,3,4,5");
  const [result, setResult] = useState("");

  const reverse = () => {
    const arr = nums.split(",").map(Number);
    let left = 0, right = arr.length - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    setResult(arr.join(", "));
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={reverse}>Reverse</button>
      <div>{result}</div>
    </div>
  );
}

export default ReverseArray;
`.trim();

const DEFAULT_JS_CODE = `
function reverseArray(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4]));
`.trim();

export default function ReverseArray(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}

