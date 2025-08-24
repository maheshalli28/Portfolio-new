import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import BackgroundLogos from './components/BackgroundLogos';
import ReactGA from "react-ga4";
import './App.css';
import './index.css';

function App() {
  
  useEffect(() => {
    ReactGA.initialize("G-9ZTFX994W5"); // your Measurement ID
    ReactGA.send("pageview"); // Track initial page view
  }, []);

  // State for theme
  const [theme, setTheme] = useState('light');

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <BackgroundLogos />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <section id="home"><Home theme={theme} /></section>
      <section id="about"><About theme={theme} /></section>
      <section id="experience"><Experience theme={theme} /></section>
      <section id="projects"><Projects theme={theme} /></section>
      <section id="skills"><Skills theme={theme} /></section>
      <section id="certifications"><Certifications theme={theme} /></section>
      <section id="contact">
        <Contact theme={theme} toggleTheme={toggleTheme} />
      </section>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
