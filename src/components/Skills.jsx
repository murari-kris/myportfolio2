import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  {
    name: 'Frontend Development',
    sub: 'HTML . React . JavaScript · Tailwind CSS',
    level: 90,
    tag: 'Expert',
    icon: '⚡',
    color: '#7F77DD',
    colorLight: '#a9a3f0',
    colorDark: '#534AB7',
    branches: ['React','SpringBoot','Bootstrap', 'Tailwind'],
  },
  {
    name: 'Backend & APIs',
    sub: 'Java · SpringBoot · REST · JWT',
    level: 85,
    tag: 'Advanced',
    icon: '🔧',
    color: '#1D9E75',
    colorLight: '#5DCAA5',
    colorDark: '#0F6E56',
   
    branches: ['Java', 'Python', 'c++','c'],
  },
  {
    name: 'Database & ORM',
    sub: 'Oracle · MySQL',
    level: 80,
    tag: 'Advanced',
    icon: '🗄️',
    color: '#EF9F27',
    colorLight: '#FAC775',
    colorDark: '#854F0B',
   
    branches: ['MySql', 'Oracle'],
  },
  {
    name: 'Languages',
    sub: 'Java · Python · C . C++',
    level: 88,
    tag: 'Proficient',
    icon: '💻',
    color: '#378ADD',
    colorLight: '#85B7EB',
    colorDark: '#185FA5',
    
    branches: ['Git', 'STS', 'IntelliJ','VScode'],
  },
  {
    name: 'Design & Tools',
    sub: 'Figma · Adobe XD · Wireframe',
    level: 75,
    tag: 'Intermediate',
    icon: '🎨',
    color: '#D85A30',
    colorLight: '#F0997B',
    colorDark: '#993C1D',
    
    branches: ['Figma', 'UX/UI'],
  },
];

const BRANCH_Y = [88, 163, 238, 313, 388];

function SkillTree() {
  const fillRefs = useRef([]);
  const pctRefs  = useRef([]);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        skills.forEach((skill, i) => {
          setTimeout(() => {
            if (cardRefs.current[i]) cardRefs.current[i].classList.add('visible');

            setTimeout(() => {
              if (fillRefs.current[i]) {
                fillRefs.current[i].style.width = `${skill.level}%`;
                fillRefs.current[i].classList.add('lit');
              }
              let count = 0;
              const step = Math.ceil(skill.level / 45);
              const iv = setInterval(() => {
                count = Math.min(count + step, skill.level);
                if (pctRefs.current[i]) pctRefs.current[i].textContent = `${count}%`;
                if (count >= skill.level) clearInterval(iv);
              }, 30);
            }, 200);
          }, i * 100);
        });

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="bg-grid" />
      <div className="bg-orb bg-orb--purple" />
      <div className="bg-orb bg-orb--teal" />

      <div className="skills-layout">

        {/* LEFT: Tree */}
        <div className="tree-col">
          <div className="tree-title-box">
            <span>My Skills</span>
          </div>

          <svg className="tree-svg" viewBox="0 0 210 440" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7F77DD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7F77DD" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <line
              x1="88" y1="42" x2="88" y2="415"
              stroke="url(#trunkGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="trunk-dash"
            />

            {skills.map((skill, i) => {
              const cy = BRANCH_Y[i];
              const count = skill.branches.length;
              const spacing = 14;
              const startOff = -Math.floor(count / 2) * spacing;
              return (
                <g key={i}>
                  <path d={`M88 ${cy} Q108 ${cy} 118 ${cy}`} stroke={skill.color} strokeWidth="1.2" fill="none" opacity="0.7" />
                  <line x1="118" y1={cy} x2="175" y2={cy} stroke={skill.color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <circle cx="175" cy={cy} r="7" fill={skill.color} opacity="0.15" />
                  <circle cx="175" cy={cy} r="4" fill={skill.color} opacity="0.9" />

                  {skill.branches.map((label, j) => {
                    const dy = startOff + j * spacing;
                    return (
                      <g key={j}>
                        <line x1="88" y1={cy} x2="52" y2={cy + dy} stroke={skill.color} strokeWidth="0.7" opacity="0.3" />
                        <text x="49" y={cy + dy + 3} textAnchor="end" fontSize="9" fill={skill.color} opacity="0.55" fontFamily="Space Grotesk, sans-serif">
                          {label}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        {/* RIGHT: Skill Cards */}
        <div className="skills-col">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skill-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="skill-top">
                <div className="skill-left">
                  <div className="skill-icon" style={{ background: `${skill.color}22` }}>
                    {skill.icon}
                  </div>
                  <div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-sub">{skill.sub}</div>
                  </div>
                </div>
                <span
                  className="skill-badge"
                  style={{ background: `${skill.color}22`, color: skill.colorLight, border: `1px solid ${skill.color}40` }}
                >
                  {skill.tag}
                </span>
              </div>

              <div className="bar-wrap">
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    ref={(el) => (fillRefs.current[i] = el)}
                    style={{ background: `linear-gradient(90deg, ${skill.colorDark}, ${skill.colorLight})` }}
                  />
                </div>
                <span
                  className="bar-pct"
                  ref={(el) => (pctRefs.current[i] = el)}
                  style={{ color: skill.colorLight }}
                >
                  0%
                </span>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillTree;