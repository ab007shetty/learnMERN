const systemDesignQuestions = [
  {
    id: 1,
    question: "What is horizontal vs vertical scaling?",
    answer: [
      "Vertical scaling (scale up) means adding more power to existing machines (CPU, RAM).",
      "Horizontal scaling (scale out) means adding more machines to handle the load.",
    ],
    example: [
      "// Vertical scaling",
      "Server: 2 CPU cores → 8 CPU cores",
      "       4 GB RAM → 16 GB RAM",
      "",
      "// Horizontal scaling",
      "1 server → 4 servers behind load balancer",
    ],
    keyterms: [
      "Vertical = scale up (more powerful hardware)",
      "Horizontal = scale out (more servers)",
      "Load balancer = distributes requests across servers",
    ],
  },
  {
    id: 2,
    question: "What is caching and what are different types?",
    answer: [
      "Caching stores frequently accessed data in fast storage to reduce latency.",
      "Types include browser cache, CDN, application cache, database query cache, and distributed cache (Redis).",
    ],
    example: [
      "// Application cache example",
      "const cache = new Map();",
      "function getData(key) {",
      "  if (cache.has(key)) return cache.get(key);",
      "  const data = expensiveOperation(key);",
      "  cache.set(key, data);",
      "  return data;",
      "}",
    ],
    keyterms: [
      "Cache hit = data found in cache",
      "Cache miss = data not in cache, fetch from source",
      "TTL = Time To Live (cache expiration)",
    ],
  },
  {
    id: 3,
    question: "What is a microservices architecture?",
    answer: [
      "Microservices architecture breaks down applications into small, independent services.",
      "Each service handles a specific business function and communicates via APIs.",
    ],
    example: [
      "// Monolith",
      "Single application: User + Order + Payment + Inventory",
      "",
      "// Microservices",
      "User Service ←→ API Gateway ←→ Order Service",
      "                    ↓",
      "Payment Service ←→ Inventory Service",
    ],
    keyterms: [
      "Service independence = deploy and scale separately",
      "API communication = HTTP/REST or messaging",
      "Distributed = challenges with data consistency",
    ],
  },
];
export default systemDesignQuestions;
