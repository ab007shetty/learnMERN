import{j as e}from"./index-DW8VmNK2.js";import{P as r}from"./PlaygroundWrapper-BbDN0lfi.js";const u=`
//Write React components, JSX, or pure JS. No need of any import statements.

function PrimeChecker() {
  const [input, setInput] = useState("7");
  const [output, setOutput] = useState("");

  const checkPrime = () => {
    const number = parseInt(input);
    if (number <= 1) {
      setOutput("Not Prime");
      return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        setOutput("Not Prime");
        return;
      }
    }
    setOutput("Prime");
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={checkPrime}>Check</button>
      <div>{output}</div>
    </div>
  );
}

export default PrimeChecker;
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

// Example usage:
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
`.trim();function s(t){return e.jsx(r,{defaultCode:u,defaultJsCode:n,...t})}export{s as default};
