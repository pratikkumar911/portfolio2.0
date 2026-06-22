import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

//import pp from './components/pp.jpg';

import Projects from './pages/Projects';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';

function App() {
  return (
    <Router>
      <center className="App">
        <div className="background-container">
          <div className="background"></div>
          <div className="background-shade"></div>
          <div className="profile-container">
            <div className="profile-name">Pratik Kumar</div>
            <div className="profile-desc">Full-Stack Developer</div>
            <br />
            <div className="socials">
              <a href="https://github.com/pratikkumar911" target="_blank" rel="noreferrer"><abbr title="My Github" className="fab fa-github"></abbr></a>
              <a href="https://dev.to/pratik_kumar" target="_blank" rel="noreferrer"><abbr title="My Dev" className="fab fa-dev"></abbr></a>
              <a href="https://www.linkedin.com/in/pratik-kumar-4675761aa/" target="_blank" rel="noreferrer"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
              <a href="https://codepen.io/pratik-kumar-the-lessful" target="_blank" rel="noreferrer"><abbr title="My Codepen" className="fab fa-codepen"></abbr></a>
              <a href="https://leetcode.com/loopinfinity0/" target="_blank" rel="noreferrer"><abbr title="My Leetcode" className="fas fa-code"></abbr></a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tabs">
            <NavLink to="/about" end className={({ isActive }) => `about-link${isActive ? ' open' : ''}`}>
              ABOUT
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => `work-link${isActive ? ' open' : ''}`}>
              WORK
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `projects-link${isActive ? ' open' : ''}`}>
              PROJECTS
            </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<WorkExperience />} />
          </Routes>
        </div>
        <div className="footer">
          Made with love by Pratik.
        </div>
        <a className="resume-download" href="https://drive.google.com/file/d/1OUTOfrxojcA2SGFS7hc-E7a3jKRz6OTu/view?usp=sharing" target="_blank" rel="noreferrer">
          My Resume
        </a>
      </center>
    </Router>
  );
}

export default App;
