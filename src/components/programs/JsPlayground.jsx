import React, { useState } from "react";
import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function App() { 
  return ( 
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
`.trim();

const DEFAULT_JS_BODY = `
// Write vanilla JavaScript code here.

console.log('Hello World!');
`.trim();

const STORAGE_KEY_REACT = 'empty-playground-react-code';
const STORAGE_KEY_JS = 'empty-playground-js-code';

export default function JsPlayground(props) {
  const { concept, conceptDescription, ...otherProps } = props;

  const [savedReactCode, setSavedReactCode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_REACT);
      if (saved !== null && saved.trim() !== '') return saved;
      return DEFAULT_BODY;
    } catch { return DEFAULT_BODY; }
  });

  const [savedJsCode, setSavedJsCode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_JS);
      if (saved !== null && saved.trim() !== '') return saved;
      return DEFAULT_JS_BODY;
    } catch { return DEFAULT_JS_BODY; }
  });

  const [currentReactCode, setCurrentReactCode] = useState(savedReactCode);
  const [currentJsCode, setCurrentJsCode] = useState(savedJsCode);

  const [lastSaveTime, setLastSaveTime] = useState(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // -- Modal state for reset confirmation --
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [pendingResetTab, setPendingResetTab] = useState(null);

  // Save both codes to localStorage
  const saveCodes = (reactCode, jsCode) => {
    try {
      localStorage.setItem(STORAGE_KEY_REACT, reactCode);
      localStorage.setItem(STORAGE_KEY_JS, jsCode);
      setSavedReactCode(reactCode);
      setSavedJsCode(jsCode);
      setLastSaveTime(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
      setShowSaveIndicator(true);
      setTimeout(() => setShowSaveIndicator(false), 2000);
    } catch {}
  };

  const handleManualSave = () => {
    saveCodes(currentReactCode, currentJsCode);
  };

  // -- Reset logic: only reset the active tab (react/js) --
  const handleReset = (activeTab) => {
    setPendingResetTab(activeTab);
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    if (pendingResetTab === "react") {
      localStorage.removeItem(STORAGE_KEY_REACT);
      setCurrentReactCode(DEFAULT_BODY);
      setSavedReactCode(DEFAULT_BODY);
    } else if (pendingResetTab === "js") {
      localStorage.removeItem(STORAGE_KEY_JS);
      setCurrentJsCode(DEFAULT_JS_BODY);
      setSavedJsCode(DEFAULT_JS_BODY);
    }
    setShowResetConfirm(false);
    setPendingResetTab(null);
    setResetKey(prev => prev + 1); // force re-mount if needed
  };

  const cancelReset = () => {
    setShowResetConfirm(false);
    setPendingResetTab(null);
  };

  // Handle code change
  const handleCodeChange = (newCode, tab) => {
    if (tab === "js") {
      setCurrentJsCode(newCode);
    } else {
      setCurrentReactCode(newCode);
    }
  };

  // Pass a custom onReset that passes which tab to reset
  const playgroundOnReset = (activeTab) => handleReset(activeTab);

  // Modal component (simple, you can style it further)
  const ResetModal = showResetConfirm ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-6 max-w-xs w-full">
        <div className="font-bold mb-3 text-red-500 text-center text-lg">Reset Code?</div>
        <div className="mb-5 text-center text-gray-700 dark:text-gray-300">
          Are you sure you want to reset the <b>{pendingResetTab === "react" ? "React" : "JavaScript"}</b> code to its default value?
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={cancelReset}
            className="px-4 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={confirmReset}
            className="px-4 py-1 rounded bg-red-600 hover:bg-blue-700 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div>
      {ResetModal}
      <PlaygroundWrapper
        {...otherProps}
        key={resetKey}
        title="JavaScript Playground"
        description="You can write React components, JSX, or pure JS. No imports."
        defaultCode={currentReactCode}
        defaultJsCode={currentJsCode}
        onCodeChange={(code, tab) => handleCodeChange(code, tab)}
        onReset={playgroundOnReset}
        customHeaderControls={
          <div className="flex items-center space-x-2 text-sm">
            {/* Save indicator */}
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full transition-colors ${
                showSaveIndicator ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
              }`}></div>
              {showSaveIndicator && (
                <span className="text-green-400 text-xs">Saved!</span>
              )}
            </div>
            {/* Last save time */}
            {lastSaveTime && (
              <span className="text-gray-400 text-xs">
                Last: {lastSaveTime}
              </span>
            )}
            {/* Manual save button */}
            <button
              onClick={handleManualSave}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
              title="Save code to localStorage"
            >
              Save
            </button>
          </div>
        }
      />
    </div>
  );
}