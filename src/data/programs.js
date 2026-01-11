// src/data/programs.js (Updated - removed component imports and properties)
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
  Braces,
  Code,
  Type,
  Images,
  Timer,
  Terminal,
  MessageSquare,
  ArrowDown,
  Bell,
  Check,
} from "lucide-react";

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
    category: "react",
  },
  {
    id: "debounce-search",
    name: "Debounce Search",
    icon: Search,
    description:
      "Search input that triggers search only after user stops typing. Great for optimizing API calls or filtering.",
    concept: "setTimeout",
    conceptDescription:
      "Debounce delays function execution to avoid firing on every keystroke, managed with setTimeout and useRef.",
    category: "react",
  },
  {
    id: "throttle-search",
    name: "Throttle Search",
    icon: Timer,
    description:
      "Search input that updates results at fixed intervals, even if the user keeps typing continuously.",
    concept: "useRef",
    conceptDescription:
      "Throttle ensures a function runs at most once within a given time frame, tracked using timestamps stored in useRef.",
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
    category: "react",
  },
  {
    id: "async-await",
    name: "Async/Await",
    icon: Terminal,
    description:
      "Fetches a GitHub user's profile using async/await and displays key details. Demonstrates handling asynchronous code in React.",
    concept: "useEffect, async/await, optional chaining",
    conceptDescription:
      "useEffect handles side-effects; async/await simplifies promise handling; optional chaining prevents errors during rendering when data hasn't arrived yet.",
    category: "react",
  },
  {
    id: "carousel",
    name: "Image Carousel",
    icon: Images,
    description:
      "Simple image carousel that automatically slides every 5 seconds with next and previous navigation buttons.",
    concept: "useState, useEffect",
    conceptDescription:
      "useState tracks the current image index, while useEffect handles automatic sliding using setInterval with cleanup.",
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
    category: "react",
  },
  {
    id: "toast-component",
    name: "Toast Notification",
    icon: Bell,
    description:
      "Displays a temporary popup message that auto-hides after a delay.",
    concept: "useState, useEffect, animations",
    conceptDescription:
      "State controls toast visibility; useEffect handles auto-dismiss with a timer.",
    category: "react",
  },
  {
    id: "autocomplete",
    name: "Autocomplete Search",
    icon: Search,
    description:
      "Shows suggestions while typing and filters data in real time.",
    concept: "useState, filtering",
    conceptDescription:
      "Tracks input and filters suggestion list based on typed characters.",
    category: "react",
  },
  {
    id: "infinite-scroll",
    name: "Infinite Scroll",
    icon: ArrowDown,
    description:
      "Loads more data automatically when the user reaches the bottom of the page.",
    concept: "useEffect, scroll listeners, API calls",
    conceptDescription:
      "Scroll event detects bottom reach and triggers new data fetching.",
    category: "react",
  },
  {
    id: "nested-comments",
    name: "Nested Comments",
    icon: MessageSquare,
    description:
      "Renders comments with infinite replies, each reply holding its own nested structure.",
    concept: "recursion",
    conceptDescription:
      "Recursive component renders comments inside comments, allowing infinite nesting.",
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
    category: "arrays",
  },
  {
    id: "set-array-methods",
    name: "Set & Array Methods",
    icon: Code,
    description:
      "Demonstrates important Set and Array operations in JavaScript like unique, union, intersection, difference, membership, and string→array conversion.",
    concept: "Set, Array methods, iteration, spread operator",
    conceptDescription:
      "Uses Set to store unique values and combine with array methods like filter, map, reduce, and spread operator [...] to perform operations such as removing duplicates, computing union, intersection, difference, and checking membership.",
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
    category: "arrays",
  },
  {
    id: "count-duplicates",
    name: "Count Duplicate Values",
    icon: Hash,
    description:
      "Counts how many times each value appears in an array and returns an object with frequencies.",
    concept: "objects, array loops",
    conceptDescription:
      "Object is used as a frequency map to count occurrences efficiently.",
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
    category: "strings",
  },
];

// Logic
const logic = [
  {
    id: "two-sum",
    name: "Two Sum",
    icon: Target,
    description:
      "Finds indices of two numbers in an array that add up to a target value.",
    concept: "hashmap, array, logic",
    conceptDescription:
      "Stores visited numbers in an object and checks if the complement (target - current) exists.",
    category: "logic",
  },
  {
    id: "pair-sum",
    name: "Pair Sum",
    icon: Code,
    description:
      "Checks whether any two numbers in the array add up to a target value.",
    concept: "hashing, set",
    conceptDescription:
      "Traverses the array once and stores visited elements in a Set to check if the required complement already exists.",
    category: "logic",
  },
  {
    id: "second-largest",
    name: "Find Second Largest Number",
    icon: Code,
    description: "Finds the second largest unique number in an array.",
    concept: "sorting, logic",
    conceptDescription:
      "Removes duplicates using Set and sorts descending to find the second highest element.",
    category: "logic",
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
    category: "logic",
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
    category: "logic",
  },
  {
    id: "sorted-check",
    name: "Check Sorted Array",
    icon: Check,
    description: "Checks if an array is sorted in ascending order.",
    concept: "one pass",
    conceptDescription:
      "Compares adjacent elements once to verify sorted order.",
    category: "logic",
  },
  {
    id: "reverse-array",
    name: "Reverse Array",
    icon: RefreshCcw,
    description: "Reverses an array using two pointers.",
    concept: "two pointers",
    conceptDescription:
      "Uses left and right pointers to swap elements until reversed.",
    category: "logic",
  },
  {
    id: "fizzbuzz",
    name: "FizzBuzz",
    icon: Hash,
    description:
      "Prints numbers 1 to N with Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for both.",
    concept: "loop, conditionals",
    conceptDescription:
      "Uses modulus (%) operator and conditional checks to replace numbers with Fizz, Buzz, or FizzBuzz.",
    category: "logic",
  },
  {
    id: "sliding-window",
    name: "Sliding Window",
    icon: Shuffle,
    description: "Finds maximum sum of a subarray of size K.",
    concept: "sliding window",
    conceptDescription:
      "Maintains a moving window and updates sum efficiently in one pass.",
    category: "logic",
  },
  {
    id: "peaks-valleys",
    name: "Peaks & Valleys",
    icon: ArrowUpRight,
    description: "Finds elements greater or smaller than both neighbors.",
    concept: "neighbor comparison",
    conceptDescription:
      "Compares each element with adjacent elements in one traversal.",
    category: "logic",
  },
  {
    id: "find-missing-number",
    name: "Find Missing Number",
    icon: Braces,
    description:
      "Finds the missing number in a sequence of consecutive integers.",
    concept: "math, array, reduce",
    conceptDescription:
      "Uses sum of first N natural numbers formula and compares with actual array sum to find the missing value.",
    category: "logic",
  },
  {
    id: "longest-common-prefix",
    name: "Longest Common Prefix",
    icon: Type,
    description:
      "Finds the longest common starting substring among an array of strings.",
    concept: "string, prefix, loops",
    conceptDescription:
      "Iteratively trims prefix until all strings start with it, returning the shared beginning characters.",
    category: "logic",
  },
  {
    id: "valid-parentheses",
    name: "Valid Parentheses",
    icon: Layers,
    description:
      "Checks if parentheses in a string are balanced and properly nested.",
    concept: "stack, string, logic",
    conceptDescription:
      "Uses a stack data structure to push open brackets and pop when matching close brackets appear.",
    category: "logic",
  },
  {
    id: "closure-settimeout",
    name: "Closure with setTimeout",
    icon: Clock,
    description:
      "Demonstrates how closures and setTimeout work together to print numbers in sequence.",
    concept: "closure, setTimeout, async",
    conceptDescription:
      "Closures or block-scoped variables (let) allow each loop iteration to capture its own value, ensuring correct output with setTimeout.",
    category: "logic",
  },
  {
    id: "merge-sorted-arrays",
    name: "Merge Two Sorted Arrays",
    icon: Shuffle,
    description:
      "Merges two sorted arrays into one sorted array without using sort().",
    concept: "array, two pointers",
    conceptDescription:
      "Uses pointer-based traversal for both arrays to merge efficiently in O(n+m) time.",
    category: "logic",
  },
  {
    id: "max-subarray",
    name: "Max Subarray (Kadane)",
    icon: BarChart2,
    description: "Finds the maximum sum of a contiguous subarray.",
    concept: "kadane, dynamic programming",
    conceptDescription:
      "Kadane’s algorithm keeps track of current and maximum sum in one pass.",
    category: "logic",
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
    // Not categorized; always shown for all
  },
  ...react,
  ...algo,
  ...arrays,
  ...strings,
  ...logic,
];

export default programs;
