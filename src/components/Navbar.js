import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = ({ onToggleTheme }) => {

  // Close navbar on link click (mobile)
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });

    return () => {
      navLinks.forEach(link => link.removeEventListener("click", () => {}));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg themed-navbar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home" style={{ color: 'var(--text-color)' }}>
          Alli Mahesh
        </a>

        {/* Custom Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineBars3BottomRight style={{ fontSize: '1.8rem', color: 'var(--text-color)' }} />
        </button>

        <div className="collapse navbar-collapse centered-collapse" id="navbarNav">
          <ul className="navbar-nav nav-links me-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
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
