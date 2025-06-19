import { Hash, ListTodo, Send, Play } from "lucide-react";
import CounterDemo from "../components/programs/CounterDemo";
import TodoDemo from "../components/programs/TodoDemo";
import PropsDemo from "../components/programs/PropsDemo";
import EmptyPlayground from "../components/programs/EmptyPlayground";

const programs = [
  {
    id: "playground",
    name: "JS Playground",
    icon: Play,
    description: "Execute any JS code",
    concept: "JavaScript, JSX, React.js",
    conceptDescription: "",
    component: EmptyPlayground,
  },
  {
    id: "counter",
    name: "Counter.jsx",
    icon: Hash,
    description: "Demonstrates a simple counter using useState.",
    concept: "useState",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        is a React Hook that lets you add state to functional components.
        <br />
        In this example, <span className="font-mono">useState(0)</span> creates
        a <span className="font-mono">counter</span> state variable and a{" "}
        <span className="font-mono">setCounter</span> function that updates it.
        When you click the buttons,{" "}
        <span className="font-mono">setCounter</span> changes the state and
        causes the component to re-render and display the new value.
      </>
    ),
    component: CounterDemo,
  },
  {
    id: "todo",
    name: "Todo.jsx",
    icon: ListTodo,
    description:
      "Demonstrates useState for managing both the todo array and input value in a functional component.",
    concept: "useState",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        lets you declare state variables in functional components.
        <br />
        Here, <span className="font-mono">useState([])</span> stores the list of
        todos and <span className="font-mono">useState("")</span> manages the
        input field value. Each state update causes the component to re-render
        and display the latest UI.
      </>
    ),
    component: TodoDemo,
  },
  {
    id: "props",
    name: "Props.jsx",
    icon: Send,
    description:
      "Demonstrates passing data and functions as props from a parent to child component.",
    concept: "props",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">props</span>{" "}
        are used to pass data and behavior from a parent component to its
        children.
        <br />
        In this example, the <span className="font-mono">Child</span> component
        receives a <span className="font-mono">name</span> (string) and an{" "}
        <span className="font-mono">onGreet</span> (function) as props. This
        allows the parent to control both the text and the click behavior of
        each child.
      </>
    ),
    component: PropsDemo,
  },
];

export default programs;
