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
    id: 7,
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
    id: 8,
    question: "How will you handle security in APIs?",
    answer: [
      "Use authentication mechanisms like JWT, OAuth, or API keys to ensure only authorized users can access the API.",
      "Use HTTPS to encrypt data in transit.",
      "Validate and sanitize all inputs to prevent injection attacks.",
      "Implement rate limiting and throttling to prevent abuse.",
    ],
    example: [
      "// Express.js JWT auth example",
      "const jwt = require('jsonwebtoken');",
      "app.get('/data', (req, res) => {",
      "  const token = req.headers['authorization'];",
      "  jwt.verify(token, 'secret', (err, user) => {",
      "    if(err) return res.status(403).send('Forbidden');",
      "    res.send('Secure Data');",
      "  });",
      "});",
    ],
    keyterms: [
      "Authentication = verifying user identity",
      "Authorization = controlling access",
      "HTTPS = secure data transmission",
      "Input validation = prevents attacks like SQL injection",
    ],
  },
  {
    id: 9,
    question: "How to handle errors in REST APIs?",
    answer: [
      "Use proper HTTP status codes: 2xx for success, 4xx for client errors, 5xx for server errors.",
      "Return clear error messages in a consistent format (JSON).",
      "Catch exceptions in server code to prevent crashes.",
      "Log errors for debugging and monitoring.",
    ],
    example: [
      "app.get('/user/:id', (req, res) => {",
      "  const user = users.find(u => u.id == req.params.id);",
      "  if(!user) return res.status(404).json({ error: 'User not found' });",
      "  res.json(user);",
      "});",
    ],
    keyterms: [
      "HTTP status codes = standard response codes for API",
      "Error logging = recording errors for debugging",
      "Exception handling = preventing server crashes",
    ],
  },
  {
    id: 10,
    question: "What is versioning in APIs and why is it important?",
    answer: [
      "API versioning allows you to introduce changes without breaking existing clients.",
      "It enables backward compatibility.",
      "Common approaches: URL versioning (/v1/resource), query parameters (?version=1), or headers (Accept-Version).",
    ],
    example: [
      "// URL versioning example",
      "GET /api/v1/users",
      "GET /api/v2/users",
    ],
    keyterms: [
      "Versioning = managing changes in API over time",
      "Backward compatibility = old clients continue to work",
      "Deprecation = phasing out old versions",
    ],
  },
  {
    id: 11,
    question: "How will you monitor and debug API latency in your application?",
    answer: [
      "Use monitoring tools like New Relic, Datadog, or Prometheus to track response times.",
      "Log request timestamps to measure latency.",
      "Analyze slow endpoints and optimize queries or code.",
      "Implement distributed tracing for complex systems to find bottlenecks.",
    ],
    example: [
      "// Simple Express middleware for latency logging",
      "app.use((req, res, next) => {",
      "  const start = Date.now();",
      "  res.on('finish', () => {",
      "    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);",
      "  });",
      "  next();",
      "});",
    ],
    keyterms: [
      "Latency = time taken to respond to a request",
      "Monitoring = tracking performance in real-time",
      "Tracing = following request flow across services",
    ],
  },
  {
    id: 12,
    question: "Webpack vs Vite: differences and use cases",
    answer: [
      "Webpack is a mature bundler with rich plugin ecosystem, suitable for large, complex projects.",
      "Vite is a faster build tool using native ES modules and dev server for hot module replacement.",
      "Vite offers much faster dev startup and rebuilds, while Webpack has more configuration flexibility.",
    ],
    example: [
      "// Vite dev server command",
      "npm run dev",
      "// Webpack build command",
      "npx webpack --mode production",
    ],
    keyterms: [
      "Bundler = tool that combines modules into single files",
      "HMR = hot module replacement for faster dev",
      "ES modules = native JS module system",
    ],
  },
  {
    id: 13,
    question: "What are Progressive Web Apps (PWAs)?",
    answer: [
      "PWAs are web apps that behave like native apps, supporting offline usage and installability.",
      "They use Service Workers for caching and push notifications.",
      "Provide faster load times and improved user experience on mobile devices.",
    ],
    example: [
      "// Register service worker in index.js",
      "if ('serviceWorker' in navigator) {",
      "  navigator.serviceWorker.register('/sw.js');",
      "}",
    ],
    keyterms: [
      "PWA = web app with native app features",
      "Service Worker = background script for caching & offline",
      "Manifest = defines installable app properties",
    ],
  },
];

export default otherQuestions;
