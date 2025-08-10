import React from "react";
import { FaBriefcase, FaUserGraduate  } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import './Experience.css';

const Experience = () => {
  const skills = ['Python', 'Django', 'MySQL', 'REST API', ];
  return (
    <section id="experience" className="container py-5">
      <h1 className="text-center mb-2 fw-bold fade-in-center">My <span className="gradient-text"> Journey</span></h1>
      <h5 className="text-center mb-4 fw-light fst-italic">From Learning to Professional Experience</h5>
      <div className="row g-4">
        
        {/* Internship */}
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 h-100 p-4 fade-in-center">
            <div className="d-flex align-items-center mb-3 ">
              <FaBriefcase size={20} className="me-2 text-primary" />
              <h4 className="mb-0 fs-5 fw-bold">Internship</h4>
            </div>
            <h5 className="fw-bold mb-2">Django Intern</h5>
            <p className="fw-light fs-6 mb-2"><FaBriefcase className="me-1 mb-1" />Prepex <CiLocationOn className="ms-1 me-1 mb-1"/>Remote <MdOutlineDateRange className="ms-3 mb-1 me-1" />July 2025- Present </p>
            <p>Developing and enhancing Django-based web applications within a SaaS platform. Building and optimizing backend functionalities, integrating databases, and implementing secure API.
              Gaining hands-on experience with real-world projects, improving problem-solving and technical skills.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <h6 className="fw-bold "><FaCode size={18} className="text-primary fw-light me-1"/>Technologies Used</h6>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="badge rounded-pill bg-secondary-subtle text-dark px-3 fw-light py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <hr></hr>
             <div className="d-flex align-items-center mb-3 ">
              <FaBriefcase size={20} className="me-2 text-primary" />
              <h4 className="mb-0 fw-bold fs-5">Self Learning</h4>
              </div>
              <p className="fs-6 fw-light mb-2"><MdWorkOutline className="me-1 mb-1" />Personal Projects <CiLocationOn className="ms-1 me-1 mb-1"/>Self-Learning <MdOutlineDateRange className="ms-2 mb-1 me-1" />May 2025- Present </p>
              <p>Currently engaged in intensive self-study, focusing on full-stack technologies, and building comprehensive projects</p>

          </div>
        </div>

        {/* Education */}
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 h-100 p-4 fade-in-center">
            <div className="d-flex align-items-center mb-3">
              <FaUserGraduate size={25} className="me-2 text-success" />
              <h4 className="mb-0 fw-bold">Education</h4>
            </div>
            <h5 className="fw-bold mb-1">Bachelor of Technology - ECE</h5>
            <p className=" mb-2">Sri Indu College of Engineering and Technology </p>
            <p className="fw-light mb-2"><CiLocationOn className=" me-1 mb-0"/>Hyderabad, Telangana <MdOutlineDateRange className="ms-2 me-1 mb-1" />2021 - 2025 </p>
            <p>CGPA :<strong>8.3/10</strong></p> 
            <h6><LuAward size={20} className="text-primary"/> Key Achievements</h6> 
            <ul>
               <li>Top performer in ECE, <strong>awarded</strong> for academic excellence.</li>
               <li>Conducted <strong>IoT workshops</strong> to guide peers on practical applications.</li>
               <li>Actively participated in<strong> hackathons,</strong> showcasing innovative solutions.</li>
            </ul>
            <hr />
            <h5 className="fw-bold mb-1">Intermediate - MPC</h5>
            <p className="text mb-2">Gouthami Junior College</p>
            <p className="fw-light mb-2"><CiLocationOn className=" me-1 mb-1"/>Nalgonda, Telangana <MdOutlineDateRange className="ms-2 me-1 mb-1" />2019 - 2021 </p>
            <p className="">Percentage: <strong>79%</strong></p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
