import React from 'react';
import { Link } from 'react-router-dom';
import '../Css_files/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Simplify Your <span>Workforce</span> Management</h1>
        <p>Effortlessly track employee records, manage departments, and streamline your HR operations in one place.</p>
        <div className="hero-btns">
          <Link to="/signup" className="btn-primary">Get Started</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>150+</h3>
          <p>Total Employees</p>
        </div>
        <div className="stat-card">
          <h3>12</h3>
          <p>Departments</p>
        </div>
        <div className="stat-card">
          <h3>99%</h3>
          <p>Data Accuracy</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h4>Employee Profiles</h4>
            <p>Maintain detailed records of every employee with ease.</p>
          </div>
          <div className="feature-item">
            <h4>Secure Sign-in</h4>
            <p>Industry-standard authentication for your data safety.</p>
          </div>
          <div className="feature-item">
            <h4>Real-time Updates</h4>
            <p>Update information and see changes instantly across the dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;