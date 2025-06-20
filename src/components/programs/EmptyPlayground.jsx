import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

console.log('Hello, World!');
`.trim();

export default function EmptyPlayground(props) {
  // Remove concept and conceptDescription from props to give more space for console
  const { concept, conceptDescription, ...otherProps } = props;
  
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...otherProps}
    />
  );
}