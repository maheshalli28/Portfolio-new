import React from 'react';
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
 
  {
    id: 1,
    title: "Restaurant Management System",
    description: "Full-Stack Restaurant Management System with customer and admin interfaces, featuring real-time order management and Stripe payments.",
    image: "/images/project1.jpg",
    tags: ["React.js", "Bootstrap CSS", "MongoDB","Git","GitHub"],
    type: "Personal",
    year: "2025",
    codeLink: 'https://github.com/maheshalli28/Foodies-Resturent',
     demoLink: 'https://foodies-resturent.netlify.app/',
  },
  {
    id: 2,
    title: "Anynomouse Thoughts Platform",
    description: "Full-Stack real-time Thought sharing platform with CURD functionality and responsive UI.",
    image: "/images/project2.png",
    tags: ["React.js", "Flask", "Bootstrap CSS", "SQLite","Git","GitHub"],
    type: "Personal",
    year: "2025",
    codeLink: 'https://github.com/maheshalli28/Anonymous-Message',
     demoLink: 'https://anonymous-message-1.onrender.com/',
  },
  {
    id: 3,
    title: "Personal Fitness Tracker",
    description: "This project aims to bridge the gap between fitness tracking and actionable insights without relying on wearables, making it an affordable and accessible health-tracking solution.",
    image: "/images/project3.png",
    tags: ["Python", "Meachine Learning", "StreamLite","Git","GitHub"],
    type: "Internship",
    year: "2025",
    codeLink: 'https://github.com/maheshalli28/Internship',
    demoLink: 'https://fitness-tracker-2025.streamlit.app/',
  },
  
  {
    id: 4,
    title: "Heart Disease Prediction",
    description: "Built and optimized ML models (Logistic Regression, KNN, SVM, Decision Tree, Random Forest, XGBoost) for heart disease prediction, achieving up to 89% F1-score through EDA, feature engineering, and hyperparameter tuning.",
    image: "images/image2.jpg",
    tags: ["Python", "Deep Learning", "StreamLite","Git","GitHub"],
    type: "Major Project",
    year: "2025",
// codeLink: 'https://github.com/SrikarsGit/Uber-Trips-Data-Analysis.git',
    demoLink: 'https://www.kaggle.com/code/srikarscode/heart-failure-prediction-eda-optimized-models',
  },
 

];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center fw-bold mb-2 gradient-text fade-in-center">Projects</h2>
      <h5 className='text-center mb-4 fw-light fst-italic'>Browse My Feature</h5>
      <div className="row gy-4 ">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card shadow project-card h-100 fade-in-center">
              <div className="position-relative">
                <img
                src={project.image}
               className="card-img-top"
               alt={project.title}
               loading="lazy"
              />
                <span className={`badge badge-type ${project.type === 'Personal' ? 'bg-primary' : 'bg-purple'}`}>
                  {project.type}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-semibold">{project.title}</h5>
                <p className="card-text small ">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge bg-light text-dark border">{tag}</span>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="text-muted small">{project.year}</span>
                   <div className="d-flex justify-content-between mt-3">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn  btn-sm"
                    >
                      <FaGithub size={20} /> 
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn text-primary btn-sm"
                    >
                      <FaLink size={18} />
                    </a>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
