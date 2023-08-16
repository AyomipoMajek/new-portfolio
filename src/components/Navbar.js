import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/" className="logo">
        <h1 style={{ color: '#3cff00', fontSize: '1.3rem' }}>M.A</h1>
      </Link>
      <ul className={click ? 'nav-menu active'
        : 'nav-menu'}
      >
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        {click ? <FaTimes size={20} style={{ color: '#fff' }} onClick={handleClick} />
          : <FaBars size={20} style={{ color: '#fff' }} onClick={handleClick} /> }
      </div>
    </div>
  );
};

export default Navbar;
