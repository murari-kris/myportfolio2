import React from "react";
import { motion } from "framer-motion";
import "./Education.css"; // Import the separate CSS file

const FILE_ICONS = [
 { emoji: "☕", label: "Java Programming" },
  { emoji: "🌳", label: "Data Structures" },
  { emoji: "⚙️", label: "Design & Analysis of Algorithms" },
  { emoji: "🗄️", label: "Database Management (DBMS)" },
  { emoji: "💻", label: "Operating Systems" },
  { emoji: "🌐", label: "Computer Networks" },
  { emoji: "🏗️", label: "Software Engineering" },
  { emoji: "🤖", label: "Artificial Intelligence" },
  { emoji: "☁️", label: "Cloud Computing" },
  { emoji: "🔒", label: "Cyber Security" },
  { emoji: "🔢", label: "Discrete Mathematics" },
  { emoji: "📱", label: "Full Stack Web Dev" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, type: "spring", stiffness: 200, damping: 22 },
});

const Badge = ({ label, accent }) => (
  <span className="edu-badge" style={{ color: accent, background: `${accent}12`, border: `1px solid ${accent}28` }}>
    {label}
  </span>
);

const YearPill = ({ year, accent }) => (
  <span className="year-pill" style={{ background: `${accent}10`, border: `1px solid ${accent}22`, color: accent }}>
    <span className="year-dot" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
    {year}
  </span>
);

const AccentBar = ({ accent }) => (
  <div className="accent-bar" style={{ background: accent, boxShadow: `0 0 14px ${accent}88` }} />
);

