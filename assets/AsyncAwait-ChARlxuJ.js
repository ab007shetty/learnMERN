import{j as e}from"./index-BcA8-jrW.js";import{P as r}from"./PlaygroundWrapper-d15mF70_.js";const s=`
//Write React components, JSX, or pure JS. No need of any import statements.

function AsyncAwait() { 
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch('https://api.github.com/users/ab007shetty'); 
        const data = await res.json();          // One wait for fetch, another for body parsing
        setUser(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    loadUser(); 
  }, []);

  return (
    <div>
      <h2>Username: {user?.login}</h2>
      <img src={user?.avatar_url} width={100}  />
      <p>Name: {user?.name}</p>
      <p>Location: {user?.location}</p>
      <p>Website: {user?.blog}</p>
    </div>
  );
}

export default AsyncAwait;

`.trim();function n(t){return e.jsx(r,{defaultCode:s,...t})}export{n as default};
