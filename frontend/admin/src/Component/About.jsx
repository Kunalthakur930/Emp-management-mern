import React from 'react';
import '../Css_files/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content-card">
        {/* Title Section */}
        <div className="about-header">
          <h1>About Employee Manager</h1>
          <p>A comprehensive platform for modern workforce management and data handling.</p>
        </div>

        <hr className="divider" />

        {/* Features Section */}
        <section className="about-section">
          <h2>Project Functionalities</h2>
          <div className="feature-grid">
            <div className="feature-box">
              <h4>Employee Management</h4>
              <p>Easily add new employees, view complete profiles, and maintain a structured database of your organization.</p>
            </div>
            <div className="feature-box">
              <h4>Data Updates</h4>
              <p>Quickly edit and update employee information such as roles, departments, or contact details with instant sync.</p>
            </div>
            <div className="feature-box">
              <h4>Database Maintenance</h4>
              <p>Delete outdated or redundant records securely to ensure your system remains accurate and clean.</p>
            </div>
            <div className="feature-box">
              <h4>User Interface</h4>
              <p>A fully responsive design that works across all devices, ensuring accessibility for admins on the go.</p>
            </div>
          </div>
        </section>

        {/* Project Goal */}
        <section className="about-section">
          <h2>Our Objective</h2>
          <p className="objective-text">
            The core objective of this project is to streamline HR workflows by providing a digital alternative to traditional manual systems. It focuses on reducing data entry errors and providing a fast, reliable way to handle employee lifecycles within an organization.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;