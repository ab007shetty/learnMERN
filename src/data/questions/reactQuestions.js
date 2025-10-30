const reactQuestions = [
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
    question: "Why is the 'key' prop important in React lists?",
    answer: [
      "Keys help React identify which list items have changed, been added, or removed.",
      "They make updates efficient by preventing unnecessary re-renders.",
      "Without keys, React may reuse or reorder DOM nodes incorrectly.",
    ],
    example: [
      "items.map(item => <li key={item.id}>{item.name}</li>);",
      "// Wrong: <li id={item.id}>{item.name}</li> // 'id' is just HTML, not used by React",
    ],
    keyterms: [
      "key = special React prop used during reconciliation.",
      "id = normal HTML attribute, not used for diffing.",
      "Reconciliation = React’s process of updating the DOM efficiently.",
    ],
  },
  {
    id: 33,
    question:
      "How does useEffect work in React, and why is the dependency array important?",
    answer: [
      "Runs side-effects after render (data fetch, subscriptions, DOM ops).",
      "Dependency array controls when the effect runs: [] → once, [a] → when a changes, no array → after every render.",
      "Cleanup function (returned) runs before next effect or on unmount, useful to remove listeners/timers.",
    ],
    example: [
      "useEffect(() => {",
      "  // mount: fetch data",
      "  const id = setInterval(() => console.log('tick'), 1000);",
      "  return () => clearInterval(id); // cleanup on unmount",
      "}, []);",
      "",
      "useEffect(() => {",
      "  // runs whenever `userId` changes",
      "  fetch(`/api/user/${userId}`).then(r => r.json()).then(setUser);",
      "}, [userId]);",
    ],
    keyterms: [
      "side-effect = work outside render (fetch, timers, subscriptions)",
      "dependency array = controls re-run",
      "cleanup = function returned by effect",
    ],
  },
  {
    id: 34,
    question: "What is useContext and how do you use it?",
    answer: [
      "Provides a way to pass data through the component tree without prop drilling.",
      "Create a Context with createContext(), provide value via Provider, consume with useContext().",
      "Good for theme, auth, language — not for frequently changing large state (use redux/zustand for that).",
    ],
    example: [
      "const AuthContext = createContext(null);",
      "",
      "function App() {",
      "  const user = {name: 'Ani'};",
      "  return (<AuthContext.Provider value={user}><Profile/></AuthContext.Provider>);",
      "}",
      "",
      "function Profile() {",
      "  const user = useContext(AuthContext);",
      "  return <div>{user.name}</div>; // Ani",
      "}",
    ],
    keyterms: [
      "createContext() = creates context object",
      "Provider = supplies value to subtree",
      "useContext() = consumes context value",
    ],
  },
  {
    id: 35,
    question: "What is useMemo and when should you use it?",
    answer: [
      "Memoizes a computed value so expensive calculations run only when dependencies change.",
      "Use when an expensive function is called on every render and result can be reused.",
      "Do not overuse — memoization has its own cost; use when measurable benefit exists.",
    ],
    example: [
      "const heavy = (n) => { /* CPU heavy loop */ return n * 1000; };",
      "const result = useMemo(() => heavy(input), [input]);",
      "// heavy runs only when `input` changes",
    ],
    keyterms: [
      "memoization = cache computed result",
      "useMemo = caches value between renders",
      "dependency = triggers recompute",
    ],
  },
  {
    id: 36,
    question:
      "Explain useReducer with a concise example and when to prefer it over useState.",
    answer: [
      "useReducer manages complex state transitions using a reducer function (state, action) ⇒ newState.",
      "Prefer it for complex state logic, multiple sub-values, or when next state depends on previous state.",
      "It centralizes update logic and improves testability/readability.",
    ],
    example: [
      "function reducer(state, action) {",
      "  switch(action.type) {",
      "    case 'inc': return {...state, count: state.count + 1};",
      "    case 'setName': return {...state, name: action.payload};",
      "    default: return state;",
      "  }",
      "}",
      "const [state, dispatch] = useReducer(reducer, {count:0, name:''});",
      "dispatch({type:'inc'});",
      "dispatch({type:'setName', payload:'Ani'});",
    ],
    keyterms: [
      "reducer = (state, action) => newState",
      "dispatch = send action to reducer",
      "initialState = starting state for reducer",
    ],
  },
  {
    id: 37,
    question: "What is useCallback and why use it?",
    answer: [
      "useCallback memoizes a function reference so it doesn't recreate on every render.",
      "Useful when passing functions to memoized children to avoid unnecessary re-renders.",
      "Works like useMemo but for functions.",
    ],
    example: [
      "const increment = useCallback(() => setCount(c => c + 1), []);",
      "<Child onClick={increment} /> // Child won't re-render if props same",
    ],
    keyterms: [
      "useCallback = memoize function",
      "dependency array = controls when function reference updates",
      "referential equality = same function object across renders",
    ],
  },
  {
    id: 38,
    question: "What is useRef and what are its uses?",
    answer: [
      "useRef returns a mutable object {current} that persists across renders.",
      "Used to access DOM nodes, keep mutable values without causing re-render, store timers or previous values.",
      "Updating ref does not trigger re-render.",
    ],
    example: [
      "const inputRef = useRef(null);",
      "useEffect(() => inputRef.current.focus(), []);",
      "return <input ref={inputRef} />;",
      "",
      "// store previous value",
      "const prev = useRef();",
      "useEffect(()=> { prev.current = value; }, [value]);",
    ],
    keyterms: [
      "ref.current = mutable container",
      "DOM ref = connect to DOM element",
      "no re-render = updates do not cause UI update",
    ],
  },
  {
    id: 39,
    question: "What is a Higher-Order Component (HOC) and why use one?",
    answer: [
      "HOC is a function that takes a component and returns an enhanced component.",
      "Used to share reusable logic (e.g., logging, auth checks) across multiple components.",
      "HOCs wrap original component and inject props or behavior.",
    ],
    example: [
      "function withAuth(Wrapped){",
      "  return function(props){",
      "    const user = useContext(AuthContext);",
      "    if(!user) return <Login/>;",
      "    return <Wrapped {...props} />;",
      "  }",
      "}",
      "// const Protected = withAuth(Dashboard);",
    ],
    keyterms: [
      "HOC = function(Component) => Component",
      "composition = wrap component with extra behavior",
      "do not mutate wrapped component = return new component",
    ],
  },
  {
    id: 40,
    question: "React class component lifecycle: 3 phases and main methods.",
    answer: [
      "Mounting: constructor → render → componentDidMount (init side-effects).",
      "Updating: shouldComponentUpdate → render → componentDidUpdate (respond to prop/state changes).",
      "Unmounting: componentWillUnmount (cleanup).",
    ],
    example: [
      "class MyComp extends React.Component {",
      "  componentDidMount(){ /* fetch */ }",
      "  shouldComponentUpdate(nextProps){ return true; }",
      "  componentDidUpdate(prev){ /* react to change */ }",
      "  componentWillUnmount(){ /* cleanup */ }",
      "  render(){ return <div/>; }",
      "}",
    ],
    keyterms: [
      "mounting = first render",
      "updating = re-render on prop/state change",
      "unmounting = cleanup phase",
    ],
  },
  {
    id: 41,
    question: "State vs Props in React — differences with example.",
    answer: [
      "State: internal, mutable, owned by component (useState/useReducer).",
      "Props: external, read-only, passed from parent to child.",
      "Props flow is one-way (parent → child).",
    ],
    example: [
      "function Parent(){",
      "  const [count, setCount] = useState(0);",
      "  return <Child count={count} onInc={()=>setCount(c=>c+1)} />;",
      "}",
      "function Child({count, onInc}){",
      "  return <button onClick={onInc}>Count: {count}</button>;",
      "}",
    ],
    keyterms: [
      "state = component data that changes",
      "props = data from parent",
      "one-way binding = parent passes props to child",
    ],
  },
  {
    id: 42,
    question:
      "Compare Redux and Zustand: why, how, and when to use; mention Redux Toolkit.",
    answer: [
      "Both manage global state; choose based on complexity and team needs.",
      "Redux: predictable, middleware, developer tools, more boilerplate; good for large apps and strict patterns.",
      "Redux Toolkit: reduces boilerplate (createSlice, configureStore) and is recommended standard.",
      "Zustand: minimal API, less boilerplate, hook-based store; good for small-to-medium apps or simple global state.",
    ],
    example: [
      "// Redux Toolkit slice (simplified)",
      "const slice = createSlice({ name:'counter', initialState:0, reducers:{inc: s => s+1} });",
      "store.dispatch(slice.actions.inc());",
      "",
      "// Zustand simple store",
      "const useStore = create(set => ({count:0, inc: ()=>set(s=>({count: s.count+1}))}));",
      "useStore.getState().inc();",
    ],
    keyterms: [
      "Redux = central store + reducers + actions",
      "Redux Toolkit = official abstraction to simplify Redux",
      "Zustand = small hook-based state library",
    ],
  },
  {
    id: 43,
    question:
      "What are custom hooks, why create them, and a hook example using localStorage?",
    answer: [
      "Custom hooks reuse stateful logic (start name with `use`).",
      "They allow sharing behaviour across components without repeating code.",
      "Good for form logic, localStorage syncing, subscriptions.",
    ],
    example: [
      "function useLocalStorage(key, initial){",
      "  const [val, setVal] = useState(()=>{",
      "    const raw = localStorage.getItem(key);",
      "    return raw ? JSON.parse(raw) : initial;",
      "  });",
      "  useEffect(()=> localStorage.setItem(key, JSON.stringify(val)), [key, val]);",
      "  return [val, setVal];",
      "}",
      "// usage: const [name, setName] = useLocalStorage('name','Ani');",
    ],
    keyterms: [
      "custom hook = function using hooks for reusable logic",
      "localStorage sync = persist state to browser storage",
      "encapsulation = hide logic inside hook",
    ],
  },
  {
    id: 44,
    question: "What is lazy loading, code-splitting and Suspense in React?",
    answer: [
      "Lazy loading (React.lazy) loads components only when needed, reducing initial bundle size.",
      "Code splitting breaks app bundle into smaller chunks loaded on demand.",
      "Suspense shows a fallback UI while the lazy chunk loads.",
    ],
    example: [
      "const LazyPage = React.lazy(() => import('./BigPage'));",
      "function App(){",
      "  return (<Suspense fallback={<div>Loading...</div>}><LazyPage/></Suspense>);",
      "}",
    ],
    keyterms: [
      "React.lazy = dynamic import for components",
      "code splitting = break bundle into chunks",
      "Suspense = fallback UI while loading",
    ],
  },
  {
    id: 45,
    question:
      "Explain Virtual DOM, reconciliation, React Fiber and the diffing algorithm (brief).",
    answer: [
      "Virtual DOM: lightweight in-memory representation of UI.",
      "Diffing compares previous and current VDOM to compute minimal DOM updates (reconciliation).",
      "React Fiber is the rewrite for incremental rendering and better scheduling (pausing, prioritizing work).",
      "Diffing uses heuristics (keys, element type) to minimize operations.",
    ],
    example: [
      "When state changes, React creates new VDOM, compares (diff) with previous, then updates only changed DOM nodes (not full re-render).",
      "Using keys in lists helps diffing produce minimal moves: <li key={id}>",
    ],
    keyterms: [
      "Virtual DOM = abstract DOM copy",
      "reconciliation = compute minimal updates",
      "Fiber = scheduler + incremental rendering",
      "keys = help list diffing",
    ],
  },

  {
    id: 46,
    question:
      "Routing and RBAC: how to implement protected routes and role-based access in React?",
    answer: [
      "Use React Router for routes; protect routes by checking auth and roles before rendering component.",
      "RBAC: assign roles to user (admin/user) and conditionally allow access.",
      "Redirect or show unauthorized page when check fails.",
    ],
    example: [
      "function Protected({role, children}){",
      "  const user = useAuth();",
      "  if(!user) return <Navigate to='/login' />;",
      "  if(role && user.role !== role) return <Navigate to='/unauthorized' />;",
      "  return children;",
      "}",
      "<Route path='/admin' element={<Protected role='admin'><Admin/></Protected>} />",
    ],
    keyterms: [
      "React Router = routing library",
      "Protected route = gate component checking auth/role",
      "RBAC = role-based access control",
    ],
  },
  {
    id: 47,
    question:
      "How to handle query params, dynamic routing and route params in React Router?",
    answer: [
      "useParams() reads dynamic segments (/:id).",
      "useSearchParams() or new URLSearchParams reads query strings (?q=abc).",
      "Dynamic routing renders different content based on URL params.",
    ],
    example: [
      "// Route: /user/:id",
      "const { id } = useParams(); // id from path",
      "const [searchParams] = useSearchParams();",
      "const sort = searchParams.get('sort'); // ?sort=asc",
    ],
    keyterms: [
      "useParams = path params",
      "useSearchParams = query params",
      "dynamic route = URL-driven rendering",
    ],
  },
  {
    id: 48,
    question:
      "React Testing: what is React Testing Library (RTL) and basic testing pattern?",
    answer: [
      "RTL focuses on testing UI from user's perspective (DOM queries, events).",
      "Use render(), screen queries and fireEvent/userEvent to simulate interactions.",
      "Prefer behaviour tests over implementation details.",
    ],
    example: [
      "render(<Button />);",
      "const btn = screen.getByRole('button', {name: /click/i});",
      "userEvent.click(btn);",
      "expect(screen.getByText(/done/i)).toBeInTheDocument();",
    ],
    keyterms: [
      "RTL = user-focused testing library",
      "render = render component in test DOM",
      "userEvent = simulate user actions",
    ],
  },
  {
    id: 49,
    question: "fetch vs axios: differences and usage examples",
    answer: [
      "fetch: native browser API, returns Response which needs .json() parsing; no built-in interceptors.",
      "axios: library, auto-parses JSON (res.data), supports request/response interceptors, better error handling and older browser support.",
      "Choose axios for extra features, fetch for native no-dep usage.",
    ],
    example: [
      "// fetch",
      "fetch('/api/data')",
      "  .then(res => { if(!res.ok) throw new Error('err'); return res.json(); })",
      "  .then(data => console.log(data))",
      "// axios",
      "axios.get('/api/data')",
      "  .then(res => console.log(res.data))",
    ],
    keyterms: [
      "fetch = native, promise-based",
      "axios = feature-rich HTTP client",
      "interceptors = middleware for requests/responses",
    ],
  },
  {
    id: 50,
    question:
      "Why use a key in map(), and how does useState differ from normal variables (including manual array form)?",
    answer: [
      "key uniquely identifies list items so React can track elements across re-renders and perform minimal DOM updates.",
      "useState values persist across renders and trigger re-render when updated; normal variables reset each render and do not trigger updates.",
      "Manual form: const stateArr = useState(0); const count = stateArr[0]; const setCount = stateArr[1]; — same underlying API as destructured form.",
    ],
    example: [
      "// keys in list",
      "items.map(item => <li key={item.id}>{item.name}</li>);",
      "",
      "// useState manual access (not recommended but possible)",
      "const stateArr = useState(0);",
      "const count = stateArr[0];",
      "const setCount = stateArr[1];",
      "setCount(prev => prev + 1);",
    ],
    keyterms: [
      "key = stable id for list items",
      "re-render = UI update caused by state change",
      "useState = hook that returns [value, setValue]",
    ],
  },
  {
    id: 51,
    question:
      "Why do we use parentheses around JSX inside .map, like .map(user => (<li>{user.name}</li>))?",
    answer: [
      "Parentheses here are not for function parameters.",
      "They are used to wrap the JSX being returned from the arrow function.",
      "This allows writing multi-line JSX without needing the 'return' keyword.",
      "Without parentheses: .map(user => <li>{user.name}</li>) (for single-line).",
      "With parentheses: .map(user => ( <li>{user.name}</li> )) (for multi-line readability).",
    ],
    example: [
      "// Single line (no parentheses)",
      "users.map(user => <li>{user.name}</li>)",
      "",
      "// Multi-line (with parentheses for JSX)",
      "users.map(user => (",
      "  <li key={user.id}>{user.name}</li>",
      "))",
    ],
    keyterms: [
      "Arrow function = Short function syntax using =>",
      "JSX = JavaScript XML, syntax extension for React",
      "Parentheses around JSX = Groups multi-line JSX for implicit return",
    ],
  },
];

export default reactQuestions;
