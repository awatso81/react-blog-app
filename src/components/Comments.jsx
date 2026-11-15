
import { useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([
    'Comment 1',
    'Comment 2',
    'Comment 3'
  ]);

  const [newComment, setNewComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (newComment.trim() !== '') {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  }

  return (
    <section className="comments-section">
      <h2>Comments</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <h3>Existing Comments:</h3>

      <ul className="comments-list">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;
