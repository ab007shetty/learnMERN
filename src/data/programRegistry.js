export const programRegistry = {
  // Special Programs
  playground: () => import("../components/programs/JsPlayground"),

  // React Programs
  counter: () => import("../components/programs/Counter"),
  todo: () => import("../components/programs/Todo"),
  "debounce-search": () => import("../components/programs/DebounceSearch"),
  "fetch-users": () => import("../components/programs/FetchUsers"),
  pagination: () => import("../components/programs/Pagination"),
  props: () => import("../components/programs/Props"),
  stopwatch: () => import("../components/programs/Stopwatch"),
  "use-reducer-counter": () =>
    import("../components/programs/CounterWithReducer"),
  carousel: () => import("../components/programs/Carousel"),

  // Algo Programs
  "anagram-checker": () => import("../components/programs/AnagramChecker"),
  factorial: () => import("../components/programs/Factorial"),
  fibonacci: () => import("../components/programs/Fibonacci"),
  "palindrome-checker": () =>
    import("../components/programs/PalindromeChecker"),
  "prime-checker": () => import("../components/programs/PrimeChecker"),

  // Array Programs
  "array-operations": () => import("../components/programs/ArrayOperations"),
  "find-index": () => import("../components/programs/FindIndex"),
  "flatten-array": () => import("../components/programs/FlattenArray"),
  "largest-number": () => import("../components/programs/LargestNumber"),
  "move-zeroes": () => import("../components/programs/MoveZeroes"),
  "remove-duplicates": () => import("../components/programs/RemoveDuplicates"),

  // String Programs
  "count-chars": () => import("../components/programs/CountChars"),
  "longest-word": () => import("../components/programs/LongestWord"),
  "reverse-string": () => import("../components/programs/ReverseString"),
  "snake-case": () => import("../components/programs/SnakeCaseConverter"),
  "sum-digits": () => import("../components/programs/SumDigits"),
  "vowel-counter": () => import("../components/programs/VowelCounter"),

  // Core JS Programs
  "two-sum": () => import("../components/programs/TwoSum"),
  "longest-common-prefix": () =>
    import("../components/programs/LongestCommonPrefix"),
  "closure-settimeout": () =>
    import("../components/programs/ClosureSetTimeout"),
  fizzbuzz: () => import("../components/programs/FizzBuzz"),
  "find-missing-number": () =>
    import("../components/programs/FindMissingNumber"),
  "merge-sorted-arrays": () =>
    import("../components/programs/MergeSortedArrays"),
  "valid-parentheses": () => import("../components/programs/ValidParentheses"),
  "second-largest": () => import("../components/programs/SecondLargest"),
};
