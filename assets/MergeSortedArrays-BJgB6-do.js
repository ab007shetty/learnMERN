import{j as r}from"./index-DW8VmNK2.js";import{P as t}from"./PlaygroundWrapper-BbDN0lfi.js";const a=`
function MergeSortedArrays() {
  const [a, setA] = useState("1,3,5");
  const [b, setB] = useState("2,4,6");
  const [merged, setMerged] = useState([]);

  const merge = () => {
    const arr1 = a.split(",").map(Number);
    const arr2 = b.split(",").map(Number);
    let res = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      res.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    }
    setMerged([...res, ...arr1.slice(i), ...arr2.slice(j)]);
  };

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} />
      <br/><br/>
      <input value={b} onChange={e => setB(e.target.value)} />
      <button onClick={merge}>Merge</button>
      <div>{merged.join(", ")}</div>
    </div>
  );
}

export default MergeSortedArrays;
`.trim(),s=`
function mergeSortedArrays(a, b) {
  let i = 0, j = 0, res = [];
  while (i < a.length && j < b.length) {
    res.push(a[i] < b[j] ? a[i++] : b[j++]);
  }
  return [...res, ...a.slice(i), ...b.slice(j)];
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));
`.trim();function n(e){return r.jsx(t,{defaultCode:a,defaultJsCode:s,...e})}export{n as default};
