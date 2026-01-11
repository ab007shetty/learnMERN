import{j as r}from"./index-B9-fRT7P.js";import{P as t}from"./PlaygroundWrapper-WsRgzkuU.js";const a=`
function MaxSubarray() {
  const [nums, setNums] = useState("-2,1,-3,4,-1,2,1,-5,4");
  const [result, setResult] = useState("");

  const find = () => {
    const arr = nums.split(",").map(Number);
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    setResult(maxSum);
  };

  return (
    <div>
      <input value={nums} onChange={e => setNums(e.target.value)} />
      <button onClick={find}>Find Max Subarray</button>
      <div>{result}</div>
    </div>
  );
}

export default MaxSubarray;
`.trim(),m=`
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
`.trim();function s(u){return r.jsx(t,{defaultCode:a,defaultJsCode:m,...u})}export{s as default};
