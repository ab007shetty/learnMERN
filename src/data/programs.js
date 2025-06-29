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
  Layers,
  Text,
  Clock,
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
import LongestWord from "../components/programs/LongestWord";
import ArrayOperations from "../components/programs/ArrayOperations";
import Stopwatch from "../components/programs/Stopwatch";

const programs = [
  {
    id: "playground",
    name: "JS Playground",
    icon: Play,
    description:
      "Execute any JavaScript code in real-time.\nPerfect for testing snippets and experimenting.",
    concept: "JavaScript, JSX, React.js",
    conceptDescription: "",
    component: JsPlayground,
  },
  {
    id: "counter",
    name: "Counter",
    icon: Hash,
    description:
      "Simple counter that increments and decrements numbers.\nDemonstrates basic state management.",
    concept: "useState",
    get conceptDescription() {
      return "useState Hook adds state to functional components and triggers re-renders.";
    },
    component: Counter,
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    icon: Clock, // You can use any icon component here
    description:
      "Simple stopwatch with start, pause, and reset.\nDemonstrates side effects and cleanup with useEffect.",
    concept: "useEffect",
    get conceptDescription() {
      return "useEffect Hook handles side effects like timers and API calls. Cleanup is done via return function.";
    },
    component: Stopwatch,
  },
  {
    id: "todo",
    name: "Todo",
    icon: ListTodo,
    description:
      "Add, display, and manage a list of tasks.\nBasic todo list functionality with input handling.",
    concept: "useState",
    get conceptDescription() {
      return "Multiple useState calls manage different pieces of state independently.";
    },
    component: Todo,
  },
  {
    id: "props",
    name: "Props",
    icon: Send,
    description: "Pass data and functions between parent and child components.",
    concept: "props",
    get conceptDescription() {
      return "Props pass data and behavior from parent to child components.\nShows component communication patterns.";
    },
    component: Props,
  },
  {
    id: "anagram-checker",
    name: "AnagramChecker",
    icon: Shuffle,
    description:
      "Check if two words are anagrams (same letters, different order).\nExample: 'listen' and 'silent' are anagrams.",
    concept: "useState, string manipulation",
    get conceptDescription() {
      return "String sorting and normalization to compare letter patterns.";
    },
    component: AnagramChecker,
  },
  {
    id: "reverse-string",
    name: "ReverseString",
    icon: RefreshCcw,
    description:
      "Reverse any text input backwards.\nTurns 'hello' into 'olleh'.",
    concept: "useState, string methods",
    get conceptDescription() {
      return "split(), reverse(), and join() methods transform strings.";
    },
    component: ReverseString,
  },
  {
    id: "flatten-array",
    name: "FlattenArray",
    icon: ArrowRightLeft,
    description:
      "Convert nested arrays into a single flat array.\nTurns [1, [2, 3], [4, [5]]] into [1, 2, 3, 4, 5].",
    concept: "useState, recursion",
    get conceptDescription() {
      return "Recursive function processes nested array structures.";
    },
    component: FlattenArray,
  },
  {
    id: "count-repeated-chars",
    name: "CountRepeatedChars",
    icon: Repeat,
    description:
      "Count how many times each character appears in text.\nShows frequency of letters, numbers, and symbols.",
    concept: "useState, object/hash",
    get conceptDescription() {
      return "Object as hash map tracks character occurrences.";
    },
    component: CountRepeatedChars,
  },
  {
    id: "remove-duplicates",
    name: "RemoveDuplicates",
    icon: DivideCircle,
    description:
      "Remove duplicate numbers from an array.\nKeeps only the first occurrence of each number.",
    concept: "useState, object/hash",
    get conceptDescription() {
      return "Hash map efficiently tracks and filters seen elements.";
    },
    component: RemoveDuplicates,
  },
  {
    id: "largest-element",
    name: "LargestElement",
    icon: Maximize2,
    description:
      "Find the biggest number in an array.\nReturns the maximum value from a list of numbers.",
    concept: "useState, Math.max",
    get conceptDescription() {
      return "Math.max with spread operator finds maximum value.";
    },
    component: LargestElement,
  },
  {
    id: "palindrome-checker",
    name: "PalindromeChecker",
    icon: Eye,
    description:
      "Check if text reads the same forwards and backwards.\nWords like 'racecar' and 'madam' are palindromes.",
    concept: "useState, string manipulation",
    get conceptDescription() {
      return "String cleaning and comparison with reversed version.";
    },
    component: PalindromeChecker,
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    icon: BarChart2,
    description:
      "Generate Fibonacci sequence numbers.\nEach number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8...",
    concept: "useState, iteration",
    get conceptDescription() {
      return "Loop constructs sequence by adding previous two numbers.";
    },
    component: Fibonacci,
  },
  {
    id: "find-index",
    name: "FindIndex",
    icon: Search,
    description:
      "Find the position of a specific number in an array.\nReturns the index (position) where the number is located.",
    concept: "useState, array methods",
    get conceptDescription() {
      return "indexOf method locates element position in arrays.";
    },
    component: FindIndex,
  },
  {
    id: "longest-word",
    name: "LongestWord",
    icon: Text,
    description:
      "Find the longest word in an array of strings.\nReturns the word with the maximum length.",
    concept: "useState, array iteration",
    get conceptDescription() {
      return "Loop or reduce can be used to find the longest element in an array.";
    },
    component: LongestWord,
  },
  {
    id: "array-operations",
    name: "ArrayOperations",
    icon: Layers,
    description:
      "Demonstrates common array operations: map, filter, reduce, flatten.\nShows how to manipulate and transform arrays.",
    concept: "map, filter, reduce, flat",
    get conceptDescription() {
      return "Array methods like map, filter, reduce, and flat allow powerful data transformation.";
    },
    component: ArrayOperations,
  },
];

export default programs;
