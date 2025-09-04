import {
  Hash,
  ListTodo,
  Send,
  Play,
  Shuffle,
  RefreshCcw,
  Eye,
  Maximize2,
  FileSearch,
  ArrowRightLeft,
  BarChart2,
  Calculator,
  Repeat,
  Layers,
  Text,
  Clock,
  ArrowDownWideNarrow,
  ChevronRight,
  Sigma,
  BookOpen,
  FileSearch2,
  ArrowUpRight,
  Target,
  Minus,
  Globe,
  Search,
  Code2,
} from "lucide-react";

import Counter from "../components/programs/Counter";
import Todo from "../components/programs/Todo";
import Props from "../components/programs/Props";
import JsPlayground from "../components/programs/JsPlayground";
import AnagramChecker from "../components/programs/AnagramChecker";
import ReverseString from "../components/programs/ReverseString";
import FlattenArray from "../components/programs/FlattenArray";
import CountChars from "../components/programs/CountChars";
import RemoveDuplicates from "../components/programs/RemoveDuplicates";
import LargestNumber from "../components/programs/LargestNumber";
import PalindromeChecker from "../components/programs/PalindromeChecker";
import Fibonacci from "../components/programs/Fibonacci";
import FindIndex from "../components/programs/FindIndex";
import LongestWord from "../components/programs/LongestWord";
import ArrayOperations from "../components/programs/ArrayOperations";
import Stopwatch from "../components/programs/Stopwatch";
import FetchUsers from "../components/programs/FetchUsers";
import MoveZeroes from "../components/programs/MoveZeroes";
import CounterWithReducer from "../components/programs/CounterWithReducer";
import Pagination from "../components/programs/Pagination";
import PrimeChecker from "../components/programs/PrimeChecker";
import FactorialCalculator from "../components/programs/Factorial";
import SumDigits from "../components/programs/SumDigits";
import VowelCounter from "../components/programs/VowelCounter";
import SnakeCaseConverter from "../components/programs/SnakeCaseConverter";
import DebounceSearch from "../components/programs/DebounceSearch";
import ClosureSetTimeout from "../components/programs/ClosureSetTimeout";

// --- Programs grouped and sorted alphabetically by category ---

// React
const react = [
  {
    id: "counter",
    name: "Counter",
    icon: Hash,
    description:
      "Simple counter that increments and decrements numbers. Demonstrates basic state management.",
    concept: "useState",
    conceptDescription:
      "useState Hook adds state to functional components and triggers re-renders.",
    component: Counter,
    category: "react",
  },
  {
    id: "todo",
    name: "Todo",
    icon: ListTodo,
    description:
      "Add, display, and manage a list of tasks. Basic todo list functionality with input handling.",
    concept: "useState",
    conceptDescription:
      "Multiple useState calls manage different pieces of state independently.",
    component: Todo,
    category: "react",
  },
  {
    id: "debounce-search",
    name: "Debounce Search",
    icon: Search,
    description:
      "Search input that triggers search only after user stops typing. Great for optimizing API calls or filtering.",
    concept: "useRef, setTimeout",
    conceptDescription:
      "Debounce delays function execution to avoid firing on every keystroke, managed with setTimeout and useRef.",
    component: DebounceSearch,
    category: "react",
  },
  {
    id: "fetch-users",
    name: "Fetch & Filter",
    icon: Globe,
    description:
      "Fetches a user list from an API and filters it in real-time based on search input. Demonstrates API calls and filtering logic.",
    concept: "useEffect, fetch, filter",
    conceptDescription:
      "useEffect is used for side-effects like data fetching; fetch retrieves data from an API; filter is used to display matching results.",
    component: FetchUsers,
    category: "react",
  },
  {
    id: "pagination",
    name: "Pagination",
    icon: FileSearch2,
    description:
      "Displays a list of items with page navigation. Uses slicing and indexing to control visible content.",
    concept: "useState, slice",
    conceptDescription:
      "State tracks page number and array.slice is used to limit what gets displayed per page.",
    component: Pagination,
    category: "react",
  },
  {
    id: "props",
    name: "Props",
    icon: Send,
    description: "Pass data and functions between parent and child components.",
    concept: "props",
    conceptDescription:
      "Props pass data and behavior from parent to child components. Shows component communication patterns.",
    component: Props,
    category: "react",
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    icon: Clock,
    description:
      "Implements a timer with start, pause, and reset buttons. useRef stores interval ID to control timer behavior.",
    concept: "useRef, setInterval",
    conceptDescription:
      "useRef persists the timer ID across renders without causing re-renders, suitable for intervals.",
    component: Stopwatch,
    category: "react",
  },
  {
    id: "use-reducer-counter",
    name: "Counter useReducer",
    icon: ChevronRight,
    description:
      "Counter built using useReducer instead of useState. Great for complex state transitions and centralized updates.",
    concept: "useReducer",
    conceptDescription:
      "useReducer helps manage complex state logic with a reducer function and dispatch mechanism.",
    component: CounterWithReducer,
    category: "react",
  },
];

