import{j as r}from"./index-DoYSeZSO.js";import{P as e}from"./PlaygroundWrapper-B26a1wkb.js";const a=`
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
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid array";
  }

  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}


// Example usage:
const input = [1, 5, 3, 9, 2];
console.log("Largest Number is: ", findLargest(input)); // Output: 9
`.trim();function u(t){return r.jsx(e,{defaultCode:a,defaultJsCode:n,...t})}export{u as default};
