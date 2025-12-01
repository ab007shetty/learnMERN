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
  {
    id: 15,
    question: `
console.log("A");

new Promise(resolve => {
  console.log("B");
  resolve("C");
}).then(msg => console.log(msg));

console.log("D");
`,
    answer: `
A
B
D
C
`,
    explanation: [
      "B runs immediately inside executor (sync).",
      ".then() runs later as microtask.",
      "D runs in main thread after B.",
    ],
  },
  {
    id: 16,
    question: `
console.log(1);

Promise.resolve(2).then(console.log);

new Promise(resolve => resolve(3)).then(console.log);

(async () => {
  console.log(await Promise.resolve(5));
})();

console.log(4);
`,
    answer: `
1
4
2
3
5
`,
    explanation: [
      "1 and 4 run synchronously (main thread).",
      "Promise.then() callbacks and async await continuation are microtasks.",
      "Microtasks run after main thread ends, in order they were queued: 2 → 3 → 5.",
    ],
  },
  {
    id: 17,
    question: `
let arr = [1,2,3];

console.log(arr, 4);
console.log([...arr, 4]);
`,
    answer: `
[1,2,3] 4
[1,2,3,4]
`,
    explanation: [
      "Comma in console.log passes separate arguments, so 4 isn’t merged.",
      "Spread operator unpacks elements, creating a new array with 4 appended.",
      "Hence, spread forms a combined array while log comma just prints separately.",
    ],
  },
  {
    id: 18,
    question: `
let arr = [1, 2, 3, 4];
let [a, ...rest] = arr;

console.log(a);
console.log(rest);
`,
    answer: `
1
[2, 3, 4]
`,
    explanation: [
      "Array destructuring unpacks values into variables.",
      "Rest (...) gathers remaining elements into one array.",
      "Spread does the opposite — expands elements when creating arrays or calling functions.",
    ],
  },
  {
    id: 19,
    question: `
const arr = [10, , 30, 40];
const [a = 1, b = 2, c = 3, ...d] = arr;
console.log(a, b, c, d);
`,
    answer: `
10 2 30 [40]
`,
    explanation: [
      "The array has a missing second element, which is treated as undefined.",
      "During destructuring, 'a' gets 10 from arr[0].",
      "'b' uses its default value 2 because arr[1] is missing (undefined).",
      "'c' gets 30 from arr[2].",
      "The rest operator (...) gathers remaining elements into 'd' → [40].",
    ],
  },
  {
    id: 20,
    question: `
let arr = [1, 2, 3, 4];

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(arr));
console.log(sum(...arr));
`,
    answer: `
NaN
10
`,
    explanation: [
      "In sum(arr), nums = [[1,2,3,4]] — a nested array.",
      "reduce tries 0 + [1,2,3,4], giving NaN.",
      "In sum(...arr), spread passes values separately, so reduce works as 1+2+3+4 = 10.",
    ],
  },
  {
    id: 21,
    question: `
const data = {
  user: {
    profile: {
      name: "Riya",
      age: 22
    }
  }
};

console.log(data.user?.profile?.name);
console.log(data.account?.details?.id);
console.log(data.user.profile?.email?.toUpperCase());
`,
    answer: `
Riya
undefined
undefined
`,
    explanation: [
      "✅ data.user?.profile?.name → 'Riya' (all properties exist).",
      "❌ data.account?.details?.id → undefined (account doesn't exist, so no error).",
      "❌ data.user.profile?.email?.toUpperCase() → undefined (email is undefined, so optional chaining prevents TypeError).",
    ],
  },
  {
    id: 22,
    question: `
let user = {
  first: "Ani",
  last: "Shetty",

  wrongFull: () => this.first + " " + this.last,

  fixedArrow: () => user.first + " " + user.last,

  correctFull: function() {
    return this.first + " " + this.last;
  }
};

console.log(user.wrongFull);
console.log(user.fixedArrow());
console.log(user.correctFull());
`,
    answer: `
undefined undefined
Ani Shetty
Ani Shetty
`,
    explanation: [
      "In `wrongFull`, arrow functions don’t have their own `this`, so it points to the global scope — `undefined`.",
      "In `fixedArrow`, the object name `user` is used directly, so it works but isn’t reusable (depends on object name).",
      "In `correctFull`, a normal function binds `this` to the object when called as a method — correct behavior.",
      "Best practice → always use normal functions for object methods needing 'this'.",
    ],
  },
  {
    id: 23,
    question: `
Promise.resolve("Start")
  .then(val => { 
    console.log("Then 1:", val); 
    throw "Error A"; 
  })
  .catch(err => { 
    console.log("Catch 1:", err); 
    return "Recovered"; 
  })
  .then(val => { 
    console.log("Then 2:", val); 
    throw "Error B"; 
  })
  .catch(err => console.log("Catch 2:", err));
`,
    answer: `
Then 1: Start
Catch 1: Error A
Then 2: Recovered
Catch 2: Error B
`,
    explanation: [
      "Promise starts resolved → Then 1 runs and throws 'Error A'.",
      "Catch 1 handles 'Error A' and returns 'Recovered' → chain becomes resolved again.",
      "Then 2 runs with 'Recovered' and throws 'Error B'.",
      "Catch 2 handles 'Error B'.",
      "✅ Demonstrates how throwing and returning in catch affects the chain.",
    ],
  },
  {
    id: 24,
    question: `const promise = new Promise(resolve => 
      setTimeout(() => resolve("promise resolved"), 1000));

async function demo() {
  console.log("Before await");
  const result = await promise;
  console.log(result);
  console.log("after await");
}

demo();
console.log("outside async fn");`,
    answer: `
Before await
outside async fn
promise resolved
after await`,
    explanation: [
      "The Promise starts immediately when it's created, but await pauses function execution until the promise settles.",
      "The main thread continues, so 'outside async fn' prints next.",
      "After 1s, the Promise resolves, and 'result' is printed, followed by 'after await'.",
      "This demonstrates how async/await pauses the function without blocking the main thread.",
    ],
  },
  {
    id: 25,
    question: `
const a = 10;
const b = 20;

const str = "a + b * 2";

const result = eval(str);

console.log(result);
`,
    answer: "50",
    explanation: [
      "The variable str contains the string 'a + b * 2'.",
      "eval(str) executes that string as real JavaScript code.",
      "So it becomes: a + b * 2 → 10 + 20 * 2.",
      "Operator precedence applies: 20 * 2 = 40.",
      "Then 10 + 40 = 50.",
      "Thus console.log(result) prints 50.",
    ],
  },
  {
    id: 26,
    question: `
const x = 5;
const y = 3;

const expr = "x + y + 'x'";

const result = eval(expr);

console.log(result);
`,
    answer: "8x",
    explanation: [
      "The string 'x + y + \\'x\\'' is executed by eval.",
      "So it becomes real code: x + y + 'x'.",
      "x = 5 and y = 3 → 5 + 3 = 8.",
      "Then 8 + 'x' causes string concatenation.",
      "Final result = '8x'.",
    ],
  },
  {
    id: 27,
    question: `
console.log(typeof null);
`,
    answer: "object",
    explanation: [
      "In JavaScript, typeof null returns 'object' due to a historical bug.",
      "Early JS stored type info in low-level binary tags.",
      "Objects were tagged as 000 (binary).",
      "null mistakenly got the same tag, so typeof treated null as an object.",
      "The bug could not be fixed later without breaking old websites.",
      "Hence typeof null still returns 'object'.",
    ],
  },
];

export default puzzles;
