import React, { useRef } from 'react';
import './Certifications.css';
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { LiaCertificateSolid } from "react-icons/lia";

const certifications = [
  {
    id: 1,
    title: 'Data Science Training Program',
    provider: 'GeeksforGeeks',
    date: '31 Jan, 2025',
    link: 'https://www.geeksforgeeks.org/certificate/cc176dfcce616cbb7b8b9b2d984d4bfd?utm_source=socials&utm_medium=cc_link'
  },
  {
    id: 2,
    title: 'SQL (Advanced)',
    provider: 'HackerRank',
    date: '16 May, 2025',
    link: 'https://www.hackerrank.com/certificates/3d212f7339dc'
  },
  {
    id: 3,
    title: 'Excel: Mother of Business Intelligence',
    provider: 'Codebasics',
    date: '14 Mar, 2025',
    link: 'https://codebasics.io/certificate/CB-51-527222'
  },
];

const Certifications = () => {
  const cardRefs = useRef([]);

  return (
    <section id="certifications" className="container py-5">
      <h1 className="text-center fw-bold mb-2">Certifications</h1>
      <h5 className='text-center mb-4 fw-light fst-italic'>Where Learning Meets Recognition</h5>
      <div className="row">
        {certifications.map((cert, index) => (
          <div
            className="col-md-6 col-lg-4 mb-4 fade-in-up"
            key={cert.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card h-100 shadow-sm border-1 rounded-3">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                 <LiaCertificateSolid className="text-warning me-2 fs-5"  size={35}/> {/* ✅ Verified badge */}
                  <h5 className="card-title fw-bold fs-5 mb-0">{cert.title}</h5>
                </div>
                <h6 className="card-subtitle text-muted mb-2 ms-5">{cert.provider}</h6>
                <p className="card-text ms-5">Issued: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary m-3 mb-1 px-2 py-1 border-1 rounded-3"
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
