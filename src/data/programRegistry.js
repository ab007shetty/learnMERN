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
  "throttle-search": () => import("../components/programs/ThrottleSearch"),
  "async-await": () => import("../components/programs/AsyncAwait"),
  autocomplete: () => import("../components/programs/Autocomplete"),
  "infinite-scroll": () => import("../components/programs/InfiniteScroll"),
  "nested-comments": () => import("../components/programs/NestedComments"),
  "toast-component": () => import("../components/programs/Toast"),

  // Algo Programs
  "anagram-checker": () => import("../components/programs/AnagramChecker"),
  factorial: () => import("../components/programs/Factorial"),
  fibonacci: () => import("../components/programs/Fibonacci"),
  "palindrome-checker": () =>
    import("../components/programs/PalindromeChecker"),
  "prime-checker": () => import("../components/programs/PrimeChecker"),

  // Array Programs
  "array-operations": () => import("../components/programs/ArrayOperations"),
  "set-array-methods": () => import("../components/programs/SetArrayMethods"),
  "find-index": () => import("../components/programs/FindIndex"),
  "flatten-array": () => import("../components/programs/FlattenArray"),
  "largest-number": () => import("../components/programs/LargestNumber"),
  "remove-duplicates": () => import("../components/programs/RemoveDuplicates"),
  "count-duplicates": () => import("../components/programs/CountDuplicates"),

  // String Programs
  "count-chars": () => import("../components/programs/CountChars"),
  "longest-word": () => import("../components/programs/LongestWord"),
  "reverse-string": () => import("../components/programs/ReverseString"),
  "snake-case": () => import("../components/programs/SnakeCaseConverter"),
  "vowel-counter": () => import("../components/programs/VowelCounter"),

  // Core JS Programs
  "two-sum": () => import("../components/programs/TwoSum"),
  "pair-sum": () => import("../components/programs/PairSum"),
  "second-largest": () => import("../components/programs/SecondLargest"),
  "move-zeroes": () => import("../components/programs/MoveZeroes"),
  "sum-digits": () => import("../components/programs/SumDigits"),
  "sorted-check": () => import("../components/programs/SortedCheck"),
  "reverse-array": () => import("../components/programs/ReverseArray"),
  fizzbuzz: () => import("../components/programs/FizzBuzz"),
  "sliding-window": () => import("../components/programs/SlidingWindow"),
  "peaks-valleys": () => import("../components/programs/PeaksValleys"),
  "find-missing-number": () =>
    import("../components/programs/FindMissingNumber"),
  "longest-common-prefix": () =>
    import("../components/programs/LongestCommonPrefix"),
  "valid-parentheses": () => import("../components/programs/ValidParentheses"),
  "closure-settimeout": () =>
    import("../components/programs/ClosureSetTimeout"),
  "merge-sorted-arrays": () =>
    import("../components/programs/MergeSortedArrays"),
  "max-subarray": () => import("../components/programs/MaxSubarray"),
};
