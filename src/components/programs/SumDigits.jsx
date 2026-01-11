import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function SumDigits() {
  const [num, setNum] = useState("1234");
  const [result, setResult] = useState(0);

  const sum = () => {
    const total = num.split('').reduce((acc, d) => acc + Number(d), 0);
    setResult(total);
  };

  return (
    <div>
      <input value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={sum}>Sum</button>
      <div>{result}</div>
    </div>
  );
}

export default SumDigits;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

// Sum of digits using reduce (string method)

function sumOfDigitsUsingReduce(num) {

  return num.toString()                             // can also use String(num)
  .split('')                 
  .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigitsUsingReduce(1234)); // 10



// Sum of digits using recursion (math method)

function sumOfDigitsUsingRecursion(num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigitsUsingRecursion(Math.floor(num / 10));
}

console.log(sumOfDigitsUsingRecursion(5601)); // 12
`.trim();

export default function SumDigits(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}