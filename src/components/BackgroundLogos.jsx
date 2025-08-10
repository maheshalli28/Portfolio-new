import React, { useMemo, useState, useEffect } from "react";
import reactLogo from "../assets/logos/atom.png";
import aws from "../assets/logos/aws.png";
import bootstraplogo from "../assets/logos/bootstrap.png";
import code from "../assets/logos/code.png";
import databaselogo from "../assets/logos/database.png";
import django from "../assets/logos/django.png";
import github from "../assets/logos/github (3).png";
import htmlLogo from "../assets/logos/html.png";
import jsLogo from "../assets/logos/java-script.png";
import mysqlLogo from "../assets/logos/mysql.png";
import nodejs from "../assets/logos/nodejs.png";
import pythonLogo from "../assets/logos/python.png";
import scocial from "../assets/logos/social.png";
import text from "../assets/logos/text.png";
import tail from "../assets/logos/tail.png";


const logos = [
  pythonLogo,
  jsLogo,
  reactLogo,
  htmlLogo,
  bootstraplogo,
  databaselogo,
  github,
  text,
  nodejs,
  aws,
  tail,
  code,
  django,
  mysqlLogo,
  scocial,

];

const isOverlapping = (newPos, existing, minDistance) => {
  return existing.some(pos => {
    const dx = parseFloat(newPos.left) - parseFloat(pos.left);
    const dy = parseFloat(newPos.top) - parseFloat(pos.top);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < minDistance;
  });
};

const BackgroundLogos = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const randomPositions = useMemo(() => {
    const shuffled = [...logos].sort(() => Math.random() - 0.5);
    const placed = [];
    const minDistance = 20;

    shuffled.forEach(logo => {
      let tries = 0;
      let newPos;
      do {
        newPos = {
          top: Math.random() * 90,
          left: Math.random() * 90,
          size: Math.random() * 60 + 100,
          logo,
          rotate: Math.random() * -90
        };
        tries++;
        if (tries > 100) break;
      } while (isOverlapping(newPos, placed, minDistance));

      placed.push(newPos);
    });

    return placed;
  }, []);

  // When all logos are loaded, hide loader
  useEffect(() => {
    if (loadedCount === logos.length) {
      const timer = setTimeout(() => setIsLoaded(true), 500); // delay for smooth fade
      return () => clearTimeout(timer);
    }
  }, [loadedCount]);

  return (
    <>
      {/* Loading overlay */}
{!isLoaded && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#0d1117", // dark background (GitHub dark theme style)
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      transition: "opacity 0.5s ease"
    }}
  >
    <div style={{
      border: "6px solid rgba(255, 255, 255, 0.1)",
      borderTop: "6px solid #3b82f6", // blue theme color
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      animation: "spin 1s linear infinite"
    }} />
  </div>
)}


      {/* Background logos */}
      <div className="background-logos" style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}>
        {randomPositions.map((pos, index) => (
          <img
            key={index}
            src={pos.logo}
            alt="Skill logo"
            loading="eager"
            onLoad={() => setLoadedCount(prev => prev + 1)}
            style={{
              position: "absolute",
              top: pos.top + "vh",
              left: pos.left + "vw",
              width: pos.size + "px",
              height: "auto",
              opacity: 0.09,
              transform: `rotate(${pos.rotate}deg)`,
              pointerEvents: "none",
              zIndex: -1
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundLogos;
