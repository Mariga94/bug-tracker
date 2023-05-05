import { Link } from "react-router-dom";
import logo30 from "../../assets/images/logo/icons8-bug-30.png";
import "./Navbar.css";
import { createContext, useState } from "react";

interface NavbarProps {
  toggleForm: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo nav-link">
        <img src={logo30} alt="logo" />
        <span className="navbar__title">BugTrc</span>
      </Link>
      <nav className="navbar__menu">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button" onClick={props.toggleForm}>
              Create
            </button>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboards
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" className="nav-link">
              Works
            </Link>
          </li>

          <li className="nav-item">
            <div className="nav-avatar"></div>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
