import{j as t}from"./index-DW8VmNK2.js";import{P as n}from"./PlaygroundWrapper-BbDN0lfi.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function Carousel() {
  const data = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);     // clear timer when component re-renders/unmounts
  }, [index]);                             // re-run when index changes

  // If current image is last one → go back to first (looping behavior)
  const next = () => setIndex(index === data.length - 1 ? 0 : index + 1);

  // If current image is first → go to last one (looping backward)
  const prev = () => setIndex(index === 0 ? data.length - 1 : index - 1);

  return (
    <div style={{ width: "400px"}}>     {/* Displays image whose index matches current state*/}
      {data.map((img, i) => (
        <img key={i} src={img} style={{ display: i === index ? "block" : "none" }} />     
      ))}                                                       

     <div className="flex mt-2 justify-between">
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
`.trim();function r(e){return t.jsx(n,{defaultCode:o,...e})}export{r as default};
