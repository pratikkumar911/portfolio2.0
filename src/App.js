import React from 'react';
import {BrowserRouter as Router, Route , Switch, Link } from 'react-router-dom';

//import pp from './components/pp.jpg';

import Projects from './pages/Projects';
import About from './pages/About';

function App() {
    return (
    <Router>
      <Switch>
        <center className="App">
          <div className="background-container">
            <div className="background"></div>
            <div className="background-shade"></div>
            <div className="profile-container">
              <div className="profile-name">Pratik Kumar</div>
              <div className="profile-desc">Web Developer & Loves Leetcode</div>
              <br />
              <div className="socials">
                <a href="https://github.com/pratikkumar911" target="_blank" rel = "noreferrer"><abbr title="My Github" className="fab fa-github"></abbr></a>
                <a href="https://dev.to/pratik_kumar" target="_blank" rel = "noreferrer"><abbr title="My Dev" className="fab fa-dev"></abbr></a> 
                <a href="https://www.linkedin.com/in/pratik-kumar-4675761aa/" target="_blank" rel = "noreferrer"><abbr title="My LinkedIn" className="fab fa-linkedin"></abbr></a>
                <a href="https://codepen.io/pratik-kumar-the-lessful" target="_blank" rel = "noreferrer"><abbr title="My Codepen" className="fab fa-codepen"></abbr></a>
                <a href="https://drive.google.com/file/d/1lR7s10IFFZrGkSSVHGuMw4R6tNXe37v6/view?usp=sharing" target="_blank" rel = "noreferrer"><abbr title="My Resume" className="far fa-file-pdf"></abbr></a>
                <a href="https://leetcode.com/loopinfinity0/" target="_blank" rel = "noreferrer"><abbr title="My Leetcode" className="fas fa-code"></abbr></a>
              </div>
            </div>
          </div>
          <div className="container">
              <div className="tabs">
              <Link to="/about" className="about-link open">ABOUT</Link>
                <Link to="/projects" className="projects-link">PROJECTS</Link>
              </div>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
          </div>
          <div className="footer">
            Made with love by Pratik.
          </div>
        </center>
      </Switch>
    </Router>
  );
}

export default App;
