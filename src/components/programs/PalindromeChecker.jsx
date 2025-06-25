import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function PalindromeChecker() {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const check = () => {
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

export default function PalindromeChecker(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}