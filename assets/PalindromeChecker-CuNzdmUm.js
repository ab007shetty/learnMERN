import{j as n}from"./index-Bh1Wg-9I.js";import{P as t}from"./PlaygroundWrapper-CCSPfjHf.js";const o=`
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
`.trim(),a=`
//Write React components, JSX, or pure JS. No need of any import statements.

function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();   // dont use 's'
  const reversed = clean.split('').reverse().join('');
  return clean === reversed ? "Palindrome" : "Not a Palindrome";
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

`.trim();function l(e){return n.jsx(t,{defaultCode:o,defaultJsCode:a,...e})}export{l as default};
