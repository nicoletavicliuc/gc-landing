import React from 'react';
import './header.css';

const Header = () => {
  const navButtons = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Events' },
    { label: 'Gallery' },
  ];
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#page">GENERAȚIA CURATĂ</a>
      </div>
      <div className="nav-links-container">
        {navButtons.map(({ label }) => (
          <a className="nav-link">{label}</a>
        ))}
      </div>
    </header>
  );
};
export default Header;
