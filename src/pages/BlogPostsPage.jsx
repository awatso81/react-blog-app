
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import BlogPost from '../components/BlogPost';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <main id="home" className="main-content">
      {posts.map((post) => (
        <div className="post-container" key={post.id}>
          <BlogPost
            title={post.title}
            content={post.body.substring(0, 100) + '...'}
            author={`User ${post.userId}`}
          />

          <Link to={`/post/${post.id}`} className="read-more">
            Read More →
          </Link>
        </div>
      ))}
    </main>
  );
}

export default BlogPostsPage;
