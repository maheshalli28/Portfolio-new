import React from 'react';
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import proj1 from '../assets/image.png';
import proj2 from '../assets/image2.jpg';
import proj3 from '../assets/image3.jpg';
import proj4 from '../assets/image4.png';
import proj5 from '../assets/image5.png';
import proj6 from '../assets/image6.png';

const projectData = [
  {
    id: 1,
    title: 'Apple Retail Sales Analysis',
    description: 'Tech Stack: PostgreSQL, Excel',
    image: proj1,
    codeLink: 'https://github.com/SrikarsGit/Apple-Retail-Stores-Sales-Analysis-SQL.git',
   // demoLink: 'https://github.com/SrikarsGit/Apple-Retail-Stores-Sales-Analysis-SQL.git',
  },
  
  {
    id: 2,
    title: 'Airbnb Booking Trends Dashboard',
    description: 'Tech Stack: Tableau, Excel',
    image: proj3,
   // codeLink: 'https://public.tableau.com/app/profile/srikar.reddy4509/viz/AirbnbBookingTrendsDashboard/Homepage#1',
    demoLink: 'https://public.tableau.com/app/profile/srikar.reddy4509/viz/AirbnbBookingTrendsDashboard/Homepage#1',
  },
  {
    id: 3,
    title: ' Heart Disease Prediction',
    description: 'Tech Stack: Python ',
    image: proj2,
   // codeLink: 'https://www.kaggle.com/code/srikarscode/heart-failure-prediction-eda-optimized-models',
    demoLink: 'https://www.kaggle.com/code/srikarscode/heart-failure-prediction-eda-optimized-models',
  },
  {
    id: 4,
    title: ' Yelp Reviews Sentiment & Behavior Analysis',
    description: 'Tech Stack: Snowflake, SQL, Python',
    image: proj4,
    codeLink: 'https://github.com/SrikarsGit/Yelp-Reviews-End-to-End-Data-Analytics-Project.git',
   
  },
  {
    id: 5,
    title: 'Uber Trip Data Analysis ',
    description: 'Tech Stack: PostgreSQL, Python, Excel',
    image: proj5,
    //codeLink: 'https://github.com/SrikarsGit/Yelp-Reviews-End-to-End-Data-Analytics-Project.git',
    codeLink: 'https://github.com/SrikarsGit/Uber-Trips-Data-Analysis.git',
  },
  {
    id: 5,
    title: 'BikeDekho ',
    description: 'Tech Stack:Excel',
    image: proj6,
    //codeLink: 'https://github.com/SrikarsGit/Yelp-Reviews-End-to-End-Data-Analytics-Project.git',
    demoLink: 'https://drive.google.com/drive/folders/1dqjW37QBtbmYKMvQRXwVJcXnta86leUw',
  },


];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h1 className="text-center mb-2 fw-bold ">Projects</h1>
      <h5 className="text-center fst-italic fw-light mb-4">Explore My Recent projects</h5>
      <div className="row">
        {projectData.map(project => (
          <div className="col-md-6 col-lg-4 mb-4 " key={project.id}>
            <div className="card h-80 shadow-sm zoom-container">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-center zoom-img rounded-top "
                style={{ height:'200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text flex-grow-1 text-secondary fst-italic">{project.description}</p>
                <div className="d-flex justify-content-between mt-3">
                   {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                   >
                    <FaGithub size={20} /> GitHub
                  </a>
                   )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Visit<FaLink className="ms-2" />
                    </a>
                  )}
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
