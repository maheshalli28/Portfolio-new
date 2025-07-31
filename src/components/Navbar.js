import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { TbAntennaBars4 } from "react-icons/tb";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg transparent-navbar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-dark "  href="#about">
         <TbAntennaBars4 size={30} /> SRIKAR REDDY
        </a>
        
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse centered-collapse" id="navbarNav">
          <ul className="navbar-nav nav-links">
            
            <li className="nav-item"><a className="nav-link" href="#experience">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
