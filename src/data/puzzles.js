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
  {
    id: 7,
    question: `
const fs = require("fs");

console.log("A: main start");

fs.readFile(__filename, () => {
  console.log("D: poll (I/O callback)");

  setTimeout(() => console.log("F: timer inside I/O"), 0);
  setImmediate(() => console.log("E: immediate inside I/O"));
});

setTimeout(() => console.log("C: timer outside I/O"), 0);

Promise.resolve().then(() => console.log("B: promise microtask"));
`,
    answer: `
A: main start  
B: promise microtask  
C: timer outside I/O  
D: poll (I/O callback)  
E: immediate inside I/O  
F: timer inside I/O
`,
    explanation: [
      `🌀 **Event loop (timer = 0)** order:`,
      `1️⃣ Main thread (sync code)`,
      `2️⃣ Microtasks (Promises, nextTick)`,
      `3️⃣ Timers (setTimeout, setInterval)`,
      `4️⃣ Poll (I/O callbacks like fs.readFile)`,
      `5️⃣ Check (setImmediate)`,
      `6️⃣ Close callbacks`,
      `⚡ **Special case:** Inside I/O callbacks → event loop goes from Poll → Check phase directly.`,
      `✅ So **setImmediate()** runs before **setTimeout(..., 0)**.`,
      `👉 Outside I/O: timeout first → then immediate.`,
    ],
  },
  {
    id: 8,
    question: `
const arr = [1,2,3];
arr.push(4);
arr.key = "string";
arr.length = 10;
console.log( arr, arr.length, typeof(arr));
`,
    answer: `
[1,2,3,4,<6 empty items>] 10 "object"
`,
    explanation: [
      "push(4) → adds 4 at end.",
      "arr.key = 'string' → adds a property (not an element).",
      "length = 10 → pads with empty slots.",
      "Arrays are objects → typeof arr = 'object'.",
    ],
  },

  {
    id: 9,
    question: `
let arr = [1,2];
arr[5] = 10;
console.log(arr.length, arr);
`,
    answer: `
6 [1,2,<3 empty items>,10]
`,
    explanation: [
      "Assigning to index 5 creates holes.",
      "Length auto-updates to highest index + 1.",
      "Empty slots remain 'undefined' (not stored).",
    ],
  },

  {
    id: 10,
    question: `
let str = "abc";
str[0] = "z";
console.log(str);
`,
    answer: `
"abc"
`,
    explanation: [
      "Strings are immutable in JS.",
      "Index assignment doesn’t change the original string.",
    ],
  },

  {
    id: 11,
    question: `
let arr = [10,20];
delete arr[0];
console.log(arr.length, arr[0]);
`,
    answer: `
2 undefined
`,
    explanation: [
      "delete removes value but not slot.",
      "Length stays same.",
      "arr[0] becomes a hole (undefined).",
    ],
  },

  {
    id: 12,
    question: `
let arr = [1,2,3];
arr.length = 1;
console.log(arr);
`,
    answer: `
[1]
`,
    explanation: [
      "Setting smaller length truncates array.",
      "Removes elements beyond new length.",
    ],
  },
  {
    id: 13,
    question: `
const arr = [10, 20, 30];
arr.name = "myArray";
arr.processed = true;

console.log(arr.length);
console.log(arr.name);
console.log(arr.processed);
for (let i in arr) {
  console.log(i);
}
`,
    answer: `
3
myArray
true
0
1
2
name
processed
`,
    explanation: [
      "arr.length → 3, custom properties don't affect length.",
      "arr.name → 'myArray', arr.processed → true, both are normal object properties.",
      "for...in iterates over all enumerable keys, including custom properties.",
      "Numeric indices (0,1,2) appear first, then custom keys ('name', 'processed').",
      "Array methods like forEach/map ignore custom properties, only iterate numeric indices.",
      "Shows how arrays can hold metadata alongside elements.",
    ],
  },
  {
    id: 14,
    question: `
const arr = [1, null, , undefined, 5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.hasOwnProperty(2));
console.log(arr.hasOwnProperty(3));
`,
    answer: `
1
null
undefined
undefined
5
false
true
`,
    explanation: [
      "arr[0] → 1, normal value.",
      "arr[1] → null, explicitly set.",
      "arr[2] → undefined, slot empty (default undefined for missing element).",
      "arr[3] → undefined, explicitly assigned undefined.",
      "arr[4] → 5, normal value.",
      "arr.hasOwnProperty(2) → false, because slot 2 is empty.",
      "arr.hasOwnProperty(3) → true, because slot 3 has explicit undefined.",
      "Key point: default empty slots return undefined when accessed, but no property exists.",
      "Explicit undefined is different: property exists.",
    ],
  },
];

export default puzzles;
