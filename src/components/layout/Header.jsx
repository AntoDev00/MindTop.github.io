import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1>MindTop</h1>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navigation ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/meditazione" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Meditazione
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/libreria" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Libreria
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Chi Siamo
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
