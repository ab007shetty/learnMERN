const puzzles = [
  {
    id: 1,
    question: `if([]){
  console.log("YES");
} else {
  console.log("NO");
}`,
    answer: "YES",
    explanation: [
      "if ([ ]) checks truthiness - empty arrays and objects are truthy in JavaScript.",
      "Since [ ] is truthy, the condition evaluates to true and 'YES' is printed.",
      "This is different from [ ] == true which uses type coercion and returns false.",
    ],
  },
  {
    id: 2,
    question: `console.log([] == true);`,
    answer: `false`,
    explanation: [
      "[] == true → Due to type coercion, [] -> '' -> 0 . So, 0 == 1 gives false.",
      "Key point: Truthiness (if) ≠ Equality (==) in JavaScript due to type coercion.",
    ],
  },
  {
    id: 3,
    question: `var abc = 25;

if(function f() {}){
  abc = abc + typeof f;
}
console.log(abc);`,
    answer: "25undefined",
    explanation: [
      "Functions in JavaScript are objects, so they are always truthy. That's why if(function f(){}) runs.",
      "Here, function f(){} is a named function expression —> its name 'f' is only available inside the function body, not outside.",
      "Inside the if block, 'f' is not defined in this scope, so typeof f returns 'undefined'.",
      "25 + 'undefined' results in the string '25undefined' due to string concatenation.",
    ],
  },
  {
    id: 4,
    question: `const obj = {};
    console.log(obj.a?.b?.c?.d ?? "hello");`,
    answer: "hello",
    explanation: [
      "?. → Optional chaining: Safely accesses nested properties, stopping and returning undefined if a property is null or undefined.",
      "obj.a is undefined, so optional chaining stops immediately and returns undefined.",
      "?? → Nullish coalescing: Provides a fallback value only if the left-hand side is null or undefined.",
      "Since undefined ?? 'hello' returns 'hello', that's what gets printed.",
    ],
  },
  {
    id: 5,
    question: `
let a = "5" - 2;
console.log("hello" + 50);
console.log(typeof a, a);
console.log("3" + 4 - "1");
`,
    answer: `
hello50
number 3
33
`,
    explanation: [
      `"5" - 2 → string gets converted to number → 5 - 2 = 3 (number).`,
      `"hello" + 50 → + with a string does concatenation → "hello50".`,
      `"3" + 4 → "34" (string).`,
      `"34" - "1" → both converted to numbers → 34 - 1 = 33.`,
    ],
  },
  {
    id: 6,
    question: `
let arr = [1, 2];
let holey = [, 3, 4];
console.log(arr + holey);
`,
    answer: `
1,2,3,4
`,
    explanation: [
      `**Sparse (holey) array** → an array with missing elements (like [,3,4]).`,
      `When arrays are used with '+' → they are converted to strings using toString().`,
      `[1,2].toString() → "1,2".`,
      `[ ,3,4 ].toString() → ",3,4" (hole becomes a comma).`,
      `"1,2" + ",3,4" → "1,2,3,4".`,
      `So sparse array holes appear as commas when converted to strings.`,
    ],
  },
];

export default puzzles;
