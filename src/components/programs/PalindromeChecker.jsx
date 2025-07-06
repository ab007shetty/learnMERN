import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function PalindromeChecker() {
  const [input, setInput] = useState("madam");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const check = () => {           // Removes everything except letters & numbers.
    const clean = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    setIsPalindrome(clean === clean.split('').reverse().join(''));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={check}>Check Palindrome</button>
      {isPalindrome !== null && (
        <div>{isPalindrome ? "Palindrome" : "Not a palindrome"}</div>
      )}
    </div>
  );
}

export default PalindromeChecker;
`.trim();

const DEFAULT_JS_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();   // dont use 's'
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

`.trim();

export default function PalindromeChecker(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}