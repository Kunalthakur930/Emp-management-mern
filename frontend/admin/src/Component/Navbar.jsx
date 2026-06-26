
import "../Css_files/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-box">
      <div className="navbar-name">
        <h2>EMP<span>Manager</span></h2>
      </div>
      <div className="navbar-options">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link signin-btn" to="/signin">Signin</Link>
        <Link className="nav-link signup-btn" to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;