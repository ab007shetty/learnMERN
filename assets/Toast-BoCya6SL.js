import{j as e}from"./index-CUSrFROp.js";import{P as o}from"./PlaygroundWrapper-D9_U8jbL.js";const s=`
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
`.trim();function n(t){return e.jsx(o,{defaultCode:s,...t})}export{n as default};
