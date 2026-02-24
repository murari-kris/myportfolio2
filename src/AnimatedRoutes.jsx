import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Education from "./pages/Education";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="slide"
        timeout={400}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/education" element={<Education />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;
