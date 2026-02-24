import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaBars, FaTimes, FaMoon, FaSun, FaExternalLinkAlt 
} from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logoRef = useRef(null);

  const handleNavClick = () => setOpen(false);

  // Re-using your World-Class Logo Logic
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

  const projects = [
    { name: "FluentNest", desc: "Learn English naturally, prepare for high-stakes interviews, and strengthen your vocabulary to speak with confidence.", img: "/fluentnest.png", link: "https://fluentnest-w6wl.onrender.com/" },
    { name: "Creative Portfolio", desc: "Modern UI with Framer Motion and Tilt effects.", img: "/images/project2.png", link: "#" },
    { name: "Analytics Dashboard", desc: "Real-time data visualization with Chart.js.", img: "/images/project3.png", link: "#" },
    { name: "Social Connect", desc: "Interactive social feed with chat features.", img: "/images/project4.png", link: "#" },
  ];

  return (
    <section className={`projects-section ${darkMode ? "dark" : ""}`}>
      {/* --- Navbar --- */}
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
          <NavLink to="/projects" className="active" onClick={handleNavClick}><FaProjectDiagram /> Projects</NavLink>
          <NavLink to="/trainingachievements" onClick={handleNavClick}><FaBriefcase /> Certs</NavLink>
          <NavLink to="/education" onClick={handleNavClick}><FaGraduationCap /> Education</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
                      <FaGraduationCap className="nav-i" /> <span>Contact</span>
                    </NavLink>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* --- Projects Content --- */}
      <div className="projects-wrapper">
        <h1 className="projects-title">Featured <span className="highlight">Works</span></h1>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="image-container">
                <img src={project.img} alt={project.name} />
                <div className="overlay">
                   <button className="overlay-btn" onClick={() => window.open(project.link, "_blank")}>
                     <FaExternalLinkAlt /> View Demo
                   </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="card-footer">
                   <span className="tech-tag">React</span>
                   <span className="tech-tag">Spring Boot</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;