function Education() {
  return (
    <section className="education-section">
      <div className="education-container">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="education-header">
          <span className="header-label">ACADEMIC JOURNEY</span>
          <h1 className="header-title">
            Education & <span className="highlight-text">Growth</span>
          </h1>
          <p className="header-subtext">Education · Growth · Milestones</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* CARD 1 — B.Tech */}
          <motion.div {...fadeUp(0.05)} className="ecard card-btech">
            <AccentBar accent="#c1ffda" />
            <div className="card-glow" style={{ background: "radial-gradient(circle,rgba(193,255,218,0.07) 0%,transparent 70%)" }} />

            <div className="card-content-wrapper">
              <div className="card-main-info">
                <div className="card-top-row">
                  <span className="sparkle">✦</span>
                  <Badge label="Latest" accent="#c1ffda" />
                </div>
                <h2 className="degree-title">
                  Bachelor of Technology <span className="degree-accent">(B.Tech)</span>
                </h2>
                <div className="college-info">
                  <div className="logo-box" style={{ background: "rgba(193,255,218,0.07)", border: "1px solid rgba(193,255,218,0.12)" }}>
                    <img src="/abes.png" alt="ABES" />
                  </div>
                  <span className="college-name">ABES Engineering College, Ghaziabad</span>
                </div>
                <p className="degree-desc">
                  Pursuing B.Tech in Computer Science & Engineering — software engineering, modern web stacks, and system design.
                </p>
                <YearPill year="2024 – 2027" accent="#c1ffda" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2 — Scrolling Icons */}
          <motion.div {...fadeUp(0.1)} className="ecard card-icons">
            <div className="scroll-gradient-top" />
            <div className="scroll-gradient-bottom" />
            <div className="icons-scroll-wrapper">
              <div className="icons-track">
                {[...FILE_ICONS, ...FILE_ICONS].map((f, i) => (
                  <div key={i} className="icon-item">
                    <span className="emoji">{f.emoji}</span>
                    <span className="label">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD 3 — Diploma */}
          <motion.div {...fadeUp(0.15)} className="ecard card-diploma">
            <AccentBar accent="#fda4af" />
            <div className="card-glow" style={{ background: "radial-gradient(circle,rgba(253,164,175,0.08) 0%,transparent 70%)" }} />
            <div className="card-top-row">
              <span className="sparkle" style={{ color: "#fda4af" }}>✦</span>
              <Badge label="Previous" accent="#fda4af" />
            </div>
            <h2 className="degree-title-small">
              Diploma in CSE & <span style={{ color: "#fda4af" }}>Engineering</span>
            </h2>
            <div className="college-info">
              <div className="logo-box" style={{ background: "rgba(253,164,175,0.07)", border: "1px solid rgba(253,164,175,0.12)" }}>
                <img src="/gpp.png" alt="GPP" />
              </div>
              <span className="college-name-small">Government Polytechnic Patna-7</span>
            </div>
            <p className="degree-desc-small">
              Three years of technical training in core CS, networking, and engineering fundamentals.
            </p>
            <YearPill year="2021 – 2024" accent="#fda4af" />
          </motion.div>

          {/* CARD 4 — Bezier */}
          <motion.div {...fadeUp(0.2)} className="ecard card-bezier">
            <div className="card-glow" style={{ background: "radial-gradient(circle,rgba(252,211,77,0.07) 0%,transparent 70%)" }} />
            <div className="card-top-row">
              <span className="sparkle" style={{ color: "#fcd34d" }}>✦</span>
              <Badge label="Visual Design" accent="#fcd34d" />
            </div>
            <p className="degree-desc-small">Crafting precise design paths with intent.</p>
            <svg viewBox="0 0 280 100" className="bezier-svg">
              <line className="ctrl-line" x1="10" y1="80" x2="60" y2="25" />
              <line className="ctrl-line" x1="220" y1="18" x2="265" y2="75" />
              <rect className="ctrl-handle" x="56" y="21" width="7" height="7" />
              <rect className="ctrl-handle" x="216" y="14" width="7" height="7" />
              <circle className="ctrl-handle" cx="10" cy="80" r="3.5" />
              <circle className="ctrl-handle" cx="265" cy="75" r="3.5" />
              <path className="bezier-path" d="M 10 80 C 60 25, 220 18, 265 75" />
              <g className="pen-grp" style={{ offsetPath: "path('M 10 80 C 60 25, 220 18, 265 75')" }}>
                <polygon points="0,-8 4,3 0,1.5 -4,3" fill="#fcd34d" opacity="0.9" />
                <circle cx="0" cy="-10" r="2" fill="#fcd34d" opacity="0.6" />
              </g>
            </svg>
          </motion.div>

          {/* CARD 5 — Secondary School */}
          <motion.div {...fadeUp(0.25)} className="ecard card-school">
            <AccentBar accent="#a5b4fc" />
            <div className="card-glow" style={{ background: "radial-gradient(circle,rgba(165,180,252,0.06) 0%,transparent 70%)" }} />

            <div className="school-flex-container">
              <div className="school-info-left">
                <div className="card-top-row">
                  <span className="sparkle" style={{ color: "#a5b4fc" }}>✦</span>
                  <Badge label="Foundation" accent="#a5b4fc" />
                </div>
                <h2 className="degree-title-mid">
                  10th — <span style={{ color: "#a5b4fc" }}>Secondary School</span>
                </h2>
                <div className="college-info">
                  <div className="logo-box" style={{ background: "rgba(165,180,252,0.07)", border: "1px solid rgba(165,180,252,0.12)" }}>
                    <img src="/school.png" alt="School" />
                  </div>
                  <span className="college-name-small">High School Chainpur, Siwan</span>
                </div>
                <p className="degree-desc-mid">
                  Graduated with strong academic performance and a solid foundation in mathematics, logic, and science.
                </p>
                <YearPill year="2021" accent="#a5b4fc" />
              </div>

              <div className="stats-container">
                {[{ val: "10th", label: "Grade" }, { val: "2021", label: "Year" }, { val: "A+", label: "Result" }].map((s, i) => (
                  <div key={i} className="stat-box">
                    <div className="stat-val">{s.val}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;