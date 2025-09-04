const coreJsQuestions = [
  {
    id: 1,
    question:
      "What is the event loop in JavaScript and how does it relate to React?",
    answer: [
      "The event loop is a JavaScript mechanism that handles asynchronous tasks by managing the call stack and message queue, ensuring non-blocking execution.",
      "In React, the event loop allows handling async operations like data fetching, timers, and event handlers without freezing the UI.",
    ],
    keyterms: [
      "Event loop = manages async callbacks in JS",
      "Call stack = where functions execute",
      "Message queue = stores async callbacks. React relies on it for smooth UI updates during async work.",
    ],
  },
  {
    id: 2,
    question: "What are closures and hoisting in JavaScript?",
    answer: [
      "Closure is when a function remembers variables from its outer scope, even after the outer function has finished. Example: useful in React for preserving state in event handlers.",
      "Hoisting means JavaScript moves declarations (not initializations) to the top of their scope. var is hoisted with undefined; let and const are hoisted but stay in a temporal dead zone.",
    ],
    keyterms: [
      "Closure = function + its lexical scope",
      "Hoisting = JS moves declarations up during compile phase. Closures help with data privacy; hoisting affects variable behavior.",
    ],
  },
  {
    id: 3,
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    answer: [
      "The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is declared. Accessing it before declaration throws a ReferenceError.",
    ],
    example: ["console.log(a); // ReferenceError", "let a = 5;"],
    keyterms: [
      "TDZ = time before a let/const is declared",
      "Prevents access to variables before they're defined",
      "Applies only to let and const, not var. TDZ helps avoid bugs by enforcing proper variable declaration order.",
    ],
  },
  {
    id: 4,
    question: "What are primitive and non-primitive data types in JavaScript?",
    answer: [
      "Primitive types are immutable and hold single values. Examples: string, number, boolean, null, undefined, symbol, bigint.",
      "Non-primitive types (reference types) store collections or objects, and are mutable. Examples: object, array, function.",
      "Key Differences:",
    ],
    example: [
      "Feature           Primitive         Non-Primitive",
      "Stored as         Value             Reference (in memory)",
      "Mutable           No                Yes",
      "Compared by       Value             Reference",
    ],
    keyterms: [
      "In React: Primitives are used in state; non-primitives (like objects/arrays) require careful handling to avoid unwanted re-renders.",
    ],
  },
  {
    id: 5,
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer: [
      "TDZ = Temporal Dead Zone (access before declaration causes error). const still allows mutation of objects/arrays, but not reassignment.",
      "Use let for variables that change, const for fixed values, and avoid var in modern React/JS.",
    ],
    example: [
      "Feature    | var              | let                  | const",
      "-----------|------------------|----------------------|---------------------",
      "Scope      | Function scope   | Block scope          | Block scope",
      "Hoisting   | Yes (undefined)  | Yes (TDZ applies)    | Yes (TDZ applies)",
      "Reassign   | Allowed          | Allowed              | Not allowed",
      "Redeclare  | Allowed          | Not allowed          | Not allowed",
    ],
  },
  {
    id: 6,
    question:
      "What is the difference between spread and rest operators in JavaScript?",
    answer: [
      "Spread operator (...) expands an iterable (like array or object) into individual elements.",
      "Rest operator (...) collects multiple elements into an array, often used in function parameters.",
    ],
    example: [
      "const arr = [1, 2];                                                      // Spread Operator",
      "const newArr = [...arr, 3]; // [1, 2, 3]",
      "function sum(...args) { return args.reduce((a, b) => a + b, 0); }        // Rest Operator",
    ],
    keyterms: [
      "Both use ... but differ by context: spread expands, rest collects. Used heavily in React for props and state management.",
    ],
  },
  {
    id: 7,
    question:
      "What are real-world use cases of spread and rest operators in React?",
    answer: [
      "Spread operator:",
      "- Copying arrays or objects to avoid mutation",
      "- Merging props into components",
      "- Adding/removing items immutably in state updates",
      "Rest operator:",
      "- Collecting remaining props to pass down or separate specific ones",
      "- Handling variable number of function arguments",
    ],
    example: [
      "setState(prev => ({ ...prev, newProp: value }));",
      "function Button({ onClick, ...rest }) {",
      "  return <button {...rest} onClick={onClick} />;",
      "}",
    ],
    keyterms: [
      "Spread = expand/copy data",
      "Rest = gather leftover data. Both help write cleaner, immutable React code.",
    ],
  },
  {
    id: 8,
    question:
      "What is array flattening in JavaScript, and how to do it with and without built-in methods?",
    answer: [
      "Array flattening means converting a nested array into a single-level array.",
      "With built-in method: Use Array.prototype.flat()",
      "Without built-in method: Use recursion to flatten deeply nested arrays.",
    ],
    example: [
      "const arr = [1, [2, 3], [4, [5]]];",
      "const flatArr = arr.flat(2); // [1, 2, 3, 4, 5]",
      "function flatten(arr) { return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []); }",
    ],
    keyterms: [
      "Flattening = removing nested levels",
      "flat() = ES2019 method with depth param",
      "Recursive function = manual approach for any depth. Flattening is useful in React for processing nested data like menus or lists.",
    ],
  },
  {
    id: 9,
    question:
      "What is the difference between deep copy and shallow copy in JavaScript?",
    answer: [
      "Shallow copy copies only the first level of an object/array; nested objects still reference the original.",
      "Deep copy copies all nested levels, creating a fully independent clone.",
    ],
    example: [
      "const copy = {...obj}; // shallow copy",
      "const deepCopy = JSON.parse(JSON.stringify(obj));",
    ],
    keyterms: [
      "Shallow copy = top-level copy, nested references shared.",
      "Deep copy = fully independent clone of all nested data. In React, shallow copies are often used for state updates, but deep copies are needed when nested objects change.",
    ],
  },
  {
    id: 10,
    question: "How do you handle asynchronous code in JavaScript?",
    answer: [
      "Use callbacks: Pass a function to run after an async task finishes (can cause callback hell).",
      "Use Promises: Handle async results with .then()/.catch().",
      "Use async/await: Cleaner syntax for Promises that looks synchronous.",
    ],
    example: [
      "// Promise",
      "fetch('data.json').then(r => r.json()).then(console.log);",
      "",
      "// async/await",
      "const getData = async () => console.log(await (await fetch('data.json')).json());",
    ],
    keyterms: [
      "Callback = function executed after async task",
      "Promise = async result container",
      "async/await = syntax sugar for Promises",
    ],
  },
  {
    id: 11,
    question: "What are synchronous and asynchronous code in JavaScript?",
    answer: [
      "Synchronous code runs line-by-line, blocking further execution until the current task finishes.",
      "Asynchronous code allows other tasks to run while waiting for an operation to complete, preventing blocking.",
    ],
    example: [
      "// Synchronous",
      "console.log('Start');",
      "console.log('End');",
      "",
      "// Asynchronous",
      "console.log('Start');",
      "setTimeout(() => console.log('Async task'), 1000);",
      "console.log('End');",
    ],
    keyterms: [
      "Synchronous = tasks run one after another, blocking",
      "Asynchronous = tasks run without waiting, non-blocking",
    ],
  },
  {
    id: 12,
    question: "What is infinite currying in JavaScript?",
    answer: [
      "Infinite currying is a function technique where a function keeps returning another function, allowing repeated calls with new arguments.",
      "It usually ends when a condition is met, such as receiving no arguments, at which point it returns the final result.",
    ],
    example: [
      "function add(a) {",
      "  return function(b) {",
      "    if (b !== undefined) return add(a + b);",
      "    return a;",
      "  };",
      "}",
      "",
      "console.log(add(1)(2)(3)()); // 6",
    ],
    keyterms: [
      "Currying = breaking a function with multiple args into a chain of single-arg functions",
      "Infinite currying = currying without a fixed number of arguments, ends with a stop condition",
    ],
  },
  {
    id: 13,
    question: "What are template literals in JavaScript?",
    answer: [
      "Template literals are strings enclosed by backticks (`) that allow embedded expressions and multi-line strings.",
      "They use ${} for interpolation, making it easy to insert variables or expressions directly in a string.",
    ],
    example: [
      "const name = 'John';",
      "console.log(`Hello, ${name}!`); // Hello, John!",
    ],
    keyterms: [
      "Template literal = string with backticks (`) supporting expressions and multi-line text",
      "Interpolation = inserting values using ${expression}",
    ],
  },
  {
    id: 14,
    question:
      "What is hoisting and how do var, let, and const behave differently in JavaScript?",
    answer: [
      "Hoisting is JavaScript’s behavior of moving variable declarations to the top of their scope.",
      "var is hoisted and initialized as undefined.",
      "let and const are also hoisted, but not initialized. They stay in the Temporal Dead Zone (TDZ) until their declaration is reached.",
      "Accessing let or const before declaration causes a ReferenceError.",
    ],
    example: [
      "Keyword                  | var                   | let                    | const",
      "-------------------------|-----------------------|------------------------|-------------------------------",
      "Hoisted?                 | Yes                   | Yes                    | Yes",
      "Initialized?             | Yes (as undefined)    | No                     | No",
      "TDZ Exists?              | No                    | Yes                    | Yes",
      "Access Before Declaration| Allowed (undefined)   | Error in TDZ           | Error in TDZ + Must initialize",
    ],
  },
];
export default coreJsQuestions;
