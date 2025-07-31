import React from 'react';
import './About.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaCloudDownloadAlt } from "react-icons/fa";
import profilePic from '../assets/photo.jpg'; // 📌 Add your image here

const headingText = "Data Analyst".split("");
const directions = ['up', 'down', 'left', 'right'];

const About = () => {
  return (
    <section id="about" className="container py-5 justify-content-space-around">
      <div className="row align-items-center mt-5 p-4">

        {/* 🔵 Profile Image */}
        <div className="col-md-6 text-center mt-4 mb-2">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle shadow"
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* 🔶 Info Section */}
        <div className="col-md-6" >
          <h4 className="fw-bold mt-3 ">Hello, I'm</h4>
          <h1 className="fw-bolder display-2 " style={{ letterSpacing: '3px' }}>
            SRIKAR REDDY BOMMIDI.
          </h1>
          <h4 className="fw-bold fst-italic animated-heading text-muted text-start">
            {headingText.map((char, i) => {
              const dir = directions[i % directions.length];
              return (
                <span
                  key={i}
                  className={`letter letter-${dir}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h4>

          {/* 🔗 Buttons */}
          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a
              href="/SRIKAR_RESUME_DATA_ANALYST.pdf"
              download
              className="btn btn-outline-secondary border-1 rounded-5 fw-bold fs-6 d-flex align-items-center text-dark"
            >
              <FaCloudDownloadAlt className="me-1 text-dark" size={25} />
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/srikarreddybommidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary border-1 rounded-5 fw-bold fs-6 d-flex align-items-center"
            >
              <FaLinkedinIn className="me-1" size={23} />
             
            </a>

            <a
              href="https://github.com/SrikarsGit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark border-1 rounded-5 fw-bold fs-6 d-flex align-items-center"
            >
              <FaGithub className='me-1' size={25} />
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
