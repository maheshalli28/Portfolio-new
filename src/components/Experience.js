import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import { FaUserGraduate , FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className={`container py-5 fade-section ${animate ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h1 className="text-center mb-2 fw-bold">About Me</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">My Story in Tech</h5>
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100 border-1 rounded-4">
            <div className="card-body fade-text">
              <h4 className="card-title mb-3 text-center">
                <FaBriefcase className="me-2" />
                Work Experience
              </h4>
              <ul className="timeline">
              <li className="timeline-item mb-4">
                <div className="d-flex align-items-center gap-2 mb-2 ">
              <h5 className="fw-bold  mb-0">Project Intern </h5>
              <p className='ms-auto mb-0 fst-italic'>Hyderabad - Onsite</p>
              </div>
              <p className="mb-1 ms-1">Osmania Technology Business Incubator  (Jul 2025 - Present)</p>
              <p className="mb-1 ms-2 fs-6 fw-light text-muted">Leading a PostGIS-based geospatial analytics project to automate Point of Interest (POI) extraction from OpenStreetMap data.
Designed and executed advanced spatial SQL queries and Python pipelines to analyze POIs across bounding boxes and regional
clusters.
Automated bounding box queries and geospatial filtering via API integration, significantly improving pipeline efficiency and
scalability</p>  
              </li>
            </ul>
             
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100 border-1 rounded-4">
            <div className="card-body fade-text">
              <h4 className="card-title mb-3 text-center">
                <FaUserGraduate  className="me-2 " />
                Education
              </h4>
              <ul className="timeline">
              <li className="timeline-item mb-4">
              <h5 className="fw-bold mb-1">Bachelor of Technology - ECE</h5>
              <p className="mb-1 ms-1">Sri Indu College of Engineering and Technology (SICET). (2021 - 2025)</p>
              <p className="mb-1 fs-6 ms-1 fw-light text-muted">CGPA: 8.1/10</p>
              <p className='ms-1'>Hyderabad, Telangana - 500070</p>
              </li>
              <li className="timeline-item">
              <h5 className="fw-bold mb-1">Central Board of Secondary Education Class XI & XII</h5>
               <p className="mb-1 ms-1 ">Global Indian International School (GIIS) - (2018 - 2019)</p>
               <p className="mb-1 ms-1 fs-6 fw-light text-muted">Percentage 94%</p>
             <p className='ms-1'>Hyderabad, Telangana - 500070</p>
               </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
