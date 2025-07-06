import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_REACT_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    pause();          // Reuse pause
    setSeconds(0);    // Reset counter
  };

  return (
    <div>
      <h1>{seconds} s</h1>
      <button onClick={start}>Start</button> &nbsp;&nbsp;
      <button onClick={pause}>Pause</button> &nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
`.trim();

export default function Stopwatch(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_REACT_CODE}
      {...props}
    />
  );
}