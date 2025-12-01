import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
// Write React components, JSX, or pure JS. No need of any import statements.

function SetArrayOps() {
  const [arr1, setArr1] = useState("1,2,2,3");
  const [arr2, setArr2] = useState("2,3,4");
  const [result, setResult] = useState("");

  const toNumArray = str => str.split(",").map(Number);
  const run = (type) => {
    const a = toNumArray(arr1);
    const b = toNumArray(arr2);
    const B = new Set(b);

    const res = {
      unique: [...new Set(a)],
      union: [...new Set([...a, ...b])],
      intersection: a.filter(x => B.has(x)),
      difference: a.filter(x => !B.has(x)),
      membership: a.map(x => \`\${x} in b? \${B.has(x)}\`)
    }[type];

    setResult(JSON.stringify(res));
  };

  return (
    <div>
      <div>Array 1: [{arr1}]</div>
      <input value={arr1} onChange={e => setArr1(e.target.value)} /><br/><br/>
      <div>Array 2: [{arr2}]</div>
      <input value={arr2} onChange={e => setArr2(e.target.value)} /><br/><br/>

      <button onClick={() => run("unique")}>Unique</button> &nbsp;
      <button onClick={() => run("union")}>Union</button> &nbsp;
      <button onClick={() => run("intersection")}>Intersection</button> &nbsp;
      <button onClick={() => run("difference")}>Difference</button> &nbsp;
      <button onClick={() => run("membership")}>Membership</button><br/><br/>

      <div>Result: {result}</div>
    </div>
  );
}

export default SetArrayOps;
`.trim();

const DEFAULT_JS_CODE = `
// PURE JS SET + ARRAY OPERATIONS

const a = [1,2,2,3];
const b = [2,3,4];

// 1. Remove duplicates
console.log("Unique:", [...new Set(a)]); // [1,2,3]

// 2. Union
console.log("Union:", [...new Set([...a, ...b])]); // [1,2,3,4]

// 3. Intersection
console.log("Intersection:", a.filter(x => new Set(b).has(x))); // [2,3]

// 4. Difference
console.log("Difference:", a.filter(x => !new Set(b).has(x))); // [1]

// 5. Membership check (checking whether a particular element exists in a set or array)
console.log("Membership:", a.map(x => \`\${x} in b? \${new Set(b).has(x)}\`));
// ['1 in b? false', '2 in b? true', '2 in b? true', '3 in b? true']

// 6. Convert string to unique array
const str = "hello";
const uniqueChars = [...new Set(str)];
console.log("Unique chars:", uniqueChars); // ['h','e','l','o']
`.trim();

export default function SetArrayPlayground(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      defaultJsCode={DEFAULT_JS_CODE}
      {...props}
    />
  );
}
