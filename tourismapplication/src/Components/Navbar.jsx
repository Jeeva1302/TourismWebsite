import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
        PeakAdventures
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
        
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Tour Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                My Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
               Package Details
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                SignIn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Signup
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
