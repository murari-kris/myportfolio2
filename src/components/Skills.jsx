import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaJava, FaServer, FaDatabase, FaGitAlt, FaTools,
  FaBars, FaTimes, FaMoon, FaSun, FaUser, FaProjectDiagram, FaBriefcase, FaGraduationCap
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logoRef = useRef(null);

  const handleNavClick = () => setOpen(false);

  // Logo tilt logic
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

  const frontendSkills = [
    { icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
  ];

  const backendSkills = [
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: FaServer, name: "Spring Boot", color: "#6DB33F" },
    { icon: FaServer, name: "REST APIs", color: "#FF6F61" },
  ];

  const databaseSkills = [
    { icon: FaDatabase, name: "MySQL", color: "#4479A1" },
    { icon: FaDatabase, name: "Oracle", color: "#F80000" },
  ];

  const toolSkills = [
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaTools, name: "Maven", color: "#C71A36" },
    { icon: FaTools, name: "VS Code", color: "#007acc" },
    { icon: FaTools, name: "IntelliJ IDEA", color: "#370b59" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, idx) => (
      <div className="skill-card" key={idx}>
        <skill.icon className="skill-icon" style={{ color: skill.color }} />
        <span className="skill-name">{skill.name}</span>
      </div>
    ));

  return (
    <section className={`skills-section ${darkMode ? "dark" : ""}`}>
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="logo" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="logo-branding" ref={logoRef}>
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
          <NavLink to="/about" onClick={handleNavClick}><FaUser /> About</NavLink>
          <NavLink to="/skills" onClick={handleNavClick}><FaTools /> Skills</NavLink>
          <NavLink to="/projects" onClick={handleNavClick}><FaProjectDiagram /> Projects</NavLink>
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

      {/* --- Skills Content --- */}
      <div className="skills-main-container">
        <h1 className="skills-title">Technical <span className="highlight">Proficiency</span></h1>
        
        <div className="skills-grid">
          <div className="skill-category-box">
            <h2>Frontend Development</h2>
            <div className="skill-flex-container">{renderSkills(frontendSkills)}</div>
          </div>

          <div className="skill-category-box">
            <h2>Backend & Databases</h2>
            <div className="skill-flex-container">{renderSkills(backendSkills)}</div>
            <div className="skill-flex-container">{renderSkills(databaseSkills)}</div>
          </div>

          <div className="skill-category-box">
            <h2>Development Tools</h2>
            <div className="skill-flex-container">{renderSkills(toolSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;