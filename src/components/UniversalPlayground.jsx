import React, { useState } from "react";
import * as Babel from "@babel/standalone";

const initialCodeString = `
// Write your component below (no import/export statements):

function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span style={{display: "inline-block", width: 40, textAlign: "center"}}>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

// Render your component:
<Counter />
`.trim();

function transpileAndEval(userCode) {
  // Strip import/export
  const safeCode = userCode
    .replace(/^\s*import\s.*$/gm, "")
    .replace(/^\s*export\s+default\s+/gm, "")
    .trim();

  // Transpile JSX to JS using Babel
  const transpiled = Babel.transform(safeCode, { presets: ["react"] }).code;

  // Evaluate as a function with React in scope
  // The last evaluated expression should be the JSX element to render
  const wrapped = `
    let __result;
    (function() {
      ${transpiled}
      // Try to get the last evaluated expression
      try {
        const lines = (${JSON.stringify(safeCode)}).split('\\n');
        const lastLine = lines[lines.length-1].trim();
        if (lastLine.startsWith("<") && lastLine.endsWith(">")) {
          __result = eval("("+transpiled.split('\n').slice(-1)[0]+")");
        }
      } catch (e) {}
    })();
    return __result;
  `;
  // eslint-disable-next-line no-new-func
  return new Function("React", wrapped)(React);
}

const UniversalPlayground = () => {
  const [code, setCode] = useState(initialCodeString);

  const handleReset = () => setCode(initialCodeString);

  const renderResult = () => {
    try {
      const result = transpileAndEval(code);
      if (React.isValidElement(result)) return result;
      return <div className="text-red-500 font-mono p-4">Nothing rendered. Make sure your code ends with a JSX element, e.g. <code>&lt;Counter /&gt;</code></div>;
    } catch (error) {
      return (
        <div className="text-red-500 p-4 text-center border-2 border-red-200 rounded bg-red-50">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="font-bold">Code Error</div>
          <div className="text-sm mt-2 font-mono break-words">{error.message}</div>
        </div>
      );
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow overflow-hidden h-[540px] max-h-[540px] flex flex-col lg:flex-row">
      {/* Left Side: Preview */}
      <div className="w-full lg:w-1/2 flex flex-col h-full min-h-0">
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">useState Hook Playground</h2>
          <div className="text-gray-700 mb-2">
            <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span> lets you add state to functional components.
          </div>
          <div className="text-gray-700 mb-2">
            <strong>Instructions:</strong> Write a component and finish with a JSX element (e.g. <code>&lt;Counter /&gt;</code>) to render it. Do <strong>not</strong> include any import/export statements.
          </div>
        </div>
        <div className="flex-1 bg-blue-50 rounded-lg p-8 flex items-center justify-center min-h-0">
          {renderResult()}
        </div>
      </div>
      {/* Right Side: Code Editor */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col h-full min-h-0">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="font-bold text-blue-300 text-lg">Code Playground</div>
          <button
            onClick={handleReset}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
            title="Reset to original code"
          >
            Reset
          </button>
        </div>
        <div className="flex-1 p-6 min-h-0 flex flex-col">
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full h-full flex-1 min-h-0 bg-gray-800 text-gray-100 font-mono text-sm p-4 rounded border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
            spellCheck={false}
            style={{
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              lineHeight: '1.5'
            }}
            placeholder="Write your React component code here..."
          />
        </div>
      </div>
    </div>
  );
};

export default UniversalPlayground;