import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <h2 className="logo">
          <a href="Header.tsx">GENERAȚIA CURATĂ</a>
        </h2>
        <ul>
          <li>
            <a href="Home.tsx">Home</a>
          </li>
          <li>
            <a href="About.tsx">About</a>
          </li>
          <li>
            <a href="Events.tsx">Events</a>
          </li>
          <li>
            <a href="Gallery.tsx">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
