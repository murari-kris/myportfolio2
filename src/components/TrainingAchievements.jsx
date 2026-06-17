import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaCheckCircle, FaTrophy } from "react-icons/fa";
import "./TrainingAchievements.css";

const achievements = [
  {
    title: "Academic Excellence - 2nd Position",
    org: "Diploma-SBTE Board",
    date: "Gold Medalist",
    desc: "Secured the trophy for 1st position in Diploma.",
    link: "/certificates/academic.jpeg",
    icon: <FaTrophy />,
    accent: "#fcd34d",
    tag: "Award",
  },
  {
    title: "GenPowerd Data Analytics",
    org: "Forage",
    date: "2024",
    desc: "Professional certification in Data Analytics.",
    link: "/certificates/forage.png",
    icon: <FaAward />,
    accent: "#c1ffda",
    tag: "Certification",
  },
  {
    title: "HCL Hackathon Certificate",
    org: "Guvi HCL",
    date: "Participant",
    desc: "Recognized for innovative problem-solving.",
    link: "/certificates/hackathon.jpeg",
    icon: <FaAward />,
    accent: "#a5b4fc",
    tag: "Hackathon",
  },
  {
    title: "Java Training Certification",
    org: "Internship Program",
    date: "2023",
    desc: "Advanced training in Java Core.",
    link: "/certificates/internship.jpeg",
    icon: <FaCheckCircle />,
    accent: "#fda4af",
    tag: "Training",
  },
];

const CascadeCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -120, opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -6 : 6 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="achieve-card-wrapper"
    >
      <div className="achieve-card" style={{ "--accent": item.accent }}>
        <div className="achieve-left-bar" />
        <div className="achieve-glow" />

        <div className="achieve-icon-box">{item.icon}</div>

        <div className="achieve-content">
          <div className="achieve-top-row">
            <span className="achieve-tag">{item.tag}</span>
            <span className="achieve-date">{item.date}</span>
          </div>

          <h3 className="achieve-title">{item.title}</h3>

          <p className="achieve-org">
            <FaCheckCircle className="check-icon" /> {item.org}
          </p>

          <p className="achieve-desc">{item.desc}</p>

          <a href={item.link} target="_blank" rel="noreferrer" className="achieve-btn">
            Verify Achievement <FaExternalLinkAlt className="link-icon" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

function TrainingAchievements() {
  return (
    <section className="achieve-section">
      <div className="achieve-container">
        <div className="achieve-header">
          <span className="achieve-label">MILESTONES & RECOGNITION</span>
          <h2 className="achieve-main-title">
            Training & <span className="highlight">Achievements</span>
          </h2>
          <p className="achieve-subtext">
            Certifications, awards, and training programs that shaped my technical journey.
          </p>
        </div>

        <div className="achieve-list">
          {achievements.map((item, index) => (
            <CascadeCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingAchievements;