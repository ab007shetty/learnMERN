import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_REACT_CODE = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;           // Builtin JS func, setInterval(callbackFunction, delayInMilliseconds)
    const id = setInterval(() => setTime(t => t + 10), 10);
    return () => clearInterval(id);                         // Clean up interval on stop/unmount
  }, [running]);

  // Format time as MM:SS:CS (centiseconds)
  const formatTime = (milliseconds) => {
    const minutes = Math.floor((milliseconds / 60000) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const centiseconds = Math.floor((milliseconds / 10) % 100);
    return (
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0') + ':' +
      String(centiseconds).padStart(2, '0')
    );
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => setRunning(true)}>Start</button> &nbsp;&nbsp;
      <button onClick={() => setRunning(false)}>Pause</button> &nbsp;&nbsp;
      <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
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