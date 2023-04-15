import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  return (
    <div className='navbar'>
      <div className='nav-links'>
        <NavLink to={'/home'}>
          <button>Home</button>
        </NavLink>
        <NavLink to={'/about'}>
          <button>About</button>
        </NavLink>
        <NavLink to={'/favorites'}>
          <button>Favorites</button>
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className='logout-container'>
        <NavLink to={'/'}>
          <button onClick={handleLogOut}>Log Out</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
