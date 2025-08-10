import React, { useRef } from 'react';
import './Certifications.css';
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { LiaCertificateSolid } from "react-icons/lia";

const certifications = [
  
  {
    id: 1,
    title: 'Crash Course on Python',
    provider: 'Google',
    date: '18 Jan, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/X8NJEWS5JTNK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
  },
  {
    id: 2,
    title: 'Introduction to Web Development with HTML, CSS and JavaScript',
    provider: 'IBM',
    date: '23 Dec, 2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/UCNFFHEJTYX6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
  },
  
  {
    id: 3,
    title: 'Python for Data Science, AI & Development ',
    provider: 'IBM',
    date: '19 Nov, 2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/DDMT439S7U6K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
  },
  {
    id: 4,
    title: 'The Joy of Computing Using Python',
    provider: 'NPTEL',
    date: 'Oct, 2023',
    link: 'https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs108/Course/NPTEL23CS108S53740008520241990.pdf'
  },
  {
    id: 5,
    title: 'Certificate of Merit in Academics',
    provider: 'SICTE',
    date: '12 May, 2023',
    link: 'https://drive.google.com/file/d/1_8LNKyqJYQUBAHnjSCU0niaWwMkL0WI2/view'
  },
  
];

const Certifications = () => {
  const cardRefs = useRef([]);

  return (
    <section id="certifications" className="container py-5">
      <h1 className="text-center fw-bold mb-2 gradient-text fade-in-center">Certifications</h1>
      <h5 className='text-center mb-4 fw-light fst-italic'>Where Learning Meets Recognition</h5>
      <div className="row">
        {certifications.map((cert, index) => (
          <div
            className="col-md-6 col-lg-4 mb-4 fade-in-up"
            key={cert.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="cert-card glass-effect shadow-lg border-0 h-100 fade-in-center">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                 <LiaCertificateSolid className="text-warning me-2 fs-5"  size={45}/> {/* ✅ Verified badge */}
                  <h5 className="card-title fw-bold fs-5 mb-0">{cert.title}</h5>
                </div>
                <h6 className="card-subtitle text-muted mb-2 ms-5">{cert.provider}</h6>
                <p className="card-text ms-5">Issued: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success m-3 mb-1 px-2 py-1 border-1 rounded-3"
                >
                  View Certificate <LiaExternalLinkSquareAltSolid size={20} className="ms-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
