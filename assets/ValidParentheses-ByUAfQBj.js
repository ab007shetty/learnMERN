import{j as e}from"./index-DjC9gwR6.js";import{P as s}from"./PlaygroundWrapper-aXiJo82o.js";const a=`
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
`.trim(),n=`
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
`.trim();function o(t){return e.jsx(s,{defaultCode:a,defaultJsCode:n,...t})}export{o as default};
