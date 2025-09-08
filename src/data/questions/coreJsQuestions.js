const coreJsQuestions = [
  {
    id: 1,
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
    id: 2,
    question:
      "What is the difference between let, const, and var in JavaScript?",
    answer: [
      "TDZ = Temporal Dead Zone (access before declaration causes error). const still allows mutation of objects/arrays, but not reassignment.",
      "Use let for variables that change, const for fixed values, and avoid var in modern React/JS.",
    ],
    example: [
      "Feature    | var              | let                  | const",
      "-----------|------------------|----------------------|--------------------",
      "Scope      | Function scope   | Block scope          | Block scope",
      "Hoisting   | Yes (undefined)  | Yes (TDZ applies)    | Yes (TDZ applies)",
      "Reassign   | Allowed          | Allowed              | Not allowed",
      "Redeclare  | Allowed          | Not allowed          | Not allowed",
    ],
  },
  {
    id: 3,
    question:
      "What is hoisting and how do var, let, and const behave differently in JavaScript?",
    answer: [
      "Hoisting is JavaScript’s behavior of moving variable declarations to the top of their scope.",
      "var is hoisted and initialized as undefined.",
      "let and const are also hoisted, but not initialized. They stay in the Temporal Dead Zone (TDZ) until their declaration is reached.",
      "Accessing let or const before declaration causes a ReferenceError.",
    ],
    example: [
      "Keyword                  | var                   | let           | const",
      "-------------------------|-----------------------|---------------|-------------------------------",
      "Hoisted?                 | Yes                   | Yes           | Yes",
      "Initialized?             | Yes (as undefined)    | No            | No",
      "TDZ Exists?              | No                    | Yes           | Yes",
      "Access Before Declaration| Allowed (undefined)   | Error in TDZ  | Error in TDZ + Must initialize",
    ],
  },
  {
    id: 4,
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    answer: [
      'TDZ is the "dead zone" period for let and const variables.',
      "The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is declared.",
      "It starts when the execution context is created (hoisting happens) and ends when the execution phase reaches the actual declaration line where the variable is initialized.",
    ],
    example: ["console.log(a); // ReferenceError", "let a = 5;"],
    keyterms: [
      "TDZ = time before a let/const is declared",
      "Prevents access to variables before they're defined",
      "Applies only to let and const, not var. TDZ helps avoid bugs by enforcing proper variable declaration order.",
    ],
  },
  {
    id: 5,
    question:
      "What is a Function Statement (Declaration) and how does hoisting work?",
    answer: [
      "A named function defined with the `function` keyword at top level or inside scopes.",
      "Function declarations are hoisted with their definitions.",
      "You can call them before their appearance in code.",
    ],
    example: [
      `foo();             // This works`,
      `function foo() {
    console.log('Hi');
  }`,
    ],
    keyterms: [
      "Function declaration = hoisted",
      "Hoisting = definition available earlier",
    ],
  },
  {
    id: 6,
    question: "What is a Function Expression and how is it hoisted?",
    answer: [
      "A function assigned to a variable/constant.",
      "Only the variable is hoisted (initialized later).",
      "Calling before assignment causes error.",
    ],
    example: [
      `bar(); // TypeError/undefined at call time`,
      `var bar = function() {
    console.log('Hi');
  };`,
    ],
    keyterms: [
      "Function expression = not fully hoisted",
      "Declaration vs expression hoisting",
    ],
  },
  {
    id: 7,
    question: "What is an Anonymous Function and where is it used?",
    answer: [
      "A function without a name.",
      "Common in callbacks and IIFEs.",
      "Useful when the function is not reused.",
    ],
    example: [
      `setTimeout(function() {
    console.log('Timer');
  }, 500);`,
    ],
    keyterms: ["Anonymous = no name", "Used as inline callback"],
  },
  {
    id: 8,
    question: "What is a Named Function Expression and why use it?",
    answer: [
      "A function expression with an internal name.",
      "Improves stack traces and allows self-recursion.",
      "Name is not available in the outer scope.",
    ],
    example: [
      "const a = function xyz(n){",
      "  if(n<=1) return 1;",
      "  return n*xyz(n-1);",
      "};",
      "a(3); // ok, xyz is not global",
    ],
    keyterms: [
      "Named expression = inner name only",
      "Better debugging, recursion",
    ],
  },
  {
    id: 9,
    question: "What is the difference between Parameters and Arguments?",
    answer: [
      "Parameters are placeholders in the function definition.",
      "Arguments are actual values passed during the call.",
      "Arity = number of declared parameters.",
    ],
    example: [
      `function add(a, b) {
    return a + b; // a,b = parameters
  }`,
      `add(4, 5); // 4,5 = arguments`,
    ],
    keyterms: ["Parameter = declared variable", "Argument = runtime value"],
  },
  {
    id: 10,
    question: "What are First-Class and Higher-Order Functions?",
    answer: [
      "First-class: functions are values (assign, pass, return).",
      "Higher-order: functions that take/return functions.",
      "They enable map, filter, reduce, composition, and callbacks.",
    ],
    example: [
      "function greet(fn){",
      "  return name => fn(name);",
      "}",
      "const hello = greet(n => `Hello, ${n}!`);",
      "hello('Ani');                      // Hello, Ani!",
    ],
    keyterms: [
      "First-class = functions as values",
      "HOF = takes/returns functions",
    ],
  },
  {
    id: 11,
    question: "Arrow Functions vs Regular Functions: what are key differences?",
    answer: [
      "Arrow functions have lexical `this` (no dynamic binding).",
      "No `arguments` object; use rest parameters instead.",
      "Concise syntax and implicit return for expressions.",
    ],
    example: [
      "const obj = {",
      "  val: 10,",
      "  reg(){ return this.val; },",
      "  arr: () => this && this.val",
      "};",
      "obj.reg(); // 10",
      "obj.arr; // undefined in most cases",
    ],
    keyterms: [
      "Lexical this = arrow binds outer this",
      "No arguments in arrow",
    ],
  },
  {
    id: 12,
    question: "What are default parameters and rest parameters?",
    answer: [
      "Default parameters give fallback values when args are missing.",
      "Rest parameters collect remaining args into an array.",
      "Use rest instead of `arguments` for clarity.",
    ],
    example: [
      `function greet(name = 'Guest') {
    return 'Hi ' + name;
  }`,
      `function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }`,
    ],
    keyterms: ["Default params = fallback", "Rest params = variable arity"],
  },
  {
    id: 13,
    question: "What are call, apply, and bind used for?",
    answer: [
      "They control `this` and pass arguments to functions.",
      "`call`/`apply` invoke immediately (`apply` takes array).",
      "`bind` returns a new function with `this` preset.",
    ],
    example: [
      "function hi(g) { console.log(g + ' ' + this.name); }",
      "const user = { name: 'Ani' };",
      "hi.call(user, 'Hello');                     // call with this=user",
      "hi.apply(user, ['Hi']);                   // apply with this=user",
      "const bound = hi.bind(user, 'Hey');      // bind to user",
      "bound();",
    ],
    keyterms: [
      "call/apply = immediate invoke",
      "bind = returns bound function",
    ],
  },
  {
    id: 14,
    question: "What are closures in JavaScript?",
    answer: [
      "Function bundled with its lexical environment is called as a closure. ",
      "Closure is when a function remembers variables from its outer scope, even after the outer function has finished. Example: useful in React for preserving state in event handlers.",
      "Even if all the variables of it's parent function vanished in execution context through return or execution. It still remembers the reference it was pointing to.",
      "Its not just that function alone it returns but the entire closure.",
    ],
    example: [
      "function outer(){",
      "  let secret = 'hidden';",
      "  return () => console.log(secret);",
      "}",
      "const fn = outer();",
      "fn(); // 'hidden'",
    ],
    keyterms: [
      "Closure = function + its lexical scope",
      "Closures help with data privacy; hoisting affects variable behavior.",
    ],
  },
  {
    id: 15,
    question: "What are pros and cons of closures?",
    answer: [
      "✅ Pros:",
      "- Encapsulation: closures hide variables from outside scope.",
      "- Stateful functions: functions can remember values between calls.",
      "- Modularity: useful for callbacks, event handlers, and factory functions.",
      "",
      "⚠️ Cons:",
      "- Memory retention: closures keep variables alive as long as they are referenced.",
      "- Potential performance issues if many closures hold large data unnecessarily.",
      "- Can make debugging harder, since variables live longer than expected.",
      "",
      "Note: Modern JS engines optimize closures, but releasing references when no longer needed is still good practice.",
    ],
    example: [
      "function makeCounter(){",
      "  let c = 0;",
      "  return () => ++c;",
      "}",
      "const inc = makeCounter();",
      "inc(); // 1",
      "inc(); // 2",
    ],
    keyterms: [
      "closure = function + its surrounding scope",
      "encapsulation = keeping data private",
      "GC (Garbage Collection) = automatic memory cleanup",
    ],
  },
  {
    id: 16,
    question: "How do closures enable data hiding and encapsulation?",
    answer: [
      "Private variables live in the lexical scope of a function.",
      "Expose only necessary methods (privileged methods), Outside code has no direct access.",
      "Common in module patterns and factories.",
    ],
    example: [
      "function createCounter(){",
      "  let count = 0; // private",
      "  return {",
      "    increment(){ count++; },",
      "    get(){ return count; }",
      "  };",
      "}",
      "const counter = createCounter();",
      "counter.increment();",
      "counter.get(); // 1",
    ],
    keyterms: [
      "Encapsulation = hide internal state",
      "Privileged methods = controlled access",
    ],
  },
  {
    id: 17,
    question: "How does setTimeout demonstrate closures (let vs var)?",
    answer: [
      "`let` is block-scoped → each iteration creates a new binding of i, so closures capture the correct value.",
      "`var` is function-scoped → only one i exists for the whole loop, so closures capture the same reference.",
      "By the time setTimeout callbacks run, the loop has finished and i has the final value.",
      "Fix: wrap `var` in an IIFE or use `let` to give each closure its own copy of i.",
    ],
    example: [
      "// ✅ Using let (each iteration has its own i)",
      "for (let i = 1; i <= 3; i++) {",
      "  setTimeout(() => console.log(i), i * 1000);",
      "}",
      "// Output: 1, 2, 3",
      "",
      "// ❌ Using var (one shared i for all iterations)",
      "for (var i = 1; i <= 3; i++) {",
      "  setTimeout(() => console.log(i), i * 1000);",
      "}",
      "// Output: 4, 4, 4",
      "",
      "// ✅ Fix for var → use IIFE to capture i",
      "for (var i = 1; i <= 3; i++) {",
      "  (function(i){",
      "    setTimeout(() => console.log(i), i * 1000);",
      "  })(i);",
      "}",
      "// Output: 1, 2, 3",
    ],
    keyterms: [
      "var = function scope (one binding for loop)",
      "let = block scope (new binding per iteration)",
      "IIFE = captures var value in its own closure",
    ],
  },
  {
    id: 18,
    question: "How do closures work with Event Listeners?",
    answer: [
      "Listeners capture variables from their creation scope.",
      "State can persist across multiple event triggers.",
      "Be mindful: captured state keeps memory alive.",
    ],
    example: [
      "function counter(){",
      "  let count = 0;",
      "  btn.addEventListener('click', () => console.log(++count));",
      "}",
      "counter();",
    ],
    keyterms: [
      "Closure = function + lexical scope",
      "Stateful listeners via closure",
    ],
  },
  {
    id: 19,
    question: "How does scope affect Event Listeners (var vs let)?",
    answer: [
      "A function execution context is created only when a function is invoked (added to the call stack).Inside that context, JS maintains a Lexical Environment(variable env)",
      "`var` is function-scoped → one variable shared across all iterations. Whereas`let` is block-scoped → each iteration gets its own copy of the variable.",
      "With `var`, callbacks/event listeners see the final value after the loop. But, with `let`, callbacks/event listeners keep the correct value of each loop iteration.",
      "Because the call stack frame is created only when a function executes, not on every loop iteration. With var, the loop runs inside the same function execution context, so it just reuses the same variable binding. Only let/const trigger creation of a fresh block environment record each iteration.",
    ],
    example: [
      "// Using var → all callbacks share one i",
      "for (var i=1; i<=3; i++){",
      "  setTimeout(()=>console.log(i), 500);",
      "}",
      "// Output: 4,4,4",
      " ",
      "// Using let → each iteration has its own i",
      "for (let i=1; i<=3; i++){",
      "  setTimeout(()=>console.log(i), 500);",
      "}",
      "// Output: 1,2,3",
    ],
    keyterms: [
      "var = function scope, shared binding",
      "let = block scope, new binding per loop",
      "closure = function remembers variable from outer scope",
    ],
  },
  {
    id: 20,
    question: "How do `let`, `var`, and `const` affect closures?",
    answer: [
      "`var` → function-scoped, shared across closures (last value retained).",
      "`let` → block-scoped, each closure keeps its own value.",
      "`const` → also block-scoped, behaves like `let` but cannot be reassigned.",
    ],
    example: [
      `for (var i=0; i<3; i++) {
    setTimeout(() => console.log(i), 100);
  } // 3,3,3`,
      " ",
      `for (let i=0; i<3; i++) {
    setTimeout(() => console.log(i), 100);
  } // 0,1,2`,
      " ",
      `for (const i of [10,20,30]) {
    setTimeout(() => console.log(i), 100);
  } // 10,20,30`,
    ],
    keyterms: [
      "closure = function remembers surrounding scope",
      "var = one shared binding",
      "let/const = fresh binding each iteration",
    ],
  },
  {
    id: 21,
    question: "What are Event Listeners in JavaScript?",
    answer: [
      "They run a handler when an event occurs (click, input, etc.).",
      "Handlers are callbacks wired to elements or the window.",
      "Multiple listeners can exist per event/element.",
    ],
    example: [
      "document.getElementById('btn')",
      "  .addEventListener('click', () => console.log('Clicked'));",
    ],
    keyterms: [
      "Listener = callback for an event",
      "addEventListener(type, handler)",
    ],
  },
  {
    id: 22,
    question: "Why should you remove Event Listeners?",
    answer: [
      "Listeners hold references via closures -> memory use.",
      "Unused listeners can leak memory and slow apps.",
      "Always remove when not needed.",
    ],
    example: [
      "function handle(){ console.log('Click'); }",
      "btn.addEventListener('click', handle);",
      "// later",
      "btn.removeEventListener('click', handle);",
    ],
    keyterms: [
      "removeEventListener = cleanup",
      "Garbage collection needs no refs",
    ],
  },
  {
    id: 23,
    question: "What are Debouncing and Throttling with event listeners?",
    answer: [
      "Debounce: delay execution until user stops triggering.",
      "Throttle: limit executions to once per interval.",
      "Both reduce unnecessary handler calls.",
    ],
    example: [
      "// Debounce: wait for pause",
      "function debounce(fn, delay){",
      "  let t;",
      "  return ()=>{ clearTimeout(t); t=setTimeout(fn, delay); };",
      "}",
      "button.onclick = debounce(()=>console.log('Debounced!'), 500);",
      "",
      " ",
      "// Throttle: allow once per delay",
      "function throttle(fn, delay){",
      "  let last=0;",
      "  return ()=>{",
      "    if(Date.now()-last>delay){ fn(); last=Date.now(); }",
      "  };",
      "}",
      "button.onclick = throttle(()=>console.log('Throttled!'), 1000);",
    ],
    keyterms: ["Debounce = wait then run", "Throttle = run at fixed rate"],
  },
  {
    id: 24,
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
      " ",
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
    id: 25,
    question: "Why is JavaScript called single-threaded and synchronous?",
    answer: [
      "JS runs on a single main thread executing one task at a time.",
      "By default, code runs synchronously in order.",
      "Global Execution context sits at the bottom of call stack, whenever a new function has to be executed theirs execution context is pushed to call stack, after completion its removed.",
    ],
    example: [
      "console.log('A');",
      "console.log('B');",
      "console.log('C'); // strict order",
    ],
    keyterms: [
      "Single-threaded = one call stack",
      "Synchronous = sequential execution",
    ],
  },
  {
    id: 26,
    question: "What does blocking the main thread mean in JavaScript?",
    answer: [
      "A long synchronous task stops the event loop from processing other work.",
      "UI freezes and DOM will not load if that piece of code comes at the begining, thereby degrading user experience.",
      "Use async patterns or Web Workers or execute that piece of code later when DOM loads properly to avoid blocking.",
    ],
    example: ["for(let i=0;i<1e9;i++){} // blocks", "console.log('Done');"],
    keyterms: [
      "Blocking = main thread is busy",
      "Non-blocking = yields to the loop",
    ],
  },
  {
    id: 27,
    question: "What is a Callback Function in JavaScript?",
    answer: [
      "A callback is a function passed as an argument to another function.",
      "It runs later, typically after an operation completes.",
      "Common with timers, event listeners, and network requests.",
    ],
    example: [
      "function greet(name, cb){",
      "  console.log('Hello ' + name);",
      "  cb();",
      "}",
      "greet('Ani', () => console.log('Done'));",
    ],
    keyterms: [
      "Callback = function passed to another function",
      "Used for async flow control",
    ],
  },
  {
    id: 28,
    question: "What is the power of callbacks in JavaScript?",
    answer: [
      "Enable async programming in a single-threaded language.",
      "Support event-driven designs (clicks, timers, responses).",
      "Allow sequencing tasks without blocking.",
    ],
    example: ["setTimeout(() => console.log('Later'), 1000);"],
    keyterms: [
      "Event-driven = callbacks on events",
      "Async flow without blocking",
    ],
  },
  {
    id: 29,
    question:
      "How do you handle asynchronous code using callbacks in JavaScript?",
    answer: [
      "Callbacks pass a function as an argument to execute after an async task.",
      "Simple for basic async, but can nest deeply.",
    ],
    example: [
      "function greet(callback) {",
      "  setTimeout(() => callback('Hello!'), 1000);",
      "}",
      "greet(msg => console.log(msg)); // Logs 'Hello!' after 1s",
    ],
    keyterms: ["Callback = passed function", "Async execution"],
  },
  {
    id: 30,
    question:
      "How do you handle asynchronous code using Promises in JavaScript?",
    answer: [
      "Promises represent async results; use .then() for success, .catch() for errors.",
      "Chain to avoid nesting.",
    ],
    example: [
      "function greet() {",
      "  return new Promise(resolve => {",
      "    setTimeout(() => resolve('Hello!'), 1000);",
      "  });",
      "}",
      "greet().then(msg => console.log(msg)); // Logs 'Hello!' after 1s",
    ],
    keyterms: [".then/.catch = handlers", "Chaining"],
  },
  {
    id: 31,
    question:
      "How do you handle asynchronous code using async/await in JavaScript?",
    answer: [
      "Async/await makes async look sync: await pauses for Promise resolution.",
      "Use try/catch for errors.",
    ],
    example: [
      "async function greet() {",
      "  const msg = await new Promise(resolve => {",
      "    setTimeout(() => resolve('Hello!'), 1000);",
      "  });",
      "  console.log(msg);",
      "}",
      "greet(); // Logs 'Hello!' after 1s",
    ],
    keyterms: ["Async/await = sync-like", "Await = pause"],
  },
  {
    id: 32,
    question: "How do you handle asynchronous code in JavaScript?",
    answer: [
      "Use callbacks: Pass a function to run after an async task finishes (can cause callback hell).",
      "Use Promises: Handle async results with .then()/.catch().",
      "Use async/await: Cleaner syntax for Promises that looks synchronous.",
    ],
    example: [
      "// Promise",
      "fetch('data.json')",
      "  .then(r => r.json())",
      "  .then(console.log);",
      "",
      " ",
      "// async/await",
      "const getData = async () => {",
      "  const r = await fetch('data.json');",
      "  const data = await r.json();",
      "  console.log(data);",
      "};",
    ],
    keyterms: [
      "Callback = function executed after async task",
      "Promise = async result container",
      "async/await = syntax sugar for Promises",
    ],
  },
  {
    id: 33,
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
    id: 34,
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
    id: 35,
    question:
      "What is the difference between spread and rest operators in JavaScript?",
    answer: [
      "Spread operator (...) expands an iterable (like array or object) into individual elements.",
      "Rest operator (...) collects multiple elements into an array, often used in function parameters.",
    ],
    example: [
      "// Spread Operator",
      "const arr = [1, 2];",
      "const newArr = [...arr, 3]; // [1, 2, 3]",
      "",
      " ",
      "// Rest Operator",
      "function sum(...args) {",
      "  return args.reduce((a, b) => a + b, 0);",
      "}",
    ],
    keyterms: [
      "Both use ... but differ by context: spread expands, rest collects. Used heavily in React for props and state management.",
    ],
  },
  {
    id: 36,
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
    id: 37,
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
      "",
      "function flatten(arr) {",
      "  return arr.reduce((acc, val) =>",
      "    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),",
      "  []);",
      "}",
    ],
    keyterms: [
      "Flattening = removing nested levels",
      "flat() = ES2019 method with depth param",
      "Recursive function = manual approach for any depth. Flattening is useful in React for processing nested data like menus or lists.",
    ],
  },
  {
    id: 38,
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
    id: 39,
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    answer: [
      "A function that runs immediately after it is defined.",
      "Creates a private scope (module pattern).",
      "Can accept parameters.",
    ],
    example: ["(function(msg){", "  console.log(msg);", "})('Hello');"],
    keyterms: ["IIFE = (function(){...})()", "Private scope, init code"],
  },
  {
    id: 40,
    question: "What is Function Currying?",
    answer: [
      "Transforming a function of n args into a chain of unary functions.",
      "Uses closures to remember earlier arguments.",
      "Useful for partial application and composition.",
    ],
    example: ["const add = a => b => a + b;", "add(2)(3); // 5"],
    keyterms: ["Currying = f(a,b)->f(a)(b)", "Partial application"],
  },
  {
    id: 41,
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
    id: 42,
    question: "What is Memoization and how does it use closures?",
    answer: [
      "Caching function results to avoid recomputation.",
      "Closure keeps a private cache map/object.",
      "Great for expensive pure functions.",
    ],
    example: [
      "function memoize(fn) {",
      "  const cache = {};",
      "  return n => cache[n] ?? (cache[n] = fn(n));",
      "}",
      "",
      "const slowSquare = n => {",
      "  for (let i = 0; i < 1e6; i++) {}",
      "  return n * n;",
      "};",
      "",
      "const fastSquare = memoize(slowSquare);",
    ],
    keyterms: ["Memoization = cache results", "Closure holds cache"],
  },
  {
    id: 43,
    question: "What are Pure vs Impure Functions?",
    answer: [
      "Pure: same inputs -> same output, no side effects.",
      "Impure: modifies external state or relies on it.",
      "Pure functions are predictable and testable.",
    ],
    example: [
      "// pure",
      "const add = (a,b)=>a+b;",
      "// impure",
      "let total=0; function addToTotal(x){ total+=x; }",
    ],
    keyterms: [
      "Pure = deterministic, no side effects",
      "Impure = side effects",
    ],
  },
  {
    id: 44,
    question: "What is Recursion and when should you use it?",
    answer: [
      "A function calling itself to solve smaller subproblems.",
      "Useful for tree/graph traversals, divide-and-conquer.",
      "Tail-call optimization isn’t guaranteed in most JS engines.",
    ],
    example: ["function fact(n){", "  return n<=1 ? 1 : n*fact(n-1);", "}"],
    keyterms: ["Recursion = self-calling function", "TCO not reliable in JS"],
  },
  {
    id: 45,
    question: "How do functions relate to constructors and prototypes?",
    answer: [
      "Functions can be used with `new` as constructors.",
      "Methods should be placed on `FunctionName.prototype` to share across instances.",
      "Saves memory versus redefining methods per instance.",
    ],
    example: [
      "function Person(name){ this.name = name; }",
      "Person.prototype.sayHi = function(){",
      "  console.log('Hi ' + this.name);",
      "};",
      "new Person('Ani').sayHi();",
    ],
    keyterms: ["Constructor = function with new", "Prototype = shared methods"],
  },
  {
    id: 46,
    question:
      "What is the difference between prototypal inheritance and classical inheritance?",
    answer: [
      "Classical → objects inherit from classes (like Java, C++).",
      "Prototypal → objects inherit directly from other objects.",
      "JS internally uses prototypal inheritance, though `class` syntax is sugar.",
    ],
    example: [
      "// Classical style (class-based)",
      "class Animal { speak(){ console.log('sound'); } }",
      "class Dog extends Animal { speak(){ console.log('woof'); } }",
      "new Dog().speak(); // woof",
      "",
      " ",
      "// Prototypal style (object-based)",
      "const animal = { speak(){ console.log('sound'); } };",
      "const dog = Object.create(animal);",
      "dog.speak = ()=>console.log('woof');",
      "dog.speak(); // woof",
    ],
    keyterms: ["prototype = parent object", "prototype chain = lookup path"],
  },
  {
    id: 47,
    question: "What are JavaScript generators?",
    answer: [
      "Generators are special functions that can pause (`yield`) and later resume execution.",
      "Defined with `function*` syntax and use `yield` to return values step by step.",
      "Calling a generator does not run it immediately—it returns an iterator object.",
      "Execution continues each time `.next()` is called, maintaining internal state.",
    ],
    example: [
      "function* gen(){",
      "  yield 1;",
      "  yield 2;",
      "  yield 3;",
      "}",
      "const it = gen();",
      "console.log(it.next().value); // 1",
      "console.log(it.next().value); // 2",
      "console.log(it.next().value); // 3",
    ],
    keyterms: [
      "generator = resumable function",
      "yield = pause/return value",
      "iterator = object returned by generator",
    ],
  },
  {
    id: 48,
    question: "What are Symbols in JavaScript?",
    answer: [
      "Symbols are **unique and immutable primitive values**.",
      "They are often used as **object keys** to avoid naming conflicts.",
      "Even Symbols with the same description are different.",
      "Symbols can be used to add **safe, hidden properties** to objects.",
    ],
    example: [
      "// Create a unique Symbol (here id is a unique Symbol, not a string)",
      "const id = Symbol('id');",
      "const obj = {};",
      "obj[id] = 10; // property key is the Symbol, not a string",
      "",
      " ",
      "// Every Symbol is unique",
      "const a = Symbol('id');",
      "const b = Symbol('id');",
      "console.log(a === b); // false",
    ],
    keyterms: [
      "Symbol = unique key",
      "hidden properties = keys not easily collided with others",
    ],
  },
  {
    id: 49,
    question: "What are Web Workers?",
    answer: [
      "Background scripts that run in parallel with main thread.",
      "Used for heavy tasks without blocking UI.",
    ],
    example: [`const w = new Worker("worker.js");`],
    keyterms: ["worker = parallel thread", "main thread = UI execution"],
  },
  {
    id: 50,
    question: "What is a Service Worker?",
    answer: [
      "Script that runs in background, separate from main JS.",
      "Enables caching, offline support, push notifications.",
    ],
    example: [`navigator.serviceWorker.register("/sw.js");`],
    keyterms: [
      "service worker = background proxy",
      "PWA = progressive web app",
    ],
  },
  {
    id: 51,
    question: "What is Garbage Collection in JavaScript?",
    answer: [
      "Garbage collection automatically deletes unused variables in high-level languages.",
      "Uses mark-and-sweep; closures hinder by retaining references.",
    ],
    example: ["let obj = {data: 'large'}; obj = null; // GC eligible"],
    keyterms: ["GC = auto memory", "Mark-sweep = algorithm"],
  },
  {
    id: 52,
    question: "How do Closures Affect Garbage Collection?",
    answer: [
      "Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.",
      "Retain outer vars, preventing GC until closure discarded.",
    ],
    example: [
      "function outer() {",
      "  let data = new Array(1e6);",
      "  return () => data;",
      "}",
      "",
      "const closure = outer(); // data retained",
    ],
    keyterms: ["Closure = memory hold", "Disadvantage = leak risk"],
  },
  {
    id: 53,
    question: "Why Remove Event Listeners for Garbage Collection?",
    answer: [
      "Unused variables are automatically deleted... Closures allocate a lot of memory which cannot be deleted.",
      "Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.",
      "Removing listeners releases closure refs for GC.",
    ],
    example: ["element.removeEventListener('click', handler); // Frees memory"],
    keyterms: ["Smart GC = auto delete", "Listener remove = GC aid"],
  },
];
export default coreJsQuestions;
