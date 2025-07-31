import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaCheckCircle } from 'react-icons/fa';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const programmingSkills = [
    { name: 'Python: (Pandas, NumPy, Matplotlib, Seaborn, Plotly Express, Scikit-learn, Selenium)', level: 80 },
    { name: 'Databases: (MySQL, PostgreSQL, SQL Server, Snowflake, PostGIS)', level: 70 },
    { name: 'Visualization & BI: (Tableau, Power BI, Excel)', level: 80 },
    { name: 'ML & Analytics: (Regression, Decision Trees, Random Forest, XGBoost, CatBoost, EDA, Sentiment Analysis)', level: 55 },
    { name: 'Tools & Technologies: (Git, Jupyter Notebook, Web Scraping, API Integration, Basic DSA)', level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <li key={index} className="skill-item">
        <div className="d-flex align-items-center mb-2">
          <FaCheckCircle className="text-success me-2" />
          <strong>{skill.name}</strong>
        </div>
        <div className="progress-container">
          <div className="progress">
            <div
              className={`progress-bar bg-success ${inView ? 'animate-progress' : ''}`}
              style={{ width: inView ? `${skill.level}%` : '0%' }}
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </li>
    ));

  return (
    <section id="skills" className="container py-5" ref={sectionRef}>
      <h1 className="text-center mb-2 fw-bold">Skills</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">Languages & Frameworks I Use</h5>

      <div className="d-flex justify-content-center mb-4">
        <div className="card-body">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Technical Skills</h4>
              <ul className="ps-0 mt-4 list-unstyled">{renderSkills(programmingSkills)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
