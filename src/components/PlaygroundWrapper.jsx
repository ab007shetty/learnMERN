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

// Custom console that captures output
function createConsole() {
  const logs = [];
  const mockConsole = {
    log: (...args) => logs.push({ type: 'log', args }),
    error: (...args) => logs.push({ type: 'error', args }),
    warn: (...args) => logs.push({ type: 'warn', args }),
    info: (...args) => logs.push({ type: 'info', args }),
  };
  return { console: mockConsole, logs };
}

// Check if code appears to be React-related
function isReactCode(code) {
  const reactPatterns = [
    /import.*react/i,
    /from\s+['"]react['"]/i,
    /React\./,
    /useState|useEffect|useRef|useMemo|useCallback|useReducer|useContext/,
    /<[A-Z][a-zA-Z0-9]*[^>]*>/,  // JSX components (capitalized)
    /<[a-z]+[^>]*>/,              // HTML-like JSX elements
    /React\.createElement/,
    /export\s+default/,
    /function.*\(\)\s*{[^}]*return[^}]*</, // Function returning JSX
    /const.*=.*\(\)\s*=>[^{]*</,          // Arrow function returning JSX
    /return\s*\(/,                        // return statement with parentheses (common in JSX)
    /return\s*</,                         // return statement with JSX
    /className=/,                         // JSX className attribute
    /onClick=/,                           // JSX event handlers
    /onChange=/,
    /onSubmit=/,
  ];
  return reactPatterns.some(pattern => pattern.test(code));
}

// Babel transpile and eval code
function transpileAndEval(userCode) {
  try {
    const { console: mockConsole, logs } = createConsole();
    
    // Check if this looks like React code
    if (isReactCode(userCode)) {
      // Handle React code
      const HOOKS = `
        const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext } = React;
      `;
      let code = HOOKS + "\n" + userCode;

      if (/export\s+default\s+/.test(code)) {
        code = code.replace(/export\s+default\s+/, "exports.__esModule = true; exports.default = ");
      }
      
      const wrapped = `
        (function(exports, React, console){
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
      const result = fn({}, React, mockConsole);

      if (isComponent(result)) {
        return { element: React.createElement(result), logs };
      }
      if (React.isValidElement(result)) {
        return { element: result, logs };
      }
      
      try {
        const jsxTranspiled = Babel.transform(
          `(function(React, console){ 
            const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext } = React;
            return (${userCode}); 
          })`,
          { presets: ["react"] }
        ).code;
        // eslint-disable-next-line no-eval
        const jsxFn = eval(jsxTranspiled);
        const jsxResult = jsxFn(React, mockConsole);
        if (React.isValidElement(jsxResult)) {
          return { element: jsxResult, logs };
        }
      } catch {}
      
      return {
        error: "Nothing rendered. Make sure your code returns, exports, or evaluates to a React element or component.",
        logs
      };
    } else {
      // Handle pure JavaScript code
      const wrapped = `
        (function(console) {
          ${userCode}
        })
      `;
      
      try {
        // eslint-disable-next-line no-eval
        const fn = eval(wrapped);
        fn(mockConsole);
        
        return { 
          isJavaScript: true, 
          logs,
          success: true
        };
      } catch (err) {
        return { 
          isJavaScript: true, 
          logs,
          error: err.message 
        };
      }
    }
  } catch (err) {
    return { error: err.message, logs: [] };
  }
}

// Format console arguments for display
function formatConsoleArgs(args) {
  return args.map(arg => {
    if (typeof arg === 'object' && arg !== null) {
      try {
        return JSON.stringify(arg, null, 2);
      } catch {
        return String(arg);
      }
    }
    return String(arg);
  }).join(' ');
}

// Console output component
function ConsoleOutput({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="text-gray-500 text-sm italic p-3 text-center">
        No console output
      </div>
    );
  }

  return (
    <div className="font-mono text-sm">
      {logs.map((log, index) => (
        <div
          key={index}
          className={`px-3 py-2 ${
            index < logs.length - 1 ? 'border-b border-gray-200' : ''
          } ${
            log.type === 'error' ? 'text-red-600 bg-red-50' :
            log.type === 'warn' ? 'text-yellow-600 bg-yellow-50' :
            log.type === 'info' ? 'text-blue-600 bg-blue-50' :
            'text-gray-800'
          }`}
        >
          <span className="text-gray-500 text-xs uppercase mr-2">
            {log.type}:
          </span>
          <span>{formatConsoleArgs(log.args)}</span>
        </div>
      ))}
      {/* Add significant bottom spacing to ensure last item is fully visible */}
      <div className="h-6"></div>
    </div>
  );
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
    const result = transpileAndEval(debouncedBody);
    
    if (result.error) {
      return (
        <div className="h-full flex flex-col">
          <div className="text-red-500 p-4 text-center border-2 border-red-200 rounded bg-red-50 flex-shrink-0">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="font-bold">Code Error</div>
            <div className="text-sm mt-2 font-mono break-words">{result.error}</div>
          </div>
          {result.logs && result.logs.length > 0 && (
            <div className="flex-1 mt-3 bg-white rounded border overflow-hidden">
              <div className="bg-gray-800 text-white text-sm font-bold px-3 py-2">
                Console Output
              </div>
              <div className="max-h-48 overflow-y-auto" style={{ paddingBottom: '8px' }}>
                <ConsoleOutput logs={result.logs} />
              </div>
            </div>
          )}
        </div>
      );
    }

    if (result.isJavaScript) {
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 bg-white rounded border overflow-hidden">
            <div className="bg-gray-800 text-white text-sm font-bold px-3 py-2">
              Console Output
            </div>
            <div className="h-full overflow-y-auto" style={{ paddingBottom: '8px' }}>
              <ConsoleOutput logs={result.logs} />
            </div>
          </div>
        </div>
      );
    }

    // React component/JSX rendering
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center min-h-0">
          <ErrorBoundary resetKey={debouncedBody}>
            {result.element}
          </ErrorBoundary>
        </div>
        {result.logs && result.logs.length > 0 && (
          <div className="mt-3 bg-white rounded border overflow-hidden flex-shrink-0">
            <div className="bg-gray-800 text-white text-sm font-bold px-3 py-2">
              Console Output
            </div>
            <div className="max-h-40 overflow-y-auto" style={{ paddingBottom: '8px' }}>
              <ConsoleOutput logs={result.logs} />
            </div>
          </div>
        )}
      </div>
    );
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
              {concept && (
                <div>
                  <div className="font-semibold text-blue-800 mb-1">
                    Concept:{" "}
                    <span className="font-mono bg-blue-50 px-2 py-1 rounded">{concept}</span>
                  </div>
                  {conceptDescription && (
                    <div className="mb-2 text-gray-800">{conceptDescription}</div>
                  )}
                </div>
              )}
            </div>
            <div className="bg-gray-200 px-0 md:px-6 py-6 flex-1 min-h-0 flex items-stretch">
              <div className="w-full">
                {renderPreview()}
              </div>
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