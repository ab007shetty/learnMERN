import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

const users = [{ id: 1, name: "john", age: 23 }, { id: 2, name: "mary", age: 53 }];

const Child = (props) => {
  return (
    <>
      <h1>ID: {props.id}</h1>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>---------------------------</h1>
    </>
  );
};

const App = () => {
  return (
    <div>
    {users.map((user) => (
      <Child id={user.id} name={user.name} age={user.age} />
    ))}
       <Child id={3} name="ani" age={22} />
    </div>
  );
};

export default App;
`.trim();

export default function Props(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}