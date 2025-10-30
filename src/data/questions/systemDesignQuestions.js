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
      " ",
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
      " ",
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
  {
    id: 4,
    question: "What is a load balancer and why is it used?",
    answer: [
      "A load balancer distributes incoming network traffic across multiple servers.",
      "It improves availability, reliability, and scalability of applications.",
      "Can use algorithms like round-robin, least connections, or IP-hash.",
    ],
    example: [
      "// Round-robin example with 3 servers",
      "Requests: 1 → Server A",
      "Requests: 2 → Server B",
      "Requests: 3 → Server C",
      "Requests: 4 → Server A (repeat)",
    ],
    keyterms: [
      "Load balancer = distributes requests",
      "Round-robin = cycles through servers evenly",
      "High availability = system remains operational under load",
    ],
  },
  {
    id: 5,
    question: "What is sharding in databases?",
    answer: [
      "Sharding is horizontal partitioning of data across multiple database instances.",
      "It helps in scaling databases by splitting large datasets into smaller, manageable pieces.",
      "Each shard can be hosted on a different server for parallel access.",
    ],
    example: [
      "// Users table with 3 shards",
      "Shard 1 → user_id 1–1000",
      "Shard 2 → user_id 1001–2000",
      "Shard 3 → user_id 2001–3000",
    ],
    keyterms: [
      "Sharding = horizontal data partitioning",
      "Shard key = determines which shard stores data",
      "Scalability = better performance by distributing load",
    ],
  },
  {
    id: 6,
    question: "What are CAP theorem constraints?",
    answer: [
      "CAP theorem states that a distributed system can only guarantee 2 of 3 properties: Consistency, Availability, and Partition tolerance.",
      "Consistency = all nodes see the same data at the same time.",
      "Availability = every request receives a response (success/failure).",
      "Partition tolerance = system works despite network partitions.",
    ],
    example: [
      "// Example in distributed DB",
      "CP system → prioritize consistency over availability",
      "AP system → prioritize availability over consistency",
    ],
    keyterms: [
      "CAP theorem = trade-offs in distributed systems",
      "Consistency = data uniformity",
      "Availability = responsiveness",
      "Partition tolerance = network fault resilience",
    ],
  },
  {
    id: 7,
    question: "What is a message queue and why is it used?",
    answer: [
      "A message queue decouples services by enabling asynchronous communication.",
      "Producers push messages to the queue; consumers process them independently.",
      "Used for load leveling, retry mechanisms, and async workflows.",
    ],
    example: [
      "// Producer sends tasks",
      "queue.push('email task')",
      " ",
      "// Consumer processes tasks",
      "while(queue.notEmpty()){ process(queue.pop()); }",
    ],
    keyterms: [
      "Message queue = async communication channel",
      "Producer = sends messages",
      "Consumer = receives and processes messages",
      "Decoupling = independent service operation",
    ],
  },
  {
    id: 8,
    question: "What is eventual consistency?",
    answer: [
      "In distributed systems, eventual consistency means all replicas will converge to the same value over time.",
      "Immediate consistency is not guaranteed; system prioritizes availability and partition tolerance.",
      "Common in NoSQL databases and caching systems.",
    ],
    example: [
      "// User profile update on multiple replicas",
      "Replica 1 → name='Ani'",
      "Replica 2 → name='Ani' (after some delay)",
    ],
    keyterms: [
      "Eventual consistency = delayed uniformity across nodes",
      "Replica = copy of data on another node",
      "Trade-off = favors availability over immediate consistency",
    ],
  },
  {
    id: 9,
    question: "What is CDN and how does it improve performance?",
    answer: [
      "CDN (Content Delivery Network) caches static content on edge servers near users.",
      "Reduces latency, bandwidth usage, and load on origin servers.",
      "Commonly used for images, videos, JS/CSS files, and APIs.",
    ],
    example: [
      "// User request for image",
      "Edge server → delivers cached image instead of fetching from origin",
    ],
    keyterms: [
      "CDN = distributed caching network",
      "Edge server = server closer to user",
      "Latency = delay in data transfer",
    ],
  },
  {
    id: 10,
    question: "What is rate limiting and why is it important?",
    answer: [
      "Rate limiting restricts the number of requests a client can make in a given time.",
      "Prevents abuse, DDoS attacks, and ensures fair resource usage.",
      "Can be implemented via tokens, counters, or leaky bucket algorithm.",
    ],
    example: [
      "// Allow 100 requests per minute per user",
      "if(requests > 100) return 429 Too Many Requests;",
    ],
    keyterms: [
      "Rate limiting = restrict requests per time unit",
      "Leaky bucket = algorithm for controlling request flow",
      "DDoS protection = prevents overload attacks",
    ],
  },
  {
    id: 11,
    question: "SSR vs CSR: what are they and how they affect SEO?",
    answer: [
      "CSR (Client-Side Rendering): browser downloads JS, renders UI; slower first paint, content not present in HTML initially.",
      "SSR (Server-Side Rendering): server sends fully rendered HTML; faster first paint and better SEO because crawlers see content.",
      "Use hybrid approaches (SSR + hydration/ISR) for best UX/SEO.",
    ],
    example: [
      "Next.js provides SSR: getServerSideProps fetches data server-side and returns HTML.",
      "React SPA uses CSR: index.html + bundle.js which renders content in browser.",
    ],
    keyterms: [
      "CSR = renders in browser",
      "SSR = renders on server",
      "SEO = search engine indexing improved by SSR",
    ],
  },
];
export default systemDesignQuestions;
