import React, { useState } from "react";
import * as Babel from "@babel/standalone";

// Immutable code above and below the editable area
const IMMUTABLE_TOP = `// Write your component below (no import/export statements). Start from function Child(...):

function Parent() {`;
const IMMUTABLE_BOTTOM = `}

return <Parent />;`;

// Editable area for the user
const DEFAULT_BODY = `
  function Child({ name, onGreet }) {
    return (
      <div style={{ marginBottom: 16 }}>
        <span>Hello, {name}!</span>
        <button onClick={onGreet} style={{ marginLeft: 8 }}>Greet</button>
      </div>
    );
  }

  const handleGreet = () => {
    alert("Hello from child!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Props Example</h1>
      <Child name="Alice" onGreet={handleGreet} />
      <Child name="Bob" onGreet={() => alert("Custom greeting for Bob!")} />
    </div>
  );
`.trim();

function transpileAndEval(userBody) {
  // Compose the full code
  const code = `
${IMMUTABLE_TOP}
${userBody}
${IMMUTABLE_BOTTOM}
  `.trim();

  // Remove import/export just in case
  const safeCode = code
    .replace(/^\s*import\s.*$/gm, "")
    .replace(/^\s*export\s+default\s+/gm, "")
    .trim();

  // Wrap and immediately invoke the function so 'return' works!
  const wrappedCode = `
    (function() {
      ${safeCode}
    })()
  `;

  const transpiled = Babel.transform(wrappedCode, { presets: ["react"] }).code;
  // eslint-disable-next-line no-new-func
  const fn = new Function("React", `return ${transpiled};`);
  return fn(React);
}

const PropsDemo = ({ icon: Icon, name, description }) => {
  const [body, setBody] = useState(DEFAULT_BODY);

  const handleReset = () => setBody(DEFAULT_BODY);

  const renderCodeResult = () => {
    try {
      const result = transpileAndEval(body);
      if (React.isValidElement(result)) return result;
      return (
        <div className="text-red-500 font-mono p-4">
          Nothing rendered. Make sure your code returns valid JSX.
        </div>
      );
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
    <div className="pt-6 px-2 md:px-6">
      <div className="w-full bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] lg:max-h-[600px]">
          {/* Left Side - Card Design and Preview */}
          <div className="w-full lg:w-1/2 flex flex-col h-auto min-h-0">
            {/* Header Section */}
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {Icon && <Icon className="w-7 h-7 text-blue-600" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{name || "Props"}</h2>
                  <p className="text-gray-700">
                    {description ||
                      "Demonstrates passing data and functions as props from a parent to child component."}
                  </p>
                </div>
              </div>
              {/* React concept used here */}
              <div>
                <div className="font-semibold text-blue-800 mb-1">
                  React concept used here: <span className="font-mono bg-blue-50 px-2 py-1 rounded">props</span>
                </div>
                <div className="mb-2 text-gray-800">
                  <span className="font-mono bg-blue-50 px-2 py-1 rounded">props</span> are used to pass data and behavior from a parent component to its children.<br />
                  In this example, the <span className="font-mono">Child</span> component receives a <span className="font-mono">name</span> (string) and an <span className="font-mono">onGreet</span> (function) as props. This allows the parent to control both the text and the click behavior of each child.
                </div>
              </div>
            </div>
            {/* Preview */}
            <div className="bg-blue-50 px-0 md:px-8 py-8 flex-1 min-h-0 flex items-center justify-center">
              {renderCodeResult()}
            </div>
          </div>
          {/* Right Side - Code Editor */}
          <div className="w-full lg:w-1/2 bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col h-auto min-h-0">
            {/* Code Editor Header */}
            <div className="flex justify-between items-center p-4 md:p-4 border-b border-gray-700">
              <div className="font-bold text-blue-300 text-lg">Code Playground</div>
              <button
                onClick={handleReset}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                title="Reset to original code"
              >
                Reset
              </button>
            </div>
            {/* Code Editor */}
            <div className="flex-1 p-4 md:p-6 min-h-0 flex flex-col font-mono text-sm">
              {/* Immutable top */}
              <div
                className="bg-gray-800 text-gray-400 select-none"
                style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
              >
                {IMMUTABLE_TOP}
              </div>
              {/* Editable area */}
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full flex-1 min-h-0 bg-gray-800 text-gray-100 font-mono text-sm p-0 pl-2 pr-0 border-0 focus:outline-none resize-none"
                spellCheck={false}
                style={{
                  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                  lineHeight: '1.5',
                  minHeight: 300,
                  maxHeight: 440,
                  overflow: 'auto'
                }}
                rows={12}
                aria-label="Edit the Props demo body"
              />
              {/* Immutable bottom */}
              <div
                className="bg-gray-800 text-gray-400 select-none"
                style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
              >
                {IMMUTABLE_BOTTOM}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;