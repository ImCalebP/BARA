import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaList, FaEnvelope, FaCog } from 'react-icons/fa';

const MobileNavBar = () => {
  return (
    <nav className="navbar-mobile">
      <Link to="/" className="nav-link">
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/skills" className="nav-link">
        <FaUser />
        <span>Skills</span>
      </Link>
      <Link to="/projects" className="nav-link">
        <FaList />
        <span>Projects</span>
      </Link>
      <Link to="/contact" className="nav-link">
        <FaEnvelope />
        <span>Contact</span>
      </Link>
      
    </nav>
  );
};

export default MobileNavBar;
