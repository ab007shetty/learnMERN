import{j as s}from"./index-CJcdpC0y.js";import{P as t}from"./PlaygroundWrapper-DAUxX0za.js";const i=`
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
`.trim(),e=`
function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}

console.log(findMissing([1, 2, 4, 5])); // 3
`.trim();function u(n){return s.jsx(t,{defaultCode:i,defaultJsCode:e,...n})}export{u as default};
