import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Toast() {
  const [toast, setToast] = useState("");
  const [show, setShow] = useState(false);

  const triggerToast = () => {
    setToast("Saved Successfully!");
    setShow(true);

    setTimeout(() => setShow(false), 2000); // auto-hide after 2s
  };

  return (
    <div>
      <button onClick={triggerToast}>Show Toast</button>

      {show && (
        <div className="text-green-700">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Toast;
`.trim();

export default function Toast(props) {
  return <PlaygroundWrapper defaultCode={DEFAULT_BODY} {...props} />;
}
