import{j as r}from"./index-DjC9gwR6.js";import{P as e}from"./PlaygroundWrapper-aXiJo82o.js";const n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function ArrayOps() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [result, setResult] = useState("");

  const handlePush = () => setArr([...arr, 10]);
  const handlePop = () => setArr(arr.slice(0, -1));
  const handleMap = () => setArr(arr.map(x => x * 2));
  const handleFilter = () => setArr(arr.filter(x => x % 2 === 0));
  const handleSum = () => setResult("Sum: " + arr.reduce((a, b) => a + b, 0));

  return (
    <div>
      <div>Array: [{arr.join(", ")}]</div> <br/> <br/>
      <button onClick={handlePush}>Push 10</button> <br/>
      <button onClick={handlePop}>Pop</button> <br/>
      <button onClick={handleMap}>Map ×2</button> <br/>
      <button onClick={handleFilter}>Filter Even</button> <br/>
      <button onClick={handleSum}>Sum</button> <br/> 
      {result && <div>{result}</div>}
    </div>
  );
}

export default ArrayOps;
`.trim(),l=`
//Write React components, JSX, or pure JS. No need of any import statements.

console.log("=== PURE JS ARRAY OPERATIONS ===");

const arr = [1, 2, 3, 4, 5];

// 1. map
console.log("map:", arr.map(n => n * 2)); // [2, 4, 6, 8, 10]

// 2. filter
console.log("filter:", arr.filter(n => n % 2 === 0)); // [2, 4]

// 3. reduce
console.log("reduce:", arr.reduce((acc, n) => acc + n, 0)); // 15

// 4. forEach
console.log("forEach:");
arr.forEach(n => console.log(" -", n)); // prints each value

// 5. find
console.log("find:", arr.find(n => n > 3)); // 4

// 6. findIndex
console.log("findIndex:", arr.findIndex(n => n === 4)); // 3

// 7. some
console.log("some:", arr.some(n => n > 4)); // true

// 8. every
console.log("every:", arr.every(n => n > 0)); // true

// 9. flat
const nested = [1, [2, [3, [4]]]];
console.log("flat:", nested.flat(3)); // [1, 2, 3, 4]

// 10. flatMap
const words = ['hello world'];
console.log("flatMap:", words.flatMap(w => w.split(' '))); // ['hello', 'world']

// 11. slice
console.log("slice:", arr.slice(0, 3)); // [1, 2, 3]

// 12. splice
const spliceArr = [10, 20, 30, 40];
spliceArr.splice(1, 1); // removes 1 item at index 1
console.log("splice:", spliceArr); // [10, 30, 40]

// 13. concat
console.log("concat:", [1, 2].concat([3, 4])); // [1, 2, 3, 4]

// 14. join
console.log("join:", [1, 2, 3].join('-')); // "1-2-3"

// 15. sort
console.log("sort:", [5, 3, 1, 2, 4].sort((a, b) => a - b)); // [1, 2, 3, 4, 5]

// 16. reverse
console.log("reverse:", [...arr].reverse()); // [5, 4, 3, 2, 1]

// 17. includes
console.log("includes:", arr.includes(3)); // true

// 18. indexOf
console.log("indexOf:", arr.indexOf(3)); // 2

// 19. lastIndexOf
console.log("lastIndexOf:", [1, 2, 2, 3].lastIndexOf(2)); // 2

// 20. Array.isArray
console.log("isArray:", Array.isArray(arr)); // true

// 21. from
console.log("from:", Array.from('123')); // ['1', '2', '3']

// 22. fill
console.log("fill:", new Array(3).fill(1)); // [1, 1, 1]

// 23. copyWithin
const copyArr = [1, 2, 3, 4];
console.log("copyWithin:", copyArr.copyWithin(0, 2)); // [3, 4, 3, 4]

`.trim();function a(o){return r.jsx(e,{defaultCode:n,defaultJsCode:l,...o})}export{a as default};
