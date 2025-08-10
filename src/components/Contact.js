import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { LuSend } from "react-icons/lu";
import { BsSun, BsMoon } from "react-icons/bs"; // Theme icons

const Contact = ({ theme, toggleTheme }) => {
  return (
    <section id="contact" className="container fade show">
      <h1 className="text-center mb-2 fw-bold gradient-text">Contact Me</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">Let's Get in Touch</h5>
      <div className="row">
        {/* Left: Contact Info */}
        <div className="col-md-6 mb-5 animate-left">
          <div className='card shadow p-3 m-2'>
            <h5 className='fw-bold'><MdEmail size={20} className="me-2 text-success" /> Email</h5>
            <p>maheshalli2305@gmail.com</p>
          </div>
          <div className='card shadow p-3 m-2'>
            <h5 className='fw-bold'><MdPhone size={20} className="me-2 text-primary" /> Phone</h5>
            <p>+91 9347558677</p>
          </div>
          <div className='card shadow p-3 m-2'>
            <h5 className='fw-bold'><MdLocationOn size={20} className="me-2 text-danger" /> Location</h5>
            <p>Hyderabad, India</p>
          </div>

          <h5 className="mt-4">Find me on</h5>
          <div className="d-flex gap-3">
            <a href="https://www.linkedin.com/in/alli-mahesh/" target="_blank" rel="noopener noreferrer" className="text-primary">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/maheshalli28/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/i_mahesh_alli/" target="_blank" rel="noopener noreferrer" className="text-danger">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="col-lg-6">
          <div className="form-container card p-4 rounded shadow">
            <h4 className="fw-bold mb-4">Send Message</h4>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="What's this about?" required />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Tell me about your project or just say hello!" required></textarea>
              </div>
              <button className="btn btn-primary w-100">
                <LuSend className='me-2' />Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to Top & Theme Toggle */}
      <div id="top" className="d-flex justify-content-center gap-3 mt-4">
       
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
      </div>
    </section>
  );
};

export default Contact;
