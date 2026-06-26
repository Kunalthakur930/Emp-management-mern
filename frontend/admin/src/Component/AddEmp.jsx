import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Css_files/AddEmp.css"; // CSS file import ki hai

export default function AddEmp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [role, setrole] = useState("");
  const [age, setage] = useState("");

  const handlesubmit = async (s) => {
    s.preventDefault();
    const response = await axios.post(
      "https://emp-management-backend-nhg4.onrender.com/emp/saveEmp",
      {
        name,
        email,
        salary,
        role,
        age,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      },
    );
    alert(response.data.message);
    console.log(response);
    setname("");
    setemail("");
    setsalary("");
    setrole("");
    setage("");
  };

  return (
    <div className="add-emp-container">
      <div className="add-emp-card">
        <div className="add-emp-header">
          <h2>Add New Employee</h2>
          <p>Enter the details to register a new employee in the system.</p>
        </div>

        <form className="add-emp-form" onSubmit={handlesubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                value={name}
                onChange={(s) => setname(s.target.value)}
                type="text"
                placeholder="e.g. Rahul Sharma"
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                value={email}
                onChange={(s) => setemail(s.target.value)}
                type="email"
                placeholder="rahul@company.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Job Role</label>
              <input
                value={role}
                onChange={(s) => setrole(s.target.value)}
                type="text"
                placeholder="e.g. Developer"
                required
              />
            </div>
            <div className="form-group">
              <label>Monthly Salary</label>
              <input
                value={salary}
                onChange={(s) => setsalary(s.target.value)}
                type="text"
                placeholder="e.g. 50000"
                required
              />
            </div>
          </div>

          <div className="form-group age-input">
            <label>Age</label>
            <input
              value={age}
              onChange={(s) => setage(s.target.value)}
              type="text"
              placeholder="e.g. 25"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Register Employee
          </button>
        </form>
      </div>
    </div>
  );
}
