import{j as t}from"./index-CJcdpC0y.js";import{P as o}from"./PlaygroundWrapper-DAUxX0za.js";const a=`
//Write React components, JSX, or pure JS. No need of any import statements.

function SnakeCaseConverter() {
  const [text, setText] = useState("snakeCaseConverter");
  const [snake, setSnake] = useState("");

  const convert = () => {
    const snakeCase = text
      .replace(/([a-z0-9])([A-Z])/g, "$1_$2") // camelCase to snake_case
      .replace(/\\s+/g, "_")                  // spaces to underscores
      .toLowerCase();

    setSnake(snakeCase);
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={convert}>Convert</button>
      <div>{snake}</div>
    </div>
  );
}

export default SnakeCaseConverter;
`.trim(),n=`
//Write React components, JSX, or pure JS. No need of any import statements.

function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2") // camelCase to camel_Case
    .replace(/\\s+/g, "_")                // spaces to _
    .replace(/-+/g, "_")                 // hyphens to _
    .toLowerCase();                      // convert everything to lowercase
}

// Example usage:
console.log(toSnakeCase("helloWorld"));         // hello_world
console.log(toSnakeCase("Hello World"));        // hello_world
console.log(toSnakeCase("convert-To_Snake"));   // convert_to_snake
`.trim();function l(e){return t.jsx(o,{defaultCode:a,defaultJsCode:n,...e})}export{l as default};
