import{j as r}from"./index-DME0ChcM.js";import{P as a}from"./PlaygroundWrapper-C8RUvC-h.js";const o=`
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
`.trim();function n(e){return r.jsx(a,{defaultCode:o,...e})}export{n as default};
