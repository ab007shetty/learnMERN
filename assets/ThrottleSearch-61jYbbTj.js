import{j as e}from"./index-B9-fRT7P.js";import{P as r}from"./PlaygroundWrapper-WsRgzkuU.js";const o=`
//Write React components, JSX, or pure JS. No need of any import statements.

function ThrottleSearch() {
  const [text, setText] = useState("");
  const [throttled, setThrottled] = useState("");
  const lastRun = useRef(0);

  useEffect(() => {
    const now = Date.now();
    if (now - lastRun.current >= 2000) {
      setThrottled(text);
      lastRun.current = now;
    }
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Original: {text}</p>
      <p>Throttled: {throttled}</p>
    </div>
  );
}

export default ThrottleSearch;
`.trim();function s(t){return e.jsx(r,{defaultCode:o,...t})}export{s as default};
