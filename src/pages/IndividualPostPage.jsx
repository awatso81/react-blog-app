
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import CommentForm from '../components/CommentForm';

function IndividualPostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);


  

useEffect(() => {
  async function fetchPost() {
    try {
      const postResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      setPost(postResponse.data);

      const userResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`
      );

      setAuthor(userResponse.data);

      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );

      setComments(commentsResponse.data);

    } catch (error) {
      console.error('Error fetching post, author, or comments:', error);
      setError(true);
    }
  }

  fetchPost();
}, [postId]);


function addComment(name, comment) {
  if (!name.trim() || !comment.trim()) {
    alert('Please enter your name and comment.');
    return;
  }

  axios.post(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      name: name,
      body: comment
    }
  )
    .then(response => {
      setComments(prevComments => [...prevComments, response.data]);
    })
    .catch(error => {
      console.error('Error posting comment:', error);
      alert('There was an error posting your comment.');
    });
}


  if (error) {
  return <h2>There was an error loading this post. Please try again.</h2>;
}

if (!post) {
  return <h2>Loading post...</h2>;
}

  return (
    <main className="main-content">
      <div className="post-container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        
{author && (
  <>
    <p><strong>Author:</strong> {author.name}</p>
    <p><strong>Email:</strong> {author.email}</p>
  </>
)}


        <div className="comments-section">
          <h2>Comments</h2>

          <CommentForm addComment={addComment} />

          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}:</strong> {comment.body || comment.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default IndividualPostPage;
