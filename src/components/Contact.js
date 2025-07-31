import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container py-5 fade show">
      <h1 className="text-center mb-2 fw-bold">Contact Me</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">Let's Get in Touch</h5>
      <div className="row ">
        {/* Left: Contact Info */}
        <div className="col-md-6 mb-4 animate-left">
          <h5 className='fw-bold'><MdEmail size={20} className="me-2 " /> Email</h5>
          <p> srikarreddyb07@gmail.com</p>

          <h5 className='fw-bold' ><MdPhone size={20} className="me-2" /> Phone</h5>
          <p>+91 8341537587</p>

          <h5 className='fw-bold'><MdLocationOn size={20} className="me-2" /> Location</h5>
          <p >Hyderabad, India</p>

          <h5 className="mt-4">Find me on</h5>
          <div className="d-flex gap-4 mt-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/srikarreddybommidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary d-flex align-items-center gap-2"
            >
              <FaLinkedin size={35} /> 
            </a>
            <a
              href="https://github.com/SrikarsGit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark d-flex align-items-center gap-2"
            >
              <FaGithub size={35} /> 
            </a>
            <a
              href="https://www.instagram.com/srikarsgram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger  d-flex align-items-center gap-2"
            >
              <FaInstagram size={35} /> 
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="col-md-6 animate-right">
          <h5 className='text-center'>Send me a message!</h5>
          <form
        action="mailto:srikarreddyb07@gmail.com"
        method="POST"
        encType="text/plain"
        className="p-4"
       >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="Name" placeholder="Your Name" required />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name="Email" placeholder="you@example.com" required />
  </div>

  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" name="Message" rows="4" placeholder="Your message here..." required></textarea>
  </div>

  <button type="submit" className="btn btn-secondary w-100">Send Message</button>
</form>
        </div>
      </div>
      <div id="top">
      <a href="#about" className="scroll-top-btn">
       <FaArrowUp size={20} />
      </a>
      </div>
    </section>
  );
};

export default Contact;
