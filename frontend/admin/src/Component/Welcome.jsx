import '../Css_files/Welcome.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-card">
        <header className="welcome-header">
          <span className="status-badge">System Active</span>
          <h1>Welcome to <span>EmpPanel</span></h1>
          <p>The centralized hub for all your workforce operations. Manage, monitor, and streamline your employee data with ease.</p>
        </header>

        <div className="action-grid">
          <div className="action-card">
            <div className="icon-box add">＋</div>
            <h3>Registration</h3>
            <p>Onboard new talent into the system quickly.</p>
            <Link to="/add" className="action-link">Add Employee</Link>
          </div>

          <div className="action-card">
            <div className="icon-box view">👁</div>
            <h3>Database</h3>
            <p>Access and update existing employee records.</p>
            <Link to="/view" className="action-link">View Directory</Link>
          </div>
        </div>

        <footer className="welcome-footer">
          <p>Logged in as <strong>Administrator</strong></p>
          </footer>
        </div>
      </div>
  );
};

export default Welcome;