import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUser, FaTools, FaProjectDiagram, FaBriefcase, FaGraduationCap, 
  FaBars, FaTimes, FaMoon, FaSun, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane 
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logoRef = useRef(null);
  
  // Logic to detect if we just came back from a successful submission
  const [submitted, setSubmitted] = useState(window.location.search.includes('success=true'));

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

  return (
    <section className={`contact-page ${darkMode ? "dark" : ""}`}>
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
          <NavLink to="/education" onClick={handleNavClick}><FaGraduationCap /> Education</NavLink>
          <NavLink to="/contact" className="active" onClick={handleNavClick}><FaEnvelope /> Contact</NavLink>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* --- Contact Content --- */}
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">Let's <span className="highlight">Connect</span></h1>
          <p className="contact-subtitle">I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>krishnamutari160@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><FaLinkedin /></div>
              <div>
                <h4>LinkedIn</h4>
                <p>https://www.linkedin.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="contact-form-container">
          
          {/* Success Banner - Appears only after redirect */}
          {submitted && (
            <div className="success-banner" style={{ 
              padding: '15px', 
              background: '#10b981', 
              color: 'white', 
              borderRadius: '12px', 
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
            }}>
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          <form 
            action="https://formspree.io/f/mjgeaddn" 
            method="POST" 
            className="contact-form"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            {/* Redirect with success flag */}
            <input type="hidden" name="_next" value="http://localhost:5173/contact?success=true" />
            
            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;