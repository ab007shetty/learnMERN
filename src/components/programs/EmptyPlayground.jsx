import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
// Type a component, JSX, or export default!

<h1>Hello World</h1>
`.trim();

export default function EmptyPlayground(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}