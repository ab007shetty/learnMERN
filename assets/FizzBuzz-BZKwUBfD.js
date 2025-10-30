import{j as t}from"./index-DW8VmNK2.js";import{P as o}from"./PlaygroundWrapper-BbDN0lfi.js";const u=`
//Write React components, JSX, or pure JS. No need of any import statements.

function FizzBuzz() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    let output = "";
    for (let i = 1; i <= num; i++) {
      if (i % 15 === 0) output += "FizzBuzz ";
      else if (i % 3 === 0) output += "Fizz ";
      else if (i % 5 === 0) output += "Buzz ";
      else output += i + " ";
    }
    setResult(output.trim());
  };

  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="Enter number" />
      <button onClick={handleCheck}>Run</button>
      <div>{result}</div>
    </div>
  );
}

export default FizzBuzz;
`.trim(),i=`
//Write React components, JSX, or pure JS. No need of any import statements.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(15);
`.trim();function z(e){return t.jsx(o,{defaultCode:u,defaultJsCode:i,...e})}export{z as default};