// Algo
const algo = [
  {
    id: "anagram-checker",
    name: "Anagram Checker",
    icon: Shuffle,
    description:
      "Check if two words are anagrams (same letters, different order). Example: 'listen' and 'silent' are anagrams.",
    concept: "useState, string manipulation",
    conceptDescription:
      "String sorting and normalization to compare letter patterns.",
    component: AnagramChecker,
    category: "algo",
  },
  {
    id: "factorial",
    name: "Factorial Calculator",
    icon: Calculator,
    description:
      "Calculates the factorial of a number (e.g., 5! = 120). Shows how loops and mathematical logic work in React.",
    concept: "loop",
    conceptDescription:
      "A simple for loop multiplies numbers from 1 to n to compute factorial.",
    component: FactorialCalculator,
    category: "algo",
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    icon: BarChart2,
    description:
      "Generate Fibonacci sequence numbers. Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8...",
    concept: "useState, iteration",
    conceptDescription:
      "Loop constructs sequence by adding previous two numbers.",
    component: Fibonacci,
    category: "algo",
  },
  {
    id: "palindrome-checker",
    name: "Palindrome Checker",
    icon: Eye,
    description:
      "Check if text reads the same forwards and backwards. Words like 'racecar' and 'madam' are palindromes.",
    concept: "useState, string manipulation",
    conceptDescription: "String cleaning and comparison with reversed version.",
    component: PalindromeChecker,
    category: "algo",
  },
  {
    id: "prime-checker",
    name: "Prime Checker",
    icon: Sigma,
    description:
      "Check if a number is prime using a simple loop and conditionals. Perfect math-based utility to demonstrate logic.",
    concept: "Math, conditionals",
    conceptDescription:
      "Loops check divisibility; primes are numbers greater than 1 that are not divisible by other numbers.",
    component: PrimeChecker,
    category: "algo",
  },
];

// Arrays
const arrays = [
  {
    id: "array-operations",
    name: "Array Operations",
    icon: Layers,
    description:
      "Demonstrates common array operations: map, filter, reduce, flatten. Shows how to manipulate and transform arrays.",
    concept: "map, filter, reduce, flat",
    conceptDescription:
      "Array methods like map, filter, reduce, and flat allow powerful data transformation.",
    component: ArrayOperations,
    category: "arrays",
  },
  {
    id: "find-index",
    name: "Find Index",
    icon: FileSearch,
    description:
      "Find the position of a specific number in an array. Returns the index (position) where the number is located.",
    concept: "useState, array methods",
    conceptDescription: "indexOf method locates element position in arrays.",
    component: FindIndex,
    category: "arrays",
  },
  {
    id: "flatten-array",
    name: "Flatten Array",
    icon: ArrowRightLeft,
    description:
      "Convert nested arrays into a single flat array. Turns [1, [2, 3], [4, [5]]] into [1, 2, 3, 4, 5].",
    concept: "useState, recursion",
    conceptDescription: "Recursive function processes nested array structures.",
    component: FlattenArray,
    category: "arrays",
  },
  {
    id: "largest-number",
    name: "Largest Number",
    icon: Maximize2,
    description:
      "Find the biggest number in an array. Returns the maximum value from a list of numbers.",
    concept: "useState, Math.max",
    conceptDescription: "Math.max with spread operator finds maximum value.",
    component: LargestNumber,
    category: "arrays",
  },
  {
    id: "move-zeroes",
    name: "Move Zeroes",
    icon: ArrowDownWideNarrow,
    description:
      "Move all zeroes in the array to the end, keeping the order of non-zero elements. [0,1,0,3,12] ➝ [1,3,12,0,0]",
    concept: "useState, array manipulation",
    conceptDescription:
      "uses in-place swapping to move zeroes to the end while preserving order.",
    component: MoveZeroes,
    category: "arrays",
  },
  {
    id: "remove-duplicates",
    name: "Remove Duplicates",
    icon: Minus,
    description:
      "Remove duplicate numbers from an array. Keeps only the first occurrence of each number.",
    concept: "useState, object/hash",
    conceptDescription:
      "Hash map efficiently tracks and filters seen elements.",
    component: RemoveDuplicates,
    category: "arrays",
  },
];

