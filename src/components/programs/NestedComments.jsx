import PlaygroundWrapper from "../PlaygroundWrapper";

const DEFAULT_BODY = `
//Write React components, JSX, or pure JS. No need of any import statements.

function Comment({ comment }) {
  const [replyText, setReplyText] = useState("");
  const [children, setChildren] = useState(comment.replies || []);

  const addReply = () => {
    if (!replyText.trim()) return;
    const newReply = { id: Date.now(), text: replyText, replies: [] };
    setChildren([...children, newReply]);
    setReplyText("");
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <p>{comment.text}</p>

      <div>
        <input value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Reply..." /> 
        <button onClick={addReply}>Reply</button>
      </div>

      {children.map(c => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}

function NestedComments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (!text.trim()) return;
    const newComment = { id: Date.now(), text, replies: [] };
    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <div>
      <h3>Comments</h3>

      <div>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a comment" /> 
        <button onClick={addComment}>Post</button>
      </div>

      {comments.map(c => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}

export default NestedComments;
`.trim();

export default function NestedComments(props) {
  return <PlaygroundWrapper defaultCode={DEFAULT_BODY} {...props} />;
}
