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
  {
    id: 13,
    question:
      "What's the difference between <section>, <article>, and <aside>?",
    answer: [
      "<section> represents a themed grouping of related content and divides a page into logical parts.",
      "<article> represents independent, self-contained content that can be reused or shared separately like a blog post.",
      "<aside> contains supplementary or side information such as ads, notes, or related links that are not part of the main flow.",
    ],
    example: [
      "<article>",
      "  <h2>Blog Post</h2>",
      "</article>",
      " ",
      "<section>",
      "  <h2>Features</h2>",
      "</section>",
      " ",
      "<aside>",
      "  <p>Sponsored Links</p>",
      "</aside>",
    ],
    keyterms: [
      "Section = structured grouping",
      "Article = standalone content",
      "Aside = supportive info",
    ],
  },
  {
    id: 14,
    question: "What are semantic elements, and how do they help in SEO?",
    answer: [
      "Semantic elements clearly describe their purpose to both the browser and search engines.",
      "They improve SEO because search engines can better understand page hierarchy and meaning.",
      "They improve accessibility because screen readers can navigate content more accurately.",
      "Normal non-semantic elements like <div> do not convey meaning, so the document structure becomes unclear.",
    ],
    example: [
      "<header>Website Header</header>",
      "<nav>Main Menu</nav>",
      "<article>Product Details</article>",
      "<footer>Contact Info</footer>",
    ],
    keyterms: [
      "Semantic tags = meaningful structure",
      "SEO = improved crawling",
      "Accessibility = clear document outline",
    ],
  },
  {
    id: 15,
    question: "How would you make a website accessible for screen readers?",
    answer: [
      "Use semantic HTML so screen readers can understand document structure.",
      "Provide meaningful alt text for all important images.",
      "Use proper labels for form elements so users know what each input means.",
      "Maintain correct heading order (h1 → h2 → h3).",
      "Ensure keyboard navigation works for all interactive elements.",
    ],
    example: [
      "<img src='user.png' alt='User profile photo' />",
      " ",
      "<button aria-label='Close menu'></button>",
    ],
    keyterms: [
      "Alt text = descriptive images",
      "ARIA labels = assist screen readers",
      "Semantic hierarchy = correct navigation",
    ],
  },
  {
    id: 16,
    question: "Explain absolute, relative, and fixed positioning in CSS.",
    answer: [
      "Relative positioning moves an element relative to its normal position without removing it from the layout.",
      "Absolute positioning removes the element from normal flow and positions it relative to the nearest positioned ancestor.",
      "Fixed positioning attaches an element to the viewport, so it stays visible even when scrolling.",
    ],
    example: [
      "/* Relative Position Example */",
      ".badge {",
      "  position: relative;",
      "  top: -5px;",
      "  left: 10px;",
      "}",
      " ",
      "/* Absolute Position Example */",
      ".container {",
      "  position: relative;",
      "}",
      ".icon {",
      "  position: absolute;",
      "  top: 10px;",
      "  right: 10px;",
      "}",
    ],
    keyterms: [
      "Relative = offset from itself",
      "Absolute = relative to ancestor",
      "Fixed = stays on screen",
    ],
  },
  {
    id: 17,
    question: "Flexbox vs Grid — When should you use each?",
    answer: [
      "Flexbox is best for one-dimensional layouts where items align in a row or a column.",
      "Grid is best for two-dimensional layouts where both rows and columns are needed.",
      "Flexbox is ideal for navbars, forms, and aligning items.",
      "Grid is ideal for page layouts, dashboards, and galleries.",
    ],
    example: [
      "/* Flexbox */",
      "display: flex; gap: 10px;",
      " ",
      "/* Grid */",
      "display: grid; grid-template-columns: 1fr 1fr; gap: 20px;",
    ],
    keyterms: [
      "Flexbox = 1D layout",
      "Grid = 2D layout",
      "Use-case = alignment vs full layout",
    ],
  },
  {
    id: 18,
    question:
      "What is the difference between a pseudo-class and a pseudo-element?",
    answer: [
      "A pseudo-class selects an element in a particular state, such as hover or focus.",
      "A pseudo-element selects a specific part of an element, such as the first letter or content before an element.",
      "Pseudo-elements create virtual elements that do not exist in the DOM.",
    ],
    example: ["a:hover { color: red; }", " ", "p::before { content: '• '; }"],
    keyterms: [
      "Pseudo-class = element state",
      "Pseudo-element = virtual element part",
    ],
  },
  {
    id: 19,
    question: "What is the Shadow DOM in web development?",
    answer: [
      "The Shadow DOM is a technique used in Web Components to encapsulate HTML and CSS.",
      "It isolates component styles so they do not leak into the main page or get affected by global CSS.",
      "It helps create truly reusable UI components with predictable styles.",
    ],
    example: [
      "// Creating a shadow root",
      "const box = document.querySelector('#box');",
      "const shadow = box.attachShadow({ mode: 'open' });",
      " ",
      "// Adding isolated HTML",
      "shadow.innerHTML = `<p class='red'>Inside Shadow DOM</p>`;",
      " ",
      "// Adding isolated CSS",
      "const style = document.createElement('style');",
      "style.textContent = `.red { color: red; }`;",
      "shadow.appendChild(style);",
    ],
    keyterms: [
      "Encapsulation = Isolated HTML and CSS.",
      "Shadow Tree = Hidden DOM structure.",
      "Web Components = Uses Shadow DOM.",
    ],
  },
  {
    id: 20,
    question: "What are inline and block elements?",
    answer: [
      "Inline elements only take up the space required by their content and do not start a new line.",
      "Block elements take full available width and always start on a new line.",
      "Inline elements usually cannot have width or height applied, while block elements can.",
    ],
    example: ["<span>Inline text</span>", " ", "<div>Block content</div>"],
    keyterms: [
      "Inline = no line break",
      "Block = occupies full width",
      "Dimension control = block only",
    ],
  },
  {
    id: 21,
    question: "What is CSS isolation, and how is it achieved?",
    answer: [
      "CSS isolation prevents styles from leaking between components.",
      "It helps avoid naming collisions and unexpected overrides.",
      "Achieved using techniques like CSS Modules, Shadow DOM, or scoped styles.",
    ],
    example: [
      "/* CSS Modules Example */",
      "button {",
      "  background: blue;",
      "  color: white;",
      "}",
      " ",
      "// Import inside React component",
      "import styles from './Button.module.css';",
      " ",
      "// Usage",
      "<button className={styles.button}>Click</button>",
    ],
    keyterms: [
      "CSS Modules = Auto-scoped class names.",
      "Shadow DOM = Fully isolated styling.",
      "Scoped CSS = Applies styles only to a component.",
    ],
  },
  {
    id: 22,
    question:
      "What is the difference between adaptive and responsive webpages?",
    answer: [
      "Responsive design adjusts fluidly to any screen size using flexible layouts.",
      "Adaptive design uses predefined fixed layouts that activate at specific screen widths.",
      "Responsive feels continuous across devices; adaptive switches layouts at breakpoints.",
    ],
    example: [
      "Responsive = width: 50%;",
      " ",
      "Adaptive = @media (max-width: 768px) { width: 600px; }",
    ],
    keyterms: ["Responsive = fluid scaling", "Adaptive = fixed breakpoints"],
  },
  {
    id: 23,
    question: "What is Tailwind CSS, and why is it popular?",
    answer: [
      "Tailwind CSS is a utility-first CSS framework that provides pre-built classes for rapid UI design.",
      "It reduces the need to write custom CSS and allows designing directly in HTML.",
      "It is popular because it improves development speed, ensures consistency, and is highly customizable.",
    ],
    example: [
      "<button class='bg-blue-500 text-white p-2 rounded'>Save</button>",
    ],
    keyterms: [
      "Utility-first = prebuilt classes",
      "Customization = config-based",
      "Faster UI development",
    ],
  },
];
export default htmlCssQuestions;
