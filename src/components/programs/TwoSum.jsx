import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function TwoSum() {
  const [nums, setNums] = useState("2,7,11,15");
  const [target, setTarget] = useState("9");
  const [result, setResult] = useState("");

  const find = () => {
    const arr = nums.split(",").map(Number);
    const map = {};
    for (let i = 0; i < arr.length; i++) {
      const diff = target - arr[i];
      if (map[diff] !== undefined) {
        setResult(\`[\${map[diff]}, \${i}]\`);
        return;
      }
      map[arr[i]] = i;
    }
    setResult("No pair found");
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <br/><br/>
      <input value={target} onChange={e => setTarget(e.target.value)} />
      <button onClick={find}>Find</button>
      <div>{result}</div>
    </div>
  );
}

export default TwoSum;
`.trim();

const DEFAULT_JS_CODE = `
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) return [map[diff], i];
    map[nums[i]] = i;
  }
  return [];
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
`.trim();

export default function TwoSum(props) {
  return (
    <PlaygroundWrapper defaultCode={DEFAULT_BODY} defaultJsCode={DEFAULT_JS_CODE} {...props} />
  );
}
