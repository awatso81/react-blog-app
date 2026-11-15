
import './App.css';
import { Routes, Route } from 'react-router';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlogPostsPage />} />
        <Route path="/post/:postId" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
