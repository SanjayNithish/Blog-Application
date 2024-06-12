import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">Blog App</div>
      <div className="navbar-center">
        <Link to="/blogs" className="navbar-button">
          Blog
        </Link>
        <Link to="/myblogs" className="navbar-button">
          My Blogs
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/register" className="navbar-button">
          Register
        </Link>
        <Link to="/login" className="navbar-button">
          Login
        </Link>
        <Link to="/logout" className="navbar-button">
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
