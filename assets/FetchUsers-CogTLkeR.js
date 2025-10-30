import{j as s}from"./index-DW8VmNK2.js";import{P as t}from"./PlaygroundWrapper-BbDN0lfi.js";const r=`
//Write React components, JSX, or pure JS. No need of any import statements.

function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {                             
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => {});                               // silent catch, app won't crash
  }, []);

 // .includes() checks for sub string incase of string, an element incase of array, & returns boolean.
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search user..." />
      <ul>
        {users
          .filter((user) => 
              user.name.toLowerCase()
                       .includes(search.toLowerCase())  
          )
          .map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default FetchUsers;
`.trim();function o(e){return s.jsx(t,{defaultCode:r,...e})}export{o as default};
