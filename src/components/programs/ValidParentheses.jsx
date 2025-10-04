import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
function ValidParentheses() {
  const [input, setInput] = useState("()[]{}");
  const [isValid, setIsValid] = useState("");

  const check = () => {
    const stack = [];
    const map = { ")": "(", "}": "{", "]": "[" };
    for (let ch of input) {
      if ("({[".includes(ch)) stack.push(ch);
      else if (stack.pop() !== map[ch]) {
        setIsValid("Invalid");
        return;
      }
    }
    setIsValid(stack.length === 0 ? "Valid" : "Invalid");
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={check}>Check</button>
      <div>{isValid}</div>
    </div>
  );
}

export default ValidParentheses;
`.trim();

const DEFAULT_JS_CODE = `
function validParentheses(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };
  for (let ch of s) {
    if ("({[".includes(ch)) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}

console.log(validParentheses("()[]{}")); // true
`.trim();

export default function ValidParentheses(props) {
  return (
    <PlaygroundWrapper defaultCode={DEFAULT_BODY} defaultJsCode={DEFAULT_JS_CODE} {...props} />
  );
}
