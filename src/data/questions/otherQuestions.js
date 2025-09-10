const otherQuestions = [
  {
    id: 1,
    question: "What are Core Web Vitals and why are they important?",
    answer: [
      "Core Web Vitals are Google's metrics for measuring user experience: LCP, FID, and CLS.",
      "They impact SEO rankings and user satisfaction.",
    ],
    example: [
      "// Measuring LCP",
      "new PerformanceObserver((list) => {",
      "  const entries = list.getEntries();",
      "  const lastEntry = entries[entries.length - 1];",
      "  console.log('LCP:', lastEntry.startTime);",
      "}).observe({ entryTypes: ['largest-contentful-paint'] });",
    ],
    keyterms: [
      "LCP = Largest Contentful Paint (loading performance)",
      "FID = First Input Delay (interactivity)",
      "CLS = Cumulative Layout Shift (visual stability)",
    ],
  },
  {
    id: 2,
    question: "What is CORS and how does it work?",
    answer: [
      "CORS (Cross-Origin Resource Sharing) is a browser mechanism that allows controlled access to resources from different origins.",
      "Servers send specific headers to allow or deny requests from other domains.",
    ],
    example: [
      "// Express CORS example",
      "const cors = require('cors');",
      "app.use(cors({ origin: 'https://example.com' }));",
    ],
    keyterms: [
      "CORS = cross-origin access control",
      "Preflight request = browser checks permissions using OPTIONS method",
      "Origin = domain making the request",
    ],
  },
  {
    id: 3,
    question: "What is JWT Authentication and how does it work in MERN?",
    answer: [
      "JWT (JSON Web Token) is used for stateless authentication in full-stack apps.",
      "Server issues a token after login, client stores it and sends in headers for subsequent requests.",
      "The server verifies the token without storing session data.",
    ],
    example: [
      "// Node.js backend",
      "const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });",
      " ",
      "// React frontend",
      "axios.get('/profile', { headers: { Authorization: `Bearer ${token}` } });",
    ],
    keyterms: [
      "JWT = JSON Web Token",
      "Stateless = server doesn’t store session",
      "Bearer token = authentication method using Authorization header",
    ],
  },
  {
    id: 4,
    question: "What is REST vs GraphQL?",
    answer: [
      "REST is an architectural style with multiple endpoints per resource and fixed response structures.",
      "GraphQL uses a single endpoint and allows clients to specify exactly what data they need.",
      "GraphQL reduces over-fetching and under-fetching issues common in REST.",
    ],
    example: [
      "// REST",
      "GET /users → returns full user list",
      " ",
      "// GraphQL",
      "{ users { name email } } → returns only requested fields",
    ],
    keyterms: [
      "REST = multiple endpoints, standard HTTP verbs",
      "GraphQL = single endpoint, query-based fetching",
      "Over-fetching = unnecessary data sent",
    ],
  },
  {
    id: 5,
    question:
      "What is SSR (Server-Side Rendering) vs CSR (Client-Side Rendering)?",
    answer: [
      "SSR renders HTML on the server and sends it to the client, improving SEO and initial load time.",
      "CSR renders HTML in the browser using JavaScript, often after fetching JSON data.",
      "Some frameworks like Next.js support hybrid approaches (ISR, SSG).",
    ],
    example: [
      "// SSR (Next.js page)",
      "export async function getServerSideProps() {",
      "  const data = await fetchData();",
      "  return { props: { data } };",
      "}",
      " ",
      "// CSR (React page)",
      "useEffect(() => { fetchData().then(setData); }, []);",
    ],
    keyterms: [
      "SSR = server generates HTML",
      "CSR = browser generates HTML",
      "SEO = search engine optimization",
    ],
  },
  {
    id: 6,
    question: "What is event delegation in JavaScript?",
    answer: [
      "Event delegation is a pattern where a single parent element handles events for multiple child elements.",
      "It improves performance by reducing the number of event listeners.",
    ],
    example: [
      "document.querySelector('#parent').addEventListener('click', function(e) {",
      "  if(e.target && e.target.matches('button.child')) {",
      "    console.log('Child button clicked');",
      "  }",
      "});",
    ],
    keyterms: [
      "Event delegation = handle multiple events via parent",
      "Event bubbling = event propagates from child to parent",
    ],
  },
  {
    id: 7,
    question: "What is lazy loading and why is it used?",
    answer: [
      "Lazy loading is the technique of loading resources only when they are needed.",
      "Reduces initial page load, improves performance, and saves bandwidth.",
    ],
    example: [
      "// Lazy loading image",
      "<img src='placeholder.jpg' data-src='real-image.jpg' class='lazy' />",
      " ",
      "// JavaScript",
      "const img = document.querySelector('.lazy');",
      "img.src = img.dataset.src;",
    ],
    keyterms: [
      "Lazy loading = load on demand",
      "Performance optimization = faster page load",
    ],
  },
  {
    id: 8,
    question: "What are WebSockets and how are they different from HTTP?",
    answer: [
      "WebSockets provide full-duplex communication between client and server over a single TCP connection.",
      "Unlike HTTP (request-response), WebSockets allow real-time bidirectional data exchange.",
    ],
    example: [
      "// Node.js server with ws",
      "const WebSocket = require('ws');",
      "const wss = new WebSocket.Server({ port: 8080 });",
      " ",
      "wss.on('connection', ws => {",
      "  ws.on('message', msg => console.log(msg));",
      "  ws.send('Hello Client');",
      "});",
    ],
    keyterms: [
      "WebSocket = real-time bidirectional communication",
      "HTTP = stateless request-response",
      "Full-duplex = both sides can send simultaneously",
    ],
  },
  {
    id: 9,
    question: "What is serverless architecture and when to use it?",
    answer: [
      "Serverless allows running backend code without managing servers; functions run on demand (FaaS).",
      "Used for APIs, microservices, event-driven tasks, and scaling automatically with load.",
    ],
    example: [
      "// AWS Lambda example",
      "exports.handler = async (event) => {",
      "  return { statusCode: 200, body: 'Hello from Lambda' };",
      "};",
    ],
    keyterms: [
      "Serverless = run code without provisioning servers",
      "FaaS = Function as a Service",
      "Event-driven = functions triggered by events",
    ],
  },
  {
    id: 10,
    question: "What is IndexedDB and why is it used?",
    answer: [
      "IndexedDB is a low-level NoSQL database in the browser for storing large amounts of structured data.",
      "Useful for offline-first applications and caching large datasets locally.",
    ],
    example: [
      "const request = indexedDB.open('myDB', 1);",
      "request.onsuccess = event => { const db = event.target.result; };",
      " ",
      "request.onupgradeneeded = event => {",
      "  const db = event.target.result;",
      "  db.createObjectStore('users', { keyPath: 'id' });",
      "};",
    ],
    keyterms: [
      "IndexedDB = browser-side database",
      "Offline-first = app works without network",
      "Object store = table equivalent in IndexedDB",
    ],
  },
];

export default otherQuestions;
