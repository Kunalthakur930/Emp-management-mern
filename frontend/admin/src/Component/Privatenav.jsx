import "../Css_files/Privatenav.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
const Privatenav = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="p-navbar">
      <div className="p-nav-container">
        <div className="p-logo">
          <div className="p-logo-dot"></div>
          <h2>
            Emp<span>Panel</span>
          </h2>
        </div>

        <div className="p-links-wrapper">
          <Link to="/add" className="p-nav-link">
            Add Employee
          </Link>
          <Link to="/view" className="p-nav-link">
            View All Employees
          </Link>
          <button className="p-logout-action" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Privatenav;
