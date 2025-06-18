import PlaygroundWrapper from "../PlaygroundWrapper";
import {Send} from "lucide-react";


const DEFAULT_BODY = `
// Type a component, JSX, or export default!

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

function App() {
  const userData = {
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    age: 30,
    location: 'New York',
  };

  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile 
        name={userData.name} 
        email={userData.email} 
        age={userData.age} 
        location={userData.location} 
      />
      
      <UserProfile 
        name="Bob Johnson" 
        email="bob.j@example.com" 
        age={25} 
        location="London" 
      />
    </div>
  );
}

export default App;
`.trim();

export default function PropsDemo() {
  return (
    <PlaygroundWrapper
      icon={Send}
      name="Props"
      description="Demonstrates passing data and functions as props from a parent to child component."
      concept="props"
      conceptDescription={
        <>
          <span className="font-mono bg-blue-50 px-2 py-1 rounded">props</span> are used to pass data and behavior from a parent component to its children.<br />
          In this example, the <span className="font-mono">Child</span> component receives a <span className="font-mono">name</span> (string) and an <span className="font-mono">onGreet</span> (function) as props. This allows the parent to control both the text and the click behavior of each child.
        </>
      }
      defaultCode={DEFAULT_BODY}
    />
  );
}