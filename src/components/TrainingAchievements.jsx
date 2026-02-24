import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaBars, FaTimes, FaMoon, FaSun, FaAward, FaExternalLinkAlt, FaCheckCircle, FaTrophy 
} from "react-icons/fa";
import "./TrainingAchievements.css";

function TrainingAchievements() {
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

  // YOUR ACTUAL DATA LINKED TO YOUR FILES
  const achievements = [
    {
      title: "Academic Excellence - 2nd Position",
      org: "Diploma-SBTE Board",
      date: "Gold Medalist",
      desc: "Secured the trophy for 1st position in Diploma for outstanding academic performance.",
      link: "/certificates/academic.jpeg", // Added the subfolder path
      icon: <FaTrophy />
    },
    {
      title: "GenPowerd Data Analytics",
      org: "Forage",
      date: "2024",
      desc: "Professional certification in Data Analytics and visualization techniques.",
      link: "/certificates/forage.png",
      icon: <FaAward />
    },
    {
      title: "HCL Hackathon Certificate",
      org: "Guvi HCL",
      date: "Participant",
      desc: "Recognized for innovative problem-solving in the HCL Hackathon event.",
      link: "/certificates/hackathon.jpeg",
      icon: <FaAward />
    },
    {
      title: "Java Training Certification",
      org: "Internship Program",
      date: "2023",
      desc: "Advanced training in Java Core and Full Stack development concepts.",
      link: "/certificates/internship.jpeg",
      icon: <FaCheckCircle />
    },
    {
      title: "Academic Achievement Trophy",
      org: "Excellence Award",
      date: "Diploma",
      desc: "Trophy awarded for securing top-tier academic excellence in technical studies.",
      link: "/certificates/trophy2.png",
      icon: <FaTrophy />
    },
    {
      title: "Secondary Education Award",
      org: "10th Grade Merit",
      date: "Merit List",
      desc: "Awarded for securing exceptional marks in the 10th-grade board examinations.",
     
      link: "/certificates/trophy1.png",
      icon: <FaTrophy />
    },
    {
      title: "Web Designing Training",
      org: "Web Tech Solutions",
      date: "2023",
      desc: "Comprehensive training in modern web design, UI/UX, and responsive development.",
      link: "/certificates/web.jpeg",
      icon: <FaAward />
    }
  ];

  return (
    <section className={`certs-section ${darkMode ? "dark" : ""}`}>
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
          <NavLink to="/trainingachievements" className="active" onClick={handleNavClick}><FaBriefcase /> Certs</NavLink>
          <NavLink to="/education" onClick={handleNavClick}><FaGraduationCap /> Education</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>
                      <FaGraduationCap className="nav-i" /> <span>Contact</span>
                    </NavLink>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      <div className="certs-wrapper">
        <h1 className="certs-title">Training & <span className="highlight">Achievements</span></h1>
        
        <div className="certs-grid">
          {achievements.map((item, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon-box">
                <span className="award-icon">{item.icon}</span>
              </div>
              <div className="cert-content">
                <span className="cert-date">{item.date}</span>
                <h3 className="cert-name">{item.title}</h3>
                <p className="cert-org"><FaCheckCircle className="check-i" /> {item.org}</p>
                <p className="cert-desc">{item.desc}</p>
                {/* THIS LINK NOW OPENS YOUR IMAGE */}
                <a href={item.link} target="_blank" rel="noreferrer" className="cert-link">
                  Verify Achievement <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingAchievements;