import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <Link to={'/favorites'}>
        <button>Favorites</button>
      </Link>
      <Link to={'/'}>
        <button onClick={handleLogOut}>Log Out</button>
      </Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
