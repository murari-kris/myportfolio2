import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaBars, FaTimes, FaMoon, FaSun 
} from "react-icons/fa";
import "./Education.css";

function Education() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logoRef = useRef(null);

  const handleNavClick = () => setOpen(false);

  const handleMouseMove = (e) => {
    const logo = logoRef.current;
    if (!logo) return;
    const { left, top, width, height } = logo.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    logo.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (logoRef.current) logoRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institute: "ABES Engineering College, Ghaziabad",
      img: "/abes.png",
      desc: "Currently pursuing B.Tech in CSE, specializing in software engineering and modern web stacks.",
      year: "2024 – 2027",
    },
    {
      degree: "Diploma in CSE",
      institute: "Government Polytechnic Patna-7",
      img: "/gpp.png",
      desc: "Completed three years of technical training with a focus on core computer science and engineering.",
      year: "2021 – 2024",
    },
    {
      degree: "10th (Secondary School)",
      institute: "High School Chainpur, Siwan",
      img: "/school.png",
      desc: "Graduated with strong academic performance and a foundation in logic and science.",
      year: "2021",
    },
  ];

  return (
    <section className={`education-page ${darkMode ? "dark" : ""}`}>
      {/* --- Unified Navbar --- */}
      <nav className="navbar">
        <div className="logo" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="logo-branding" ref={logoRef}>
            <div className="logo-scanner"><span className="logo-letter">K</span><div className="logo-beam"></div></div>
            <div className="logo-ring"></div>
          </div>
          <div className="logo-info">
            <span className="logo-name">KRISHNA</span>
            <div className="logo-status"><span className="status-dot"></span><span className="status-text">MURARI</span></div>
          </div>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${open ? "mobile-open" : ""}`}>
          <NavLink to="/about" onClick={handleNavClick}><FaUser /> About</NavLink>
          <NavLink to="/skills" onClick={handleNavClick}><FaTools /> Skills</NavLink>
          <NavLink to="/projects" onClick={handleNavClick}><FaProjectDiagram /> Projects</NavLink>
          <NavLink to="/trainingachievements" onClick={handleNavClick}><FaBriefcase /> Certs</NavLink>
          <NavLink to="/education" className="active" onClick={handleNavClick}><FaGraduationCap /> Education</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
                      <FaGraduationCap className="nav-i" /> <span>Contact</span>
                    </NavLink>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      <div className="content education">
        <h1 className="edu-title">Academic <span className="highlight">Journey</span></h1>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="edu-box"
              style={{ "--edu-icon": `url('${edu.img}')` }}
            >
              <h2 className="edu-degree">{edu.degree}</h2>
              <div className="edu-institute">
                <img src={edu.img} alt="logo" onError={(e) => e.target.style.display='none'} />
                <span>{edu.institute}</span>
              </div>
              <p className="edu-desc">{edu.desc}</p>
              <div className="edu-footer">
                 <span className="edu-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;