import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { FaProjectDiagram, FaDatabase, FaServer, FaClock } from 'react-icons/fa'; // Icons for stats

const About = () => {
  const skills = ['Python', 'HTML', 'CSS', 'React.Js', 'Node.Js','MySQL','MongoDB'];

  const stats = [
    { value: '4+', label: 'Projects Delivered', icon: <FaProjectDiagram className="me-2" /> },
    { value: '2+', label: 'Database Platforms', icon: <FaDatabase className="me-2" /> },
    { value: '4+', label: 'Core Technologies ', icon: <FaServer className="me-2" /> },
    { value: '5M+', label: 'Hands-on Experience', icon: <FaClock className="me-2" /> },
  ];

  return (
    <section  id='about' className=" py-5 ">
      <div className="container">
        <h1 className="text-center mb-2 fw-bold fade-in-center"><span className='gradient-text'>About</span> Me</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">My Story in Tech</h5>
       <div className="row gy-4 align-items-stretch">
          {/* About Card */}
          <div className="col-12 col-lg-6">
            <div className="card shadow p-4 h-100 rounded-4 fade-in-center">
              <h3 className="fw-bold mb-3">Full-Stack Developer </h3>
              <p>
              I’m a Full-Stack Developer skilled in <strong>Python, Django, React, and databases,</strong> focused on creating scalable, user focused solutions for innovative, growth-driven projects.</p>
              <p>
Passionate about applying strong technical skills and problem-solving abilities to deliver high-quality, impactful applications.</p>
              <div className="d-flex flex-wrap gap-2 mt-3 ">
                {skills.map((skill, index) => (
                  <span key={index} className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="col-12 col-lg-6">
            <div className="row g-4 text-center fade-in-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6">
                  <div className="card shadow p-4 rounded-4 stat-card h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="fs-4 text-primary mb-1">{stat.icon}<br></br><strong>{stat.value}</strong></div>
                   
                    <div className="fw-bold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
