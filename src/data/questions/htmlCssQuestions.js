const htmlCssQuestions = [
  {
    id: 1,
    question: "What is the difference between HTML, HTML5, and Web 3.0?",
    answer: [
      "HTML is the standard markup language for creating web pages.",
      "HTML5 is the latest version with new tags (<video>, <canvas>, etc.), semantic elements, and offline support.",
      "Web 3.0 is not a markup language—it's the next evolution of the web focused on decentralization, blockchain, and smart applications.",
    ],
    keyterms: [
      "HTML = basic structure",
      "HTML5 = modern features, multimedia, semantic tags",
      "Web 3.0 = concept of a decentralized, intelligent web (not part of HTML).",
    ],
  },
  {
    id: 2,
    question: "What is the difference between <figure> and <img> tags in HTML?",
    answer: [
      "<img> is used to embed an image in a webpage.",
      "<figure> is a semantic container for self-contained content like images, diagrams, or code snippets, often with a <figcaption>.",
    ],
    example: [
      "<figure>",
      "  <img src='photo.jpg' alt='A mountain view'>",
      "  <figcaption>Beautiful mountain scenery</figcaption>",
      "</figure>",
    ],
    keyterms: [
      "<img> = embeds the image itself",
      "<figure> = groups media content with an optional caption",
      "<figcaption> = provides a caption for the content inside <figure>",
    ],
  },
  {
    id: 3,
    question:
      "What is the difference between display: none and visibility: hidden in CSS?",
    answer: [
      "display: none removes the element from the document flow as if it doesn't exist.",
      "visibility: hidden hides the element but it still takes up space in the layout.",
    ],
    example: [
      "/* display: none */",
      "element { display: none; }",
      " ",
      "/* visibility: hidden */",
      "element { visibility: hidden; }",
    ],
    keyterms: [
      "display: none = element removed from layout and not visible",
      "visibility: hidden = element hidden but space reserved",
    ],
  },
  {
    id: 4,
    question: "What is the difference between CSS border and outline?",
    answer: [
      "border is drawn inside the element’s box and affects its size.",
      "outline is drawn outside the element’s box, doesn’t affect its size, and can’t have rounded corners.",
    ],
    example: [
      "/* Border */",
      "div { border: 2px solid red; }",
      " ",
      "/* Outline */",
      "div { outline: 2px solid blue; }",
    ],
    keyterms: [
      "border = inside element, affects layout, supports border-radius",
      "outline = outside element, no layout impact, no border-radius",
    ],
  },
  {
    id: 5,
    question: "What are semantic HTML elements and why are they important?",
    answer: [
      "Semantic elements clearly describe their meaning to both the browser and developer.",
      "Examples: <header>, <footer>, <article>, <section>, <nav>.",
      "They improve accessibility, SEO, and maintainability.",
    ],
    keyterms: [
      "Semantic HTML = elements with meaningful names",
      "Accessibility = helps screen readers understand content",
      "SEO = search engine optimization",
    ],
  },
  {
    id: 6,
    question:
      "Explain the difference between relative, absolute, fixed, and sticky positioning in CSS.",
    answer: [
      "relative: positioned relative to its normal position.",
      "absolute: positioned relative to the nearest positioned ancestor.",
      "fixed: positioned relative to the viewport, doesn’t move on scroll.",
      "sticky: toggles between relative and fixed based on scroll position.",
    ],
    keyterms: [
      "relative = offset from normal position",
      "absolute = positioned by ancestor",
      "fixed = viewport-fixed, ignores ancestor",
      "sticky = scroll-based relative/fixed",
    ],
  },
  {
    id: 7,
    question:
      "What is the difference between inline, inline-block, and block elements?",
    answer: [
      "block: occupies full width, starts on a new line.",
      "inline: occupies only as much width as needed, does not start on a new line.",
      "inline-block: like inline but allows width and height.",
    ],
    keyterms: [
      "block = new line, full width",
      "inline = no new line, only content width",
      "inline-block = inline behavior with block properties",
    ],
  },
  {
    id: 8,
    question:
      "What are the differences between relative, em, rem, %, and vh/vw units in CSS?",
    answer: [
      "relative units adjust sizes relative to another value or viewport.",
      "em = relative to parent font-size.",
      "rem = relative to root font-size.",
      "% = relative to parent container.",
      "vh/vw = relative to viewport height/width.",
    ],
  },
  {
    id: 9,
    question: "What is the difference between CSS Grid and Flexbox?",
    answer: [
      "Flexbox is 1-dimensional (row or column) layout, good for alignment and spacing.",
      "Grid is 2-dimensional (rows and columns) layout, good for complex layouts.",
      "They can be combined for responsive designs.",
    ],
    example: [
      "// Flexbox example ",
      ".container { display: flex; justify-content: space-between; }",
      " ",
      "// Grid example ",
      ".grid-container { ",
      "display: grid; grid-template-columns: 1fr 2fr; gap: 10px; ",
      "}",
    ],
    keyterms: [
      "Flexbox = 1D layout",
      "Grid = 2D layout",
      "Responsive design = adapts to screen size",
    ],
  },
  {
    id: 10,
    question:
      "What is the difference between relative units and absolute units in CSS?",
    answer: [
      "Relative units (%, em, rem, vh, vw) adapt to parent or viewport size.",
      "Absolute units (px, pt, cm) remain fixed regardless of other elements.",
    ],
    keyterms: [
      "Relative units = scalable, responsive",
      "Absolute units = fixed size",
    ],
  },
  {
    id: 11,
    question:
      "What does the 'this' keyword refer to in HTML event attributes, and how is it used with properties like .tagName?",
    answer: [
      "In inline HTML event attributes (like onclick, onmouseover), 'this' refers to the element that triggered the event.",
      "It allows direct access to the element’s properties and methods within the same tag.",
      "For example, 'this.tagName' returns the name of the HTML tag in uppercase (e.g., BUTTON, DIV).",
      "You can also use 'this' to modify styles or content dynamically (e.g., this.style.color = 'red').",
    ],
    example: [
      '<button onclick="alert(this.tagName)">Show Tag</button>',
      "<div onclick=\"this.style.background='yellow'\">Click to Highlight</div>",
    ],
    keyterms: [
      "this = refers to the current HTML element handling the event",
      "tagName = returns the element’s tag in uppercase",
      "inline event = event defined directly inside the HTML tag",
    ],
  },
  {
    id: 12,
    question: "CSS vs SCSS: key differences and a short SCSS example",
    answer: [
      "SCSS (Sass) is a superset of CSS adding variables, nesting, mixins, and better maintainability.",
      "SCSS needs a build step (preprocessor) to compile to CSS.",
      "Use SCSS for larger projects to keep styles organized.",
    ],
    example: [
      "// SCSS",
      "$primary: #0070f3;",
      ".card {",
      "  color: $primary;",
      "  .title { font-weight: bold; }",
      "}",
      "// compiles to nested CSS selectors",
    ],
    keyterms: [
      "SCSS = Sass syntax with nesting & variables",
      "preprocessor = compiles SCSS → CSS",
      "mixins = reusable style blocks",
    ],
  },
];
export default htmlCssQuestions;
