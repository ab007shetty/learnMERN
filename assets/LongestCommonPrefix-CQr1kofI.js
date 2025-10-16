import{j as r}from"./index-DjC9gwR6.js";import{P as t}from"./PlaygroundWrapper-aXiJo82o.js";const i=`
function LongestCommonPrefix() {
  const [words, setWords] = useState("flower,flow,flight");
  const [prefix, setPrefix] = useState("");

  const find = () => {
    const arr = words.split(",");
    let pre = arr[0];
    for (let i = 1; i < arr.length; i++) {
      while (!arr[i].startsWith(pre)) {
        pre = pre.slice(0, -1);
        if (!pre) break;
      }
    }
    setPrefix(pre);
  };

  return (
    <div>
      <input value={words} onChange={e => setWords(e.target.value)} />
      <button onClick={find}>Find Prefix</button>
      <div>{prefix}</div>
    </div>
  );
}

export default LongestCommonPrefix;
`.trim(),o=`
function longestCommonPrefix(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
`.trim();function f(e){return r.jsx(t,{defaultCode:i,defaultJsCode:o,...e})}export{f as default};
