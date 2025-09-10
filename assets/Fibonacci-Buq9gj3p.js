import{j as t}from"./index-Bh1Wg-9I.js";import{P as n}from"./PlaygroundWrapper-CCSPfjHf.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function Fibonacci() {
  const [num, setNum] = React.useState(10);
  const [resultArr, setResultArr] = React.useState([]);

  const generateFibonacci = () => {
    const sequence = [];
    for (let i = 0; i < num; i++) {
      sequence.push(i === 0 ? 0 : i===1 ? 1 : sequence[i - 1] + sequence[i - 2]);
    }
    setResultArr(sequence);
  };

  return (
    <div>
      <div>
        <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} />
        <button onClick={generateFibonacci}>Generate</button>
      </div>
      <div>{resultArr.join(", ")}</div>
    </div>
  );
}

export default Fibonacci;
`.trim(),i=`
//Write React components, JSX, or pure JS. No need of any import statements.

function generateFibonacci(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i === 0 ? 0 : i===1 ? 1 : result[i - 1] + result[i - 2]);
  }
  return result;
}

// Example usage:
const num = 10;
const sequence = generateFibonacci(num);
console.log("Fibonacci sequence:", sequence);
`.trim();function s(e){return t.jsx(n,{defaultCode:o,defaultJsCode:i,...e})}export{s as default};
