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
    <nav className="navbar">
      <div className="logo">
        <a href="Header.tsx">GENERAȚIA CURATĂ</a>
      </div>

      <div className="nav-labels">
        {navButtons.map(({ label }) => (
          <a className="nav-links">{label}</a>
        ))}
      </div>
    </nav>
  );
};
export default Header;
