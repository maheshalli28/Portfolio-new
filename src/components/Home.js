import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaCloudDownloadAlt } from "react-icons/fa";
import profilePic from '../assets/photo.jpg';

const Home = () => {
  const fullText = "Full-Stack Developer.";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDelay = 2000;

    let timer;
    if (index < fullText.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText('');
        setIndex(0);
      }, pauseDelay);
    }
    return () => clearTimeout(timer);
  }, [index, fullText]);

  

  return (
    <section 
      id="home" 
      className="container py-2 d-flex justify-content-center align-items-center vh-100 fade-in-center"
    >
      
      <div className="row align-items-center text-center w-100">

        {/* Profile Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="profile-img"
            style={{ maxWidth: '280px', width: '280px', borderRadius: '50%' }}
          />
        </div>

        {/* Info Section */}
        <div className="col-12 col-md-6">
          <h3 className="fw-bold mt-3">Hello, I'm</h3>
          <h1 className="fw-bolder display-1 gradient-text mb-2" style={{ letterSpacing: '3px' }}>
            Alli Mahesh.
          </h1>
          <h3 className="fw-bold typing-heading mb-2">
            {text}
            <span className="blinking-cursor">.</span>
          </h3>

          {/* Buttons */}
          <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
            <a
              href="https://google.com"
              download
              className="btn btn-outline-primary border-2 rounded-5 fw-bold fs-6 d-flex align-items-center "
            >
              <FaCloudDownloadAlt className="me-1" size={20} />
              DownloadCV
            </a>

            <a
              href="https://linkdin.com/alli-mahesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark border-2 rounded-5 fw-bold fs-6 d-flex align-items-center"
            >
              <FaLinkedinIn className='' size={25} />
            </a>

            <a
              href="https://github.com/maheshalli28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark border-2 rounded-5 fw-bold fs-6 d-flex align-items-center"
            >
              <FaGithub className='' size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
