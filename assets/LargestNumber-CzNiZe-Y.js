import{j as e}from"./index-B9-fRT7P.js";import{P as r}from"./PlaygroundWrapper-WsRgzkuU.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function LargestNumber() {
  const [input, setInput] = useState("[1,5,3,9,2]");
  const [largest, setLargest] = useState("");

  const find = () => {
    try {
      const arr = JSON.parse(input); //turns string into array
      let max = Math.max(...arr);
      setLargest(max);
    } catch {
      setLargest("Invalid array");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={find}>Find</button>
      <div>{largest}</div>
    </div>
  );
}

export default LargestNumber;
`.trim(),a=`
//Write React components, JSX, or pure JS. No need of any import statements.

// Using reduce method
const findLargestUsingReduce = arr =>
  arr.reduce((max, cv) => (cv > max ? cv : max), arr[0]);

console.log(findLargestUsingReduce([1, 5, 3, 8, 2])); // Output: 8


// Using for-of loop
function findLargestUsingLoop(arr) {

  let max = arr[0];
  
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findLargestUsingLoop([1, 5, 3, 9, 2])); // Output: 9
`.trim();function u(t){return e.jsx(r,{defaultCode:n,defaultJsCode:a,...t})}export{u as default};
