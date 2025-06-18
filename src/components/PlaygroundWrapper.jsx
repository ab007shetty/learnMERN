import React, { useState, useRef, useLayoutEffect } from "react";
import * as Babel from "@babel/standalone";
import { ErrorBoundary } from "./ErrorBoundary";

// Debounce value hook
function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

// Check if result is a React component
function isComponent(thing) {
  return typeof thing === "function" && (
    thing.prototype?.isReactComponent ||
    String(thing).includes("return React.createElement") ||
    String(thing).includes("return /*#__PURE__*/React.createElement")
  );
}

// Babel transpile and eval code
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

// Custom CodeEditor with line numbers and tab support, perfectly aligned
function CodeEditor({ value, onChange, ...rest }) {
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);
  const lines = value.split("\n");
  const [visibleLines, setVisibleLines] = useState(30);

  // Keep visibleLines up-to-date on resize
  useLayoutEffect(() => {
    function updateLines() {
      if (textareaRef.current) {
        const editorHeightPx = textareaRef.current.offsetHeight || 400;
        // 14px fontSize * 1.5 lineHeight = 21px
        const lineHeightPx = parseFloat(getComputedStyle(textareaRef.current).lineHeight) || 21;
        setVisibleLines(Math.ceil(editorHeightPx / lineHeightPx));
      }
    }
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, [value]);

  // Sync gutter scroll with textarea
  function handleScroll(e) {
    if (gutterRef.current) {
      gutterRef.current.scrollTop = e.target.scrollTop;
    }
  }

  // Handle Tab for indentation
  function handleKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = textareaRef.current;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const before = value.substring(0, start);
      const after = value.substring(end);
      const tabStr = "  "; // 2 spaces
      const newValue = before + tabStr + after;
      onChange({ target: { value: newValue } });
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + tabStr.length;
      }, 0);
    }
  }

  const totalLines = Math.max(lines.length, visibleLines);

  return (
    <div
      className="flex w-full h-full min-h-0 relative"
      style={{
        background: "#1e293b",
        borderRadius: 8,
        fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
        fontSize: "14px",
        lineHeight: "1.5",
        boxSizing: "border-box",
      }}
    >
      {/* Line Numbers */}
      <pre
        ref={gutterRef}
        className="select-none text-right bg-gray-800 text-gray-500 text-xs font-mono overflow-hidden"
        style={{
          minWidth: "2.2em",
          userSelect: "none",
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
          maxHeight: "100%",
          margin: 0,
          position: "relative",
          padding: 0,
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          fontSize: "14px",
          lineHeight: "1.5",
          boxSizing: "border-box",
        }}
        aria-hidden="true"
      >
        {[...Array(totalLines)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "1.5em",
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {i + 1}
          </div>
        ))}
      </pre>
      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        className="w-full h-full flex-1 min-h-0 bg-gray-800 text-gray-100 font-mono border-0 focus:outline-none resize-none rounded"
        spellCheck={false}
        style={{
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          fontSize: "14px",
          lineHeight: "1.5",
          minHeight: "400px",
          height: "100%",
          maxHeight: "100%",
          overflow: "auto",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          boxSizing: "border-box",
          padding: 0,
        }}
        aria-label="Edit the code playground"
        {...rest}
      />
    </div>
  );
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
    <div className="bg-blue-50 pb-2 rounded pt-4 px-2 md:px-4 flex justify-center">
      <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[630px] lg:max-h-[630px]">
          {/* Left side (info & preview): 40% width on large screens */}
          <div className="w-full lg:w-[40%] flex flex-col h-auto min-h-0">
            <div className="p-4 md:p-4 border-b border-gray-200">
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-blue-100 rounded-lg p-2">
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
          {/* Code editor: 60% width on large screens */}
          <div className="w-full lg:w-[60%] bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col min-h-0">
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
              <CodeEditor
                value={body}
                onChange={e => setBody(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundWrapper;