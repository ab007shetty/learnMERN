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
];
export default otherQuestions;
