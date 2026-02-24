import React, { useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import TrainingAchievements from "./components/TrainingAchievements";
import Contact from "./components/Contact";
function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="app-container">
      {/* Side is removed here because About handles its own modern navigation */}
      <div style={{ flex: 1 }}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            timeout={400}
            classNames="slide"
            unmountOnExit
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/trainingachievements" element={<TrainingAchievements />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;