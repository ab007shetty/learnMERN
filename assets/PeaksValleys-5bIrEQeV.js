import{j as e}from"./index-B9-fRT7P.js";import{P as s}from"./PlaygroundWrapper-WsRgzkuU.js";const a=`
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
`.trim(),t=`
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
`.trim();function l(r){return e.jsx(s,{defaultCode:a,defaultJsCode:t,...r})}export{l as default};
