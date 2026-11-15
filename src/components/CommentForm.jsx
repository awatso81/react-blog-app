
import { useState } from 'react';

function CommentForm({ addComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '' || comment.trim() === '') {
      alert('Please fill out both fields.');
      return;
    }

    addComment(name, comment);

    setName('');
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;
