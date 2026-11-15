
import { useState } from 'react';

function BlogPost({ title, content, author, date }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  }

  return (
    <article className="blog-post">
      <h2>{title}</h2>

      <p className="post-content">{content}</p>

      <div className="post-info">
        <p><strong>Author:</strong> {author}</p>
        
{date && <p><strong>Date:</strong> {date}</p>}

      </div>

      <button
        type="button"
        className="like-button"
        onClick={handleLike}
        aria-pressed={liked}
      >
        {liked ? '💜 Liked' : '🤍 Like'} ({likes})
      </button>
    </article>
  );
}

export default BlogPost;
