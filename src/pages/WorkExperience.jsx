import React from 'react';

function WorkExperience() {

  return (
    <div className="work-page">
      <h2>Work Experience</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <span className="timeline-date">04/2024 - 05/2026</span>
            <h3>Software Engineer | JumpCloud, Remote</h3>
            <ul>
              <li>Built a multi-tenant identity delegation system enabling parent orgs to propagate directories, Google Workspace, and SSO apps to child orgs, contributing to a 15% increase in ARR.</li>
              <li>Implemented role-based access control (RBAC) on the frontend, building permission-aware UI components and route guards to manage feature visibility and access across user groups.</li>
              <li>Reduced website loading time by 20% through a complete dashboard redesign, delivering a faster, cleaner, and more modern user experience.</li>
              <li>Contributed to migrating a monolithic frontend into independent Micro Frontend (MFE) modules, enabling separate team ownership and deployments while doubling feature delivery speed.</li>
              <li>Proactively resolved 10+ security vulnerabilities by upgrading outdated dependencies and refactoring existing code, resulting in safer and more stable releases.</li>
              <li>Developed company-wide frontend components used across multiple teams, improving design consistency and reducing duplicated development effort.</li>
              <li>Mentored junior engineers on frontend development and debugging practices, accelerating onboarding and increasing team productivity.</li>
            </ul>
            <p className="timeline-tech">Technologies: Vue.js, Javascript, TypeScript, Go, Docker, Kubernetes, AWS, Datadog, PostgreSQL, MongoDB.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <span className="timeline-date">09/2023 - 03/2024</span>
            <h3>Product Engineer | EdgeVerve, Bangalore, India</h3>
            <ul>
              <li>Built common login and signup UI components that were reused across different platforms and projects, cutting development effort.</li>
              <li>Created REST APIs for an internal reporting tool that tracked and displayed training session data, enabling teams to access structured insights without manual effort.</li>
            </ul>
            <p className="timeline-tech">Technologies: React.js, Javascript, Node.js, Express.js, REST APIs, MongoDB.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <span className="timeline-date">01/2023 - 06/2023</span>
            <h3>SDET Intern | Amazon, Bangalore, India</h3>
            <ul>
              <li>Developed a QA analytics dashboard using React.js, integrating internal AWS deployment tooling to visualize testing metrics and historical defect trends, saving 5 hours/week in manual reporting.</li>
              <li>Developed and maintained automated test suites using Python, Selenium WebDriver, and PyTest, covering 50+ manual test cases, reducing testing effort by 30% and enabling faster, more reliable releases.</li>
            </ul>
            <p className="timeline-tech">Technologies: React.js, TypeScript, Node.js, Express.js, Python, REST APIs, MongoDB.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
