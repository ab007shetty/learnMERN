import{j as t}from"./index-DoYSeZSO.js";import{P as r}from"./PlaygroundWrapper-B26a1wkb.js";const a=`
//Write React components, JSX, or pure JS. No need of any import statements.

function AnagramChecker() {
  const [a, setA] = useState("listen");  
  const [b, setB] = useState("silent");    
  const [result, setResult] = useState(null); 

  const check = () => {
    if (!a.trim() || b.trim() === "") {
      setResult(null);
      return;
    }

    const normalize = str =>
      str.replace(/\\s/g, '')   // remove all spaces
         .toLowerCase()        // convert to lowercase
         .split('')            // split into characters
         .sort()               // sort alphabetically
         .join('');            // join back to string

      return normalize(a) === normalize(b) ? "Anagram" : "Not an Anagram";
  };

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} placeholder="First string" />
      <br />    <br />
      <input value={b} onChange={e => setB(e.target.value)} placeholder="Second string" />
      <button onClick={check}>Check Anagram</button>
      {result !== null && (
        <div>{result ? "Anagram" : "Not an Anagram"}</div>
      )}
    </div>
  );
}

export default AnagramChecker;
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function AnagramChecker(str1, str2) {

    const normalize = str =>
      str.replace(/\\s/g, '')   
         .toLowerCase()        
         .split('')           
         .sort()              
         .join('');  

  return normalize(str1) === normalize(str2);
}

// Example usage:
console.log(AnagramChecker("listen       ", "silent")); // true
console.log(AnagramChecker("hello", "world"));   // false
`.trim();function l(e){return t.jsx(r,{defaultCode:a,defaultJsCode:n,...e})}export{l as default};
