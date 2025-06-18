import React, { useState } from "react";
import * as Babel from "@babel/standalone";
import { ErrorBoundary } from "./ErrorBoundary";

function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

function isComponent(thing) {
  return typeof thing === "function" && (
    thing.prototype?.isReactComponent ||
    String(thing).includes("return React.createElement") ||
    String(thing).includes("return /*#__PURE__*/React.createElement")
  );
}

function transpileAndEval(userCode) {
  try {
    const HOOKS = `
      const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext } = React;
    `;
    let code = HOOKS + "\n" + userCode;

    if (/export\s+default\s+/.test(code)) {
      code = code.replace(/export\s+default\s+/, "exports.__esModule = true; exports.default = ");
    }
    const wrapped = `
      (function(exports, React){
        let __result;
        ${code}
        if (exports && exports.default) {
          __result = exports.default;
        }
        return typeof __result !== "undefined" 
          ? __result 
          : (typeof Parent !== "undefined" ? Parent 
          : (typeof App !== "undefined" ? App 
          : undefined));
      })
    `;
    const transpiled = Babel.transform(wrapped, { presets: ["react"] }).code;
    // eslint-disable-next-line no-eval
    const fn = eval(transpiled);
    const result = fn({}, React);

    if (isComponent(result)) {
      return { element: React.createElement(result) };
    }
    if (React.isValidElement(result)) {
      return { element: result };
    }
    try {
      const jsxTranspiled = Babel.transform(
        `(function(React){ 
          const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext } = React;
          return (${userCode}); 
        })`,
        { presets: ["react"] }
      ).code;
      // eslint-disable-next-line no-eval
      const jsxFn = eval(jsxTranspiled);
      const jsxResult = jsxFn(React);
      if (React.isValidElement(jsxResult)) {
        return { element: jsxResult };
      }
    } catch {}
    return {
      error: "Nothing rendered. Make sure your code returns, exports, or evaluates to a React element or component."
    };
  } catch (err) {
    return { error: err.message };
  }
}

const PlaygroundWrapper = ({
  icon: Icon,
  name,
  description,
  concept,
  conceptDescription,
  defaultCode
}) => {
  const [body, setBody] = useState(defaultCode);
  const debouncedBody = useDebouncedValue(body, 400);

  const handleReset = () => setBody(defaultCode);

  const renderPreview = () => {
    const { element, error } = transpileAndEval(debouncedBody);
    if (error) {
      return (
        <div className="text-red-500 p-4 text-center border-2 border-red-200 rounded bg-red-50">
          <div className="text-2xl mb-2">⚠️</div>
          <div className="font-bold">Code Error</div>
          <div className="text-sm mt-2 font-mono break-words">{error}</div>
        </div>
      );
    }
    return element;
  };

  return (
    <div className="bg-blue-50 pb-8 rounded pt-6 px-2 md:px-6 flex justify-center">
      <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] lg:max-h-[600px]">
          <div className="w-full lg:w-1/2 flex flex-col h-auto min-h-0">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {Icon && <Icon className="w-7 h-7 text-blue-600" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div>
                <div className="font-semibold text-blue-800 mb-1">
                  React concept used here:{" "}
                  <span className="font-mono bg-blue-50 px-2 py-1 rounded">{concept}</span>
                </div>
                {conceptDescription && (
                  <div className="mb-2 text-gray-800">{conceptDescription}</div>
                )}
              </div>
            </div>
            <div className="bg-gray-200 px-0 md:px-8 py-8 flex-1 min-h-0 flex items-center justify-center">
              <ErrorBoundary resetKey={debouncedBody}>{renderPreview()}</ErrorBoundary>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col min-h-0">
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
            <div className="flex-1 min-h-0 flex flex-col p-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full h-full flex-1 min-h-0 bg-gray-800 text-gray-100 font-mono text-sm border-0 focus:outline-none resize-none rounded"
                spellCheck={false}
                style={{
                  fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                  lineHeight: '1.5',
                  minHeight: "400px",
                  height: "100%",
                  maxHeight: "100%",
                  overflow: "auto"
                }}
                aria-label="Edit the code playground"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundWrapper;