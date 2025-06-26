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

// All HTML tags as a Set for fast lookup
const htmlTags = [
  "html","head","title","base","link","meta","style","script","noscript",
  "body","section","nav","article","aside","h1","h2","h3","h4","h5","h6",
  "header","footer","address","main","p","hr","pre","blockquote","ol","ul","li",
  "dl","dt","dd","figure","figcaption","div","a","em","strong","small","s","cite",
  "q","dfn","abbr","ruby","rt","rp","data","time","code","var","samp","kbd","sub",
  "sup","i","b","u","mark","bdi","bdo","span","br","wbr","ins","del","picture","source",
  "img","iframe","embed","object","param","video","audio","track","map","area","table",
  "caption","colgroup","col","tbody","thead","tfoot","tr","td","th","form","fieldset",
  "legend","label","input","button","select","datalist","optgroup","option","textarea",
  "output","progress","meter","details","summary","dialog","menu","menuitem","canvas",
  "template","svg","math"
];
const htmlTagSet = new Set(htmlTags);

function isComponent(thing) {
  return typeof thing === "function" && (
    thing.prototype?.isReactComponent ||
    String(thing).includes("return React.createElement") ||
    String(thing).includes("return /*#__PURE__*/React.createElement")
  );
}

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

function isReactCode(code) {
  const cleanCode = code
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, '');
  if (/import\s+React\b/.test(cleanCode) || /from\s+['"]react['"]/.test(cleanCode)) return true;
  if (/export\s+default\s*<\w/.test(cleanCode)) return true;
  if (/(^|\s|=|\(|\[|\{)<[A-Za-z][\w:.-]*[\s/>]/m.test(cleanCode)) return true;
  return false;
}

function findMatchingBracket(text, position) {
  const brackets = { '(': ')', '[': ']', '{': '}', ')': '(', ']': ']', '}': '{' };
  const char = text[position];
  if (!brackets[char]) return -1;
  const isOpening = ['(', '[', '{'].includes(char);
  const target = brackets[char];
  let count = 1;
  if (isOpening) {
    for (let i = position + 1; i < text.length; i++) {
      if (text[i] === char) count++;
      else if (text[i] === target) count--;
      if (count === 0) return i;
    }
  } else {
    for (let i = position - 1; i >= 0; i--) {
      if (text[i] === char) count++;
      else if (text[i] === target) count--;
      if (count === 0) return i;
    }
  }
  return -1;
}

function getAutoCloseChar(char) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '"': '"',
    "'": "'",
    '`': '`'
  };
  return pairs[char];
}

function shouldAutoIndent(text, position) {
  const beforeCursor = text.substring(0, position);
  const afterCursor = text.substring(position);
  const lastChar = beforeCursor.trim().slice(-1);
  const nextChar = afterCursor.trim().charAt(0);
  return lastChar === '{' && (nextChar === '}' || nextChar === '');
}

function getCurrentIndent(text, position) {
  const lines = text.substring(0, position).split('\n');
  const currentLine = lines[lines.length - 1];
  const match = currentLine.match(/^(\s*)/);
  return match ? match[1] : '';
}

function transpileAndEval(userCode) {
  try {
    const { console: mockConsole, logs } = createConsole();
    if (isReactCode(userCode)) {
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
      const fn = (0, eval)(transpiled);
      const result = fn({}, React, mockConsole);
      if (isComponent(result)) {
        return { element: React.createElement(result), logs, isReact: true };
      }
      if (React.isValidElement(result)) {
        return { element: result, logs, isReact: true };
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
        const jsxFn = (0, eval)(jsxTranspiled);
        const jsxResult = jsxFn(React, mockConsole);
        if (React.isValidElement(jsxResult)) {
          return { element: jsxResult, logs, isReact: true };
        }
      } catch {}
      return {
        error: "Nothing rendered. Make sure your code returns, exports, or evaluates to a React element or component.",
        logs,
        isReact: true
      };
    } else {
      const wrapped = `
        (function(console) {
          ${userCode}
        })
      `;
      try {
        // eslint-disable-next-line no-eval
        const fn = (0, eval)(wrapped);
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

function ConsoleOutput({ logs, isReact }) {
  if (!logs || logs.length === 0) {
    return (
      <div className={`text-gray-500 dark:text-gray-400 text-sm italic p-2 text-center`}>
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
            index < logs.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
          } ${
            log.type === 'error' ? 'text-red-600 bg-red-50 dark:bg-red-900/30' :
            log.type === 'warn' ? 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/30' :
            log.type === 'info' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' :
            isReact ? 'text-gray-800 dark:text-white' : 'text-gray-800 dark:text-gray-200'
          }`}
        >
          <span className="text-gray-500 dark:text-gray-400 text-xs uppercase mr-2">
            {log.type}:
          </span>
          <span>{formatConsoleArgs(log.args)}</span>
        </div>
      ))}
      <div className="h-6"></div>
    </div>
  );
}

function CodeEditor({ value, onChange, ...rest }) {
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const lines = value.split("\n");
  const [visibleLines, setVisibleLines] = useState(30);

  const keywords = [
    'function', 'const', 'let', 'var', 'import', 'export', 'from', 'return', 
    'if', 'else', 'for', 'while', 'class', 'extends', 'async', 'await', 
    'try', 'catch', 'finally', 'throw', 'new', 'typeof', 'instanceof', 
    'true', 'false', 'null', 'undefined', 'this', 'super', 'static', 
    'default', 'case', 'switch', 'break', 'continue', 'do'
  ];

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function highlightSyntax(code) {
    const ranges = [];
    let match;
    const singleLineRegex = /\/\/.*$/gm;
    while ((match = singleLineRegex.exec(code)) !== null) {
      ranges.push({ start: match.index, end: match.index + match[0].length, color: '#5fde74', priority: 4 });
    }
    const multiLineRegex = /\/\*[\s\S]*?\*\//g;
    while ((match = multiLineRegex.exec(code)) !== null) {
      ranges.push({ start: match.index, end: match.index + match[0].length, color: '#5fde74', priority: 4 });
    }
    const codeLen = code.length;
    let i = 0;
    while (i < codeLen) {
      const logIdx = code.indexOf("console.log(", i);
      if (logIdx === -1) break;
      let parenCount = 0;
      let j = logIdx + "console.log(".length;
      parenCount++;
      let insideString = null;
      let prevChar = "";
      while (j < codeLen) {
        const char = code[j];
        if (!insideString) {
          if (char === '"' || char === "'" || char === "`") {
            insideString = char;
          } else if (char === "(") {
            parenCount++;
          } else if (char === ")") {
            parenCount--;
            if (parenCount === 0) {
              ranges.push({ start: logIdx, end: j + 1, color: '#81cede', priority: 3 });
              break;
            }
          }
        } else {
          if (char === insideString && prevChar !== "\\") {
            insideString = null;
          }
        }
        prevChar = char;
        j++;
      }
      if (parenCount > 0) {
        let lineEnd = code.indexOf('\n', logIdx);
        if (lineEnd === -1) lineEnd = codeLen;
        ranges.push({ start: logIdx, end: lineEnd, color: '#81cede', priority: 3 });
        i = lineEnd + 1;
      } else {
        i = j + 1;
      }
    }
    const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    while ((match = keywordPattern.exec(code)) !== null) {
      ranges.push({ start: match.index, end: match.index + match[0].length, color: 'orange', priority: 2 });
    }
    let htmlTagRegex = /<\/?([A-Za-z][A-Za-z0-9:-]*)/g;
    while ((match = htmlTagRegex.exec(code)) !== null) {
      const tagName = match[1];
      if (htmlTagSet.has(tagName.toLowerCase())) {
        const nameStart = match.index + (code[match.index + 1] === '/' ? 2 : 1);
        ranges.push({ start: nameStart, end: nameStart + tagName.length, color: '#b57cf2', priority: 1 });
      }
    }
    ranges.sort((a, b) => a.start - b.start || b.priority - a.priority);
    const colorMap = new Array(code.length).fill(null);
    for (const { start, end, color, priority } of ranges) {
      for (let i = start; i < end; ++i) {
        if (!colorMap[i] || priority > colorMap[i].priority) {
          colorMap[i] = { color, priority };
        }
      }
    }
    let escMap = [];
    let j = 0;
    for (let i = 0; i < code.length; ++i) {
      const c = code[i];
      if (c === '&') { escMap.push(j); j += 5; }
      else if (c === '<' || c === '>') { escMap.push(j); j += 4; }
      else { escMap.push(j); ++j; }
    }
    escMap.push(j);
    const ESC = escapeHtml(code);
    let html = "";
    let lastIdx = 0;
    while (lastIdx < code.length) {
      const currColor = colorMap[lastIdx]?.color;
      let endIdx = lastIdx + 1;
      while (endIdx < code.length && colorMap[endIdx]?.color === currColor) {
        ++endIdx;
      }
      const escStart = escMap[lastIdx];
      const escEnd = escMap[endIdx];
      const text = ESC.slice(escStart, escEnd);
      if (currColor) {
        html += `<span style="color: ${currColor};">${text}</span>`;
      } else {
        html += text;
      }
      lastIdx = endIdx;
    }
    return html;
  }

  useLayoutEffect(() => {
    function updateLines() {
      if (textareaRef.current) {
        const editorHeightPx = textareaRef.current.offsetHeight || 400;
        const lineHeightPx = parseFloat(getComputedStyle(textareaRef.current).lineHeight) || 21;
        setVisibleLines(Math.ceil(editorHeightPx / lineHeightPx));
      }
    }
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, [value]);

  function handleScroll(e) {
    if (gutterRef.current) {
      gutterRef.current.scrollTop = e.target.scrollTop;
    }
    if (overlayRef.current) {
      overlayRef.current.scrollTop = e.target.scrollTop;
      overlayRef.current.scrollLeft = e.target.scrollLeft;
    }
  }

  function handleSelectionChange() {
    if (!textareaRef.current) return;
    const position = textareaRef.current.selectionStart;
    findMatchingBracket(value, position);
  }

  function handleKeyDown(e) {
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const before = value.substring(0, start);
    const after = value.substring(end);

    if (e.key === "Tab") {
      e.preventDefault();
      const tabStr = "  ";
      const newValue = before + tabStr + after;
      onChange({ target: { value: newValue } });
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + tabStr.length;
      }, 0);
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const currentIndent = getCurrentIndent(value, start);
      let newIndent = currentIndent;
      if (shouldAutoIndent(value, start)) {
        newIndent += "  ";
      }
      const newValue = before + "\n" + newIndent + after;
      onChange({ target: { value: newValue } });
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + 1 + newIndent.length;
        const ta = el;
        const valueUpToCaret = ta.value.slice(0, start + 1 + newIndent.length);
        const caretLine = valueUpToCaret.split('\n').length - 1;
        const lineHeight = parseFloat(getComputedStyle(ta).lineHeight) || 21;
        const desiredScrollTop = caretLine * lineHeight;
        if (
          desiredScrollTop < ta.scrollTop ||
          desiredScrollTop > ta.scrollTop + ta.clientHeight - lineHeight
        ) {
          ta.scrollTop = desiredScrollTop - ta.clientHeight / 2 + lineHeight;
        }
      }, 0);
      return;
    }
    const autoCloseChar = getAutoCloseChar(e.key);
    if (autoCloseChar && start === end) {
      if (['"', "'", '`'].includes(e.key)) {
        const beforeChar = before.slice(-1);
        const afterChar = after.charAt(0);
        if (beforeChar === e.key || afterChar === e.key) {
          return;
        }
      }
      e.preventDefault();
      const newValue = before + e.key + autoCloseChar + after;
      onChange({ target: { value: newValue } });
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + 1;
      }, 0);
      return;
    }
    if ([')', ']', '}', '"', "'", '`'].includes(e.key) && after.charAt(0) === e.key) {
      e.preventDefault();
      setTimeout(() => {
        el.selectionStart = el.selectionEnd = start + 1;
      }, 0);
      return;
    }
  }

  const totalLines = Math.max(lines.length, visibleLines);

  return (
    <div
      ref={containerRef}
      className="flex w-full h-full min-h-0 relative code-editor-container"
      style={{
        background: "#1e293b",
        borderRadius: 8,
        fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
        fontSize: "14px",
        lineHeight: "1.5",
        boxSizing: "border-box",
      }}
    >
      <pre
        ref={gutterRef}
        className="select-none text-right bg-gray-800 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-xs font-mono overflow-hidden"
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
      <div className="flex-1 relative" style={{ minHeight: "400px" }}>
        <pre
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none overflow-auto bg-transparent font-mono"
          style={{
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            fontSize: "14px",
            lineHeight: "1.5",
            margin: 0,
            padding: 0,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            zIndex: 1,
            color: "#ffffff", // White default color
          }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: highlightSyntax(value)
          }}
        />
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          onSelect={handleSelectionChange}
          onClick={handleSelectionChange}
          onKeyUp={handleSelectionChange}
          className="absolute inset-0 w-full h-full bg-transparent text-gray-100 dark:text-gray-100 font-mono border-0 focus:outline-none resize-none caret-white"
          spellCheck={false}
          style={{
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            fontSize: "14px",
            lineHeight: "1.5",
            minHeight: "400px",
            height: "100%",
            maxHeight: "100%",
            overflow: "auto",
            boxSizing: "border-box",
            padding: 0,
            margin: 0,
            background: "transparent",
            color: "transparent",
            caretColor: "#ffffff",
            zIndex: 2,
          }}
          aria-label="Edit the code playground"
          {...rest}
        />
      </div>
    </div>
  );
}

const PlaygroundWrapper = ({
  icon: Icon,
  name,
  description,
  concept,
  conceptDescription,
  defaultCode,
  onCodeChange,
  customHeaderControls,
  onReset
}) => {
  const [body, setBody] = useState(defaultCode);
  const debouncedBody = useDebouncedValue(body, 400);
  const handleBodyChange = (newBody) => {
    setBody(newBody);
    if (onCodeChange) {
      onCodeChange(newBody);
    }
  };
  const handleReset = () => {
    if (onReset) {
      onReset();
      setBody(defaultCode);
    } else {
      setBody(defaultCode);
      if (onCodeChange) {
        onCodeChange(defaultCode);
      }
    }
  };

  const renderPreview = () => {
    const result = transpileAndEval(debouncedBody);
    if (result.error) {
      return (
        <div className="h-full flex flex-col">
          <div className="text-red-500 p-4 text-center border-2 border-red-200 dark:border-red-700 rounded bg-red-50 dark:bg-red-950 flex-shrink-0">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="font-bold">Code Error</div>
            <div className="text-sm mt-2 font-mono break-words">{result.error}</div>
          </div>
          {result.logs && result.logs.length > 0 && (
            <div className="flex-1 mt-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-800 dark:bg-gray-900 text-white text-sm font-bold px-3 py-2">
                Console Output
              </div>
              <div className="max-h-48 overflow-y-auto console-output-scrollbar" style={{ paddingBottom: '4px' }}>
                <ConsoleOutput logs={result.logs} isReact={!!result.isReact} />
              </div>
            </div>
          )}
        </div>
      );
    }
    if (result.isJavaScript) {
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-800 dark:bg-gray-900 text-white text-sm font-bold px-3 py-2">
              Console Output
            </div>
            <div className="h-full overflow-y-auto console-output-scrollbar" style={{ paddingBottom: '8px' }}>
              <ConsoleOutput logs={result.logs} isReact={!!result.isReact} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center min-h-0">
          <div className="w-full h-full">
            <div className="w-full flex items-center justify-center align-middle h-full">
              <ErrorBoundary resetKey={debouncedBody}>
                <div className="[&_*]:text-dark dark:[&_*]:text-white dark:[&_input]:text-black dark:[&_textarea]:text-white dark:[&_select]:text-white [&_*]:dark:placeholder-gray-500">
                  {result.element}
                </div>
              </ErrorBoundary>
            </div>
          </div>
        </div>
        {result.logs && result.logs.length > 0 && (
          <div className="mt-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex-shrink-0">
            <div className="bg-gray-800 dark:bg-gray-900 text-white text-sm font-bold px-3 py-2">
              Console Output
            </div>
            <div className="max-h-40 overflow-y-auto console-output-scrollbar" style={{ paddingBottom: '4px' }}>
              <ConsoleOutput logs={result.logs} isReact={!!result.isReact} />
            </div>
          </div>
        )}
      </div>
    );
  };



  return (
   <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-2 mt-4">
    <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] lg:max-h-[600px]">
          {/* Left side (info & preview): 40% width on large screens */}
          <div className="w-full lg:w-[40%] flex flex-col h-auto min-h-0">
            <div className="p-4 md:p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-blue-100 dark:bg-blue-900/40 rounded-lg p-2">
                  {Icon && <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
                  <p className="text-gray-700 dark:text-gray-300">{description}</p>
                </div>
              </div>
              {concept && (
                <div>
                  <div className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                    Concept:{" "}
                    {Array.isArray(concept)
                      ? concept.map((c, i) => (
                          <span
                            key={i}
                            className="font-mono bg-blue-50 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded mr-2 inline-block"
                          >
                            {c}
                          </span>
                        ))
                      : (
                        <span className="font-mono bg-blue-50 dark:bg-blue-900 dark:text-blue-100 px-2 py-1 rounded">
                          {concept}
                        </span>
                      )}
                  </div>
                  {conceptDescription && (
                    <div className="mb-2 text-gray-800 dark:text-gray-200">{conceptDescription}</div>
                  )}
                </div>
              )}
            </div>
            <div className="bg-gray-200 dark:bg-gray-950 flex-1 min-h-0 flex items-stretch">
              <div className="w-full">
                {renderPreview()}
              </div>
            </div>
          </div>
          {/* Code editor: 60% width on large screens */}
          <div className="w-full lg:w-[60%] bg-gray-900 dark:bg-gray-950 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 flex flex-col min-h-0">
            <div className="flex justify-between items-center p-4 md:p-4 border-b border-gray-700 dark:border-gray-700">
              <div className="font-bold text-blue-300 dark:text-blue-200 text-lg">Code Playground</div>
              
              <div className="flex items-center space-x-3">
                {/* Custom header controls */}
                {customHeaderControls}
                
                {/* Reset button */}
                <button
                  onClick={handleReset}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                  title="Reset to original code and clear saved data"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0 flex flex-col p-2 ">
              <CodeEditor
                value={body}
                onChange={e => handleBodyChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      {/* Custom scrollbar style for dark mode only on console output window */}
      <style>{`
        .dark .console-output-scrollbar::-webkit-scrollbar {
          background: #181a20;
          width: 8px;
        }
        .dark .console-output-scrollbar::-webkit-scrollbar-thumb {
          background: #22242c;
          border-radius: 6px;
        }
        .dark .console-output-scrollbar {
          scrollbar-color: #22242c #181a20;
        }
      `}</style>
    </div> 
  );
};

export default PlaygroundWrapper;