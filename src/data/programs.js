import {
  Hash,
  ListTodo,
  Send,
  /*   Repeat,
  Layers,
  ClipboardList,
  FileText,
  RefreshCcw,
  Globe, */
} from "lucide-react";

import CounterDemo from "../components/programs/CounterDemo";
import TodoDemo from "../components/programs/TodoDemo";
import PropsDemo from "../components/programs/PropsDemo";
/* import UseEffectDemo from "../components/programs/UseEffectDemo";
import UseRefDemo from "../components/programs/UseRefDemo";
import UseMemoDemo from "../components/programs/UseMemoDemo";
import UseCallbackDemo from "../components/programs/UseCallbackDemo";
import UseContextDemo from "../components/programs/UseContextDemo";
import ControlledInputDemo from "../components/programs/ControlledInputDemo";
import UncontrolledInputDemo from "../components/programs/UncontrolledInputDemo";
import FetchDataDemo from "../components/programs/FetchDataDemo";
import ListRenderingDemo from "../components/programs/ListRenderingDemo"; */

const programs = [
  {
    id: 1,
    name: "Counter",
    icon: Hash,
    description: "Simple counter using useState (basic state management)",
    component: CounterDemo,
  },
  {
    id: 2,
    name: "ToDo",
    icon: ListTodo,
    description: "A basic ToDo app with add, remove, and toggle functionality",
    component: TodoDemo,
  },
  {
    id: 3,
    name: "Props",
    icon: Send,
    description: "Pass data and event handlers to child components",
    component: PropsDemo,
  },
  /* {
    id: 4,
    name: "useEffect Hook",
    icon: RefreshCcw,
    description: "Handle side effects such as data fetching or subscriptions",
    component: UseEffectDemo,
  },
  {
    id: 5,
    name: "useRef Hook",
    icon: Layers,
    description: "Access and persist mutable values and DOM nodes",
    component: UseRefDemo,
  },
  {
    id: 6,
    name: "useMemo Hook",
    icon: ClipboardList,
    description: "Optimize performance by memoizing expensive calculations",
    component: UseMemoDemo,
  },
  {
    id: 7,
    name: "useCallback Hook",
    icon: Repeat,
    description: "Memoize functions to prevent unnecessary re-renders",
    component: UseCallbackDemo,
  },
  {
    id: 8,
    name: "useContext Hook",
    icon: FileText,
    description: "Share state easily across deeply nested components",
    component: UseContextDemo,
  },
  {
    id: 9,
    name: "Controlled Input",
    icon: Send,
    description: "Controlled component for form input using state",
    component: ControlledInputDemo,
  },
  {
    id: 10,
    name: "Uncontrolled Input",
    icon: Globe,
    description: "Uncontrolled component for form input using ref",
    component: UncontrolledInputDemo,
  },
  {
    id: 11,
    name: "Fetch Data (API)",
    icon: Globe,
    description: "Fetch and display data from an API in a React component",
    component: FetchDataDemo,
  },
  {
    id: 12,
    name: "List Rendering",
    icon: Layers,
    description: "Render lists and use keys for efficient DOM updates",
    component: ListRenderingDemo,
  }, */
];

export default programs;
