import {
  Hash,
  ListTodo,
  Send,
  Play,
  Shuffle,
  RefreshCcw,
  Eye,
  Maximize2,
  Search,
  ArrowRightLeft,
  BarChart2,
  DivideCircle,
  Repeat,
} from "lucide-react";

import Counter from "../components/programs/Counter";
import Todo from "../components/programs/Todo";
import Props from "../components/programs/Props";
import JsPlayground from "../components/programs/JsPlayground";
import AnagramChecker from "../components/programs/AnagramChecker";
import ReverseString from "../components/programs/ReverseString";
import FlattenArray from "../components/programs/FlattenArray";
import CountRepeatedChars from "../components/programs/CountRepeatedChars";
import RemoveDuplicates from "../components/programs/RemoveDuplicates";
import LargestElement from "../components/programs/LargestElement";
import PalindromeChecker from "../components/programs/PalindromeChecker";
import Fibonacci from "../components/programs/Fibonacci";
import FindIndex from "../components/programs/FindIndex";

const programs = [
  {
    id: "playground",
    name: "JS Playground",
    icon: Play,
    description: "Execute any JS code",
    concept: "JavaScript, JSX, React.js",
    conceptDescription: "",
    component: JsPlayground,
  },
  {
    id: "counter",
    name: "Counter",
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
    component: Counter,
  },
  {
    id: "todo",
    name: "Todo",
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
        todos and <span className="font-mono">useState(\"\")</span> manages the
        input field value. Each state update causes the component to re-render
        and display the latest UI.
      </>
    ),
    component: Todo,
  },
  {
    id: "props",
    name: "Props",
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
    component: Props,
  },
  {
    id: "anagram-checker",
    name: "AnagramChecker",
    icon: Shuffle,
    description:
      "Demonstrates checking if two input strings are anagrams and displaying the result.",
    concept: "useState, string manipulation, event handling",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        is used to store the two input strings and the result.
        <br />
        String normalization and sorting is performed to determine if the inputs
        are anagrams.
        <br />
        Event handlers update state and trigger the check.
      </>
    ),
    component: AnagramChecker,
  },
  {
    id: "reverse-string",
    name: "ReverseString",
    icon: RefreshCcw,
    description:
      "Demonstrates reversing a string entered by the user and displaying the reversed version.",
    concept: "useState, string manipulation, event handling",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        holds the user input and reversed output.
        <br />
        String methods (<span className="font-mono">split</span>,{" "}
        <span className="font-mono">reverse</span>,{" "}
        <span className="font-mono">join</span>) are used for reversing.
        <br />
        Controlled inputs and event handlers manage data and update output.
      </>
    ),
    component: ReverseString,
  },
  {
    id: "flatten-array",
    name: "FlattenArray",
    icon: ArrowRightLeft,
    description:
      "Demonstrates flattening a nested array entered by the user and displaying the flat version.",
    concept: "useState, recursion, array manipulation",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        stores array input and output.
        <br />
        Recursion is used to flatten nested arrays.
        <br />
        <span className="font-mono">JSON.parse</span> converts string input to
        array, and <span className="font-mono">reduce</span> with{" "}
        <span className="font-mono">concat</span> flattens it.
      </>
    ),
    component: FlattenArray,
  },
  {
    id: "count-repeated-chars",
    name: "CountRepeatedChars",
    icon: Repeat,
    description:
      "Demonstrates counting the frequency of each character in a string.",
    concept: "useState, object/hash, iteration",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        manages the input string and result object.
        <br />A <span className="font-mono">for...of</span> loop and an object
        are used to count character occurrences.
        <br />
        State is updated and displayed as JSON.
      </>
    ),
    component: CountRepeatedChars,
  },
  {
    id: "remove-duplicates",
    name: "RemoveDuplicates",
    icon: DivideCircle,
    description:
      "Demonstrates removing duplicate numbers from an array using a hash/object.",
    concept: "useState, object/hash, array manipulation",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        stores array input and output.
        <br />
        An object/hash is used to track seen elements and filter duplicates.
        <br />
        <span className="font-mono">JSON.parse</span> is used for converting the
        string input to array.
      </>
    ),
    component: RemoveDuplicates,
  },
  {
    id: "largest-element",
    name: "LargestElement",
    icon: Maximize2,
    description:
      "Demonstrates finding and displaying the largest element in an input array.",
    concept: "useState, Math.max, array parsing",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        stores the array input and result.
        <br />
        <span className="font-mono">Math.max</span> with the spread operator
        finds the largest element.
        <br />
        <span className="font-mono">JSON.parse</span> parses the string to
        array.
      </>
    ),
    component: LargestElement,
  },
  {
    id: "palindrome-checker",
    name: "PalindromeChecker",
    icon: Eye,
    description:
      "Demonstrates checking if a string is a palindrome and displaying the result.",
    concept: "useState, string manipulation, conditional rendering",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        stores the input string and result.
        <br />
        String is cleaned using regex and compared with its reversed version.
        <br />
        Result is conditionally rendered based on palindrome check.
      </>
    ),
    component: PalindromeChecker,
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    icon: BarChart2,
    description:
      "Demonstrates generating and displaying the first N numbers in the Fibonacci sequence.",
    concept: "useState, iteration, array construction",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        stores the input n and Fibonacci sequence array.
        <br />A <span className="font-mono">for</span> loop constructs the
        sequence.
        <br />
        Controlled numeric input and button event update the result state.
      </>
    ),
    component: Fibonacci,
  },
  {
    id: "find-index",
    name: "FindIndex",
    icon: Search,
    description:
      "Demonstrates finding the index of a specified element in an input array.",
    concept: "useState, array methods, type conversion",
    conceptDescription: (
      <>
        <span className="font-mono bg-blue-50 px-2 py-1 rounded">useState</span>{" "}
        manages array input, target value, and result index.
        <br />
        <span className="font-mono">JSON.parse</span> and{" "}
        <span className="font-mono">indexOf</span> are used to find the index.
        <br />
        Controlled inputs and button event update the result state.
      </>
    ),
    component: FindIndex,
  },
];

export default programs;
