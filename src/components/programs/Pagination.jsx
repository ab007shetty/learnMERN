import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Pagination() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const data = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Lemon", "Watermelon"];

  const paginated = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <ul>
        {paginated.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul> <br/>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button> &nbsp; &nbsp;
      <button onClick={() => setPage(page + 1)} disabled={page * itemsPerPage >= data.length}>Next</button>
    </div>
  );
}

export default Pagination;
`.trim();

export default function Pagination(props) {
  return (
    <PlaygroundWrapper
      defaultCode={DEFAULT_BODY}
      {...props}
    />
  );
}