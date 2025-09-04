const nodeJsQuestions = [
  {
    id: 1,
    question:
      "What is the difference between dependencies and devDependencies in Node.js?",
    answer: [
      "dependencies are packages required for the application to run in production.",
      "devDependencies are packages only needed during development (e.g., testing, building, linting).",
    ],
    example: [
      "// Installing a normal dependency",
      "npm install express",
      "",
      "// Installing a dev dependency",
      "npm install nodemon --save-dev",
    ],
    keyterms: [
      "dependencies = required in production (e.g., express, mongoose)",
      "devDependencies = used only in development (e.g., nodemon, jest)",
    ],
  },
  {
    id: 2,
    question: "What is JWT and what are its types?",
    answer: [
      "JWT (JSON Web Token) is a compact, URL-safe way to transmit information securely between parties as a JSON object.",
      "It has three parts: Header, Payload, and Signature. Types are usually based on usage — Access Tokens (short-lived) and Refresh Tokens (long-lived).",
      "It is commonly used for authentication: server issues a token after login, and client sends it with each request for verification.",
    ],
    example: [
      "// Creating JWT",
      "const token = jwt.sign({ userId: 1 }, 'secret', { expiresIn: '1h' });",
      "",
      "// Verifying JWT",
      "const decoded = jwt.verify(token, 'secret');",
    ],
    keyterms: [
      "JWT = JSON Web Token (Header + Payload + Signature)",
      "Access Token = short-lived token for API access",
      "Refresh Token = long-lived token to get new access tokens",
    ],
  },
  {
    id: 3,
    question: "What is the Event Loop in Node.js?",
    answer: [
      "The Event Loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.",
      "It continuously checks the call stack and processes callbacks from the event queue when the stack is empty.",
    ],
    example: [
      "console.log('Start');",
      "setTimeout(() => console.log('Timeout'), 0);",
      "setImmediate(() => console.log('Immediate'));",
      "process.nextTick(() => console.log('Next Tick'));",
      "console.log('End');",
      "// Output: Start, End, Next Tick, Immediate, Timeout",
    ],
    keyterms: [
      "Event Loop = manages asynchronous operations",
      "Call Stack = tracks function execution",
      "Event Queue = holds callbacks to be executed",
    ],
  },
];
export default nodeJsQuestions;
