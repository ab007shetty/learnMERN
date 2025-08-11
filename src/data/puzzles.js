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
];

export default puzzles;
