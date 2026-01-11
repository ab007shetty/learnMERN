import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function PairSum() {
  const [nums, setNums] = useState("2,7,11,15");
  const [target, setTarget] = useState("9");
  const [result, setResult] = useState("");

  const find = () => {
    const arr = nums.split(",").map(Number);
    const set = new Set();

    for (let num of arr) {
      if (set.has(target - num)) {
        setResult("true");
        return;
      }
      set.add(num);
    }
    setResult("false");
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <br/><br/>
      <input value={target} onChange={e => setTarget(e.target.value)} />
      <button onClick={find}>Check Pair</button>
      <div>{result}</div>
    </div>
  );
}

export default PairSum;
`.trim();

const DEFAULT_JS_CODE = `
function pairSum(nums, target) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(target - num)) return true;
    set.add(num);
  }
  return false;
}

console.log(pairSum([2,7,11,15], 9));  // true
console.log(pairSum([1,2,3,4], 10));   // false
`.trim();

export default function PairSum(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
