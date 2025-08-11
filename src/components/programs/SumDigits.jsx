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

function sumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// Example usage:
console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(5601)); // 12



function sumOfDigits(num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

// Example usage:
console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(5601)); // 12
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