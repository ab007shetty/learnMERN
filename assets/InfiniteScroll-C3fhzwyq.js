import{j as t}from"./index-CUSrFROp.js";import{P as r}from"./PlaygroundWrapper-D9_U8jbL.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({length: 20}, (_,i) => i + 1));

  const loadMore = () => {
    setItems(prev => [...prev, ...Array.from({length: 20}, (_,i) => prev.length + i + 1)]);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ul>
        {items.map(i => <li key={i}>Item {i}</li>)}
      </ul>
    </div>
  );
}

export default InfiniteScroll;
`.trim();function l(e){return t.jsx(r,{defaultCode:o,...e})}export{l as default};
