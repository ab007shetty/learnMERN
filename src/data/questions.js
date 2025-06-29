const questions = [
  {
    id: 1,
    question:
      "What is the Virtual DOM and how does it improve performance in React?",
    answer: [
      "The Virtual DOM is a lightweight copy of the real DOM stored in memory. When state (component data that can change) or props (data passed from parent to child) change, React creates a new Virtual DOM.",
      "It uses a diffing algorithm (a comparison process) to find differences between the old and new Virtual DOM. Then, it updates only the changed parts in the real DOM, which boosts performance by avoiding full re-renders.",
    ],
    example: [
      "const [count, setCount] = useState(0);",
      "setCount(count + 1);",
      "// React will:",
      "// 1. Create a new Virtual DOM reflecting the updated count.",
      "// 2. Compare it with the previous Virtual DOM.",
      "// 3. Find only the part of the UI where count changed.",
      "// 4. Update only that part in the real DOM.",
    ],
  },
  {
    id: 2,
    question:
      "What is React Router and what's the difference between dynamic and nested routes?",
    answer: [
      "React Router is a library for handling navigation in React apps. It lets you map URLs to components.",
      "Dynamic Routes use URL parameters to render content based on values in the URL. Example: /user/:id renders different user profiles based on id.",
      "Nested Routes allow you to show child components inside parent routes. Example: /dashboard/settings renders Dashboard as a parent, and Settings inside it.",
    ],
    keyterms: [
      "Key Difference: Dynamic routes change based on the URL parameter, while nested routes represent a hierarchical structure of components.",
    ],
  },
  {
    id: 3,
    question:
      "What is the difference between authentication and authorization in React?",
    answer: [
      "Authentication in React verifies the user’s identity, usually using login forms and tokens (like JWT). Example: After login, the token is stored (e.g., in localStorage) and used in API requests.",
      "Authorization controls what routes or components a user can access based on their role or permissions. Example: A protected route like /admin is only accessible if the user role is “admin”.",
    ],
    keyterms: [
      "Key Difference: Authentication checks who the user is; authorization checks what they're allowed to access in the React app.",
    ],
  },
  {
    id: 4,
    question: "What is lazy loading in React and what is React.lazy?",
    answer: [
      "Lazy loading means loading components only when needed, not during the initial render. It improves performance by reducing bundle size.",
      "React.lazy is a built-in function to implement lazy loading in React. You must wrap it with <Suspense>, which shows fallback content while loading.",
    ],
    example: ["const About = React.lazy(() => import('./About'));"],
    keyterms: [
      "Lazy loading = load on demand",
      "React.lazy = function to load components lazily",
      "<Suspense> = wrapper to handle loading state. This helps speed up the initial page load.",
    ],
  },
  {
    id: 5,
    question: "What is code splitting in React?",
    answer: [
      "Code splitting is a technique to split your React app’s code into smaller bundles that load on demand. It improves performance by reducing the initial load size.",
      "React uses dynamic import() and tools like React.lazy to implement code splitting.",
      "This reduces the bundle size and speeds up rendering.",
    ],
    keyterms: [
      "Code splitting = splitting code into smaller chunks",
      "Dynamic import() = loads modules asynchronously",
      "React.lazy = helps load components only when needed.",
    ],
  },
  {
    id: 6,
    question: "What is a Higher-Order Component (HOC) in React?",
    answer: [
      "A Higher-Order Component is a function that takes a component and returns a new enhanced component. It's used to reuse logic across components.",
      "HOCs add extra props or behavior to the wrapped component.",
    ],
    example: ["const EnhancedComponent = withFeature(OriginalComponent);"],
    keyterms: [
      "HOC = function that wraps a component",
      "Reusability = shares logic without repeating code.",
    ],
  },
  {
    id: 7,
    question: "What are controlled and uncontrolled components in React?",
    answer: [
      "Controlled components have their form data managed by React state. The input's value is set via state and updated with event handlers.",
      "Uncontrolled components manage their own state inside the DOM, accessed via refs.",
      "Controlled components provide better control and validation.",
    ],
    example: [
      "<input value={value} onChange={e => setValue(e.target.value)} />           //Controlled",
      "<input ref={inputRef} />                                                   //Uncontrolled",
    ],
    keyterms: [
      "Controlled = React controls input data via state",
      "Uncontrolled = DOM controls input data, React accesses it via refs.",
    ],
  },
  {
    id: 8,
    question: "When to use ref vs useState in React?",
    answer: [
      "Use useState to store and manage data that affects rendering or UI. When state changes, React re-renders the component. ",
      "Example: form inputs, toggle states.",
      "Use ref to access or store mutable values that don’t cause re-render when changed, like DOM elements or timers. ",
      "Example: focus input, store previous values.",
    ],
    keyterms: [
      "useState = reactive state that triggers re-render",
      "ref = mutable value that persists without re-render. Use ref for DOM access or stable variables; use useState for UI data.",
    ],
  },
  {
    id: 9,
    question:
      "What is the difference between functional and class components in React?",
    answer: [
      "Functional components are simple JavaScript functions that return JSX. They use hooks like useState and useEffect for state and lifecycle.",
      "Class components are ES6 classes extending React.Component and use this.state and lifecycle methods like componentDidMount.",
    ],
    keyterms: [
      "Functional components = simpler, use hooks, preferred now.",
      "Class components = use this, older lifecycle methods.",
      "Functional components are now recommended for new React apps.",
    ],
  },
  {
    id: 10,
    question: "What are lifecycle methods in React?",
    answer: [
      "Lifecycle methods are special functions in class components that run at different stages of a component’s life, like mounting, updating, and unmounting.",
      "Common lifecycle methods: componentDidMount — after component mounts, componentDidUpdate — after updates, componentWillUnmount — before unmounting.",
      "In functional components, these are handled with useEffect hook, which can mimic all lifecycle behaviors.",
    ],
    keyterms: [
      "Mounting = component appears on screen",
      "Updating = component re-renders due to state/props change",
      "Unmounting = component is removed from DOM",
      "useEffect = hook for side effects in functional components.",
    ],
  },
  {
    id: 11,
    question: "What is hydration in React?",
    answer: [
      "Hydration is the process where React attaches event listeners and makes a server-rendered HTML page interactive on the client side without re-rendering the entire UI.",
      "It's used in Server-Side Rendering (SSR) to improve performance and SEO.",
    ],
    keyterms: [
      "Hydration = connecting React to static HTML from the server",
      "SSR = rendering React on the server before sending HTML to the client. Hydration lets React reuse the server HTML and add interactivity efficiently.",
    ],
  },
  {
    id: 12,
    question: "What is reconciliation in React?",
    answer: [
      "Reconciliation is React's process of comparing the new Virtual DOM with the previous one to find what changed.",
      "It uses the diffing algorithm to update only the necessary parts of the real DOM.",
    ],
    keyterms: [
      "Reconciliation = comparing Virtual DOM trees",
      "Diffing algorithm = finds minimal changes. Improves performance by avoiding full DOM updates.",
    ],
  },
  {
    id: 13,
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
    id: 14,
    question:
      "What are key lifecycle methods in class components and their functional component equivalents?",
    example: [
      "Class Component Method           |           Functional Component Equivalent (useEffect usage)",
      "componentDidMount                =           useEffect(() => { /* mount code */ }, [])",
      "componentDidUpdate               =           useEffect(() => { /* update code */ })",
      "componentWillUnmount             =           useEffect(() => { return () => { /* cleanup */ } }, [])",
    ],
    keyterms: [
      "componentDidMount runs after first render",
      "componentDidUpdate runs after every update",
      "componentWillUnmount runs before component unmounts",
      "useEffect hook can mimic all these behaviors depending on dependencies",
    ],
  },
  {
    id: 15,
    question: "What are class and functional components in React?",
    answer: [
      "Class components are ES6 classes extending React.Component. They use this.state for state and lifecycle methods like componentDidMount.",
      "Functional components are simple JavaScript functions that return JSX. They use hooks like useState and useEffect for state and side effects.",
    ],
    keyterms: [
      "Class components = older style, use this, lifecycle methods.",
      "Functional components = simpler, use hooks, recommended now. Functional components are preferred for cleaner and easier code.",
    ],
  },
  {
    id: 16,
    question:
      "What is useStrict in React and what are common use cases for unit testing?",
    answer: [
      "<React.StrictMode> is a wrapper that activates additional checks and warnings for its children in development mode. It helps identify unsafe lifecycle methods, side effects, and potential bugs.",
      "Use Cases: Detect unexpected side effects, Highlight deprecated APIs, Help with future React updates.",
      "Unit tests check individual components or functions in isolation.",
      "Common use cases: Rendering components with different props, Testing state updates and events (e.g., button clicks), Validating conditional rendering, Checking API call functions with mocks.",
    ],
    keyterms: [
      "StrictMode = helps catch potential issues",
      "Unit test = test one piece of logic/component at a time.",
    ],
  },
  {
    id: 17,
    question: "What is an Error Boundary in React?",
    answer: [
      "An Error Boundary is a class component that catches JavaScript errors in its child component tree and shows a fallback UI instead of crashing the whole app.",
      "It uses lifecycle methods: static getDerivedStateFromError(), componentDidCatch().",
      "Note: React doesn't catch errors in event handlers or async code—those need try/catch.",
    ],
    keyterms: [
      "Error boundary = catches runtime errors in UI. Only works for class components, not functional (yet). Used to prevent app crashes and show fallback UIs.",
    ],
  },
  {
    id: 18,
    question:
      "How do you analyze performance in React and what is the React Profiler?",
    answer: [
      "React Profiler is a dev tool that helps measure render performance of components—how often they render and how long they take.",
      "You can use the Profiler tab in React DevTools to: Identify slow components, Spot unnecessary re-renders, Optimize expensive updates.",
      "You can also use React.memo, useMemo, and useCallback to optimize based on Profiler insights.",
    ],
    keyterms: [
      "Profiler = tool to track render time",
      "Re-render = component renders again due to state/prop change",
      "Helps with performance tuning and improving user experience.",
    ],
  },
  {
    id: 19,
    question:
      "What are browser tools like Lighthouse and how are they useful in React apps?",
    answer: [
      "Lighthouse is a Chrome DevTool that audits your web app for performance, accessibility, SEO, and best practices.",
      "Other useful tools: React DevTools - inspect component tree, props, state, and use Profiler; Network tab — monitor API calls and asset loading; Performance tab - analyze frame rate, paint time, and scripting; Console tab - view errors, warnings, and logs.",
      "These tools help ensure your React app runs fast, is accessible, and debugged efficiently.",
    ],
    keyterms: [
      "Lighthouse = automated audit tool",
      "React DevTools = debug React components",
      "Network/Performance tabs = diagnose speed and loading issues.",
    ],
  },
  {
    id: 20,
    question:
      "What is the difference between debouncing and throttling in React?",
    answer: [
      "Debouncing delays a function until a certain time has passed after the last event. Example: search input waits for user to stop typing.",
      "Throttling limits a function to run at most once in a fixed time. Example: handling scroll or resize events every 300ms.",
    ],
    keyterms: [
      "Debounce = wait for pause",
      "Throttle = run at intervals. Both improve performance by reducing unnecessary function calls.",
    ],
  },
  {
    id: 21,
    question: "What is the difference between HTML, HTML5, and Web 3.0?",
    answer: [
      "HTML is the standard markup language for creating web pages.",
      "HTML5 is the latest version with new tags (<video>, <canvas>, etc.), semantic elements, and offline support.",
      "Web 3.0 is not a markup language—it's the next evolution of the web focused on decentralization, blockchain, and smart applications.",
    ],
    keyterms: [
      "HTML = basic structure",
      "HTML5 = modern features, multimedia, semantic tags",
      "Web 3.0 = concept of a decentralized, intelligent web (not part of HTML).",
    ],
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
    question:
      "What is the difference between useEffect and useLayoutEffect in React?",
    answer: [
      "useEffect runs after the browser paints the screen. It's suitable for async side effects like data fetching or subscriptions.",
      "useLayoutEffect runs synchronously before the browser paints, blocking the paint until it finishes. Use it for DOM measurements or mutations to avoid flicker.",
    ],
    keyterms: [
      "useEffect = non-blocking, runs after paint.",
      "useLayoutEffect = blocking, runs before paint. Use useLayoutEffect to read layout from the DOM and synchronously re-render.",
    ],
  },
  {
    id: 31,
    question: "What is the difference between useMemo and useCallback?",
    answer: [
      "useMemo memoizes a computed value to avoid expensive recalculations.",
      "useCallback memoizes a function reference to avoid unnecessary re-creations.",
    ],
    keyterms: [
      "useMemo = caches values",
      "useCallback = caches functions. Both optimize performance by preventing unnecessary re-renders.",
    ],
  },
  {
    id: 32,
    question:
      "Explain event delegation in JavaScript and how React handles events?",
    answer: [
      "Event delegation is attaching a single event listener to a parent element to manage events on its children.",
      "React uses a synthetic event system that delegates events at the root for performance and cross-browser consistency.",
    ],
    keyterms: [
      "Event delegation = one listener handles many child events",
      "Synthetic events = React's wrapper around native events.",
    ],
  },
  {
    id: 33,
    question: "What are Pure Components in React?",
    answer: [
      "A Pure Component implements shouldComponentUpdate with a shallow prop and state comparison to avoid unnecessary re-renders.",
      "In functional components, use React.memo for similar behavior.",
    ],
    keyterms: [
      "PureComponent = class with optimized rendering",
      "React.memo = functional equivalent.",
    ],
  },
  {
    id: 34,
    question: "What is React Fiber?",
    answer: [
      "React Fiber is the new reconciliation engine in React (from v16).",
      "It allows React to break rendering work into chunks and pause/resume work as needed for better responsiveness.",
    ],
    example: [
      "// No direct code usage, it's internal to React.",
      "// Helps with time-slicing, concurrent rendering, and prioritizing updates.",
    ],
    keyterms: [
      "Fiber = reimplementation of React’s core algorithm.",
      "Enables asynchronous rendering, improves UI responsiveness.",
      "Supports features like Suspense, Concurrent Mode.",
    ],
  },
  {
    id: 35,
    question: "What is the difference between state and props in React?",
    answer: [
      "State is local and managed within the component. It changes over time using useState or this.setState.",
      "Props are inputs passed to components by parents. They are read-only inside the component.",
    ],
    example: [
      "const [count, setCount] = useState(0); // state",
      "<Counter count={count} /> // props",
    ],
    keyterms: [
      "State = internal, mutable data.",
      "Props = external, immutable inputs.",
      "State affects behavior; props affect rendering.",
    ],
  },
  {
    id: 36,
    question: "What is props drilling in React?",
    answer: [
      "Props drilling is passing props through multiple layers of components, even if intermediate components don’t need them.",
      "This makes components tightly coupled and harder to maintain.",
    ],
    example: [
      "// App -> Parent -> Child -> GrandChild (just to pass data)",
      "<App><Parent data={value} /></App>",
    ],
    keyterms: [
      "Props drilling = deep prop passing through hierarchy.",
      "Avoid using Context API or state management tools like Redux.",
    ],
  },
  {
    id: 37,
    question: "What is the Context API in React?",
    answer: [
      "Context API provides a way to share values between components without passing props manually through every level.",
      "It is useful for global data like themes, user info, etc.",
    ],
    example: [
      "const MyContext = React.createContext();",
      "<MyContext.Provider value={data}><App /></MyContext.Provider>",
      "const value = useContext(MyContext);",
    ],
    keyterms: [
      "Context = global state mechanism inside React.",
      "Avoids props drilling, used with useContext().",
    ],
  },
  {
    id: 38,
    question: "What is the useState hook in React?",
    answer: [
      "useState is a hook that lets you add state to functional components.",
      "It returns a state variable and a function to update it.",
    ],
    example: ["const [count, setCount] = useState(0);", "setCount(count + 1);"],
    keyterms: [
      "useState = state hook for functional components.",
      "Replaces this.state in class components.",
      "Triggers re-render when updated.",
    ],
  },
  {
    id: 39,
    question: "What is the useEffect hook in React?",
    answer: [
      "useEffect runs side-effects in function components, like fetching data or subscriptions.",
      "It can also clean up when the component unmounts or dependencies change.",
    ],
    example: [
      "useEffect(() => { fetchData(); }, []); // runs once",
      "useEffect(() => { console.log(value); }, [value]);",
    ],
    keyterms: [
      "useEffect = lifecycle hook (componentDidMount, etc.).",
      "Accepts dependency array to control when it runs.",
      "Supports clean-up with return function.",
    ],
  },
  {
    id: 40,
    question: "What are custom hooks in React?",
    answer: [
      "Custom hooks are user-defined functions that use built-in hooks to share reusable logic across components.",
      "They help keep components clean and modular.",
    ],
    example: [
      "function useTitle(title) { useEffect(() => { document.title = title; }, [title]); }",
      "useTitle('Home Page');",
    ],
    keyterms: [
      "Custom hook = reusable logic using hooks.",
      "Name must start with 'use'.",
      "Encapsulates side-effects, states, etc.",
    ],
  },
  {
    id: 41,
    question: "What is Redux and how is it used in React?",
    answer: [
      "Redux is a state management library that stores the global state in a single store.",
      "State updates are done using actions and reducers, and components access data via selectors or mapStateToProps.",
    ],
    example: [
      "store.dispatch({ type: 'INCREMENT' });",
      "const count = useSelector(state => state.count);",
    ],
    keyterms: [
      "Redux = predictable global state container.",
      "Uses store, actions, reducers.",
      "Middleware like thunk used for async logic.",
    ],
  },
  {
    id: 42,
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

export default questions;
