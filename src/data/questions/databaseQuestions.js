const databaseQuestions = [
  {
    id: 1,
    question: "What is the difference between SQL and NoSQL databases?",
    answer: [
      "SQL databases are relational with structured data in tables, ACID compliance, and use SQL queries.",
      "NoSQL databases are non-relational, handle unstructured data, are horizontally scalable, and use various data models (document, key-value, graph).",
    ],
    example: [
      "// SQL (MySQL)",
      "SELECT * FROM users WHERE age > 25;",
      " ",
      "// NoSQL (MongoDB)",
      "db.users.find({ age: { $gt: 25 } });",
    ],
    keyterms: [
      "SQL = Structured, ACID, relationships, vertical scaling",
      "NoSQL = Flexible, BASE, horizontal scaling, various models",
    ],
  },
  {
    id: 2,
    question: "What are database indexes and why are they important?",
    answer: [
      "Indexes are data structures that improve query performance by creating shortcuts to data.",
      "They trade storage space and write performance for faster read operations.",
    ],
    example: [
      "-- Creating an index",
      "CREATE INDEX idx_user_email ON users(email);",
      " ",
      "-- MongoDB index",
      "db.users.createIndex({ email: 1 });",
    ],
    keyterms: [
      "Index = data structure for faster queries",
      "B-tree = common index structure",
      "Trade-off = storage space vs query speed",
    ],
  },
  {
    id: 3,
    question: "What is database normalization?",
    answer: [
      "Normalization is organizing data to reduce redundancy and improve data integrity.",
      "It involves dividing large tables into smaller ones and defining relationships between them.",
    ],
    example: [
      "-- Before normalization (1NF violation)",
      "users: id, name, hobbies (comma-separated)",
      " ",
      "-- After normalization",
      "users: id, name",
      "user_hobbies: user_id, hobby",
    ],
    keyterms: [
      "1NF = atomic values, no repeating groups",
      "2NF = 1NF + no partial dependencies",
      "3NF = 2NF + no transitive dependencies",
    ],
  },
  {
    id: 4,
    question:
      "What is the difference between embedded documents and references in MongoDB?",
    answer: [
      "Embedded documents store related data inside a single document for faster reads.",
      "References store related data in separate collections using ObjectId links, reducing duplication.",
      "Use embedding for one-to-few relationships, and referencing for one-to-many or many-to-many relationships.",
    ],
    example: [
      "// Embedded document",
      "{",
      "  _id: 1,",
      "  name: 'John',",
      "  address: { city: 'NY', zip: '10001' }",
      "}",
      " ",
      "// Reference",
      "{ _id: 1, name: 'John', address_id: 101 }",
      "{ _id: 101, city: 'NY', zip: '10001' }",
    ],
    keyterms: [
      "Embedding = store related data inside a single document",
      "Reference = store data separately and link via ObjectId",
      "Use case = based on relationship type",
    ],
  },
  {
    id: 5,
    question: "What are transactions in MongoDB and when should you use them?",
    answer: [
      "Transactions allow multiple operations to execute atomically, ensuring ACID properties.",
      "Useful when updating multiple collections/documents and consistency is required.",
      "Supported in MongoDB 4.0+ on replica sets and 4.2+ on sharded clusters.",
    ],
    example: [
      "const session = await client.startSession();",
      "session.startTransaction();",
      "try {",
      "  await coll1.insertOne(doc1, { session });",
      "  await coll2.updateOne(filter, update, { session });",
      "  await session.commitTransaction();",
      "} catch (e) {",
      "  await session.abortTransaction();",
      "}",
    ],
    keyterms: [
      "Transaction = atomic set of operations",
      "ACID = Atomicity, Consistency, Isolation, Durability",
      "Replica set = MongoDB deployment type supporting transactions",
    ],
  },
  {
    id: 6,
    question: "Explain aggregation pipeline in MongoDB.",
    answer: [
      "Aggregation pipeline processes data in stages, transforming documents and producing aggregated results.",
      "Stages include $match, $group, $project, $sort, $limit, etc.",
      "Efficient for data analytics and reporting.",
    ],
    example: [
      "db.orders.aggregate([",
      "  { $match: { status: 'delivered' } },",
      "  { $group: { _id: '$customerId', total: { $sum: '$amount' } } },",
      "  { $sort: { total: -1 } }",
      "]);",
    ],
    keyterms: [
      "Aggregation = data processing",
      "Pipeline = stages of transformation",
      "$match/$group = filter and group documents",
    ],
  },
  {
    id: 7,
    question:
      "What is SQLite and how is it different from other SQL databases?",
    answer: [
      "SQLite is a lightweight, serverless SQL database stored as a single file.",
      "No separate server process, everything runs in-process with the application.",
      "Ideal for mobile apps, small projects, and local storage.",
    ],
    example: [
      "-- Create table in SQLite",
      "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);",
      " ",
      "-- Insert data",
      "INSERT INTO users (name, age) VALUES ('Alice', 30);",
      " ",
      "-- Query",
      "SELECT * FROM users WHERE age > 25;",
    ],
    keyterms: [
      "SQLite = serverless SQL database",
      "Serverless = no separate DB server required",
      "Single-file DB = portable and lightweight",
    ],
  },
  {
    id: 8,
    question:
      "What is indexing in MongoDB vs SQL, and how does it affect performance?",
    answer: [
      "Indexes improve query performance by reducing the number of documents/rows scanned.",
      "In MongoDB, indexes can be single-field, compound, or unique.",
      "In SQL, indexes can be primary key, unique, or composite.",
      "Trade-off: faster reads, slightly slower writes, additional storage.",
    ],
    example: [
      "// MongoDB index",
      "db.users.createIndex({ email: 1 });",
      " ",
      "-- SQL index",
      "CREATE INDEX idx_users_email ON users(email);",
    ],
    keyterms: [
      "Index = improves query speed",
      "Trade-off = speed vs storage and write performance",
      "Single-field vs compound = multiple columns or keys",
    ],
  },
  {
    id: 9,
    question:
      "Explain difference between capped collection and regular collection in MongoDB.",
    answer: [
      "Capped collection has fixed size, preserves insertion order, automatically overwrites oldest documents when full.",
      "Regular collection has dynamic size and no overwrite behavior.",
      "Capped collections are used for logs or caching.",
    ],
    example: ["db.createCollection('log', { capped: true, size: 1024 });"],
    keyterms: [
      "Capped collection = fixed-size, FIFO overwrite",
      "Regular collection = dynamic-size, no overwrite",
      "Use-case = logs, queue-like storage",
    ],
  },
  {
    id: 10,
    question: "What is the difference between ACID and BASE in databases?",
    answer: [
      "ACID: Atomicity, Consistency, Isolation, Durability (traditional relational databases).",
      "BASE: Basically Available, Soft state, Eventually consistent (common in NoSQL for scalability).",
      "ACID prioritizes consistency, BASE prioritizes availability and partition tolerance.",
    ],
    example: [
      "-- SQL (ACID compliant)",
      "BEGIN TRANSACTION;",
      "UPDATE accounts SET balance = balance - 100 WHERE id = 1;",
      "UPDATE accounts SET balance = balance + 100 WHERE id = 2;",
      "COMMIT;",
      " ",
      "// MongoDB (BASE approach) often allows eventual consistency for replicas",
    ],
    keyterms: [
      "ACID = consistency and atomic operations",
      "BASE = availability and eventual consistency",
      "Trade-off = consistency vs scalability",
    ],
  },
];
export default databaseQuestions;
