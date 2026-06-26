import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css_files/Signup.css";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const response = await axios.post(
        "https://emp-management-backend-nhg4.onrender.com/api/saveUser",
        {
          name,
          email,
          password,
        },
      );
      console.log(response.data);
      alert("User registration success");
      navigate("/signin");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3>Create Account</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Register
          </button>

          <p className="login-text">
            Have an account? <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
