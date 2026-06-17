import React, { forwardRef, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlinePlay } from "react-icons/hi";
import "./Projects.css"; // Import the new CSS file

const projects = [
  {
    id: 1,
    title: "FluentNest",
    category: "Full Stack • Spring Boot",
    desc: "A high-performance language platform featuring real-time video signal handlers and automated grammar correction.",
    image: "/certificates/project1.png",
    tags: ["Bootstrap", "Java Spring", "WebRTC","WebSocket","MySQL"],
    accent: "#c1ffda",
    github: "https://github.com/murari-kris/FluentNest",
    live: "https://fluentnest-w6wl.onrender.com",
  },
  {
    id: 2,
    title: "Portfolio Design",
    category: "React • Js",
   desc: "A high-performance personal portfolio featuring a modular Bento-grid architecture, smooth Framer Motion animations, and a fully responsive glassmorphic UI.",
    image: "/certificates/port.png",
    tags: ["React.jsx"],
    accent: "#a5b4fc",
    github: "https://github.com/murari-kris/Myportfolio",
    live: "https://myportfolio-beta-five-79.vercel.app/about",
  },
  {
  id: 3,
  title: "EventSphere",
  category: "Full-Stack • Web Application",
  desc: "A centralized college campus event hub featuring 1-click registration, automated PDF participation certificates, and dynamic QR-code entry verification.",
  image: "/certificates/project2.png", // Replace with your actual screenshot path if needed
  tags: ["HTML","CSS","Spring Boot", "MySQL","JavaScript"],
  accent: "#7c6ef5", // Matches the signature primary brand color from your stylesheet
  github: "https://github.com/murari-kris/Eventsphere", // Replace with your actual repository URL
  live: "https://eventsphere-e553.onrender.com/", // Replace with your live Render deployment URL once active
}
  
];

const TiltCard = ({ project, index, total, onClick, isTop }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 220, damping: 22 });

  const handleMouseMove = (e) => {
    if (!isTop || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      className="card-motion-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={!isTop ? onClick : undefined}
      style={{
        rotateX: isTop ? rotateX : 0,
        rotateY: isTop ? rotateY : 0,
        zIndex: total - index,
        cursor: isTop ? "default" : "pointer",
      }}
      animate={{
        top: index * 16,
        scale: 1 - index * 0.055,
        rotate: index % 2 === 0 ? index * 2.8 : -(index * 2.8),
        opacity: index > 2 ? 0 : 1 - index * 0.08,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
    >
      <div 
        className="project-card"
        style={{
          border: `1px solid ${isTop ? project.accent + "55" : "rgba(193,255,218,0.07)"}`,
          boxShadow: isTop 
            ? `0 40px 90px rgba(0,0,0,0.65), 0 0 0 1px ${project.accent}18, inset 0 1px 0 ${project.accent}22` 
            : "0 16px 40px rgba(0,0,0,0.45)",
          filter: `brightness(${1 - index * 0.14})`
        }}
      >
        {/* Glow orb */}
        <div className="glow-orb" style={{ background: `radial-gradient(circle, ${project.accent}1a 0%, transparent 70%)` }} />

        <div className="card-header">
          <span className="category-tag" style={{ color: project.accent }}>{project.category}</span>
          <div className="icon-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="social-icon" style={{ '--hover-color': project.accent }}><FaGithub /></a>
            <a href={project.live} target="_blank" rel="noreferrer" className="social-icon" style={{ '--hover-color': project.accent }}><FaExternalLinkAlt /></a>
          </div>
        </div>

        <div className="card-image-wrapper" style={{ background: `linear-gradient(135deg, ${project.accent}12, rgba(255,255,255,0.02))` }}>
          <img src={project.image} alt={project.title} />
          <div className="image-overlay" />
        </div>

        <div className="card-info">
          <h3 className="project-title-text">{project.title}</h3>
          <p className="project-description">{project.desc}</p>

          <div className="tags-container">
            {project.tags.map(tag => (
              <span key={tag} className="tag-pill" style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}28`, color: project.accent }}>
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={project.live} 
            target="_blank" 
            rel="noreferrer" 
            className="live-button"
            style={{ 
              background: `${project.accent}15`, 
              border: `1px solid ${project.accent}35`, 
              color: project.accent,
              '--btn-accent': project.accent 
            }}
          >
            <span className="pulse-dot" style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }} />
            Live View
            <HiOutlinePlay />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = forwardRef((props, ref) => {
  const [stack, setStack] = useState(projects);
  const cycleCard = () => setStack(prev => { const [first, ...rest] = prev; return [...rest, first]; });
  const current = stack[0];

  return (
    <section ref={ref} className="projects-section">
      <div className="projects-grid">
        <div className="projects-left">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="expertise-label">
            EXPERTISE IN ACTION
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="main-heading">
            Crafting <span className="highlight-text">Digital</span> <br /> Systems
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="description-text">
            Each project is a story of problem-solving, architecture decisions, and shipping things that actually work.
          </motion.p>

          <div className="dot-indicators">
            {stack.map((p, i) => (
              <motion.div key={p.id} layout className="dot"
                style={{ background: i === 0 ? current.accent : "rgba(255,255,255,0.1)" }}
                animate={{ width: i === 0 ? 28 : 8 }}
              />
            ))}
          </div>

          <motion.div key={current.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="current-info">
            <p className="current-title">{current.title}</p>
            <p className="current-category">{current.category}</p>
          </motion.div>

          <motion.button 
            onClick={cycleCard} 
            whileHover={{ scale: 1.04 }} 
            whileTap={{ scale: 0.96 }} 
            className="next-button"
            style={{ border: `1px solid ${current.accent}50`, color: current.accent, '--btn-hover-bg': `${current.accent}14` }}
          >
            Next Project <span>→</span>
          </motion.button>
        </div>

        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} className="projects-right">
          {stack.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} total={stack.length} onClick={cycleCard} isTop={index === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;