// Strings
const strings = [
  {
    id: "count-chars",
    name: "Count Chars",
    icon: Repeat,
    description:
      "Count how many times each character appears in text. Shows frequency of letters, numbers, and symbols.",
    concept: "useState, object/hash",
    conceptDescription: "Object as hash map tracks character occurrences.",
    component: CountChars,
    category: "strings",
  },
  {
    id: "longest-word",
    name: "Longest Word",
    icon: Text,
    description:
      "Find the longest word in an array of strings. Returns the word with the maximum length.",
    concept: "useState, array iteration",
    conceptDescription:
      "Loop or reduce can be used to find the longest element in an array.",
    component: LongestWord,
    category: "strings",
  },
  {
    id: "reverse-string",
    name: "Reverse String",
    icon: RefreshCcw,
    description:
      "Reverse any text input backwards. Turns 'hello' into 'olleh'.",
    concept: "useState, string methods",
    conceptDescription:
      "without using split(), reverse(), and join() methods to transform strings.",
    component: ReverseString,
    category: "strings",
  },
  {
    id: "snake-case",
    name: "Snake Case Converter",
    icon: Target,
    description:
      "Converts regular text to snake_case format. Uses regex and string replace methods effectively.",
    concept: "regex, replace",
    conceptDescription:
      "Replace spaces or camelCase with underscores using regex.",
    component: SnakeCaseConverter,
    category: "strings",
  },
  {
    id: "sum-digits",
    name: "Sum of Digits",
    icon: BookOpen,
    description:
      "Takes a number and returns the sum of its digits. Uses string conversion and reduce function.",
    concept: "reduce",
    conceptDescription:
      "Convert number to string, split to array, convert back to digits, and sum using reduce.",
    component: SumDigits,
    category: "strings",
  },
  {
    id: "vowel-counter",
    name: "Vowel Counter",
    icon: ArrowUpRight,
    description:
      "Counts number of vowels in a string. Helps in understanding loops and string operations.",
    concept: "string, loop",
    conceptDescription:
      "Loop through string and count characters that are vowels (a, e, i, o, u).",
    component: VowelCounter,
    category: "strings",
  },
];

// Strings
const corejs = [
  {
    id: "closure-settimeout",
    name: "Closure with setTimeout",
    icon: Clock,
    description:
      "Demonstrates how closures and setTimeout work together to print numbers in sequence.",
    concept: "closure, setTimeout, async",
    conceptDescription:
      "Closures or block-scoped variables (let) allow each loop iteration to capture its own value, ensuring correct output with setTimeout.",
    component: ClosureSetTimeout,
    category: "corejs",
  },
];

// Compose the final list, keeping playground first, then sorted sections
const programs = [
  {
    id: "playground",
    name: "JS Playground",
    icon: Play,
    description:
      "Execute any JavaScript code in real-time. Perfect for testing snippets and experimenting.",
    concept: "JavaScript, JSX, React.js",
    component: JsPlayground,
    // Not categorized; always shown for all
  },
  ...react,
  ...algo,
  ...arrays,
  ...strings,
  ...corejs,
];

export default programs;
