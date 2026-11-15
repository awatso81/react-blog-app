
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/">Blog Posts</Link>
      <Link to="/contact">Contact</Link>

      <button onClick={toggleTheme} className="theme-button">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
