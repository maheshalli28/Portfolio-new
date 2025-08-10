import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import {  FaCode, FaTools, FaDatabase, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 75 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      title: 'Frameworks',
      icon: <FaLaptopCode className="category-icon" />,
      skills: [
        { name: 'Django', level: 75 },
        { name: 'React', level: 80 },
        { name: 'Flask', level: 70 },
       
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 70 },
       
      ],
    },
    {
      title: 'Tools / Platforms',
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Render', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const renderSkillItem = (skill, index) => (
    <li key={index} className="skill-item mb-3">
      <div className="d-flex align-items-center m-1">
        
        <strong>{skill.name}</strong>
      </div>
      <div className="progress-container">
        <div className="progress ">
          <div
            className={`progress-bar gradient-bar ${inView ? 'animate-progress' : ''}`}
            style={{ width: inView ? `${skill.level}%` : '0%' }}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </li>
  );

  return (
    <section id="skills" className="container py-5" ref={sectionRef}>
      <h1 className="text-center fw-bold mb-3 gradient-text fade-in-center"> Skills</h1>
      <h5 className="text-center mb-5 fw-light fst-italic ">
        Languages, Tools & Frameworks I Use
      </h5>

      <div className="row g-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-6">
            <div className="card glass-card shadow h-100 fade-in-center">
              <div className="card-body">
                <div className="text-center mb-4">
                   <h4 className="card-title mt-2">{category.icon} {category.title}</h4>
                </div>
                <ul className="ps-0 list-unstyled text-light">
                  {category.skills.map((skill, index) => renderSkillItem(skill, index))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
