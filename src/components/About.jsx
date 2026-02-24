import React, { useState, useRef } from "react"; // Added useRef
import { NavLink } from "react-router-dom";
import myImage from "../assets/my.jpg";
import TypingEffect from "./TypingEffect";
import Tilt from "react-parallax-tilt";
import { 
  FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun 
} from "react-icons/fa";
import "./About.css";

function About() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Create the reference for the logo tilt
  const logoRef = useRef(null);

  // Logic for the 3D Mouse Tilt
  const handleMouseMove = (e) => {
    const logo = logoRef.current;
    if (!logo) return;

    const { left, top, width, height } = logo.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10; 
    const y = (e.clientY - top - height / 2) / 10;

    logo.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
  };

  const handleNavClick = () => setOpen(false);

  return (
    <section className={`about-page ${darkMode ? "dark" : ""}`}>
      {/* --- Header / Navbar --- */}
      <nav className="navbar">
        <div 
          className="logo" 
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo Branding with Ref */}
          <div className="logo-branding" ref={logoRef} style={{ transition: "transform 0.1s ease-out" }}>
             <div className="logo-scanner">
                <span className="logo-letter">K</span>
                <div className="logo-beam"></div>
             </div>
             <div className="logo-ring"></div>
          </div>
          
          <div className="logo-info">
             <span className="logo-name">KRISHNA</span>
             <div className="logo-status">
                <span className="status-dot"></span>
                <span className="status-text">MURARI</span>
             </div>
          </div>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${open ? "mobile-open" : ""}`}>
          <NavLink to="/about" onClick={handleNavClick}>
            <FaUser className="nav-i" /> <span>About</span>
          </NavLink>
          <NavLink to="/skills" onClick={handleNavClick}>
            <FaTools className="nav-i" /> <span>Skills</span>
          </NavLink>
          <NavLink to="/projects" onClick={handleNavClick}>
            <FaProjectDiagram className="nav-i" /> <span>Projects</span>
          </NavLink>
          <NavLink to="/trainingachievements" onClick={handleNavClick}>
            <FaBriefcase className="nav-i" /> <span>Certifications</span>
          </NavLink>
          <NavLink to="/education" onClick={handleNavClick}>
            <FaGraduationCap className="nav-i" /> <span>Education</span>
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
            <FaGraduationCap className="nav-i" /> <span>Contact</span>
          </NavLink>

          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* --- Content --- */}
      <div className="main-container">
        <div className="content-grid">
          
          <div className="text-content">
            <h2 className="greeting">Hello, I'm</h2>
            <h1 className="name-display">Krishna Murari</h1>
            <h3 className="typing-box">
              I am a <span className="highlight"><TypingEffect /></span>
            </h3>

            <p className="description">
              I am a passionate Software Engineering student with a strong interest
              in Java development and full-stack web technologies. I have hands-on
              experience building web applications using Spring Boot and React.
            </p>

            <div className="btn-group">
              <a href="/krishna_Resume.pdf" download className="say-hello-btn">
                Download Resume
              </a>
              <div className="social-icons">
                <a href="https://github.com/murari-kris" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/javadeveloper-krishna-murari/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              </div>
            </div>

            <div className="stats-row">
               <div className="stat-item"><strong>2+</strong><span>Years Learning</span></div>
               <div className="stat-item"><strong>500+</strong><span>LeetCode</span></div>
               <div className="stat-item"><strong>10+</strong><span>Projects</span></div>
            </div>
          </div>

          <div className="image-section">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={2000}>
              <div className="photo-frame">
                <img src={myImage} alt="Krishna Murari" />
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;