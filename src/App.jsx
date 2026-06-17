import React, { useRef } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TrainingAchievements from "./components/TrainingAchievements";
import Contact from "./components/Contact";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const trainRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-container">
      {/* CRITICAL: Pass the ref DIRECTLY to the component.
         Inside Projects.jsx, you must use React.forwardRef or 
         simply attach the ID to the top-level div in that component.
      */}
      <div ref={aboutRef}><About onNavigate={scrollToSection} refs={{ aboutRef, projectsRef, skillsRef, eduRef, trainRef, contactRef }} /></div>
      
      {/* This is the section that needs to be "tall" for sticky to work */}
      <div ref={projectsRef} style={{ display: 'block', overflow: 'visible' }}>
  <Projects />
</div>
      
      <div ref={skillsRef}><Skills /></div>
      <div ref={eduRef}><Education /></div>
      <div ref={trainRef}><TrainingAchievements /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}
export default App;