import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/image.png"; 
import { FaArrowUpRightFromSquare, FaHandshake } from "react-icons/fa6";
import { TfiViewGrid } from "react-icons/tfi";
import "./About.css";

function About({ onNavigate, refs }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Added to prevent crash
  const logoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={`abode-shell ${showContent ? "content-visible" : "content-hidden"}`}>
      
      {/* 1. THE ANIMATING LOGO */}
      <div className="logo-brand-container" ref={logoRef}>
        <div className="logo-symbol">
          <div className="symbol-part part-left">K</div>
          <div className="symbol-part part-right">K</div>
          <div className="symbol-dot"></div>
        </div>
        <div className="logo-text-wrapper">
          <span className="logo-brand-name">KRISHNA</span>
          <span className="logo-brand-title">SOFTWARE ENGINEER</span>
        </div>
      </div>

      {/* 2. THE BACKGROUND SYSTEM */}
      <div className="background-system">
        <div className="mouse-glow" style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}></div>
        <div className="bg-grid"></div>
        
        <div className="sparkle-container">
          <span className="sparkle s1">✦</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✦</span>
          <span className="sparkle s4">✦</span>
          <span className="sparkle ms ms1">✦</span>
          <span className="sparkle ms ms2">✦</span>
           <span className="sparkle ms ms2">✦</span>
        </div>
        {/* Repeating containers kept as requested */}
        <div className="sparkle-container">
          <span className="sparkle s1">✦</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✦</span>
          <span className="sparkle s4">✦</span>
          <span className="sparkle ms ms1">✦</span>
          <span className="sparkle ms ms2">✦</span>
           <span className="sparkle ms ms2">✦</span>
        </div>
        <div className="sparkle-container">
          <span className="sparkle s1">✦</span>
          <span className="sparkle s2">✦</span>
          <span className="sparkle s3">✦</span>
          <span className="sparkle s4">✦</span>
          <span className="sparkle ms ms1">✦</span>
          <span className="sparkle ms ms2">✦</span>
           <span className="sparkle ms ms2">✦</span>
        </div>
      </div>

      {/* 3. THE REVEAL CONTENT */}
      <div className="reveal-layer">
        <div className="mobile-grid-trigger" onClick={() => setMenuOpen(!menuOpen)}>
          <TfiViewGrid />
        </div>
       <nav className={`pill-nav ${menuOpen ? "nav-open" : ""}`}>
          <a onClick={() => { onNavigate(refs.aboutRef); setMenuOpen(false); }}>Home</a>
          <a onClick={() => { onNavigate(refs.projectsRef); setMenuOpen(false); }}>Works</a>
          <a onClick={() => { onNavigate(refs.skillsRef); setMenuOpen(false); }}>Skills</a>
          <a onClick={() => { onNavigate(refs.eduRef); setMenuOpen(false); }}>Education</a>
          <a onClick={() => { onNavigate(refs.trainRef); setMenuOpen(false); }}>Achievements</a>
          <a onClick={() => { onNavigate(refs.contactRef); setMenuOpen(false); }}>Contact</a>
        </nav>

        <main className="abode-content">
          <div className="avatar-container">
            <img src={myImage} alt="Krishna" className="avatar-img" />
            <div className="status-badge">Available for opportunities</div>
          </div>

          <header className="hero-header">
  <h1 className="main-title">
    Building scalable software <br /> 
    <span>from backend to UI</span>
  </h1>
  <p className="sub-description">
    Full-Stack Developer focused on high-performance web systems.
  </p>
</header>

          <div className="action-group">
            <button className="btn-white" onClick={() => onNavigate(refs.contactRef)}>
              <FaHandshake /> Let's talk
            </button>
            <a href="https://drive.google.com/file/d/1RgmFrxI8MXgU1WnhfWmR-b5vIkmnMWXS/view?usp=sharing" target="_blank" className="btn-outline">
              Download Resume <FaArrowUpRightFromSquare />
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}

export default About;